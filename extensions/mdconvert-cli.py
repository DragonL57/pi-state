#!/home/thelong/.venvs/markitdown-venv/bin/python
"""mdconvert CLI: convert files, directories or URLs to Markdown with MarkItDown.

This is the CLI wrapped by ~/.pi/agent/extensions/mdconvert.ts. The contract that
extension expects:

  mdconvert <source> [-f] [-o OUT]

  local file   writes <stem>.md next to the source (or OUT), prints that path on
               stdout. If the output already exists and -f is absent, prints
               "skip: <path>" on stdout and stderr and exits 0 without touching it.
  directory    converts the non-text files directly inside it (not recursive),
               prints each written path on stdout, and "skip: <path>" or
               "error: ..." lines on stderr. Per-file failures do not abort the run.
               Distinct sources sharing a stem in one batch get -2, -3 suffixes.
  url          writes <host>-<slug>.md in the working directory.
  failure      message on stderr, exit 1.

Rebuild the venv and this file with extensions/mdconvert-setup.sh.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

from markitdown import MarkItDown

# Extensions MarkItDown only passes through as text, so converting them to .md
# in a directory batch would just duplicate content.
PASSTHROUGH = {".md", ".markdown", ".txt", ".text", ".log"}


def default_output(source: Path) -> Path:
    """<stem>.md next to the source, matching the extension's defaultOutputPath."""
    return source.with_suffix(".md")


def url_output(url: str) -> Path:
    """Mirror the extension's urlOutputPath so both sides name the same file."""
    parsed = urlparse(url)
    host = (parsed.hostname or "url").replace(".", "-")
    tail = parsed.path.lstrip("/").replace("/", "-") or "index"
    base = re.sub(r"[^A-Za-z0-9._-]", "-", tail)[:120].strip("-")
    return Path(f"{host}-{base or 'url'}.md")


def convert_to(source: str, out: Path, converter: MarkItDown) -> None:
    """Convert one source and write the Markdown to out."""
    if source.startswith(("http://", "https://")):
        if hasattr(converter, "convert_url"):
            result = converter.convert_url(source)
        else:
            result = converter.convert(source)
    else:
        local = Path(source[7:]) if source.startswith("file://") else Path(source)
        if not local.exists():
            raise FileNotFoundError(f"no such file: {local}")
        result = converter.convert(str(local))

    text = result.text_content or ""
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(text, encoding="utf-8")


def handle_single(source: str, out: Path, force: bool, converter: MarkItDown) -> int:
    if out.exists() and not force:
        # Both streams: the extension reads stdout to pick the file, stderr to
        # know the content was reused rather than regenerated.
        print(f"skip: {out}")
        print(f"skip: {out}", file=sys.stderr)
        return 0
    convert_to(source, out, converter)
    print(out.resolve())
    return 0


def handle_directory(source: str, force: bool, converter: MarkItDown) -> int:
    root = Path(source)
    if not root.is_dir():
        raise NotADirectoryError(f"not a directory: {root}")

    files = sorted(
        p
        for p in root.iterdir()
        if p.is_file() and p.suffix.lower() not in PASSTHROUGH and p.suffix.lower() != ".md"
    )
    if not files:
        print(f"no convertible files in {root}", file=sys.stderr)
        return 0

    taken: set[Path] = set()
    for path in files:
        base = default_output(path)
        out = base
        suffix = 2
        while out in taken:
            out = base.with_name(f"{base.stem}-{suffix}{base.suffix}")
            suffix += 1
        if out.exists() and not force:
            print(f"skip: {path.name} -> {out}", file=sys.stderr)
            continue
        try:
            convert_to(str(path), out, converter)
        except Exception as exc:  # one bad file must not lose the whole batch
            print(f"error: {path}: {exc}", file=sys.stderr)
            continue
        taken.add(out)
        print(out.resolve())
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(
        prog="mdconvert",
        description="Convert a file, directory or URL to Markdown via MarkItDown.",
    )
    parser.add_argument("source", help="file, directory or http(s) URL")
    parser.add_argument("-f", "--force", action="store_true", help="overwrite an existing .md output")
    parser.add_argument("-o", "--output", help="explicit output path (single file only)")
    args = parser.parse_args()

    source = args.source
    is_url = source.startswith(("http://", "https://", "file://", "data:"))
    converter = MarkItDown(enable_plugins=False)

    try:
        if args.output:
            if not is_url and Path(source).is_dir():
                raise ValueError("-o is only valid for a single file, not a directory")
            return handle_single(source, Path(args.output), args.force, converter)

        if is_url:
            return handle_single(source, url_output(source), args.force, converter)

        if Path(source).is_dir():
            return handle_directory(source, args.force, converter)

        return handle_single(source, default_output(Path(source)), args.force, converter)
    except Exception as exc:
        print(f"error: {type(exc).__name__}: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
