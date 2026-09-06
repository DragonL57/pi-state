---
name: writing-instructions
description: "Writing instructions for every text the agent produces or rewrites in English or Vietnamese: books, academic writing, research papers, blogs, marketing content, technical documentation, README files, commit and PR messages, emails, chat replies, chatbot answers, summaries. Load this skill FIRST before writing, answering, documenting, or rewriting anything in English or Vietnamese. Covers: study real sample texts before writing, take terminology and sentence patterns from them, choose the right register per content type, remove AI writing patterns (based on Humanizer / Wikipedia 'Signs of AI writing'), never invent facts."
---

# Writing instructions: study real sources first, then write

These instructions apply to every text this agent writes, answers, documents, or rewrites in English or Vietnamese. The core rule is the same in both languages: study real texts of the same type before writing, take the terminology and sentence patterns from them, and never invent a voice or a fact.

## 1. Core principle: never invent a voice, never invent a fact

The most common failure of machine writing is inventing a voice: Vietnamese written by thinking in English and then translated, flowery English no professional would use, or a tone nobody asked for. Before writing a single word:

1. Determine the right register for the content type (section 2).
2. Read the task's own source material (the paper, document, code, or thread the text is written from) and list its exact terms and phrasings. These source terms are the primary terminology; they override any generic field list collected later.
3. Find 2-3 real sample texts on the same topic, in the same register: for Vietnamese, Vietnamese research papers, university textbooks, recognized essays; for English, real documentation, papers, or prose in the same genre.
4. Read them closely and extract exact patterns: how they open, how they define, which connectives they use, sentence structures, terminology.
5. Write using those patterns. Do not invent a tone.

The fact rule (from Humanizer, applies to every section below): never invent a fact. A name, number, date, quote, citation, ranking, or any other factual claim must come from the source or from the user. If a sentence needs a missing detail, ask for it or write a simpler sentence. You may state an opinion or reaction when the text type and the writer call for one, but you may never add a factual claim. Fiction is exempt because invented details are part of the task.

Lỗi phổ biến nhất của văn viết bằng máy là tự phát minh một giọng văn: tiếng Việt được nghĩ bằng tiếng Anh rồi dịch ra, hoặc văn hoa giả tạo. Trước khi viết một chữ nào, phải:

1. Xác định văn thể đúng cho loại nội dung (mục 2).
2. Đọc nguồn của chính nhiệm vụ (bài nghiên cứu, tài liệu, mã nguồn, luồng trao đổi mà văn bản viết từ đó) và lập danh sách thuật ngữ, cách diễn đạt chính xác của nguồn. Thuật ngữ của nguồn là thuật ngữ chính, ưu tiên hơn mọi danh sách chung thu thập sau đó.
3. Tìm 2-3 văn bản mẫu thật cùng chủ đề, cùng văn thể: bài nghiên cứu tiếng Việt, giáo trình đại học, tiểu luận của tác giả được công nhận.
4. Đọc kỹ, trích nguyên văn các mẫu: cách mở bài, cách định nghĩa, các liên từ, cấu trúc câu, thuật ngữ.
5. Viết bằng chính các mẫu đó. Không tự sáng tạo giọng điệu.

## 2. Choose the register per content type

Match the register to the content type, and write entirely in the language of the task. Do not write Vietnamese by translating English, or English by translating Vietnamese; each language has its own patterns, terminology, and connectives (sections 3-5).

| Content type | English register and reference | Vietnamese register and reference |
|---|---|---|
| Concept books, philosophy, popular science | Careful academic essay, plain language (university-press prose, recognized essayists) | Tiểu luận học thuật: giáo trình ĐHQG Hà Nội, bài của Bùi Văn Nam Sơn |
| Research papers, scientific journals | Formal scientific register, tight definitions, hedged claims | Văn phong khoa học, định nghĩa chặt: Tạp chí khoa học tiếng Việt |
| Blogs, content marketing | Journalistic + SEO (HubSpot, real industry blogs) | Văn phong báo chí + SEO: VietSEO, HubSpot tiếng Việt |
| Technical documentation, README, changelogs | Plain, neutral, describes current behavior only; mention the previous version only in changelogs and migration guides | Tài liệu kỹ thuật: văn phong trung tính, mô tả hành vi hiện tại |
| Emails, chat replies, agent answers | Direct: answer first, then reasoning; one ask per message | Trả lời trực tiếp: ý chính ở câu đầu, một yêu cầu mỗi email |
| Literary essays (tùy bút, tản văn) | Literary prose, figurative language allowed | Văn xuôi nghệ thuật: Nguyễn Tuân, Hoàng Phủ Ngọc Tường |

