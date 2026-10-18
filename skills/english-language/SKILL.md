---
name: "english-language"
description: "English writing skill: register per content type, terminology, sentence patterns, banned AI patterns. Load before writing English text."
---

# English: the complete language skill

Load this before writing, answering, documenting, rewriting, or translating any English text. For Vietnamese writing use `viet-language` instead; do not carry English rules into Vietnamese or the reverse.

English is not translated from Vietnamese. Each content type has its own terminology, connectives, and sentence shapes. Build the English from real English sources in the same genre, never by rendering the Vietnamese sentence word for word.

## 1. Core gates: do not write before these pass

- Register gate: match the register to the content type with the table below. Do not write technical documentation in blog register, or a paper in chat register.
- Source gate: read the task's own source material and list its exact terms and phrasings. Source terms override any generic field list.
- Samples gate: read 2-3 real English texts in the same genre and on the same topic: official documentation, papers, well-edited prose. Extract how they open, define, which connectives they use, sentence structures, terminology.
- Voice gate: do not invent a voice or a flowery style the genre does not call for. Write with the patterns extracted at the samples gate.
- Fact rule: do not invent a fact. A name, number, date, quote, citation, or ranking must come from the source or the user. If a sentence needs a missing detail, ask or write a simpler sentence. You may state an opinion when the text type calls for one, never a factual claim. Fiction is exempt.

| Content type | English register and reference |
|---|---|
| Concept books, philosophy, popular science | Careful academic essay, plain language (university-press prose, recognized essayists) |
| Research papers, scientific journals | Formal scientific register, tight definitions, hedged claims |
| Blogs, content marketing | Journalistic plus SEO, from real industry blogs |
| Technical documentation, README, changelogs | Plain, neutral, describes current behavior only; mention the previous version only in changelogs and migration guides |
| Emails, chat replies, agent answers | Direct: answer first, then reasoning; one ask per message |
| Literary essays | Literary prose, figurative language allowed |

## 2. Research process, terminology, sentences

1. Find real English texts in the same genre and on the same topic. Use web search with English keywords: concept name + "definition", "documentation", "paper".
2. Build the standard term list of the field and use those exact terms. Do not paraphrase a field's terms into looser words; consistency beats variety. Use one name per thing across the whole text (no synonym cycling: do not alternate "the service", "the endpoint", "the API" for one thing).
3. Extract the sentence patterns of the genre and reuse them. In technical and reference English: subject-verb-object, plain verbs, one idea per sentence, definitions in the form "X is ...".
4. Build the connective set of formal English: however, therefore, for example, in other words, first/second/third, on the other hand, in practice, by contrast. Use a connective once; do not stack them.

Term rules:

1. No term substitution. Do not replace a term with a general-language word or a more general term ("measurement error" → "mistake"); this is the determinologization process (Nová 2018). Popularizing texts may generalize an expert term only deliberately: keep the field term first, explained, then the plainer wording.
2. No merged concepts. When the domain separates two concepts (data / information; validity / reliability; accuracy / precision), keep the separation. Using one designation for the other concept is an inaccurate definition (ISO 704 6.5.3), even when the sentence still reads smoothly.
3. Define before use. A polysemous or cross-domain term ("information", "model") gets an intensional definition in the text's own frame: superordinate concept plus delimiting characteristics (ISO 704 6.2-6.3), with the domain or subject stated (ISO 704 6.4.6). The definition must pass the substitution principle: it can replace the term in context without changing the meaning (ISO 704 6.4.4).
4. One designation per concept. Keep term rendering consistent across the whole document. Where the field has competing variants (preferred term vs admitted term, ISO 10241-1), take the source's choice and hold it.
5. Before delivering, check every term against the source: no substitution, no merged concept, no dropped definition, no unannounced variant.

## 3. Word choice

- Prefer plain verbs: is, are, has, do, use, need. Avoid the inflated substitutes serves as, stands as, boasts, features, offers, leverages, utilizes, facilitates.
- Direct declarative sentences: state the claim first, then the evidence. Example: "Data does not occur naturally; it is created."
- Academic hedging where the register calls for it: "may", "suggests", "in this reading", "as the following section shows".
- Exact terminology, including Latin and Greek terms where the field uses them; do not simplify a term the reader needs to learn.
- Figurative language (metaphor, rhythm) only when the register calls for it (literary prose); not in academic or technical writing.
- In bilingual text, each language stands on its own. The English paragraph does not repeat what the Vietnamese sentence above it already stated (book title, author, publisher, link, full proper names); it carries the meaning again in the natural short form.

## 4. Banned patterns (AI tells)

The ban list is in `references/banned-patterns.md`. Read it before writing or rewriting, and check the finished text against it. It holds the 35 Humanizer patterns with before/after examples, the do-not-over-flag list, and the rewrite-check process.

