---
name: "viet-language"
description: "Vietnamese writing skill: formal register by default (official, legal), terminology, punctuation, banned AI patterns. Load before writing Vietnamese text."
---

# Vietnamese: the complete language skill

Load this before writing, answering, documenting, rewriting, or translating any Vietnamese text. For English writing use `english-language` instead; do not carry Vietnamese rules into English or the reverse.

Vietnamese is not translated from English. Each content type has its own terminology, connectives, and sentence shapes. Build the Vietnamese from real Vietnamese sources, never by rendering the English sentence word for word.

**Default register: formal Vietnamese.** Write every Vietnamese text in the formal register: văn phong trang trọng, hành chính, pháp lý. Complete assertive sentences, accurate terminology, đúng mực, just enough, not verbose. There is no chat or informal register and no register tiers; do not use informal markers (ko, đc, j, :v) or sentence-final particles. `references/formal-vietnamese.md` is the base for every text.

## 1. Core gates: do not write before these pass

- Register gate: formal only. No informal marker, no particle, no abbreviation.
- Source gate: read the task's own source material and list its exact terms and phrasings. Source terms override any generic field list.
- Samples gate: read 2-3 real formal Vietnamese texts in the same content type and extract their patterns: how they open, define, which connectives they use, sentence structures, terminology.
- Voice gate: formal and restrained. Do not invent a voice or a flowery style.
- Fact rule: do not invent a fact. A name, number, date, quote, citation, or ranking must come from the source or the user. If a sentence needs a missing detail, ask or write a simpler sentence. You may state an opinion when the text type calls for one, never a factual claim. Fiction is exempt.

## 2. Research process, terminology, sentences

Two stages: (1) read the source (English or other) to understand the knowledge and definitions; (2) research separately in Vietnamese for the terms and phrasings, then build the Vietnamese text from the terminology and sentence patterns of real formal Vietnamese texts on the same subject.

Verification gate: every first-use term phrase, especially section headings, must be confirmed as a standard Vietnamese collocation by search before it enters the text. Coining a phrase and treating it as correct is an error, not a style. A phrase with no confirming source must not ship: replace it with a standard collocation found, or research until one is found. Record each first-use term with its confirming source link in a list; the draft passes only when the list is complete.

The formal definition and connective patterns to reuse:

- Definitions: "X là...", "X được hiểu là...", "Theo ..., X là...", "Nói cách khác, ...", "Chẳng hạn, ...", "Do đó, có thể nói: ...".
- Formal connectives: Tuy nhiên, Vì thế, Do đó, Như vậy, Trái lại, Mặt khác, Chẳng hạn, Nói cách khác, Thứ nhất/Thứ hai/Thứ ba, Về mặt..., Xét về mặt..., Theo cách hiểu này, Trên thực tế, Đáng chú ý là.

Term rules:

1. No term substitution. Do not replace a term with a general word ("quy ước mã hóa" → "cách mã hóa"); this is determinologization (Nová 2018). Popularizing texts may generalize only deliberately: field term first, explained, then the plainer wording.
2. No merged concepts. When the domain separates two concepts (data / information; validity / reliability; accuracy / precision), keep them separate even when the sentence still reads smoothly (ISO 704 6.5.3).
3. Define before use. A polysemous or cross-domain term gets an intensional definition: superordinate concept plus delimiting characteristics, with the domain stated (ISO 704 6.2-6.4). It must pass the substitution principle.
4. One designation per concept. Hold the source's choice through the whole document. Vietnamese term-synonymy problem (máy tính / máy vi tính / máy điện toán, truy cập / truy xuất): take the source's term and keep it.
5. Before delivering, check every term against the source: no substitution, no merged concept, no dropped definition, no unannounced variant.

## 3. Word choice

