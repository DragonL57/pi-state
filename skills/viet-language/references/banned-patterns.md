# AI writing patterns to remove (based on Humanizer)

Ban list referenced by section 6 of the `viet-language` skill. Sources: skill
[Humanizer](https://github.com/blader/humanizer), 35 patterns from Wikipedia
["Signs of AI writing"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
(WikiProject AI Cleanup).

This file holds the Vietnamese equivalents, what to keep, and the rewrite check. The
canonical wording of the 35 patterns, their before/after examples, and the full
do-not-over-flag list are in `../english-language/references/banned-patterns.md`; read it
when the precise English wording matters. The no-invented-facts rule applies to every
pattern: never invent a name, number, date, or quote to fill a gap.

## 1. Vietnamese equivalents of the patterns

Các mẫu tiếng Anh trong file gốc dịch sang tiếng Việt thành các kiểu câu sau. Kiểm tra bản
tiếng Việt theo danh sách này:

**Mẫu nội dung**

- Phóng đại tầm quan trọng: "đánh dấu bước ngoặt trong lịch sử", "là minh chứng sống động
  cho", "đóng vai trò then chốt", "mở đường cho", "tượng trưng cho sự trường tồn". Giữ đúng
  sự kiện, bỏ phông bạt.
- Liệt kê tên tuổi để chứng minh tầm vóc: nêu tên báo, tên người, số người theo dõi mà không
  dùng làm bằng chứng thực. Chỉ giữ những tên có nội dung dùng được.
- Phân tích giả bằng cụm đuôi: "..., thể hiện...", "phản ánh...", "góp phần...", "chứng tỏ tầm
  nhìn...", "khẳng định vị thế...". Chỉ giữ ý mà nguồn hỗ trợ.
- Ngôn ngữ quảng cáo: "nằm gọn trong", "tráng lệ", "nổi bật bậc nhất", "vẻ đẹp hùng vĩ", "điểm
  đến không thể bỏ lỡ". Thay bằng mô tả đúng sự thật.
- Nguồn mơ hồ: "các chuyên gia cho rằng", "nhiều nghiên cứu chỉ ra", "dư luận" mà không nêu
  tên. Nêu nguồn thật nếu có; nếu không, bỏ ý. Không bịa nguồn.
- Mục khuôn mẫu "Thách thức và triển vọng": "Dù còn nhiều khó khăn..., nhưng với vị trí chiến
  lược..., X vẫn không ngừng phát triển". Giữ sự kiện cụ thể, bỏ phần chúc tụng.
- Kết bài lạc quan chung chung: "tương lai hứa hẹn", "những điều thú vị đang chờ", "bước tiến
  quan trọng trên hành trình...". Cắt đoạn, kết bằng dữ kiện cuối cùng hoặc kế hoạch thật.

**Mẫu câu và ngữ pháp**

- Cụm đệm làm phình câu: "nhằm mục đích", "do việc rằng", "tại thời điểm hiện tại", "trong
  trường hợp mà", "có khả năng có thể". Rút gọn: "để", "vì", "bây giờ", "nếu", "có thể".
- Quá nhiều từ hạn định chồng lên nhau: "có lẽ có thể sẽ", "trong một số trường hợp có khi".
  Giữ một từ hạn định duy nhất mà nghĩa cần.
- Nhóm ba ép: ba danh từ, ba tính từ, ba động từ dàn hàng khi ý chỉ cần một hoặc hai.
- Dải "từ X đến Y" giả: "từ Big Bang đến vật chất tối", "từ học đường đến doanh nghiệp" khi X,
  Y không phải một dải thật. Liệt kê thẳng các chủ đề.
- Bị động và câu thiếu chủ ngữ: "Không cần cấu hình tệp", "Kết quả được lưu tự động". Nêu
  chủ thể khi cần rõ ai làm gì.
- Tránh "là, có" bằng cụm dài: "đóng vai trò là", "nổi bật với", "tự hào có". Thay bằng "là",
  "có".
- "Không phải X mà là Y", "không chỉ... mà còn..." và kết cụt ("không phải đoán mò"): nói
  thẳng ý.

**Mẫu kiểu chatbot và soạn thảo**

- Lời chatbot sót lại trong bài: "Hy vọng bài viết hữu ích!", "Nếu cần thêm thông tin, hãy cho
  tôi biết". Xóa.
- Miễn trừ giới hạn kiến thức và bịa lấp chỗ trống: "Theo thông tin có sẵn..., có khả năng X
  từng...". Nói rõ nguồn không ghi gì, hoặc bỏ đoạn. Không trình bày phỏng đoán như sự thật.
- Giọng đồng ý vồ vập: "Câu hỏi rất hay!", "Bạn hoàn toàn đúng". Đi thẳng vào câu trả lời.
- Tiết lộ "sự thật sâu xa" giả: "về bản chất", "câu hỏi thực sự là", "điều cốt lõi là". Nói
  thẳng luận điểm.
- Mở đầu giả thân mật: "Thật ra", "Nói thật lòng", "Sự việc là thế này". Bỏ, vào ý ngay.
- Trả lời phản đối không ai nêu: "Điều này không phải là về..., và tôi không cho rằng...". Nếu
  câu chứa luận điểm thật, tách ra nói thẳng; nếu không, bỏ.
- Bật ra lựa chọn giả rồi loại bỏ: "Một cách hấp dẫn là..., nhưng điều đó sẽ...". Bỏ, nêu
  ràng buộc thật.
- Câu thành ngữ giả: "X chính là ngôn ngữ của Y", "sự tin cậy bắt đầu từ X". Thay bằng luận
  điểm cụ thể.
- Heading bị lặp ý trong câu đầu tiên của đoạn ngay dưới nó: xóa câu lặp.
- In đậm tràn lan, emoji trang trí trong heading và gạch đầu dòng, nhãn in đậm kèm hai chấm
  (**Ưu điểm: ...**): bỏ hoặc viết thành văn xuôi.
- Gạch ngang dài làm dấu ngắt câu: thay bằng chấm, phẩy, hai chấm hoặc ngoặc đơn.

## 2. Do not over-flag: what to keep

Nguyên tắc chung: một người viết có thể dùng một vài mẫu trên, nên đừng lấy một mẫu đơn lẻ làm
bằng chứng văn máy. Chỉ viết lại khi nhiều mẫu xuất hiện cùng nhau. Danh sách đầy đủ những gì
phải giữ (ngữ pháp chuẩn, từ học thuật, một từ nối đơn lẻ, câu ngắn để nhấn, trích dẫn không bị
viết lại...) nằm ở `../english-language/references/banned-patterns.md`, mục "Do not over-flag".

Chi tiết người viết phải giữ:

- Chi tiết cụ thể lạ: địa chỉ thật, câu trích dẫn kỳ lạ, cụm từ riêng của tác giả.
- Cảm xúc lẫn lộn, mâu thuẫn chưa giải quyết: "tôi nghĩ phần này ổn, nhưng vẫn thấy khó chịu
  mà không giải thích được."
- Nhịp câu dài ngắn xen kẽ. Văn máy thường đều đặn, vừa tầm.
- Tự sửa lời giữa câu, ngoặc xen kẽ: "(tôi cứ muốn nói 'gần như' ở đây, nhưng thật sự nó chắc
  chắn.)"

## 3. Rewrite check process

- Đọc bản gốc, đánh dấu từng mẫu AI có mặt.
- Viết lại, đọc thành tiếng để kiểm tra nhịp câu và động từ đơn giản (là, có / is, has).
- Tự hỏi hai câu trước khi nộp: (1) "Còn chỗ nào nghe như máy viết không?" (2) "Bản viết lại có
  thêm hoặc mất tên riêng, số liệu, ngày tháng, trích dẫn nào không?" Mất hoặc thêm thông tin
  không có nguồn là lỗi.
- If a sentence stays awkward after two fixes, rewrite the paragraph around its main point
  instead of patching one phrase.
