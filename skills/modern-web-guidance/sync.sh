#!/usr/bin/env bash
# Materialise Google Chrome's Modern Web Guidance corpus inside this skill.
#
# The corpus is 209 markdown guides (1.97 MB). It is gitignored on purpose:
# pi-state carries this script and SKILL.md, not the payload. A new host runs
# this once and the skill works offline from then on.
#
# Upstream: https://github.com/GoogleChrome/modern-web-guidance (Apache-2.0)
#
#   sync.sh            install the pinned corpus (needs network once)
#   sync.sh --latest   resolve upstream main, install it, print the sha to pin
#   sync.sh --check    verify the local corpus, exit 1 when missing or damaged
#
# note: the pin is a commit sha on purpose. Guides change without an npm
# version bump, so a tag or "main" is not reproducible across hosts.
set -euo pipefail

REPO="GoogleChrome/modern-web-guidance"
PIN_SHA="4dd968349e54ca45a05dd5c818fb035c9054b022"
EXPECTED_GUIDES=209

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GUIDES="$HERE/guides"
INDEX="$HERE/INDEX.md"
WORK=""

die() { printf 'sync: %s\n' "$1" >&2; exit 1; }

cleanup() {
  if [[ -n "$WORK" && -d "$WORK" ]]; then rm -rf "$WORK"; fi
  return 0
}
trap cleanup EXIT

need_tools() {
  local missing=() t
  for t in curl tar awk find sed sort; do
    command -v "$t" >/dev/null 2>&1 || missing+=("$t")
  done
  ((${#missing[@]} == 0)) || die "missing required tools: ${missing[*]}"
}

resolve_latest() {
  local json
  json="$(curl -fsSL "https://api.github.com/repos/$REPO/commits/main")" \
    || die "GitHub API unreachable, check the network"
  printf '%s\n' "$json" \
    | awk '/"sha": *"[0-9a-f]{40}"/{ if (!seen) { match($0, /[0-9a-f]{40}/); print substr($0, RSTART, 40); seen = 1 } }'
}

# Rows are "discipline<TAB>id<TAB>title", sorted by discipline then id.
collect_rows() {
  local rows="$1" f disc id title
  : >"$rows"
  while IFS= read -r f; do
    disc="$(basename "$(dirname "$f")")"
    id="$(basename "$f" .md)"
    title="$(awk '/^# /{ sub(/^# /, ""); print; exit }' "$f")"
    [[ -n "$title" ]] || die "guide without a '# ' title: $f"
    printf '%s\t%s\t%s\n' "$disc" "$id" "$title" >>"$rows"
  done < <(find "$GUIDES" -type f -name '*.md' | LC_ALL=C sort)
}

build_index() {
  local sha="$1" rows count
  rows="$(mktemp)"
  collect_rows "$rows"

  count="$(wc -l <"$rows" | tr -d ' ')"
  {
    printf '# Modern Web Guidance index\n\n'
    printf '%s guides, pinned at %s.\n' "$count" "${sha:0:7}"
    printf 'Upstream: https://github.com/GoogleChrome/modern-web-guidance (Apache-2.0, Google Chrome).\n\n'
    printf 'Read a guide with the file directly, never with the upstream npx CLI:\n'
    printf '`skills/modern-web-guidance/guides/<discipline>/<id>.md`\n\n'
    awk -F'\t' '
      { d[NR] = $1; i[NR] = $2; t[NR] = $3; n[$1]++
        if ($1 != last) { order[++k] = $1; last = $1 } }
      END {
        for (g = 1; g <= k; g++) {
          if (g > 1) print ""
          printf "## %s (%d)\n", order[g], n[order[g]]
          for (j = 1; j <= NR; j++) if (d[j] == order[g]) printf "- `%s`: %s\n", i[j], t[j]
        }
      }' "$rows"
  } >"$INDEX"
  rm -f "$rows"

  printf 'sync: indexed %s guides into %s\n' "$count" "$INDEX"
  if [[ "$count" != "$EXPECTED_GUIDES" ]]; then
    printf 'sync: %s guides upstream, EXPECTED_GUIDES is %s, update it\n' \
      "$count" "$EXPECTED_GUIDES" >&2
  fi
}

install_corpus() {
  local sha="$1" root
  [[ "$sha" =~ ^[0-9a-f]{40}$ ]] || die "not a 40 character commit sha: $sha"

  WORK="$(mktemp -d)"
  printf 'sync: fetching %s at %s\n' "$REPO" "${sha:0:7}"
  curl -fsSL "https://codeload.github.com/$REPO/tar.gz/$sha" -o "$WORK/src.tgz" \
    || die "download failed, check the network or pass --latest"

  tar xzf "$WORK/src.tgz" -C "$WORK" || die "corrupt archive"
  root="$WORK/modern-web-guidance-$sha"
  [[ -d "$root/skills/modern-web-guidance/guides" ]] \
    || die "archive has no skills/modern-web-guidance/guides, upstream layout changed"

  rm -rf "$GUIDES"
  mv "$root/skills/modern-web-guidance/guides" "$GUIDES"
  build_index "$sha"
  printf 'sync: installed %s guides at %s\n' \
    "$(find "$GUIDES" -type f -name '*.md' | wc -l | tr -d ' ')" "${sha:0:7}"
}

check_corpus() {
  if [[ ! -d "$GUIDES" ]]; then
    printf 'check: corpus missing, run: bash %s\n' "${BASH_SOURCE[0]}" >&2
    return 1
  fi
  local count bad=0 f
  count="$(find "$GUIDES" -type f -name '*.md' | wc -l | tr -d ' ')"
  if [[ "$count" != "$EXPECTED_GUIDES" ]]; then
    printf 'check: found %s guides, expected %s\n' "$count" "$EXPECTED_GUIDES" >&2
    bad=1
  fi
  while IFS= read -r f; do
    [[ -s "$f" ]] || { printf 'check: empty guide %s\n' "$f" >&2; bad=1; }
  done < <(find "$GUIDES" -type f -name '*.md' | LC_ALL=C sort)
  [[ -f "$INDEX" ]] || { printf 'check: INDEX.md missing, rerun sync\n' >&2; bad=1; }
  ((bad == 0)) || return 1
  printf 'check: ok, %s guides, index present\n' "$count"
}

case "${1:-}" in
  "" | --install) need_tools; install_corpus "$PIN_SHA" ;;
  --latest)
    need_tools
    latest="$(resolve_latest)"
    [[ -n "$latest" ]] || die "could not resolve the upstream main sha"
    install_corpus "$latest"
    printf 'sync: upstream main is %s, set PIN_SHA to it when the corpus is good\n' "$latest"
    ;;
  --check) check_corpus ;;
  -h | --help) sed -n '2,15p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//' ;;
  *) die "unknown argument: $1" ;;
esac