- Viết bằng mẫu câu của văn bản thật, không tự phát minh.
- Câu khẳng định trực tiếp: "Dữ liệu không có sẵn trong tự nhiên; nó được tạo ra."
- Thận trọng học thuật: "có thể", "theo cách hiểu này", "như cuốn sách sẽ trình bày".
- Thuật ngữ chính xác, dùng từ Hán-Việt đúng chỗ (khái niệm, bối cảnh, diễn giải, quy ước).
- Văn hoa (từ láy, ẩn dụ, nhịp điệu) chỉ dùng khi văn thể yêu cầu (văn chương), không dùng trong học thuật và văn bản hành chính.
- Cấm các kiểu câu AI: mệnh đề trữ tình nối sau "không phải là X" ("không phải là thứ nằm sẵn trong đời, chờ người ta đến nhặt"); câu cảm thán; câu hỏi vụn vặt kiểu trắc nghiệm; gạch đầu dòng trong chính văn sách.
- Tránh từ sách vở, dịch ngữ mà người viết kỹ thuật tiếng Việt không dùng: "thực hành" (practices) → "cách làm"; "lời tựa" → "phần mở đầu"; "theo năm tháng" → "qua thời gian"; "phán đoán" (judgment call) → "sự cân nhắc"; "truy chuỗi nguyên nhân" → "truy nguyên nhân". Kiểm tra: nếu một người Việt viết nhanh trong PR hoặc Slack thì họ sẽ dùng từ nào? Dùng từ đó. Từ Hán-Việt vẫn dùng đúng chỗ; cấm là những từ nghe như dịch từ tiếng Anh.
- Cấu trúc câu tiếng Việt không phải bản chiếu của câu tiếng Anh. Dịch nghĩa rồi dựng lại theo mẫu câu tiếng Việt: "cần làm những gì" (không "cần những cách làm gì"), "một team" (không "một tổ chức" khi nói về đội nhỏ), câu hỏi đặt động từ trước danh từ hỏi.
- Trong văn song ngữ, mỗi ngôn ngữ tự đứng. Đoạn tiếng Việt không lặp lại thông tin mà câu tiếng Anh ngay trên đã nêu (tên sách, tác giả, nhà xuất bản, link, tên riêng đầy đủ); nó chỉ dịch ý, gọi lại bằng cách nói ngắn tự nhiên ("cuốn sách này", "các tác giả").

## 4. Linking, terminology, punctuation

For every formal Vietnamese text, read `references/formal-vietnamese.md` first. It holds the linking-device table by relation, the anti-ambiguity rules, the structure-repetition rules with worked examples, and the punctuation rules under Nghị định 30/2020. Do not draft formal Vietnamese without it.

## 5. Every sentence must add information

- Delete any sentence the reader gains nothing from: no new fact, no new context, no new relation, or a restatement of the previous sentence.
- A hanging phrase must name what it modifies; if it cannot, delete it.
- Ask each sentence what the reader knows now that they did not before. Sentences without an answer get deleted.
- No label-plus-colon flow in prose: do not open a topic with a label and a colon then a paragraph. State the topic inside the sentence. Vietnamese prose uses "Về ..." for this move, never "Chuyện ...", which belongs to everyday speech.

## 6. Banned patterns (AI tells)

The ban list is in `references/banned-patterns.md`. Read it before writing or rewriting, and check the finished text against it. It holds the Vietnamese equivalents of the 35 Humanizer patterns and the rewrite-check process. The canonical English wording of the patterns, their before/after examples, and the full do-not-over-flag list are in `../english-language/references/banned-patterns.md`.

These are the Vietnamese tells to catch first:

- Inflated phrasing: "đánh dấu bước ngoặt", "là minh chứng sống động cho", "đóng vai trò quan trọng", "không chỉ ... mà còn", "một cách".
- Fake analysis with tail phrases: "..., thể hiện...", "phản ánh...", "góp phần...", "khẳng định vị thế...".
- Advertising language: "nằm gọn trong", "tráng lệ", "điểm đến không thể bỏ lỡ".
- Vague sources: "các chuyên gia cho rằng", "nhiều nghiên cứu chỉ ra" without a name. Never invent a source.
- Generic endings: "tương lai hứa hẹn", "những điều thú vị đang chờ".
- Chatbot text: "Hy vọng bài viết hữu ích!", "Câu hỏi rất hay!", "Nếu cần thêm thông tin, hãy cho tôi biết".
- Fake "deep truth": "về bản chất", "câu hỏi thực sự là", "điều cốt lõi là".
- Fake intimate openers: "Thật ra", "Nói thật lòng", "Sự việc là thế này".
- Gạch ngang dài (em dash, en dash) và gạch nối đôi làm dấu ngắt câu: thay bằng chấm, phẩy, hai chấm, ngoặc đơn.
- In đậm tràn lan, emoji trang trí trong heading và gạch đầu dòng.