## 3. Research process: terminology and sentence patterns

### 3.1 When writing Vietnamese (including from an English source)

Quy trình hai giai đoạn: (1) đọc nguồn tiếng Anh hoặc ngôn ngữ khác để hiểu đúng kiến thức và định nghĩa; (2) sau đó nghiên cứu riêng bằng tiếng Việt để lấy thuật ngữ và cách diễn đạt. Không bao giờ dịch trực tiếp từ tiếng Anh sang tiếng Việt: dịch máy có xu hướng đơn giản hóa, làm mất thuật ngữ riêng và nghèo đi bối cảnh. Bản tiếng Việt phải được dựng từ thuật ngữ và mẫu câu của văn bản tiếng Việt thật cùng chủ đề, không phải từ bản dịch trực tiếp của tiếng Anh.

Giai đoạn 0, trước cả hai giai đoạn trên: đọc nguồn của chính nhiệm vụ và lập danh sách thuật ngữ, cách diễn đạt chính xác của nguồn; danh sách này ưu tiên hơn mọi danh sách chung thu thập sau đó (mục 1, bước 2).

1. Tìm văn bản mẫu thật về đúng chủ đề bằng tiếng Việt. Dùng web search với từ khóa tiếng Việt: tên khái niệm + "định nghĩa", "khái niệm", "bài nghiên cứu".
2. Đọc và lập danh sách thuật ngữ chuẩn của chủ đề. Ví dụ chủ đề dữ liệu/thông tin: dữ liệu, thông tin, sự khác biệt, quy ước mã hóa, vật mang vật lý, bối cảnh, diễn giải, phép đo, dữ liệu thô (raw data), xử lý, lưu trữ.
3. Trích các mẫu câu định nghĩa và dùng đúng: "X là...", "X được hiểu là...", "Theo ..., X là...", "Nói cách khác, ...", "Chẳng hạn, ...", "Do đó, có thể nói: ...".
4. Lập bảng liên từ học thuật: Tuy nhiên, Vì thế, Do đó, Như vậy, Trái lại, Mặt khác, Chẳng hạn, Nói cách khác, Thứ nhất/Thứ hai/Thứ ba, Về mặt..., Xét về mặt..., Theo cách hiểu này, Trên thực tế, Đáng chú ý là.

### 3.2 When writing English

Step 0, before the list below: read the task's own source material and list its exact terms and phrasings; they override the generic field list built here (section 1, step 2).
1. Find real English texts in the same genre and on the same topic: official documentation, papers, well-edited prose. Use web search with English keywords: concept name + "definition", "documentation", "paper".
2. Build the standard term list of the field and use those exact terms. Do not paraphrase a field's terms into looser words; consistency beats variety. Use one name per thing across the whole text (no synonym cycling: do not alternate "the service", "the endpoint", "the API" for one thing).
3. Extract the sentence patterns of the genre and reuse them. In technical and reference English: subject-verb-object, plain verbs, one idea per sentence, definitions in the form "X is ...".
4. Build the connective set of formal English: however, therefore, for example, in other words, first/second/third, on the other hand, in practice, by contrast. Use a connective once; do not stack them.

### 3.3 Term usage (both languages)

In terminology work (ISO 704:2022, ISO 1087:2019), a term (thuật ngữ) is the designation (định danh) of a concept (khái niệm) in a domain (lĩnh vực); its meaning is fixed by the intension (nội hàm) stated in the definition and by its place in the concept system (hệ thống khái niệm). A term is therefore not a word with a near-meaning: swapping it for a general-language word (từ thông thường) changes the concept. Machine writing loses terminology in two ways, and this section closes both.

