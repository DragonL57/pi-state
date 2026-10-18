# AI writing patterns to remove (based on Humanizer)

Ban list referenced by section 4 of the `english-language` skill. Sources: skill
[Humanizer](https://github.com/blader/humanizer), 35 patterns from Wikipedia
["Signs of AI writing"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
(WikiProject AI Cleanup).

This is the canonical wording of the 35 patterns, their before/after examples, and the
do-not-over-flag list. The Vietnamese equivalents are in
`../viet-language/references/banned-patterns.md`. The no-invented-facts rule applies to
every pattern: never invent a name, number, date, or quote to fill a gap.

## 1. The 35 patterns

**Content patterns**

1. **Inflated claims about importance and legacy.** Watch: stands/serves as, is a testament, a vital/crucial/pivotal role, underscores its importance, marking a pivotal moment, evolving landscape, setting the stage for. Ordinary details described as major turning points. Before: "The institute was established in 1989, marking a pivotal moment in the evolution of regional statistics." After: "The institute was established in 1989, part of a wider decentralization."
2. **Name-dropping to prove importance.** Watch: cited in NYT, BBC, FT..., active social media presence, 500,000 followers. Keep only citations that carry useful context.
3. **Shallow analysis with -ing phrases.** Watch: highlighting..., ensuring..., reflecting..., showcasing..., contributing to..., fostering.... A simple fact dressed up as deeper meaning. Before: "...the palette resonates with the region's beauty, symbolizing the sea and the land, reflecting the community's connection." After: "The temple is painted blue, green, and gold, colors meant to evoke the sea and the land."
4. **Sales language.** Watch: boasts, vibrant, rich (figurative), breathtaking, nestled, in the heart of, stunning, must-visit, groundbreaking (figurative), renowned. Before: "Nestled within the breathtaking region of Gonder, the town stands as a vibrant hub with rich heritage." After: "The town is in the Gonder region."
5. **Vague sources.** Watch: experts argue, observers have cited, industry reports, some critics, several sources (when few are named). Name a real source or remove the claim; never invent a source.
6. **Formulaic challenges-and-outlook sections.** Watch: "Despite its..., faces several challenges", "Despite these challenges, ... continues to thrive", "Future Outlook". Keep the concrete facts; cut the stock outlook.

**Language and grammar patterns**

7. **Overused AI words.** High-frequency list: actually, additionally, align with, crucial, delve, emphasizing, enduring, enhance, fostering, garner, gate/gated/gating (figurative only; keep real technical usage), highlight (verb), interplay, intricate/intricacies, key (adjective), landscape (abstract), pivotal, quietly, showcase, tapestry (abstract), testament, underscore, valuable, vibrant. Replace with plain words: also, needs, remains common.
8. **Avoiding is and are.** Watch: serves as, stands as, marks, represents [a], boasts, features, offers. Before: "Gallery 825 serves as LAAA's exhibition space and boasts over 3,000 square feet." After: "Gallery 825 is LAAA's exhibition space and has over 3,000 square feet."
9. **Not X but Y, and clipped negative endings.** Watch: "Not only...but...", "It's not just X, it's Y", and clipped endings such as "no guessing". State the point directly: "The options come from the selected item, so the user never has to guess."
10. **Forced groups of three.** Three nouns, three adjectives, three verbs lined up when the meaning needs one or two. Use the number of items the meaning needs.
11. **Changing names and repeated sentence openings.** Do not rename the same person or thing (protagonist → main character → hero). For repeated openings ("She noted... She noted... She filed..."), merge sentences or change the subject. Do not ban the repeated word; fix the repeated pattern.
12. **False from-X-to-Y ranges.** "from the Big Bang to dark matter" when X and Y are not a real range. List the topics directly.
13. **Passive voice and missing subjects.** "No configuration file needed. Results are preserved automatically." Name the actor when it clarifies: "You do not need a configuration file. The system preserves the results automatically."

**Style patterns**

14. **Em and en dashes.** The rewrite must not contain em dashes (—) or en dashes (–), unless the writer's sample uses them at the same rate. Replace with a period, comma, colon, or parentheses. Also remove spaced dashes (` — `) and double hyphens (` -- `) used as dashes.
15. **Too much bold text.** Bold words without a clear reason: "**OKRs**, **KPIs**, **BMC**". Remove the bold.
16. **Lists with bold mini-headings.** "- **Performance:** Performance improved". Turn into prose when the list adds no value.
17. **Title case in headings.** "Strategic Negotiations And Partnerships" → "Strategic negotiations and partnerships".
18. **Emojis** in headings and list items. Remove them.
19. **Curly quotes** ("...") where the format uses straight quotes ("..."). Match the target format.

**Chatbot patterns**

20. **Chatbot text left in the answer.** Watch: "I hope this helps", "Of course!", "Certainly!", "You're absolutely right!", "Would you like...?", "let me know". Remove greeting, offer, and closing from text that should stand alone.
21. **Knowledge-limit disclaimers and guesses.** Watch: "as of [date]", "while specific details are limited", "it is believed that", "she likely grew up", "maintains a low profile". State what the source does not show, or cut the sentence. Never present a guess as a fact.
22. **Overly agreeable tone.** "Great question! You're absolutely right that this is a complex topic." Answer directly; keep only what is relevant.

**Filler and hedging**

23. **Filler phrases.** "In order to achieve this goal" → "To achieve this"; "Due to the fact that" → "Because"; "At this point in time" → "Now"; "In the event that" → "If"; "has the ability to process" → "can process"; "It is important to note that" → cut.
24. **Too many qualifiers.** "could potentially possibly be argued that... might have some effect" → "may affect". Keep a qualifier only when the source supports it.
25. **Generic positive endings.** "The future looks bright", "exciting times lie ahead". Cut the paragraph; end on the last concrete fact or a sourced plan.

**Drafting-artifact patterns**

26. **Too many hyphenated word pairs.** Keep the hyphen before a noun when grammar needs it ("a high-quality report"); drop it after the noun ("the report is high quality").
27. **Pretending to reveal a deeper truth.** Watch: "the real question is", "at its core", "what really matters", "fundamentally", "the deeper issue". State the point directly.
28. **Announcing the next point.** Watch: "Let's dive in", "here's what you need to know", "without further ado", and casual versions such as "one thing that bit me". Remove the announcement, not just its formal tone.
29. **A heading repeated in the first sentence below it.** "## Performance" followed by "Speed matters." Delete the repeated sentence.
30. **Writing about the previous version.** Documentation describes current behavior; mention the old version only in changelogs, release notes, and migration guides. Before: "This function was added to replace the slow iteration." After: "This function uses a hash map for O(1) lookups."
31. **Forced punchlines and dramatic fragments.** "It had no preference. No prior. No nostalgia." One short sentence can add emphasis; a row of fragments is forced. Use natural sentence lengths.
32. **Formulaic sayings.** Watch: "X is the Y of Z", "the language of", "the currency of", "X is not a tool but a mirror". Replace the saying with the specific claim.
33. **Fake-candid openings.** Watch: "Honestly?", "Look", "Here's the thing", "The thing is", "Let's be honest" as standalone hooks. State the answer directly.
34. **Answering objections no one raised.** Watch: "This isn't mainly about...", "I'm not saying...", "To be clear", "Don't get me wrong", "Some might say... but". Remove the unsupported defense; if the sentence carries a real claim, state that claim directly. Keep a real objection the text names or answers in full.
35. **Rejecting fake alternatives.** Watch: "A tempting option would be..., but", "one might be tempted to", "it would be easy to just". An option no reader would consider, raised only to be dismissed. Remove it and state the real constraint. One rejected option may be valid; several unrelated rejections are a sign of old drafting ideas.

## 2. Do not over-flag: what to keep

A person may use some of these patterns. Do not treat any single item below as proof of AI writing. Look for several patterns together before rewriting a passage.

- **Correct grammar and consistent style.** Many writers are professionals or have been edited. Polish is not proof of AI.
- **Formal or academic words.** The word lists above name specific overused words; do not simplify every formal word, and never flatten academic register into casual register.
- **Single connectives.** "Additionally", "moreover", "Tuy nhiên", "Do đó" are normal in isolation; they are a tell only when piled up.
- **One short sentence for emphasis.** Flag dramatic fragments only when several appear in a row.
- **Deliberate repeated openings.** "She came. She saw. She conquered." Change repetition only when it adds nothing.
- **Useful limits and disclaimers.** Keep scope statements, legal and safety notices, real corrections, named objections, and FAQ answers.
- **Real alternatives.** In design documents, tutorials, and arguments, keep options a reader may actually consider.
- **Quoted or secondhand text.** Do not rewrite watched phrases inside quotations, titles, proper names, or examples where the phrase is being discussed rather than used.

What the writer must keep:

- Odd specific detail: a real address, a strange quotation, a phrase only this author uses.
- Mixed feelings, unresolved contradiction: "I think this part is fine, but it still bothers me and I cannot say why."
- Sentences of mixed length. Machine prose is even and mid-sized.
- Self-correction inside a sentence, parentheticals: "(I keep wanting to say 'almost' here, but it really is certain.)"

## 3. Rewrite check process

- Read the original and mark every AI pattern present.
- Rewrite, then read it aloud to check sentence rhythm and plain verbs (is, has).
- Ask two questions before delivering: (1) "Is there anywhere left that sounds machine-written?" (2) "Did the rewrite add or lose any proper name, number, date, or quote?" Losing or adding unsourced information is an error.
- If a sentence stays awkward after two fixes, rewrite the paragraph around its main point instead of patching one phrase.