## 7. Văn bản pháp lý và hợp đồng

Áp dụng khi viết hoặc sửa hợp đồng, phụ lục, công văn, thư bảo lãnh, quy chế và các văn bản hành chính. Giọng điệu: câu khẳng định, thuật ngữ chính xác, vừa đủ, không dài dòng; mỗi khoản một ý; Hán-Việt đúng chỗ; không dùng từ cảm xúc và không dùng ngôi "tôi".

- Gọi các bên bằng "các Bên", "Bên A"/"Bên B" hoặc tên gọi tắt đã định nghĩa; trong công văn tự gọi "chúng tôi" và gọi bên nhận là "Quý Công ty".
- Hợp đồng theo thứ tự: tên hợp đồng kèm số và ký hiệu; bảng thông tin các bên (tên chủ thể, giấy đăng ký kinh doanh, trụ sở, người đại diện, văn bản ủy quyền); câu dẫn "Các Bên thống nhất ký kết Hợp Đồng ... với các điều khoản như sau:"; mục giải thích từ ngữ; các ĐIỀU, trong mỗi điều chia Khoản (1., 2.) và Điểm (1.1, 1.2), liệt kê bằng (a), (b), (i), (ii); rồi các điều về bảo mật, bất khả kháng, giải quyết tranh chấp, sửa đổi và chấm dứt, hiệu lực, số bản, ngày ký.
- Công văn theo thứ tự: định danh bên gửi (tên, tên cũ, mã số thuế/mã số doanh nghiệp), sự việc kèm giấy tờ đính kèm, đề nghị, cam đoan và chịu trách nhiệm trước pháp luật, "Ký tên, đóng dấu". Văn bản sửa đổi phải nêu rõ căn cứ, kèm số hợp đồng gốc và số văn bản liên quan.
- Viết hoa thuật ngữ và định nghĩa ngay lần đầu: "Ngày Làm Việc: là các ngày ...".
- Số lượng quan trọng ghi số kèm chữ trong ngoặc: "03 (ba) ngày", "04 (bốn) bản gốc".
- Dùng "và/hoặc", "trừ trường hợp", "theo quy định pháp luật", "nhằm"; giữ nguyên câu điều kiện dài ("Trường hợp ..., Bên ... phải ...") thay vì chặt thành nhiều câu.
- Dẫn căn cứ phải thật: số hiệu luật, nghị định, thông tư, điều khoản. Không bịa số hiệu.
- Chi tiết dấu câu và khuôn cụm từ chuẩn: `references/formal-vietnamese.md`.

## 8. Structure and revision (blog, research reports, books)

Blog (only when the register is blog/content marketing):

- Tiêu đề: lợi ích cụ thể + yếu tố tò mò, dưới 70 ký tự.
- Mở bài: trả lời thẳng trong 100 chữ đầu, công thức PAS (Problem, Agitate, Solve) hoặc APP (Agree, Promise, Preview).
- Thân bài: 3-5 heading chính, mỗi heading trả lời một câu hỏi phụ; ví dụ, số liệu, ảnh mỗi ~300 từ.
- Kết: một lời kêu gọi hành động duy nhất, rõ ràng.

Báo cáo nghiên cứu, luận văn, bài báo khoa học:

- Phần tổng quan tài liệu so sánh và phản biện các nguồn: nêu cái đã biết, cái còn thiếu và phần công trình này đóng góp; không tóm tắt lần lượt từng nguồn.
- Dựng theo hình đồng hồ cát: mở từ bối cảnh rộng đi xuống câu hỏi cụ thể, kết từ kết quả của mình mở ra ý nghĩa, giới hạn và câu hỏi tiếp theo.
- Làm ít luận điểm nhưng khai thác sâu từng luận điểm; độ dài không phải là chất lượng.
- Viết bản nháp đầu sớm, song song với quá trình làm; bản nháp đầu không bao giờ là bản cuối.

Non-fiction book chapter (knowledge-type books):

- Mỗi chương trả lời một câu hỏi của người đọc.
- Trình tự: định nghĩa/khái niệm (2-3 câu) → ví dụ hoặc case study → phân tích → bằng chứng → cách áp dụng → cầu nối sang chương sau.
- Độ dài chương 2.500-10.000 chữ, sách 5-20 chương.
- Mỗi chương kết bằng một hệ quả hoặc kết luận rõ ràng.