1. No term substitution. Do not replace a term with a general-language word or a more general term ("measurement error" → "mistake", "quy ước mã hóa" → "cách mã hóa"). Left uncontrolled, this is the movement terminology science calls determinologization: the term leaves its domain and, in the words of the lexicographic literature, loses its accuracy and gains new connotations (Nová 2018). Popularizing texts may generalize an expert term only deliberately: keep the field term first, explained, then the plainer wording.
2. No merged concepts. When the domain separates two concepts (data / information; validity / reliability; accuracy / precision), keep the separation. Using one designation for the other concept is an inaccurate definition in the sense of ISO 704 6.5.3, even when the sentence still reads smoothly.
3. Define before use. A polysemous or cross-domain term ("information", "model") gets an intensional definition in the text's own frame: superordinate concept plus delimiting characteristics (ISO 704 6.2-6.3), with the domain or subject stated (ISO 704 6.4.6). The definition must pass the substitution principle: it can replace the term in context without changing the meaning (ISO 704 6.4.4).
4. One designation per concept. Keep term rendering consistent across the whole document, a stated key requirement of terminology management. Where the field has competing variants (preferred term vs admitted term, ISO 10241-1; the Vietnamese đồng nghĩa thuật ngữ problem: máy tính / máy vi tính / máy điện toán, truy cập / truy xuất), take the source's choice and hold it.
5. Before delivering, check every term against the source: no substitution, no merged concept, no dropped definition, no unannounced variant.

Trong công tác thuật ngữ (ISO 704:2022, ISO 1087:2019), thuật ngữ là định danh của một khái niệm trong một lĩnh vực; nghĩa của nó được cố định bởi nội hàm nêu trong định nghĩa và bởi vị trí của nó trong hệ thống khái niệm. Vì vậy thuật ngữ không phải là một từ có nghĩa gần: thay nó bằng một từ thông thường là thay khái niệm. Văn máy làm mất thuật ngữ theo hai cách, và mục này chặn cả hai.

1. Không thay thế thuật ngữ. Không đổi thuật ngữ thành từ thông thường hoặc từ tổng quát hơn ("sai số đo" → "lỗi", "quy ước mã hóa" → "cách mã hóa"). Không kiểm soát, đây chính là quá trình các nghiên cứu gọi là determinologization (de-terminologization): thuật ngữ rời chuyên ngành vào từ vựng chung, mất độ chính xác và mang thêm nghĩa mới (Nová 2018). Văn phổ cập vẫn được phép tổng quát hóa thuật ngữ, nhưng phải là chủ ý: giữ thuật ngữ gốc kèm giải thích trước, rồi mới diễn đạt lại bằng từ dễ hơn.
2. Không gộp khái niệm. Khi lĩnh vực tách hai khái niệm (dữ liệu / thông tin; độ giá trị (validity) / độ tin cậy (reliability); độ chính xác (accuracy) / độ chụm (precision)), giữ nguyên sự tách. Dùng định danh này cho khái niệm kia là định nghĩa không chính xác theo nghĩa của ISO 704 6.5.3, dù câu vẫn đọc mượt.
3. Định nghĩa trước khi dùng. Thuật ngữ đa nghĩa hoặc khác nghĩa giữa các ngành ("thông tin", "mô hình") phải có định nghĩa nội hàm theo khung của chính văn bản: khái niệm trên cùng nét nghĩa phân giới (ISO 704 6.2-6.3), và nêu lĩnh vực hoặc chủ đề (ISO 704 6.4.6). Định nghĩa phải qua được nguyên lý thay thế: đặt thay thuật ngữ trong câu mà nghĩa không đổi (ISO 704 6.4.4).
4. Một định danh cho một khái niệm. Giữ cách dùng thuật ngữ nhất quán suốt văn bản, yêu cầu nền tảng của quản trị thuật ngữ. Nơi lĩnh vực có nhiều biến thể cạnh tranh (thuật ngữ chuẩn / thuật ngữ được chấp nhận theo ISO 10241-1; hiện tượng đồng nghĩa thuật ngữ tiếng Việt: máy tính / máy vi tính / máy điện toán, truy cập / truy xuất), lấy lựa chọn của nguồn và giữ nguyên.
5. Trước khi nộp, đối chiếu từng thuật ngữ với nguồn: không thay thế, không gộp khái niệm, không bỏ định nghĩa, không đổi biến thể.
## 4. Word-choice rules

