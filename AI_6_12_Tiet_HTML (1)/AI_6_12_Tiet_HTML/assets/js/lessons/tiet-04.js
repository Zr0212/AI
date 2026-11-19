window.AI6_LESSON={
  "id": 4,
  "title": "Bài 4. Kiểm thử và cải tiến mô hình AI",
  "mode": "Trực tiếp tại phòng Tin học",
  "count": 35,
  "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
  "materials": "Thầy/Cô chuẩn bị học liệu có sẵn trong gói. Chỉ dùng dữ liệu mẫu. Thử công cụ trước giờ học.",
  "alternatives": "Thiếu thiết bị, em quan sát Thầy/Cô. Em vẫn ghi rõ cách thực hiện.",
  "video": {
    "index": 3,
    "title": "AI: Training Data & Bias",
    "start": 120,
    "end": 150,
    "poster": "frame_3_135.jpg",
    "url": "https://contentful-videos.code.org/90t6bu6vlf76/RDlu9sZfdQPEojHL9IgOc/2d98d959793bf7358272ab0d95a5b8ae/ai-03-training-data.mp4",
    "question": "Nếu ảnh học đều cùng góc và ánh sáng, cần bổ sung điều kiện nào để kiểm tra với ảnh mới?",
    "local": "code-3.mp4"
  },
  "outcome": "Bảng so sáu ảnh trước và sau khi dạy thêm.",
  "slides": [
    {
      "type": "cover",
      "id": "04-01",
      "title": "Bài 4. Kiểm thử và cải tiến mô hình AI",
      "note": {
        "activity": "Khởi động",
        "purpose": "Nhận ra cần bằng chứng mới khi đánh giá mô hình.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Thảo luận cặp và đề xuất một vật/góc chụp mới.",
        "report": "Hai HS giải thích vì sao phải có nhãn thực để đối chiếu.",
        "conclusion": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
        "assessment": "Nếu các em chỉ đề nghị xem phần trăm cao, yêu cầu nêu phép đối chiếu đúng/sai.",
        "answers": [
          "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em bắt đầu bằng một điều muốn tìm hiểu. Trong 10 giây, em đọc đầu bài trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc đầu bài trên slide.",
          "answer": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Có mô hình rồi, mục tiêu hôm nay là kiểm có căn cứ và biết điều chưa kiểm được."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Khởi động",
      "scene": "test",
      "taskLines": [
        "Trong 10 giây, em đọc đầu bài trên slide."
      ],
      "connector": "Em bắt đầu bằng một điều muốn tìm hiểu.",
      "number": 1,
      "icon": "flask-conical"
    },
    {
      "type": "goals",
      "id": "04-02",
      "title": "Hôm nay em làm được gì?",
      "note": {
        "activity": "Khởi động",
        "purpose": "Nhận ra cần bằng chứng mới khi đánh giá mô hình.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Thảo luận cặp và đề xuất một vật/góc chụp mới.",
        "report": "Hai HS giải thích vì sao phải có nhãn thực để đối chiếu.",
        "conclusion": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
        "assessment": "Nếu các em chỉ đề nghị xem phần trăm cao, yêu cầu nêu phép đối chiếu đúng/sai.",
        "answers": [
          "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Đầu bài cho biết chủ đề. Em xem việc cần làm. Trong 20 giây, em chọn một mục tiêu trên slide.",
          "explanation": "Chuẩn bị sáu ảnh mới và xác định tên đúng của đồ vật trong ảnh.\nThử trước và sau khi bổ sung ảnh học. Ghi đúng kết quả.\nSo sánh sáu ảnh đã thử và nêu điều còn cần kiểm tra thêm.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 20 giây, em chọn một mục tiêu trên slide.",
          "answer": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Em bắt đầu từ câu hỏi: “Đúng ảnh quen, đã đủ chưa?”"
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Giữ riêng sáu ảnh để kiểm thử.",
        "So kết quả trước và sau cải tiến.",
        "Nêu <span class=\"hl-key\">điều chưa kiểm được</span>."
      ],
      "phase": "Khởi động",
      "scene": "test",
      "taskLines": [
        "Trong 20 giây, em chọn một mục tiêu trên slide."
      ],
      "connector": "Đầu bài cho biết chủ đề. Em xem việc cần làm.",
      "number": 2,
      "icon": "target"
    },
    {
      "type": "divider",
      "id": "04-03",
      "title": "Khởi động",
      "note": {
        "activity": "Khởi động",
        "purpose": "Nhận ra cần bằng chứng mới khi đánh giá mô hình.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Thảo luận cặp và đề xuất một vật/góc chụp mới.",
        "report": "Hai HS giải thích vì sao phải có nhãn thực để đối chiếu.",
        "conclusion": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
        "assessment": "Nếu các em chỉ đề nghị xem phần trăm cao, yêu cầu nêu phép đối chiếu đúng/sai.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Từ việc quen thuộc, em thử nêu câu hỏi. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc tên hoạt động trên slide.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Nhớ lại ảnh đã nhận đúng. Nêu điều chưa thể khẳng định."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Khởi động",
      "scene": "test",
      "taskLines": [
        "Trong 10 giây, em đọc tên hoạt động trên slide."
      ],
      "connector": "Từ việc quen thuộc, em thử nêu câu hỏi.",
      "number": 3,
      "icon": "play-circle"
    },
    {
      "type": "scenario",
      "time": 2,
      "id": "04-04",
      "title": "Đúng ảnh quen, đã đủ chưa?",
      "note": {
        "activity": "Khởi động",
        "purpose": "Nhận ra cần bằng chứng mới khi đánh giá mô hình.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Thảo luận cặp và đề xuất một vật/góc chụp mới.",
        "report": "Hai HS giải thích vì sao phải có nhãn thực để đối chiếu.",
        "conclusion": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
        "assessment": "Nếu các em chỉ đề nghị xem phần trăm cao, yêu cầu nêu phép đối chiếu đúng/sai.",
        "answers": [
          "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Từ mục tiêu hôm nay, em xem một tình huống. Trong 30 giây, em tự chọn câu trả lời tại chỗ.",
          "explanation": "Mô hình gọi đúng chiếc cốc vừa chụp nhiều lần. Có thể nói mô hình nhận đúng mọi cốc không? Cần thử thêm gì?",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em tự chọn câu trả lời tại chỗ.",
          "answer": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Muốn thử có căn cứ, em cần phân biệt ảnh học và ảnh thử."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Mô hình nhận đúng ảnh đã thấy.",
        "Điều đó <span class=\"hl-key\">chứng minh được gì</span>?",
        "Cần thử thêm ảnh nào?"
      ],
      "phase": "Khởi động",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em tự chọn câu trả lời tại chỗ."
      ],
      "connector": "Từ mục tiêu hôm nay, em xem một tình huống.",
      "number": 4,
      "icon": "lightbulb",
      "photo": {
        "file": "cup_clear.png",
        "caption": "Cốc đã chụp nhiều lần — ảnh quen của mô hình"
      }
    },
    {
      "type": "scenario",
      "time": 2,
      "id": "04-04b",
      "title": "Thử một ảnh lạ, chuyện gì xảy ra?",
      "note": {
        "activity": "Khởi động",
        "purpose": "Thấy ảnh lạ có thể làm mô hình đoán nhầm.",
        "teacher": "Thầy/Cô chiếu slide, dẫn dắt theo 3 bước và gọi 1–2 em kiểm tra nhanh.",
        "students": "Làm cá nhân yên lặng (3 phút), sau đó đổi bài kiểm tra nhanh với bạn cùng bàn (2 phút).",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Ảnh quen đúng chưa đủ; phải thử ảnh lạ mới thấy điểm yếu.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Mô hình có thể đoán nhầm khi ảnh lạ khác điều kiện ảnh học.",
          "Cần thử thêm ảnh mới, đa dạng điều kiện chụp."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em vừa thấy ảnh quen đúng. Giờ xem một ảnh lạ. Trong 30 giây, em đoán trước kết quả.",
          "explanation": "Ảnh bên trái là ảnh quen, chụp thẳng, rõ. Ảnh bên phải chụp nghiêng và tối hơn. Máy có nhận ra vẫn là chiếc cốc không?",
          "delivery": "Thầy/Cô hướng dẫn chậm từng bước, không chuyển nhanh khi các em chưa rõ.",
          "students": "Trong 30 giây, em đoán trước kết quả.",
          "answer": "Mô hình có thể đoán nhầm khi ảnh lạ khác điều kiện ảnh học. Cần thử thêm ảnh mới, đa dạng điều kiện chụp.",
          "closing": "Thầy/Cô chốt: Ảnh quen đúng chưa đủ để tin mô hình.",
          "transition": "Thầy/Cô nối ý: Muốn biết chắc, em cần thử có căn cứ."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Ảnh quen: chụp thẳng, rõ.",
        "Ảnh lạ: <span class=\"hl-action\">nghiêng và tối hơn</span>.",
        "Máy còn nhận ra không?"
      ],
      "phase": "Khởi động",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em đoán trước kết quả."
      ],
      "connector": "Em vừa thấy ảnh quen đúng. Giờ xem một ảnh lạ.",
      "icon": "alert-triangle",
      "photo": {
        "file": "frame_5_55.jpg",
        "caption": "Cùng chiếc cốc nhưng chụp nghiêng và tối hơn"
      },
      "number": 5
    },
    {
      "type": "divider",
      "id": "04-05",
      "title": "Khám phá: giữ riêng ảnh thử",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Thu được kết quả sáu trường hợp chưa dùng huấn luyện.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng. Không yêu cầu phải có lỗi mới đạt.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Câu hỏi vừa nêu dẫn em tới cách AI làm việc. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc tên hoạt động trên slide.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Chuẩn bị nhận biết hai thư mục ảnh học và ảnh thử."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Khám phá",
      "scene": "test",
      "taskLines": [
        "Trong 10 giây, em đọc tên hoạt động trên slide."
      ],
      "connector": "Câu hỏi vừa nêu dẫn em tới cách AI làm việc.",
      "number": 6,
      "icon": "search"
    },
    {
      "type": "question",
      "poster": "frame_3_135.jpg",
      "id": "04-06",
      "title": "Bộ ảnh có thể đang thiếu gì?",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Thu được kết quả sáu trường hợp chưa dùng huấn luyện.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng. Không yêu cầu phải có lỗi mới đạt.",
        "answers": [
          "Có thể nhận kém ở góc khác nếu ảnh học chưa bao quát điều kiện đó. Chỉ từ mô tả chưa biết chắc đúng hay sai.",
          "Thêm ảnh học phù hợp và thử bằng ảnh mới có tên đúng để đối chiếu. Không dùng chính dự đoán làm đáp án."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Trước khi xem, em đọc câu hỏi cần tìm. Trong 15 giây, em đọc câu hỏi trên slide.",
          "explanation": "Nếu chỉ học từ ảnh chụp cùng một góc, máy có nhận tốt ảnh ở góc khác không? Hãy tìm lí do trong video.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 15 giây, em đọc câu hỏi trên slide.",
          "answer": "Có thể nhận kém ở góc khác nếu ảnh học chưa bao quát điều kiện đó. Chỉ từ mô tả chưa biết chắc đúng hay sai.\nThêm ảnh học phù hợp và thử bằng ảnh mới có tên đúng để đối chiếu. Không dùng chính dự đoán làm đáp án.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Video sẽ cho thêm ví dụ về việc dữ liệu chưa bao quát điều kiện mới."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Bộ ảnh chỉ có mặt chính diện.",
        "Đổi góc, kết quả <span class=\"hl-error\">có thể sai</span>.",
        "Thử thế nào để biết?"
      ],
      "phase": "Khám phá",
      "scene": "video",
      "taskLines": [
        "Trong 15 giây, em đọc câu hỏi trên slide."
      ],
      "connector": "Trước khi xem, em đọc câu hỏi cần tìm.",
      "number": 7,
      "icon": "search"
    },
    {
      "type": "video",
      "video": {
        "index": 3,
        "title": "AI: Training Data & Bias",
        "start": 120,
        "end": 150,
        "poster": "frame_3_135.jpg",
        "url": "https://contentful-videos.code.org/90t6bu6vlf76/RDlu9sZfdQPEojHL9IgOc/2d98d959793bf7358272ab0d95a5b8ae/ai-03-training-data.mp4",
        "question": "Tìm một điều kiện dữ liệu còn thiếu. Nêu việc cần kiểm tra thêm.",
        "local": "code-3.mp4"
      },
      "id": "04-07",
      "title": "Dữ liệu cần đa dạng vì sao?",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Thu được kết quả sáu trường hợp chưa dùng huấn luyện.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng. Không yêu cầu phải có lỗi mới đạt.",
        "answers": [
          "Có thể nhận kém ở góc khác nếu ảnh học chưa bao quát điều kiện đó. Chỉ từ mô tả chưa biết chắc đúng hay sai.",
          "Thêm ảnh học phù hợp và thử bằng ảnh mới có tên đúng để đối chiếu. Không dùng chính dự đoán làm đáp án."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Giữ câu hỏi vừa đọc. Em tìm ví dụ trong phim. Trong 30 giây, em ghi một ví dụ vào vở.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em ghi một ví dụ vào vở.",
          "answer": "Có thể nhận kém ở góc khác nếu ảnh học chưa bao quát điều kiện đó. Chỉ từ mô tả chưa biết chắc đúng hay sai.\nThêm ảnh học phù hợp và thử bằng ảnh mới có tên đúng để đối chiếu. Không dùng chính dự đoán làm đáp án.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Em chuyển nhận xét đó thành bộ sáu tệp thử được giữ riêng."
        }
      },
      "theme": "cream",
      "fallback": "Ảnh học chưa đa dạng có thể làm mô hình nhận kém ở điều kiện khác. Cần thử mới rồi đối chiếu với vật thật.",
      "v6": true,
      "screen": [
        "Tìm một điều kiện dữ liệu còn thiếu.",
        "Nêu việc cần kiểm tra thêm."
      ],
      "phase": "Khám phá",
      "scene": "video",
      "taskLines": [
        "Trong 30 giây, em ghi một ví dụ vào vở."
      ],
      "connector": "Giữ câu hỏi vừa đọc. Em tìm ví dụ trong phim.",
      "number": 8,
      "icon": "video"
    },
    {
      "type": "concept",
      "id": "04-08",
      "title": "Giữ ảnh thử ngoài ảnh học",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Thu được kết quả sáu trường hợp chưa dùng huấn luyện.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng. Không yêu cầu phải có lỗi mới đạt.",
        "answers": [
          "Đánh giá dựa trên nhãn thực và đầu ra quan sát. Không chỉ dựa vào độ tự tin."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Từ ví dụ vừa có, em đặt tên cho điều đã thấy. Trong 30 giây, em chỉ một ý trên hình.",
          "explanation": "Ảnh dùng để học: Những ảnh được đưa vào quá trình dạy AI.\nẢnh dùng để thử: Sáu ảnh mới T1–T6, có tên đồ vật thật để đối chiếu. Không đưa chúng vào ảnh học.\nCách kiểm tra: So tên mô hình đưa ra với đồ vật thật, rồi đếm số ảnh nhận đúng.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em chỉ một ý trên hình.",
          "answer": "Đánh giá dựa trên nhãn thực và đầu ra quan sát. Không chỉ dựa vào độ tự tin.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu mẫu giữ ảnh để kiểm thử."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Ảnh học: dùng để dạy AI.",
        "Ảnh thử T1–T6: <span class=\"hl-key\">chưa dùng để học</span>.",
        "Tên vật thật: căn cứ đối chiếu."
      ],
      "phase": "Khám phá",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em chỉ một ý trên hình."
      ],
      "connector": "Từ ví dụ vừa có, em đặt tên cho điều đã thấy.",
      "number": 9,
      "icon": "folder"
    },
    {
      "id": "04-09-mau",
      "type": "worked",
      "v6": true,
      "title": "Mẫu giữ ảnh để kiểm thử",
      "theme": "cream",
      "phase": "Khám phá",
      "scene": "Folders",
      "worked": {
        "title": "Mẫu giữ ảnh để kiểm thử",
        "context": "Mẫu một tệp ảnh. Em sẽ thử T1–T6.",
        "labels": [
          "Mã ảnh",
          "Tên vật thật",
          "Điều kiện chụp",
          "Chỗ lưu",
          "Điều phải tránh"
        ],
        "values": [
          "T1",
          "Bút",
          "Góc nghiêng, nhìn rõ vật",
          "Thư mục Ảnh thử",
          "<span class=\"hl-error\">Không thêm T1 vào ảnh dạy AI</span>"
        ],
        "why": [
          "Mã giúp em dùng lại đúng tệp.",
          "Tên thật là căn cứ kiểm dự đoán.",
          "Tách ảnh giúp phép thử có ý nghĩa."
        ],
        "question": "Em không được đưa T1 vào đâu?",
        "scene": "Folders"
      },
      "targetId": "04-09",
      "screen": [
        "✓ Mã ảnh T1, tên thật: Bút.",
        "✓ Điều kiện chụp: góc nghiêng.",
        "✗ <span class=\"hl-error\">Không thêm T1 vào ảnh dạy AI</span>."
      ],
      "taskLines": [
        "Trong 30 giây, em nghĩ cách điền ô cuối tại chỗ."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách làm trước khi tự thực hiện.",
        "teacher": "Thầy/Cô giải thích bốn ô đã điền.",
        "students": "Em nghĩ về ô cuối tại chỗ.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "Không thêm T1 vào ảnh dạy AI",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "Không thêm T1 vào ảnh dạy AI"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Mẫu một tệp ảnh. Em sẽ thử T1–T6.\nMã giúp em dùng lại đúng tệp.\nTên thật là căn cứ kiểm dự đoán.\nTách ảnh giúp phép thử có ý nghĩa.",
          "delivery": "Thầy/Cô chỉ lần lượt các ô đã điền. Giữ ô cuối trống trong 30 giây. Gọi 1–2 em tại chỗ. Bấm Mở ô cuối sau khi các em trả lời. Chỉ chuyển sang tự làm khi các em hiểu cách điền.",
          "students": "Em tự nghĩ ô cuối. Chưa trao đổi khi Thầy/Cô chưa ra hiệu.",
          "answer": "Không thêm T1 vào ảnh dạy AI",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 10,
      "icon": "folder",
      "photo": {
        "file": "tm_projects.jpg",
        "caption": "Thư mục ảnh học và ảnh thử để riêng"
      }
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.1 Bộ kiểm thử mới",
        "intro": "Trong 3 phút, em làm cá nhân yên lặng trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
        "answers": [
          "Không có sẵn nhãn dự đoán đúng cho mọi nhóm. Các em ghi kết quả thật và so với Bút/Cốc. Không xác định được tính chưa đúng trong phép đếm này.",
          "Nhãn thật là thông tin đối chiếu, không lấy từ dự đoán của chính mô hình. Nếu chỉ dùng bảng mẫu Thầy/Cô cung cấp, ghi là phân tích dữ liệu dự phòng."
        ],
        "pages": [
          {
            "title": "Thử các ảnh T1–T3",
            "instruction": "Dùng đúng T1–T3 đã lưu, chưa đưa vào ảnh học. Ghi dự đoán rồi đối chiếu.",
            "headers": [
              "Ảnh và vật thật",
              "Mô hình gọi tên gì?",
              "So với vật thật"
            ],
            "rows": [
              [
                "T1: Bút, góc chính diện, nền trơn",
                {
                  "label": "Dự đoán ảnh T1",
                  "key": "04-09-v3-0"
                },
                {
                  "label": "Nhận xét ảnh T1",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-1",
                  "optionLabels": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ]
                }
              ],
              [
                "T2: Bút, chụp nghiêng",
                {
                  "label": "Dự đoán ảnh T2",
                  "key": "04-09-v3-2"
                },
                {
                  "label": "Nhận xét ảnh T2",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-3",
                  "optionLabels": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ]
                }
              ],
              [
                "T3: Bút, đổi nền nhưng không che vật",
                {
                  "label": "Dự đoán ảnh T3",
                  "key": "04-09-v3-4"
                },
                {
                  "label": "Nhận xét ảnh T3",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-5",
                  "optionLabels": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ]
                }
              ]
            ]
          },
          {
            "title": "Thử các ảnh T4–T6",
            "instruction": "Làm tương tự với T4–T6. Giữ nguyên các tệp sau khi thử.",
            "headers": [
              "Ảnh và vật thật",
              "Mô hình gọi tên gì?",
              "So với vật thật"
            ],
            "rows": [
              [
                "T4: Cốc, đủ sáng",
                {
                  "label": "Dự đoán ảnh T4",
                  "key": "04-09-v3-6"
                },
                {
                  "label": "Nhận xét ảnh T4",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-7",
                  "optionLabels": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ]
                }
              ],
              [
                "T5: Cốc, đổi góc chụp",
                {
                  "label": "Dự đoán ảnh T5",
                  "key": "04-09-v3-8"
                },
                {
                  "label": "Nhận xét ảnh T5",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-9",
                  "optionLabels": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ]
                }
              ],
              [
                "T6: Cốc, đổi ánh sáng vừa phải",
                {
                  "label": "Dự đoán ảnh T6",
                  "key": "04-09-v3-10"
                },
                {
                  "label": "Nhận xét ảnh T6",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-11",
                  "optionLabels": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ]
                }
              ]
            ]
          },
          {
            "title": "Đọc kết quả lần đầu",
            "instruction": "Đếm số dòng nhận đúng. Nêu một điều kiện còn cần thử.",
            "fields": [
              {
                "label": "Mô hình nhận đúng bao nhiêu ảnh trong sáu ảnh?",
                "key": "04-09-v3-12"
              },
              {
                "label": "Ảnh nào cần xem lại? Vì sao?",
                "key": "04-09-v3-13"
              }
            ]
          }
        ]
      },
      "time": 5,
      "id": "04-09",
      "title": "P4.1 — Thử sáu ảnh đã lưu",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Hoàn thành sáu trường hợp t1–t6 theo các bước trên phiếu.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "Không có sẵn nhãn dự đoán đúng cho mọi nhóm. Các em ghi kết quả thật và so với Bút/Cốc. Không xác định được tính chưa đúng trong phép đếm này.",
          "Nhãn thật là thông tin đối chiếu, không lấy từ dự đoán của chính mô hình. Nếu chỉ dùng bảng mẫu Thầy/Cô cung cấp, ghi là phân tích dữ liệu dự phòng."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao làm cá nhân 3 phút rồi đổi bài kiểm tra với bạn cùng bàn 2 phút. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
          "students": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "answer": "Không có sẵn nhãn dự đoán đúng cho mọi nhóm. Các em ghi kết quả thật và so với Bút/Cốc. Không xác định được tính chưa đúng trong phép đếm này.\nNhãn thật là thông tin đối chiếu, không lấy từ dự đoán của chính mô hình. Nếu chỉ dùng bảng mẫu Thầy/Cô cung cấp, ghi là phân tích dữ liệu dự phòng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Bảng đã có kết quả. Em cần biết cách đọc mà không lấy dự đoán làm đáp án."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Lưu riêng T1–T6.",
        "Thử từng tệp trong Preview.",
        "Ghi dự đoán và đối chiếu."
      ],
      "phase": "Khám phá",
      "scene": "test",
      "taskLines": [
        "Trong 3 phút, em tự điền trên phiếu.",
        "Trong 2 phút, em so kết quả với em ngồi cạnh."
      ],
      "sampleId": "04-09-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 11,
      "icon": "clipboard-check"
    },
    {
      "type": "conclusion",
      "id": "04-10",
      "title": "Đối chiếu với tên vật thật",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Thu được kết quả sáu trường hợp chưa dùng huấn luyện.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng. Không yêu cầu phải có lỗi mới đạt.",
        "answers": [
          "Đánh giá dựa trên nhãn thực và đầu ra quan sát. Không chỉ dựa vào độ tự tin."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em so kết quả để rút ra điều có căn cứ. Trong 30 giây, em nêu một căn cứ tại chỗ.",
          "explanation": "“Tên đúng” là tên của đồ vật thật. “Dự đoán” là tên mô hình đưa ra. So hai tên này để biết lần thử có đúng không.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em nêu một căn cứ tại chỗ.",
          "answer": "Đánh giá dựa trên nhãn thực và đầu ra quan sát. Không chỉ dựa vào độ tự tin.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Từ các dòng chưa phù hợp, em chọn dữ liệu cần bổ sung vào ảnh học."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "<span class=\"hl-key\">Tên thật</span> khác với dự đoán.",
        "So hai tên để đếm đúng.",
        "Điểm dự đoán không thay việc kiểm."
      ],
      "phase": "Khám phá",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em nêu một căn cứ tại chỗ."
      ],
      "connector": "Em so kết quả để rút ra điều có căn cứ.",
      "number": 12,
      "icon": "check-circle-2"
    },
    {
      "type": "recap",
      "id": "04-11a",
      "title": "Chốt Khám phá: ba điều cần nhớ",
      "note": {
        "activity": "Chốt hoạt động Khám phá",
        "purpose": "Ghi nhớ ba ý cốt lõi trước khi cải tiến mô hình.",
        "teacher": "Thầy/Cô chiếu slide, dẫn dắt theo 3 bước và gọi 1–2 em kiểm tra nhanh.",
        "students": "Làm cá nhân yên lặng (3 phút), sau đó đổi bài kiểm tra nhanh với bạn cùng bàn (2 phút).",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Ảnh thử phải để riêng; đánh giá bằng tên thật; điểm tự tin không thay việc kiểm.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Ảnh thử để riêng, không dạy AI.",
          "So tên thật với dự đoán để biết đúng sai.",
          "Điểm tự tin không thay việc kiểm."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã thử sáu ảnh. Giờ chốt ba ý. Trong 20 giây, em đọc lại ba dòng.",
          "explanation": "Ba ý này là nền cho bước cải tiến ở hoạt động sau: chọn đúng điều cần sửa, thêm ảnh còn thiếu, thử lại cùng bộ ảnh.",
          "delivery": "Thầy/Cô hướng dẫn chậm từng bước, không chuyển nhanh khi các em chưa rõ.",
          "students": "Trong 20 giây, em đọc lại ba dòng.",
          "answer": "Ảnh thử để riêng, không dạy AI. So tên thật với dự đoán để biết đúng sai. Điểm tự tin không thay việc kiểm.",
          "closing": "Thầy/Cô chốt: Ba ý này là nền trước khi cải tiến.",
          "transition": "Thầy/Cô nối ý: Giờ em chuyển sang cải tiến rồi so sánh."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "<span class=\"hl-key\">Ảnh thử để riêng</span>, không dạy AI.",
        "So tên thật với dự đoán.",
        "Điểm tự tin không thay việc kiểm."
      ],
      "phase": "Khám phá",
      "scene": "test",
      "taskLines": [
        "Trong 20 giây, em đọc lại ba dòng."
      ],
      "connector": "Em đã thử sáu ảnh. Giờ chốt ba ý.",
      "icon": "list-checks",
      "number": 13
    },
    {
      "type": "divider",
      "id": "04-11",
      "title": "Thực hành: cải tiến rồi so sánh",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và so sánh trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm tra lại. Số ảnh đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ ảnh thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem ví dụ. Giờ em thử theo từng bước. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô đọc tên hoạt động, không giảng thêm.",
          "students": "Em đọc thầm tên hoạt động trong 10 giây.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu chọn một điều cần sửa."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Luyện tập / Thực hành",
      "scene": "test",
      "taskLines": [
        "Trong 10 giây, em đọc tên hoạt động trên slide."
      ],
      "connector": "Em đã xem ví dụ. Giờ em thử theo từng bước.",
      "number": 14
    },
    {
      "id": "04-12-mau",
      "type": "worked",
      "v6": true,
      "title": "Mẫu chọn một điều cần sửa",
      "theme": "cream",
      "phase": "Luyện tập / Thực hành",
      "scene": "Folders",
      "worked": {
        "title": "Mẫu chọn một điều cần sửa",
        "context": "Tình huống minh họa: AI hay nhầm ảnh nghiêng.",
        "labels": [
          "Dấu hiệu",
          "Ảnh mẫu còn thiếu",
          "Việc bổ sung",
          "Việc giữ nguyên",
          "Cách biết có thay đổi"
        ],
        "values": [
          "Một số ảnh nghiêng bị gọi sai",
          "Ít ảnh cốc ở góc nghiêng",
          "<span class=\"hl-action\">Chụp ảnh cốc nghiêng mới</span>, đúng tên",
          "Giữ nguyên T1–T6 để so hai lượt",
          "<span class=\"hl-key\">Dạy lại rồi thử cùng sáu tệp</span>"
        ],
        "why": [
          "Nêu căn cứ thay vì đoán nguyên nhân chắc chắn.",
          "Ảnh bổ sung khác ảnh giữ để thử.",
          "Kết quả có thể tăng, bằng hoặc giảm."
        ],
        "question": "Em cần làm gì để biết thay đổi có ích?",
        "scene": "Folders"
      },
      "targetId": "04-12",
      "screen": [],
      "taskLines": [
        "Trong 30 giây, em nghĩ cách điền ô cuối tại chỗ."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách làm trước khi tự thực hiện.",
        "teacher": "Thầy/Cô giải thích bốn ô đã điền.",
        "students": "Em nghĩ về ô cuối tại chỗ.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "Dạy lại rồi thử cùng sáu tệp",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "Dạy lại rồi thử cùng sáu tệp"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Tình huống minh họa: AI hay nhầm ảnh nghiêng.\nNêu căn cứ thay vì đoán nguyên nhân chắc chắn.\nẢnh bổ sung khác ảnh giữ để thử.\nKết quả có thể tăng, bằng hoặc giảm.",
          "delivery": "Thầy/Cô chỉ từng ô, đọc to ô đã điền mẫu.",
          "students": "Em đọc thầm các ô, ghi lại ô cuối vào nháp.",
          "answer": "Dạy lại rồi thử cùng sáu tệp.",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 15,
      "icon": "clipboard-check"
    },
    {
      "type": "task",
      "id": "04-12",
      "title": "Thay đổi một điểm, rồi thử lại",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và so sánh trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm tra lại. Số ảnh đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ ảnh thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra lại. Số ảnh đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ ảnh thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 11 phút, em dạy thêm ảnh rồi thử lại trên máy.",
          "explanation": "Chọn một điểm cần bổ sung ở ảnh học. Thêm ảnh mới, dạy AI lại rồi thử đúng sáu ảnh T1–T6 đã lưu.",
          "delivery": "Thầy/Cô đi từng bàn, nhắc em làm cá nhân yên lặng.",
          "students": "Em làm cá nhân yên lặng (3 phút) → đổi bài kiểm tra nhanh với bạn cùng bàn (2 phút).",
          "answer": "Cải tiến cần được kiểm tra lại; kết luận chỉ trong sáu ảnh thử.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Em bắt đầu bằng việc tìm xem ảnh học đang thiếu điều kiện nào."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "<span class=\"hl-action\">Chọn điểm cần bổ sung.</span>",
        "Thêm ảnh học mới và dạy AI lại.",
        "Thử lại đúng T1–T6."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "test",
      "taskLines": [
        "Trong 11 phút, em dạy thêm ảnh rồi thử lại trên máy."
      ],
      "sampleId": "04-12-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 16,
      "icon": "pencil"
    },
    {
      "type": "step",
      "step": 1,
      "time": 0,
      "id": "04-13",
      "title": "Bước 1 — Chọn điều cần cải tiến",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và so sánh trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm tra lại. Số ảnh đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ ảnh thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra lại. Số ảnh đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ ảnh thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Bảng thử giúp em chọn điều cần bổ sung. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Dùng kết quả T1–T6 để tìm điều cần xem lại.\nXem dòng nào nhận chưa đúng và kiểm tra ảnh học có thiếu kiểu vật hoặc điều kiện đó không.\nNếu cả sáu đều đúng, ghi điều kiện chưa thử. Không cần tạo lỗi để có bài làm.",
          "delivery": "Thầy/Cô mời 1–2 em đọc dòng nhận chưa đúng.",
          "students": "Em làm cá nhân yên lặng (3 phút) → đổi bài với bạn cùng bàn (2 phút).",
          "answer": "Chọn dòng nhận chưa đúng, tìm điều kiện ảnh học còn thiếu.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Đã chọn điều cần bổ sung, em thêm ảnh mới mà không dùng lại ảnh kiểm thử."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Xem lượt thử chưa phù hợp.",
        "Tìm điều kiện ảnh học còn thiếu.",
        "Đúng hết thì nêu điều kiện <span class=\"hl-action\">chưa thử</span>."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "folders",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Bảng thử giúp em chọn điều cần bổ sung.",
      "number": 17,
      "icon": "search"
    },
    {
      "type": "step",
      "step": 2,
      "time": 0,
      "id": "04-14",
      "title": "Bước 2 — Thêm ảnh học mới",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và so sánh trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Ảnh học bổ sung phải khác ảnh thử, đúng nhãn và ghi rõ lí do.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Ảnh học bổ sung phải khác T1–T6, đúng nhãn, ghi rõ số ảnh và lí do."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã chọn điều cần sửa. Giờ em thêm ảnh mới. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Ảnh học bổ sung phải khác các tệp T1–T6.\nThêm ảnh mới đúng nhãn vào thư mục Ảnh học. Ghi số ảnh và lí do.\nGiữ T1–T6 trong thư mục Ảnh thử, không thêm vào dạy AI.",
          "delivery": "Thầy/Cô nhắc: ảnh mới phải khác ảnh thử.",
          "students": "Em làm cá nhân yên lặng (3 phút) → đổi bài với bạn cùng bàn (2 phút).",
          "answer": "Ảnh mới khác T1–T6, đúng nhãn Bút/Cốc.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Ảnh mới chỉ có tác dụng khi AI được dạy lại với bộ ảnh đã đổi."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "<span class=\"hl-action\">Chụp ảnh khác T1–T6.</span>",
        "Đặt đúng nhãn Bút/Cốc.",
        "Ghi số ảnh thêm và lí do."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "folders",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Em đã chọn điều cần sửa. Giờ em thêm ảnh mới.",
      "number": 18,
      "icon": "folder"
    },
    {
      "type": "step",
      "step": 3,
      "time": 0,
      "id": "04-15",
      "title": "Bước 3 — Dạy AI lại",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Dạy AI lại sau khi bổ sung ảnh học.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Dạy lại với bộ ảnh đã đổi; chưa được kết luận kết quả sẽ tốt hơn.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Giữ hai nhãn Bút/Cốc, dùng bộ ảnh đã bổ sung, chưa kết luận kết quả sẽ tốt hơn."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Ảnh mẫu đã đổi. Em cần dạy AI lại. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Dạy AI lại sau khi thêm ảnh học.\nGiữ nguyên tên hai nhóm Bút/Cốc và ghi số ảnh đã thêm.\nThêm ảnh chưa bảo đảm kết quả sẽ tăng. Cần thử lại để biết.",
          "delivery": "Thầy/Cô nhắc em bấm dạy lại rồi chờ xong.",
          "students": "Em làm cá nhân yên lặng (3 phút) → đổi bài với bạn cùng bàn (2 phút).",
          "answer": "Dạy lại, giữ nguyên hai nhãn, chưa kết luận.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Giờ dùng đúng sáu ảnh cũ để biết kết quả đã thay đổi ra sao."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Giữ hai nhãn Bút/Cốc.",
        "Dùng bộ ảnh đã bổ sung.",
        "<span class=\"hl-explain\">Chưa kết luận kết quả sẽ tốt hơn.</span>"
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "folders",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Ảnh mẫu đã đổi. Em cần dạy AI lại.",
      "number": 19,
      "icon": "brain"
    },
    {
      "type": "step",
      "step": 4,
      "time": 0,
      "id": "04-16",
      "title": "Bước 4 — Thử lại cùng bộ ảnh",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thử lại đúng bộ ảnh cũ để so sánh trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "So sánh trên sáu ảnh đã chọn; muốn biết với ảnh khác phải thử thêm.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Thử đúng T1–T6, so số ảnh đúng trước–sau; tăng, bằng hay giảm đều ghi thật."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: AI đã học lại. Em thử đúng sáu tệp cũ. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Thử lại đúng sáu ảnh T1–T6 đã lưu.\nSo số ảnh nhận đúng trước và sau. Kết quả có thể tăng, giữ nguyên hoặc giảm.\nĐây là so sánh trên sáu ảnh đã chọn. Muốn biết với ảnh khác, phải thử thêm.\nDùng cùng sáu tệp giúp so hai lượt trong phạm vi bài học. Sau khi dựa vào chúng để chọn cải tiến, chúng không còn là bằng chứng độc lập cho khả năng tổng quát. Muốn kiểm rộng hơn cần ảnh mới.",
          "delivery": "Thầy/Cô nhắc: cùng một bộ ảnh cho cả hai lượt.",
          "students": "Em làm cá nhân yên lặng (3 phút) → đổi bài với bạn cùng bàn (2 phút).",
          "answer": "Thử đúng T1–T6, ghi số ảnh đúng trước–sau.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Em xem mẫu bảng sáu lượt thử Trước khi sửa."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Thử đúng T1–T6.",
        "So số ảnh đúng trước–sau.",
        "<span class=\"hl-key\">Tăng, bằng hoặc giảm đều ghi thật.</span>"
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "before-after",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "AI đã học lại. Em thử đúng sáu tệp cũ.",
      "number": 20,
      "icon": "check-circle-2"
    },
    {
      "type": "worked",
      "id": "04-16a",
      "v6": true,
      "title": "Mẫu bảng 6 lượt — Lượt Trước khi sửa",
      "theme": "cream",
      "phase": "Luyện tập / Thực hành",
      "scene": "before-after",
      "icon": "list-checks",
      "targetId": "04-17",
      "connector": "Em xem mẫu ba lượt thử Trước khi sửa.",
      "photo": {
        "file": "frame_5_20.jpg",
        "caption": "Ảnh bút đặt nghiêng — AI hay đoán nhầm"
      },
      "worked": {
        "title": "Ba lượt thử Trước khi sửa — điền sẵn",
        "context": "Ảnh thử chụp bút và cốc ở góc nghiêng hoặc hơi xa; AI nhận chưa đúng.",
        "labels": [
          "Lượt T1 — bút nghiêng",
          "Lượt T2 — cốc ngược sáng",
          "Lượt T3 — bút hơi xa"
        ],
        "values": [
          "<span class=\"hl-error\">AI gọi là Cốc → sai</span>",
          "<span class=\"hl-error\">AI gọi là Bút → sai</span>",
          "<span class=\"hl-error\">AI chưa chắc → sai</span>"
        ],
        "why": [
          "Ảnh nghiêng: lúc dạy còn thiếu kiểu ảnh này.",
          "Ngược sáng: AI khó thấy hình dạng cốc.",
          "Ảnh xa: vật nhỏ nên AI nhìn chưa rõ."
        ],
        "question": "Cả ba lượt đều sai vì lí do gì chung?",
        "scene": "before-after"
      },
      "steps3": [
        {
          "step": 1,
          "badge": "Bước 1 · Tình huống gốc",
          "title": "Khi nào AI đoán sai?",
          "text": "Xem ảnh bút nghiêng và cốc ngược sáng: AI gọi sai tên.",
          "sub": "Em chỉ ra chỗ AI nhầm.",
          "kind": "action",
          "icon": "eye"
        }
      ],
      "screen": [],
      "taskLines": [
        "Trong 1 phút, em chỉ ra chỗ AI nhầm ở hai ảnh."
      ],
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách điền ba lượt thử Trước khi sửa.",
        "teacher": "Thầy/Cô chiếu slide, dẫn dắt theo 3 bước và gọi 1–2 em kiểm tra nhanh.",
        "students": "Làm cá nhân yên lặng (3 phút), sau đó đổi bài kiểm tra nhanh với bạn cùng bàn (2 phút).",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Ba lượt đều sai vì lúc dạy thiếu ảnh nghiêng, ngược sáng và ảnh xa.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Thiếu ảnh nghiêng, ngược sáng, ảnh vật hơi xa."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Trước khi sửa gì, em ghi lại ba lượt thử đã sai. Cả lớp xem mẫu.",
          "explanation": "Ba hàng đã điền sẵn, chữ đỏ là chỗ AI gọi sai.\nBút nghiêng, cốc ngược sáng, bút hơi xa đều nhận chưa đúng.\nEm chỉ ra chỗ nhầm chứ chưa cần nêu cách sửa.",
          "delivery": "Thầy/Cô chỉ từng hàng đỏ và đọc to tên nhãn AI gọi sai.",
          "students": "Em làm cá nhân yên lặng (3 phút) → đổi bài với bạn cùng bàn (2 phút).",
          "answer": "AI gọi sai cả ba lượt vì ảnh khác kiểu với ảnh đã dạy.",
          "closing": "Thầy/Cô nhắc: học cách ghi, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Giờ xem phần sau khi dạy thêm ảnh."
        }
      },
      "number": 21
    },
    {
      "type": "worked",
      "id": "04-16b",
      "v6": true,
      "title": "Mẫu bảng 6 lượt — Lượt Sau khi dạy thêm",
      "theme": "cream",
      "phase": "Luyện tập / Thực hành",
      "scene": "before-after",
      "icon": "sparkles",
      "targetId": "04-17",
      "connector": "Em xem mẫu ba lượt thử Sau khi dạy thêm ảnh.",
      "photo": {
        "file": "frame_5_55.jpg",
        "caption": "Cùng kiểu ảnh nghiêng — sau khi dạy thêm"
      },
      "worked": {
        "title": "Ba lượt thử Sau khi sửa — điền sẵn",
        "context": "Chụp thêm ảnh bút và cốc đúng kiểu đang thiếu, dạy AI lại rồi thử đúng sáu ảnh cũ.",
        "labels": [
          "Lượt T1 — bút nghiêng (thử lại)",
          "Lượt T2 — cốc ngược sáng (thử lại)",
          "Lượt T3 — bút hơi xa (thử lại)"
        ],
        "values": [
          "<span class=\"hl-explain\">AI gọi đúng: Bút</span>",
          "<span class=\"hl-explain\">AI gọi đúng: Cốc</span>",
          "<span class=\"hl-explain\">AI gọi đúng: Bút</span>"
        ],
        "why": [
          "Ảnh nghiêng đã có trong bộ ảnh học.",
          "Đã chụp thêm ảnh ngược sáng đúng nhãn.",
          "Ảnh vật xa cũng được bổ sung."
        ],
        "question": "Điền câu kết luận ngắn: Sau khi thêm ___ ảnh ___, số ảnh đúng tăng từ ___ lên ___ trên đúng 6 ảnh thử.",
        "scene": "before-after"
      },
      "steps3": [
        {
          "step": 2,
          "badge": "Bước 2 · Nói dễ hiểu",
          "title": "Vì sao AI khá lên?",
          "text": "<span class=\"hl-explain\">Lúc dạy thiếu ảnh góc nghiêng hoặc ngược sáng.</span>",
          "sub": "Chụp bổ sung đúng kiểu ảnh đang thiếu.",
          "kind": "explain",
          "icon": "lightbulb"
        }
      ],
      "screen": [],
      "taskLines": [
        "Trong 2 phút, em điền câu kết luận mẫu vào nháp."
      ],
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách ghi ba lượt Sau khi sửa và viết câu kết luận ngắn.",
        "teacher": "Thầy/Cô chiếu slide, dẫn dắt theo 3 bước và gọi 1–2 em kiểm tra nhanh.",
        "students": "Làm cá nhân yên lặng (3 phút), sau đó đổi bài kiểm tra nhanh với bạn cùng bàn (2 phút).",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Sau khi thêm ảnh nghiêng và ngược sáng, số ảnh đúng tăng từ 3 lên 6 trên đúng 6 ảnh thử.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Sau khi thêm vài ảnh nghiêng/ngược sáng, số ảnh đúng tăng từ 3 lên 6 trên đúng 6 ảnh thử."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Đây là phần sau. Chữ xanh là chỗ AI đã gọi đúng. Cả lớp xem mẫu.",
          "explanation": "Ba hàng xanh là kết quả tốt hơn sau khi dạy lại.\nCâu kết luận điền từ theo mẫu: thêm ___ ảnh ___, tăng từ ___ lên ___ trên đúng 6 ảnh thử.\nKhông nói 'AI đúng 100%' vì mới thử sáu ảnh.",
          "delivery": "Thầy/Cô đọc câu kết luận mẫu, nhấn các ô trống.",
          "students": "Em làm cá nhân yên lặng (3 phút) → đổi bài với bạn cùng bàn (2 phút).",
          "answer": "Sau khi thêm ảnh nghiêng/ngược sáng, số ảnh đúng tăng từ 3 lên 6 trên đúng 6 ảnh thử.",
          "closing": "Thầy/Cô nhắc: không nói quá chắc khi mới thử sáu ảnh.",
          "transition": "Thầy/Cô nói: Em xem mẫu so kết quả trước và sau đầy đủ."
        }
      },
      "number": 22
    },
    {
      "id": "04-17-mau",
      "type": "worked",
      "v6": true,
      "title": "Mẫu so kết quả trước và sau",
      "theme": "cream",
      "phase": "Luyện tập / Thực hành",
      "scene": "Before-after",
      "worked": {
        "title": "Mẫu so kết quả trước và sau",
        "context": "Ví dụ minh họa. Không phải kết quả của lớp.",
        "labels": [
          "Ảnh T4",
          "Trước bổ sung",
          "Việc đã làm",
          "Sau bổ sung",
          "Câu kết luận"
        ],
        "values": [
          "Cốc nghiêng. Giữ cùng một tệp",
          "<span class=\"hl-error\">AI gọi Bút: chưa đúng</span>",
          "<span class=\"hl-action\">Thêm ảnh cốc nghiêng khác T4</span>",
          "<span class=\"hl-explain\">AI gọi Cốc: đúng với ảnh này</span>",
          "Ở T4, AI hết nhầm sau lần sửa này"
        ],
        "why": [
          "Cùng tệp giúp so hai lượt rõ hơn.",
          "Ảnh học mới không lấy từ bộ thử.",
          "Không suy ra AI đúng mọi ảnh nghiêng."
        ],
        "question": "Em nên điền kết luận nào cho ảnh T4?",
        "scene": "Before-after"
      },
      "targetId": "04-17",
      "screen": [],
      "taskLines": [
        "<span class=\"hl-key\">30 giây</span>: em nghĩ cách điền ô cuối tại chỗ."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách làm trước khi tự thực hiện.",
        "teacher": "Thầy/Cô chiếu slide mẫu, chỉ vào từng ô đã điền sẵn. Nhấn mạnh ô đỏ là lượt sai, ô xanh là lượt đúng sau khi sửa.",
        "students": "Em đọc chú thích và trả lời câu hỏi ô cuối.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "Ở T4, AI hết nhầm sau lần sửa này",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "Ở T4, AI hết nhầm sau lần sửa này"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Ví dụ minh họa. Không phải kết quả của lớp.\nCùng tệp giúp so hai lượt rõ hơn.\nẢnh học mới không lấy từ bộ thử.\nKhông suy ra AI đúng mọi ảnh nghiêng.",
          "delivery": "Thầy/Cô chỉ tay vào ô đỏ và ô xanh để em thấy khác biệt giữa hai lượt.",
          "students": "Em đọc thầm chú thích trong 20 giây.",
          "answer": "Ô cuối điền: Ở T4, AI hết nhầm sau lần sửa này.",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 23,
      "icon": "clipboard-check"
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.2 Điều chỉnh và so sánh",
        "intro": "Trong 3 phút, em làm cá nhân yên lặng trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
        "answers": [
          "So sánh đúng sáu ảnh đã lưu trước và sau. Không trộn những ảnh đó vào ảnh học.",
          "Kết quả có thể tăng, giữ nguyên hoặc giảm. Cần nêu ảnh bổ sung, lí do và số ảnh nhận đúng.",
          "Vì đã dùng bộ T để xem xét điều chỉnh, kết quả trên T không phải đánh giá độc lập cho mọi ảnh mới. Muốn đánh giá tiếp, chuẩn bị thêm ảnh chưa dùng trong quá trình này."
        ],
        "pages": [
          {
            "title": "So sánh ảnh T1–T3",
            "instruction": "Thử lại đúng T1–T3. Đặt kết quả trước và sau cạnh nhau.",
            "headers": [
              "Ảnh",
              "Kết quả trước",
              "Kết quả sau"
            ],
            "rows": [
              [
                "T1: Bút",
                {
                  "label": "Trước, ảnh T1",
                  "key": "04-17-v3-0"
                },
                {
                  "label": "Sau, ảnh T1",
                  "key": "04-17-v3-1"
                }
              ],
              [
                "T2: Bút",
                {
                  "label": "Trước, ảnh T2",
                  "key": "04-17-v3-2"
                },
                {
                  "label": "Sau, ảnh T2",
                  "key": "04-17-v3-3"
                }
              ],
              [
                "T3: Bút",
                {
                  "label": "Trước, ảnh T3",
                  "key": "04-17-v3-4"
                },
                {
                  "label": "Sau, ảnh T3",
                  "key": "04-17-v3-5"
                }
              ]
            ]
          },
          {
            "title": "So sánh ảnh T4–T6",
            "instruction": "Thử lại đúng T4–T6. Không thay ảnh giữa hai lượt.",
            "headers": [
              "Ảnh",
              "Kết quả trước",
              "Kết quả sau"
            ],
            "rows": [
              [
                "T4: Cốc",
                {
                  "label": "Trước, ảnh T4",
                  "key": "04-17-v3-6"
                },
                {
                  "label": "Sau, ảnh T4",
                  "key": "04-17-v3-7"
                }
              ],
              [
                "T5: Cốc",
                {
                  "label": "Trước, ảnh T5",
                  "key": "04-17-v3-8"
                },
                {
                  "label": "Sau, ảnh T5",
                  "key": "04-17-v3-9"
                }
              ],
              [
                "T6: Cốc",
                {
                  "label": "Trước, ảnh T6",
                  "key": "04-17-v3-10"
                },
                {
                  "label": "Sau, ảnh T6",
                  "key": "04-17-v3-11"
                }
              ]
            ]
          },
          {
            "title": "Ghi điều em đã thay đổi",
            "instruction": "Ghi ảnh học mới đã thêm và lí do. Không thêm T1–T6.",
            "fields": [
              {
                "label": "Em thêm ảnh nào? Có bao nhiêu ảnh?",
                "key": "04-17-v3-12"
              },
              {
                "label": "Vì sao chọn bổ sung những ảnh đó?",
                "key": "04-17-v3-13"
              },
              {
                "label": "Em giữ nguyên điều kiện nào khi so sánh?",
                "key": "04-17-v3-14"
              }
            ]
          },
          {
            "title": "Kết luận trước–sau",
            "instruction": "So số đúng hai lượt. Ghi kết luận trong phạm vi sáu ảnh.",
            "fields": [
              {
                "label": "Số ảnh đúng trước và sau là bao nhiêu?",
                "key": "04-17-v3-15"
              },
              {
                "label": "Trong sáu ảnh này, kết quả thay đổi thế nào?",
                "key": "04-17-v3-16"
              },
              {
                "label": "Muốn biết mô hình nhận các ảnh khác ra sao, em cần làm gì tiếp?",
                "key": "04-17-v3-17"
              }
            ]
          }
        ]
      },
      "time": 16,
      "id": "04-17",
      "title": "P4.2 — So sánh hai lượt thử",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Hoàn thành so sánh trước–sau theo các bước trên phiếu.",
        "teacher": "Thầy/Cô nhắc em giữ đúng sáu ảnh T đã lưu, không trộn ảnh học mới vào bộ thử.",
        "students": "Em làm cá nhân yên lặng 3 phút, rồi đổi bài kiểm tra nhanh với bạn cùng bàn 2 phút.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "So sánh đúng sáu ảnh đã lưu trước và sau. Không trộn những ảnh đó vào ảnh học.",
          "Kết quả có thể tăng, giữ nguyên hoặc giảm. Cần nêu ảnh bổ sung, lí do và số ảnh nhận đúng.",
          "Vì đã dùng bộ T để xem xét điều chỉnh, kết quả trên T không phải đánh giá độc lập cho mọi ảnh mới. Muốn đánh giá tiếp, chuẩn bị thêm ảnh chưa dùng trong quá trình này."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
          "explanation": "",
          "delivery": "Thầy/Cô đi quanh lớp, nhắc em ghi rõ ảnh bổ sung và lí do.",
          "students": "Em làm cá nhân 3 phút, sau đó đổi bài với bạn cùng bàn 2 phút.",
          "answer": "Kết luận chỉ trong phạm vi sáu ảnh đã thử.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Em báo cáo điều số liệu cho thấy, kể cả khi kết quả không tăng."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Ghi kết quả sau cải tiến.",
        "Ghi dữ liệu đã thay đổi.",
        "Kết luận trong phạm vi sáu ảnh."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "test",
      "taskLines": [
        "Trong 3 phút, em tự điền trên phiếu.",
        "Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn."
      ],
      "sampleId": "04-17-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 24
    },
    {
      "type": "report",
      "id": "04-18",
      "title": "Kết quả cho phép nói đến đâu?",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Thầy/Cô mời hai em nêu kết quả khác nhau để lớp thấy kết quả có thể không tăng.",
        "students": "Em nhìn bảng ghi của mình và trả lời ba câu hỏi.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã có bảng ghi. Em dùng bảng để giải thích kết quả. Trong 30 giây, em kể một kết quả tại chỗ.",
          "explanation": "Dùng bảng ghi của em để trả lời ba câu hỏi. Bạn khác nêu một điểm cần hỏi thêm.",
          "delivery": "Thầy/Cô ghi nhanh ba câu trả lời lên bảng để lớp cùng thấy.",
          "students": "Em giơ tay kể kết quả của mình trong 30 giây.",
          "answer": "Kết luận chỉ trong phạm vi sáu ảnh đã thử và điều kiện đã ghi.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Bảng trước–sau cho biết phạm vi em đã thử. Em sẽ sửa những câu nói vượt quá phạm vi đó."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Em đã thay đổi gì?",
        "<span class=\"hl-key\">Số đúng</span> thay đổi ra sao?",
        "Điều gì <span class=\"hl-explain\">chưa được kiểm tra</span>?"
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em kể một kết quả tại chỗ."
      ],
      "connector": "Em đã có bảng ghi. Em dùng bảng để giải thích kết quả.",
      "number": 25,
      "icon": "search"
    },
    {
      "type": "divider",
      "id": "04-20",
      "title": "Luyện tập: kết luận vừa đủ",
      "note": {
        "activity": "Luyện tập cá nhân",
        "purpose": "Phát hiện kết luận vượt quá bằng chứng.",
        "teacher": "Thầy/Cô giới thiệu nhanh hoạt động, không giảng dài.",
        "students": "Em đọc tên hoạt động và chuẩn bị phiếu.",
        "report": "Một HS đọc kết luận đã giới hạn phạm vi.",
        "conclusion": "Thử nghiệm nhỏ giúp phát hiện vấn đề, không chứng minh mô hình hoàn hảo.",
        "assessment": "Đạt khi sửa đúng ít nhất 2/3 và không dùng ảnh kiểm thử để tự chứng minh tiến bộ.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em dùng kết quả vừa có để tự kiểm cách hiểu. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô chỉ vào tiêu đề và mời cả lớp đọc to.",
          "students": "Em đọc tên hoạt động.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu sửa một câu nói quá chắc."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Luyện tập / Thực hành",
      "scene": "test",
      "taskLines": [
        "Trong 10 giây, em đọc tên hoạt động trên slide."
      ],
      "connector": "Em dùng kết quả vừa có để tự kiểm cách hiểu.",
      "number": 26,
      "icon": "pencil"
    },
    {
      "id": "04-21-mau",
      "type": "worked",
      "v6": true,
      "title": "Mẫu sửa một câu nói quá chắc",
      "theme": "cream",
      "phase": "Luyện tập / Thực hành",
      "scene": "Test",
      "worked": {
        "title": "Mẫu sửa một câu nói quá chắc",
        "context": "Ví dụ: nhận đúng hai ảnh nghĩa là luôn đúng.",
        "labels": [
          "Câu gốc",
          "Điều đã đo",
          "Điều chưa đo",
          "Câu sửa",
          "Cách kiểm thêm"
        ],
        "values": [
          "<span class=\"hl-error\">AI sẽ luôn nhận đúng</span>",
          "Đúng hai ảnh đã thử",
          "Các ảnh và điều kiện khác",
          "<span class=\"hl-key\">AI đúng hai ảnh này, cần thử thêm</span>",
          "<span class=\"hl-action\">Dùng ảnh mới và so vật thật</span>"
        ],
        "why": [
          "Chỉ kết luận trong phần đã thử.",
          "Đừng biến kết quả nhỏ thành bảo đảm.",
          "Em nêu thêm cách kiểm."
        ],
        "question": "Em kiểm thêm bằng ảnh nào?",
        "scene": "Test"
      },
      "targetId": "04-21",
      "screen": [],
      "taskLines": [
        "Trong 30 giây, em nghĩ cách điền ô cuối tại chỗ."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách làm trước khi tự thực hiện.",
        "teacher": "Thầy/Cô đọc to câu gốc, nhấn mạnh chữ luôn nằm trong ô đỏ.",
        "students": "Em đọc chú thích và nghĩ cách điền ô cuối.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "Dùng ảnh mới và so vật thật",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "Dùng ảnh mới và so vật thật"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Ví dụ: nhận đúng hai ảnh nghĩa là luôn đúng.\nChỉ kết luận trong phần đã thử.\nĐừng biến kết quả nhỏ thành bảo đảm.\nEm nêu thêm cách kiểm.",
          "delivery": "Thầy/Cô chỉ vào ô đỏ và ô xanh để em thấy hai cách nói khác nhau.",
          "students": "Em đọc thầm chú thích trong 20 giây.",
          "answer": "Ô cuối: Dùng ảnh mới và so vật thật.",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 27,
      "icon": "lightbulb"
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.3 Kết luận có căn cứ",
        "intro": "Trong 3 phút, em làm cá nhân yên lặng trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
        "answers": [
          "1. Mô hình nhận đúng sáu ảnh này trong điều kiện đã ghi. Cần thử thêm ảnh mới.",
          "2. Ảnh đã học không đủ chứng minh khả năng với ảnh mới. Giữ ảnh thử ngoài ảnh học.",
          "3. 99% là điểm mô hình hiển thị cho dự đoán ở ảnh này. Không bảo đảm tên vật đúng. Vẫn so với vật thật và thử thêm ảnh mới."
        ],
        "pages": [
          {
            "title": "Sửa kết luận quá mức",
            "instruction": "Viết lại mỗi câu cho phù hợp với những gì đã thử.",
            "fields": [
              {
                "label": "“Đúng cả sáu ảnh nghĩa là mô hình luôn đúng.”",
                "key": "04-21-v3-0"
              },
              {
                "label": "“Dùng ảnh đã học để thử là đủ biết mô hình nhận tốt ảnh mới.”",
                "key": "04-21-v3-1"
              }
            ]
          },
          {
            "title": "Có thể chỉ nhìn phần trăm không?",
            "instruction": "Giải thích bằng một câu.",
            "fields": [
              {
                "label": "Điểm 99% đã bảo đảm tên vật đúng chưa?",
                "key": "04-21-v3-2"
              }
            ]
          }
        ]
      },
      "time": 4,
      "id": "04-21",
      "title": "P4.3A — Sửa kết luận quá mức",
      "note": {
        "activity": "Luyện tập cá nhân",
        "purpose": "Hoàn thành sửa kết luận thiếu căn cứ theo các bước trên phiếu.",
        "teacher": "Thầy/Cô nhắc em ghi rõ phần trăm không thay cho việc đối chiếu vật thật.",
        "students": "Em làm cá nhân yên lặng 3 phút, rồi đổi bài kiểm tra nhanh với bạn cùng bàn 2 phút.",
        "report": "Một HS đọc kết luận đã giới hạn phạm vi.",
        "conclusion": "Thử nghiệm nhỏ giúp phát hiện vấn đề, không chứng minh mô hình hoàn hảo.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "1. Mô hình nhận đúng sáu ảnh này trong điều kiện đã ghi. Cần thử thêm ảnh mới.",
          "2. Ảnh đã học không đủ chứng minh khả năng với ảnh mới. Giữ ảnh thử ngoài ảnh học.",
          "3. 99% là điểm mô hình hiển thị cho dự đoán ở ảnh này. Không bảo đảm tên vật đúng. Vẫn so với vật thật và thử thêm ảnh mới."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
          "explanation": "99% trên một dự đoán là điểm mô hình hiển thị, không phải chứng nhận nhãn đúng hay độ chính xác trên mọi ảnh. Luôn đối chiếu tên vật thật.",
          "delivery": "Thầy/Cô đi quanh, hỏi vài em vì sao giữ chữ cần thử thêm.",
          "students": "Em làm cá nhân 3 phút, sau đó đổi bài với bạn cùng bàn 2 phút.",
          "answer": "Đúng sáu ảnh chưa chứng minh đúng mọi ảnh; 99% vẫn cần đối chiếu vật thật.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Sau khi sửa lời kết luận quá mức, em ghi nhớ cách giữ ảnh thử và so sánh kết quả có căn cứ."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Đúng sáu ảnh ≠ đúng mọi ảnh.",
        "Ảnh đã học chưa đủ để kiểm tra.",
        "99% vẫn cần đối chiếu."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "test",
      "taskLines": [
        "Trong 3 phút, em tự điền trên phiếu.",
        "Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn."
      ],
      "sampleId": "04-21-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 28
    },
    {
      "type": "recap",
      "id": "04-19",
      "title": "Kiến thức cần nhớ",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Thầy/Cô mời ba em, mỗi em giải thích một dòng trên slide.",
        "students": "Em chọn một ý và giải thích trong 30 giây.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Những việc vừa làm giúp em rút ra ba ý. Trong 30 giây, em giải thích một ý tại chỗ.",
          "explanation": "",
          "delivery": "Thầy/Cô chỉ vào từng dòng và mời em giải thích.",
          "students": "Em giơ tay giải thích một ý.",
          "answer": "Ba ý: giữ ảnh thử riêng, so cùng bộ ảnh, không suy rộng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Bảng sáu ảnh còn điều chưa thử. Em chọn một điều kiện và thiết kế cách kiểm tiếp."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "<span class=\"hl-key\">Giữ ảnh thử riêng</span> với ảnh học.",
        "So cùng bộ ảnh <span class=\"hl-action\">trước và sau</span> thay đổi.",
        "Đúng sáu ảnh <span class=\"hl-explain\">chưa chứng minh</span> đúng mọi ảnh."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em giải thích một ý tại chỗ."
      ],
      "connector": "Những việc vừa làm giúp em rút ra ba ý.",
      "number": 29,
      "icon": "award"
    },
    {
      "type": "divider",
      "id": "04-22",
      "title": "Vận dụng: kiểm tra điều còn thiếu",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Đề xuất thử nghiệm tiếp theo có kiểm soát.",
        "teacher": "Thầy/Cô giới thiệu nhanh, không giảng dài.",
        "students": "Em đọc tên hoạt động và chuẩn bị phiếu.",
        "report": "Một HS nêu đề xuất, lớp xác định yếu tố đổi.",
        "conclusion": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
        "assessment": "Nhận xét 6.D2.1 qua đề xuất và lí do, không chỉ dựa vào thao tác máy.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em dùng cách làm vừa học trong một việc mới. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô chỉ vào tiêu đề và mời cả lớp đọc to.",
          "students": "Em đọc tên hoạt động.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu lập phép thử tiếp theo."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Vận dụng",
      "scene": "test",
      "taskLines": [
        "Trong 10 giây, em đọc tên hoạt động trên slide."
      ],
      "connector": "Em dùng cách làm vừa học trong một việc mới.",
      "number": 30,
      "icon": "target"
    },
    {
      "id": "04-22a",
      "type": "worked",
      "v6": true,
      "title": "Bảng sáu lượt — điền hàng còn trống",
      "theme": "cream",
      "phase": "Vận dụng",
      "scene": "Bảng",
      "icon": "list-checks",
      "photo": {
        "file": "frame_9_20.jpg",
        "caption": "Cốc đặt xa, chụp nghiêng — một kiểu ảnh bộ thử còn thiếu."
      },
      "worksheet": {
        "title": "Bảng sáu lượt thử",
        "intro": "Ba hàng đã điền mẫu, ba hàng còn trống em tự điền.",
        "pageTitles": [
          "Lượt 1–3 (đã điền)",
          "Lượt 4–6 (em điền)"
        ],
        "rowCount": 6
      },
      "targetId": "04-23",
      "screen": [],
      "taskLines": [
        "<span class=\"hl-action\">Điền ba hàng trống</span> trong 30 giây tại chỗ."
      ],
      "connector": "Em xem mẫu điền bảng trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách điền bảng sáu lượt trước khi tự làm.",
        "teacher": "Thầy/Cô chỉ vào ba hàng đã điền, nhấn mạnh ô đỏ là lượt đoán sai.",
        "students": "Em đọc bảng và thử điền nhanh ba hàng trống.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Điền đủ sáu lượt mới kết luận được trong phạm vi bộ thử.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Lượt 4: ảnh cốc xa — AI gọi Bút — sai — cần thêm ảnh cốc xa.",
          "Lượt 5: ảnh cốc nghiêng — AI gọi Cốc — đúng.",
          "Lượt 6: ảnh cốc ngược sáng — AI gọi Cốc — đúng."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Đây là bảng sáu lượt thử. Ba hàng đầu đã có bài làm mẫu. Em xem cách điền.",
          "explanation": "Lượt 4: ảnh cốc đặt xa, AI gọi Bút — sai, do thiếu ảnh xa.\nLượt 5, 6: ảnh nghiêng và ngược sáng, AI đúng.\nMỗi hàng ghi rõ ảnh, AI gọi gì, đúng hay sai.",
          "delivery": "Thầy/Cô chỉ vào ô đỏ ở lượt 4 và giải thích vì sao sai.",
          "students": "Em đọc bảng và nghĩ cách điền ba hàng trống.",
          "answer": "Ba hàng trống điền theo mẫu: ảnh, AI gọi gì, đúng hay sai.",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã thấy cách điền. Giờ em tự điền bảng của em."
        }
      },
      "number": 31
    },
    {
      "id": "04-23-mau",
      "type": "worked",
      "v6": true,
      "title": "Mẫu lập phép thử tiếp theo",
      "theme": "cream",
      "phase": "Vận dụng",
      "scene": "Cups",
      "worked": {
        "title": "Mẫu lập phép thử tiếp theo",
        "context": "Ví dụ: bộ thử chưa có cốc chụp từ trên.",
        "labels": [
          "Điều còn thiếu",
          "Ảnh cần tạo",
          "Tên thật",
          "Chỗ lưu",
          "Việc sau khi thử"
        ],
        "values": [
          "<span class=\"hl-key\">Góc chụp từ trên</span>",
          "<span class=\"hl-action\">Ảnh cốc mới, nhìn rõ miệng cốc</span>",
          "Cốc",
          "Để riêng khỏi ảnh dạy AI",
          "<span class=\"hl-explain\">Ghi dự đoán rồi so với cốc thật</span>"
        ],
        "why": [
          "Chọn một điều chưa kiểm.",
          "Lưu ảnh trước để dùng đúng tệp.",
          "Chưa ghi trước AI sẽ đúng."
        ],
        "question": "Sau khi AI đoán, em làm gì?",
        "scene": "Cups"
      },
      "targetId": "04-23",
      "screen": [],
      "taskLines": [
        "Trong 30 giây, em nghĩ cách điền ô cuối tại chỗ."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách làm trước khi tự thực hiện.",
        "teacher": "Thầy/Cô chỉ vào ô điều còn thiếu và hỏi vì sao chọn góc chụp từ trên.",
        "students": "Em đọc chú thích và nghĩ cách điền ô cuối.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "Ghi dự đoán rồi so với cốc thật",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "Ghi dự đoán rồi so với cốc thật"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Ví dụ: bộ thử chưa có cốc chụp từ trên.\nChọn một điều chưa kiểm.\nLưu ảnh trước để dùng đúng tệp.\nChưa ghi trước AI sẽ đúng.",
          "delivery": "Thầy/Cô chỉ vào ô xanh để em thấy việc sau khi thử.",
          "students": "Em đọc thầm chú thích trong 20 giây.",
          "answer": "Ô cuối: Ghi dự đoán rồi so với cốc thật.",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 32,
      "icon": "flask-conical",
      "photo": {
        "file": "cup_dark.png",
        "caption": "Cốc chụp từ trên, ngược sáng — ví dụ ảnh cần bổ sung."
      }
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.3 Kết luận có căn cứ",
        "intro": "Trong 3 phút, em làm cá nhân yên lặng trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
        "answers": [
          "B Chấp nhận thử thêm kiểu cốc, góc hoặc nền. Chỉ ra biến đổi và nhãn thật."
        ],
        "pages": [
          {
            "title": "Đề xuất cách thử tiếp",
            "instruction": "Chọn một điều kiện chưa thử ở lớp.",
            "fields": [
              {
                "label": "Em muốn thử vật hoặc điều kiện nào?",
                "key": "04-23-v3-0"
              },
              {
                "label": "Em thay đổi gì và giữ nguyên gì?",
                "key": "04-23-v3-1"
              },
              {
                "label": "Em so kết quả với tên đúng nào của đồ vật?",
                "key": "04-23-v3-2"
              }
            ]
          }
        ]
      },
      "time": 3,
      "id": "04-23",
      "title": "P4.3B — Thiết kế lần thử tiếp",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Hoàn thành thiết kế phép thử tiếp theo theo các bước trên phiếu.",
        "teacher": "Thầy/Cô nhắc em chỉ chọn một điều kiện chưa thử để giữ phép thử nhỏ.",
        "students": "Em làm cá nhân yên lặng 3 phút, rồi đổi bài kiểm tra nhanh với bạn cùng bàn 2 phút.",
        "report": "Một HS nêu đề xuất, lớp xác định yếu tố đổi.",
        "conclusion": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "B Chấp nhận thử thêm kiểu cốc, góc hoặc nền. Chỉ ra biến đổi và nhãn thật."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
          "explanation": "",
          "delivery": "Thầy/Cô đi quanh, hỏi vì sao em chọn điều kiện đó.",
          "students": "Em làm cá nhân 3 phút, sau đó đổi bài với bạn cùng bàn 2 phút.",
          "answer": "Chọn một điều kiện chưa thử, chuẩn bị ảnh mới, nêu cách đối chiếu.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Giữ bảng thử và kế hoạch. Chúng làm minh chứng cho điều em thực sự biết."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Chọn điều kiện chưa thử.",
        "Chuẩn bị ảnh mới.",
        "Nêu cách đối chiếu kết quả."
      ],
      "phase": "Vận dụng",
      "scene": "test",
      "taskLines": [
        "Trong 3 phút, em tự điền trên phiếu.",
        "Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn."
      ],
      "sampleId": "04-23-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 33
    },
    {
      "type": "task",
      "id": "04-24a",
      "title": "Tự kiểm 3 phút — Đổi bài bạn cùng bàn 2 phút",
      "theme": "cream",
      "phase": "Vận dụng",
      "scene": "test",
      "icon": "users",
      "v6": true,
      "screen": [
        "<span class=\"hl-action\">Làm cá nhân yên lặng</span> (3 phút).",
        "<span class=\"hl-action\">Đổi bài kiểm tra nhanh</span> với bạn cùng bàn (2 phút).",
        "Ghi một điều <span class=\"hl-key\">học được</span> từ bài bạn."
      ],
      "taskLines": [
        "Trong 3 phút, em tự đọc lại phiếu của mình.",
        "Trong 2 phút, em đổi bài với bạn cùng bàn và ghi một nhận xét."
      ],
      "connector": "Chống ồn: em làm yên lặng, chỉ trao đổi với bạn cùng bàn.",
      "note": {
        "activity": "Tự kiểm và đổi bài",
        "purpose": "Rà lại bài trước khi nộp và học từ bài bạn.",
        "teacher": "Thầy/Cô giữ trật tự, nhắc đúng thời gian 3 phút và 2 phút.",
        "students": "Em làm cá nhân 3 phút, sau đó đổi bài với bạn cùng bàn 2 phút.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Tự kiểm và đổi bài giúp phát hiện chỗ còn thiếu trước khi nộp.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Mỗi em ghi ít nhất một điều học được từ bài bạn."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Trước khi nộp, em tự kiểm 3 phút. Sau đó đổi bài với bạn cùng bàn 2 phút.",
          "explanation": "Ba phút đầu em đọc lại phiếu và sửa chỗ trống.\nHai phút sau em đổi bài, chỉ ghi một nhận xét ngắn cho bạn.",
          "delivery": "Thầy/Cô bấm giờ và nhắc khi chuyển sang bước đổi bài.",
          "students": "Em làm cá nhân 3 phút, rồi đổi bài với bạn cùng bàn 2 phút.",
          "answer": "Mỗi em ghi một điều học được từ bài bạn.",
          "closing": "Thầy/Cô nhắc: giữ trật tự, chỉ trao đổi với bạn cùng bàn.",
          "transition": "Thầy/Cô nói: Em giữ bài đã kiểm để nộp và chuẩn bị bước tiếp."
        }
      },
      "number": 34
    },
    {
      "type": "home",
      "id": "04-24",
      "title": "Lưu kết quả, nêu điều chưa kiểm",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Đề xuất thử nghiệm tiếp theo có kiểm soát.",
        "teacher": "Thầy/Cô nhắc em ghi ba câu ngắn và giữ bảng làm minh chứng.",
        "students": "Em ghi một quan sát vào vở sau giờ học.",
        "report": "Một HS nêu đề xuất, lớp xác định yếu tố đổi.",
        "conclusion": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
        "assessment": "Nhận xét 6.D2.1 qua đề xuất và lí do, không chỉ dựa vào thao tác máy.",
        "answers": [
          "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em giữ kết quả hôm nay để chuẩn bị bước tiếp. Sau giờ học, em ghi một quan sát vào vở.",
          "explanation": "Viết ba câu: em đã thay đổi gì, kết quả thử cho thấy gì, điều gì chưa thể khẳng định. Giữ bảng làm minh chứng cho dự án sau này.",
          "delivery": "Thầy/Cô đọc chậm ba câu hỏi trên slide.",
          "students": "Em ghi nhanh ba câu vào vở.",
          "answer": "Ba câu: đã thay đổi gì, quan sát được gì, điều chưa khẳng định.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Với hình ảnh, em đối chiếu vật thật. Với câu trả lời học tập, nguồn kiểm sẽ là gì?"
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Em đã thay đổi gì?",
        "Em đã quan sát được gì?",
        "<span class=\"hl-explain\">Điều gì chưa thể khẳng định?</span>"
      ],
      "phase": "Vận dụng",
      "scene": "test",
      "taskLines": [
        "Sau giờ học, em ghi một quan sát vào vở."
      ],
      "connector": "Em giữ kết quả hôm nay để chuẩn bị bước tiếp.",
      "number": 35,
      "icon": "folder"
    }
  ],
  "rubric": [],
  "evidence": [
    [
      "Đọc kết quả và lí giải",
      "6.3.TC1a",
      "Mô tả mô hình và nguyên nhân có thể gây sai.",
      "P4.1, P4.3 cá nhân",
      "Dẫn được một dòng dữ liệu; không khẳng định nguyên nhân khi chưa đủ bằng chứng."
    ],
    [
      "Điều chỉnh và thử lại",
      "6.2.TC1b",
      "Bổ sung dữ liệu đúng nhãn, huấn luyện lại.",
      "P4.2 và quan sát thao tác",
      "Có thử lại ngoài tập huấn luyện; kết quả không tăng vẫn được ghi nhận đúng quy trình."
    ]
  ],
  "revision": "V6 — biên tập sư phạm và làm mẫu"
};
