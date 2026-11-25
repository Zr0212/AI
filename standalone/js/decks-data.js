/**
 * standalone/js/decks-data.js
 * Du lieu toan bo 13 bai giang duoc dong goi san cho che do Standalone Offline.
 * Chay truc tiep bang trinh duyet khong can may chu, khong can socket.
 */

(function(global) {
  const decks = [
  {
    "deckId": "01-lam-quen-voi-ai-va-mot-so-cong-nghe-ai-quen-thuoc",
    "title": "BÀI 1: LÀM QUEN VỚI AI VÀ MỘT SỐ CÔNG NGHỆ AI QUEN THUỘC",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "estimatedDuration": "45 phút (1 tiết)",
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "TIẾT 1 &bull; BÀI HỌC MỚI",
        "title": "LÀM QUEN VỚI CÔNG NGHỆ AI",
        "subtitle": "Getting to Know AI and Familiar Technologies",
        "subject": "TIN HỌC 6",
        "author": "Tổ Tin học THCS",
        "imageNote": "Ảnh máy tính bỏ túi, biểu tượng dịch ngôn ngữ và ảnh nhận dạng cốc.",
        "notes": "1 phút mở đầu: Chiếu ảnh vật quen thuộc, hỏi việc máy tính làm được."
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "CHUẨN ĐẦU RA",
        "title": "HÔM NAY EM SẼ LÀM GÌ?",
        "subtitle": "3 mục tiêu và sản phẩm cần hoàn thành trong tiết học",
        "objectives": [
          {
            "label": "PHÂN LOẠI",
            "title": "Xếp đúng 4/6 thẻ tính năng",
            "desc": "Phân biệt tính năng có sử dụng AI và tính năng thông thường."
          },
          {
            "label": "TRẢI NGHIỆM",
            "title": "Thử nghiệm hai tính năng AI",
            "desc": "Trải nghiệm dịch câu tiếng Anh và nhận dạng đồ vật qua ảnh."
          },
          {
            "label": "ĐÁNH GIÁ",
            "title": "Nêu cách kiểm tra kết quả",
            "desc": "Biết đối chiếu bản dịch với bảng từ, nhãn ảnh với vật thật."
          }
        ],
        "notes": "3 phút: Giới thiệu 3 sản phẩm P1.1, P1.2, P1.3B. Hướng dẫn nhóm 4 em."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "compare",
        "category": "KHỞI ĐỘNG &bull; 4 PHÚT",
        "title": "CÙNG NHANH, CÙNG LÀ AI?",
        "subtitle": "So sánh phép cộng máy tính và mô hình AI gán nhãn ảnh cốc",
        "columnA": {
          "title": "Máy tính bỏ túi (125 + 37)",
          "items": [
            "Nhận đầu vào là các con số xác định.",
            "Cộng theo thuật toán cứng lập trình sẵn.",
            "Kết quả chính xác tuyệt đối 100%.",
            "Không có khả năng tự học hỏi thêm."
          ]
        },
        "columnB": {
          "title": "Mô hình AI (Gán nhãn ảnh cốc)",
          "items": [
            "Nhận đầu vào là dữ liệu hình ảnh đa chiều.",
            "Dự đoán dựa trên dữ liệu mẫu đã học.",
            "Kết quả kèm theo độ tin cậy xác suất.",
            "Có thể cải thiện khi học thêm dữ liệu."
          ]
        },
        "imageNote": "Ảnh so sánh: Máy tính bỏ túi hiện số 162 cạnh ảnh cốc có nhãn Cup.",
        "notes": "4 phút: Cặp đôi thảo luận 2 phút. Nhấn mạnh tốc độ không là thước đo AI."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "BÌNH CHỌN VÀ THẢO LUẬN",
        "subtitle": "Bình chọn ý kiến phù hợp nhất với suy nghĩ của em",
        "activity": {
          "id": "act-poll-1",
          "type": "poll",
          "prompt": "Theo em, tốc độ xử lý nhanh có đủ chứng minh một công cụ là AI không?",
          "points": 0,
          "explanation": "Tốc độ nhanh chưa đủ chứng minh AI. AI học từ dữ liệu để dự đoán.",
          "options": [
            {
              "id": "A",
              "text": "Có - Cứ xử lý thông tin nhanh là có trí tuệ nhân tạo."
            },
            {
              "id": "B",
              "text": "Không - Cần xem xét tính năng và cách công cụ hoạt động."
            },
            {
              "id": "C",
              "text": "Chưa chắc - Cần thêm thông tin để kiểm tra."
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "image-text",
        "category": "KHÁM PHÁ 2.1 &bull; XEM VIDEO",
        "title": "VIDEO: AI HOẠT ĐỘNG THẾ NÀO?",
        "subtitle": "Introducing How AI Works &bull; Code.org (00:00 - 01:29)",
        "text": "Quan sát video từ 00:00 đến 01:29 để nhận biết các công việc AI có thể hỗ trợ.",
        "image": "assets/images/video-codeorg-how-ai-works.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=Ok-xpKjKp2g",
        "videoTime": "00:00 - 01:29",
        "imageNote": "Khung hình từ video Code.org: Introducing How AI Works (00:00 - 01:29)",
        "points": [
          "Xem từ 00:00 đến 01:29: Chú ý các ví dụ AI nhận dạng, dịch thuật và dự đoán.",
          "Gợi ý quan sát: Nhận diện đồ vật, phân loại dữ liệu, tự động hóa tác vụ.",
          "Bấm vào ảnh hoặc nút bên dưới để mở xem video trực tiếp trên YouTube."
        ],
        "notes": "Xem đoạn video 00:00 - 01:29. Chú ý các ví dụ AI dịch thuật, nhận dạng và dự đoán."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; HỎI ĐÁP",
        "title": "XEM XONG, EM TRẢ LỜI",
        "subtitle": "Hai câu hỏi thu hoạch nhanh từ đoạn video vừa quan sát",
        "exampleA": {
          "tag": "CÂU HỎI 1: TỪ VIDEO",
          "title": "AI hỗ trợ những việc gì?",
          "desc": "Hỗ trợ các nhiệm vụ như nhận dạng đồ vật, dịch thuật hoặc dự đoán."
        },
        "exampleB": {
          "tag": "CÂU HỎI 2: ÁP DỤNG",
          "title": "Phép cộng nhanh có là AI?",
          "desc": "Chưa đủ. Máy tính bỏ túi chỉ thực hiện quy tắc tính toán thông thường."
        },
        "notes": "Dành 20-30s cho học sinh suy nghĩ và trả lời nhanh miệng."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-reflect-video-1",
          "type": "reflection",
          "prompt": "Từ video vừa xem, em thấy AI có thể hỗ trợ con người những công việc gì?",
          "placeholder": "Ghi ngắn gọn 1-2 công việc AI có thể làm (nhận dạng, dịch thuật...)",
          "points": 0,
          "explanation": "AI hỗ trợ các nhiệm vụ nhận dạng, dịch ngôn ngữ hoặc dự đoán xu hướng."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "cream",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.1 &bull; SÁU TÍNH NĂNG",
        "title": "QUAN SÁT SÁU TÍNH NĂNG",
        "subtitle": "Đọc kỹ mô tả hoạt động của 6 tính năng quen thuộc trong phiếu P1.1",
        "cards": [
          {
            "title": "1. Cặp Tính toán & Dịch",
            "desc": "Máy tính cộng 125 + 37 so với AI dịch câu tiếng Anh mới."
          },
          {
            "title": "2. Cặp Ghi âm & Giọng nói",
            "desc": "Ghi âm lưu âm thanh so với AI chuyển lời nói thành chữ."
          },
          {
            "title": "3. Cặp Bản đồ số",
            "desc": "Phóng to bản đồ so với AI dự đoán tình trạng kẹt xe giao thông."
          }
        ],
        "imageNote": "Bộ 6 thẻ tính năng kèm hình minh họa trực quan từ phiếu P1.1.",
        "notes": "Giới thiệu 6 thẻ tính năng, chuẩn bị cho bước phân loại vào 3 nhóm."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.1 &bull; PHÂN LOẠI",
        "title": "XẾP VÀO BA NHÓM",
        "subtitle": "Phân loại các tính năng theo thông tin mô tả trong phiếu P1.1",
        "cards": [
          {
            "title": "1. Nhóm Có AI",
            "desc": "Dịch câu mới, nhận dạng giọng nói thành chữ, dự đoán kẹt xe."
          },
          {
            "title": "2. Không có AI",
            "desc": "Cộng số học cơ bản, ghi âm lưu âm thanh, phóng to bản đồ."
          },
          {
            "title": "3. Chưa đủ dữ kiện",
            "desc": "Chỉ biết ứng dụng có nút phóng to (cần tìm hiểu thêm tính năng)."
          }
        ],
        "imageNote": "Ba ô phân loại Có AI, Không có AI và Chưa đủ dữ kiện.",
        "notes": "10 phút: Xem video 3p, nhóm xếp thẻ 5p, báo cáo 1p, chốt 1p. Đạt 4/6 thẻ."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "BÀI TẬP NỐI CỘT",
        "subtitle": "Ghép nối các cặp thông tin tương ứng ở hai cột",
        "activity": {
          "id": "act-matching-1",
          "type": "matching",
          "prompt": "Nối 6 tính năng mô tả với nhóm phân loại chính xác tương ứng:",
          "points": 10,
          "explanation": "Thẻ 2, 4, 6 dùng mô hình AI. Thẻ 1, 3, 5 là thao tác số thông thường.",
          "answer": {
            "p1": "r-no",
            "p2": "r-ai",
            "p3": "r-no",
            "p4": "r-ai",
            "p5": "r-no",
            "p6": "r-ai"
          },
          "pairs": [
            {
              "id": "p1",
              "left": "1. Máy tính cộng 125 + 37",
              "right": "Không có AI",
              "rightId": "r-no"
            },
            {
              "id": "p2",
              "left": "2. Dịch câu tiếng Anh mới",
              "right": "Có sử dụng AI",
              "rightId": "r-ai"
            },
            {
              "id": "p3",
              "left": "3. Ghi âm lưu âm thanh",
              "right": "Không có AI",
              "rightId": "r-no"
            },
            {
              "id": "p4",
              "left": "4. Chuyển lời nói thành chữ",
              "right": "Có sử dụng AI",
              "rightId": "r-ai"
            },
            {
              "id": "p5",
              "left": "5. Phóng to bản đồ số",
              "right": "Không có AI",
              "rightId": "r-no"
            },
            {
              "id": "p6",
              "left": "6. Dự đoán kẹt xe giao thông",
              "right": "Có sử dụng AI",
              "rightId": "r-ai"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "cream",
        "layout": "two-examples",
        "category": "THỰC HÀNH 2.2 &bull; DỊCH THUẬT",
        "title": "THỬ DỊCH HAI CÂU TIẾNG ANH",
        "subtitle": "Trải nghiệm tính năng AI dịch thuật và đối chiếu với bảng từ (P1.2)",
        "exampleA": {
          "tag": "CÂU 1: NHẬP VÀO AI",
          "title": "This is a school bag.",
          "desc": "Bản dịch gợi ý: Đây là chiếc cặp sách (school bag = cặp sách)."
        },
        "exampleB": {
          "tag": "CÂU 2: NHẬP VÀO AI",
          "title": "The cat is under the table.",
          "desc": "Bản dịch: Con mèo ở dưới cái bàn (under: ở dưới, table: bàn)."
        },
        "imageNote": "Giao diện công cụ dịch thuật văn bản tiếng Anh sang tiếng Việt.",
        "notes": "10 phút: Theo dõi dòng 1 P1.2, nhắc đổi lượt thao tác trước khi nhận dạng ảnh."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "cream",
        "layout": "activity",
        "category": "THỰC HÀNH 2.2 &bull; BÀI TẬP",
        "title": "CÂU HỎI VẬN DỤNG NGẮN",
        "subtitle": "Nhập câu trả lời ngắn gọn vào ô văn bản bên dưới",
        "activity": {
          "id": "act-short-1",
          "type": "short-text",
          "prompt": "Khi AI dịch câu tiếng Anh mới, em đối chiếu với nguồn nào để kiểm tra bản dịch?",
          "placeholder": "Ghi nguồn kiểm tra: bảng từ, từ điển, SGK...",
          "points": 10,
          "explanation": "Kiểm tra bản dịch bằng bảng từ vựng, từ điển hoặc sách giáo khoa.",
          "ignoreDiacritics": true,
          "answer": [
            "bảng từ",
            "từ điển",
            "sách giáo khoa",
            "sgk",
            "bang tu",
            "tu dien"
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "navy",
        "layout": "two-examples",
        "category": "THỰC HÀNH 2.2 &bull; THỊ GIÁC",
        "title": "HAI ẢNH, CÙNG CHIẾC CỐC",
        "subtitle": "Thử nghiệm nhận dạng ảnh cốc đủ sáng và thiếu sáng (Hình 1.2)",
        "exampleA": {
          "tag": "ẢNH A: ĐỦ SÁNG",
          "title": "Chiếc cốc chụp rõ nét",
          "desc": "Ánh sáng tiêu chuẩn, mô hình dự đoán nhãn Cốc với độ tin cậy cao."
        },
        "exampleB": {
          "tag": "ẢNH B: THIẾU SÁNG",
          "title": "Chiếc cốc bị tối",
          "desc": "Ánh sáng yếu, góc chụp nghiêng, mô hình có thể dự đoán kém chính xác."
        },
        "imageNote": "Hình 1.2 SGK Tin học 6: Ảnh cốc đủ sáng và ảnh cốc thiếu sáng.",
        "notes": "6 phút: Nhóm ghi nguyên kết quả quan sát. Không ấn định ảnh tối phải sai."
      },
      {
        "id": "slide-14",
        "pageNumber": 14,
        "theme": "navy",
        "layout": "activity",
        "category": "THỰC HÀNH 2.2 &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-reflect-cup-1",
          "type": "reflection",
          "prompt": "Hai lần thử đúng có chứng minh mô hình AI luôn luôn đúng không? Vì sao?",
          "placeholder": "Ghi câu trả lời của em: Không, vì...",
          "points": 0,
          "explanation": "Hai lần đúng không chứng minh luôn đúng. Luôn cần con người kiểm tra lại."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-15",
        "pageNumber": 15,
        "theme": "cream",
        "layout": "three-cards",
        "category": "KIẾN THỨC CỐT LÕI",
        "title": "KIẾN THỨC CẦN NHỚ",
        "subtitle": "Ba nguyên tắc cốt lõi khi nhận diện và sử dụng công nghệ AI",
        "cards": [
          {
            "title": "1. Xét tính năng cụ thể",
            "desc": "Không đánh giá cả ứng dụng; cần xem cách hoạt động từng tính năng."
          },
          {
            "title": "2. Cơ chế xử lý dữ liệu",
            "desc": "Đầu vào (văn bản/ảnh) -> AI tính xác suất -> Dự đoán kết quả."
          },
          {
            "title": "3. Luôn kiểm tra lại",
            "desc": "Hai lượt đúng không chứng minh AI luôn đúng. Luôn kiểm chứng trước khi dùng."
          }
        ],
        "imageNote": "Sơ đồ ba khối quy trình đầu vào - xử lý AI - kết quả kèm ví dụ.",
        "notes": "4 phút chốt: AI chỉ hỗ trợ, con người chịu trách nhiệm kiểm tra kết quả."
      },
      {
        "id": "slide-16",
        "pageNumber": 16,
        "theme": "navy",
        "layout": "case-study",
        "category": "LUYỆN TẬP 3 &bull; MÀN 1/3",
        "title": "TÍNH NĂNG NÀO CÓ AI?",
        "subtitle": "Luyện tập nhận diện tính năng có sử dụng AI (Câu 1 P1.3A)",
        "scenario": "Học sinh luyện tập cá nhân nhận biết các tính năng trên thiết bị công nghệ.",
        "question": "Trong các tính năng dưới đây, tính năng nào được xác định có sử dụng AI?",
        "imageNote": "Bốn biểu tượng ứng dụng tương ứng với bốn lựa chọn A, B, C, D.",
        "notes": "6 phút cho cả cụm 01.07. Làm cá nhân 4p, đối chiếu 1p, chốt 1p."
      },
      {
        "id": "slide-17",
        "pageNumber": 17,
        "theme": "navy",
        "layout": "activity",
        "category": "LUYỆN TẬP 3 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-1",
          "type": "choice",
          "prompt": "Tính năng nào dưới đây được xác định có sử dụng trí tuệ nhân tạo (AI)?",
          "points": 10,
          "explanation": "Chuyển lời nói thành chữ dùng mô hình AI; các mục khác là thao tác thường.",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Mở tệp văn bản đã lưu trên máy tính."
            },
            {
              "id": "B",
              "text": "Thực hiện phép tính cộng số học cơ bản."
            },
            {
              "id": "C",
              "text": "Dùng mô hình AI chuyển lời nói thành chữ."
            },
            {
              "id": "D",
              "text": "Phát lại một đoạn ghi âm có sẵn trong máy."
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-18",
        "pageNumber": 18,
        "theme": "cream",
        "layout": "three-cards",
        "category": "LUYỆN TẬP 3 &bull; MÀN 2/3",
        "title": "NHẬN ĐỊNH ĐÚNG HAY SAI?",
        "subtitle": "Đánh giá ba phát biểu phổ biến về trí tuệ nhân tạo (Câu 3 P1.3A)",
        "cards": [
          {
            "title": "1. Mệnh đề 1",
            "desc": "Mọi ứng dụng điện thoại đều là AI (SAI - phải xét từng tính năng)."
          },
          {
            "title": "2. Mệnh đề 2",
            "desc": "Hai lần đúng chứng minh AI luôn đúng (SAI - mẫu ít không đại diện)."
          },
          {
            "title": "3. Mệnh đề 3",
            "desc": "Luôn cần kiểm tra kết quả của AI (ĐÚNG - con người chịu trách nhiệm)."
          }
        ],
        "imageNote": "Ba thẻ Đúng/Sai kèm ký hiệu đánh dấu kiểm chứng.",
        "notes": "Xem lỗi hiểu nhầm của học sinh để chốt cuối cụm. Nhấn mạnh việc kiểm tra."
      },
      {
        "id": "slide-19",
        "pageNumber": 19,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP 3 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-2",
          "type": "choice",
          "prompt": "Khẳng định nào dưới đây là ĐÚNG về trí tuệ nhân tạo?",
          "points": 10,
          "explanation": "Luôn cần kiểm tra lại kết quả do AI đưa ra trước khi sử dụng.",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Mọi ứng dụng trên điện thoại thông minh đều là AI."
            },
            {
              "id": "B",
              "text": "Hai lần thử đúng chứng minh công cụ AI luôn đúng 100%."
            },
            {
              "id": "C",
              "text": "Luôn cần kiểm tra lại kết quả do AI đưa ra trước khi dùng."
            },
            {
              "id": "D",
              "text": "AI tự động hoàn toàn và không bao giờ mắc lỗi."
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-20",
        "pageNumber": 20,
        "theme": "navy",
        "layout": "case-study",
        "category": "LUYỆN TẬP 3 &bull; MÀN 3/3",
        "title": "PHÓNG TO BẢN ĐỒ NÓI GÌ?",
        "subtitle": "Phân tích tình huống nhận định tính năng bản đồ (Câu 4 P1.3A)",
        "scenario": "Một bạn nói: 'Bản đồ có nút phóng to nên chắc chắn là ứng dụng AI'.",
        "question": "Khẳng định trên đúng hay sai? Thông tin đó đã đủ để kết luận chưa?",
        "imageNote": "Ảnh chụp nút phóng to thu nhỏ trên bản đồ số kèm dấu hỏi.",
        "notes": "Thu nhanh câu 4 ở HS còn nhầm. Khóa bài tập và công bố đáp án cho cả cụm."
      },
      {
        "id": "slide-21",
        "pageNumber": 21,
        "theme": "navy",
        "layout": "activity",
        "category": "LUYỆN TẬP 3 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-3",
          "type": "choice",
          "prompt": "Biết ứng dụng có nút phóng to bản đồ, đã đủ căn cứ nói ứng dụng dùng AI chưa?",
          "points": 10,
          "explanation": "Chưa đủ căn cứ. Nút phóng to chỉ là thao tác hiển thị hình ảnh.",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Đã đủ - Vì mọi bản đồ điện tử đều sử dụng AI."
            },
            {
              "id": "B",
              "text": "Chưa đủ - Phóng to chỉ là thao tác hiển thị hình ảnh."
            },
            {
              "id": "C",
              "text": "Đã đủ - Vì thao tác phóng to diễn ra rất nhanh chóng."
            },
            {
              "id": "D",
              "text": "Đã đủ - Vì bản đồ cần kết nối Internet mới mở được."
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-22",
        "pageNumber": 22,
        "theme": "cream",
        "layout": "four-grid",
        "category": "VẬN DỤNG &bull; 4 PHÚT",
        "title": "EM DÙNG VÀ KIỂM THẾ NÀO?",
        "subtitle": "Bốn yếu tố trong thẻ kế hoạch sử dụng AI an toàn P1.3B",
        "items": [
          {
            "title": "1. Nhu cầu thực tế",
            "desc": "Hiểu câu tiếng Anh mới hoặc tìm tên đồ vật qua hình ảnh."
          },
          {
            "title": "2. Đầu vào & Kết quả",
            "desc": "Dữ liệu cung cấp cho AI và dạng kết quả dự đoán nhận được."
          },
          {
            "title": "3. Công dụng hỗ trợ",
            "desc": "Giúp tiết kiệm thời gian và gợi ý giải quyết vấn đề nhanh chóng."
          },
          {
            "title": "4. Giới hạn & Kiểm tra",
            "desc": "Luôn đối chiếu lại với SGK, từ điển hoặc vật thể thực tế."
          }
        ],
        "imageNote": "Thẻ kế hoạch 4 ô kẻ theo mẫu phiếu P1.3B của học sinh.",
        "notes": "4 phút: Viết cá nhân 3p, chia sẻ 0.5p, chốt 0.25p. Đánh giá mã 6.3.TC1b."
      },
      {
        "id": "slide-23",
        "pageNumber": 23,
        "theme": "cream",
        "layout": "activity",
        "category": "VẬN DỤNG &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-reflect-1",
          "type": "reflection",
          "prompt": "Chọn 1 tính năng: Tính năng giúp gì và em kiểm tra bằng cách nào?",
          "placeholder": "Ghi ngắn gọn: Em chọn tính năng... giúp em... và em kiểm tra bằng cách...",
          "points": 0,
          "explanation": "Biết chọn tính năng và luôn kiểm tra kết quả là năng lực số có trách nhiệm."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-24",
        "pageNumber": 24,
        "theme": "navy",
        "layout": "recap",
        "category": "NHIỆM VỤ NỐI TIẾP",
        "title": "GHI LẠI TÍNH NĂNG EM GẶP",
        "subtitle": "Nhiệm vụ quan sát thực tế chuẩn bị cho tiết học tiếp theo",
        "points": [
          "Quan sát một tính năng thông minh trên thiết bị quen thuộc ở nhà.",
          "Ghi lại tên tính năng và công dụng thực tế của tính năng đó.",
          "Nêu căn cứ nhận định: Có AI, không có AI hoặc chưa đủ thông tin.",
          "An toàn: Không cần mở tài khoản mới, không tải dữ liệu cá nhân."
        ],
        "imageNote": "Mẫu ghi chép nhật ký quan sát một dòng chuẩn bị cho tiết 2.",
        "notes": "1 phút: Quan sát tại nhà không cần tài khoản hay tải thông tin cá nhân."
      }
    ],
    "fileName": "01-lam-quen-voi-ai-va-mot-so-cong-nghe-ai-quen-thuoc.json"
  },
  {
    "deckId": "02-con-nguoi-tao-va-dieu-khien-ai",
    "title": "BÀI 2: CON NGƯỜI TẠO VÀ ĐIỀU KHIỂN AI",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "TIẾT 2 &bull; BÀI HỌC MỚI",
        "title": "CON NGƯỜI VÀ MÔ HÌNH AI",
        "subtitle": "Humans Create and Control AI &bull; Tin học 6",
        "subject": "TIN HỌC 6",
        "author": "Tổ Tin học THCS",
        "imageNote": "Ảnh chiếc cốc và ô kết quả dự đoán nhãn Cốc từ tiết 1.",
        "notes": "Kết nối ví dụ nhận dạng cốc từ tiết 1. Ai đứng sau mô hình và quyết định sử dụng?"
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "CHUẨN ĐẦU RA &bull; 4 PHÚT",
        "title": "MỤC TIÊU TIẾT 2",
        "subtitle": "3 nhiệm vụ chính cần hoàn thành trong tiết học hôm nay",
        "objectives": [
          {
            "label": "KHÁI NIỆM",
            "title": "Bốn thuật ngữ cốt lõi",
            "desc": "Phân biệt dữ liệu, thuật toán, mô hình và kết quả dự đoán."
          },
          {
            "label": "QUY TRÌNH",
            "title": "Vẽ hai sơ đồ AI",
            "desc": "Xây dựng sơ đồ quy trình huấn luyện và sử dụng mô hình."
          },
          {
            "label": "TRÁCH NHIỆM",
            "title": "Vai trò con người",
            "desc": "Chỉ rõ ai kiểm tra kết quả và chịu trách nhiệm quyết định."
          }
        ],
        "notes": "4 phút: Đọc mục tiêu như ba việc cần làm. Nhấn mạnh sản phẩm P2.1, P2.2, P2.3."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHỞI ĐỘNG &bull; 4 PHÚT",
        "title": "AI LÀM BA VIỆC NÀY?",
        "subtitle": "Truy tìm vai trò của con người đằng sau kết quả nhận dạng chiếc cốc",
        "cards": [
          {
            "title": "1. Chọn nhiệm vụ",
            "desc": "Ai đặt ra mục tiêu nhận dạng chiếc cốc hay đồ vật khác?"
          },
          {
            "title": "2. Cung cấp dữ liệu",
            "desc": "Ai chuẩn bị và gắn nhãn cho các bức ảnh ví dụ mẫu?"
          },
          {
            "title": "3. Kiểm tra kết quả",
            "desc": "Ai phát hiện và xử lý khi mô hình đưa ra dự đoán sai lệch?"
          }
        ],
        "imageNote": "Ảnh cốc kèm nhãn Cốc và ba vị trí đánh dấu hỏi chấm.",
        "notes": "4 phút: Cặp đôi viết 3 dự đoán. Sau đó một cặp nêu phần việc cho từng người."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-reflect-2-1",
          "type": "reflection",
          "prompt": "Theo em, ai làm 3 việc trên và họ đóng vai trò gì đối với hệ thống AI?",
          "placeholder": "Ghi ngắn gọn suy nghĩ của em về người đứng sau 3 việc...",
          "points": 0,
          "explanation": "Con người đặt mục tiêu, chuẩn bị dữ liệu và quyết định cách dùng AI."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "image-text",
        "category": "KHÁM PHÁ 2.1 &bull; XEM VIDEO",
        "title": "VIDEO: HỌC MÁY LÀ GÌ?",
        "subtitle": "AI: What is Machine Learning? &bull; Code.org (02:00 - 02:30)",
        "text": "Xem video từ 02:00 đến 02:30 để quan sát cách máy học phân biệt ô tô và xe đạp.",
        "image": "assets/images/video-codeorg-machine-learning.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=OeU5m6vRyCk",
        "videoTime": "02:00 - 02:30",
        "imageNote": "Khung hình 02:15 từ video Code.org: AI: What is Machine Learning?",
        "points": [
          "Quan sát từ 02:00 đến 02:30: Chú ý ảnh nào dùng dạy máy, ảnh nào dùng kiểm tra.",
          "Gợi ý: Con người cung cấp ảnh gắn nhãn, thuật toán tạo mô hình phân loại.",
          "Bấm vào ảnh hoặc nút bên dưới để mở xem video trực tiếp trên YouTube."
        ],
        "notes": "Xem đoạn 02:00 - 02:30. Cho học sinh đọc nhanh 2 câu hỏi ở slide 5 trước khi xem."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; HỎI ĐÁP",
        "title": "XEM XONG, EM TRẢ LỜI",
        "subtitle": "Hai câu hỏi thu hoạch nhanh từ đoạn video vừa quan sát",
        "exampleA": {
          "tag": "CÂU HỎI 1: TỪ VIDEO",
          "title": "Ảnh nào giúp máy học?",
          "desc": "Dùng các ảnh ví dụ đã được con người gắn nhãn ô tô hoặc xe đạp."
        },
        "exampleB": {
          "tag": "CÂU HỎI 2: ÁP DỤNG",
          "title": "Ai gắn nhãn và ai kiểm?",
          "desc": "Con người gắn nhãn ảnh mẫu; người kiểm đưa ảnh mới so với vật thật."
        },
        "notes": "20-30s suy nghĩ, hỏi đáp nhanh. Dẫn dắt chuyển sang bài ghép 4 khái niệm P2.1."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-video-2",
          "type": "choice",
          "prompt": "Trong video, loại ảnh nào được dùng để thuật toán học phân biệt đồ vật?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Ảnh chụp ngẫu nhiên chưa qua xử lý hay phân loại."
            },
            {
              "id": "B",
              "text": "Các ảnh ví dụ đã được con người gắn nhãn trước."
            },
            {
              "id": "C",
              "text": "Ảnh do máy tính tự vẽ ra theo thuật toán đồ họa."
            },
            {
              "id": "D",
              "text": "Ảnh bất kỳ trên mạng mà không cần ai kiểm duyệt."
            }
          ],
          "explanation": "Máy học cần dữ liệu mẫu đã được con người gắn nhãn sẵn để tìm quy luật."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "cream",
        "layout": "four-grid",
        "category": "KHÁM PHÁ 2.1 &bull; BỐN KHÁI NIỆM",
        "title": "BỐN KHÁI NIỆM THEN CHỐT",
        "subtitle": "Khám phá các thành phần cốt lõi tạo nên hệ thống học máy (P2.1)",
        "cells": [
          {
            "title": "1. Dữ liệu (Data)",
            "desc": "Các ảnh ví dụ mẫu đã được con người gắn sẵn nhãn Cốc hoặc Bút."
          },
          {
            "title": "2. Thuật toán học",
            "desc": "Phương pháp toán học giúp máy tìm ra quy luật từ các ví dụ mẫu."
          },
          {
            "title": "3. Mô hình (Model)",
            "desc": "Kết quả thu được sau khi học, dùng để nhận dạng ảnh mới."
          },
          {
            "title": "4. Kết quả dự đoán",
            "desc": "Nhãn Cốc hoặc Bút do mô hình gán cho một bức ảnh mới đưa vào."
          }
        ],
        "imageNote": "Sơ đồ kết nối bốn khái niệm dữ liệu, thuật toán, mô hình và dự đoán.",
        "notes": "5 phút: Ghép thẻ theo phiếu P2.1, phân biệt tên mô hình với dự đoán cụ thể."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "BÀI TẬP NỐI CỘT",
        "subtitle": "Ghép nối các cặp thông tin tương ứng ở hai cột",
        "activity": {
          "id": "act-matching-2-1",
          "type": "matching",
          "prompt": "Nối đúng từng khái niệm với mô tả tương ứng theo phiếu P2.1:",
          "points": 10,
          "explanation": "Dữ liệu: ảnh mẫu; Thuật toán: cách học; Mô hình: kết quả; Dự đoán: nhãn.",
          "answer": {
            "p1": "r1",
            "p2": "r2",
            "p3": "r3",
            "p4": "r4"
          },
          "pairs": [
            {
              "id": "p1",
              "left": "1. Dữ liệu mẫu",
              "right": "Ảnh ví dụ đã gắn nhãn sẵn",
              "rightId": "r1"
            },
            {
              "id": "p2",
              "left": "2. Thuật toán học",
              "right": "Cách máy tìm ra quy luật",
              "rightId": "r2"
            },
            {
              "id": "p3",
              "left": "3. Mô hình AI",
              "right": "Kết quả sau quá trình học",
              "rightId": "r3"
            },
            {
              "id": "p4",
              "left": "4. Kết quả dự đoán",
              "right": "Nhãn gán cho ảnh mới",
              "rightId": "r4"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "navy",
        "layout": "steps",
        "category": "KHÁM PHÁ 2.1 &bull; HAI SƠ ĐỒ",
        "title": "QUY TRÌNH HAI CÔNG ĐOẠN",
        "subtitle": "Sắp xếp đúng thứ tự các bước trong quy trình huấn luyện mô hình AI (P2.2)",
        "steps": [
          {
            "title": "Bước 1: Chuẩn bị dữ liệu",
            "desc": "Tập hợp hình ảnh mẫu và gắn nhãn rõ ràng từng đồ vật."
          },
          {
            "title": "Bước 2: Thuật toán học",
            "desc": "Áp dụng thuật toán học máy để trích xuất quy luật từ mẫu."
          },
          {
            "title": "Bước 3: Tạo ra mô hình",
            "desc": "Đóng gói quy luật đã học thành mô hình AI sẵn sàng sử dụng."
          }
        ],
        "imageNote": "Sơ đồ hai dải thẻ thể hiện quá trình huấn luyện và sử dụng mô hình.",
        "notes": "3 phút: Sắp xếp hai sơ đồ nháp ngay trên slide, chốt sơ đồ sau khi thử."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "BÀI TẬP SẮP XẾP THỨ TỰ",
        "subtitle": "Sắp xếp các bước theo đúng trình tự logic",
        "activity": {
          "id": "act-ordering-2-1",
          "type": "ordering",
          "prompt": "Sắp xếp 3 bước của quy trình huấn luyện mô hình AI theo đúng thứ tự:",
          "points": 10,
          "explanation": "Huấn luyện: Dữ liệu mẫu có nhãn -> Thuật toán học -> Mô hình hoàn chỉnh.",
          "answer": [
            "o1",
            "o2",
            "o3"
          ],
          "items": [
            {
              "id": "o2",
              "text": "Cho thuật toán học tìm quy luật từ mẫu"
            },
            {
              "id": "o1",
              "text": "Chuẩn bị tập dữ liệu mẫu đã gắn nhãn"
            },
            {
              "id": "o3",
              "text": "Tạo ra mô hình AI hoàn chỉnh"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "cream",
        "layout": "four-grid",
        "category": "KHÁM PHÁ 2.2 &bull; 20 PHÚT",
        "title": "BỐN BẠN, BỐN VAI TRÒ",
        "subtitle": "Phân công nhiệm vụ nhóm 4 học sinh để mô phỏng hệ thống AI (P2.2)",
        "cells": [
          {
            "title": "1. Người đặt mục tiêu",
            "desc": "Xác định nhiệm vụ nhận dạng Cốc hay Bút và phạm vi áp dụng."
          },
          {
            "title": "2. Người chuẩn bị dữ liệu",
            "desc": "Thu thập, gắn nhãn các ảnh ví dụ mẫu và kiểm tra nhãn."
          },
          {
            "title": "3. Đóng vai hệ thống",
            "desc": "Áp dụng quy tắc giấy để nhận dạng đồ vật mới đưa vào."
          },
          {
            "title": "4. Người kiểm tra",
            "desc": "So sánh nhãn dự đoán với vật thật và quyết định sử dụng."
          }
        ],
        "imageNote": "Bốn biểu tượng đại diện cho bốn vai trò con người trong hệ thống AI.",
        "notes": "1 phút: Giao vai trong nhóm 4 em. Nhắc đổi vai sau 2 lượt thử nghiệm."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.2 &bull; QUY TẮC GIẤY",
        "title": "QUY TẮC NHẬN DẠNG MÔ PHỎNG",
        "subtitle": "Ba nhánh logic mô phỏng cách hệ thống phân loại đồ vật dựa trên đặc trưng",
        "cards": [
          {
            "title": "1. Nhánh Bút",
            "desc": "Đồ vật có ngòi viết nhìn thấy rõ ràng → Gán nhãn BÚT."
          },
          {
            "title": "2. Nhánh Cốc",
            "desc": "Đồ vật có lòng chứa và miệng mở phía trên → Gán nhãn CỐC."
          },
          {
            "title": "3. Chưa xác định",
            "desc": "Các đồ vật không thỏa mãn hai điều kiện trên → CHƯA XÁC ĐỊNH."
          }
        ],
        "imageNote": "Sơ đồ ba nhánh quy tắc phân loại kèm hình minh họa bút, cốc và thìa.",
        "notes": "Hỏi nếu vật không thuộc hai lớp định nghĩa (như chiếc thìa) thì xử lý ra sao."
      },
      {
        "id": "slide-14",
        "pageNumber": 14,
        "theme": "cream",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.2 &bull; MÔ PHỎNG",
        "title": "THỬ VỚI A7, A8 VÀ THÌA",
        "subtitle": "Áp dụng quy tắc giấy với 3 vật thể thử nghiệm mới đưa vào hệ thống",
        "cards": [
          {
            "title": "Thẻ A7: Cốc giấy",
            "desc": "Có lòng chứa và miệng mở → Hệ thống nhận dạng đúng là CỐC."
          },
          {
            "title": "Thẻ A8: Bút lông",
            "desc": "Có ngòi viết rõ ràng → Hệ thống nhận dạng đúng là BÚT."
          },
          {
            "title": "Thẻ: Chiếc thìa",
            "desc": "Không có ngòi và không chứa nước → Kết quả CHƯA XÁC ĐỊNH."
          }
        ],
        "imageNote": "Bộ ba thẻ thử nghiệm A7 (cốc giấy), A8 (bút lông) và thẻ chiếc thìa.",
        "notes": "16 phút: Nhóm thử A7, A8, thìa, ghi bảng 3 lượt P2.2. Đổi vai sau 2 lượt."
      },
      {
        "id": "slide-15",
        "pageNumber": 15,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-spoon-1",
          "type": "choice",
          "prompt": "Khi đưa thẻ chiếc thìa vào hệ thống quy tắc trên, kết quả nhận dạng là gì?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Nhận dạng thành Bút vì hình dáng dài thon."
            },
            {
              "id": "B",
              "text": "Nhận dạng thành Cốc vì có thể múc nước."
            },
            {
              "id": "C",
              "text": "Chưa xác định vì không thỏa mãn quy tắc hai lớp."
            },
            {
              "id": "D",
              "text": "Hệ thống tự động thêm nhãn mới tên Thìa."
            }
          ],
          "explanation": "Hệ thống chỉ nhận biết hai lớp đã học; vật ngoài phạm vi báo Chưa xác định."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-16",
        "pageNumber": 16,
        "theme": "navy",
        "layout": "three-cards",
        "category": "TỔNG KẾT &bull; GHI NHỚ",
        "title": "KIẾN THỨC CẦN GHI NHỚ",
        "subtitle": "Ba trọng tâm cốt lõi về bản chất hoạt động của trí tuệ nhân tạo",
        "cards": [
          {
            "title": "1. Quá trình huấn luyện",
            "desc": "Dữ liệu có nhãn đi qua thuật toán học để tạo thành mô hình AI."
          },
          {
            "title": "2. Quá trình sử dụng",
            "desc": "Dữ liệu mới đưa vào mô hình để tính toán và đưa ra kết quả dự đoán."
          },
          {
            "title": "3. Con người quyết định",
            "desc": "Con người đối chiếu với vật thật và quyết định sử dụng kết quả."
          }
        ],
        "imageNote": "Sơ đồ hai luồng: Luồng huấn luyện tạo mô hình và luồng sử dụng mô hình.",
        "notes": "3 phút ghi nhớ: Thu bảng 3 lượt và 2 sơ đồ hoàn chỉnh. Nhấn mạnh con người."
      },
      {
        "id": "slide-17",
        "pageNumber": 17,
        "theme": "cream",
        "layout": "compare",
        "category": "LUYỆN TẬP &bull; 6 PHÚT",
        "title": "PHÂN LOẠI CÔNG ĐOẠN",
        "subtitle": "Phân biệt giữa giai đoạn huấn luyện và giai đoạn sử dụng mô hình (P2.3A)",
        "columnA": {
          "title": "Chuẩn bị & Huấn luyện",
          "items": [
            "Gắn nhãn cho các bức ảnh mẫu ban đầu.",
            "Dùng thuật toán học quy luật từ ảnh."
          ]
        },
        "columnB": {
          "title": "Sử dụng & Kiểm tra",
          "items": [
            "Đưa bức ảnh cốc mới vào mô hình.",
            "Đối chiếu nhãn dự đoán với vật thật."
          ]
        },
        "imageNote": "Bảng đối chiếu hai công đoạn chuẩn bị huấn luyện và sử dụng mô hình.",
        "notes": "4 phút cá nhân, 1p đối chiếu, 1p chốt. Yêu cầu tự làm trước khi đối chiếu nhóm."
      },
      {
        "id": "slide-18",
        "pageNumber": 18,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "BÀI TẬP NỐI CỘT",
        "subtitle": "Ghép nối các cặp thông tin tương ứng ở hai cột",
        "activity": {
          "id": "act-matching-stages-1",
          "type": "matching",
          "prompt": "Nối từng thao tác vào đúng công đoạn tương ứng trong vòng đời AI:",
          "points": 10,
          "explanation": "1 và 2 thuộc chuẩn bị & huấn luyện; 3 và 4 thuộc sử dụng & kiểm tra.",
          "answer": {
            "p1": "r-train",
            "p2": "r-train",
            "p3": "r-use",
            "p4": "r-use"
          },
          "pairs": [
            {
              "id": "p1",
              "left": "1. Gắn nhãn ảnh mẫu",
              "right": "Chuẩn bị & Huấn luyện",
              "rightId": "r-train"
            },
            {
              "id": "p2",
              "left": "2. Dùng thuật toán học",
              "right": "Chuẩn bị & Huấn luyện",
              "rightId": "r-train"
            },
            {
              "id": "p3",
              "left": "3. Đưa ảnh mới vào",
              "right": "Sử dụng & Kiểm tra",
              "rightId": "r-use"
            },
            {
              "id": "p4",
              "left": "4. Đối chiếu vật thật",
              "right": "Sử dụng & Kiểm tra",
              "rightId": "r-use"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-19",
        "pageNumber": 19,
        "theme": "navy",
        "layout": "two-examples",
        "category": "LUYỆN TẬP &bull; NHẬN THỨC",
        "title": "SỬA HAI PHÁT BIỂU SAI",
        "subtitle": "Nhận diện và điều chỉnh hai quan niệm sai lầm phổ biến về AI (P2.3A)",
        "exampleA": {
          "tag": "PHÁT BIỂU SAI 1",
          "title": "“AI tự sinh ra”",
          "desc": "Sai: AI do con người lập trình, thu thập dữ liệu và huấn luyện."
        },
        "exampleB": {
          "tag": "PHÁT BIỂU SAI 2",
          "title": "“AI chịu trách nhiệm”",
          "desc": "Sai: Con người chịu trách nhiệm về quyết định sử dụng kết quả."
        },
        "notes": "Khóa bài cá nhân rồi công bố hai nhóm thao tác và lời giải chốt."
      },
      {
        "id": "slide-20",
        "pageNumber": 20,
        "theme": "navy",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-role-human",
          "type": "choice",
          "prompt": "Khẳng định nào dưới đây là ĐÚNG về vai trò của con người đối với AI?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "AI có thể tự sinh ra và tự quyết định mọi nhiệm vụ."
            },
            {
              "id": "B",
              "text": "Con người tạo ra AI và chịu trách nhiệm về quyết định sử dụng."
            },
            {
              "id": "C",
              "text": "AI luôn tự chịu mọi trách nhiệm khi đưa ra kết quả sai lệch."
            },
            {
              "id": "D",
              "text": "Sau khi huấn luyện, AI không cần con người kiểm tra lại nữa."
            }
          ],
          "explanation": "Con người luôn chủ đạo: thiết kế, chuẩn bị dữ liệu và quyết định sử dụng."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-21",
        "pageNumber": 21,
        "theme": "cream",
        "layout": "case-study",
        "category": "VẬN DỤNG &bull; 4 PHÚT",
        "title": "MÔ HÌNH CÓ NHÌN MÀU NỀN?",
        "subtitle": "Tình huống kiểm tra tính khách quan của dữ liệu huấn luyện (P2.3B)",
        "cards": [
          {
            "title": "Tình huống giả định",
            "desc": "Cốc chụp nền sáng, Bút chụp nền tối. Nghi ngờ AI học màu nền thay vì vật."
          },
          {
            "title": "Giải pháp kiểm tra",
            "desc": "Chụp cùng chiếc cốc trên cả nền sáng và tối để thử xem kết quả có đổi không."
          }
        ],
        "imageNote": "Ảnh minh họa: Chiếc cốc đặt trên nền sáng cạnh chiếc cốc đặt trên nền tối.",
        "notes": "4 phút: Viết cá nhân 3p, chia sẻ 0.5p, chốt 0.5p. Nếu kết quả đổi, cần thử thêm."
      },
      {
        "id": "slide-22",
        "pageNumber": 22,
        "theme": "cream",
        "layout": "activity",
        "category": "VẬN DỤNG &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-reflect-bias-1",
          "type": "reflection",
          "prompt": "Nếu nghi ngờ mô hình học lệch theo màu nền, em đề xuất cặp ảnh nào để kiểm tra?",
          "placeholder": "Ghi cặp ảnh em sẽ chụp để kiểm tra (đồ vật, màu nền)...",
          "points": 0,
          "explanation": "Chụp cùng chiếc cốc trên cả nền sáng và tối để kiểm tra phản ứng mô hình."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-23",
        "pageNumber": 23,
        "theme": "navy",
        "layout": "recap",
        "category": "HƯỚNG DẪN VỀ NHÀ &bull; 1 PHÚT",
        "title": "CHUẨN BỊ CHO GIỜ HUẤN LUYỆN",
        "subtitle": "Hai nhiệm vụ chuẩn bị học liệu và củng cố kiến thức trước tiết học sau",
        "points": [
          "Chuẩn bị 2 đồ vật an toàn có sẵn tại nhà (như bút và cốc hoặc hộp giấy).",
          "Vẽ lại hai sơ đồ huấn luyện và sử dụng mô hình bằng ký hiệu riêng của em.",
          "Ghi nhớ nguyên tắc: Con người luôn kiểm tra và chịu trách nhiệm về kết quả AI.",
          "Sẵn sàng cho tiết thực hành huấn luyện mô hình máy học trực tiếp ở buổi tới."
        ],
        "imageNote": "Ảnh hai đồ vật mẫu (bút và cốc) cùng hai sơ đồ thu nhỏ minh họa.",
        "notes": "1 phút: Dặn dò chuẩn bị đồ vật sẵn có tại nhà, không mua mới. Vẽ sơ đồ vào vở."
      }
    ],
    "fileName": "02-con-nguoi-tao-va-dieu-khien-ai.json"
  },
  {
    "deckId": "03-day-ai-nhan-biet-do-vat-bang-teachable-machine",
    "title": "BÀI 3: DẠY AI NHẬN BIẾT ĐỒ VẬT BẰNG TEACHABLE MACHINE",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "TIẾT 3 &bull; THỰC HÀNH MÔ HÌNH",
        "title": "DẠY AI NHẬN BIẾT ĐỒ VẬT",
        "subtitle": "Training AI to Recognise Objects with Teachable Machine &bull; Tin học 6",
        "subject": "TIN HỌC 6",
        "author": "Tổ Tin học THCS",
        "imageNote": "Ảnh thật của bút, cốc và giao diện dự án ảnh Teachable Machine.",
        "notes": "Cho lớp gọi tên hai vật sẽ dạy máy. Báo nhiệm vụ cuối là thử ảnh mới."
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "CHUẨN ĐẦU RA &bull; 4 PHÚT",
        "title": "MỤC TIÊU TIẾT 3",
        "subtitle": "3 nhiệm vụ thực hành trọng tâm cần hoàn thành trong tiết 3",
        "objectives": [
          {
            "label": "THỰC HÀNH",
            "title": "Tạo mô hình hai lớp",
            "desc": "Thu thập ảnh, gán nhãn Bút/Cốc và huấn luyện mô hình."
          },
          {
            "label": "KIỂM THỬ",
            "title": "Thử nghiệm mẫu mới",
            "desc": "Chạy thử với ít nhất một ảnh mới chưa học cho mỗi lớp."
          },
          {
            "label": "ĐÁNH GIÁ",
            "title": "Đọc đúng kết quả",
            "desc": "Hiểu ý nghĩa phần trăm (%) và các yếu tố ảnh hưởng dự đoán."
          }
        ],
        "notes": "4 phút: Đọc mục tiêu như ba việc cần làm. Nhắc đổi người điều khiển."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "image-text",
        "category": "KHỞI ĐỘNG &bull; 4 PHÚT",
        "title": "EM THẤY CON GÌ TRƯỚC?",
        "subtitle": "Quan sát bức hình hai cách nhìn để khám phá cách nhận diện vật thể",
        "text": "Quan sát bức hình: Mỗi người có thể nhìn ra một con vật tùy chi tiết chú ý.",
        "imageNote": "Hình ảnh ảo giác thị giác nổi tiếng: Đầu Vịt hoặc Con Thỏ (Duck/Rabbit).",
        "points": [
          "Nhìn sang trái thấy mỏ dài → Nhận ra con VỊT.",
          "Nhìn sang trái thấy đôi tai dài → Nhận ra con THỎ.",
          "Máy tính cũng dựa vào đường nét, vùng sáng tối để nhận diện vật thể."
        ],
        "notes": "Từng em chọn trước khi nghe bạn. Dẫn dắt sang việc chọn ảnh rõ nét."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "BÌNH CHỌN VÀ THẢO LUẬN",
        "subtitle": "Bình chọn ý kiến phù hợp nhất với suy nghĩ của em",
        "activity": {
          "id": "act-poll-duck-rabbit",
          "type": "poll",
          "prompt": "Trong bức hình hai cách nhìn, con vật nào xuất hiện đầu tiên trong mắt em?",
          "points": 0,
          "explanation": "Tùy việc chú ý vào mỏ hay tai trước, mỗi người sẽ thấy con vật khác nhau.",
          "options": [
            {
              "id": "A",
              "text": "Con Vịt (nhìn phần kéo dài bên trái là mỏ)"
            },
            {
              "id": "B",
              "text": "Con Thỏ (nhìn phần kéo dài bên trái là hai tai)"
            },
            {
              "id": "C",
              "text": "Thấy cả hai con vật gần như cùng lúc"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "image-text",
        "category": "KHÁM PHÁ 2.1 &bull; XEM VIDEO",
        "title": "VIDEO: THỊ GIÁC MÁY TÍNH",
        "subtitle": "AI: How Computer Vision Works &bull; Code.org (01:25 - 01:50)",
        "text": "Xem video từ 01:25 đến 01:50 để tìm hiểu cách máy tính nhìn và đọc hình ảnh.",
        "image": "assets/images/video-codeorg-computer-vision.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=2hXG8v8p0KM",
        "videoTime": "01:25 - 01:50",
        "imageNote": "Khung hình 01:35 từ video Code.org: AI: How Computer Vision Works.",
        "points": [
          "Quan sát từ 01:25 đến 01:50: Máy tính nhìn ảnh qua các điểm ảnh (pixels).",
          "Gợi ý: Khi góc chụp, ánh sáng hoặc nền đổi, điểm ảnh cũng thay đổi.",
          "Bấm vào ảnh hoặc nút bên dưới để mở xem video trực tiếp trên YouTube."
        ],
        "notes": "Xem đoạn 01:25 - 01:50. Đọc nhanh 2 câu hỏi ở slide 5 để định hướng quan sát."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; HỎI ĐÁP",
        "title": "XEM XONG, EM TRẢ LỜI",
        "subtitle": "Hai câu hỏi thu hoạch nhanh về cách máy tính đọc dữ liệu hình ảnh",
        "exampleA": {
          "tag": "CÂU HỎI 1: TỪ VIDEO",
          "title": "Máy tính đọc ảnh thế nào?",
          "desc": "Đọc qua ma trận điểm ảnh (pixels), mỗi điểm chứa màu và độ sáng."
        },
        "exampleB": {
          "tag": "CÂU HỎI 2: ÁP DỤNG",
          "title": "Ảnh tối thay đổi ở đâu?",
          "desc": "Đường viền và vùng sáng đổi. Cần chụp đa dạng điều kiện hai lớp."
        },
        "notes": "20-30s suy nghĩ, hỏi đáp miệng. Dẫn sang bài lập kế hoạch thu thập ảnh P3.1."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-cv-pixel",
          "type": "choice",
          "prompt": "Theo video, máy tính tiếp nhận và hiểu một bức ảnh dưới dạng đơn vị nào?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Các nét vẽ vector hình học có sẵn trong bộ nhớ."
            },
            {
              "id": "B",
              "text": "Các điểm ảnh (pixels) chứa giá trị màu và độ sáng."
            },
            {
              "id": "C",
              "text": "Các đoạn văn bản miêu tả ý nghĩa của bức ảnh."
            },
            {
              "id": "D",
              "text": "Các sóng âm thanh tương tự tín hiệu giọng nói."
            }
          ],
          "explanation": "Máy tính đọc ảnh qua ma trận điểm ảnh (pixels) gồm màu và độ sáng."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "cream",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.1 • 10 PHÚT",
        "title": "CHUẨN BỊ DỮ LIỆU GÁN NHÃN",
        "subtitle": "Quy tắc tổ chức và tiêu chí lựa chọn ảnh huấn luyện chất lượng (P3.1)",
        "cards": [
          {
            "title": "1. Lớp Bút",
            "desc": "Thu thập ảnh chụp các loại bút khác nhau trên nền trung tính."
          },
          {
            "title": "2. Lớp Cốc",
            "desc": "Thu thập ảnh chụp các loại cốc khác nhau trên nền tương tự."
          },
          {
            "title": "3. Giữ riêng ảnh mới",
            "desc": "Giữ lại ít nhất 1-2 ảnh chưa học để kiểm thử mô hình sau đó."
          }
        ],
        "imageNote": "Bảng phân loại ba vùng ảnh: Vùng lớp Bút, Vùng lớp Cốc và Vùng ảnh thử.",
        "notes": "5 phút: Nhóm làm P3.1. Nhấn mạnh nếu cốc nền sáng, bút nền tối sẽ học lệch!"
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 • BÀI TẬP",
        "title": "BÀI TẬP NỐI CỘT",
        "subtitle": "Ghép nối các cặp thông tin tương ứng ở hai cột",
        "activity": {
          "id": "act-matching-data-plan",
          "type": "matching",
          "prompt": "Nối từng yêu cầu chuẩn bị dữ liệu với hành động tương ứng (P3.1):",
          "points": 10,
          "explanation": "Gán đúng nhãn, nền chụp đồng đều và giữ riêng ảnh mới là 3 nguyên tắc.",
          "answer": {
            "p1": "r-label",
            "p2": "r-bg",
            "p3": "r-test"
          },
          "pairs": [
            {
              "id": "p1",
              "left": "1. Tránh nhầm lẫn vật",
              "right": "Gắn đúng nhãn từng lớp",
              "rightId": "r-label"
            },
            {
              "id": "p2",
              "left": "2. Tránh học lệch màu",
              "right": "Dùng nền chụp tương tự",
              "rightId": "r-bg"
            },
            {
              "id": "p3",
              "left": "3. Đánh giá khách quan",
              "right": "Giữ riêng ảnh chưa học",
              "rightId": "r-test"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "navy",
        "layout": "steps",
        "category": "KHÁM PHÁ 2.2 &bull; 20 PHÚT",
        "title": "BỐN BƯỚC HUẤN LUYỆN MÔ HÌNH",
        "subtitle": "Quy trình thao tác tạo mô hình trên Teachable Machine (P3.2)",
        "steps": [
          {
            "title": "Bước 1: Tạo dự án ảnh",
            "desc": "Mở Teachable Machine, chọn Image Project (Standard model)."
          },
          {
            "title": "Bước 2: Đổi tên hai lớp",
            "desc": "Đặt tên lớp 1 là Bút và lớp 2 là Cốc rõ ràng."
          },
          {
            "title": "Bước 3: Thu thập ảnh mẫu",
            "desc": "Dùng Webcam hoặc tải ảnh lên (khoảng 20-30 ảnh mỗi lớp)."
          },
          {
            "title": "Bước 4: Bấm Train Model",
            "desc": "Chọn Train Model và giữ tab hoạt động đến khi hoàn tất."
          }
        ],
        "imageNote": "Ảnh giao diện Teachable Machine thể hiện 4 bước từ tạo lớp đến huấn luyện.",
        "notes": "16 phút thao tác: Nhóm luân phiên thu ảnh, bấm train. Hỗ trợ khi bị chặn cam."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "BÀI TẬP SẮP XẾP THỨ TỰ",
        "subtitle": "Sắp xếp các bước theo đúng trình tự logic",
        "activity": {
          "id": "act-ordering-train-steps",
          "type": "ordering",
          "prompt": "Sắp xếp 4 bước thực hành trên Teachable Machine theo đúng trình tự chuẩn:",
          "points": 10,
          "explanation": "Trình tự: Tạo dự án -> Đổi tên lớp -> Thu thập ảnh -> Bấm Train Model.",
          "answer": [
            "s1",
            "s2",
            "s3",
            "s4"
          ],
          "items": [
            {
              "id": "s3",
              "text": "Thu thập hoặc tải ảnh mẫu vào hai lớp"
            },
            {
              "id": "s1",
              "text": "Mở Image Project (Standard model)"
            },
            {
              "id": "s4",
              "text": "Bấm Train Model để máy bắt đầu học"
            },
            {
              "id": "s2",
              "text": "Đổi tên hai lớp thành Bút và Cốc"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "cream",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.2 &bull; KIỂM THỬ",
        "title": "CHẠY THỬ VÀ ĐỐI CHIẾU",
        "subtitle": "Đưa đồ vật mới vào vùng Preview để kiểm tra độ chính xác (P3.2)",
        "exampleA": {
          "tag": "LƯỢT THỬ 1: CHIẾC BÚT MỚI",
          "title": "Thử nghiệm lớp Bút",
          "desc": "Đưa bút mới vào trước webcam. Ghi nhãn dự đoán, % hiển thị và đối chiếu."
        },
        "exampleB": {
          "tag": "LƯỢT THỬ 2: CHIẾC CỐC MỚI",
          "title": "Thử nghiệm lớp Cốc",
          "desc": "Đưa cốc mới vào trước webcam. Ghi nhãn dự đoán, % hiển thị và đối chiếu."
        },
        "notes": "4 phút kiểm thử: Ghi số ảnh thực, kết quả 2 lượt thử và lưu lại dự án."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-test-rule",
          "type": "choice",
          "prompt": "Để kiểm tra mô hình nhận biết tốt hay không, nên đưa ảnh nào vào Preview?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Đưa lại chính bức ảnh vừa chụp lúc huấn luyện."
            },
            {
              "id": "B",
              "text": "Đưa một bức ảnh phong cảnh không liên quan."
            },
            {
              "id": "C",
              "text": "Đưa đồ vật mới hoặc góc chụp mới chưa từng học."
            },
            {
              "id": "D",
              "text": "Không cần đưa ảnh nào, chỉ nhìn thanh % hiển thị."
            }
          ],
          "explanation": "Cần đưa đồ vật mới hoặc góc chụp mới để kiểm tra khả năng khái quát hóa."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-14",
        "pageNumber": 14,
        "theme": "navy",
        "layout": "three-cards",
        "category": "TỔNG KẾT &bull; GHI NHỚ",
        "title": "KIẾN THỨC CẦN GHI NHỚ",
        "subtitle": "Ba bài học cốt lõi sau khi hoàn thành huấn luyện mô hình thị giác máy tính",
        "cards": [
          {
            "title": "1. Dữ liệu tạo mô hình",
            "desc": "Ảnh có nhãn đúng và đa dạng điều kiện giúp thuật toán học tốt hơn."
          },
          {
            "title": "2. Kiểm thử bằng mẫu mới",
            "desc": "Luôn dùng ảnh mới chưa học để đối chiếu nhãn dự đoán với vật thật."
          },
          {
            "title": "3. Ý nghĩa phần trăm (%)",
            "desc": "Tỉ lệ % chỉ mô tả một lần thử cụ thể, không đại diện mọi trường hợp."
          }
        ],
        "imageNote": "Sơ đồ tổng kết: Ảnh huấn luyện -> Mô hình -> Ảnh mới kiểm thử -> So nhãn thật.",
        "notes": "Mời đại diện đọc nhật kí P3.2. Cần thêm bằng chứng gì để đánh giá tổng thể?"
      },
      {
        "id": "slide-15",
        "pageNumber": 15,
        "theme": "cream",
        "layout": "two-examples",
        "category": "LUYỆN TẬP &bull; 6 PHÚT",
        "title": "Ý NGHĨA TỈ LỆ PHẦN TRĂM",
        "subtitle": "Giải quyết hai tình huống thực tế thường gặp khi huấn luyện mô hình (P3.3A)",
        "exampleA": {
          "tag": "TÌNH HUỐNG 1: SAI NHÃN",
          "title": "Ảnh Cốc nhầm ở lớp Bút",
          "desc": "Cần chuyển ảnh về đúng lớp Cốc hoặc xóa bỏ trước khi bấm Train Model."
        },
        "exampleB": {
          "tag": "TÌNH HUỐNG 2: ĐỌC TỈ LỆ %",
          "title": "Mô hình báo Cốc 98%",
          "desc": "Chỉ số 98% là độ tin cậy ở lượt thử này, không có nghĩa luôn đúng 98/100 lần."
        },
        "notes": "4 phút cá nhân, 1p đối chiếu, 1p chốt. Không nhầm lẫn % với độ chính xác chung."
      },
      {
        "id": "slide-16",
        "pageNumber": 16,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-percent-meaning",
          "type": "choice",
          "prompt": "Khi Teachable Machine hiển thị kết quả Cốc: 98%, con số này có ý nghĩa gì?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Mô hình chắc chắn nhận đúng 98 trong 100 lần thử ngoài đời."
            },
            {
              "id": "B",
              "text": "Mô hình ước lượng độ tự tin là 98% cho riêng lượt thử hiện tại."
            },
            {
              "id": "C",
              "text": "Mô hình đã học được 98% kiến thức về các loại cốc trên thế giới."
            },
            {
              "id": "D",
              "text": "Có 98% khả năng bức ảnh đưa vào bị mờ hoặc sai lệch màu sắc."
            }
          ],
          "explanation": "Con số % phản ánh độ tự tin của mô hình cho riêng một đầu vào đang xét."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-17",
        "pageNumber": 17,
        "theme": "navy",
        "layout": "compare",
        "category": "LUYỆN TẬP &bull; ĐỐI CHIẾU",
        "title": "NGUYÊN TẮC KIỂM THỬ MÔ HÌNH",
        "subtitle": "Phân biệt rõ việc dùng lại ảnh đã học và dùng ảnh mới hoàn toàn (P3.3A)",
        "columnA": {
          "title": "Dùng lại ảnh đã học",
          "items": [
            "Máy nhận dạng tốt vì đã xem từ trước.",
            "Không chứng minh được khả năng đoán ảnh mới.",
            "Dễ gây ngộ nhận rằng mô hình đã hoàn hảo.",
            "Chỉ có tác dụng kiểm tra việc ghi nhớ."
          ]
        },
        "columnB": {
          "title": "Dùng ảnh mới hoàn toàn",
          "items": [
            "Thử nghiệm đồ vật ở góc và ánh sáng mới.",
            "Đánh giá thực chất khả năng học quy luật.",
            "Phát hiện ngay các lỗi nhận dạng tiềm ẩn.",
            "Là phương pháp kiểm thử khoa học bắt buộc."
          ]
        },
        "imageNote": "Hình ảnh đối chiếu: Ảnh trong tập học vs Ảnh mới chụp ngoài đời.",
        "notes": "Thu bài cá nhân trước khi chốt. Khắc sâu nguyên tắc kiểm thử khách quan."
      },
      {
        "id": "slide-18",
        "pageNumber": 18,
        "theme": "navy",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-test-new-img",
          "type": "choice",
          "prompt": "Vì sao KHÔNG ĐƯỢC dùng lại ảnh đã học để khẳng định mô hình nhận biết tốt?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Vì ảnh cũ sẽ làm mô hình bị quá tải bộ nhớ và treo máy."
            },
            {
              "id": "B",
              "text": "Vì hệ thống Teachable Machine sẽ báo lỗi và từ chối xử lý."
            },
            {
              "id": "C",
              "text": "Vì máy chỉ nhớ lại mẫu cũ chứ chưa chứng minh nhận biết ảnh mới."
            },
            {
              "id": "D",
              "text": "Vì ảnh cũ luôn có độ phân giải thấp hơn ảnh chụp trực tiếp."
            }
          ],
          "explanation": "Muốn đánh giá năng lực thực sự của AI, bắt buộc phải dùng dữ liệu mới."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-19",
        "pageNumber": 19,
        "theme": "cream",
        "layout": "case-study",
        "category": "VẬN DỤNG &bull; 4 PHÚT",
        "title": "THIẾT KẾ PHÉP THỬ MỚI",
        "subtitle": "Kế hoạch kiểm thử với nguyên tắc chỉ thay đổi một yếu tố mỗi lần (P3.3B)",
        "cards": [
          {
            "title": "Phép thử bắt buộc: Đổi nền",
            "desc": "Chụp cùng chiếc cốc trên hai màu nền khác nhau, giữ nguyên góc và ánh sáng."
          },
          {
            "title": "Phép thử mở rộng: Đổi góc chụp",
            "desc": "Chụp cùng chiếc bút ở góc nghiêng mới hoặc đổi khoảng cách để kiểm tra."
          }
        ],
        "imageNote": "Bảng kế hoạch 3 phép thử kèm cặp ảnh minh họa cốc trên hai màu nền.",
        "notes": "4 phút: Nhóm điền 3 phép thử. Thu lại kế hoạch để nối tiếp thực hành ở tiết 4."
      },
      {
        "id": "slide-20",
        "pageNumber": 20,
        "theme": "cream",
        "layout": "activity",
        "category": "VẬN DỤNG &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-reflect-test-plan",
          "type": "reflection",
          "prompt": "Hãy đề xuất một phép thử mới (nêu vật, yếu tố thay đổi và mục tiêu quan sát):",
          "placeholder": "Ghi đồ vật thử, yếu tố thay đổi (góc/nền/khoảng cách) và mục tiêu...",
          "points": 0,
          "explanation": "Giữ cố định các yếu tố, chỉ đổi một biến số để kiểm tra phản ứng của AI."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-21",
        "pageNumber": 21,
        "theme": "navy",
        "layout": "recap",
        "category": "HƯỚNG DẪN VỀ NHÀ &bull; 1 PHÚT",
        "title": "CHUẨN BỊ CHO TIẾT TỚI",
        "subtitle": "Các nhiệm vụ cần hoàn thành để sẵn sàng cho bài thực nghiệm ở tiết 4",
        "points": [
          "Lưu giữ an toàn liên kết dự án hoặc tập ảnh nguồn có nhãn theo hướng dẫn.",
          "Chuẩn bị một đồ vật mẫu mới an toàn (như bút chì màu hoặc hộp giấy) cho tiết 4.",
          "Ghi nhớ: Mô hình AI cần được kiểm thử cẩn thận trước khi đưa vào ứng dụng.",
          "Đọc trước các tiêu chí đánh giá mô hình để chuẩn bị cho buổi báo cáo nhóm tới."
        ],
        "imageNote": "Biểu tượng thư mục lưu trữ ảnh nguồn cùng hình ảnh đồ vật mẫu mới.",
        "notes": "1 phút: Nhắc lưu trữ dữ liệu an toàn. Dặn dò mang vật mẫu mới an toàn, tiết kiệm."
      }
    ],
    "fileName": "03-day-ai-nhan-biet-do-vat-bang-teachable-machine.json"
  },
  {
    "deckId": "04-kiem-thu-va-cai-tien-mo-hinh-ai",
    "title": "BÀI 4: KIỂM THỬ VÀ CẢI TIẾN MÔ HÌNH AI",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "date": "Học kì II",
    "estimatedDuration": "45 phút (1 tiết)",
    "totalSlides": 13,
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "KIỂM THỬ VÀ CẢI TIẾN AI &bull; BÀI 4",
        "title": "KIỂM THỬ CẢI TIẾN MÔ HÌNH",
        "subtitle": "Bài 4: Đánh giá khách quan và tối ưu hóa mô hình AI",
        "imageNote": "Hai cột Trước và Sau để trống kết quả đối chiếu số lượt đúng.",
        "notes": "Mở mô hình hoặc nhật kí tiết 3. Dẫn vào câu hỏi về ảnh mới chưa từng học.",
        "author": "Tổ Tin học THCS"
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "MỤC TIÊU BÀI HỌC",
        "title": "MỤC TIÊU TIẾT 4",
        "subtitle": "Ba yêu cầu cần đạt trọng tâm trong tiết thực hành kiểm thử và cải tiến",
        "objectives": [
          {
            "label": "KIỂM THỬ",
            "title": "Tổ chức 6 lượt thử mới",
            "desc": "Tập hợp 6 mẫu mới có nhãn thật, tách biệt khỏi dữ liệu huấn luyện."
          },
          {
            "label": "CẢI TIẾN",
            "title": "Cải tiến có lý do",
            "desc": "Bổ sung ảnh mới đúng nhãn để khắc phục một điểm thiếu sót cụ thể."
          },
          {
            "label": "ĐỐI CHIẾU",
            "title": "Đối chiếu trước và sau",
            "desc": "So sánh số lượt đúng trước và sau khi cải tiến trên cùng bộ thử."
          }
        ],
        "imageNote": "Sơ đồ quy trình: Thử trước -> Chỉnh sửa -> Thử lại trên cùng bộ mẫu.",
        "notes": "Cho nhóm biết cần giữ cùng bộ thử để so sánh. Bìa và mục tiêu trong 4 phút mở đầu."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "image-text",
        "category": "KHỞI ĐỘNG &bull; 4 PHÚT",
        "title": "MỘT LẦN ĐÚNG NÓI ĐƯỢC GÌ?",
        "subtitle": "Chất vấn kết quả dự đoán đúng trên ảnh quen thuộc từ tiết trước",
        "paragraphs": [
          "Mô hình gọi đúng chiếc cốc quen thuộc nhiều lần ở tiết 3.",
          "Liệu có thể khẳng định mô hình nhận đúng mọi chiếc cốc không?",
          "Chúng ta cần thử thêm những đồ vật hoặc hình ảnh nào?"
        ],
        "imageNote": "Ảnh đối chiếu: Cốc quen thuộc từng học vs Cốc mới ở góc/nền khác.",
        "notes": "Hỏi ảnh từng dùng khi học. Mời 2 cặp nêu mẫu mới và lí do cần nhãn thật."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "BÌNH CHỌN VÀ THẢO LUẬN",
        "subtitle": "Bình chọn ý kiến phù hợp nhất với suy nghĩ của em",
        "activity": {
          "id": "act-poll-test-need",
          "type": "poll",
          "prompt": "Mô hình nhận đúng chiếc cốc quen thuộc nhiều lần. Để chắc chắn, em cần làm gì?",
          "points": 0,
          "options": [
            {
              "id": "A",
              "text": "Thử lại chiếc cốc cũ ở đúng góc và nền đã học."
            },
            {
              "id": "B",
              "text": "Thử chiếc cốc cũ nhưng đổi góc chụp và ánh sáng."
            },
            {
              "id": "C",
              "text": "Thử chiếc cốc mới hoàn toàn trên nền màu khác."
            },
            {
              "id": "D",
              "text": "Thử nhiều đồ vật mới chưa từng đưa vào học."
            }
          ],
          "explanation": "Cần kiểm tra trên nhiều mẫu mới và góc chụp khác để đánh giá khách quan."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "image-text",
        "category": "KHÁM PHÁ 2.1 &bull; VIDEO",
        "title": "DỮ LIỆU VÀ THIÊN VỊ AI",
        "subtitle": "Khám phá video AI: Training Data & Bias từ Code.org (02:00 - 02:30)",
        "paragraphs": [
          "Dữ liệu mẫu quyết định cách thức AI nhìn nhận và phân loại đồ vật.",
          "Nếu dữ liệu học thiếu đa dạng, dự đoán ở điều kiện mới sẽ bị sai lệch."
        ],
        "imageUrl": "/assets/images/video-codeorg-training-data-bias.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=x2mRoFNm22g",
        "videoTime": "02:00 - 02:30",
        "videoTitle": "AI: Training Data & Bias - Code.org",
        "imageNote": "Ảnh chụp video Code.org về ảnh hưởng của dữ liệu học đối với dự đoán của AI.",
        "notes": "Mở đoạn 02:00-02:30. Cho học sinh đọc nhanh câu hỏi ở slide sau để định hướng."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; HỎI ĐÁP",
        "title": "BẢN CHẤT DỮ LIỆU HUẤN LUYỆN",
        "subtitle": "Bài học từ video và liên hệ thực tế bài toán nhận dạng đồ vật",
        "exampleA": {
          "tag": "TỪ VIDEO: THIÊN VỊ DỮ LIỆU",
          "title": "Phụ thuộc dữ liệu học",
          "desc": "Mô hình học từ ví dụ. Nếu ví dụ ít, dự đoán ở điều kiện mới dễ bị sai."
        },
        "exampleB": {
          "tag": "ÁP DỤNG: CỐC NỀN TỐI",
          "title": "Bổ sung ảnh có chọn lọc",
          "desc": "Thêm ảnh đúng nhãn ở nền tối, tuyệt đối giữ riêng bộ thử để đo trước sau."
        },
        "notes": "20-30s suy nghĩ, mời 2 em trả lời ngắn rồi chốt. Nối sang việc lập bộ 6 mẫu P4.1."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-bias-reason",
          "type": "choice",
          "prompt": "Theo video, vì sao mô hình AI có thể nhận dạng sai khi gặp ảnh ở điều kiện mới?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Do máy tính bị quá tải bộ nhớ khi xử lý ảnh mới."
            },
            {
              "id": "B",
              "text": "Do dữ liệu huấn luyện chưa đủ đa dạng các trường hợp."
            },
            {
              "id": "C",
              "text": "Do người dùng không kết nối Internet lúc chạy thử."
            },
            {
              "id": "D",
              "text": "Do thuật toán AI tự thay đổi sau mỗi lần khởi động."
            }
          ],
          "explanation": "Mô hình học từ ví dụ. Nếu thiếu ảnh điều kiện đó, AI sẽ nhận diện sai."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "cream",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.1 &bull; 10 PHÚT (MÀN 1/2)",
        "title": "CHUẨN BỊ BỘ KIỂM THỬ T1-T6",
        "subtitle": "Nguyên tắc thiết lập 6 mẫu thử độc lập ngoài tập huấn luyện (P4.1)",
        "cards": [
          {
            "title": "1. Mẫu Bút (T1 - T3)",
            "desc": "T1 chính diện nền trơn; T2 nghiêng; T3 có vật phụ không che khuất."
          },
          {
            "title": "2. Mẫu Cốc (T4 - T6)",
            "desc": "T4 đủ sáng; T5 đổi góc chụp; T6 đổi ánh sáng vừa phải."
          },
          {
            "title": "3. Nhãn thật & Độc lập",
            "desc": "Ghi nhãn thật trước khi chạy; không đưa ảnh thử vào tập học."
          }
        ],
        "imageNote": "Bảng 6 mẫu kiểm thử T1-T6 kèm biểu tượng góc nghiêng, nền và ánh sáng.",
        "notes": "5 phút chuẩn bị: Kiểm tra bộ T1-T6 nằm ngoài ảnh huấn luyện."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "BÀI TẬP NỐI CỘT",
        "subtitle": "Ghép nối các cặp thông tin tương ứng ở hai cột",
        "activity": {
          "id": "act-matching-test-conditions",
          "type": "matching",
          "prompt": "Ghép từng mẫu kiểm thử T1-T6 với điều kiện thử tương ứng theo phiếu P4.1:",
          "points": 10,
          "explanation": "Mỗi mẫu thử cần kiểm soát rõ biến số: góc nghiêng, nền hoặc ánh sáng.",
          "answer": {
            "p1": "r1",
            "p2": "r2",
            "p3": "r3"
          },
          "pairs": [
            {
              "id": "p1",
              "left": "1. Mẫu T1 (Bút)",
              "right": "Góc chính diện, nền trơn",
              "rightId": "r1"
            },
            {
              "id": "p2",
              "left": "2. Mẫu T2 (Bút)",
              "right": "Góc nghiêng, thấy đủ vật",
              "rightId": "r2"
            },
            {
              "id": "p3",
              "left": "3. Mẫu T5 (Cốc)",
              "right": "Đổi góc, giữ ánh sáng",
              "rightId": "r3"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; 10 PHÚT (MÀN 2/2)",
        "title": "GHI KẾT QUẢ TRƯỚC CẢI TIẾN",
        "subtitle": "Quy trình ghi nhận trung thực dự đoán và đếm số lượt đúng (P4.1)",
        "exampleA": {
          "tag": "THỰC HIỆN THỬ NGHIỆM",
          "title": "Đưa lần lượt T1 đến T6",
          "desc": "Quan sát nhãn dự đoán trên Preview, so sánh nhãn thật và ghi đúng/sai."
        },
        "exampleB": {
          "tag": "TỔNG HỢP KẾT QUẢ",
          "title": "Tính điểm trước cải tiến",
          "desc": "Đếm tổng số đúng trên 6. Trường hợp không rõ ghi chưa xác định (tính sai)."
        },
        "imageNote": "Bảng P4.1 ghi nhận kết quả 6 lượt thử với nhãn thật và kết quả đúng/sai.",
        "notes": "5 phút thử và ghi T1-T6: Đếm số đúng trên 6. Giữ ảnh ngoài dữ liệu học."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-record-rule",
          "type": "choice",
          "prompt": "Khi kiểm thử, nếu mô hình dự đoán chập chờn hoặc không rõ, ta ghi thế nào?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Tự đoán nhãn là đúng để tăng số lượt đúng của nhóm."
            },
            {
              "id": "B",
              "text": "Ghi 'Chưa xác định' và tính là một lượt chưa đúng."
            },
            {
              "id": "C",
              "text": "Bỏ qua mẫu đó và không tính vào tổng số 6 lượt thử."
            },
            {
              "id": "D",
              "text": "Tải lại trang web và thử lại đến khi nào nhận đúng."
            }
          ],
          "explanation": "Để khách quan, kết quả không rõ phải ghi Chưa xác định và tính chưa đúng."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "cream",
        "layout": "steps",
        "category": "KHÁM PHÁ 2.2 &bull; 20 PHÚT (MÀN 1/2)",
        "title": "QUY TRÌNH CẢI TIẾN MÔ HÌNH",
        "subtitle": "Ba bước cải tiến mô hình dựa trên bằng chứng kiểm thử thực tế (P4.2)",
        "steps": [
          {
            "title": "1. Tìm điểm thiếu sót",
            "desc": "Xác định mẫu thử hay sai (ví dụ: cốc thiếu ảnh chụp trên nền tối)."
          },
          {
            "title": "2. Bổ sung ảnh mới",
            "desc": "Chụp thêm ảnh đúng nhãn, tuyệt đối không dùng lại ảnh T1-T6."
          },
          {
            "title": "3. Huấn luyện lại",
            "desc": "Bấm Train Model để mô hình học thêm các trường hợp mới."
          }
        ],
        "imageNote": "Sơ đồ ba bước cải tiến: Tìm điểm thiếu -> Bổ sung ảnh mới -> Huấn luyện lại.",
        "notes": "12 phút cải tiến: Thêm ảnh mới khác bộ thử, huấn luyện lại mô hình."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "BÀI TẬP SẮP XẾP THỨ TỰ",
        "subtitle": "Sắp xếp các bước theo đúng trình tự logic",
        "activity": {
          "id": "act-ordering-improve-steps",
          "type": "ordering",
          "prompt": "Sắp xếp đúng trình tự các bước cải tiến mô hình AI khi phát hiện nhận dạng sai:",
          "points": 10,
          "explanation": "Quy trình: Tìm điểm thiếu -> Thêm ảnh mới -> Train Model -> Thử lại bộ cũ.",
          "answer": [
            "st1",
            "st2",
            "st3",
            "st4"
          ],
          "items": [
            {
              "id": "st2",
              "text": "Bổ sung ảnh học mới đúng nhãn (khác bộ ảnh thử)."
            },
            {
              "id": "st1",
              "text": "Xác định điểm thiếu trong dữ liệu qua kết quả thử."
            },
            {
              "id": "st4",
              "text": "Thử lại bằng đúng bộ thử cũ trong cùng điều kiện."
            },
            {
              "id": "st3",
              "text": "Bấm Train Model để huấn luyện lại dữ liệu mới."
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-14",
        "pageNumber": 14,
        "theme": "navy",
        "layout": "compare",
        "category": "KHÁM PHÁ 2.2 &bull; 20 PHÚT (MÀN 2/2)",
        "title": "SO SÁNH TRƯỚC VÀ SAU",
        "subtitle": "Đối chiếu số lượt đúng trên cùng bộ thử T1-T6 để đánh giá hiệu quả (P4.2)",
        "columnA": {
          "title": "Trước khi cải tiến",
          "items": [
            "Thử nghiệm 6 mẫu T1-T6 ban đầu.",
            "Ghi nhận số lượt đúng: .../6.",
            "Phát hiện điều kiện nhận dạng kém.",
            "Làm căn cứ để bổ sung dữ liệu."
          ]
        },
        "columnB": {
          "title": "Sau khi cải tiến",
          "items": [
            "Dùng lại đúng 6 mẫu T1-T6 ban đầu.",
            "Giữ điều kiện thử gần tương đương.",
            "Ghi nhận số lượt đúng mới: .../6.",
            "Đánh giá số đúng tăng, giữ hay giảm."
          ]
        },
        "imageNote": "Bảng so sánh đối chiếu trước và sau trên 6 dòng mẫu T1-T6 kèm nhận xét.",
        "notes": "8 phút thử lại: Giữ nguyên bộ mẫu T1-T6 để đối chiếu công bằng."
      },
      {
        "id": "slide-15",
        "pageNumber": 15,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-why-same-test",
          "type": "choice",
          "prompt": "Vì sao khi thử lại sau cải tiến, bắt buộc phải dùng đúng bộ mẫu T1-T6 ban đầu?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Để tiết kiệm thời gian không phải tìm đồ vật mới."
            },
            {
              "id": "B",
              "text": "Để so sánh công bằng trước và sau trên cùng thước đo."
            },
            {
              "id": "C",
              "text": "Vì phần mềm chỉ cho phép thử tối đa 6 đồ vật."
            },
            {
              "id": "D",
              "text": "Để đảm bảo mô hình chắc chắn đạt điểm tuyệt đối 6/6."
            }
          ],
          "explanation": "Giữ nguyên bộ thử và điều kiện giúp so sánh công bằng trước và sau."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-16",
        "pageNumber": 16,
        "theme": "cream",
        "layout": "three-cards",
        "category": "TỔNG KẾT &bull; GHI NHỚ",
        "title": "BÀI HỌC VỀ KIỂM THỬ",
        "subtitle": "Ba nguyên tắc khoa học bất biến khi đánh giá và cải tiến mô hình AI",
        "cards": [
          {
            "title": "1. Độc lập dữ liệu thử",
            "desc": "Ảnh kiểm thử luôn phải giữ riêng biệt ngoài tập dữ liệu huấn luyện."
          },
          {
            "title": "2. Kết quả biến động",
            "desc": "Số đúng có thể tăng, giữ nguyên hoặc giảm sau khi thêm ảnh mới."
          },
          {
            "title": "3. Giới hạn kết luận",
            "desc": "Kết luận chỉ có giá trị trong phạm vi bộ thử và điều kiện đã ghi."
          }
        ],
        "imageNote": "Khung ghi nhớ: Với bộ thử này trong điều kiện X, số lượt đúng đạt Y/6.",
        "notes": "Yêu cầu 1 nhóm đọc kết luận. Nếu số lượt không tăng, thảo luận nguyên nhân."
      },
      {
        "id": "slide-17",
        "pageNumber": 17,
        "theme": "navy",
        "layout": "three-cards",
        "category": "LUYỆN TẬP &bull; 6 PHÚT",
        "title": "SỬA BA KẾT LUẬN VỘI VÃ",
        "subtitle": "Phát hiện và chỉnh sửa các nhận định vượt quá bằng chứng thực tế (P4.3A)",
        "cards": [
          {
            "title": "1. Vội vã về số lượt",
            "desc": "'Đúng 6/6 nên luôn đúng' -> Sửa: Đúng với 6 mẫu này, cần thử thêm."
          },
          {
            "title": "2. Sai lầm về dữ liệu",
            "desc": "'Lấy ảnh thử cho học là xong' -> Sửa: Phải dùng ảnh mới chưa học."
          },
          {
            "title": "3. Ngộ nhận phần trăm",
            "desc": "'% hiển thị cao thay kiểm thử' -> Sửa: % không thay được thử thật."
          }
        ],
        "imageNote": "Ba thẻ phát biểu vượt quá bằng chứng kèm mũi tên sửa thành kết luận đúng.",
        "notes": "4 phút cá nhân, đối chiếu. Chốt giới hạn bộ thử, yêu cầu đầu vào mới và trung thực."
      },
      {
        "id": "slide-18",
        "pageNumber": 18,
        "theme": "navy",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-fix-claim",
          "type": "choice",
          "prompt": "Một bạn nói: 'Đúng 6/6 nên luôn đúng mọi cốc ngoài đời'. Em sửa thế nào?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Mô hình đã hoàn hảo, không cần thử thêm bất cứ đồ vật nào."
            },
            {
              "id": "B",
              "text": "Mô hình chỉ đúng với 6 mẫu này, cần thử thêm điều kiện mới."
            },
            {
              "id": "C",
              "text": "Chỉ cần đưa 6 ảnh thử vào học tiếp là mô hình sẽ luôn đúng."
            },
            {
              "id": "D",
              "text": "Phát biểu hoàn toàn đúng vì 6/6 là chính xác 100% ngoài đời."
            }
          ],
          "explanation": "Thử nghiệm nhỏ chỉ phản ánh 6 mẫu, không thể vội khẳng định luôn đúng."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-19",
        "pageNumber": 19,
        "theme": "cream",
        "layout": "case-study",
        "category": "VẬN DỤNG &bull; 4 PHÚT",
        "title": "THIẾT KẾ PHÉP THỬ TIẾP THEO",
        "subtitle": "Đề xuất một phép kiểm nghiệm mới với nguyên tắc kiểm soát điều kiện (P4.3B)",
        "cards": [
          {
            "title": "Nguyên tắc kiểm soát biến",
            "desc": "Chỉ thay đổi một yếu tố (góc hoặc nền hoặc sáng), giữ nguyên các yếu tố khác."
          },
          {
            "title": "Mục tiêu đối chiếu",
            "desc": "Biết trước nhãn thật để đối chiếu, kiểm tra xem AI có thiên vị hay không."
          }
        ],
        "imageNote": "Thẻ thiết kế phép thử: Điều đổi | Điều giữ nguyên | Nhãn thật đối chiếu.",
        "notes": "3 phút điền thẻ cá nhân. Mời 1 em giải thích cách đề xuất của nhóm."
      },
      {
        "id": "slide-20",
        "pageNumber": 20,
        "theme": "cream",
        "layout": "activity",
        "category": "VẬN DỤNG &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-reflect-next-test",
          "type": "reflection",
          "prompt": "Đề xuất 1 phép thử tiếp theo (nêu điều đổi, điều giữ nguyên và nhãn thật):",
          "placeholder": "Ví dụ: Đổi loại cốc, giữ nguyên nền và góc chụp, nhãn thật là Cốc...",
          "points": 0,
          "explanation": "Phép thử khoa học cần xác định rõ yếu tố đổi, yếu tố giữ và nhãn thật."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-21",
        "pageNumber": 21,
        "theme": "navy",
        "layout": "recap",
        "category": "HƯỚNG DẪN VỀ NHÀ &bull; 1 PHÚT",
        "title": "NHIỆM VỤ VỀ NHÀ",
        "subtitle": "Ba câu hỏi tự đánh giá và lưu trữ minh chứng cho dự án học tập",
        "points": [
          "Lưu trữ bảng P4.1 và P4.2 làm minh chứng học tập cho dự án.",
          "Viết ba câu tự đánh giá: Đã đổi gì? Kết quả ra sao? Chưa khẳng định được gì?",
          "Tìm hiểu thêm: Tình huống nhận dạng sai của AI có thể gây nguy hiểm gì ngoài đời?"
        ],
        "imageNote": "Sơ đồ 3 nhiệm vụ: Lưu bảng kết quả -> Tự đánh giá -> Chuẩn bị bài sau.",
        "notes": "Lưu bảng làm minh chứng dự án. Phân biệt điều quan sát được với giả thuyết."
      }
    ],
    "fileName": "04-kiem-thu-va-cai-tien-mo-hinh-ai.json"
  },
  {
    "deckId": "05-ai-ho-tro-hoc-tap-nhung-con-nguoi-quyet-dinh",
    "title": "BÀI 5: AI HỖ TRỢ HỌC TẬP NHƯNG CON NGƯỜI QUYẾT ĐỊNH",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "date": "Học kì II",
    "estimatedDuration": "45 phút (1 tiết)",
    "totalSlides": 14,
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "KIỂM CHỨNG GỢI Ý AI &bull; BÀI 5",
        "title": "AI HỖ TRỢ HỌC TẬP",
        "subtitle": "Bài 5: Kiểm chứng gợi ý AI khi học (Humans Make Decisions)",
        "imageNote": "Hình con mèo và cái bàn, bên cạnh ô văn bản bản dịch.",
        "notes": "1 phút mở đầu: Giới thiệu bài học kiểm chứng gợi ý của AI.",
        "author": "Tổ Tin học THCS"
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "MỤC TIÊU BÀI HỌC",
        "title": "MỤC TIÊU TIẾT 5",
        "subtitle": "Ba yêu cầu trọng tâm cần hoàn thành trong tiết học",
        "objectives": [
          {
            "label": "TRẢI NGHIỆM",
            "title": "Dùng AI dịch câu mẫu",
            "desc": "Thao tác gửi yêu cầu dịch hai câu mẫu và ghi nhận kết quả."
          },
          {
            "label": "ĐỐI CHIẾU",
            "title": "Đối chiếu hai chi tiết",
            "desc": "Kiểm tra ít nhất 2 từ hoặc cụm từ với bảng từ và SGK chuẩn."
          },
          {
            "label": "QUYẾT ĐỊNH",
            "title": "Quyết định có căn cứ",
            "desc": "Quyết định Giữ, Sửa hoặc Tạm chưa dùng dựa trên nguồn tra."
          }
        ],
        "imageNote": "Sơ đồ ba mục tiêu: Gửi yêu cầu -> Đối chiếu nguồn -> Ra quyết định.",
        "notes": "3 phút: Bìa và mục tiêu. Nhắc căn cứ phải chỉ rõ nguồn tra cứu."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHỞI ĐỘNG &bull; 4 PHÚT",
        "title": "TỪ NÀO HỢP CHỖ TRỐNG?",
        "subtitle": "Nhận biết vai trò của ngữ cảnh trong việc dự đoán từ thích hợp",
        "exampleA": {
          "tag": "CÂU 1: VIẾT BÀI",
          "title": "Em viết bài bằng...",
          "desc": "Cụm 'viết bài' gợi ý các từ như bút chì, bút mực, bàn phím."
        },
        "exampleB": {
          "tag": "CÂU 2: UỐNG NƯỚC",
          "title": "Em uống nước bằng...",
          "desc": "Cụm 'uống nước' gợi ý các từ như cốc, ly, chai, bình nước."
        },
        "imageNote": "Hai ô điền từ khuyết kèm dấu gạch chân ở cụm từ gợi ý ngữ cảnh.",
        "notes": "4 phút khởi động: Mỗi em điền trước rồi trao đổi cặp."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "BÌNH CHỌN VÀ THẢO LUẬN",
        "subtitle": "Bình chọn ý kiến phù hợp nhất với suy nghĩ của em",
        "activity": {
          "id": "act-poll-context-clue",
          "type": "poll",
          "prompt": "Từ nào trong câu giúp em chọn đúng từ thích hợp để điền vào chỗ trống?",
          "points": 0,
          "options": [
            {
              "id": "A",
              "text": "Từ chỉ hành động đứng trước tạo ra ngữ cảnh gợi ý."
            },
            {
              "id": "B",
              "text": "Từ dài nhất hoặc khó phát âm nhất trong câu."
            },
            {
              "id": "C",
              "text": "Chọn ngẫu nhiên một từ bất kỳ trong từ điển."
            },
            {
              "id": "D",
              "text": "Không có từ nào gợi ý, hoàn toàn do may mắn."
            }
          ],
          "explanation": "Ngữ cảnh xung quanh và các từ đứng trước giúp AI dự đoán từ tiếp theo."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "image-text",
        "category": "KHÁM PHÁ 2.1 &bull; VIDEO",
        "title": "MÔ HÌNH NGÔN NGỮ LỚN",
        "subtitle": "Khám phá video How Chatbots and LLMs Work từ Code.org (02:00 - 02:30)",
        "paragraphs": [
          "Mô hình ngôn ngữ lớn học từ dữ liệu văn bản khổng lồ.",
          "AI dự đoán từ tiếp theo dựa vào ngữ cảnh của các từ đứng trước."
        ],
        "imageUrl": "/assets/images/video-codeorg-chatbots-llm.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=X-AWdfSFCHQ",
        "videoTime": "02:00 - 02:30",
        "videoTitle": "How Chatbots and Large Language Models Work - Code.org",
        "imageNote": "Ảnh chụp video Code.org giải thích cách chatbot dự đoán từ theo ngữ cảnh.",
        "notes": "Video 2 phút: Mở đoạn 02:00-02:30. Cho học sinh đọc câu hỏi trước."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; HỎI ĐÁP",
        "title": "CĂN CỨ DỰ ĐOÁN CỦA AI",
        "subtitle": "Bản chất thuật toán dự đoán từ và cách con người kiểm tra nghĩa",
        "exampleA": {
          "tag": "TỪ VIDEO: CƠ CHẾ DỰ ĐOÁN",
          "title": "Dựa vào ngữ cảnh",
          "desc": "Mô hình dựa vào các từ đã có và mẫu học được để đoán từ tiếp."
        },
        "exampleB": {
          "tag": "ÁP DỤNG: TỪ UNDER",
          "title": "Kiểm tra bằng nguồn",
          "desc": "Bản dịch nghe trôi chảy vẫn cần tra bảng từ để xác nhận nghĩa."
        },
        "imageNote": "Sơ đồ đối chiếu: Dự đoán xác suất của AI vs Nguồn tra chuẩn của người.",
        "notes": "3 phút: Suy nghĩ 20-30s, mời 2 em trả lời ngắn rồi công bố."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-llm-basis",
          "type": "choice",
          "prompt": "Theo video, mô hình ngôn ngữ lớn (LLM) dựa vào đâu để dự đoán từ tiếp theo?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Dựa vào cảm xúc và suy nghĩ thật của máy tính."
            },
            {
              "id": "B",
              "text": "Dựa vào ngữ cảnh từ trước và xác suất học từ dữ liệu."
            },
            {
              "id": "C",
              "text": "Dựa vào việc tự động tìm kiếm trên mạng Internet."
            },
            {
              "id": "D",
              "text": "Dựa vào danh sách câu trả lời lập trình viên gõ sẵn."
            }
          ],
          "explanation": "AI dự đoán từ tiếp theo theo xác suất thống kê dựa trên ngữ cảnh đã có."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "cream",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; 10 PHÚT (MÀN 1/2)",
        "title": "KIỂM CHỨNG TỪ SCHOOL BAG",
        "subtitle": "Đối chiếu câu dịch 1 với bảng từ chuẩn để quyết định giữ hay sửa (P5.1)",
        "exampleA": {
          "tag": "CÂU GỐC & DỊCH MÔ PHỎNG",
          "title": "This is a school bag.",
          "desc": "Bản dịch mô phỏng: 'Đây là một chiếc cặp sách'."
        },
        "exampleB": {
          "tag": "TRA CỨU BẢNG TỪ CHUẨN",
          "title": "school bag = cặp sách",
          "desc": "Nghĩa trong bảng từ khớp hoàn toàn với ngữ cảnh câu."
        },
        "imageNote": "Cặp câu đối chiếu This is a school bag kèm trích dẫn bảng từ.",
        "notes": "3 phút: Kiểm tra căn cứ từ bảng từ/SGK trước khi hiện đáp án."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-check-schoolbag",
          "type": "choice",
          "prompt": "Đối chiếu bảng từ chuẩn (school bag = cặp sách), em chọn quyết định nào?",
          "points": 10,
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "Giữ nguyên bản dịch vì nghĩa hoàn toàn khớp với nguồn."
            },
            {
              "id": "B",
              "text": "Sửa bản dịch vì từ 'cặp sách' chưa đủ trang trọng."
            },
            {
              "id": "C",
              "text": "Tạm chưa dùng vì chưa kiểm tra lại trên 5 công cụ khác."
            },
            {
              "id": "D",
              "text": "Xóa toàn bộ câu dịch vì AI không thể dịch đúng."
            }
          ],
          "explanation": "school bag nghĩa là cặp sách, khớp với bảng từ chuẩn nên chọn Giữ nguyên."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; 10 PHÚT (MÀN 2/2)",
        "title": "KIỂM CHỨNG GIỚI TỪ UNDER",
        "subtitle": "Phát hiện lỗi dịch sai giới từ và thực hiện sửa chữa có căn cứ (P5.1)",
        "exampleA": {
          "tag": "CÂU GỐC & DỊCH MÔ PHỎNG",
          "title": "The cat is under the table.",
          "desc": "Bản dịch mô phỏng: 'Con mèo ở trên cái bàn' (Bị sai giới từ)."
        },
        "exampleB": {
          "tag": "TRA CỨU BẢNG TỪ CHUẨN",
          "title": "under = ở dưới",
          "desc": "Căn cứ bảng từ: under nghĩa là ở dưới (ngược với ở trên)."
        },
        "imageNote": "Hình con mèo dưới gầm bàn đối chiếu với bản dịch sai 'ở trên cái bàn'.",
        "notes": "2 phút: Nhấn mạnh câu dịch trôi chảy vẫn có thể sai chi tiết lõi."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-check-under",
          "type": "choice",
          "prompt": "Đối chiếu bảng từ (under = ở dưới), bản dịch 'ở trên cái bàn' cần sửa thế nào?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Giữ nguyên vì câu đọc rất êm tai và trôi chảy."
            },
            {
              "id": "B",
              "text": "Sửa từ 'cái bàn' thành 'cái ghế' cho hợp lý hơn."
            },
            {
              "id": "C",
              "text": "Sửa 'ở trên' thành 'ở dưới' theo đúng nghĩa nguồn tra."
            },
            {
              "id": "D",
              "text": "Xóa cụm 'con mèo' vì không thấy xuất hiện trong câu."
            }
          ],
          "explanation": "under nghĩa là ở dưới, bản dịch bị dịch sai thành ở trên nên bắt buộc sửa."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "cream",
        "layout": "steps",
        "category": "KHÁM PHÁ 2.2 &bull; 20 PHÚT (MÀN 1/2)",
        "title": "QUY TRÌNH THỰC HÀNH DỊCH",
        "subtitle": "Các bước thao tác sử dụng AI và ghi nhận nguyên văn kết quả (P5.2)",
        "steps": [
          {
            "title": "1. Gửi yêu cầu rõ ràng",
            "desc": "Nhập đúng yêu cầu dịch hai câu mẫu theo thứ tự vào công cụ."
          },
          {
            "title": "2. Ghi nguyên văn kết quả",
            "desc": "Chép chính xác câu trả lời của AI, không tự ý thêm bớt."
          },
          {
            "title": "3. Xác định hình thức",
            "desc": "Ghi rõ làm trực tiếp trên máy hay quan sát giáo viên mô phỏng."
          }
        ],
        "imageNote": "Hai câu mẫu tiếng Anh P5.1 và hai ô ghi nhận kết quả nguyên văn.",
        "notes": "12 phút: Nhóm ghi tên công cụ và làm P5.2, luân phiên đối chiếu."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "BÀI TẬP SẮP XẾP THỨ TỰ",
        "subtitle": "Sắp xếp các bước theo đúng trình tự logic",
        "activity": {
          "id": "act-ordering-translate-process",
          "type": "ordering",
          "prompt": "Sắp xếp đúng quy trình chuẩn khi nhờ AI hỗ trợ dịch một đoạn văn bản:",
          "points": 10,
          "explanation": "Trình tự: Đặt lệnh -> Ghi kết quả -> Tra cứu đối chiếu -> Ra quyết định.",
          "answer": [
            "p1",
            "p2",
            "p3",
            "p4"
          ],
          "items": [
            {
              "id": "p2",
              "text": "Ghi nhận nguyên văn câu trả lời mà AI vừa tạo ra."
            },
            {
              "id": "p1",
              "text": "Đặt câu lệnh yêu cầu AI dịch rõ ràng theo ngữ cảnh."
            },
            {
              "id": "p4",
              "text": "Đưa ra quyết định Giữ, Sửa hoặc Tạm chưa dùng."
            },
            {
              "id": "p3",
              "text": "Tra cứu bảng từ hoặc SGK để đối chiếu từng chi tiết."
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-14",
        "pageNumber": 14,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.2 &bull; 20 PHÚT (MÀN 2/2)",
        "title": "BA QUYẾT ĐỊNH CỦA NGƯỜI",
        "subtitle": "Phân loại hành động sau khi kiểm chứng kết quả từ trí tuệ nhân tạo (P5.2)",
        "cards": [
          {
            "title": "1. Quyết định Giữ",
            "desc": "Dùng khi thông tin đối chiếu khớp hoàn toàn với nguồn chuẩn."
          },
          {
            "title": "2. Quyết định Sửa",
            "desc": "Dùng khi câu trôi chảy nhưng có từ dịch sai nghĩa ngữ cảnh."
          },
          {
            "title": "3. Tạm chưa dùng",
            "desc": "Dùng khi nguồn chưa làm rõ nghĩa hoặc còn nghi ngờ độ đúng."
          }
        ],
        "imageNote": "Bảng nhật ký kiểm chứng P5.2 với 3 cột: Kết quả | Nguồn tra | Quyết định.",
        "notes": "5 phút: Kiểm căn cứ từng dòng của học sinh và ra quyết định."
      },
      {
        "id": "slide-15",
        "pageNumber": 15,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "BÀI TẬP NỐI CỘT",
        "subtitle": "Ghép nối các cặp thông tin tương ứng ở hai cột",
        "activity": {
          "id": "act-matching-human-decisions",
          "type": "matching",
          "prompt": "Nối từng tình huống kiểm chứng với quyết định xử lý phù hợp của người học:",
          "points": 10,
          "explanation": "Con người luôn là người quyết định dựa trên bằng chứng kiểm tra đối chiếu.",
          "answer": {
            "m1": "d1",
            "m2": "d2",
            "m3": "d3"
          },
          "pairs": [
            {
              "id": "m1",
              "left": "1. Bản dịch đúng nghĩa nguồn tra",
              "right": "Giữ nguyên kết quả",
              "rightId": "d1"
            },
            {
              "id": "m2",
              "left": "2. Bản dịch sai một giới từ",
              "right": "Sửa từ cho chính xác",
              "rightId": "d2"
            },
            {
              "id": "m3",
              "left": "3. Chưa tìm thấy nguồn tra cứu",
              "right": "Tạm chưa dùng, hỏi cô",
              "rightId": "d3"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-16",
        "pageNumber": 16,
        "theme": "cream",
        "layout": "three-cards",
        "category": "TỔNG KẾT &bull; GHI NHỚ",
        "title": "NGUYÊN TẮC VÀNG VỚI AI",
        "subtitle": "Ba bài học cốt lõi để làm chủ công cụ và chịu trách nhiệm học tập",
        "cards": [
          {
            "title": "1. Trôi chảy chưa chắc đúng",
            "desc": "Câu chữ mượt mà vẫn có thể chứa thông tin dịch sai lệch."
          },
          {
            "title": "2. Kiểm bằng nguồn độc lập",
            "desc": "Luôn đối chiếu với SGK, bảng từ hoặc người có chuyên môn."
          },
          {
            "title": "3. Con người quyết định",
            "desc": "Em là người chịu trách nhiệm về nội dung mình sử dụng."
          }
        ],
        "imageNote": "Sơ đồ 4 bước chốt: Hỏi rõ -> Ghi kết quả -> Đối chiếu -> Quyết định.",
        "notes": "3 phút ghi nhớ: Mời nhóm đọc nhật kí và nêu bài học cốt lõi."
      },
      {
        "id": "slide-17",
        "pageNumber": 17,
        "theme": "navy",
        "layout": "four-grid",
        "category": "LUYỆN TẬP &bull; 6 PHÚT (MÀN 1/2)",
        "title": "LỰA CHỌN CÁCH KIỂM ĐÚNG",
        "subtitle": "Đánh giá 4 cách xử lý phổ biến khi nhận câu trả lời từ AI (P5.3A)",
        "cards": [
          {
            "title": "Cách A: Tin vì câu dài",
            "desc": "Câu trả lời dài không đồng nghĩa với thông tin chính xác."
          },
          {
            "title": "Cách B: Hỏi AI hai lần",
            "desc": "Hỏi lại cùng công cụ dễ dẫn đến lỗi lặp lại giống nhau."
          },
          {
            "title": "Cách C: Tra nguồn chuẩn",
            "desc": "Đối chiếu với bảng từ, SGK hoặc tài liệu uy tín."
          },
          {
            "title": "Cách D: Sao chép ngay",
            "desc": "Dùng ngay không kiểm tra là phó mặc hoàn toàn cho máy."
          }
        ],
        "imageNote": "Bốn ô so sánh 4 cách tiếp cận khi nhận câu trả lời từ công cụ AI.",
        "notes": "3 phút cá nhân: Cho làm cá nhân rồi hiện gợi ý cách kiểm đúng."
      },
      {
        "id": "slide-18",
        "pageNumber": 18,
        "theme": "navy",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-best-verify-way",
          "type": "choice",
          "prompt": "Khi nhận được câu trả lời từ AI, cách kiểm chứng nào là đúng đắn nhất?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Tin tưởng ngay vì AI viết câu rất dài và diễn đạt tự tin."
            },
            {
              "id": "B",
              "text": "Hỏi lại đúng công cụ đó lần hai xem có trả lời giống không."
            },
            {
              "id": "C",
              "text": "Đối chiếu các chi tiết trong câu với bảng từ hoặc SGK chuẩn."
            },
            {
              "id": "D",
              "text": "Sao chép luôn vào bài nộp để tiết kiệm tối đa thời gian."
            }
          ],
          "explanation": "Chỉ có đối chiếu nguồn độc lập mới xác nhận được tính đúng đắn."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-19",
        "pageNumber": 19,
        "theme": "cream",
        "layout": "two-examples",
        "category": "LUYỆN TẬP &bull; 6 PHÚT (MÀN 2/2)",
        "title": "ĐẬP TAN CÁC NGỘ NHẬN",
        "subtitle": "Chỉnh sửa các quan niệm sai lầm về sự tự tin và sự trùng lặp của AI (P5.3A)",
        "exampleA": {
          "tag": "NGỘ NHẬN 1: TỰ TIN",
          "title": "AI tự tin thì khỏi kiểm?",
          "desc": "Sửa: AI luôn tạo văn bản mượt mà, nhưng nội dung vẫn có thể sai hoàn toàn."
        },
        "exampleB": {
          "tag": "NGỘ NHẬN 2: TRÙNG LẶP",
          "title": "Hai công cụ cùng nói?",
          "desc": "Sửa: Hai công cụ có thể học từ chung một nguồn sai nên cùng trả lời sai."
        },
        "imageNote": "Hai thẻ tự luận sửa nhận định sai về độ tự tin và sự trùng lặp của AI.",
        "notes": "3 phút cá nhân: Kiểm câu giải thích của HS về hai AI giống nhau."
      },
      {
        "id": "slide-20",
        "pageNumber": 20,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-two-tools-same",
          "type": "choice",
          "prompt": "Hỏi 2 công cụ AI khác nhau và kết quả giống hệt, có chắc chắn đúng 100% không?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Đúng, vì hai máy tính độc lập không bao giờ cùng mắc lỗi."
            },
            {
              "id": "B",
              "text": "Sai, vì các AI có thể cùng học từ một nguồn dữ liệu có lỗi."
            },
            {
              "id": "C",
              "text": "Đúng, vì khi câu trả lời trùng nhau thì không cần tra nguồn."
            },
            {
              "id": "D",
              "text": "Sai, vì máy tính chỉ biết dịch từ chứ không biết dịch câu."
            }
          ],
          "explanation": "Đồng thuận giữa các AI không thay được nguồn tra, chúng có thể cùng sai."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-21",
        "pageNumber": 21,
        "theme": "navy",
        "layout": "case-study",
        "category": "VẬN DỤNG &bull; 4 PHÚT",
        "title": "LẬP KẾ HOẠCH KIỂM CHỨNG",
        "subtitle": "Thực hành thiết kế kế hoạch kiểm chứng cho một câu hướng dẫn mới (P5.3B)",
        "cards": [
          {
            "title": "Câu mẫu thực hành",
            "desc": "Put the pencil under the book. (Đặt chiếc bút chì ở dưới quyển sách)."
          },
          {
            "title": "Ba câu hỏi then chốt",
            "desc": "Yêu cầu AI làm gì? Kiểm chi tiết nào ở đâu? Chưa chắc thì xử lý ra sao?"
          }
        ],
        "imageNote": "Thẻ kế hoạch 3 bước: Yêu cầu AI | Nguồn đối chiếu | Cách xử lý khi chưa chắc.",
        "notes": "4 phút vận dụng: HS chọn câu mẫu hoặc câu trong sách để lập kế hoạch."
      },
      {
        "id": "slide-22",
        "pageNumber": 22,
        "theme": "navy",
        "layout": "activity",
        "category": "VẬN DỤNG &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-reflect-verify-plan",
          "type": "reflection",
          "prompt": "Với câu 'Put the pencil under the book', hãy lập kế hoạch kiểm chứng:",
          "placeholder": "Ví dụ: Nhờ AI dịch, tra từ trong SGK, nếu còn nghi ngờ sẽ hỏi cô...",
          "points": 0,
          "explanation": "Kế hoạch khoa học gồm: đặt lệnh rõ, nguồn độc lập và hướng xử lý an toàn."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-23",
        "pageNumber": 23,
        "theme": "cream",
        "layout": "recap",
        "category": "HƯỚNG DẪN VỀ NHÀ &bull; 1 PHÚT",
        "title": "NHIỆM VỤ VỀ NHÀ",
        "subtitle": "Rèn luyện thói quen tự chủ và đối chiếu thông tin khi học tập",
        "points": [
          "Chọn một câu tiếng Anh trong bài đã học và tự ghi nghĩa theo sách giáo khoa.",
          "Nêu rõ phần việc cụ thể mà em dự định nhờ AI hỗ trợ (gợi ý từ, phát âm...).",
          "Ghi nhớ: Công cụ chỉ là trợ lý học tập, chính em mới là người ra quyết định."
        ],
        "imageNote": "Sơ đồ 3 nhiệm vụ: Chọn câu tiếng Anh -> Ghi nghĩa SGK -> Ghi việc nhờ AI.",
        "notes": "1 phút về nhà: Nhắc công cụ chỉ là lựa chọn học tập an toàn."
      }
    ],
    "fileName": "05-ai-ho-tro-hoc-tap-nhung-con-nguoi-quyet-dinh.json"
  },
  {
    "deckId": "06-du-lieu-ca-nhan-quyen-rieng-tu-va-an-toan-khi-su-dung-ai",
    "title": "BÀI 6: DỮ LIỆU CÁ NHÂN, QUYỀN RIÊNG TƯ VÀ AN TOÀN KHI DÙNG AI",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "date": "Học kì II",
    "estimatedDuration": "45 phút (1 tiết)",
    "totalSlides": 14,
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "QUYỀN RIÊNG TƯ & AN TOÀN &bull; BÀI 6",
        "title": "DỮ LIỆU CÁ NHÂN VÀ AI",
        "subtitle": "Bài 6: Quyền riêng tư và an toàn khi sử dụng AI (Privacy & Safety)",
        "imageNote": "Màn hình cấp quyền mô phỏng có nút Xem lại và cảnh báo dữ liệu.",
        "notes": "1 phút mở đầu: Mọi hồ sơ và quyền trong bài đều là giả định.",
        "author": "Tổ Tin học THCS"
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "MỤC TIÊU BÀI HỌC",
        "title": "MỤC TIÊU TIẾT 6",
        "subtitle": "Ba năng lực bảo vệ dữ liệu cá nhân trọng tâm cần đạt được",
        "objectives": [
          {
            "label": "NHẬN DIỆN",
            "title": "Nhận diện dữ liệu định danh",
            "desc": "Chỉ ra ít nhất bốn loại thông tin cá nhân trong hồ sơ giả định."
          },
          {
            "label": "BẢN SAO SẠCH",
            "title": "Tạo và kiểm tra bản chia sẻ",
            "desc": "Loại bỏ thông tin thừa, chỉ giữ nội dung cần thiết để hỏi bài."
          },
          {
            "label": "AN TOÀN",
            "title": "Viết ba câu hỏi an toàn",
            "desc": "Đặt câu hỏi về mục đích, quyền truy cập và người hỗ trợ tin cậy."
          }
        ],
        "imageNote": "Hai bản hồ sơ cạnh nhau và ba ô hỏi về mục đích, quyền và hỗ trợ.",
        "notes": "3 phút: Nêu minh chứng là bản trước-sau P6.2 và thẻ an toàn P6.3B."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHỞI ĐỘNG &bull; 4 PHÚT",
        "title": "CÓ NÊN BẤM CHO PHÉP?",
        "subtitle": "Tình huống ứng dụng giải nghĩa từ yêu cầu cấp quyền truy cập thiết bị",
        "exampleA": {
          "tag": "NHIỆM VỤ HỌC TẬP",
          "title": "Hỏi nghĩa một từ vựng",
          "desc": "Em chỉ cần dịch một câu tiếng Anh đơn giản: 'The cat is under the table'."
        },
        "exampleB": {
          "tag": "YÊU CẦU CỦA ỨNG DỤNG",
          "title": "Đòi họ tên, vị trí, danh bạ",
          "desc": "Ứng dụng hiện hộp thoại xin quyền truy cập danh bạ, định vị và họ tên."
        },
        "imageNote": "Hộp thoại quyền giả lập có nhãn Tình huống giả định.",
        "notes": "4 phút khởi động: Cho bình chọn và thảo luận cặp về cấp quyền."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "BÌNH CHỌN VÀ THẢO LUẬN",
        "subtitle": "Bình chọn ý kiến phù hợp nhất với suy nghĩ của em",
        "activity": {
          "id": "act-poll-permission-decision",
          "type": "poll",
          "prompt": "Khi ứng dụng học tập đòi quyền truy cập danh bạ và vị trí, em nên làm gì?",
          "points": 0,
          "options": [
            {
              "id": "A",
              "text": "Bấm Cho phép ngay để được sử dụng ứng dụng nhanh nhất."
            },
            {
              "id": "B",
              "text": "Từ chối các quyền không liên quan đến việc giải nghĩa từ."
            },
            {
              "id": "C",
              "text": "Tự ý bật hết mọi quyền mà không cần suy nghĩ hay hỏi ai."
            },
            {
              "id": "D",
              "text": "Xóa luôn điện thoại vì nghĩ rằng máy đã bị nhiễm virus."
            }
          ],
          "explanation": "Chỉ cấp quyền tối thiểu cần thiết, từ chối các quyền riêng tư thừa."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "image-text",
        "category": "KHÁM PHÁ 2.1 &bull; VIDEO",
        "title": "ĐẠO ĐỨC VÀ QUYỀN RIÊNG TƯ",
        "subtitle": "Khám phá video Ethics & AI: Privacy từ Code.org (00:45 - 01:15)",
        "paragraphs": [
          "Dữ liệu cá nhân khi gửi lên AI có thể được lưu trữ và chia sẻ tiếp.",
          "Luôn tự hỏi: AI dùng dữ liệu vào việc gì, và ai có thể xem được?"
        ],
        "imageUrl": "/assets/images/video-codeorg-ethics-privacy.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=zNxw5gJtHLc",
        "videoTime": "00:45 - 01:15",
        "videoTitle": "Ethics & AI: Privacy & the Future of Work - Code.org",
        "imageNote": "Ảnh chụp video Code.org về bảo vệ quyền riêng tư khi sử dụng công nghệ AI.",
        "notes": "Video 2 phút: Mở đoạn 00:45-01:15. Đọc nhanh 2 câu hỏi slide sau."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; HỎI ĐÁP",
        "title": "BẢO VỆ DỮ LIỆU CÁ NHÂN",
        "subtitle": "Bài học từ video và liên hệ thực tế tình huống hỏi nghĩa từ vựng",
        "exampleA": {
          "tag": "TỪ VIDEO: NGUYÊN TẮC CẦN NHỚ",
          "title": "Chỉ gửi dữ liệu cần thiết",
          "desc": "Biết công cụ dùng tin vào việc gì, ai có quyền xem để tránh lộ lọt."
        },
        "exampleB": {
          "tag": "ÁP DỤNG: HỎI NGHĨA TỪ",
          "title": "Từ chối quyền vô lý",
          "desc": "Chỉ gửi câu chứa từ vựng, từ chối cấp họ tên, vị trí và danh bạ."
        },
        "imageNote": "Hai thẻ câu hỏi định hướng cách chia sẻ thông tin an toàn với AI.",
        "notes": "3 phút: Suy nghĩ 20-30s, trả lời ngắn và nối sang hồ sơ P6.1."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-minimal-data",
          "type": "choice",
          "prompt": "Khi dùng AI hỏi nghĩa từ vựng, thông tin nào là DUY NHẤT cần cung cấp?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Họ tên đầy đủ và số điện thoại của em."
            },
            {
              "id": "B",
              "text": "Địa chỉ nhà và tọa độ vị trí GPS hiện tại."
            },
            {
              "id": "C",
              "text": "Câu văn chứa từ vựng và câu hỏi về nghĩa của từ."
            },
            {
              "id": "D",
              "text": "Danh bạ liên hệ của gia đình và bạn bè cùng lớp."
            }
          ],
          "explanation": "Để giải nghĩa từ, AI chỉ cần câu văn mẫu, không cần dữ liệu định danh."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "cream",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.1 &bull; 10 PHÚT (MÀN 1/2)",
        "title": "NHẬN DIỆN DỮ LIỆU ĐỊNH DANH",
        "subtitle": "Khám phá các trường dữ liệu cá nhân trong hồ sơ giả định P6.1",
        "cards": [
          {
            "title": "1. Định danh cá nhân",
            "desc": "Họ tên, lớp, trường học, địa chỉ nhà ở và số điện thoại liên hệ."
          },
          {
            "title": "2. Vị trí địa lý",
            "desc": "Tọa độ GPS chính xác và vị trí thời gian thực của thiết bị."
          },
          {
            "title": "3. Câu hỏi học tập",
            "desc": "Từ under nghĩa là gì trong 'The cat is under the table'?"
          }
        ],
        "imageNote": "Bảng hồ sơ giả định P6.1 phân loại các trường thông tin khác nhau.",
        "notes": "3 phút: Cho cặp đánh dấu và phân loại các trường thông tin."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "BÀI TẬP NỐI CỘT",
        "subtitle": "Ghép nối các cặp thông tin tương ứng ở hai cột",
        "activity": {
          "id": "act-matching-data-types",
          "type": "matching",
          "prompt": "Ghép từng trường thông tin trong hồ sơ giả P6.1 với nhóm dữ liệu tương ứng:",
          "points": 10,
          "explanation": "Cần phân biệt rõ dữ liệu định danh riêng tư với nội dung câu hỏi học tập.",
          "answer": {
            "p1": "r1",
            "p2": "r2",
            "p3": "r3"
          },
          "pairs": [
            {
              "id": "p1",
              "left": "1. Tên, trường, số liên hệ",
              "right": "Định danh cá nhân",
              "rightId": "r1"
            },
            {
              "id": "p2",
              "left": "2. Tọa độ nhà ở hiện tại",
              "right": "Dữ liệu vị trí riêng tư",
              "rightId": "r2"
            },
            {
              "id": "p3",
              "left": "3. Câu hỏi về từ under",
              "right": "Nội dung học tập cần gửi",
              "rightId": "r3"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; 10 PHÚT (MÀN 2/2)",
        "title": "QUYẾT ĐỊNH GIỮ VÀ BỎ",
        "subtitle": "Lọc bỏ thông tin thừa và xác định người có thể bị ảnh hưởng (P6.1)",
        "exampleA": {
          "tag": "THÔNG TIN CẦN BỎ",
          "title": "Loại bỏ dữ liệu nhạy cảm",
          "desc": "Xóa tên, trường, địa chỉ, số liên hệ và vị trí để bảo vệ riêng tư."
        },
        "exampleB": {
          "tag": "THÔNG TIN CẦN GIỮ",
          "title": "Giữ nội dung học tập",
          "desc": "Chỉ giữ câu tiếng Anh và câu hỏi nghĩa từ để gửi cho công cụ AI."
        },
        "imageNote": "Bảng Giữ/Bỏ dữ liệu kèm ba ô câu hỏi an toàn.",
        "notes": "2 phút: Quan sát HS giữ nội dung học và xác định người bị ảnh hưởng."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-impact-risk",
          "type": "choice",
          "prompt": "Nếu gửi toàn bộ hồ sơ (kèm họ tên, trường, số liên hệ) lên AI, ai bị ảnh hưởng?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Chỉ có máy tính của em bị ảnh hưởng vì chạy chậm hơn."
            },
            {
              "id": "B",
              "text": "Người có tên trong hồ sơ và cả chủ nhân của số liên hệ."
            },
            {
              "id": "C",
              "text": "Không ai bị ảnh hưởng vì AI luôn tự xóa dữ liệu ngay."
            },
            {
              "id": "D",
              "text": "Chỉ có giáo viên dạy Tin học bị ảnh hưởng khi chấm bài."
            }
          ],
          "explanation": "Lộ thông tin ảnh hưởng trực tiếp đến người đứng tên và chủ số liên hệ."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "cream",
        "layout": "steps",
        "category": "KHÁM PHÁ 2.2 &bull; 20 PHÚT (MÀN 1/2)",
        "title": "QUY TRÌNH TẠO BẢN SAO SẠCH",
        "subtitle": "Ba bước xử lý an toàn dữ liệu trước khi tải lên công cụ AI (P6.2)",
        "steps": [
          {
            "title": "1. Tạo bản sao làm việc",
            "desc": "Nhân bản tệp gốc thành bản sao, tuyệt đối không sửa trực tiếp bản gốc."
          },
          {
            "title": "2. Xóa hẳn trường thừa",
            "desc": "Xóa hoàn toàn các trường định danh, không chỉ phủ hình che chữ."
          },
          {
            "title": "3. Đặt tên chung và xuất",
            "desc": "Đặt tên tệp trung tính như 'Cau_hoi_tu_vung' rồi xuất bản chia sẻ."
          }
        ],
        "imageNote": "Sơ đồ ba bước: Tạo bản sao -> Xóa trường thừa -> Xuất tệp an toàn.",
        "notes": "10 phút: Làm mẫu xóa một trường trên bản sao, không chỉ phủ hình."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "BÀI TẬP SẮP XẾP THỨ TỰ",
        "subtitle": "Sắp xếp các bước theo đúng trình tự logic",
        "activity": {
          "id": "act-ordering-clean-steps",
          "type": "ordering",
          "prompt": "Sắp xếp đúng quy trình chuẩn khi tạo bản tài liệu an toàn để gửi cho AI:",
          "points": 10,
          "explanation": "Tạo bản sao -> Xóa trường thừa -> Đặt tên chung -> Kiểm tra lại.",
          "answer": [
            "st1",
            "st2",
            "st3",
            "st4"
          ],
          "items": [
            {
              "id": "st2",
              "text": "Xóa bỏ hoàn toàn các trường dữ liệu định danh thừa."
            },
            {
              "id": "st1",
              "text": "Nhân bản tài liệu gốc thành một bản sao làm việc."
            },
            {
              "id": "st4",
              "text": "Xuất file và mở lại kiểm tra kỹ trước khi gửi."
            },
            {
              "id": "st3",
              "text": "Đặt tên tệp chung không chứa thông tin cá nhân."
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-14",
        "pageNumber": 14,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.2 &bull; 20 PHÚT (MÀN 2/2)",
        "title": "NGUYÊN TẮC MỞ LẠI KIỂM TRA",
        "subtitle": "Kiểm tra kỹ lưỡng bản xuất để đảm bảo không còn dữ liệu sót (P6.2)",
        "cards": [
          {
            "title": "1. Kiểm tra tên tệp",
            "desc": "Tên tệp không được chứa tên người, lớp học hay số điện thoại."
          },
          {
            "title": "2. Rà soát nội dung",
            "desc": "Dùng tính năng tìm kiếm (Ctrl+F) để rà soát các từ ngữ định danh."
          },
          {
            "title": "3. Đổi bạn kiểm tra",
            "desc": "Đổi bài cho bạn bên cạnh kiểm tra chéo khách quan trước khi nộp."
          }
        ],
        "imageNote": "Bảng kiểm P6.2 dùng để rà soát bản xuất trước khi chia sẻ.",
        "notes": "6 phút: Phân biệt thao tác xuất/mở tệp thật với bài mô phỏng."
      },
      {
        "id": "slide-15",
        "pageNumber": 15,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-why-recheck",
          "type": "choice",
          "prompt": "Vì sao sau khi xóa thông tin và xuất tệp, ta bắt buộc phải MỞ LẠI ĐỂ KIỂM TRA?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Để đếm xem tệp tài liệu chiếm bao nhiêu dung lượng bộ nhớ."
            },
            {
              "id": "B",
              "text": "Để đảm bảo thông tin nhạy cảm đã bị xóa hẳn và không còn sót."
            },
            {
              "id": "C",
              "text": "Vì phần mềm máy tính luôn bắt buộc người dùng mở lại 2 lần."
            },
            {
              "id": "D",
              "text": "Để chỉnh sửa màu sắc chữ cho đẹp mắt hơn trước khi nộp."
            }
          ],
          "explanation": "Che chữ chưa chắc đã xóa dữ liệu gốc; mở lại kiểm tra giúp ngừa rò rỉ."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-16",
        "pageNumber": 16,
        "theme": "cream",
        "layout": "three-cards",
        "category": "TỔNG KẾT &bull; GHI NHỚ",
        "title": "NGUYÊN TẮC BẢO VỆ DỮ LIỆU",
        "subtitle": "Ba bài học cốt lõi để bảo vệ bản thân và tôn trọng người khác",
        "cards": [
          {
            "title": "1. Chia sẻ vừa đủ",
            "desc": "Chỉ giữ và gửi đúng những dữ liệu cần thiết cho việc học tập."
          },
          {
            "title": "2. Kiểm tra bản xuất",
            "desc": "Xóa trên bản sao, xuất file và luôn mở lại rà soát cẩn thận."
          },
          {
            "title": "3. Dừng lại và hỏi",
            "desc": "Khi chưa hiểu rõ mục đích thu thập hoặc quyền xin cấp, dừng lại hỏi."
          }
        ],
        "imageNote": "Ba biểu tượng đơn giản: Lọc dữ liệu, Mở lại kiểm tra, Hỏi hỗ trợ.",
        "notes": "4 phút ghi nhớ: Nhắc nguyên tắc mở lại kiểm tra bản xuất trước khi gửi."
      },
      {
        "id": "slide-17",
        "pageNumber": 17,
        "theme": "navy",
        "layout": "two-examples",
        "category": "LUYỆN TẬP &bull; 6 PHÚT (MÀN 1/2)",
        "title": "XỬ LÝ YÊU CẦU CẤP QUYỀN",
        "subtitle": "Phân tích và ra quyết định đối với các quyền truy cập thiết bị (P6.3A)",
        "exampleA": {
          "tag": "QUYỀN PHÙ HỢP",
          "title": "Quyền gõ chữ, micro",
          "desc": "Cần thiết nếu em muốn nhập câu hỏi bằng văn bản hoặc đọc phát âm."
        },
        "exampleB": {
          "tag": "QUYỀN KHÔNG CẦN THIẾT",
          "title": "Quyền vị trí, danh bạ",
          "desc": "Hoàn toàn không phục vụ giải nghĩa từ, cần từ chối ngay lập tức."
        },
        "imageNote": "Hộp thoại quyền giả và hai ô trả lời của học sinh.",
        "notes": "3 phút cá nhân: Ghi nhận lựa chọn xử lý yêu cầu cấp quyền."
      },
      {
        "id": "slide-18",
        "pageNumber": 18,
        "theme": "navy",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-app-permissions",
          "type": "choice",
          "prompt": "Một ứng dụng học tập bất ngờ đòi quyền truy cập vị trí GPS. Em làm gì?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Chấp nhận ngay vì nghĩ rằng ứng dụng giáo dục luôn luôn an toàn."
            },
            {
              "id": "B",
              "text": "Từ chối quyền vị trí và hỏi người lớn/thầy cô nếu chưa rõ."
            },
            {
              "id": "C",
              "text": "Cho phép dùng vị trí và giới thiệu thêm cho bạn bè cùng lớp tải."
            },
            {
              "id": "D",
              "text": "Tắt màn hình máy tính và không bao giờ học Tin học nữa."
            }
          ],
          "explanation": "Quyền không phục vụ học tập cần bị từ chối; luôn hỏi người lớn khi chưa rõ."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-19",
        "pageNumber": 19,
        "theme": "cream",
        "layout": "two-examples",
        "category": "LUYỆN TẬP &bull; 6 PHÚT (MÀN 2/2)",
        "title": "TÔN TRỌNG DỮ LIỆU BẠN BÈ",
        "subtitle": "Quy tắc đạo đức khi xử lý thông tin và hình ảnh của người khác (P6.3A)",
        "exampleA": {
          "tag": "TÌNH HUỐNG THỰC TẾ",
          "title": "Bài làm của bạn có tên",
          "desc": "Em chụp ảnh bài làm của bạn có ghi họ tên và số liên hệ ở đầu trang."
        },
        "exampleB": {
          "tag": "QUY TẮC ĐẠO ĐỨC",
          "title": "Phải xin phép và ẩn danh",
          "desc": "Không được tự ý tải lên AI khi chưa được bạn đồng ý và chưa xóa thông tin."
        },
        "imageNote": "Ảnh minh họa bài làm học sinh dùng tên và số giả định.",
        "notes": "3 phút cá nhân: Chốt nguyên tắc đạo đức không tự ý gửi ảnh bạn."
      },
      {
        "id": "slide-20",
        "pageNumber": 20,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-friend-privacy",
          "type": "choice",
          "prompt": "Em có được tự ý chụp ảnh bài làm của bạn có đầy đủ họ tên gửi lên AI không?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Được, vì chia sẻ bài làm giúp bạn học hỏi thêm kiến thức mới."
            },
            {
              "id": "B",
              "text": "Được, miễn là AI đó là công cụ nổi tiếng và có nhiều người dùng."
            },
            {
              "id": "C",
              "text": "Không, phải được bạn đồng ý và phải xóa thông tin trước."
            },
            {
              "id": "D",
              "text": "Được, vì thông tin học sinh không có giá trị để bảo vệ."
            }
          ],
          "explanation": "Tôn trọng quyền riêng tư người khác là nguyên tắc đạo đức khi dùng AI."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-21",
        "pageNumber": 21,
        "theme": "navy",
        "layout": "case-study",
        "category": "VẬN DỤNG &bull; 4 PHÚT",
        "title": "THIẾT KẾ THẺ AN TOÀN",
        "subtitle": "Xây dựng ba câu hỏi phòng ngừa và quy tắc bảo vệ dữ liệu lớp học (P6.3B)",
        "cards": [
          {
            "title": "Ba câu hỏi an toàn",
            "desc": "Dữ liệu dùng làm gì? Có cần quyền này không? Ai hỗ trợ em khi chưa rõ?"
          },
          {
            "title": "Mẫu quy tắc an toàn",
            "desc": "Khi ứng dụng xin quyền ..., em sẽ ... vì ..."
          }
        ],
        "imageNote": "Mẫu thẻ an toàn P6.3B và ô ghi nhận quy tắc chung của lớp.",
        "notes": "4 phút vận dụng: Viết 1 quy tắc bảo vệ dữ liệu cá nhân theo mẫu."
      },
      {
        "id": "slide-22",
        "pageNumber": 22,
        "theme": "navy",
        "layout": "activity",
        "category": "VẬN DỤNG &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-reflect-safety-rule",
          "type": "reflection",
          "prompt": "Viết 1 quy tắc bảo vệ dữ liệu cá nhân theo mẫu: 'Khi ..., em sẽ ... vì ...':",
          "placeholder": "Ví dụ: Khi ứng dụng xin vị trí, em sẽ từ chối vì không cần vị trí...",
          "points": 0,
          "explanation": "Quy tắc tốt phải nêu rõ tình huống, hành động bảo vệ và lý do thuyết phục."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-23",
        "pageNumber": 23,
        "theme": "cream",
        "layout": "recap",
        "category": "HƯỚNG DẪN VỀ NHÀ &bull; 1 PHÚT",
        "title": "NHIỆM VỤ VỀ NHÀ",
        "subtitle": "Ôn tập kiến thức và rèn luyện kỹ năng tự bảo vệ an toàn số",
        "points": [
          "Xem lại một quyền truy cập trong hồ sơ giả và viết nhận xét có cần thiết không.",
          "Ghi nhớ mẫu ba câu hỏi an toàn trước khi bấm nút đồng ý trên bất kỳ ứng dụng nào.",
          "Chuẩn bị cho Tiết 7: Cùng cả lớp xây dựng bộ quy tắc đạo đức sử dụng AI hoàn chỉnh."
        ],
        "imageNote": "Hộp thoại quyền giả định và ô trả lời ngắn về nhà của học sinh.",
        "notes": "1 phút về nhà: Ôn tập kỹ năng tự bảo vệ an toàn số tại gia đình."
      }
    ],
    "fileName": "06-du-lieu-ca-nhan-quyen-rieng-tu-va-an-toan-khi-su-dung-ai.json"
  },
  {
    "deckId": "07-mat-toi-han-che-va-lua-chon-su-dung-ai",
    "title": "BÀI 7: MẶT TỐT, HẠN CHẾ VÀ LỰA CHỌN SỬ DỤNG AI",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "date": "Học kì II",
    "estimatedDuration": "45 phút (1 tiết)",
    "totalSlides": 13,
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "LỰA CHỌN DÙNG AI &bull; BÀI 7",
        "title": "LỰA CHỌN KHI NÀO DÙNG AI",
        "subtitle": "Bài 7: Mặt tốt, hạn chế và lựa chọn sử dụng AI (Choices When Using AI)",
        "imageNote": "Ảnh mô phỏng danh sách video học tập và mục đề xuất xem tiếp.",
        "notes": "1 phút mở đầu: Dẫn từ quy tắc an toàn tiết 6 sang lựa chọn dùng AI.",
        "author": "Tổ Tin học THCS"
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "MỤC TIÊU BÀI HỌC",
        "title": "MỤC TIÊU TIẾT 7",
        "subtitle": "Ba năng lực đánh giá và lựa chọn sử dụng AI có trách nhiệm",
        "objectives": [
          {
            "label": "ĐÁNH GIÁ",
            "title": "Nêu lợi ích và hạn chế",
            "desc": "Chỉ ra mặt tích cực và tiêu cực trong các tình huống thực tế."
          },
          {
            "label": "LỰA CHỌN",
            "title": "Lựa chọn có điều kiện",
            "desc": "Phân tích và ra quyết định có căn cứ cho ít nhất 3/4 tình huống."
          },
          {
            "label": "KIỂM SOÁT",
            "title": "Đề xuất cách kiểm soát",
            "desc": "Biết cách kiểm chứng kết quả và giảm thiểu rủi ro khi dùng AI."
          }
        ],
        "imageNote": "Ba lựa chọn: Nên dùng, Dùng có điều kiện, Không nên dùng.",
        "notes": "3 phút: Bìa và mục tiêu. Nhắc lí do cần gắn chi tiết trên thẻ."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHỞI ĐỘNG &bull; 4 PHÚT",
        "title": "LỢI ÍCH HAY CUỐN XEM TIẾP?",
        "subtitle": "Hai mặt của tính năng tự động gợi ý video trên các nền tảng số",
        "exampleA": {
          "tag": "MẶT TÍCH CỰC: HỖ TRỢ HỌC",
          "title": "Tìm đúng bài học cần thiết",
          "desc": "AI gợi ý nhanh các video bài giảng phù hợp với chủ đề đang tìm hiểu."
        },
        "exampleB": {
          "tag": "MẶT HẠN CHẾ: MẤT THỜI GIAN",
          "title": "Liên tục đề xuất xem tiếp",
          "desc": "Thuật toán giữ chân người xem bằng video giải trí, dễ gây sa đà."
        },
        "imageNote": "Hai phần giao diện: danh sách phát bài học vs đề xuất xem tiếp.",
        "notes": "4 phút khởi động: Cặp đôi nêu một lợi ích và cách giữ thời gian."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "BÌNH CHỌN VÀ THẢO LUẬN",
        "subtitle": "Bình chọn ý kiến phù hợp nhất với suy nghĩ của em",
        "activity": {
          "id": "act-poll-video-choice",
          "type": "poll",
          "prompt": "Để tận dụng video học tập mà không bị cuốn xem tiếp quá đà, em nên làm gì?",
          "points": 0,
          "options": [
            {
              "id": "A",
              "text": "Cứ để video tự động phát liên tục đến khi hết pin."
            },
            {
              "id": "B",
              "text": "Tắt tính năng tự phát và đặt mục tiêu thời gian trước khi xem."
            },
            {
              "id": "C",
              "text": "Không bao giờ xem bất kỳ video nào trên Internet nữa."
            },
            {
              "id": "D",
              "text": "Chỉ xem video giải trí, không bao giờ xem bài học."
            }
          ],
          "explanation": "Cần chủ động tắt tự phát và đặt giới hạn giờ để tránh bị cuốn xem tiếp."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "image-text",
        "category": "KHÁM PHÁ 2.1 &bull; VIDEO",
        "title": "BÌNH ĐẲNG VÀ THIÊN LỆCH AI",
        "subtitle": "Khám phá video Equal Access and Algorithmic Bias từ Code.org (02:00 - 02:30)",
        "paragraphs": [
          "Dữ liệu huấn luyện quyết định tính công bằng của hệ thống AI.",
          "Nếu một nhóm đối tượng ít xuất hiện, AI sẽ nhận diện kém chính xác."
        ],
        "imageUrl": "/assets/images/video-codeorg-equal-access-bias.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=tJQSyzBUAew",
        "videoTime": "02:00 - 02:30",
        "videoTitle": "Ethics & AI: Equal Access and Algorithmic Bias - Code.org",
        "imageNote": "Ảnh video Code.org giải thích thiên lệch thuật toán do thiếu dữ liệu.",
        "notes": "Video 2 phút: Mở đoạn 02:00-02:30. Cho HS đọc nhanh câu hỏi trước."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; HỎI ĐÁP",
        "title": "DỮ LIỆU VÀ KẾT QUẢ LỆCH",
        "subtitle": "Bản chất của thiên lệch thuật toán và giải pháp kiểm tra bằng mẫu mới",
        "exampleA": {
          "tag": "TỪ VIDEO: THIẾU ĐẠI DIỆN",
          "title": "Dữ liệu ít đa dạng",
          "desc": "Trường hợp ít xuất hiện trong tập huấn luyện sẽ khiến AI nhận diện sai."
        },
        "exampleB": {
          "tag": "ÁP DỤNG: CỐC SẪM MÀU",
          "title": "Thử mẫu mới ngoài tập học",
          "desc": "Mô hình chỉ học cốc trắng cần được thử với cốc sẫm màu và kiểu mới."
        },
        "imageNote": "Sơ đồ đối chiếu dữ liệu huấn luyện thiên lệch vs kết quả kiểm thử.",
        "notes": "3 phút: 20-30s suy nghĩ, trả lời ngắn và nối sang bộ 30 ảnh A/B."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-bias-cause",
          "type": "choice",
          "prompt": "Theo video, vì sao AI có thể nhận dạng rất kém với một nhóm đối tượng?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Vì máy tính không thích xử lý các đồ vật có màu tối."
            },
            {
              "id": "B",
              "text": "Vì nhóm đối tượng đó xuất hiện quá ít trong dữ liệu huấn luyện."
            },
            {
              "id": "C",
              "text": "Vì người dùng không trả phí bản quyền cho phần mềm AI."
            },
            {
              "id": "D",
              "text": "Vì camera của máy tính tự động giảm độ sáng khi nhận diện."
            }
          ],
          "explanation": "Dữ liệu ít đại diện cho trường hợp nào thì AI sẽ đoán kém trường hợp đó."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "cream",
        "layout": "compare",
        "category": "KHÁM PHÁ 2.1 &bull; 10 PHÚT",
        "title": "CÙNG 30 ẢNH, KHÁC Ở ĐÂU?",
        "subtitle": "So sánh mức độ đa dạng giữa hai bộ dữ liệu huấn luyện mẫu (P7.2)",
        "columnA": {
          "title": "Bộ dữ liệu A (30 ảnh)",
          "items": [
            "Chỉ gồm ảnh cốc sứ màu trắng.",
            "Chụp ở đúng một góc chính diện.",
            "Chỉ chụp trên một màu nền bàn.",
            "Dễ bị nhận dạng sai khi gặp cốc mới."
          ]
        },
        "columnB": {
          "title": "Bộ dữ liệu B (30 ảnh)",
          "items": [
            "Gồm nhiều kiểu cốc, quai và màu sắc.",
            "Chụp ở nhiều góc nghiêng khác nhau.",
            "Chụp trên nhiều phông nền đa dạng.",
            "Bao quát tốt hơn tình huống thực tế."
          ]
        },
        "imageNote": "Hai lưới ảnh mẫu A và B minh họa độ đa dạng của dữ liệu học.",
        "notes": "5 phút: Nhóm chỉ ra nhóm ảnh còn thiếu và tính đại diện dữ liệu."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-dataset-diversity",
          "type": "choice",
          "prompt": "Cùng có 30 ảnh huấn luyện, vì sao Bộ B nhận biết cốc mới tốt hơn Bộ A?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Vì Bộ B có dung lượng tệp ảnh lớn hơn Bộ A."
            },
            {
              "id": "B",
              "text": "Vì ảnh trong Bộ B được chụp bằng máy ảnh đắt tiền hơn."
            },
            {
              "id": "C",
              "text": "Vì Bộ B đa dạng về kiểu dáng, góc chụp và màu sắc nền."
            },
            {
              "id": "D",
              "text": "Vì Bộ B được huấn luyện trong thời gian dài gấp đôi."
            }
          ],
          "explanation": "Độ đa dạng và tính đại diện của dữ liệu giúp mô hình học quy luật tốt hơn."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.2 &bull; 20 PHÚT (MÀN 1/2)",
        "title": "CÂN NHẮC DỊCH VÀ VIDEO",
        "subtitle": "Phân tích lợi ích, hạn chế và điều kiện sử dụng cho hai tình huống đầu (P7.1)",
        "exampleA": {
          "tag": "TÌNH HUỐNG 1: DỊCH CÂU",
          "title": "AI dịch thuật học tập",
          "desc": "Nên dùng có điều kiện: Luôn đối chiếu bảng từ và SGK trước khi dùng."
        },
        "exampleB": {
          "tag": "TÌNH HUỐNG 2: GỢI Ý VIDEO",
          "title": "Gợi ý video tự động",
          "desc": "Nên dùng có điều kiện: Tắt tự phát, đặt giờ dừng để không quá đà."
        },
        "imageNote": "Hai thẻ tình huống 1 và 2 trích từ phiếu học tập P7.1.",
        "notes": "10 phút: Phân vai đọc thẻ tình huống, phản biện và ghi điều kiện dùng."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-safe-condition",
          "type": "choice",
          "prompt": "Khi dùng AI dịch câu tiếng Anh, điều kiện quan trọng nhất để an toàn là gì?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Sao chép ngay vào vở mà không cần đọc lại câu tiếng Việt."
            },
            {
              "id": "B",
              "text": "Đối chiếu từ vựng khó với bảng từ chuẩn hoặc hỏi thầy cô."
            },
            {
              "id": "C",
              "text": "Chỉ chọn các công cụ dịch có giao diện nhiều màu sắc."
            },
            {
              "id": "D",
              "text": "Yêu cầu AI dịch đi dịch lại 10 lần liên tục."
            }
          ],
          "explanation": "Dùng có điều kiện: AI gợi ý nhưng con người phải đối chiếu nguồn chuẩn."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "cream",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.2 &bull; 20 PHÚT (MÀN 2/2)",
        "title": "NHẬN DẠNG VÀ RIÊNG TƯ",
        "subtitle": "Phân tích hai tình huống nhận dạng sai và đòi hỏi quyền truy cập quá mức (P7.1)",
        "exampleA": {
          "tag": "TÌNH HUỐNG 3: NHẬN DẠNG SAI",
          "title": "Cốc bị nhận thành bút",
          "desc": "Không nên tin ngay: Phải kiểm tra nhãn thật và bổ sung ảnh thử."
        },
        "exampleB": {
          "tag": "TÌNH HUỐNG 4: ĐÒI QUYỀN",
          "title": "Xin địa chỉ, vị trí, liên hệ",
          "desc": "Không nên cấp: Từ chối quyền thừa, hỏi người lớn nếu bị ép buộc."
        },
        "imageNote": "Hai thẻ tình huống 3 và 4 trích từ phiếu học tập P7.1.",
        "notes": "7 phút: Xem tối thiểu 3/4 quyết định có căn cứ kiểm soát cụ thể."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "BÀI TẬP NỐI CỘT",
        "subtitle": "Ghép nối các cặp thông tin tương ứng ở hai cột",
        "activity": {
          "id": "act-matching-case-decisions",
          "type": "matching",
          "prompt": "Ghép từng tình huống thực tế với quyết định sử dụng hợp lý nhất:",
          "points": 10,
          "explanation": "Lựa chọn dùng AI phải gắn liền với điều kiện kiểm soát và bảo vệ riêng tư.",
          "answer": {
            "p1": "r1",
            "p2": "r2",
            "p3": "r3"
          },
          "pairs": [
            {
              "id": "p1",
              "left": "1. Dịch câu tiếng Anh",
              "right": "Dùng có kiểm tra bảng từ",
              "rightId": "r1"
            },
            {
              "id": "p2",
              "left": "2. Xem video bài học",
              "right": "Dùng có giới hạn giờ xem",
              "rightId": "r2"
            },
            {
              "id": "p3",
              "left": "3. Tra từ đòi vị trí",
              "right": "Không cấp quyền không cần",
              "rightId": "r3"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-14",
        "pageNumber": 14,
        "theme": "navy",
        "layout": "three-cards",
        "category": "TỔNG KẾT &bull; GHI NHỚ",
        "title": "BA NGUYÊN TẮC LỰA CHỌN",
        "subtitle": "Ba bước ra quyết định thông minh trước khi sử dụng bất kỳ công cụ AI nào",
        "cards": [
          {
            "title": "1. Xác định mục đích",
            "desc": "Công cụ AI này có thực sự cần thiết và hỗ trợ đúng mục tiêu học không?"
          },
          {
            "title": "2. Cân nhắc ảnh hưởng",
            "desc": "Nếu AI đưa ra kết quả sai hoặc thu thập dữ liệu, ai sẽ bị ảnh hưởng?"
          },
          {
            "title": "3. Chọn cách kiểm soát",
            "desc": "Nên dùng, dùng có điều kiện hay không dùng; luôn có cách dự phòng."
          }
        ],
        "imageNote": "Ba nút lựa chọn: Nên dùng, Dùng có điều kiện, Không dùng kèm ô lý do.",
        "notes": "3 phút ghi nhớ: Ba nguyên tắc ra quyết định thông minh trước khi dùng AI."
      },
      {
        "id": "slide-15",
        "pageNumber": 15,
        "theme": "cream",
        "layout": "three-cards",
        "category": "LUYỆN TẬP &bull; 6 PHÚT (MÀN 1/2)",
        "title": "ĐÁNH GIÁ BA NHẬN ĐỊNH",
        "subtitle": "Phân biệt đúng sai và chỉnh sửa các quan niệm chưa chính xác về AI (P7.3A)",
        "cards": [
          {
            "title": "1. Nhận định A: Sai",
            "desc": "'Có lợi thì không có hạn chế' -> Sửa: Công cụ luôn có cả hai mặt."
          },
          {
            "title": "2. Nhận định B: Sai",
            "desc": "'Nhiều dữ liệu luôn công bằng' -> Sửa: Cần chất lượng và đa dạng."
          },
          {
            "title": "3. Nhận định C: Đúng",
            "desc": "Người dùng cần cân nhắc mục tiêu và khả năng kiểm tra trước khi dùng."
          }
        ],
        "imageNote": "Ba thẻ đánh giá Đúng/Sai kèm phần chỉnh sửa mệnh đề chưa chuẩn.",
        "notes": "3 phút cá nhân: Đánh giá ba nhận định và sửa câu nhận định sai."
      },
      {
        "id": "slide-16",
        "pageNumber": 16,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-eval-statements",
          "type": "choice",
          "prompt": "Nhận định nào sau đây là ĐÚNG ĐẮN VÀ KHOA HỌC NHẤT về việc sử dụng AI?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Một ứng dụng AI đã có lợi ích thì sẽ không bao giờ có hạn chế."
            },
            {
              "id": "B",
              "text": "Tập dữ liệu chỉ cần số lượng thật nhiều thì sẽ luôn công bằng."
            },
            {
              "id": "C",
              "text": "Cần cân nhắc mục tiêu và cách kiểm tra trước khi dùng AI."
            },
            {
              "id": "D",
              "text": "Học sinh không cần suy nghĩ gì cả vì AI luôn làm thay tất cả."
            }
          ],
          "explanation": "Đánh giá công cụ luôn phải xem xét mục đích, điều kiện và cách kiểm chứng."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-17",
        "pageNumber": 17,
        "theme": "navy",
        "layout": "two-examples",
        "category": "LUYỆN TẬP &bull; 6 PHÚT (MÀN 2/2)",
        "title": "TÌNH HUỐNG NHẬN DẠNG LÁ",
        "subtitle": "Phân biệt giữa việc dùng AI để học tập và quyết định liên quan an toàn (P7.3A)",
        "exampleA": {
          "tag": "MỤC ĐÍCH HỌC TẬP",
          "title": "Dùng để tìm hiểu kiến thức",
          "desc": "AI gợi ý tên cây để em tra cứu sách sinh học hoặc hỏi thầy cô."
        },
        "exampleB": {
          "tag": "QUYẾT ĐỊNH AN TOÀN",
          "title": "Không dùng để ăn thử",
          "desc": "Tuyệt đối không dùng gợi ý AI để quyết định ăn hoặc uống vì nguy hiểm."
        },
        "imageNote": "Ảnh chụp một chiếc lá cây rừng kèm cảnh báo an toàn sức khỏe.",
        "notes": "3 phút cá nhân: Phân tích tình huống an toàn tính mạng không giao AI."
      },
      {
        "id": "slide-18",
        "pageNumber": 18,
        "theme": "navy",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-leaf-safety",
          "type": "choice",
          "prompt": "Ứng dụng AI gọi tên một chiếc lá cây, em có được dùng để quyết định ăn thử?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Được, vì AI thị giác máy tính nhận dạng hình ảnh chính xác 100%."
            },
            {
              "id": "B",
              "text": "Được, nếu như ứng dụng đó có hơn một triệu lượt đánh giá tốt."
            },
            {
              "id": "C",
              "text": "Không, vì AI có thể nhầm lá độc; an toàn cần có chuyên gia."
            },
            {
              "id": "D",
              "text": "Được, chỉ cần chụp lại ảnh chiếc lá đó thêm 3 lần cho chắc chắn."
            }
          ],
          "explanation": "Quyết định an toàn tính mạng đòi hỏi chuyên gia, không được giao cho AI."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-19",
        "pageNumber": 19,
        "theme": "cream",
        "layout": "case-study",
        "category": "VẬN DỤNG &bull; 4 PHÚT",
        "title": "XÂY DỰNG BỘ QUY TẮC LỚP",
        "subtitle": "Đóng góp quy tắc có căn cứ vào bảng quy tắc sử dụng AI của lớp (P7.3B)",
        "cards": [
          {
            "title": "Mẫu quy tắc hành động",
            "desc": "Khi ..., em sẽ ... vì ..."
          },
          {
            "title": "Kế thừa từ Tiết 6",
            "desc": "Bảo vệ thông tin cá nhân và tôn trọng quyền riêng tư của bạn bè."
          }
        ],
        "imageNote": "Bảng quy tắc dùng AI của lớp, dòng đầu là quy tắc bảo vệ dữ liệu tiết 6.",
        "notes": "4 phút vận dụng: Viết 1 quy tắc dùng AI an toàn cho bảng lớp."
      },
      {
        "id": "slide-20",
        "pageNumber": 20,
        "theme": "cream",
        "layout": "activity",
        "category": "VẬN DỤNG &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-reflect-class-rule",
          "type": "reflection",
          "prompt": "Viết 1 quy tắc dùng AI an toàn cho lớp theo mẫu: 'Khi ..., em sẽ ... vì ...':",
          "placeholder": "Ví dụ: Khi dùng AI dịch câu, em sẽ tra từ điển vì AI có thể dịch sai...",
          "points": 0,
          "explanation": "Quy tắc tốt phải nêu rõ tình huống cụ thể, hành động kiểm soát và lý do."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-21",
        "pageNumber": 21,
        "theme": "navy",
        "layout": "recap",
        "category": "HƯỚNG DẪN VỀ NHÀ &bull; 1 PHÚT",
        "title": "NHIỆM VỤ VỀ NHÀ",
        "subtitle": "Tìm kiếm ý tưởng ứng dụng AI giải quyết một nhu cầu thực tế",
        "points": [
          "Tìm một nhu cầu gần gũi trong học tập hoặc đời sống mà AI có thể hỗ trợ.",
          "Xác định rõ ba câu hỏi: Ai là người cần? AI hỗ trợ việc gì? Có giới hạn nào?",
          "Chuẩn bị cho Tiết 8: Bắt đầu xây dựng đề án dự án AI học tập của nhóm."
        ],
        "imageNote": "Thẻ ba ô chuẩn bị ý tưởng dự án: Ai cần | AI hỗ trợ gì | Giới hạn rủi ro.",
        "notes": "1 phút về nhà: Tìm kiếm ý tưởng nhu cầu thực tế cho dự án tiết 8."
      }
    ],
    "fileName": "07-mat-toi-han-che-va-lua-chon-su-dung-ai.json"
  },
  {
    "deckId": "08-con-nguoi-ket-hop-voi-ai-hinh-thanh-y-tuong-du-an",
    "title": "BÀI 8: CON NGƯỜI KẾT HỢP VỚI AI - HÌNH THÀNH Ý TƯỞNG DỰ ÁN",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "date": "Học kì II",
    "estimatedDuration": "45 phút (1 tiết)",
    "totalSlides": 15,
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "DỰ ÁN AI &bull; TIẾT 8",
        "title": "THIẾT KẾ MỘT TRỢ LÍ AI",
        "subtitle": "Con người kết hợp với AI – Hình thành ý tưởng dự án",
        "imageNote": "Ảnh phác poster, storyboard hoặc giao diện gợi ý video.",
        "notes": "1 phút mở đầu: Nhắc lớp mang nhu cầu từ tiết 7 vào bài học.",
        "author": "Tổ Tin học THCS"
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "MỤC TIÊU BÀI HỌC",
        "title": "CHỌN Ý TƯỞNG KHẢ THI",
        "subtitle": "Ba mục tiêu cốt lõi khi hình thành ý tưởng dự án trợ lí AI",
        "objectives": [
          {
            "label": "Ý TƯỞNG",
            "title": "So sánh hai ý tưởng",
            "desc": "Đề xuất và so sánh hai ý tưởng trong chủ đề trợ lí AI."
          },
          {
            "label": "SƠ ĐỒ LUỒNG",
            "title": "Vẽ sơ đồ luồng dữ liệu",
            "desc": "Vẽ đường đi từ đầu vào, AI xử lí, đầu ra đến người kiểm."
          },
          {
            "label": "KẾ HOẠCH",
            "title": "Chuẩn bị 4 mốc tại nhà",
            "desc": "Chọn dạng sản phẩm khả thi và lập kế hoạch thực hiện."
          }
        ],
        "imageNote": "Sơ đồ bốn ô và bốn mốc thu nhỏ.",
        "notes": "3 phút: Bìa và mục tiêu. Nêu đầu ra là bản nháp và thẻ bàn giao."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHỞI ĐỘNG &bull; 4 PHÚT",
        "title": "AI SẼ DÙNG TRỢ LÍ NÀY?",
        "subtitle": "So sánh hai ý tưởng để xác định mục tiêu vừa sức và có thể kiểm tra",
        "exampleA": {
          "tag": "Ý TƯỞNG A: QUÁ RỘNG",
          "title": "Gợi ý cho mọi người",
          "desc": "Khó xác định người dùng cụ thể và cách kiểm tra độ phù hợp."
        },
        "exampleB": {
          "tag": "Ý TƯỞNG B: CỤ THỂ",
          "title": "Giúp bạn An tìm video vẽ",
          "desc": "Người dùng và nhu cầu rõ ràng từ danh sách có sẵn của lớp."
        },
        "imageNote": "Hai thẻ: một bên là công chúng rộng, một bên là bạn học có nhu cầu rõ.",
        "notes": "4 phút khởi động: Cho cặp chọn và nêu dấu hiệu hoàn thành vừa sức."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-8-khoi-dong-y-tuong",
          "type": "reflection",
          "prompt": "Trong hai ý tưởng trên, ý tưởng nào dễ làm và dễ kiểm tra hơn? Vì sao?",
          "points": 0,
          "placeholder": "Ghi ngắn gọn ý kiến lựa chọn của cặp đôi...",
          "explanation": "Ý tưởng B dễ làm vì người dùng và danh sách video cụ thể, vừa sức."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "image-text",
        "category": "KHÁM PHÁ 2.1 &bull; VIDEO",
        "title": "CƠ CHẾ MẠNG NƠ-RON",
        "subtitle": "Khám phá video How Neural Networks Work từ Code.org (~1 phút)",
        "paragraphs": [
          "Hệ thống kết hợp các điểm đánh giá của người dùng để gợi ý phim.",
          "Phản hồi của người xem làm thay đổi mức ảnh hưởng của từng người chấm."
        ],
        "imageUrl": "/assets/images/video-codeorg-neural-networks.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=JrXazCEACVo",
        "videoTime": "Đoạn 3 người chấm sao (~1 phút)",
        "videoTitle": "How Neural Networks Work - Code.org",
        "imageNote": "Ảnh chụp video Code.org: cơ chế chấm sao và điều chỉnh trọng số gợi ý.",
        "notes": "Video 1 phút: Chiếu đoạn ba người chấm sao (~1 phút)."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ 2.1 &bull; HỎI ĐÁP",
        "title": "CĂN CỨ VÀ ĐỔI GỢI Ý",
        "subtitle": "Tìm hiểu thông tin đầu vào và cách so sánh sự thay đổi gợi ý",
        "exampleA": {
          "tag": "TỪ VIDEO: CĂN CỨ GỢI Ý",
          "title": "Dùng điểm chấm sao",
          "desc": "Phản hồi người xem giúp điều chỉnh mức ảnh hưởng của người chấm."
        },
        "exampleB": {
          "tag": "ÁP DỤNG: SO SÁNH WETUBE",
          "title": "Đổi mức ưu tiên",
          "desc": "Giữ hai người chấm, đổi ưu tiên và so sánh 3 gợi ý đầu."
        },
        "imageNote": "Hai thẻ câu hỏi và đối chiếu đáp án về cơ chế gợi ý phim.",
        "notes": "3 phút: HS suy nghĩ 20-30s, trả lời miệng về cơ chế gợi ý."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-8-can-cu-goi-y",
          "type": "reflection",
          "prompt": "Hệ thống trong video dùng thông tin gì để tạo và điều chỉnh gợi ý phim?",
          "points": 0,
          "placeholder": "Ghi thông tin đầu vào và cách đổi gợi ý...",
          "explanation": "Hệ thống kết hợp điểm chấm sao và dùng phản hồi để đổi trọng số."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "cream",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.1 &bull; WETUBE",
        "title": "ĐỔI MỨC ĐƯỢC ƯU TIÊN",
        "subtitle": "Quan sát sự thay đổi của danh sách gợi ý khi thay đổi trọng số",
        "cards": [
          {
            "title": "1. Giữ hai người chấm",
            "desc": "Cố định hai nguồn đánh giá để theo dõi mức ảnh hưởng từng bên."
          },
          {
            "title": "2. Đổi mức ưu tiên",
            "desc": "Tăng mức ảnh hưởng của một người để xem thuật toán phản ứng."
          },
          {
            "title": "3. So ba gợi ý đầu",
            "desc": "Quan sát thứ tự hoặc nội dung 3 video đầu giữa hai lượt xem."
          }
        ],
        "imageNote": "Hai danh sách gợi ý trên WeTube trước và sau khi đổi ưu tiên.",
        "notes": "3 phút: Điều khiển WeTube hoặc danh sách P8.1 để thử trọng số."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-8-doi-uu-tien-wetube",
          "type": "reflection",
          "prompt": "Khi đổi ưu tiên trên WeTube (thể thao sang game), danh sách đổi ra sao?",
          "points": 0,
          "placeholder": "Ghi nhận xét về sự thay đổi của gợi ý...",
          "explanation": "Đổi mức ưu tiên (trọng số) làm thay đổi thứ tự và danh sách gợi ý."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "navy",
        "layout": "four-grid",
        "category": "KHÁM PHÁ 2.1 &bull; SO SÁNH",
        "title": "CHỌN MỘT Ý TƯỞNG DỰ ÁN",
        "subtitle": "Bốn tiêu chí cốt lõi để so sánh và lựa chọn ý tưởng theo phiếu P8.1",
        "items": [
          {
            "title": "1. Người dùng",
            "desc": "Ai là người trực tiếp sử dụng và nhận trợ giúp từ trợ lí AI?"
          },
          {
            "title": "2. Nhu cầu",
            "desc": "Vấn đề cụ thể cần giải quyết là gì? Có thật sự cần AI không?"
          },
          {
            "title": "3. Dữ liệu",
            "desc": "Dữ liệu đầu vào lấy từ đâu? Cách kiểm tra kết quả ra sao?"
          },
          {
            "title": "4. Khả thi",
            "desc": "Thiết bị, thời gian có sẵn và hình thức sản phẩm phù hợp điều kiện."
          }
        ],
        "imageNote": "Hai thẻ ý tưởng dự án P8.1 được so sánh theo 4 tiêu chí.",
        "notes": "3 phút: HS so sánh hai ý tưởng theo P8.1 và chọn 1 có lí do rõ."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.1 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-8-so-sanh-y-tuong-p81",
          "type": "choice",
          "prompt": "Khi so sánh hai ý tưởng theo phiếu P8.1, căn cứ quan trọng nhất để chọn là gì?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Ý tưởng nào có tên gọi phức tạp và nghe hiện đại nhất."
            },
            {
              "id": "B",
              "text": "Ý tưởng cần chi phí mua sắm thiết bị đắt tiền nhất."
            },
            {
              "id": "C",
              "text": "Người dùng rõ ràng, nhu cầu cụ thể, dữ liệu sẵn và khả thi."
            },
            {
              "id": "D",
              "text": "Ý tưởng hứa hẹn thay thế hoàn toàn vai trò của con người."
            }
          ],
          "explanation": "Giải pháp phù hợp cần làm rõ phần AI, người dùng cụ thể và khả thi."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "cream",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.2 &bull; MỤC TIÊU",
        "title": "VẤN ĐỀ VÀ NGƯỜI DÙNG",
        "subtitle": "Ba trường đầu tiên cần xác định trên phiếu ý tưởng dự án P8.2",
        "cards": [
          {
            "title": "1. Vấn đề cụ thể",
            "desc": "Nêu rõ khó khăn thực tế mà người dùng đang gặp phải hằng ngày."
          },
          {
            "title": "2. Người sử dụng",
            "desc": "Chỉ rõ đối tượng cụ thể (ví dụ: bạn học trong lớp, giáo viên)."
          },
          {
            "title": "3. Dấu hiệu xong",
            "desc": "Tiêu chí cụ thể để biết trợ lí đã hoàn thành đúng mục tiêu."
          }
        ],
        "imageNote": "Ba ô đầu tiên của phiếu ý tưởng dự án P8.2.",
        "notes": "4 phút: Kiểm tra mục tiêu các nhóm xem có vừa sức và kiểm được không."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "GHI NHẬN SUY NGẪM BÀI HỌC",
        "subtitle": "Chia sẻ suy ngẫm và bài học em tâm đắc nhất",
        "activity": {
          "id": "act-8-van-de-nguoi-dung",
          "type": "reflection",
          "prompt": "Trong phiếu P8.2, vì sao mục tiêu dự án cần có dấu hiệu hoàn thành rõ ràng?",
          "points": 0,
          "placeholder": "Ghi lý do cần dấu hiệu hoàn thành rõ ràng...",
          "explanation": "Dấu hiệu hoàn thành giúp nhóm và giáo viên đánh giá được mức độ đạt."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-14",
        "pageNumber": 14,
        "theme": "navy",
        "layout": "steps",
        "category": "KHÁM PHÁ 2.2 &bull; SƠ ĐỒ",
        "title": "VẼ ĐƯỜNG ĐI CỦA GỢI Ý",
        "subtitle": "Quy trình 4 khối từ dữ liệu đầu vào đến con người kiểm tra",
        "steps": [
          {
            "title": "Đầu vào",
            "desc": "Thu nhận chủ đề, từ khóa hoặc yêu cầu cụ thể từ người dùng."
          },
          {
            "title": "AI xử lí",
            "desc": "Thuật toán so khớp mẫu, tính toán trọng số và lọc dữ liệu."
          },
          {
            "title": "Đầu ra",
            "desc": "Xuất danh sách gợi ý video hoặc nội dung trả lời phù hợp."
          },
          {
            "title": "Người kiểm",
            "desc": "Con người đánh giá, lựa chọn và đưa ra quyết định sử dụng."
          }
        ],
        "imageNote": "Sơ đồ 4 khối: Đầu vào -> AI xử lí -> Đầu ra -> Người kiểm.",
        "notes": "6 phút: Vẽ sơ đồ luồng dữ liệu 4 khối, nhấn mạnh con người kiểm tra."
      },
      {
        "id": "slide-15",
        "pageNumber": 15,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-8-so-do-duong-di",
          "type": "choice",
          "prompt": "Trong sơ đồ luồng trợ lí AI, bước nào thể hiện quyền của con người?",
          "points": 10,
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "Bước 1: Thu nhận dữ liệu đầu vào từ người dùng."
            },
            {
              "id": "B",
              "text": "Bước 2: AI tự động tính toán trọng số dữ liệu."
            },
            {
              "id": "C",
              "text": "Bước 3: AI xuất danh sách kết quả đề xuất."
            },
            {
              "id": "D",
              "text": "Bước 4: Con người kiểm tra, đánh giá và quyết định sử dụng."
            }
          ],
          "explanation": "Con người luôn kiểm tra cuối cùng và đưa ra quyết định dựa trên mục đích."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-16",
        "pageNumber": 16,
        "theme": "cream",
        "layout": "three-cards",
        "category": "KHÁM PHÁ 2.2 &bull; HOÀN THIỆN",
        "title": "CHỐT CÁCH KIỂM VÀ SẢN PHẨM",
        "subtitle": "Ba câu hỏi hoàn thiện phiếu ý tưởng dự án P8.2",
        "cards": [
          {
            "title": "1. Xử lí khi gợi ý sai",
            "desc": "Người dùng phát hiện, bỏ qua hoặc phản hồi bổ sung dữ liệu."
          },
          {
            "title": "2. Dữ liệu không thu",
            "desc": "Cam kết không thu thập thông tin cá nhân và dữ liệu riêng tư."
          },
          {
            "title": "3. Dạng sản phẩm",
            "desc": "Ghi rõ là bản thiết kế ý tưởng minh họa hay mô hình chạy thật."
          }
        ],
        "imageNote": "Ba ô cuối phiếu P8.2: xử lí khi sai, dữ liệu không thu, dạng sản phẩm.",
        "notes": "10 phút: Nhóm điền 10 trường P8.2, phân biệt minh họa và chạy thật."
      },
      {
        "id": "slide-17",
        "pageNumber": 17,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ 2.2 &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-8-chot-cach-kiem",
          "type": "choice",
          "prompt": "Nếu trợ lí AI gợi ý video lệch hoặc thiếu, người dùng cần làm gì?",
          "points": 10,
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "Bỏ qua gợi ý sai, phản hồi hoặc bổ sung thêm dữ liệu chuẩn."
            },
            {
              "id": "B",
              "text": "Tin tưởng tuyệt đối vì AI không bao giờ đưa ra kết quả sai."
            },
            {
              "id": "C",
              "text": "Lập tức xóa bỏ toàn bộ hệ thống máy tính của phòng học."
            },
            {
              "id": "D",
              "text": "Chia sẻ video sai đó cho tất cả bạn bè trong trường học."
            }
          ],
          "explanation": "Người dùng kiểm tra, loại bỏ kết quả sai và bổ sung ví dụ dữ liệu chuẩn."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-18",
        "pageNumber": 18,
        "theme": "navy",
        "layout": "three-cards",
        "category": "GHI NHỚ &bull; KIẾN THỨC CỐT LÕI",
        "title": "KIẾN THỨC CẦN NHỚ",
        "subtitle": "Ba nguyên tắc nền tảng khi hình thành ý tưởng dự án trợ lí AI",
        "cards": [
          {
            "title": "Dữ liệu định hình gợi ý",
            "desc": "Gợi ý phụ thuộc vào dữ liệu và cách hệ thống kết hợp tín hiệu."
          },
          {
            "title": "Người dùng kiểm tra",
            "desc": "Con người luôn kiểm tra gợi ý theo mục đích và nhu cầu của mình."
          },
          {
            "title": "Bổ sung khi thiếu",
            "desc": "Nếu dữ liệu thiếu một chủ đề, cần chủ động bổ sung ví dụ phù hợp."
          }
        ],
        "imageNote": "Sơ đồ điểm lựa chọn và bước kiểm tra quyết định của người dùng.",
        "notes": "Ghi nhớ cốt lõi: Mời một nhóm đọc luồng trong 30 giây."
      },
      {
        "id": "slide-19",
        "pageNumber": 19,
        "theme": "cream",
        "layout": "three-cards",
        "category": "LUYỆN TẬP &bull; 6 PHÚT",
        "title": "MỖI EM GIẢI THÍCH DỰ ÁN",
        "subtitle": "Ba câu hỏi kiểm tra mức hiểu của từng cá nhân theo phiếu P8.3A",
        "cards": [
          {
            "title": "1. Ai sử dụng?",
            "desc": "Xác định rõ người dùng trực tiếp của dự án nhóm em là ai."
          },
          {
            "title": "2. AI nhận và trả gì?",
            "desc": "Mô tả dữ liệu AI nhận vào và kết quả cụ thể AI đưa ra."
          },
          {
            "title": "3. Con người kiểm ở đâu?",
            "desc": "Chỉ rõ bước con người kiểm tra hoặc đưa ra quyết định."
          }
        ],
        "imageNote": "Ba thẻ câu hỏi luyện tập cá nhân P8.3A để học sinh trả lời riêng.",
        "notes": "6 phút cá nhân: Cho từng em làm P8.3A trước khi mở hồ sơ nhóm."
      },
      {
        "id": "slide-20",
        "pageNumber": 20,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-8-luyen-tap-ca-nhan",
          "type": "choice",
          "prompt": "Khi mô tả dự án trợ lí AI của nhóm mình, điều nào sau đây là KHÔNG chính xác?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Nêu rõ ai là người dùng trực tiếp của dự án nhóm."
            },
            {
              "id": "B",
              "text": "Chỉ rõ dữ liệu AI nhận vào và kết quả AI đưa ra."
            },
            {
              "id": "C",
              "text": "Xem AI làm toàn bộ và con người không cần kiểm tra gì cả."
            },
            {
              "id": "D",
              "text": "Xác định rõ bước con người kiểm tra kết quả và quyết định."
            }
          ],
          "explanation": "AI chỉ hỗ trợ một phần; con người luôn là chủ thể kiểm tra và quyết định."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-21",
        "pageNumber": 21,
        "theme": "navy",
        "layout": "steps",
        "category": "VẬN DỤNG &bull; 4 MỐC DỰ ÁN",
        "title": "BỐN MỐC TẠI NHÀ",
        "subtitle": "Lộ trình hoàn thiện một dự án liên tục từ tiết 8 đến tiết 12",
        "steps": [
          {
            "title": "Kế hoạch",
            "desc": "Giai đoạn 1: Lập kế hoạch, phân công người phụ trách và thời hạn."
          },
          {
            "title": "Nguồn và thiết kế",
            "desc": "Giai đoạn 2: Thu thập dữ liệu mẫu, thiết kế khung sản phẩm."
          },
          {
            "title": "Sản phẩm Bản 1",
            "desc": "Giai đoạn 3: Hoàn thành bản nháp 1, thử nghiệm và nhận góp ý."
          },
          {
            "title": "Hoàn thiện và nộp",
            "desc": "Giai đoạn 4: Chỉnh sửa hoàn thiện, quay video 2-3 phút và nộp bài."
          }
        ],
        "imageNote": "Timeline bốn mốc dự án tại nhà: Kế hoạch -> Nguồn -> Bản 1 -> Nộp.",
        "notes": "2 phút: Giới thiệu 4 mốc dự án tại nhà và rubric đánh giá."
      },
      {
        "id": "slide-22",
        "pageNumber": 22,
        "theme": "navy",
        "layout": "activity",
        "category": "VẬN DỤNG &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-8-bon-moc-tai-nha",
          "type": "choice",
          "prompt": "Đầu ra cốt lõi của Giai đoạn 1 (Mốc 1) mà mỗi nhóm cần hoàn thành là gì?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Một video giới thiệu hoàn chỉnh dài 15 phút về AI."
            },
            {
              "id": "B",
              "text": "Bản kế hoạch chi tiết có phân công người phụ trách và thời hạn."
            },
            {
              "id": "C",
              "text": "Mô hình AI lập trình phức tạp chạy trực tiếp trên máy chủ."
            },
            {
              "id": "D",
              "text": "Mua thêm nhiều thiết bị điện tử mới cho phòng máy."
            }
          ],
          "explanation": "Sản phẩm của giai đoạn 1 là kế hoạch có người phụ trách và mốc rõ ràng."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-23",
        "pageNumber": 23,
        "theme": "cream",
        "layout": "four-grid",
        "category": "VẬN DỤNG &bull; BÀN GIAO",
        "title": "VIỆC ĐẦU TIÊN CỦA NHÓM",
        "subtitle": "Bốn nội dung cần thống nhất trên thẻ bàn giao P8.3B",
        "items": [
          {
            "title": "1. Dạng sản phẩm",
            "desc": "Chọn poster A4, storyboard sáu khung hoặc mô hình chạy thử."
          },
          {
            "title": "2. Thiết bị thực hiện",
            "desc": "Xác nhận điều kiện máy tính hoặc chọn phương án làm trên giấy."
          },
          {
            "title": "3. Việc đầu tiên",
            "desc": "Mỗi thành viên trong nhóm ghi rõ việc mình sẽ làm đầu tiên."
          },
          {
            "title": "4. Kênh nộp bài",
            "desc": "Ghi rõ kênh liên lạc và hạn nộp theo lịch giáo viên công bố."
          }
        ],
        "imageNote": "Thẻ bàn giao P8.3B: dạng sản phẩm, thiết bị, việc đầu tiên, kênh nộp.",
        "notes": "2 phút: Mỗi thành viên ghi việc đầu tiên trên thẻ bàn giao P8.3B."
      },
      {
        "id": "slide-24",
        "pageNumber": 24,
        "theme": "cream",
        "layout": "activity",
        "category": "VẬN DỤNG &bull; BÀI TẬP",
        "title": "BÌNH CHỌN VÀ THẢO LUẬN",
        "subtitle": "Bình chọn ý kiến phù hợp nhất với suy nghĩ của em",
        "activity": {
          "id": "act-8-poll-dang-san-pham",
          "type": "poll",
          "prompt": "Nhóm em dự kiến chọn hình thức sản phẩm nào cho dự án trợ lí AI?",
          "points": 0,
          "options": [
            "Poster A4 (thiết kế trên máy hoặc vẽ giấy)",
            "Storyboard 6 khung tranh minh họa câu chuyện sử dụng",
            "Mô hình số hoạt động thử nghiệm (có bằng chứng kết quả)",
            "Phương án bài tập giấy kết hợp thuyết minh ngắn"
          ],
          "explanation": "Mỗi nhóm chọn hình thức phù hợp nhất với điều kiện của mình."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên tổ chức cho học sinh chia sẻ và thảo luận."
      },
      {
        "id": "slide-25",
        "pageNumber": 25,
        "theme": "navy",
        "layout": "recap",
        "category": "HƯỚNG DẪN VỀ NHÀ &bull; 1 PHÚT",
        "title": "MỞ P9 VỚI BẢN NHÁP",
        "subtitle": "Ba việc cần làm để khởi động Giai đoạn 1 dự án tại nhà",
        "points": [
          "Mang theo P8.2 và các góp ý trên lớp để điều chỉnh ý tưởng dự án.",
          "Bắt đầu từ nhu cầu và người dùng cụ thể trước khi thiết kế chi tiết.",
          "Lập kế hoạch phân công rõ người phụ trách từng việc và thời hạn."
        ],
        "imageNote": "Mũi tên chuyển tiếp: Bản nháp P8.2 tiết 8 -> Kế hoạch Giai đoạn 1 P9.",
        "notes": "1 phút về nhà: Đại diện nhóm nêu việc mở đầu và nơi lưu bản nháp."
      }
    ],
    "fileName": "08-con-nguoi-ket-hop-voi-ai-hinh-thanh-y-tuong-du-an.json"
  },
  {
    "deckId": "09-du-an-tai-nha-giai-doan-1-lua-chon-van-de-va-lap-ke-hoach",
    "title": "BÀI 9: DỰ ÁN TẠI NHÀ - GIAI ĐOẠN 1: LỰA CHỌN VẤN ĐỀ VÀ LẬP KẾ HOẠCH",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "date": "Học kì II",
    "estimatedDuration": "45 phút (tự làm tại nhà)",
    "totalSlides": 8,
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "DỰ ÁN TẠI NHÀ &bull; TIẾT 9",
        "title": "CHỐT VẤN ĐỀ VÀ KẾ HOẠCH",
        "subtitle": "Giai đoạn 1/4: Lựa chọn vấn đề và lập kế hoạch (Stage 1)",
        "imageNote": "Timeline 4 mốc dự án tại nhà, làm nổi bật Mốc 1.",
        "notes": "Gửi slide cùng P9 và phản hồi tiết 8. HS làm khoảng 45 phút, có thể chia phiên.",
        "author": "Tổ Tin học THCS"
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "MỤC TIÊU GIAI ĐOẠN 1",
        "title": "MỐC 1 CẦN CÓ GÌ?",
        "subtitle": "Ba yêu cầu cốt lõi cần hoàn thành trong Giai đoạn 1",
        "objectives": [
          {
            "label": "NGƯỜI DÙNG",
            "title": "Nhu cầu và người dùng",
            "desc": "Xác định rõ người dùng và có một dẫn chứng nhu cầu thực tế."
          },
          {
            "label": "MỤC TIÊU",
            "title": "Mục tiêu có dấu hiệu xong",
            "desc": "Mục tiêu vừa sức, có dấu hiệu cụ thể để biết đã hoàn thành."
          },
          {
            "label": "PHÂN CÔNG",
            "title": "Kế hoạch phân công cụ thể",
            "desc": "Có người phụ trách, thời hạn và phương án khi thiếu thiết bị."
          }
        ],
        "imageNote": "Mẫu kế hoạch dự án với một dòng trống minh họa.",
        "notes": "Giao P8.2, góp ý và kế hoạch hiện có. Ghi rõ hạn và kênh nộp theo lịch thật."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHỞI ĐỘNG &bull; 5 PHÚT",
        "title": "MỞ ĐÚNG BẢN ĐANG LÀM",
        "subtitle": "Ba bước rà soát và xác định hồ sơ dùng chung của nhóm",
        "cards": [
          {
            "title": "1. Mở P8.2 và P9",
            "desc": "Mở lại bản nháp ý tưởng P8.2 và phiếu nghiệm thu P9."
          },
          {
            "title": "2. Tên và phiên bản",
            "desc": "Thống nhất tên dự án nội bộ và phiên bản hoặc ngày cập nhật."
          },
          {
            "title": "3. Ghi tệp còn thiếu",
            "desc": "Ghi rõ tài liệu còn thiếu để kịp thời liên hệ giáo viên hỗ trợ."
          }
        ],
        "imageNote": "Thẻ nhận diện tên dự án và nhãn ngày/phiên bản cập nhật.",
        "notes": "HS xác định 1 bản dùng chung. Thống nhất bản rà và vị trí bản giấy."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-9-mo-dung-ban",
          "type": "choice",
          "prompt": "Khi bắt đầu làm việc nhóm tại nhà, việc đầu tiên cần làm với hồ sơ là gì?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Tự tạo một dự án hoàn toàn mới mà không cần xem lại tiết 8."
            },
            {
              "id": "B",
              "text": "Thống nhất đúng một bản P8.2 chung, tên dự án và phiên bản."
            },
            {
              "id": "C",
              "text": "Chờ đến hạn nộp bài mới bắt đầu tìm kiếm tệp tài liệu."
            },
            {
              "id": "D",
              "text": "Mỗi bạn trong nhóm làm một tệp riêng biệt không trao đổi."
            }
          ],
          "explanation": "Thống nhất đúng 1 bản dùng chung và ghi phiên bản giúp tránh nhầm lẫn."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "two-examples",
        "category": "KHÁM PHÁ &bull; MÀN 1/2",
        "title": "CHỐT VẤN ĐỀ VÀ MỤC TIÊU",
        "subtitle": "Đối chiếu nhu cầu người dùng và tiêu chí hoàn thành theo P8.2/P9",
        "exampleA": {
          "tag": "TIÊU CHÍ 1: VẤN ĐỀ & NGƯỜI DÙNG",
          "title": "Nhu cầu và dẫn chứng",
          "desc": "Nêu rõ ai cần và có ít nhất một dẫn chứng cụ thể về nhu cầu."
        },
        "exampleB": {
          "tag": "TIÊU CHÍ 2: MỤC TIÊU DỰ ÁN",
          "title": "Dấu hiệu hoàn thành",
          "desc": "Mục tiêu nhỏ gọn, có tiêu chí rõ để biết khi nào trợ lí đã xong."
        },
        "imageNote": "Hai ô đối chiếu tiêu chí giữa phiếu ý tưởng P8.2 và phiếu nghiệm thu P9.",
        "notes": "HS chia nhau rà hồ sơ, chỉ rõ tệp, mục hoặc trang có bằng chứng."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-9-chot-van-de-muc-tieu",
          "type": "choice",
          "prompt": "Tiêu chí nào chứng minh mục tiêu dự án của nhóm được xác định đúng đắn?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Mục tiêu càng to lớn và chung chung thì càng dễ thực hiện."
            },
            {
              "id": "B",
              "text": "Mục tiêu không cần biết khi nào xong để làm mãi mãi."
            },
            {
              "id": "C",
              "text": "Mục tiêu vừa sức và có dấu hiệu cụ thể để biết đã hoàn thành."
            },
            {
              "id": "D",
              "text": "Mục tiêu chỉ cần một mình AI làm mà không cần người dùng."
            }
          ],
          "explanation": "Mục tiêu cần vừa sức và có tiêu chí rõ ràng để đánh giá mức độ đạt."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "four-grid",
        "category": "KHÁM PHÁ &bull; MÀN 2/2",
        "title": "GIAO VIỆC CHO TỪNG NGƯỜI",
        "subtitle": "Bốn thông tin then chốt trong bản kế hoạch thực hiện của nhóm",
        "items": [
          {
            "title": "1. Phần việc của AI",
            "desc": "Nêu rõ tính năng hoặc thuật toán AI hỗ trợ xử lí công việc gì."
          },
          {
            "title": "2. Người kiểm tra",
            "desc": "Chỉ rõ ai là người kiểm tra và đánh giá kết quả từ trợ lí AI."
          },
          {
            "title": "3. Phân công & Hạn",
            "desc": "Mỗi việc phải có một người phụ trách kèm thời hạn cụ thể."
          },
          {
            "title": "4. Phương án thiết bị",
            "desc": "Có giải pháp làm trên giấy hoặc dùng chung máy khi thiếu thiết bị."
          }
        ],
        "imageNote": "Bảng kế hoạch ngắn có người phụ trách, thời hạn và phương án thiết bị.",
        "notes": "Xác nhận kế hoạch chỉ ra được căn cứ, cách kiểm và phương án thiếu máy."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-9-giao-viec-ke-hoach",
          "type": "choice",
          "prompt": "Trong kế hoạch Giai đoạn 1, vì sao mỗi việc cần có Người phụ trách và Hạn?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Để dồn toàn bộ công việc cho nhóm trưởng tự làm hết."
            },
            {
              "id": "B",
              "text": "Để rõ trách nhiệm từng bạn và đảm bảo tiến độ hoàn thành."
            },
            {
              "id": "C",
              "text": "Để nộp cho giáo viên chấm điểm mà không cần thực hiện."
            },
            {
              "id": "D",
              "text": "Để tránh phải trao đổi và thảo luận cùng nhau trong nhóm."
            }
          ],
          "explanation": "Phân công rõ người và thời hạn giúp các thành viên chủ động hoàn thành."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "three-cards",
        "category": "LUYỆN TẬP &bull; MÀN 1/2",
        "title": "GHI TRẠNG THÁI PHIẾU P9",
        "subtitle": "Ba mức đánh giá tiến độ và yêu cầu minh chứng đi kèm",
        "cards": [
          {
            "title": "1. Đã xong",
            "desc": "Hạng mục đã hoàn thành và chỉ rõ được vị trí tài liệu minh chứng."
          },
          {
            "title": "2. Đang làm",
            "desc": "Hạng mục đã bắt đầu nhưng còn thiếu thông tin hoặc chưa kiểm tra."
          },
          {
            "title": "3. Chưa làm",
            "desc": "Hạng mục chưa thực hiện, cần phân công người và đặt hạn bổ sung."
          }
        ],
        "imageNote": "Một hàng mẫu trong phiếu nghiệm thu P9 với trạng thái và minh chứng.",
        "notes": "Kiểm tra minh chứng truy lại được. Mỗi thành viên thử tìm 1 minh chứng bạn ghi."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-9-ghi-trang-thai-p9",
          "type": "choice",
          "prompt": "Trong phiếu P9, khi tiêu chí đánh dấu Đã xong thì bắt buộc phải ghi gì?",
          "points": 10,
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "Chỉ rõ vị trí minh chứng cụ thể (tên tệp, trang, mục hoặc khung)."
            },
            {
              "id": "B",
              "text": "Để trống vì giáo viên sẽ tự đi tìm kiếm trong hồ sơ."
            },
            {
              "id": "C",
              "text": "Ghi chữ xong rồi mà không cần dẫn chứng tài liệu nào."
            },
            {
              "id": "D",
              "text": "Xóa toàn bộ dòng tiêu chí đó đi để phiếu ngắn gọn hơn."
            }
          ],
          "explanation": "Mỗi tiêu chí Đã xong bắt buộc phải dẫn được vị trí minh chứng cụ thể."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "three-cards",
        "category": "LUYỆN TẬP &bull; MÀN 2/2",
        "title": "VIỆC CÒN THIẾU CỦA NHÓM",
        "subtitle": "Ba bước xử lí các hạng mục chưa hoàn thiện và ghi nhật kí",
        "cards": [
          {
            "title": "1. Liệt kê việc thiếu",
            "desc": "Ghi rõ các nội dung Đang làm hoặc Chưa làm cần bổ sung gấp."
          },
          {
            "title": "2. Phân công bổ sung",
            "desc": "Chỉ định người phụ trách và ấn định thời hạn hoàn thành cụ thể."
          },
          {
            "title": "3. Nhật kí đóng góp",
            "desc": "Mỗi thành viên trong nhóm ghi một dòng đóng góp kèm minh chứng."
          }
        ],
        "imageNote": "Hai ô cho phần kế hoạch bổ sung việc còn thiếu và nhật kí đóng góp.",
        "notes": "Điền P9: trạng thái, vị trí minh chứng, việc thiếu, phụ trách, hạn và đóng góp."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "navy",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-9-xu-li-viec-thieu",
          "type": "choice",
          "prompt": "Nếu nhóm chọn video nhưng chưa ghi ai kiểm tra tiêu đề, nhóm cần làm gì?",
          "points": 10,
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "Tự đánh dấu Đã xong để kịp thời gian nộp bài cho thầy cô."
            },
            {
              "id": "B",
              "text": "Hủy bỏ toàn bộ dự án vì không thể kiểm tra kết quả."
            },
            {
              "id": "C",
              "text": "Mặc định để AI tự động kiểm tra mà không cần con người."
            },
            {
              "id": "D",
              "text": "Đánh dấu Đang làm và phân công người bổ sung bước kiểm tra."
            }
          ],
          "explanation": "Nếu thiếu bước con người kiểm tra, nhóm đánh dấu Đang làm và bổ sung ngay."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "cream",
        "layout": "recap",
        "category": "VẬN DỤNG &bull; BÀN GIAO",
        "title": "BÀN GIAO KẾ HOẠCH DỰ ÁN",
        "subtitle": "Checklist hoàn tất Giai đoạn 1 và sẵn sàng chuyển sang Giai đoạn 2",
        "points": [
          "Nộp phiếu nghiệm thu P9 kèm bản kế hoạch đang rà soát của nhóm.",
          "Kiểm tra tệp số mở được hoặc ghi rõ vị trí lưu giữ bản giấy.",
          "Lưu phản hồi của giáo viên (Đạt mốc hoặc Cần bổ sung) để sửa đổi.",
          "Chuẩn bị câu hỏi cần tìm nguồn và dữ liệu để chuyển sang Tiết 10."
        ],
        "imageNote": "Checklist gói nộp hồ sơ Giai đoạn 1 và thẻ chuyển tiếp sang Mốc 2.",
        "notes": "GV phản hồi sau khi nhận hồ sơ. HS lưu phản hồi cùng P9, mang sang tiết 10."
      }
    ],
    "fileName": "09-du-an-tai-nha-giai-doan-1-lua-chon-van-de-va-lap-ke-hoach.json"
  },
  {
    "deckId": "10-du-an-tai-nha-giai-doan-2-tim-kiem-thong-tin-va-len-y-tuong",
    "title": "BÀI 10: DỰ ÁN TẠI NHÀ - GIAI ĐOẠN 2: TÌM KIẾM THÔNG TIN VÀ THIẾT KẾ Ý TƯỞNG",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "date": "Học kì II",
    "estimatedDuration": "45 phút (tự làm tại nhà)",
    "totalSlides": 7,
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "DỰ ÁN TẠI NHÀ &bull; TIẾT 10",
        "title": "TÌM NGUỒN VÀ THIẾT KẾ",
        "subtitle": "Giai đoạn 2/4: Tìm kiếm thông tin và thiết kế ý tưởng (Stage 2)",
        "imageNote": "Timeline 4 mốc làm rõ mốc 2 và hình ảnh hai thẻ nguồn.",
        "notes": "Gửi P10 và góp ý mốc 1. HS làm khoảng 45 phút, có thể chia phiên.",
        "author": "Tổ Tin học THCS"
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "MỤC TIÊU GIAI ĐOẠN 2",
        "title": "BA MINH CHỨNG THIẾT KẾ",
        "subtitle": "Ba đầu ra cốt lõi cần hoàn thành trong phiếu nghiệm thu P10",
        "objectives": [
          {
            "label": "NGUỒN TIN",
            "title": "Hai nguồn tìm lại được",
            "desc": "Hai nguồn thông tin đã đọc, có tên tác giả, liên kết hoặc trang."
          },
          {
            "label": "SƠ ĐỒ LUỒNG",
            "title": "Sơ đồ có người kiểm",
            "desc": "Sơ đồ luồng dữ liệu chỉ rõ bước con người kiểm tra kết quả."
          },
          {
            "label": "BẢN PHÁC",
            "title": "Bản phác xử lí sai",
            "desc": "Bản phác poster hoặc storyboard thể hiện cách xử lí khi gợi ý sai."
          }
        ],
        "imageNote": "Thẻ hai nguồn, sơ đồ bốn ô và hình storyboard thu nhỏ.",
        "notes": "Nêu hồ sơ cần có 3 thành phần này kèm P10. Nhắc nguồn thực sự đã đọc."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHỞI ĐỘNG &bull; 5 PHÚT",
        "title": "MỞ HỒ SƠ THIẾT KẾ",
        "subtitle": "Ba tài liệu cần tập hợp trước khi bắt tay thiết kế ý tưởng",
        "cards": [
          {
            "title": "1. P9 và góp ý",
            "desc": "Mở lại kế hoạch P9 và các nhận xét phản hồi từ Giai đoạn 1."
          },
          {
            "title": "2. Hai nguồn tài liệu",
            "desc": "Chuẩn bị 2 nguồn thông tin tham khảo đã đọc và có liên kết."
          },
          {
            "title": "3. Bản phác đang làm",
            "desc": "Mở bản phác poster, storyboard hoặc tệp thiết kế dùng chung."
          }
        ],
        "imageNote": "Bốn thẻ hồ sơ: P9, góp ý, hai nguồn, bản phác và ô ghi ngày.",
        "notes": "HS mở đúng kế hoạch đã chốt và 1 phiên bản thiết kế chung."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-10-mo-ho-so-thiet-ke",
          "type": "choice",
          "prompt": "Khi mở hồ sơ thiết kế ở Giai đoạn 2, nhóm cần chuẩn bị những tài liệu nào?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Chỉ cần một bức tranh vẽ tùy ý mà không cần kế hoạch."
            },
            {
              "id": "B",
              "text": "Kế hoạch P9 kèm góp ý, hai nguồn tham khảo và bản phác thảo."
            },
            {
              "id": "C",
              "text": "Một bộ phim hoạt hình tải từ trên mạng Internet về máy."
            },
            {
              "id": "D",
              "text": "Chỉ cần nộp lại nguyên văn phiếu P8.2 của tiết trước."
            }
          ],
          "explanation": "Hồ sơ thiết kế cần kế hoạch P9 đã duyệt, 2 nguồn tham khảo và bản phác."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "two-examples",
        "category": "KHÁM PHÁ &bull; MÀN 1/2",
        "title": "GHI HAI NGUỒN ĐÃ ĐỌC",
        "subtitle": "Yêu cầu thông tin và chi tiết ứng dụng từ mỗi nguồn tham khảo",
        "exampleA": {
          "tag": "YÊU CẦU 1: THÔNG TIN NGUỒN",
          "title": "Tên, tác giả và liên kết",
          "desc": "Ghi rõ tên tài liệu, tác giả hoặc đơn vị và trang/link tìm lại."
        },
        "exampleB": {
          "tag": "YÊU CẦU 2: CHI TIẾT SỬ DỤNG",
          "title": "Chi tiết gắn với dự án",
          "desc": "Nêu một nội dung, ví dụ hoặc ý tưởng cụ thể nhóm đã học và áp dụng."
        },
        "imageNote": "Hai thẻ nguồn mẫu hiển thị thông tin xuất xứ và chi tiết sử dụng.",
        "notes": "Kiểm tra khả năng tìm lại và chi tiết thực sự sử dụng."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-10-ghi-hai-nguon",
          "type": "choice",
          "prompt": "Một nguồn tài liệu được coi là hợp lệ trong phiếu P10 khi đáp ứng điều gì?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Chỉ cần một liên kết bất kì trên mạng dù chưa từng đọc qua."
            },
            {
              "id": "B",
              "text": "Tài liệu do AI tự tạo ra hoàn toàn và không có tác giả."
            },
            {
              "id": "C",
              "text": "Có tên tác giả/đơn vị, tìm lại được và có chi tiết áp dụng cụ thể."
            },
            {
              "id": "D",
              "text": "Chỉ cần lời kể miệng của bạn bè mà không có tài liệu đối chiếu."
            }
          ],
          "explanation": "Nguồn hợp lệ phải có thông tin xuất xứ rõ ràng và gắn với chi tiết dự án."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "two-examples",
        "category": "KHÁM PHÁ &bull; MÀN 2/2",
        "title": "SO SƠ ĐỒ VỚI BẢN PHÁC",
        "subtitle": "Đối chiếu quy trình 4 khối và tình huống xử lí khi gợi ý sai",
        "exampleA": {
          "tag": "SƠ ĐỒ: QUY TRÌNH 4 BƯỚC",
          "title": "Từ đầu vào đến người kiểm",
          "desc": "Đầu vào -> AI xử lí -> Đầu ra -> Con người kiểm tra kết quả."
        },
        "exampleB": {
          "tag": "BẢN PHÁC: XỬ LÍ TÌNH HUỐNG",
          "title": "Khi gợi ý sai hoặc thiếu",
          "desc": "Khung thể hiện người dùng phát hiện, phản hồi và bổ sung dữ liệu."
        },
        "imageNote": "Sơ đồ 4 khối và khung tranh storyboard thể hiện cách xử lí khi sai.",
        "notes": "HS đối chiếu sơ đồ với P9. Chỉ được ô cho thấy người dùng xử lí khi gợi ý lệch."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-10-so-so-do-ban-phac",
          "type": "choice",
          "prompt": "Trong bản phác thảo thiết kế, yếu tố nào bắt buộc phải có để đảm bảo an toàn?",
          "points": 10,
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "Khung hoặc vị trí thể hiện cách người dùng xử lí khi gợi ý sai."
            },
            {
              "id": "B",
              "text": "Hình vẽ trang trí thật nhiều màu sắc nhưng không có nội dung."
            },
            {
              "id": "C",
              "text": "Dòng chữ khẳng định trợ lí AI không bao giờ đưa ra kết quả sai."
            },
            {
              "id": "D",
              "text": "Lời hứa hẹn tự động chia sẻ thông tin cho tất cả mọi người."
            }
          ],
          "explanation": "Bản phác bắt buộc phải chỉ ra cách người dùng xử lí khi gợi ý sai/thiếu."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "three-cards",
        "category": "LUYỆN TẬP &bull; 15 PHÚT",
        "title": "ĐIỀN PHIẾU NGHIỆM THU P10",
        "subtitle": "Ba nội dung trọng tâm cần hoàn thiện trong phiếu nghiệm thu P10",
        "cards": [
          {
            "title": "1. Trạng thái & minh chứng",
            "desc": "Ghi Đã xong / Đang làm và chỉ rõ nguồn, trang hoặc khung tranh."
          },
          {
            "title": "2. Phân công bổ sung",
            "desc": "Xác định việc còn thiếu, người phụ trách và thời hạn hoàn thành."
          },
          {
            "title": "3. Đóng góp cá nhân",
            "desc": "Mỗi thành viên tự ghi một dòng nhật kí đóng góp kèm minh chứng."
          }
        ],
        "imageNote": "Mẫu phiếu P10 có cột trạng thái, vị trí minh chứng và nhật kí.",
        "notes": "Cho đọc chéo: mỗi em thử mở 1 nguồn hoặc chỉ 1 khung bạn ghi."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-10-dien-phieu-p10",
          "type": "choice",
          "prompt": "Khi đọc chéo phiếu P10 giữa các thành viên, nhóm cần thực hiện thao tác gì?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Chỉ xem chữ ký của nhau mà không cần kiểm tra nội dung."
            },
            {
              "id": "B",
              "text": "Tự ý xóa các nội dung bạn đã viết mà không trao đổi."
            },
            {
              "id": "C",
              "text": "Mỗi bạn thử mở một nguồn hoặc chỉ một khung minh chứng bạn đã ghi."
            },
            {
              "id": "D",
              "text": "Chấm điểm và nộp bài ngay mà không cần đối chiếu minh chứng."
            }
          ],
          "explanation": "Đọc chéo nhằm thử tìm lại nguồn hoặc khung để đảm bảo minh chứng có thật."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "recap",
        "category": "VẬN DỤNG &bull; BÀN GIAO",
        "title": "BÀN GIAO BẢN THIẾT KẾ",
        "subtitle": "Checklist bốn thành phần hồ sơ Giai đoạn 2 và chuẩn bị tạo bản 1",
        "points": [
          "Nộp phiếu nghiệm thu P10 kèm danh sách 2 nguồn tham khảo đã đọc.",
          "Nộp sơ đồ luồng dữ liệu 4 khối có bước người dùng kiểm tra.",
          "Nộp bản phác thảo poster hoặc storyboard có ô xử lí khi sai/thiếu.",
          "Lưu phản hồi của giáo viên và chọn việc đầu tiên để tạo bản 1 ở Tiết 11."
        ],
        "imageNote": "Checklist 4 thành phần hồ sơ thiết kế và thẻ chuyển sang Mốc 3 (Tiết 11).",
        "notes": "GV xác nhận Đạt mốc hoặc Cần bổ sung. HS lưu góp ý để tạo bản 1."
      }
    ],
    "fileName": "10-du-an-tai-nha-giai-doan-2-tim-kiem-thong-tin-va-len-y-tuong.json"
  },
  {
    "deckId": "11-du-an-tai-nha-giai-doan-3-tao-san-pham",
    "title": "BÀI 11: DỰ ÁN TẠI NHÀ - GIAI ĐOẠN 3: TẠO SẢN PHẨM",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "date": "Học kì II",
    "estimatedDuration": "45 phút (tự làm tại nhà)",
    "totalSlides": 7,
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "DỰ ÁN TẠI NHÀ &bull; TIẾT 11",
        "title": "ĐỌC THỬ SẢN PHẨM BẢN 1",
        "subtitle": "Giai đoạn 3/4: Tạo sản phẩm dự án trợ lí AI (Stage 3)",
        "imageNote": "Timeline 4 mốc làm rõ mốc 3 và nhãn Bản 1.",
        "notes": "Gửi P11 cùng góp ý mốc 2. Các nhóm mở bản 1 để đối chiếu trong 45 phút tự làm.",
        "author": "Tổ Tin học THCS"
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "MỤC TIÊU GIAI ĐOẠN 3",
        "title": "BẢN 1 CẦN THỂ HIỆN GÌ?",
        "subtitle": "Ba yêu cầu cốt lõi cần hoàn thành trong sản phẩm Bản 1",
        "objectives": [
          {
            "label": "CHỨC NĂNG",
            "title": "Vấn đề và chức năng AI",
            "desc": "Nêu rõ người dùng, vấn đề cần giải quyết và chức năng AI hỗ trợ."
          },
          {
            "label": "VÍ DỤ DÙNG",
            "title": "Ví dụ có người kiểm",
            "desc": "Một ví dụ sử dụng thực tế có bước con người kiểm tra kết quả."
          },
          {
            "label": "GÓP Ý SỬA",
            "title": "Nguồn và góp ý cụ thể",
            "desc": "Ghi nguồn tìm lại được, nhật kí đóng góp và ít nhất một góp ý sửa."
          }
        ],
        "imageNote": "Mẫu một khung storyboard và một thẻ góp ý cụ thể.",
        "notes": "Hướng dẫn nhóm ghi rõ bản minh họa hay chạy thử có bằng chứng khi đọc ví dụ."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHỞI ĐỘNG &bull; 5 PHÚT",
        "title": "MỞ ĐÚNG SẢN PHẨM BẢN 1",
        "subtitle": "Ba bước rà soát và xác định phiên bản sản phẩm đang hoàn thiện",
        "cards": [
          {
            "title": "1. Mở bộ hồ sơ",
            "desc": "Mở lại phiếu P10, sản phẩm Bản 1, danh sách nguồn và nhật kí."
          },
          {
            "title": "2. Xác định phiên bản",
            "desc": "Thống nhất ngày cập nhật và số phiên bản bản 1 đang rà soát."
          },
          {
            "title": "3. Gắn nhãn sản phẩm",
            "desc": "Xác định rõ ràng đây là bản minh họa hay mô hình chạy thử."
          }
        ],
        "imageNote": "Hai nhãn loại sản phẩm (Minh họa / Chạy thử) cạnh ví dụ bản 1.",
        "notes": "Yêu cầu xác nhận mở/đọc được. Nếu thiếu, ghi rõ việc và người phụ trách."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-11-mo-dung-ban-1",
          "type": "choice",
          "prompt": "Khi mở sản phẩm Bản 1 ở Giai đoạn 3, nhóm bắt buộc phải gắn nhãn gì?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Gắn nhãn sản phẩm đã hoàn hảo tuyệt đối 100% không cần sửa."
            },
            {
              "id": "B",
              "text": "Gắn nhãn rõ ràng là bản ý tưởng minh họa hay mô hình chạy thử."
            },
            {
              "id": "C",
              "text": "Gắn nhãn sản phẩm của một công ty công nghệ nước ngoài."
            },
            {
              "id": "D",
              "text": "Không cần gắn nhãn gì vì giáo viên sẽ tự đoán khi chấm."
            }
          ],
          "explanation": "Cần xác định rõ bản minh họa hay chạy thử để đối chiếu đúng tiêu chí."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "two-examples",
        "category": "KHÁM PHÁ &bull; MÀN 1/2",
        "title": "THEO DÕI MỘT LƯỢT DÙNG",
        "subtitle": "Đối chiếu một kịch bản sử dụng thực tế với sơ đồ quy trình P10",
        "exampleA": {
          "tag": "BƯỚC 1: NGƯỜI DÙNG & ĐẦU VÀO",
          "title": "Ai dùng và gửi gì?",
          "desc": "Người dùng nhập từ khóa, chủ đề hoặc hình ảnh yêu cầu trợ giúp."
        },
        "exampleB": {
          "tag": "BƯỚC 2: AI GỢI Ý & NGƯỜI KIỂM",
          "title": "Gợi ý và kiểm tra",
          "desc": "AI xuất kết quả và người dùng đối chiếu tiêu đề để chọn lọc."
        },
        "imageNote": "Khung tranh storyboard thể hiện lượt dùng từ đầu vào đến người kiểm.",
        "notes": "Đối chiếu bản 1 với sơ đồ P10. Một bạn đóng vai người dùng mới để rà soát."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-11-theo-doi-luot-dung",
          "type": "choice",
          "prompt": "Trong ví dụ sử dụng trợ lí AI ở bản 1, khâu nào là quan trọng nhất?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Khâu AI tự động xuất kết quả siêu nhanh trong một giây."
            },
            {
              "id": "B",
              "text": "Khâu giao diện hiển thị nhiều biểu tượng hoạt hình bắt mắt."
            },
            {
              "id": "C",
              "text": "Khâu người dùng kiểm tra lại kết quả gợi ý theo mục đích."
            },
            {
              "id": "D",
              "text": "Khâu người dùng chấp nhận ngay kết quả mà không cần nhìn lại."
            }
          ],
          "explanation": "Người dùng kiểm tra đối chiếu mục đích là khâu quyết định sự an toàn."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHÁM PHÁ &bull; MÀN 2/2",
        "title": "GÓP Ý ĐÚNG CHỖ CẦN SỬA",
        "subtitle": "Ba nguyên tắc đóng góp ý kiến mang tính xây dựng cho bản 1",
        "cards": [
          {
            "title": "1. Nêu vị trí cụ thể",
            "desc": "Chỉ rõ số khung storyboard, trang poster hoặc mục cần chỉnh."
          },
          {
            "title": "2. Nêu rõ giới hạn",
            "desc": "Chỉ ra giới hạn thuật toán hoặc tình huống AI có thể gợi ý sai."
          },
          {
            "title": "3. Đối chiếu nguồn",
            "desc": "Kiểm tra xem nội dung đã gắn đúng trích dẫn từ hai nguồn P10 chưa."
          }
        ],
        "imageNote": "Mẫu thẻ góp ý: Khung ... -> Thiếu ... -> Cần sửa ...",
        "notes": "Nhóm đọc chéo. 1 bạn đóng vai người mới: ví dụ khung 4 chưa có bước đối chiếu."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-11-gop-y-dung-cho",
          "type": "choice",
          "prompt": "Góp ý nào sau đây cho bản 1 được xem là cụ thể và có giá trị nhất?",
          "points": 10,
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "Khung 4 chưa thể hiện bước người dùng kiểm tra tiêu đề video."
            },
            {
              "id": "B",
              "text": "Bài làm nhìn chung chưa đẹp lắm, nhóm cần vẽ lại từ đầu."
            },
            {
              "id": "C",
              "text": "Mọi thứ rất ổn rồi, nhóm không cần thay đổi bất kì điều gì."
            },
            {
              "id": "D",
              "text": "Nên đổi sang làm một ứng dụng AI khác hoàn toàn mới mẻ hơn."
            }
          ],
          "explanation": "Góp ý chuẩn phải chỉ đúng vị trí (Khung 4) và chỉ rõ nội dung cần bổ sung."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "three-cards",
        "category": "LUYỆN TẬP &bull; 15 PHÚT",
        "title": "BIẾN GÓP Ý THÀNH VIỆC SỬA",
        "subtitle": "Ba bước chuyển đổi phản hồi thành kế hoạch hoàn thiện sản phẩm",
        "cards": [
          {
            "title": "1. Ghi nhận vào P11",
            "desc": "Ghi trạng thái từng tiêu chí kèm vị trí tài liệu minh chứng cụ thể."
          },
          {
            "title": "2. Lập danh mục việc sửa",
            "desc": "Biến mỗi góp ý thành hành động sửa cụ thể có người và thời hạn."
          },
          {
            "title": "3. Nhật kí đóng góp",
            "desc": "Mỗi thành viên tự ghi phần việc mình đã làm kèm vị trí kiểm tra."
          }
        ],
        "imageNote": "Bảng phiếu P11 và bảng mẫu: Vị trí -> Góp ý -> Việc sửa cụ thể.",
        "notes": "Đọc chéo nguồn, minh chứng, góp ý. Kiểm tra mỗi việc sửa nêu hành động cụ thể."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-11-bien-gop-y-thanh-viec",
          "type": "choice",
          "prompt": "Khi nhận góp ý Khung 4 thiếu bước người kiểm tra, nhóm ghi vào P11 thế nào?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Bỏ qua góp ý đó vì sản phẩm Bản 1 đã nộp xong rồi."
            },
            {
              "id": "B",
              "text": "Xóa luôn Khung 4 đi để không còn bị ai nhận xét nữa."
            },
            {
              "id": "C",
              "text": "Ghi việc bổ sung ô kiểm tra ở Khung 4, phân công người và đặt hạn."
            },
            {
              "id": "D",
              "text": "Chờ giáo viên vào tận nơi vẽ hộ phần còn thiếu."
            }
          ],
          "explanation": "Nhóm chuyển góp ý thành việc sửa cụ thể, phân công người và ấn định hạn."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "recap",
        "category": "VẬN DỤNG &bull; BÀN GIAO",
        "title": "BÀN GIAO SẢN PHẨM BẢN 1",
        "subtitle": "Checklist hoàn tất Giai đoạn 3 và chuẩn bị hoàn thiện bản cuối Tiết 12",
        "points": [
          "Nộp phiếu nghiệm thu P11 kèm sản phẩm Bản 1 mở/đọc được.",
          "Nộp kèm danh sách nguồn trích dẫn và nhật kí đóng góp từng bạn.",
          "Lưu giữ bản 1 và danh mục việc cần sửa để đối chiếu trước - sau.",
          "Sẵn sàng bước vào Tiết 12 để hoàn thiện sản phẩm cuối và quay video."
        ],
        "imageNote": "Checklist gói nộp Giai đoạn 3 kèm mũi tên: Bản 1 -> Bản cuối (Tiết 12).",
        "notes": "GV ghi Đạt mốc hoặc Cần bổ sung. HS lưu bản 1 cùng góp ý để đối chiếu ở tiết 12."
      }
    ],
    "fileName": "11-du-an-tai-nha-giai-doan-3-tao-san-pham.json"
  },
  {
    "deckId": "12-du-an-tai-nha-giai-doan-4-hoan-thien-va-nop-san-pham",
    "title": "BÀI 12: DỰ ÁN TẠI NHÀ - GIAI ĐOẠN 4: HOÀN THIỆN VÀ NỘP SẢN PHẨM",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "date": "Học kì II",
    "estimatedDuration": "45 phút (tự làm tại nhà)",
    "totalSlides": 8,
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "DỰ ÁN TẠI NHÀ &bull; TIẾT 12",
        "title": "HOÀN THIỆN VÀ NỘP SẢN PHẨM",
        "subtitle": "Giai đoạn 4/4: Hoàn thiện và nộp sản phẩm dự án (Stage 4)",
        "imageNote": "Timeline 4 mốc làm rõ mốc 4 và hai bản sản phẩm đặt cạnh nhau.",
        "notes": "Gửi P12 và rubric cùng góp ý mốc 3. HS tự làm khoảng 45 phút, có thể chia phiên.",
        "author": "Tổ Tin học THCS"
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "MỤC TIÊU GIAI ĐOẠN 4",
        "title": "CHỨNG MINH BẢN CUỐI ĐÃ SỬA",
        "subtitle": "Ba yêu cầu cốt lõi cần hoàn thành trước khi nộp hồ sơ cuối",
        "objectives": [
          {
            "label": "ĐỐI CHIẾU",
            "title": "Đối chiếu hai phiên bản",
            "desc": "So sánh Bản 1 và Bản cuối, chỉ rõ ít nhất một thay đổi có căn cứ."
          },
          {
            "label": "AN TOÀN",
            "title": "Rà soát nguồn và an toàn",
            "desc": "Kiểm tra nguồn trích dẫn, bảo vệ dữ liệu cá nhân và quyền truy cập."
          },
          {
            "label": "TỰ CHẤM",
            "title": "Tự chấm và nộp hồ sơ",
            "desc": "Tự chấm 5 tiêu chí theo rubric và nộp đủ thành phần hồ sơ cuối."
          }
        ],
        "imageNote": "Bảng đối chiếu trước - sau và phiếu tự chấm điểm thang 10.",
        "notes": "Nêu minh chứng gồm Bản cuối, dấu vết sửa, nguồn, nhật kí và P12."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHỞI ĐỘNG &bull; 5 PHÚT",
        "title": "MỞ HAI PHIÊN BẢN ĐỐI CHIẾU",
        "subtitle": "Ba tài liệu cần chuẩn bị sẵn sàng để so sánh sự tiến bộ",
        "cards": [
          {
            "title": "1. Bản 1 và góp ý",
            "desc": "Mở lại sản phẩm Bản 1 và danh sách góp ý đã nhận ở phiếu P11."
          },
          {
            "title": "2. Bản cuối đang rà",
            "desc": "Mở bản sản phẩm cuối cùng kèm ngày hoặc số phiên bản mới nhất."
          },
          {
            "title": "3. Ghi mục còn thiếu",
            "desc": "Kiểm tra nhanh danh mục hồ sơ và ghi rõ tài liệu nào chưa có."
          }
        ],
        "imageNote": "Hai khung phiên bản: Bản 1 và Bản cuối cùng danh mục hồ sơ mẫu.",
        "notes": "Nhóm chọn đúng Bản cuối và tìm Bản 1 đã bàn giao. Xác định góp ý cần đối chiếu."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "navy",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-12-mo-hai-phien-ban",
          "type": "choice",
          "prompt": "Vì sao nhóm cần mở cả Bản 1 và Bản cuối khi bắt đầu Giai đoạn 4?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Để nộp cả hai bản riêng biệt cho giáo viên chấm hai lần."
            },
            {
              "id": "B",
              "text": "Để chứng minh nhóm đã làm hai dự án hoàn toàn khác nhau."
            },
            {
              "id": "C",
              "text": "Để đối chiếu và chứng minh sản phẩm đã được sửa đổi theo góp ý."
            },
            {
              "id": "D",
              "text": "Để sao chép nguyên văn Bản 1 sang Bản cuối mà không sửa gì."
            }
          ],
          "explanation": "Đối chiếu trước - sau giúp nhóm chứng minh sự tiến bộ và tiếp thu góp ý."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "two-examples",
        "category": "KHÁM PHÁ &bull; MÀN 1/2",
        "title": "CHỈ RÕ CHỖ ĐÃ CHỈNH SỬA",
        "subtitle": "Yêu cầu minh chứng chỉnh sửa và khâu con người kiểm soát AI",
        "exampleA": {
          "tag": "MINH CHỨNG: TRƯỚC VÀ SAU",
          "title": "Thay đổi có căn cứ",
          "desc": "Nêu rõ góp ý nhận được, vị trí trước/sau và lí do thực hiện sửa đổi."
        },
        "exampleB": {
          "tag": "KIỂM SOÁT: XỬ LÍ KHI SAI",
          "title": "Khi AI gợi ý sai hoặc thiếu",
          "desc": "Chỉ rõ vị trí thể hiện người dùng kiểm tra tiêu đề và bổ sung dữ liệu."
        },
        "imageNote": "Cặp khung đối chiếu Trước/Sau minh họa ô người kiểm tra tiêu đề.",
        "notes": "Cho thành viên mở bản nộp với quyền xem dự kiến. Yêu cầu chỉ ít nhất 1 thay đổi."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "cream",
        "layout": "activity",
        "category": "KHÁM PHÁ &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-12-chi-cho-da-sua",
          "type": "choice",
          "prompt": "Khi giải thích một thay đổi ở Bản cuối, nhóm bắt buộc phải nêu rõ điều gì?",
          "points": 10,
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Tên phần mềm đồ họa đắt tiền nhất đã dùng để vẽ lại."
            },
            {
              "id": "B",
              "text": "Góp ý nhận được, vị trí thay đổi trước/sau và lí do chỉnh sửa."
            },
            {
              "id": "C",
              "text": "Lời khẳng định rằng phiên bản cũ hoàn toàn vô dụng."
            },
            {
              "id": "D",
              "text": "Số giờ cả nhóm đã thức đêm để hoàn thành sản phẩm."
            }
          ],
          "explanation": "Chỉnh sửa có giá trị phải dẫn góp ý gốc, vị trí trước/sau và lí do."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHÁM PHÁ &bull; MÀN 2/2",
        "title": "RÀ SOÁT TỆP TRƯỚC KHI GỬI",
        "subtitle": "Ba tiêu chí an toàn và truy cập cần kiểm tra kĩ lưỡng",
        "cards": [
          {
            "title": "1. Mở thử liên kết",
            "desc": "Dùng chế độ ẩn danh hoặc nhờ bạn máy khác mở thử tệp dự án."
          },
          {
            "title": "2. Dữ liệu cá nhân",
            "desc": "Rà soát và xóa bỏ các thông tin riêng tư không cần thiết."
          },
          {
            "title": "3. Quyền xem công khai",
            "desc": "Thiết lập quyền xem phù hợp để giáo viên và bạn bè đọc được."
          }
        ],
        "imageNote": "Ba ô kiểm tra: mở thử tệp, lọc dữ liệu riêng tư và quyền xem.",
        "notes": "Kiểm dữ liệu và nguồn ở cả nội dung lẫn tên tệp khi phù hợp."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "navy",
        "layout": "activity",
        "category": "KHÁM PHÁ &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-12-ra-soat-tep",
          "type": "choice",
          "prompt": "Trước khi nộp sản phẩm số, thao tác kiểm tra quyền truy cập nào là đúng đắn?",
          "points": 10,
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "Mở thử tệp ở chế độ ẩn danh để chắc chắn người khác xem được."
            },
            {
              "id": "B",
              "text": "Khóa quyền riêng tư chỉ một mình tài khoản của mình mới mở được."
            },
            {
              "id": "C",
              "text": "Cấp quyền chỉnh sửa và xóa tệp cho tất cả người lạ trên mạng."
            },
            {
              "id": "D",
              "text": "Đổi tên tệp thành mật mã ngẫu nhiên rồi nộp ngay lập tức."
            }
          ],
          "explanation": "Mở thử ở cửa sổ ẩn danh giúp kiểm tra quyền xem của tệp dự án."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "cream",
        "layout": "three-cards",
        "category": "LUYỆN TẬP &bull; MÀN 1/2",
        "title": "TỰ CHẤM PHẦN Ý TƯỞNG",
        "subtitle": "Ba tiêu chí đầu tiên trong Rubric đánh giá dự án (thang 0-2 điểm)",
        "cards": [
          {
            "title": "1. Vấn đề & khả thi",
            "desc": "Vấn đề cụ thể, người dùng rõ, mục tiêu vừa sức và khả thi (0-2đ)."
          },
          {
            "title": "2. Chức năng AI",
            "desc": "Đầu vào, đầu ra rõ; phân biệt đúng minh họa hoặc chạy thật (0-2đ)."
          },
          {
            "title": "3. Người kiểm & an toàn",
            "desc": "Có bước đối chiếu, xử lí khi sai và bảo vệ dữ liệu riêng (0-2đ)."
          }
        ],
        "imageNote": "Bảng Rubric 3 tiêu chí đầu (Vấn đề, Chức năng AI, Người kiểm).",
        "notes": "Xem điểm gắn minh chứng đúng mục. Dùng mô tả 0, 1, 2 trong phụ lục P12."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "cream",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-12-tu-cham-y-tuong",
          "type": "choice",
          "prompt": "Khi tự chấm Tiêu chí 3 (Con người và an toàn), nhóm đạt mức 2 điểm khi nào?",
          "points": 10,
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "Khi nhóm khẳng định hệ thống AI không bao giờ xảy ra lỗi."
            },
            {
              "id": "B",
              "text": "Khi để AI tự động gửi dữ liệu người dùng lên mạng xã hội."
            },
            {
              "id": "C",
              "text": "Khi nhóm không cần bất kì bước kiểm tra nào của con người."
            },
            {
              "id": "D",
              "text": "Có căn cứ đối chiếu, có cách xử lí khi sai và bảo vệ dữ liệu."
            }
          ],
          "explanation": "Mức 2đ cần rõ căn cứ kiểm tra, cách xử lí khi sai và bảo vệ dữ liệu."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "navy",
        "layout": "two-examples",
        "category": "LUYỆN TẬP &bull; MÀN 2/2",
        "title": "TỰ CHẤM PHẦN SẢN PHẨM",
        "subtitle": "Hai tiêu chí cuối cùng hoàn tất bảng tự đánh giá 10 điểm",
        "exampleA": {
          "tag": "TIÊU CHÍ 4: SẢN PHẨM & NGUỒN",
          "title": "Nguồn và quá trình",
          "desc": "Bản đọc được, đủ nội dung cốt lõi, nguồn tìm lại được và có nhật kí."
        },
        "exampleB": {
          "tag": "TIÊU CHÍ 5: HỢP TÁC & SỬA ĐỔI",
          "title": "Hợp tác và chỉnh sửa",
          "desc": "Có đóng góp từng bạn và ít nhất một chỉnh sửa cụ thể theo góp ý."
        },
        "imageNote": "Hai tiêu chí cuối của Rubric và ô tổng điểm .../10 trên phiếu P12.",
        "notes": "Mỗi em ghi đóng góp và đọc chéo 1 dòng. Dẫn minh chứng và tính tổng điểm /10."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "navy",
        "layout": "activity",
        "category": "LUYỆN TẬP &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-12-tu-cham-san-pham",
          "type": "choice",
          "prompt": "Tiêu chí 5 (Hợp tác và chỉnh sửa) yêu cầu minh chứng nào để đạt điểm tối đa?",
          "points": 10,
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "Chỉ cần một người làm tất cả và ghi tên các bạn khác vào."
            },
            {
              "id": "B",
              "text": "Nhóm nộp bản đầu tiên mà không cần chỉnh sửa bất kì chỗ nào."
            },
            {
              "id": "C",
              "text": "Có đóng góp từng thành viên và ít nhất một chỉnh sửa theo góp ý."
            },
            {
              "id": "D",
              "text": "Lời nhận xét khen ngợi chung chung từ các nhóm bạn khác."
            }
          ],
          "explanation": "Tiêu chí 5 đòi hỏi minh chứng đóng góp từng người và ít nhất một thay đổi."
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "cream",
        "layout": "recap",
        "category": "VẬN DỤNG &bull; BÀN GIAO",
        "title": "NỘP ĐÚNG BỘ HỒ SƠ CUỐI",
        "subtitle": "Checklist 4 thành phần hoàn tất dự án Trợ lí AI trong cuộc sống",
        "points": [
          "Sản phẩm Bản cuối (poster, storyboard hoặc mô hình) mở/đọc được.",
          "Minh chứng chỉnh sửa đối chiếu trước - sau kèm góp ý và lí do.",
          "Danh sách nguồn tham khảo tìm lại được và nhật kí đóng góp.",
          "Phiếu nghiệm thu P12 có điểm tự chấm 5 tiêu chí theo Rubric."
        ],
        "imageNote": "Checklist bộ hồ sơ nộp hoàn chỉnh gồm 4 thành phần nghiệm thu.",
        "notes": "GV xác nhận Đạt mốc hoặc Cần bổ sung sau khi đối chiếu. HS lưu Bản cuối."
      }
    ],
    "fileName": "12-du-an-tai-nha-giai-doan-4-hoan-thien-va-nop-san-pham.json"
  },
  {
    "deckId": "bai-1-ai-quen-thuoc",
    "title": "BÀI 1: LÀM QUEN VỚI AI VÀ MỘT SỐ CÔNG NGHỆ AI QUEN THUỘC",
    "subject": "Tin học 6",
    "author": "Tổ Tin học THCS",
    "slides": [
      {
        "id": "slide-1",
        "pageNumber": 1,
        "theme": "navy",
        "layout": "cover",
        "category": "TIẾT 1 &bull; BÀI HỌC MỚI",
        "title": "LÀM QUEN VỚI AI VÀ CÔNG NGHỆ AI QUEN THUỘC",
        "subtitle": "Chương trình Tin học THCS &bull; Khám phá thế giới trí tuệ nhân tạo",
        "subject": "TIN HỌC 6",
        "author": "BỘ MÔN TIN HỌC",
        "notes": "Giáo viên mở đầu tiết học, ổn định lớp và tạo hứng thú."
      },
      {
        "id": "slide-2",
        "pageNumber": 2,
        "theme": "cream",
        "layout": "objectives",
        "category": "MỤC TIÊU CẦN ĐẠT",
        "title": "MỤC TIÊU BÀI HỌC",
        "subtitle": "Những kiến thức và năng lực học sinh cần đạt được sau tiết học",
        "objectives": [
          {
            "label": "KIẾN THỨC",
            "title": "Hiểu biết về AI",
            "desc": "Hiểu ban đầu về AI; kể tên 3 tính năng quen thuộc trong đời sống."
          },
          {
            "label": "NĂNG LỰC SỐ",
            "title": "Đánh giá hệ thống",
            "desc": "Mô tả đầu vào, kết quả của hai tính năng; nhận biết giới hạn của AI."
          },
          {
            "label": "PHẨM CHẤT",
            "title": "Trung thực & Trách nhiệm",
            "desc": "Ghi đúng kết quả, bảo vệ dữ liệu cá nhân khi sử dụng công nghệ."
          }
        ],
        "notes": "Nhấn mạnh chuẩn đầu ra và các tiêu chí đánh giá trong tiết."
      },
      {
        "id": "slide-3",
        "pageNumber": 3,
        "theme": "navy",
        "layout": "contents",
        "category": "LỘ TRÌNH TIẾT HỌC",
        "title": "TIẾN TRÌNH BÀI DẠY",
        "subtitle": "4 hoạt động chính trong 45 phút học tập và thực hành tương tác",
        "items": [
          {
            "title": "1. Khởi động (4 phút)",
            "desc": "So sánh máy tính bỏ túi và mô hình nhận diện AI."
          },
          {
            "title": "2. Khám phá (10 phút)",
            "desc": "Tìm hiểu 3 tính năng AI quen thuộc trong đời sống."
          },
          {
            "title": "3. Thực hành (20 phút)",
            "desc": "Thử nghiệm đầu vào, ghi nhận kết quả và phát hiện sai lệch."
          },
          {
            "title": "4. Vận dụng & Đánh giá (11 phút)",
            "desc": "Nhận thức giới hạn của AI và đưa ra quyết định đúng đắn."
          }
        ],
        "notes": "Phổ biến phân bổ thời gian để học sinh chủ động hoàn thành nhiệm vụ."
      },
      {
        "id": "slide-4",
        "pageNumber": 4,
        "theme": "cream",
        "layout": "compare",
        "category": "KHỞI ĐỘNG &bull; TƯ DUY",
        "title": "SO SÁNH: MÁY TÍNH BỎ TÚI VÀ MÔ HÌNH AI",
        "subtitle": "Cả hai đều xử lý dữ liệu nhanh chóng, vậy điểm khác biệt bản chất là gì?",
        "columnA": {
          "title": "Mô hình AI (Gán nhãn ảnh cốc)",
          "items": [
            "Tiếp nhận dữ liệu phức tạp dạng hình ảnh đa chiều.",
            "Dự đoán dựa trên đặc trưng học từ dữ liệu huấn luyện.",
            "Kết quả đi kèm độ tin cậy và có thể nhầm lẫn.",
            "Có khả năng cải thiện độ chính xác khi được học thêm."
          ]
        },
        "columnB": {
          "title": "Máy tính bỏ túi (125 + 37)",
          "items": [
            "Tiếp nhận dữ liệu đầu vào là các con số xác định.",
            "Thực hiện thuật toán cộng số học lập trình sẵn.",
            "Kết quả chính xác 100%, không mang tính xác suất.",
            "Chỉ làm đúng quy tắc cứng, không tự học hỏi được."
          ]
        },
        "notes": "Quan sát học sinh làm trắc nghiệm nhanh trên màn hình cá nhân."
      },
      {
        "id": "slide-5",
        "pageNumber": 5,
        "theme": "cream",
        "layout": "activity",
        "category": "KHỞI ĐỘNG &bull; BÀI TẬP",
        "title": "CÂU HỎI TRẮC NGHIỆM",
        "subtitle": "Chọn phương án chính xác nhất và nhấn nút Nộp bài",
        "activity": {
          "id": "act-choice-1",
          "type": "choice",
          "prompt": "Theo em, điểm khác biệt then chốt của mô hình AI là gì?",
          "points": 10,
          "explanation": "AI đưa ra kết quả dựa trên việc học đặc trưng từ dữ liệu mẫu.",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "Máy tính bỏ túi tính toán nhanh hơn mô hình AI."
            },
            {
              "id": "B",
              "text": "Mô hình AI dự đoán dựa trên việc học đặc trưng từ dữ liệu."
            },
            {
              "id": "C",
              "text": "Mô hình AI luôn chính xác tuyệt đối 100% trong mọi tình huống."
            },
            {
              "id": "D",
              "text": "Cả hai công cụ đều không có khả năng tự học hỏi gì thêm."
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-6",
        "pageNumber": 6,
        "theme": "navy",
        "layout": "three-cards",
        "category": "KHÁM PHÁ KIẾN THỨC",
        "title": "BA TÍNH NĂNG AI QUEN THUỘC",
        "subtitle": "Các ứng dụng công nghệ trí tuệ nhân tạo học sinh thường tiếp xúc",
        "cards": [
          {
            "title": "1. Nhận dạng thị giác",
            "desc": "Mở khóa khuôn mặt (Face ID), nhận diện và gán nhãn vật thể trong ảnh."
          },
          {
            "title": "2. Xử lý ngôn ngữ",
            "desc": "Dịch văn bản đa ngữ theo ngữ cảnh, trợ lý ảo điều khiển bằng giọng nói."
          },
          {
            "title": "3. Gợi ý nội dung",
            "desc": "Gợi ý video YouTube, bài hát yêu thích dựa vào thói quen người dùng."
          }
        ],
        "notes": "Yêu cầu học sinh liên hệ thêm ví dụ các em đã từng dùng ở nhà."
      },
      {
        "id": "slide-7",
        "pageNumber": 7,
        "theme": "cream",
        "layout": "steps",
        "category": "CƠ CHẾ HOẠT ĐỘNG",
        "title": "QUY TRÌNH HOẠT ĐỘNG CỦA HỆ THỐNG AI",
        "subtitle": "Các bước cơ bản từ dữ liệu đầu vào đến kết quả phán đoán thực tế",
        "steps": [
          {
            "title": "Đầu vào",
            "desc": "Thu nhận ảnh chụp, giọng nói hoặc văn bản người dùng cung cấp."
          },
          {
            "title": "Phân tích",
            "desc": "Trích xuất đặc trưng và so sánh với mô hình học máy lưu trữ sẵn."
          },
          {
            "title": "Dự đoán",
            "desc": "Đưa ra câu trả lời hoặc nhãn phân loại kèm mức độ tự tin."
          },
          {
            "title": "Phản hồi",
            "desc": "Người dùng đánh giá đúng/sai để hệ thống tiếp tục học hỏi."
          }
        ],
        "notes": "Nhắc học sinh dùng nút ▲/▼ hoặc kéo thả để sắp xếp các bước."
      },
      {
        "id": "slide-8",
        "pageNumber": 8,
        "theme": "cream",
        "layout": "activity",
        "category": "CƠ CHẾ HOẠT ĐỘNG • BÀI TẬP",
        "title": "BÀI TẬP SẮP XẾP THỨ TỰ",
        "subtitle": "Sắp xếp các bước theo đúng trình tự logic",
        "activity": {
          "id": "act-ordering-1",
          "type": "ordering",
          "prompt": "Sắp xếp 4 bước quy trình hoạt động của AI theo đúng thứ tự:",
          "points": 10,
          "explanation": "Thứ tự: 1. Thu nhận -> 2. Phân tích -> 3. Dự đoán -> 4. Phản hồi.",
          "answer": [
            "step-input",
            "step-analyze",
            "step-predict",
            "step-feedback"
          ],
          "items": [
            {
              "id": "step-predict",
              "text": "Dự đoán kết quả kèm mức độ tự tin"
            },
            {
              "id": "step-input",
              "text": "Thu nhận dữ liệu đầu vào (ảnh, âm thanh)"
            },
            {
              "id": "step-feedback",
              "text": "Người dùng phản hồi cải tiến mô hình"
            },
            {
              "id": "step-analyze",
              "text": "Trích xuất đặc trưng và phân tích dữ liệu"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-9",
        "pageNumber": 9,
        "theme": "navy",
        "layout": "two-examples",
        "category": "THỰC NGHIỆM ĐỐI CHỨNG",
        "title": "CHẤT LƯỢNG ĐẦU VÀO QUYẾT ĐỊNH KẾT QUẢ",
        "subtitle": "Thử nghiệm gán nhãn chiếc cốc với hai điều kiện ánh sáng khác nhau",
        "exampleA": {
          "tag": "ĐIỀU KIỆN 1: ĐỦ SÁNG",
          "title": "Ảnh rõ nét, đủ sáng",
          "desc": "Nhận diện rõ quai và chất liệu cốc. Dự đoán: 'Cốc uống nước' (độ tin cậy 98%)."
        },
        "exampleB": {
          "tag": "ĐIỀU KIỆN 2: THIẾU SÁNG",
          "title": "Ảnh tối, góc khuất",
          "desc": "Bóng đổ gây nhiễu. Dự đoán sai lệch thành: 'Ống cắm bút' (độ tin cậy 41%)."
        },
        "notes": "Khắc sâu nguyên lý: Dữ liệu đầu vào kém sẽ cho kết quả sai lệch."
      },
      {
        "id": "slide-10",
        "pageNumber": 10,
        "theme": "navy",
        "layout": "activity",
        "category": "THỰC NGHIỆM ĐỐI CHỨNG • BÀI TẬP",
        "title": "BÀI TẬP NỐI CỘT",
        "subtitle": "Ghép nối các cặp thông tin tương ứng ở hai cột",
        "activity": {
          "id": "act-matching-1",
          "type": "matching",
          "prompt": "Nối điều kiện ảnh đầu vào với kết quả dự đoán tương ứng:",
          "points": 10,
          "explanation": "Ảnh rõ đủ sáng cho kết quả 98%, ảnh tối nhầm lẫn, ảnh mờ giảm độ tin cậy.",
          "answer": {
            "p1": "r1",
            "p2": "r2",
            "p3": "r3"
          },
          "pairs": [
            {
              "id": "p1",
              "left": "Ảnh rõ nét, đủ ánh sáng",
              "right": "Độ chính xác cao (98%)"
            },
            {
              "id": "p2",
              "left": "Ảnh tối, bóng đổ che khuất",
              "right": "Nhầm sang đồ vật khác"
            },
            {
              "id": "p3",
              "left": "Ảnh mờ, góc chụp lệch",
              "right": "Độ tin cậy giảm (41%)"
            }
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-11",
        "pageNumber": 11,
        "theme": "cream",
        "layout": "case-study",
        "category": "TÌNH HUỐNG THỰC TẾ",
        "title": "TÌNH HUỐNG: DỊCH CÂU THÀNH NGỮ",
        "subtitle": "Tìm hiểu giới hạn hiểu biết ngôn ngữ và văn hóa của mô hình AI",
        "scenario": "Dịch AI câu 'Nước đổ đầu vịt' sang tiếng Anh đúng từ vựng nhưng mất nghĩa bóng.",
        "question": "Vì sao AI khó dịch thành ngữ? Con người cần làm gì khi dùng kết quả dịch?",
        "notes": "Học sinh gõ từ khóa vào ô trực tiếp trên slide và bấm Nộp bài."
      },
      {
        "id": "slide-12",
        "pageNumber": 12,
        "theme": "cream",
        "layout": "activity",
        "category": "TÌNH HUỐNG THỰC TẾ • BÀI TẬP",
        "title": "CÂU HỎI VẬN DỤNG NGẮN",
        "subtitle": "Nhập câu trả lời ngắn gọn vào ô văn bản bên dưới",
        "activity": {
          "id": "act-shorttext-1",
          "type": "short-text",
          "prompt": "Điền từ còn thiếu: AI khó dịch thành ngữ do thiếu hiểu biết về [.......].",
          "placeholder": "Nhập từ khóa ngắn: ngữ cảnh, văn hóa...",
          "points": 10,
          "explanation": "Ngữ cảnh và văn hóa là các yếu tố đặc thù mà AI rất khó nắm bắt.",
          "ignoreDiacritics": true,
          "answer": [
            "ngữ cảnh",
            "văn hóa",
            "ngu canh",
            "van hoa",
            "ngữ cảnh văn hóa"
          ]
        },
        "notes": "Thời gian: 2 - 3 phút. Giáo viên quan sát tiến độ nộp bài của học sinh."
      },
      {
        "id": "slide-13",
        "pageNumber": 13,
        "theme": "navy",
        "layout": "quote",
        "category": "THÔNG ĐIỆP CỐT LÕI",
        "title": "THÔNG ĐIỆP GHI NHỚ",
        "quote": "AI hỗ trợ con người học tập, nhưng con người luôn là chủ thể ra quyết định.",
        "author": "Chương trình Giáo dục Phổ thông Tin học 6"
      },
      {
        "id": "slide-14",
        "pageNumber": 14,
        "theme": "cream",
        "layout": "recap",
        "category": "TỔNG KẾT BÀI HỌC",
        "title": "GHI NHỚ TRỌNG TÂM TIẾT 1",
        "subtitle": "Những nội dung cốt lõi học sinh cần ghi nhớ sau bài học",
        "points": [
          "AI là công nghệ có khả năng học từ dữ liệu và đưa ra dự đoán.",
          "Ba tính năng quen thuộc: Nhận diện ảnh, dịch ngôn ngữ và gợi ý nội dung.",
          "Độ chính xác của AI phụ thuộc trực tiếp vào chất lượng dữ liệu đầu vào.",
          "Sử dụng AI có trách nhiệm, trung thực và bảo vệ dữ liệu cá nhân."
        ],
        "notes": "Dặn dò học sinh chuẩn bị bài tập thực hành Teachable Machine cho tiết 2."
      }
    ],
    "fileName": "bai-mau.json"
  }
];

  global.STANDALONE_DECKS = decks;
})(typeof window !== 'undefined' ? window : globalThis);