### 4.1 Vietnamese

- Viết bằng mẫu câu của văn bản thật, không tự phát minh.
- Câu khẳng định trực tiếp: "Dữ liệu không có sẵn trong tự nhiên; nó được tạo ra."
- Thận trọng học thuật: "có thể", "theo cách hiểu này", "như cuốn sách sẽ trình bày".
- Thuật ngữ chính xác, dùng từ Hán-Việt đúng chỗ (khái niệm, bối cảnh, diễn giải, quy ước).
- Cấm các kiểu câu AI: "không phải là X + mệnh đề trữ tình" (ví dụ: "không phải là thứ nằm sẵn trong đời, chờ người ta đến nhặt"); ẩn dụ trang trí; câu cảm thán; câu hỏi vụn vặt kiểu trắc nghiệm; gạch đầu dòng trong chính văn sách.
- Cấm dòng nhãn kèm giải thích trong văn xuôi: không mở chủ đề bằng nhãn và dấu hai chấm ("Chuyện thanh toán:", "Vấn đề địa chỉ:", "Chuyện lớn nhất:") rồi viết cả đoạn giải thích sau đó. Nêu chủ đề bằng câu, tiếng Việt dùng "Về ...": "Về phương thức thanh toán, bản chính thức ghi..."; "Chuyện..." chỉ dùng trong lời nói hằng ngày, không dùng làm nhãn trong văn bản.
- Văn hoa (từ láy, ẩn dụ, nhịp điệu) chỉ dùng khi văn thể yêu cầu (văn chương), không dùng trong học thuật.

### 4.2 English

- Prefer plain verbs: is, are, has, do, use, need. Avoid the inflated substitutes serves as, stands as, boasts, features, offers, leverages, utilizes, facilitates.
- Direct declarative sentences: state the claim first, then the evidence. Example: "Data does not occur naturally; it is created."
- Academic hedging where the register calls for it: "may", "suggests", "in this reading", "as the following section shows".
- Exact terminology, including Latin and Greek terms where the field uses them; do not simplify a term the reader needs to learn.
- Banned AI sentence shapes: "It's not X, it's Y" with a lyric clause; decorative metaphors; exclamations; quiz-style rhetorical questions; bullet lists inside book prose.
- No label-plus-paragraph flow in prose. Do not open a topic with a label and a colon ("The payment issue:", "Topic: address", "Chuyện thanh toán:") followed by a paragraph of explanation; state the topic inside the sentence ("About payment, ..."). Vietnamese prose uses "Về ..." for this move, never "Chuyện ...", which belongs to everyday speech only.
- Figurative language (metaphor, rhythm) only when the register calls for it (literary prose); not in academic or technical writing.

## 5. AI writing patterns to remove (based on Humanizer)