Sửa bài, theo thứ tự:

- Sửa cấu trúc và lập luận trước, rồi mới đến câu chữ, định dạng và chính tả.
- Giữ đơn giản: câu ngắn, trực tiếp, cô đọng; cắt mọi câu người đọc không thu được gì (mục 5).
- Khi xin góp ý, hỏi câu hỏi cụ thể thay vì hỏi "ổn chưa": chủ đề và khoảng trống đã rõ chưa, lập luận có chặt không, hình hay bảng nào khó đọc, bằng chứng có đủ để kết luận không. Tận dụng kiến thức và kinh nghiệm của thầy cô, các senior.

## 9. Answers, emails, documentation

- Trả lời đặt ý chính ở câu đầu, rồi mới đến lý do. Không rào đón ("Câu hỏi rất hay"), không kết kiểu chatbot ("Hy vọng giúp ích").
- When the answer carries several points, give each its own bullet written as a plain sentence. Do not prefix a bullet with a label and a colon ("Nhãn: giải thích"); the first words of the bullet are the content.
- Dùng định dạng người viết vẫn dùng khi trao đổi: in nghiêng, in đậm cho một hai từ, `code` cho đường dẫn tệp và câu lệnh.
- Break a long answer into short paragraphs with a blank line between them. When quoting verbatim, put it in a quote block and say it is quoted verbatim.
- Emails: subject states the topic, one ask per email, no filler openings or sign-offs beyond the relationship's standard form.
- Documentation, README, commit and PR messages: describe current behavior; mention the previous version only in changelogs, release notes, migration guides. Keep code, data, YAML, and link targets unchanged when rewriting prose.
- File rewrites: change prose only; keep code, data, frontmatter and link targets intact, then summarise what changed.
- Khi viết tiếng Việt cho người dùng, giữ tiếng Việt của người dùng; đừng trả lời bằng tiếng Anh trừ khi họ dùng tiếng Anh.

## 10. Pre-delivery gates

- [ ] Register is formal only; no informal marker, no particle, no abbreviation
- [ ] At least 2 real formal Vietnamese sample texts studied in the same content type
- [ ] Every first-use term phrase, including headings, verified by search with a source; no self-coined collocation shipped
- [ ] Every term checked against the source: no substitution, no merged concept, no dropped definition, no unannounced variant
- [ ] No pattern from `references/banned-patterns.md` present; rewrite check done
- [ ] No fact added or lost against the fact rule
- [ ] No label-plus-colon flow in prose
- [ ] Văn bản dài: lập luận sâu, cấu trúc đồng hồ cát, và đã sửa cấu trúc, lập luận trước câu chữ (mục 8)
- [ ] Formal checks done via `references/formal-vietnamese.md`
- [ ] Văn bản pháp lý: căn cứ dẫn thật, số kèm chữ trong ngoặc, cấu trúc ĐIỀU/Khoản/Điểm
- [ ] The ending states a consequence or purpose, not a recap
- [ ] Read it aloud: is this how a careful Vietnamese writer would phrase it?

## 11. Sources and refresh

- Giáo trình "Thông tin và xử lý thông tin", Đại học Công nghệ, ĐHQG Hà Nội; Bùi Văn Nam Sơn, "Trò chuyện triết học"; các bài nghiên cứu trên tạp chí khoa học tiếng Việt.
- Humanizer (https://github.com/blader/humanizer) and Wikipedia "Signs of AI writing" (https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), WikiProject AI Cleanup: the ban list in `references/banned-patterns.md`.
- ISO 704:2022 and ISO 1087:2019 (terminology principles); ISO 10241-1 (term systems, synonymy).
- Nová, Jana (2018), "Terms Embraced by the General Public", EURALEX 2018 (determinologization).
- Tạp chí Khoa học ĐHQGHN, Ngoại ngữ 27 (2011), tr. 53-66; "Đặc điểm của thuật ngữ tiếng Việt (phần 1)", nguvan.hnue.edu.vn (2020).
- Nghị quyết 351/2017/UBTVQH14 Điều 18; Nghị định 34/2016/NĐ-CP Điều 63 (sửa bởi 154/2020/NĐ-CP); Nghị định 30/2020/NĐ-CP Phụ lục I; Luật Ban hành văn bản quy phạm pháp luật 2015 Điều 8.