The tells to catch first: inflated claims of importance and legacy, shallow analysis with -ing tail phrases, sales language, vague sources with no name, chatbot text and closings, fake "deeper truth" openers, fake-candid openers, em dashes and en dashes, bold text without a reason, title case in headings, emojis.

## 5. Every sentence must add information

- Delete any sentence the reader gains nothing from: no new fact, no new context, no new relation, or a restatement of the previous sentence.
- A hanging phrase must name what it modifies; if it cannot, delete it.
- Ask each sentence what the reader knows now that they did not before. Sentences without an answer get deleted.
- No label-plus-colon flow in prose: do not open a topic with a label and a colon then a paragraph. State the topic inside the sentence.

## 6. Structure and revision

Blog (only when the register is blog/content marketing):

- Title: concrete benefit plus curiosity, under 70 characters.
- Opening: answer directly in the first 100 words, PAS (Problem, Agitate, Solve) or APP (Agree, Promise, Preview).
- Body: 3-5 main headings, each answering one sub-question; example, number, or image every ~300 words.
- Ending: one clear call to action.

Research papers and theses:

- The literature review compares and critiques the sources: what is known, what is missing, what this work adds. Do not summarize source after source.
- Build it as an hourglass: open from the broad context down to the specific question, close from your own result out to meaning, limits, and the next question.
- Carry few claims and work each one deeply; length is not quality.
- Write the first draft early, while the work is still running; the first draft is never the final one.

Non-fiction book chapter (knowledge-type books):

- Each chapter answers one reader question.
- Order: definition or concept (2-3 sentences) → example or case study → analysis → evidence → how to apply → bridge to the next chapter.
- Chapters of 2,500-10,000 words; books of 5-20 chapters.
- Each chapter ends on a clear consequence or conclusion.

Revision, in order:

- Fix structure and argument first, then sentence wording, formatting, and spelling.
- Keep it simple: short, direct, dense sentences; cut every sentence the reader gains nothing from (section 5).
- When asking for feedback, ask specific questions instead of "is it good?": is the topic and the gap clear, does the argument hold, which figure or table is hard to read, is the evidence enough to conclude. Use the knowledge and experience of teachers and senior colleagues.

## 7. Answers, emails, documentation

- Answer in the first sentence, then give the reasoning. No preamble ("Great question", "Of course"), no chatbot closing ("Hope this helps").
- When the answer carries several points, give each its own bullet written as a plain sentence. Do not prefix a bullet with a label and a colon (`Label: explanation`); the first words of the bullet are the content. Do not stack several points into one long paragraph: a reader scans bullets, not walls of prose. Use a paragraph only for reasoning that must flow in order, and keep it short.
- Break a long answer into short paragraphs with a blank line between them. When quoting verbatim, put it in a quote block and say it is quoted verbatim. Use the formatting a person uses when writing in chat: italics, bold for one or two words, `code` for file paths and commands.
- Emails: the subject states the topic, one ask per email, no filler openings or sign-offs beyond the standard form of the relationship.
- Documentation, README, commit and PR messages: describe current behavior; mention the previous version only in changelogs, release notes, migration guides. Keep code, data, YAML, and link targets unchanged when rewriting prose.
- File rewrites: change prose only; keep code, data, frontmatter and link targets intact, then summarise what changed.
- Match the writer's language: answer in the language the user wrote in.

## 8. Pre-delivery gates

- [ ] Register matched to the content type; at least 2 real sample texts studied in the same genre
- [ ] Every term taken from the source; no substitution, no merged concept, no dropped definition, no synonym cycling
- [ ] No pattern from `references/banned-patterns.md` present; rewrite check done
- [ ] No fact added or lost against the fact rule
- [ ] No label-plus-colon flow in prose
- [ ] Long text: argument carried deep, hourglass structure, structure and argument revised before wording
- [ ] The ending states a consequence or purpose, not a recap
- [ ] Read it aloud: is this how a careful writer of this genre would phrase it?

## 9. Sources and refresh

- Real documentation, papers, and edited prose in the same genre (the samples gate).
- Humanizer (https://github.com/blader/humanizer) and Wikipedia "Signs of AI writing" (https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), WikiProject AI Cleanup: the ban list in `references/banned-patterns.md`.
- ISO 704:2022 and ISO 1087:2019 (terminology principles); ISO 10241-1 (term systems, synonymy).
- Nová, Jana (2018), "Terms Embraced by the General Public: How to Cope with Determinologization in the Dictionary?", EURALEX 2018 (https://euralex.org/wp-content/themes/euralex/proceedings/Euralex%202018/118-4-2941-1-10-20180820.pdf).