Nguồn: skill [Humanizer](https://github.com/blader/humanizer), 35 mẫu lấy từ trang Wikipedia ["Signs of AI writing"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) (WikiProject AI Cleanup). Danh sách dưới đây áp dụng cho cả tiếng Anh và tiếng Việt. Quy tắc gốc của Humanizer áp dụng cho mọi mẫu: không bịa sự thật. Tên riêng, số liệu, ngày tháng, trích dẫn phải đến từ nguồn hoặc từ người viết; thiếu thì hỏi, hoặc bỏ câu.

### 5.1 English patterns (the 35 Humanizer patterns)

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

### 5.2 Vietnamese equivalents of the same patterns

Các mẫu tiếng Anh ở trên dịch sang tiếng Việt thành các kiểu câu sau. Kiểm tra bản tiếng Việt theo danh sách này:

**Mẫu nội dung**

- Phóng đại tầm quan trọng: "đánh dấu bước ngoặt trong lịch sử", "là minh chứng sống động cho", "đóng vai trò then chốt", "mở đường cho", "tượng trưng cho sự trường tồn". Sự kiện bình thường bị mô tả như bước ngoặt lớn. Giữ đúng sự kiện, bỏ phông bạt.
- Liệt kê tên tuổi để chứng minh tầm vóc: nêu tên báo, tên người, số người theo dõi mà không dùng làm bằng chứng thực. Chỉ giữ những tên có nội dung dùng được.
- Phân tích giả bằng cụm đuôi: "..., thể hiện..., phản ánh..., góp phần..., chứng tỏ tầm nhìn..., khẳng định vị thế...". Cụm -ing của tiếng Anh dịch ra tiếng Việt thành cụm đuôi này. Chỉ giữ ý mà nguồn hỗ trợ.
- Ngôn ngữ quảng cáo: "nằm gọn trong", "tráng lệ", "nổi bật bậc nhất", "vẻ đẹp hùng vĩ", "điểm đến không thể bỏ lỡ". Thay bằng mô tả đúng sự thật.
- Nguồn mơ hồ: "các chuyên gia cho rằng", "nhiều nghiên cứu chỉ ra", "dư luận" mà không nêu tên. Nêu nguồn thật nếu có; nếu không, bỏ ý. Không bịa nguồn.
- Mục khuôn mẫu "Thách thức và triển vọng": "Dù còn nhiều khó khăn..., nhưng với vị trí chiến lược..., X vẫn không ngừng phát triển". Thường chỉ lặp ý chung chung. Giữ sự kiện cụ thể, bỏ phần chúc tụng.
- Kết bài lạc quan chung chung: "tương lai hứa hẹn", "những điều thú vị đang chờ", "bước tiến quan trọng trên hành trình...". Cắt đoạn, kết bằng dữ kiện cuối cùng hoặc kế hoạch thật có nguồn.

**Mẫu câu và ngữ pháp**

- Cụm đệm làm phình câu: "nhằm mục đích", "do việc rằng", "tại thời điểm hiện tại", "trong trường hợp mà", "có khả năng có thể". Rút gọn: "để", "vì", "bây giờ", "nếu", "có thể".
- Quá nhiều từ hạn định chồng lên nhau: "có lẽ có thể sẽ", "trong một số trường hợp có khi". Giữ một từ hạn định duy nhất mà nghĩa cần.
- Nhóm ba ép: ba danh từ, ba tính từ, ba động từ dàn hàng khi ý chỉ cần một hoặc hai. Dùng đúng số ý mà nội dung đòi hỏi.
- Dải "từ X đến Y" giả: "từ Big Bang đến vật chất tối", "từ học đường đến doanh nghiệp" khi X, Y không phải một dải thật. Liệt kê thẳng các chủ đề.
- Bị động và câu thiếu chủ ngữ: "Không cần cấu hình tệp", "Kết quả được lưu tự động". Nêu chủ thể khi cần rõ ai làm gì.
- Tránh "là, có" bằng cụm dài: "đóng vai trò là", "nổi bật với", "tự hào có". Thay bằng "là", "có".
- "Không phải X mà là Y", "không chỉ... mà còn..." và kết cụt ("không phải đoán mò"): nói thẳng ý.

**Mẫu kiểu chatbot và soạn thảo**

- Lời chatbot sót lại trong bài: "Hy vọng bài viết hữu ích!", "Nếu cần thêm thông tin, hãy cho tôi biết". Xóa.
- Miễn trừ giới hạn kiến thức và bịa lấp chỗ trống: "Theo thông tin có sẵn..., có khả năng X từng...". Nói rõ nguồn không ghi gì, hoặc bỏ đoạn. Không trình bày phỏng đoán như sự thật.
- Giọng đồng ý vồ vập: "Câu hỏi rất hay!", "Bạn hoàn toàn đúng". Đi thẳng vào câu trả lời.
- Tiết lộ "sự thật sâu xa" giả: "về bản chất", "câu hỏi thực sự là", "điều cốt lõi là". Nói thẳng luận điểm.
- Mở đầu giả thân mật: "Thật ra", "Nói thật lòng", "Sự việc là thế này". Bỏ, vào ý ngay.
- Trả lời phản đối không ai nêu: "Điều này không phải là về..., và tôi không cho rằng...". Nếu câu chứa luận điểm thật, tách ra nói thẳng; nếu không, bỏ.
- Bật ra lựa chọn giả rồi loại bỏ: "Một cách hấp dẫn là..., nhưng điều đó sẽ...". Lựa chọn không ai nghĩ tới. Bỏ, nêu ràng buộc thật.
- Câu thành ngữ giả: "X chính là ngôn ngữ của Y", "sự tin cậy bắt đầu từ X". Thay bằng luận điểm cụ thể có nội dung.
- Heading bị lặp ý trong câu đầu tiên của đoạn ngay dưới nó: xóa câu lặp.
- In đậm tràn lan, emoji trang trí trong heading và gạch đầu dòng, nhãn in đậm kèm hai chấm (**Ưu điểm: ...**): bỏ hoặc viết thành văn xuôi.
- Gạch ngang dài (—, –, " -- ") dùng làm dấu ngắt câu: thay bằng chấm, phẩy, hai chấm hoặc ngoặc đơn.

### 5.3 Do not over-flag: what to keep

A person may use some of these patterns. Do not treat any single item below as proof of AI writing. Look for several patterns together before rewriting a passage.

- **Correct grammar and consistent style.** Many writers are professionals or have been edited. Polish is not proof of AI.
- **Formal or academic words.** The word lists above name specific overused words; do not simplify every formal word, and never flatten academic register into casual register.
- **Single connectives.** "Additionally", "moreover", "Tuy nhiên", "Do đó" are normal in isolation; they are a tell only when piled up.
- **One short sentence for emphasis.** Flag dramatic fragments only when several appear in a row.
- **Deliberate repeated openings.** "She came. She saw. She conquered." Change repetition only when it adds nothing.
- **Useful limits and disclaimers.** Keep scope statements, legal and safety notices, real corrections, named objections, and FAQ answers.
- **Real alternatives.** In design documents, tutorials, and arguments, keep options a reader may actually consider.
- **Quoted or secondhand text.** Do not rewrite watched phrases inside quotations, titles, proper names, or examples where the phrase is being discussed rather than used.

Chi tiết người viết phải giữ:

- Chi tiết cụ thể lạ: địa chỉ thật, câu trích dẫn kỳ lạ, cụm từ riêng của tác giả.
- Cảm xúc lẫn lộn, mâu thuẫn chưa giải quyết: "tôi nghĩ phần này ổn, nhưng vẫn thấy khó chịu mà không giải thích được."
- Nhịp câu dài ngắn xen kẽ. Văn máy thường đều đặn, vừa tầm.
- Tự sửa lời giữa câu, ngoặc xen kẽ: "(tôi cứ muốn nói 'gần như' ở đây, nhưng thật sự nó chắc chắn.)"
- Văn pháp chuẩn, văn phong trang trọng học thuật không phải là dấu hiệu AI.

### 5.4 Rewrite check process

- Đọc bản gốc, đánh dấu từng mẫu AI có mặt. (Read the source and mark each AI pattern.)
- Viết lại, đọc thành tiếng để kiểm tra nhịp câu và động từ đơn giản (là, có / is, has). (Rewrite, read aloud, check rhythm and plain verbs.)
- Tự hỏi hai câu trước khi nộp: (1) "Còn chỗ nào nghe như máy viết không?" (2) "Bản viết lại có thêm hoặc mất tên riêng, số liệu, ngày tháng, trích dẫn nào không?" Mất hoặc thêm thông tin không có nguồn là lỗi. (Ask both questions before delivering; any unsupported addition or lost claim is an error.)
- If a sentence stays awkward after two fixes, rewrite the paragraph around its main point instead of patching one phrase.

## 6. Writing principles (both languages)

- Mỗi đoạn một ý, mỗi câu một ý. (One idea per paragraph, one idea per sentence.)
- Định nghĩa trước, bàn luận sau. (Define before discussing.)
- Tổ chức luận điểm theo thứ tự rõ ràng: Thứ nhất, Thứ hai, Thứ ba. (Order arguments explicitly.)
- Khẳng định luận đề sớm, chứng minh sau. (State the thesis early, then prove it.)
- Ví dụ kiểm chứng sau mỗi luận điểm (Chẳng hạn...). (A checked example after each claim.)
- Kết bằng hệ quả hoặc mục đích, không tóm tắt lại. (End on a consequence or purpose, not a recap.)

## 7. Blog structure (only when the register is blog/content marketing)

- Tiêu đề: lợi ích cụ thể + yếu tố tò mò, dưới 70 ký tự. (Title: concrete benefit plus curiosity, under 70 characters.)
- Mở bài: trả lời thẳng trong 100 chữ đầu, công thức PAS (Problem, Agitate, Solve) hoặc APP (Agree, Promise, Preview). (Answer directly in the first 100 words.)
- Thân bài: 3-5 heading chính, mỗi heading trả lời một câu hỏi phụ; ví dụ, số liệu, ảnh mỗi ~300 từ. (3-5 main headings, each answering one sub-question; example, number, or image every ~300 words.)
- Kết: một lời kêu gọi hành động duy nhất, rõ ràng. (One clear call to action.)

## 8. Non-fiction book chapter template (knowledge-type books)

- Mỗi chương trả lời một câu hỏi của người đọc. (Each chapter answers one reader question.)
- Trình tự: định nghĩa/khái niệm (2-3 câu) → ví dụ hoặc case study → phân tích → bằng chứng → cách áp dụng → cầu nối sang chương sau. (Definition → example → analysis → evidence → application → bridge to the next chapter.)
- Độ dài chương 2.500-10.000 chữ, sách 5-20 chương. (Chapters 2,500-10,000 words; books of 5-20 chapters.)
- Mỗi chương kết bằng một hệ quả hoặc kết luận rõ ràng. (Each chapter ends on a clear consequence or conclusion.)

## 9. Answers, emails, and documentation

These instructions load for answers and documentation too. Channel-specific rules:
- Chat replies favor a scannable structure. When the answer carries several points, items, or findings, give each one its own bullet and write the point and its explanation directly in the bullet as a plain sentence. Do not prefix a bullet with a label and a colon (`Label: explanation`); the first words of the bullet are the content itself. Do not stack several points into long paragraphs; a reader scans bullets, not walls of prose. Use a paragraph only for reasoning that must flow in order, and keep it short.
- Câu trả lời trong chat ưu tiên cấu trúc quét nhanh được. Khi câu trả lời có nhiều ý, mục, hoặc phát hiện, mỗi ý một gạch đầu dòng, viết ý và giải thích trực tiếp trong mục bằng câu trần. Không thêm nhãn kèm dấu hai chấm (`Nhãn: giải thích`); những chữ đầu của mục là nội dung, không phải tiêu đề. Không dồn nhiều ý thành các đoạn văn dài; người đọc quét gạch đầu dòng, không đọc khối chữ. Đoạn văn chỉ dùng cho lập luận cần nối tiếp theo thứ tự, và giữ ngắn.
- Break a long answer into short paragraphs with a blank line between them; do not write one dense wall of text. When quoting text verbatim (from an earlier reply, a file, a source), put it in a quote block or quotation marks and say it is quoted verbatim, not paraphrase it into the sentence. Use the formatting a person uses when writing in chat: italics, bold for one or two words, `code` for file paths and commands.
- Chia câu trả lời dài thành các đoạn ngắn, có dòng trống ở giữa; không viết thành một khối chữ dày đặc. Khi trích nguyên văn (từ câu trả lời trước, một tệp, một nguồn), đặt trong khối trích dẫn hoặc ngoặc kép và nói rõ đó là trích nguyên văn, không lồng paraphrase vào câu. Dùng định dạng như người dùng khi viết trong chat: in nghiêng, in đậm một hai chữ, `code` cho đường dẫn và lệnh.

- **Agent answers and chat replies.** Answer in the first sentence, then give the reasoning. No preamble ("Great question", "Of course"), no chatbot closing ("Hope this helps"). Keep the writer's language; if the user writes Vietnamese, answer in Vietnamese.
- **Emails.** Subject line states the topic. One ask per email. No filler openings or sign-offs beyond the standard form of the relationship.
- **Documentation, README, commit and PR messages.** Describe current behavior, not the previous version (exceptions: changelogs, release notes, migration guides). Keep code blocks, data, YAML metadata, and link targets unchanged when rewriting prose. Commit messages follow the repo's own convention.
- **File rewrites.** Change prose only; keep code, data, frontmatter, and link targets intact, then give the user a short summary of what changed.

## 10. Pre-delivery checklist

- [ ] Đã xác định văn thể đúng cho nội dung / The register matches the content type
- [ ] Đã đọc ít nhất 2 văn bản mẫu thật cùng chủ đề / At least 2 real sample texts were studied
- [ ] Thuật ngữ dùng đúng chuẩn của chủ đề / Field-standard terminology used consistently
- [ ] Câu văn theo mẫu của văn bản thật, không tự bịa giọng / Sentences follow the real samples, no invented voice
- [ ] Không thuật ngữ nào bị thay bằng từ thông thường; khái niệm không bị gộp; thuật ngữ đa nghĩa có định nghĩa nội hàm và nêu lĩnh vực / No term substituted with a general-language word; no merged concepts; polysemous terms carry an intensional definition with the domain stated
- [ ] Không còn kiểu câu "không phải là X + trữ tình", không ẩn dụ trang trí
- [ ] Không còn dòng nhãn kèm giải thích trong văn xuôi ("Chuyện X:", "Vấn đề X:", "Topic: ..."); chủ đề được nêu bằng câu, tiếng Việt dùng "Về ..." / No label-plus-paragraph flow in prose; topics are stated in sentences, Vietnamese uses "Về ..."
- [ ] Không còn các mẫu văn AI theo mục 5 (phóng đại, quảng cáo, nguồn mơ hồ, kết lạc quan chung chung, sót lời chatbot) / No AI patterns from section 5
- [ ] Bản viết lại không thêm và không mất tên riêng, số liệu, ngày tháng, trích dẫn nào so với bản gốc / No fact added or lost in the rewrite
- [ ] Mỗi đoạn một ý, mỗi câu một ý / One idea per paragraph and sentence
- [ ] Có định nghĩa trước khi bàn luận / Definitions before discussion
- [ ] Kết bài có hệ quả hoặc mục đích / The ending states a consequence or purpose

## 11. Reference sources

- Giáo trình "Thông tin và xử lý thông tin", Đại học Công nghệ, ĐHQG Hà Nội: cách định nghĩa, liên từ.
- Bùi Văn Nam Sơn, "Trò chuyện triết học" và các bài tiểu luận: văn phong triết học bình dị, thận trọng.
- Các bài nghiên cứu trên tạp chí khoa học tiếng Việt (tìm theo: tên khái niệm + "định nghĩa").
- Skill Humanizer (https://github.com/blader/humanizer), dựa trên trang Wikipedia "Signs of AI writing" (https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), bảo trì bởi WikiProject AI Cleanup: danh sách mẫu văn AI ở mục 5.
- ISO 704:2022, "Terminology work — Principles and methods" (ISO/TC 37/SC 1): khái niệm, định danh, định nghĩa nội hàm, nguyên lý thay thế, nêu lĩnh vực (6.2-6.4, 6.5.3).
- ISO 1087:2019, "Terminology work and terminology science — Vocabulary"; ISO 10241-1: thuật ngữ, hệ thống khái niệm, đồng nghĩa, đa nghĩa, đồng âm; thuật ngữ chuẩn / thuật ngữ được chấp nhận.
- Nová, Jana (2018), "Terms Embraced by the General Public: How to Cope with Determinologization in the Dictionary?", EURALEX 2018: determinologization (https://euralex.org/wp-content/themes/euralex/proceedings/Euralex%202018/118-4-2941-1-10-20180820.pdf).
- Tạp chí Khoa học ĐHQGHN, Ngoại ngữ 27 (2011), tr. 53-66: yêu cầu đối với thuật ngữ tiếng Việt (tính chính xác, tính đơn nghĩa, tính hệ thống; hiện tượng đồng nghĩa thuật ngữ).
- "Đặc điểm của thuật ngữ tiếng Việt (phần 1)", nguvan.hnue.edu.vn (2020): thuật ngữ hóa từ ngữ thông thường, hiện tượng đồng nghĩa thuật ngữ (máy tính / máy vi tính / máy điện toán, truy cập / truy xuất), chuẩn hóa thuật ngữ tiếng Việt (http://nguvan.hnue.edu.vn/Nghi%C3%AAn-c%E1%BB%A9u/p/796).