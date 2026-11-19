window.AI6_LESSON={
  "id": 3,
  "title": "Bài 3. Dạy AI nhận biết đồ vật bằng Teachable Machine",
  "mode": "Trực tiếp tại phòng Tin học",
  "count": 40,
  "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
  "materials": "Thầy/Cô chuẩn bị học liệu có sẵn trong gói. Chỉ dùng dữ liệu mẫu. Thử công cụ trước giờ học.",
  "alternatives": "Thiếu thiết bị, em quan sát Thầy/Cô. Em vẫn ghi rõ cách thực hiện.",
  "video": {
    "index": 5,
    "title": "AI: How Computer Vision Works",
    "start": 85,
    "end": 110,
    "poster": "frame_5_95.jpg",
    "url": "https://contentful-videos.code.org/90t6bu6vlf76/5LHEqBfj39mMaxu0jlpFBQ/e8c81cbd51865522b439643e03a24d53/videoplayback.mp4",
    "question": "Quan sát điểm ảnh và cách biểu diễn hình. Muốn phân biệt bút với cốc, cần những ví dụ nào?",
    "local": "code-5.mp4"
  },
  "outcome": "Bộ ảnh Bút/Cốc và bảng ghi hai lần thử mới.",
  "slides": [
    {
      "type": "cover",
      "id": "03-01",
      "title": "Bài 3. Dạy AI nhận biết đồ vật bằng Teachable Machine",
      "note": {
        "activity": "Khởi động",
        "purpose": "Dự đoán nguyên nhân một mẫu mới khó nhận dạng.",
        "teacher": "Chiếu slide đầu, đọc to đầu bài, mời các em đọc theo.",
        "students": "Đọc đầu bài, quan sát ảnh cốc.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của AI.",
        "assessment": "Ghi nhận các em đã nêu yếu tố dữ liệu. Hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [
          "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp. Phải thử thực tế mới biết dự đoán của AI."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em bắt đầu bằng một điều muốn tìm hiểu. Trong 10 giây, em đọc đầu bài trên slide.",
          "explanation": "",
          "delivery": "Chiếu slide, đọc chậm đầu bài, chỉ vào ảnh cốc minh họa.",
          "students": "Cả lớp đọc đồng thanh đầu bài.",
          "answer": "Ảnh rõ và đa dạng giúp AI nhận tốt hơn.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Hôm nay em chuyển từ sơ đồ sang thao tác thật. Cùng xem cần chuẩn bị, chạy thử và ghi lại những gì."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Khởi động",
      "scene": "cups",
      "taskLines": [
        "Trong 10 giây, em đọc đầu bài trên slide."
      ],
      "connector": "Em bắt đầu bằng một điều muốn tìm hiểu.",
      "number": 1
    },
    {
      "type": "goals",
      "id": "03-02",
      "title": "Hôm nay em làm được gì?",
      "note": {
        "activity": "Khởi động",
        "purpose": "Xác định mục tiêu và việc cần làm trong tiết.",
        "teacher": "Chiếu mục tiêu, đọc từng dòng, hỏi các em chọn mục tiêu nào.",
        "students": "Chọn một mục tiêu, đọc thầm trong 20 giây.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ba việc: chuẩn bị ảnh đúng nhãn, dạy AI, thử và ghi kết quả.",
        "assessment": "Ghi nhận các em đã nêu yếu tố dữ liệu. Hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [
          "Chuẩn bị ảnh Bút/Cốc đúng nhãn.",
          "Dạy AI bằng thao tác trên Teachable Machine.",
          "Thử ảnh mới và ghi hai lần thử."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Đầu bài cho biết chủ đề. Em xem việc cần làm. Trong 20 giây, em chọn một mục tiêu trên slide.",
          "explanation": "Chuẩn bị ảnh Bút/Cốc và đưa vào đúng nhóm.\nTạo dự án, thêm ảnh, dạy AI và chạy thử.\nGhi hai lần thử mới. Nêu ít nhất hai yếu tố ảnh có thể ảnh hưởng kết quả.",
          "delivery": "Đọc to ba mục tiêu, chỉ tay vào từng dòng.",
          "students": "Chọn một mục tiêu em muốn làm tốt nhất.",
          "answer": "Em chọn mục tiêu dạy AI biết nhận đồ vật.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Em bắt đầu từ câu hỏi: “Cùng chiếc cốc, khác bức ảnh”."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Chuẩn bị ảnh đúng nhãn.",
        "<span class=\"hl-action\">Dạy AI</span> bằng Teachable Machine.",
        "Thử ảnh mới, ghi kết quả."
      ],
      "phase": "Khởi động",
      "scene": "cups",
      "taskLines": [
        "Trong 20 giây, em chọn một mục tiêu trên slide."
      ],
      "connector": "Đầu bài cho biết chủ đề. Em xem việc cần làm.",
      "number": 2
    },
    {
      "type": "divider",
      "id": "03-03",
      "title": "Khởi động",
      "note": {
        "activity": "Khởi động",
        "purpose": "Chuyển từ tiết trước sang tình huống hai bức ảnh khác nhau.",
        "teacher": "Chiếu divider, đọc to tên hoạt động.",
        "students": "Đọc tên hoạt động.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Bài học bắt đầu bằng quan sát hai bức ảnh cùng một chiếc cốc.",
        "assessment": "Ghi nhận các em đã nêu yếu tố dữ liệu. Hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Từ việc quen thuộc, em thử nêu câu hỏi. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Chiếu divider, đọc tên hoạt động, chuyển slide nhanh.",
          "students": "Đọc tên hoạt động.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Nhìn hai ảnh cốc. Tìm điều kiện chụp khác nhau."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Khởi động",
      "scene": "cups",
      "taskLines": [
        "Trong 10 giây, em đọc tên hoạt động trên slide."
      ],
      "connector": "Từ việc quen thuộc, em thử nêu câu hỏi.",
      "number": 3
    },
    {
      "type": "scenario",
      "time": 2,
      "id": "03-04",
      "title": "Cùng chiếc cốc, khác bức ảnh",
      "note": {
        "activity": "Khởi động",
        "purpose": "Dự đoán ảnh nào giúp máy nhận rõ hơn.",
        "teacher": "Chiếu hai ảnh cạnh nhau, hỏi các em chọn ảnh rõ hơn.",
        "students": "Giơ tay chọn ảnh và nêu lý do ngắn.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ảnh rõ, đủ sáng giúp AI nhận tốt hơn.",
        "assessment": "Ghi nhận các em đã nêu yếu tố dữ liệu. Hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [
          "Ảnh sáng rõ giúp AI nhận tốt hơn.",
          "Muốn nhận nhiều kiểu cốc, cần nhiều ảnh ở điều kiện khác nhau."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Từ mục tiêu hôm nay, em xem một tình huống. Trong 30 giây, em tự chọn câu trả lời tại chỗ.",
          "explanation": "Hai ảnh cùng chụp một chiếc cốc nhưng có ánh sáng khác nhau. Ảnh nào giúp em nhìn đồ vật rõ hơn? Muốn máy nhận nhiều kiểu cốc, cần chuẩn bị những ảnh nào?",
          "delivery": "Chỉ tay vào hai ảnh, đặt câu hỏi, mời 2–3 em trả lời.",
          "students": "Chọn ảnh và nêu lý do ngắn.",
          "answer": "Ảnh sáng rõ ràng hơn. Muốn AI nhận nhiều kiểu, cần nhiều ảnh.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Máy nhận ảnh bằng dữ liệu số. Em tìm hiểu điều đó trước khi chuẩn bị bộ ảnh."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Ảnh nào <span class=\"hl-key\">nhìn rõ hơn</span>?",
        "Muốn nhận nhiều kiểu cốc, cần ảnh nào?"
      ],
      "phase": "Khởi động",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em tự chọn câu trả lời tại chỗ."
      ],
      "connector": "Từ mục tiêu hôm nay, em xem một tình huống.",
      "number": 4,
      "icon": "images",
      "photo": {
        "file": "cup_clear.png",
        "caption": "Cốc chụp sáng, rõ nét"
      },
      "photo2": {
        "file": "cup_dark.png",
        "caption": "Cốc chụp tối, mờ hơn"
      }
    },
    {
      "type": "concept",
      "id": "03-04a",
      "title": "Cốc này, ảnh kia",
      "icon": "camera",
      "photo": {
        "file": "cup_clear.png",
        "caption": "Cùng một cốc, ánh sáng tốt"
      },
      "note": {
        "activity": "Khám phá · Tách ý 1",
        "purpose": "Hiểu AI học từ hình ảnh, không học từ tên gọi.",
        "teacher": "Chỉ vào ảnh cốc sáng, hỏi các em thấy gì.",
        "students": "Quan sát, nêu đặc điểm ảnh 30 giây.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "AI học từ các điểm ảnh, không đọc nhãn chữ.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "AI học từ điểm ảnh, không học từ tên đồ vật."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em nhìn kỹ bức ảnh này. Trong 20 giây, em nói một đặc điểm em thấy.",
          "explanation": "Máy học từ hình ảnh, không học từ tên gọi. Mỗi bức ảnh là một dãy số về màu và độ sáng.",
          "delivery": "Chỉ vào ảnh, hỏi, ghi nhanh 1–2 câu trả lời lên bảng.",
          "students": "Nêu đặc điểm: cốc trắng, nền sáng, rõ nét.",
          "answer": "Ảnh là dữ liệu số về màu và độ sáng.",
          "closing": "Thầy/Cô chốt: AI học từ hình ảnh.",
          "transition": "Thầy/Cô nối ý: Cùng chiếc cốc này, nếu chụp tối sẽ khác thế nào?"
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Cùng một cốc.",
        "Máy <span class=\"hl-explain\">học từ hình ảnh</span>, không học từ tên.",
        "Mỗi ảnh là một dãy số."
      ],
      "phase": "Khám phá",
      "scene": "cups",
      "taskLines": [
        "Trong 20 giây, em nêu một đặc điểm của ảnh."
      ],
      "connector": "Em nhìn kỹ bức ảnh này.",
      "number": 5
    },
    {
      "type": "concept",
      "id": "03-04b",
      "title": "Cùng cốc, hai kiểu nhìn",
      "icon": "sun",
      "photo": {
        "file": "cup_dark.png",
        "caption": "Cùng cốc, chụp tối hơn"
      },
      "note": {
        "activity": "Khám phá · Tách ý 2",
        "purpose": "Thấy ảnh khác điều kiện ảnh hưởng kết quả nhận dạng.",
        "teacher": "So sánh hai ảnh cốc, hỏi vì sao máy có thể đoán khác.",
        "students": "So sánh và nêu 1 lý do.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Ánh sáng và nền ảnh hưởng lớn đến kết quả nhận dạng.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Ánh sáng và nền ảnh hưởng kết quả nhận dạng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Cùng chiếc cốc, nhưng ảnh này tối hơn. Trong 30 giây, em đoán xem AI sẽ gặp khó khăn gì.",
          "explanation": "AI phân biệt 2 nhóm đồ vật dựa trên đặc điểm ảnh. Ảnh tối khác nhiều so với ảnh sáng nên AI dễ đoán nhầm.",
          "delivery": "Chiếu song song hai ảnh, hỏi, mời 2 em trả lời.",
          "students": "Nêu: ảnh tối khó nhận, dễ đoán nhầm.",
          "answer": "Ánh sáng khác làm AI dễ đoán nhầm.",
          "closing": "Thầy/Cô chốt: cần ảnh ở nhiều điều kiện.",
          "transition": "Thầy/Cô nối ý: Vậy em cần thu ảnh ở đâu, bằng công cụ nào?"
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Cùng cốc, khác ánh sáng.",
        "Ảnh tối dễ <span class=\"hl-action\">làm AI đoán nhầm</span>.",
        "Cần ảnh ở nhiều điều kiện."
      ],
      "phase": "Khám phá",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em đoán AI gặp khó gì."
      ],
      "connector": "Cùng chiếc cốc, nhưng ảnh này tối hơn.",
      "number": 6
    },
    {
      "type": "steps3",
      "id": "03-04c",
      "title": "Mở Teachable Machine",
      "icon": "folder-open",
      "photo": {
        "file": "tm_projects.jpg",
        "caption": "Trang dự án của Teachable Machine"
      },
      "steps3": [
        {
          "step": 1,
          "badge": "Bước 1 · Vào trang",
          "title": "Mở trình duyệt",
          "text": "Em gõ địa chỉ Teachable Machine vào trình duyệt.",
          "sub": "Chờ trang tải xong.",
          "kind": "action",
          "icon": "link"
        },
        {
          "step": 2,
          "badge": "Bước 2 · Bấm nút",
          "title": "Bấm <span class=\"hl-action\">Get Started</span>",
          "text": "Nút màu xanh ở giữa trang.",
          "sub": "Chỉ một lần bấm.",
          "kind": "action",
          "icon": "mouse-pointer-click"
        },
        {
          "step": 3,
          "badge": "Bước 3 · Kiểm tra",
          "title": "Trang Dự án hiện ra",
          "text": "Em thấy các <span class=\"hl-key\">dự án mẫu</span> sẵn có.",
          "sub": "Chưa bấm gì thêm.",
          "kind": "key",
          "icon": "check-circle-2"
        }
      ],
      "note": {
        "activity": "Khám phá · Thao tác mẫu 1",
        "purpose": "Biết cách mở trang chủ Teachable Machine.",
        "teacher": "Chiếu tm_projects.jpg, chỉ vào nút Get Started, làm mẫu chậm.",
        "students": "Nhìn màn hình, không thao tác trong 30 giây mẫu.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Mở được trang Dự án là bước đầu tiên.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Vào trang web, bấm Get Started, tới trang Dự án."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Các em nhìn màn hình, thầy/cô làm mẫu. Trong 30 giây, các em im lặng xem.",
          "explanation": "Bước 1 mở trình duyệt. Bước 2 bấm Get Started. Bước 3 thấy trang Dự án.",
          "delivery": "Làm chậm từng bước, chỉ tay vào nút trên ảnh.",
          "students": "Ghi 1–2 dòng vào vở.",
          "answer": "Đã mở được trang Dự án.",
          "closing": "Thầy/Cô chốt: nhớ nút Get Started.",
          "transition": "Thầy/Cô nối ý: Tiếp theo là chọn loại dự án."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [],
      "phase": "Khám phá",
      "scene": "tool",
      "taskLines": [
        "Trong 30 giây, em im lặng xem mẫu."
      ],
      "connector": "Thầy/Cô làm mẫu, các em xem.",
      "number": 7
    },
    {
      "type": "steps3",
      "id": "03-04d",
      "title": "Chọn dự án Image Project",
      "icon": "image",
      "photo": {
        "file": "tm_editor.jpg",
        "caption": "Giao diện chọn loại dự án"
      },
      "steps3": [
        {
          "step": 1,
          "badge": "Bước 1 · Nhìn ba lựa chọn",
          "title": "Ba ô dự án",
          "text": "Image, Audio, Pose.",
          "sub": "Em chọn ô đầu tiên.",
          "kind": "action",
          "icon": "layers"
        },
        {
          "step": 2,
          "badge": "Bước 2 · Bấm ô",
          "title": "Bấm <span class=\"hl-action\">Image Project</span>",
          "text": "Đây là dự án dạy AI nhận ảnh.",
          "sub": "Chưa bấm ô khác.",
          "kind": "action",
          "icon": "mouse-pointer-click"
        },
        {
          "step": 3,
          "badge": "Bước 3 · Kiểm tra",
          "title": "Khung dự án hiện ra",
          "text": "Em thấy ô <span class=\"hl-key\">Standard</span> và <span class=\"hl-key\">Embedded</span>.",
          "sub": "Chọn Standard cho máy tính.",
          "kind": "key",
          "icon": "check-circle-2"
        }
      ],
      "note": {
        "activity": "Khám phá · Thao tác mẫu 2",
        "purpose": "Chọn đúng loại dự án nhận ảnh.",
        "teacher": "Chiếu tm_editor.jpg, chỉ vào ô Image Project.",
        "students": "Xem mẫu im lặng 30 giây, ghi chú.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Image Project là dự án dạy AI nhận ảnh.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Bấm Image Project, sau đó chọn Standard."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Đây là bước quan trọng. Trong 30 giây, em im lặng xem thầy/cô làm.",
          "explanation": "Image Project dùng để dạy AI nhận ảnh. Bấm vào ô này. Sau đó chọn Standard.",
          "delivery": "Chỉ rõ ô Image Project, đọc to tên ô.",
          "students": "Ghi tên ô vào vở.",
          "answer": "Đã chọn Image Project.",
          "closing": "Thầy/Cô chốt: nhớ chọn Image Project.",
          "transition": "Thầy/Cô nối ý: Trong dự án, chọn Standard để làm trên máy tính."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [],
      "phase": "Khám phá",
      "scene": "tool",
      "taskLines": [
        "Trong 30 giây, em im lặng xem mẫu."
      ],
      "connector": "Đây là bước quan trọng.",
      "number": 8
    },
    {
      "type": "steps3",
      "id": "03-04e",
      "title": "Vào mô hình tiêu chuẩn",
      "icon": "mouse-pointer-click",
      "photo": {
        "file": "frame_3_20.jpg",
        "caption": "Khung chọn Standard"
      },
      "photo2": {
        "file": "frame_3_55.jpg",
        "caption": "Giao diện dự án Standard mở ra"
      },
      "steps3": [
        {
          "step": 1,
          "badge": "Bước 1 · Chọn loại",
          "title": "Bấm <span class=\"hl-action\">Standard</span>",
          "text": "Dành cho máy tính.",
          "sub": "Không chọn Embedded.",
          "kind": "action",
          "icon": "cpu"
        },
        {
          "step": 2,
          "badge": "Bước 2 · Chờ mở",
          "title": "Giao diện dự án hiện ra",
          "text": "Có <span class=\"hl-key\">Class 1</span> và <span class=\"hl-key\">Class 2</span>.",
          "sub": "Hai nhóm đồ vật.",
          "kind": "key",
          "icon": "layers"
        },
        {
          "step": 3,
          "badge": "Bước 3 · Sẵn sàng",
          "title": "Thấy nút <span class=\"hl-action\">Train Model</span>",
          "text": "Sẵn sàng thêm ảnh.",
          "sub": "Chưa bấm Train.",
          "kind": "action",
          "icon": "check-circle-2"
        }
      ],
      "note": {
        "activity": "Khám phá · Thao tác mẫu 3",
        "purpose": "Vào được giao diện dự án với hai nhóm Class.",
        "teacher": "Chiếu frame_3_20 rồi frame_3_55, chỉ rõ Class 1, Class 2, Train Model.",
        "students": "Xem, ghi chú tên các nút.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Giao diện có hai Class và nút Train Model.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Bấm Standard, thấy Class 1 và Class 2, thấy Train Model."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Đây là bước cuối của phần mở dự án. Trong 30 giây, em im lặng xem.",
          "explanation": "Standard dành cho máy tính. Giao diện có hai Class và nút Train có nghĩa là dạy AI.",
          "delivery": "Chỉ rõ từng nút trên ảnh, đọc to tên.",
          "students": "Ghi ba thứ: Class 1, Class 2, Train Model.",
          "answer": "Đã vào giao diện dự án Standard.",
          "closing": "Thầy/Cô chốt: hai Class = hai nhóm, Train = dạy AI.",
          "transition": "Thầy/Cô nối ý: Giờ em tìm hiểu dữ liệu ảnh trước khi đưa vào hai nhóm này."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [],
      "phase": "Khám phá",
      "scene": "tool",
      "taskLines": [
        "Trong 30 giây, em im lặng xem mẫu."
      ],
      "connector": "Bước cuối của phần mở dự án.",
      "number": 9
    },
    {
      "type": "divider",
      "id": "03-05",
      "title": "Khám phá: chuẩn bị dữ liệu ảnh",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Chuyển sang phần chuẩn bị ảnh cho hai nhóm.",
        "teacher": "Chiếu divider, đọc to tên hoạt động.",
        "students": "Đọc tên hoạt động.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Chuẩn bị ảnh đúng nhãn là bước quan trọng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a. Yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Câu hỏi vừa nêu dẫn em tới cách AI làm việc. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Chiếu divider, đọc chậm tên hoạt động.",
          "students": "Đọc tên hoạt động.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Chuẩn bị hai đồ vật và xác định tên đúng cho hai nhóm ảnh."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Khám phá",
      "scene": "cups",
      "taskLines": [
        "Trong 10 giây, em đọc tên hoạt động trên slide."
      ],
      "connector": "Câu hỏi vừa nêu dẫn em tới cách AI làm việc.",
      "number": 10
    },
    {
      "type": "question",
      "poster": "frame_5_95.jpg",
      "id": "03-06",
      "title": "Máy nhìn ảnh bằng gì?",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Hiểu ảnh số gồm các điểm ảnh có giá trị số.",
        "teacher": "Chiếu câu hỏi, mời các em đoán trước khi xem video.",
        "students": "Đọc câu hỏi, đoán nhanh tại chỗ.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Ảnh số gồm các điểm ảnh, máy xử lý giá trị số.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a. Yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Ảnh số gồm nhiều điểm ảnh nhỏ; máy xử lý các giá trị số của ảnh.",
          "Cần ảnh của cả hai nhóm đồ vật, chụp ở nhiều điều kiện."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Trước khi xem, em đọc câu hỏi cần tìm. Trong 15 giây, em đọc câu hỏi trên slide.",
          "explanation": "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Quan sát video: máy nhận ảnh bằng các giá trị số ra sao?",
          "delivery": "Chiếu câu hỏi, mời 2 em đoán.",
          "students": "Đoán nhanh: điểm ảnh, màu sắc.",
          "answer": "Điểm ảnh và giá trị số.",
          "closing": "Thầy/Cô chốt: ảnh là dữ liệu số.",
          "transition": "Thầy/Cô nối ý: Hãy xem video để nối hình ảnh quen thuộc với cách máy xử lí ảnh."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Ảnh số gồm những <span class=\"hl-key\">điểm ảnh</span> nhỏ.",
        "Máy xử lí <span class=\"hl-explain\">giá trị số</span> của ảnh.",
        "Cần những ảnh nào cho hai nhóm?"
      ],
      "phase": "Khám phá",
      "scene": "video",
      "taskLines": [
        "Trong 15 giây, em đọc câu hỏi trên slide."
      ],
      "connector": "Trước khi xem, em đọc câu hỏi cần tìm.",
      "number": 11,
      "icon": "search"
    },
    {
      "type": "video",
      "video": {
        "index": 5,
        "title": "AI: How Computer Vision Works",
        "start": 85,
        "end": 110,
        "poster": "frame_5_95.jpg",
        "url": "https://contentful-videos.code.org/90t6bu6vlf76/5LHEqBfj39mMaxu0jlpFBQ/e8c81cbd51865522b439643e03a24d53/videoplayback.mp4",
        "question": "Tìm cách ảnh được biểu diễn. Nhắc lại dữ liệu cần cho Bút/Cốc.",
        "local": "code-5.mp4"
      },
      "id": "03-07",
      "title": "Từ điểm ảnh đến nhận dạng",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Xem video để hiểu máy xử lý ảnh số.",
        "teacher": "Bật video, dừng ở đoạn quan trọng, hỏi lại câu hỏi.",
        "students": "Xem video, ghi 1 ví dụ vào vở.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Ảnh số biểu diễn bằng các giá trị số của điểm ảnh.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a. Yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Ảnh số gồm nhiều điểm ảnh, mỗi điểm có giá trị số.",
          "Cần ảnh của cả hai nhóm, đúng nhãn, nhiều điều kiện."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Giữ câu hỏi vừa đọc. Em tìm ví dụ trong phim. Trong 25 giây, em ghi một ví dụ vào vở.",
          "explanation": "",
          "delivery": "Bật video, dừng sau 1 phút để hỏi.",
          "students": "Xem và ghi 1 ví dụ.",
          "answer": "Điểm ảnh có giá trị số.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Biết máy nhận dữ liệu ảnh rồi, em chuẩn bị các nhóm ảnh đúng nhãn."
        }
      },
      "theme": "cream",
      "fallback": "Ảnh số được biểu diễn bằng các giá trị số của điểm ảnh. Nhiệm vụ cần ảnh ví dụ đúng nhãn và phù hợp.",
      "v6": true,
      "screen": [],
      "phase": "Khám phá",
      "scene": "video",
      "taskLines": [
        "Trong 25 giây, em ghi một ví dụ vào vở."
      ],
      "connector": "Giữ câu hỏi vừa đọc. Em tìm ví dụ trong phim.",
      "number": 12
    },
    {
      "type": "concept",
      "id": "03-08",
      "title": "Chuẩn bị hai nhóm ảnh",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Phân biệt khái niệm Class và tiêu chí ảnh.",
        "teacher": "Giải thích Class = nhóm ảnh có chung nhãn.",
        "students": "Chỉ vào ảnh, gọi tên nhóm.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh rõ, đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a. Yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Từ ví dụ vừa có, em đặt tên cho điều đã thấy. Trong 30 giây, em chỉ một ý trên hình.",
          "explanation": "Hai nhóm ảnh: một Class là một nhóm ảnh có cùng nhãn. Em tạo hai nhóm. Cho cả hai loại xuất hiện ở nền tương tự để AI không học nhầm nền.",
          "delivery": "Chỉ vào ảnh, đọc to tên hai nhóm.",
          "students": "Chỉ tay vào ảnh minh họa.",
          "answer": "Hai nhóm ảnh có nhãn riêng, cùng điều kiện chụp.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu lên kế hoạch ảnh."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Một nhóm <span class=\"hl-key\">nhóm 1</span>, một nhóm <span class=\"hl-key\">nhóm 2</span>.",
        "Ảnh rõ vật, đúng <span class=\"hl-explain\">nhãn</span>.",
        "Hai nhóm có điều kiện chụp tương tự."
      ],
      "phase": "Khám phá",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em chỉ một ý trên hình."
      ],
      "connector": "Từ ví dụ vừa có, em đặt tên cho điều đã thấy.",
      "number": 13,
      "icon": "layers",
      "photo": {
        "file": "cup_clear.png",
        "caption": "Ảnh nhóm 1"
      },
      "photo2": {
        "file": "cup_dark.png",
        "caption": "Ảnh nhóm 2"
      }
    },
    {
      "id": "03-09-mau",
      "type": "worked",
      "v6": true,
      "title": "Lên kế hoạch ảnh bằng một mẫu",
      "theme": "cream",
      "phase": "Khám phá",
      "scene": "worksheet",
      "worked": {
        "title": "Lên kế hoạch ảnh bằng một mẫu",
        "context": "Mẫu chụp ảnh bút chì và thước kẻ.",
        "labels": [
          "Hai nhóm ảnh",
          "Số ảnh dự kiến",
          "Góc chụp",
          "Nền ảnh",
          "Thông tin không chụp"
        ],
        "values": [
          "Bút chì / Thước kẻ",
          "Khoảng 15–20 ảnh mỗi nhóm",
          "Chính diện và hơi nghiêng",
          "Hai vật có nền tương tự",
          "Mặt người và thông tin riêng"
        ],
        "why": [
          "Tên nhóm nói rõ vật cần phân biệt.",
          "Đổi góc giúp ảnh bớt giống hệt.",
          "Số ảnh <span class=\"hl-explain\">không bảo đảm AI luôn đúng</span>."
        ],
        "question": "Em nên tránh chụp thêm thông tin nào?",
        "scene": "worksheet"
      },
      "targetId": "03-09",
      "screen": [
        "Mẫu giúp em <span class=\"hl-key\">lên kế hoạch ảnh</span> gọn gàng.",
        "Điền đủ năm ô, tránh <span class=\"hl-error\">thông tin riêng</span>."
      ],
      "taskLines": [
        "Trong 30 giây, em nghĩ cách điền ô cuối."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn mẫu trước khi tự làm phiếu.",
        "teacher": "Chiếu mẫu, đọc từng dòng, nhấn mạnh ảnh rõ và đa dạng.",
        "students": "Xem mẫu, ghi 1 ý quan trọng.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "Mẫu gồm nhóm, số ảnh, góc, nền, điều cần tránh.",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "Mặt người và thông tin riêng."
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Mẫu chụp ảnh hai nhóm đồ vật. Tên nhóm nói rõ vật. Đổi góc giúp ảnh bớt giống hệt. Số ảnh không bảo đảm AI luôn đúng.",
          "delivery": "Đọc từng dòng, chỉ tay vào ảnh.",
          "students": "Ghi một ý quan trọng.",
          "answer": "Mặt người và thông tin riêng.",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tách mẫu thành hai bước nhỏ."
        }
      },
      "number": 14,
      "icon": "file-text",
      "photo": {
        "file": "cup_clear.png",
        "caption": "Ảnh mẫu 1"
      }
    },
    {
      "type": "steps3",
      "id": "03-09a",
      "title": "Bước 1: Đặt tên hai nhóm",
      "icon": "tags",
      "photo": {
        "file": "frame_3_20.jpg",
        "caption": "Khung Class 1, Class 2"
      },
      "steps3": [
        {
          "step": 1,
          "badge": "Bước 1 · Tên nhóm",
          "title": "Đặt tên nhóm 1",
          "text": "Bấm Class 1, gõ <span class=\"hl-key\">Bút chì</span>.",
          "sub": "Tên ngắn, rõ vật.",
          "kind": "action",
          "icon": "pencil"
        },
        {
          "step": 2,
          "badge": "Bước 2 · Tên nhóm",
          "title": "Đặt tên nhóm 2",
          "text": "Bấm Class 2, gõ <span class=\"hl-key\">Thước kẻ</span>.",
          "sub": "Không trùng tên nhau.",
          "kind": "action",
          "icon": "ruler"
        },
        {
          "step": 3,
          "badge": "Bước 3 · Số ảnh",
          "title": "Vì sao cần nhiều ảnh",
          "text": "Mỗi nhóm <span class=\"hl-explain\">15–20 ảnh</span>, nhiều góc.",
          "sub": "Ảnh đa dạng, AI học tốt hơn.",
          "kind": "explain",
          "icon": "sparkles"
        }
      ],
      "note": {
        "activity": "Thầy/Cô làm mẫu · Mẫu 1",
        "purpose": "Biết đặt tên hai nhóm và số ảnh cần thiết.",
        "teacher": "Chiếu frame_3_20, gõ mẫu tên nhóm, nhấn mạnh 15–20 ảnh/góc khác nhau.",
        "students": "Xem im lặng 30 giây, ghi tên hai nhóm.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Tên nhóm rõ ràng, mỗi nhóm 15–20 ảnh nhiều góc.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Nhóm Bút chì và nhóm Thước kẻ.",
          "15–20 ảnh mỗi nhóm, nhiều góc khác nhau."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em xem cách đặt tên. Trong 30 giây, em im lặng xem.",
          "explanation": "Bấm Class 1 gõ Bút chì. Bấm Class 2 gõ Thước kẻ. Mỗi nhóm cần khoảng 15–20 tấm ảnh chụp ở nhiều góc khác nhau để AI học tốt.",
          "delivery": "Gõ mẫu chậm, đọc to từng tên.",
          "students": "Ghi tên hai nhóm vào vở.",
          "answer": "Bút chì và Thước kẻ, mỗi nhóm 15–20 ảnh.",
          "closing": "Thầy/Cô chốt: tên ngắn, số ảnh đủ, góc đa dạng.",
          "transition": "Thầy/Cô nối ý: Em xem mẫu thử hai lần trước khi mở máy."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [],
      "phase": "Khám phá",
      "scene": "steps",
      "taskLines": [
        "Em im lặng xem mẫu 30 giây."
      ],
      "connector": "Em xem cách đặt tên nhóm.",
      "number": 15
    },
    {
      "type": "worked",
      "id": "03-09b",
      "v6": true,
      "title": "Bảng ghi chép 2 lần thử",
      "icon": "clipboard-check",
      "photo": {
        "file": "frame_3_55.jpg",
        "caption": "Giao diện sau khi đặt tên nhóm"
      },
      "note": {
        "activity": "Thầy/Cô làm mẫu · Mẫu 2",
        "purpose": "Biết cách ghi bảng kết quả 2 lần thử.",
        "teacher": "Chiếu bảng 2 lần thử, điền mẫu, chỉ lần đoán sai.",
        "students": "Xem im lặng 30 giây, ghi lại 2 dòng.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Lần 1 đúng 98%, lần 2 đoán nhầm vì ảnh thử chưa từng học.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Lần 1: Bút chì → đúng 98%. Lần 2: Cục tẩy → đoán nhầm thành Thước kẻ.",
          "Vì cục tẩy chưa từng có trong bộ ảnh dạy AI."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Đây là bảng ghi chép. Trong 30 giây, em im lặng xem thầy/cô điền.",
          "explanation": "Lần 1 đưa bút chì vào, AI đoán đúng 98 phần trăm. Lần 2 đưa cục tẩy vào, AI đoán nhầm thành thước kẻ vì cục tẩy chưa từng có trong bộ ảnh học.",
          "delivery": "Chỉ tay vào từng dòng, nhấn mạnh từ 'đoán nhầm'.",
          "students": "Ghi hai dòng mẫu vào vở.",
          "answer": "Lần 1 đúng 98%, lần 2 sai vì ảnh chưa học.",
          "closing": "Thầy/Cô nhắc: ghi cả lần sai, đó là dữ liệu quý.",
          "transition": "Thầy/Cô nối ý: Em sẵn sàng tự làm phiếu kế hoạch."
        }
      },
      "theme": "cream",
      "phase": "Khám phá",
      "scene": "worksheet",
      "screen": [
        "Em xem <span class=\"hl-key\">bảng ghi chép</span> hai lần thử."
      ],
      "worked": {
        "title": "Bảng ghi chép 2 lần thử",
        "context": "Mẫu điền sẵn cho hai lần thử.",
        "labels": [
          "Lần 1 · Đồ vật",
          "Lần 1 · Kết quả",
          "Lần 2 · Đồ vật",
          "Lần 2 · Kết quả",
          "Vì sao lần 2 sai"
        ],
        "values": [
          "Bút chì",
          "<span class=\"hl-key\">Đoán đúng 98%</span>",
          "Cục tẩy",
          "<span class=\"hl-error\">Đoán nhầm: Thước kẻ</span>",
          "<span class=\"hl-explain\">Ảnh thử chưa có trong bộ ảnh học</span>"
        ],
        "why": [
          "<span class=\"hl-action\">Đoán đúng cao là tín hiệu tốt.</span>",
          "Đoán nhầm vì ảnh thử chưa từng xuất hiện."
        ],
        "question": "Lần 2 sai vì ảnh thử thế nào?",
        "scene": "worksheet"
      },
      "targetId": "03-09",
      "taskLines": [
        "Trong 30 giây, em im lặng xem mẫu điền."
      ],
      "connector": "Đây là bảng ghi chép kết quả.",
      "number": 16
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.1 Kế hoạch dữ liệu ảnh",
        "intro": "Trong 3 phút, em làm cá nhân yên lặng trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
        "answers": [
          "Bốn yếu tố: ánh sáng, góc chụp, hình nền, độ nét. Loại/chụp lại ảnh không thấy đủ vật hoặc gán nhãn sai. Không phải mọi ảnh khó đều phải bỏ nếu nó đại diện điều kiện thực tế và còn nhận biết được.",
          "Cho cả hai lớp xuất hiện ở các nền/điều kiện phù hợp tương tự. Giữ vật thể rõ. Số lượng ghi theo thực tế, 20–30 chỉ là gợi ý khởi điểm quản lí thời gian."
        ],
        "pages": [
          {
            "title": "Lập kế hoạch chụp ảnh",
            "instruction": "Dự kiến số ảnh Bút/Cốc. Cập nhật số thật sau khi chụp.",
            "headers": [
              "Nhóm ảnh",
              "Số ảnh dự kiến",
              "Số ảnh thực tế"
            ],
            "rows": [
              [
                "Bút",
                {
                  "label": "Số ảnh bút dự kiến",
                  "key": "03-09-v3-0"
                },
                {
                  "label": "Số ảnh bút thực tế",
                  "key": "03-09-v3-1"
                }
              ],
              [
                "Cốc",
                {
                  "label": "Số ảnh cốc dự kiến",
                  "key": "03-09-v3-2"
                },
                {
                  "label": "Số ảnh cốc thực tế",
                  "key": "03-09-v3-3"
                }
              ]
            ],
            "example": "Có thể bắt đầu với khoảng 20–30 ảnh mỗi nhóm. Số ảnh này không bảo đảm mô hình sẽ nhận đúng."
          },
          {
            "title": "Chọn điều kiện chụp",
            "instruction": "Chọn góc, ánh sáng và nền tương tự cho cả hai loại vật.",
            "fields": [
              {
                "label": "Em sẽ thay đổi góc chụp và ánh sáng thế nào?",
                "key": "03-09-v3-4"
              },
              {
                "label": "Ảnh nào cần chụp lại hoặc chuyển sang đúng nhóm? Vì sao?",
                "key": "03-09-v3-5"
              },
              {
                "label": "Vì sao không nên chỉ chụp bút trên nền xanh và cốc trên nền đỏ?",
                "key": "03-09-v3-6"
              }
            ]
          }
        ]
      },
      "time": 5,
      "id": "03-09",
      "title": "P3.1 — Lên kế hoạch chụp ảnh",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Hoàn thành chuẩn bị bộ ảnh theo các bước trên phiếu.",
        "teacher": "Phát phiếu, nhắc 3 phút cá nhân rồi 2 phút đổi bài.",
        "students": "Làm cá nhân yên lặng 3 phút, đổi bài 2 phút.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "Bốn yếu tố: ánh sáng, góc chụp, hình nền, độ nét. Loại ảnh sai nhãn hoặc quá mờ.",
          "Cho cả hai nhóm xuất hiện ở điều kiện tương tự. Số lượng 20–30 chỉ là gợi ý."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "explanation": "",
          "delivery": "Phát phiếu, bấm giờ 3 phút, sau đó 2 phút đổi bài.",
          "students": "Làm cá nhân yên lặng, sau đó đổi bài kiểm tra nhanh.",
          "answer": "Đã điền đủ 4 yếu tố.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Em kiểm lại kế hoạch và nhãn trước khi đưa ảnh vào công cụ."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Dự kiến số ảnh mỗi nhóm.",
        "Chọn góc, ánh sáng và nền.",
        "Chỉ chụp <span class=\"hl-key\">đồ vật</span>."
      ],
      "phase": "Khám phá",
      "scene": "worksheet",
      "taskLines": [
        "Trong 3 phút, em tự điền trên phiếu.",
        "Trong 2 phút, em so kết quả với bạn cùng bàn."
      ],
      "sampleId": "03-09-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 17
    },
    {
      "type": "conclusion",
      "id": "03-10",
      "title": "Bộ ảnh đã sẵn sàng chưa?",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Tự kiểm bộ ảnh trước khi đưa vào công cụ.",
        "teacher": "Chiếu checklist, mời các em tự chấm.",
        "students": "Tự kiểm bộ ảnh, giơ tay nếu đạt.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Ảnh đúng nhãn, rõ vật, đa dạng điều kiện là đủ điều kiện.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a. Yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Đúng vật, đúng nhãn, vật rõ, có nhiều điều kiện chụp."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em so kết quả để rút ra điều có căn cứ. Trong 30 giây, em nêu một căn cứ tại chỗ.",
          "explanation": "Đặt ảnh vào đúng nhóm, giữ vật rõ và chụp ở nhiều điều kiện. Nhiều ảnh giống hệt nhau chưa chắc giúp AI nhận tốt ảnh khác.",
          "delivery": "Đọc từng dòng checklist, mời giơ tay.",
          "students": "Tự chấm bộ ảnh của mình.",
          "answer": "Đúng nhãn, rõ vật, nhiều điều kiện.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Khi bộ ảnh đạt yêu cầu, em bắt đầu tạo mô hình bằng công cụ."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "<span class=\"hl-action\">Đúng vật</span> và đúng nhãn?",
        "Vật có <span class=\"hl-key\">nhìn rõ</span> không?",
        "Có ảnh ở nhiều điều kiện phù hợp?"
      ],
      "phase": "Khám phá",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em nêu một căn cứ tại chỗ."
      ],
      "connector": "Em so kết quả để rút ra điều có căn cứ.",
      "number": 18,
      "icon": "check-circle-2",
      "photo": {
        "file": "cup_dark.png",
        "caption": "Ảnh bộ dữ liệu đã chọn"
      }
    },
    {
      "type": "divider",
      "id": "03-11",
      "title": "Thực hành: tạo và thử AI nhận biết đồ vật",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo AI phân biệt 2 nhóm đồ vật và ghi dự đoán với ảnh mới.",
        "teacher": "Thầy/Cô chiếu slide, yêu cầu học sinh đọc to tên hoạt động trong 10 giây, không giảng thêm.",
        "students": "Học sinh đọc tên hoạt động, ghi mục tiêu vào vở.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo AI phân biệt 2 nhóm đồ vật. Kết quả phụ thuộc dữ liệu; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem ví dụ. Giờ em thử theo từng bước. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô chiếu slide, giữ 10 giây im lặng cho học sinh đọc.",
          "students": "Học sinh đọc tên hoạt động và ghi mục tiêu.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu ba bước dạy AI qua hình ảnh."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Luyện tập / Thực hành",
      "scene": "cups",
      "taskLines": [
        "Trong 10 giây, em đọc tên hoạt động trên slide."
      ],
      "connector": "Em đã xem ví dụ. Giờ em thử theo từng bước.",
      "number": 19
    },
    {
      "id": "03-12-mau",
      "type": "worked",
      "v6": true,
      "title": "Ba bước dạy AI qua hình ảnh",
      "theme": "cream",
      "phase": "Luyện tập / Thực hành",
      "scene": "Pencil-ruler",
      "worked": {
        "title": "Ba bước dạy AI qua hình ảnh",
        "context": "Mẫu: Bút chì/Thước kẻ. Bài em: Bút/Cốc.",
        "labels": [
          "1. Tạo hai nhóm",
          "2. Thêm ảnh mẫu",
          "3. Dạy AI",
          "Ảnh mới để thử",
          "Căn cứ kiểm"
        ],
        "values": [
          "Đặt tên Bút chì và Thước kẻ",
          "Đưa ảnh vào đúng tên nhóm",
          "Bấm <span class=\"hl-action\">Train Model</span> và chờ",
          "Giữ riêng ảnh chưa dùng dạy AI",
          "So tên AI với đồ vật thật"
        ],
        "why": [
          "Ghi tên trước giúp tránh bỏ nhầm ảnh.",
          "Train Model bắt đầu quá trình máy học.",
          "Ảnh mới giúp em kiểm cách AI đoán."
        ],
        "question": "Em dùng điều gì để kiểm tên AI?",
        "scene": "Pencil-ruler"
      },
      "targetId": "03-12",
      "screen": [],
      "taskLines": [
        "Trong 30 giây, em nghĩ cách điền ô cuối tại chỗ."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách làm trước khi tự thực hiện.",
        "teacher": "Thầy/Cô chiếu mẫu, chỉ vào từng ô, đọc chú thích vì sao. Không cho học sinh nói trong 30 giây đọc mẫu.",
        "students": "Học sinh đọc thầm 30 giây, ghi lại ô cuối vào nháp.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "So tên AI với đồ vật thật là căn cứ kiểm.",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "So tên AI với đồ vật thật"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Mẫu: Bút chì/Thước kẻ. Bài em: Bút/Cốc.\nGhi tên trước giúp tránh bỏ nhầm ảnh.\nTrain Model bắt đầu quá trình máy học.\nẢnh mới giúp em kiểm cách AI đoán.",
          "delivery": "Thầy/Cô chỉ lần lượt 5 ô, đọc to nội dung từng ô.",
          "students": "Học sinh đọc thầm, không nói, ghi ô cuối.",
          "answer": "So tên AI với đồ vật thật.",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 20,
      "icon": "list-checks"
    },
    {
      "type": "task",
      "id": "03-12",
      "title": "Tạo AI Bút/Cốc",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo AI phân biệt 2 nhóm đồ vật và ghi dự đoán với ảnh mới.",
        "teacher": "Thầy/Cô chia lớp theo máy, nhắc lưu dự án bằng mã nhóm. Theo dõi tiến độ 11 phút.",
        "students": "Học sinh làm cá nhân yên lặng trên máy, ghi kết quả vào vở.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo AI phân biệt 2 nhóm đồ vật. Một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 11 phút, em tạo và thử AI Bút/Cốc trên máy.",
          "explanation": "Tạo dự án Bút/Cốc. Có thể bắt đầu với khoảng 20–30 ảnh mỗi nhóm, rồi thử bằng hai ảnh mới.\n20–30 ảnh mỗi nhóm chỉ là điểm bắt đầu thực hành, không phải số lượng bảo đảm chất lượng. Điều kiện và nhãn ảnh vẫn cần kiểm.",
          "delivery": "Thầy/Cô đi từng máy, nhắc học sinh kiểm nhãn ảnh trước khi bấm Train Model.",
          "students": "Học sinh làm cá nhân yên lặng, ghi kết quả 2 lần thử.",
          "answer": "AI phân biệt theo nhãn ảnh em đã gán, không theo tên gọi.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Bước đầu là mở đúng loại dự án nhận dạng ảnh."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "<span class=\"hl-action\">Thêm ảnh</span> vào hai nhóm.",
        "Dạy AI và thử hai ảnh mới.",
        "Ghi kết quả, lưu dự án."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "cups",
      "taskLines": [
        "Trong 11 phút, em tạo và thử AI Bút/Cốc trên máy."
      ],
      "sampleId": "03-12-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 21,
      "icon": "play",
      "photo": {
        "file": "cup_clear.png",
        "caption": "Chiếc cốc trong — một nhóm đồ vật để AI học"
      }
    },
    {
      "type": "step",
      "step": 1,
      "time": 0,
      "id": "03-12a",
      "title": "Bước 1 — Mở trang Teachable Machine",
      "icon": "folder",
      "photo": {
        "file": "tm_projects.jpg",
        "caption": "Trang dự án Teachable Machine"
      },
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Mở đúng trang công cụ trước khi tạo dự án ảnh.",
        "teacher": "Thầy/Cô chiếu ảnh tm_projects.jpg, chỉ nút Get Started. Học sinh đọc 30 giây im lặng rồi làm theo.",
        "students": "Học sinh mở trình duyệt, vào trang Teachable Machine.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Mở đúng trang là bước đầu để tạo dự án nhận dạng ảnh.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Bấm Get Started trên trang Teachable Machine."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em mở trình duyệt. Trong 30 giây, em đọc ảnh trên slide.",
          "explanation": "Vào trang Teachable Machine. Bấm Get Started (Bắt đầu) để mở danh sách loại dự án.",
          "delivery": "Thầy/Cô chỉ nút Get Started trên ảnh chiếu.",
          "students": "Học sinh mở trang, im lặng đọc 30 giây, rồi làm theo.",
          "answer": "Bấm Get Started.",
          "closing": "Thầy/Cô kiểm nhanh: máy nào đã mở được trang?",
          "transition": "Thầy/Cô nói: Đã mở trang. Giờ em chọn đúng loại dự án ảnh."
        }
      },
      "theme": "cream",
      "highlight": 1,
      "v6": true,
      "screen": [
        "Vào trang Teachable Machine.",
        "Bấm <span class=\"hl-action\">Get Started</span>.",
        "Chờ danh sách loại dự án hiện ra."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 30 giây, em đọc ảnh rồi bấm Get Started."
      ],
      "connector": "Có ảnh mẫu rồi, em mở đúng trang công cụ.",
      "number": 22
    },
    {
      "type": "step",
      "step": 2,
      "time": 0,
      "id": "03-12b",
      "title": "Bước 2 — Chọn Image Project",
      "icon": "image",
      "photo": {
        "file": "tm_editor.jpg",
        "caption": "Trang soạn dự án ảnh của Teachable Machine"
      },
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Chọn đúng loại dự án nhận dạng ảnh.",
        "teacher": "Thầy/Cô chiếu tm_editor.jpg, chỉ khung Image Project. Nhắc học sinh chọn Standard Image Model nếu có.",
        "students": "Học sinh bấm Image Project, chọn mô hình ảnh tiêu chuẩn.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Image Project là loại dự án dùng để dạy AI nhận biết đồ vật qua ảnh.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Chọn Image Project, sau đó chọn mô hình ảnh tiêu chuẩn."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Danh sách đã hiện. Em chọn ô Image Project. Trong 30 giây, em đọc ảnh trên slide.",
          "explanation": "Image Project là dự án nhận dạng ảnh. Chọn Standard Image Model (mô hình ảnh tiêu chuẩn) nếu có lựa chọn.",
          "delivery": "Thầy/Cô chỉ từng ô trong danh sách trên ảnh chiếu.",
          "students": "Học sinh bấm Image Project, chọn mô hình tiêu chuẩn.",
          "answer": "Image Project → Standard Image Model.",
          "closing": "Thầy/Cô kiểm nhanh: máy nào đã vào khung soạn dự án ảnh?",
          "transition": "Thầy/Cô nói: Vào khung soạn rồi, giờ em đặt tên hai nhóm ảnh."
        }
      },
      "theme": "cream",
      "highlight": 2,
      "v6": true,
      "screen": [
        "Chọn ô <span class=\"hl-key\">Image Project</span>.",
        "Chọn mô hình ảnh tiêu chuẩn nếu có.",
        "Chờ khung soạn dự án hiện ra."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 30 giây, em đọc ảnh rồi chọn Image Project."
      ],
      "connector": "Đã mở trang. Giờ em chọn đúng loại dự án ảnh.",
      "number": 23
    },
    {
      "type": "step",
      "step": 3,
      "time": 0,
      "id": "03-12c",
      "title": "Bước 3 — Đặt tên hai nhóm ảnh",
      "icon": "target",
      "photo": {
        "file": "frame_3_20.jpg",
        "caption": "Khung đặt tên nhóm (Class) trong dự án ảnh"
      },
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Đặt tên nhóm rõ ràng trước khi thêm ảnh mẫu.",
        "teacher": "Thầy/Cô chiếu frame_3_20 và frame_3_55, chỉ ô tên Class 1, Class 2. Nhắc đổi tên trước khi thêm ảnh.",
        "students": "Học sinh đổi Class 1 thành Bút, Class 2 thành Cốc.",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Đặt tên nhóm trước giúp tránh bỏ nhầm ảnh vào sai nhóm.",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Đổi Class 1 thành Bút, Class 2 thành Cốc."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Khung soạn đã mở. Em đổi tên hai nhóm trước. Trong 30 giây, em đọc ảnh trên slide.",
          "explanation": "Mỗi dự án có sẵn Class 1 và Class 2. Em bấm vào tên để đổi thành tên đồ vật thật của mình, ví dụ Bút và Cốc.",
          "delivery": "Thầy/Cô chỉ vào ô Class 1, Class 2 trên ảnh chiếu.",
          "students": "Học sinh đổi tên hai nhóm theo yêu cầu.",
          "answer": "Class 1 → Bút; Class 2 → Cốc.",
          "closing": "Thầy/Cô kiểm nhanh: máy nào đã đổi đúng tên hai nhóm?",
          "transition": "Thầy/Cô nói: Tên đã rõ. Giờ em nhìn mẫu trước khi mở máy thật."
        }
      },
      "theme": "cream",
      "highlight": 3,
      "v6": true,
      "screen": [
        "Bấm vào ô tên nhóm.",
        "Đổi <span class=\"hl-action\">Class 1 thành Bút</span>.",
        "Đổi Class 2 thành Cốc."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 30 giây, em đọc ảnh rồi đổi tên hai nhóm."
      ],
      "connector": "Khung soạn đã mở. Em đổi tên hai nhóm trước.",
      "number": 24
    },
    {
      "type": "task",
      "step": 1,
      "time": 0,
      "id": "03-13",
      "title": "Bước 1 — Mở dự án ảnh",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Mở dự án ảnh đúng cách trên máy học sinh.",
        "teacher": "Thầy/Cô quan sát từng máy, nhắc chỉ cấp camera khi được hướng dẫn. Có thể dùng bộ ảnh tải lên.",
        "students": "Học sinh mở dự án ảnh trên máy theo hướng dẫn.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Mở đúng dự án ảnh là điều kiện để thêm ảnh mẫu và dạy AI.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Teachable Machine → Get Started → Image Project."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Có ảnh mẫu rồi, em mở đúng dự án ảnh. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Teachable Machine → Get Started → Image Project.\nChọn mô hình ảnh tiêu chuẩn nếu có lựa chọn.\nChỉ cấp camera khi được Thầy/Cô hướng dẫn. Có thể dùng bộ ảnh tải lên.",
          "delivery": "Thầy/Cô đi từng máy, xác nhận học sinh đã vào đúng dự án ảnh.",
          "students": "Học sinh làm trên máy, giơ tay khi xong.",
          "answer": "Teachable Machine → Get Started → Image Project.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Đã có dự án ảnh, em đặt tên hai nhóm trước khi thêm dữ liệu."
        }
      },
      "theme": "cream",
      "highlight": 1,
      "v6": true,
      "screen": [
        "Mở Teachable Machine.",
        "Chọn <span class=\"hl-action\">Image Project</span>.",
        "Chọn mô hình ảnh tiêu chuẩn nếu có."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Có ảnh mẫu rồi, em mở đúng dự án ảnh.",
      "number": 25,
      "icon": "book-open",
      "photo": {
        "file": "tm_book_ui.png",
        "caption": "Giao diện chọn dự án trong Teachable Machine"
      }
    },
    {
      "type": "task",
      "step": 2,
      "time": 0,
      "id": "03-14",
      "title": "Bước 2 — Thêm ảnh đúng nhóm",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Đưa ảnh vào đúng tên nhóm, dùng nhiều góc chụp.",
        "teacher": "Thầy/Cô nhắc dùng nền giống nhau cho cả hai loại vật. Kiểm nhanh nhãn ảnh từng máy.",
        "students": "Học sinh đổi tên nhóm, thêm ảnh vào đúng nhóm.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Ảnh đúng nhãn và đa dạng góc chụp giúp AI học tốt hơn.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Đổi Class 1 thành Bút, Class 2 thành Cốc; thêm ảnh vào đúng nhóm."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Dự án đã mở. Em đặt tên rồi thêm ảnh. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Hai nhóm ảnh (Class): Bút và Cốc.\nĐổi Class 1 và Class 2 thành Bút và Cốc. Đưa ảnh vào đúng nhóm.\nDùng nhiều góc chụp. Dùng các nền tương tự cho cả hai loại vật.",
          "delivery": "Thầy/Cô đi từng máy, kiểm học sinh đã đổi tên trước khi thêm ảnh.",
          "students": "Học sinh đổi tên, thêm ảnh mẫu vào đúng nhóm.",
          "answer": "Bút vào nhóm Bút, Cốc vào nhóm Cốc.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Dừng lại kiểm ảnh và nhãn một lần nữa trước khi bấm dạy AI."
        }
      },
      "theme": "cream",
      "highlight": 2,
      "v6": true,
      "screen": [
        "Đổi Class 1 thành Bút.",
        "Đổi Class 2 thành Cốc.",
        "<span class=\"hl-action\">Thêm ảnh</span> vào đúng nhóm."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Dự án đã mở. Em đặt tên rồi thêm ảnh.",
      "number": 26,
      "icon": "camera",
      "photo": {
        "file": "frame_3_95.jpg",
        "caption": "Ảnh chụp đồ vật đưa vào đúng nhóm mẫu"
      }
    },
    {
      "type": "task",
      "step": 3,
      "time": 0,
      "id": "03-15",
      "title": "Bước 3 — Kiểm rồi dạy AI",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Kiểm ảnh và nhãn trước khi dạy AI.",
        "teacher": "Thầy/Cô nhắc học sinh bấm Train Model chỉ sau khi kiểm ảnh. Giữ trang hoạt động trong lúc chờ.",
        "students": "Học sinh kiểm ảnh, sửa nhãn sai, bấm Train Model.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Ảnh đúng nhãn giúp AI học đúng; ảnh sai nhãn làm AI đoán nhầm.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Sửa ảnh sai nhãn, bỏ ảnh mờ, rồi bấm Train Model."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Ảnh đã đủ. Em kiểm trước khi dạy AI. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Chọn Train Model sau khi kiểm tra.\nLoại/chụp lại ảnh không thấy đủ vật hoặc sai nhãn.\nGiữ trang hoạt động và chờ dạy AI hoàn tất.",
          "delivery": "Thầy/Cô nhắc to: kiểm nhãn ảnh trước khi bấm Train Model.",
          "students": "Học sinh kiểm ảnh, sửa nhãn, bấm Train Model.",
          "answer": "Kiểm nhãn → bấm Train Model → chờ.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Dạy AI xong chưa chứng minh nhận đúng. Em phải thử ảnh chưa dùng để học."
        }
      },
      "theme": "cream",
      "highlight": 3,
      "v6": true,
      "screen": [
        "Sửa ảnh sai nhãn.",
        "Bỏ hoặc chụp lại ảnh không rõ vật.",
        "Bấm <span class=\"hl-action\">Train Model</span> và chờ."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Ảnh đã đủ. Em kiểm trước khi dạy AI.",
      "number": 27,
      "icon": "check-circle-2",
      "photo": {
        "file": "frame_5_20.jpg",
        "caption": "Kiểm ảnh và nhãn trước khi bấm Train Model"
      }
    },
    {
      "type": "task",
      "step": 4,
      "time": 0,
      "id": "03-16",
      "title": "Bước 4 — Thử mới và lưu",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Thử ảnh chưa dùng và lưu dự án đúng mã nhóm.",
        "teacher": "Thầy/Cô đã thử trước menu Download project as file. Nhắc phân biệt với Export Model. Không có kết quả sẵn cho học sinh chép.",
        "students": "Học sinh thử 1 ảnh Bút, 1 ảnh Cốc mới, ghi dự đoán, lưu dự án.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Ảnh chưa dùng để học là căn cứ kiểm AI. Lưu dự án bằng mã nhóm để tiết sau mở lại.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Thử ảnh mới, ghi dự đoán, Download project as file."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: AI học xong. Em thử ảnh mới rồi lưu. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Trong Preview, thử một ảnh mới của mỗi nhóm.\nGhi dự đoán cho một ảnh Bút và một ảnh Cốc chưa dùng để học.\nMở menu góc trái → Download project as file. Lưu bằng mã nhóm.\nTiết sau: Open project from file, chọn tệp đã lưu và dạy AI lại khi cần. Giữ riêng bộ ảnh Bút/Cốc.\nMenu lưu dự án đã được đối chiếu ở V4: Download project as file. Mở lại bằng Open project from file. Thầy/Cô thử trước trên phiên bản đang dùng. Phân biệt với Export Model. Không có sẵn kết quả dạy AI cho các em chép.",
          "delivery": "Thầy/Cô đi từng máy, kiểm học sinh đã lưu đúng tên tệp.",
          "students": "Học sinh thử ảnh mới, ghi dự đoán, lưu dự án.",
          "answer": "Download project as file, đặt tên theo mã nhóm.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu ghi mẫu hai lượt thử."
        }
      },
      "theme": "cream",
      "highlight": 4,
      "v6": true,
      "screen": [
        "Thử một ảnh Bút, một ảnh Cốc mới.",
        "So dự đoán với vật thật.",
        "<span class=\"hl-action\">Lưu dự án</span> và giữ bộ ảnh."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "AI học xong. Em thử ảnh mới rồi lưu.",
      "number": 28,
      "icon": "save",
      "photo": {
        "file": "frame_6_20.jpg",
        "caption": "Thử ảnh mới và lưu dự án"
      }
    },
    {
      "id": "03-17-mau",
      "type": "worked",
      "v6": true,
      "title": "Điền mẫu 80% — hai lượt thử",
      "theme": "cream",
      "phase": "Luyện tập / Thực hành",
      "scene": "Test",
      "worked": {
        "title": "Điền mẫu 80% — hai lượt thử",
        "context": "Bảng điền gần đủ. Em chỉ nghĩ ô cuối.",
        "labels": [
          "Lượt 1: ảnh vào",
          "Lượt 1: AI gọi tên",
          "Lượt 1: đối chiếu",
          "Lượt 2: ảnh vào",
          "Lượt 2: AI gọi tên"
        ],
        "values": [
          "Ảnh bút chì đặt thẳng",
          "Bút chì",
          "AI gọi đúng vật thật",
          "Ảnh cục tẩy ngoài hai nhóm",
          "Thước kẻ"
        ],
        "why": [
          "Ảnh học và ảnh thử đều ghi lại.",
          "Tên AI và tên vật thật ghi riêng.",
          "Vật lạ vẫn có thể bị gán tên."
        ],
        "question": "Ô cuối ghi kết luận gì cho hai lượt?",
        "scene": "Test"
      },
      "targetId": "03-17",
      "screen": [
        "<span class=\"hl-key\">Hai lượt thử</span> cho thấy AI có thể gọi <span class=\"hl-error\">sai tên</span> vật lạ."
      ],
      "taskLines": [
        "Trong 30 giây, em nghĩ cách điền ô cuối tại chỗ."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách điền 80% trước khi tự làm.",
        "teacher": "Thầy/Cô giải thích bốn ô đã điền.",
        "students": "Em nghĩ về ô cuối tại chỗ.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "AI đúng lượt 1, nhầm lượt 2",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "AI đúng lượt 1, nhầm lượt 2"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Bảng đã điền gần đủ. Em đọc các ô đã có để hiểu vì sao.",
          "explanation": "Ảnh học và ảnh thử đều được ghi lại.\nTên AI và tên vật thật luôn ghi riêng.\nVật lạ vẫn có thể bị gán một tên.",
          "delivery": "Thầy/Cô chiếu bảng, chỉ từng cột đã điền, giữ 30 giây im lặng đọc.",
          "students": "Học sinh đọc thầm, chưa nói.",
          "answer": "AI đúng lượt 1, nhầm lượt 2.",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 29,
      "icon": "table",
      "photo": {
        "file": "frame_8_20.jpg",
        "caption": "Khung bảng ghi sẵn để em điền tiếp"
      }
    },
    {
      "id": "03-17b",
      "type": "worked",
      "v6": true,
      "title": "Lượt 2 đoán nhầm — vì sao?",
      "theme": "cream",
      "phase": "Luyện tập / Thực hành",
      "scene": "Test",
      "icon": "alert-triangle",
      "photo": {
        "file": "frame_9_20.jpg",
        "caption": "Cục tẩy chưa từng học — AI vẫn gán một tên"
      },
      "worked": {
        "title": "Lượt 2 đoán nhầm — vì sao?",
        "context": "Kết quả minh họa. Không phải AI vừa chạy.",
        "labels": [
          "Ảnh đưa lên",
          "Vật thật",
          "AI gọi tên",
          "Vì sao nhầm",
          "Cách ghi đúng"
        ],
        "values": [
          "Một cục tẩy",
          "Tẩy",
          "Thước kẻ",
          "Tẩy chưa có trong hai nhóm ảnh học",
          "Ghi cả tên AI và tên vật thật"
        ],
        "why": [
          "AI chỉ biết các nhóm đã được dạy.",
          "Vật lạ vẫn buộc phải chọn một nhóm.",
          "Ghi trung thực, không sửa kết quả."
        ],
        "question": "Em ghi gì ở cột kết luận lượt 2?",
        "scene": "Test"
      },
      "targetId": "03-17",
      "screen": [
        "<span class=\"hl-error\">AI đoán nhầm thành Thước kẻ</span>"
      ],
      "taskLines": [
        "Trong 30 giây, em nghĩ vì sao AI nhầm."
      ],
      "connector": "Em xem một lần đoán nhầm điển hình.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Hiểu vì sao AI đoán nhầm với vật ngoài hai nhóm.",
        "teacher": "Thầy/Cô chiếu slide, dẫn dắt theo 3 bước và gọi 1–2 em kiểm tra nhanh.",
        "students": "Làm cá nhân yên lặng (3 phút), sau đó đổi bài kiểm tra nhanh với bạn cùng bàn (2 phút).",
        "report": "Mời 1–2 em nêu kết quả và giải thích ngắn gọn.",
        "conclusion": "Vật lạ vẫn bị gán một tên, vì AI chỉ biết hai nhóm đã học",
        "assessment": "Quan sát mức độ hiểu bước làm và câu trả lời của các em.",
        "answers": [
          "Tẩy chưa có trong hai nhóm ảnh học nên AI buộc chọn một nhóm gần giống."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Các em xem trường hợp này. AI gọi sai tên. Mình cùng tìm lí do.",
          "explanation": "AI chỉ biết các nhóm đã được dạy.\nVật lạ vẫn buộc phải chọn một nhóm.\nGhi trung thực, không sửa kết quả.",
          "delivery": "Thầy/Cô khoanh đỏ ô \"Thước kẻ\" và ô \"Tẩy\" để đối chiếu.",
          "students": "Học sinh ghi câu trả lời vào ô cuối trên nháp.",
          "answer": "Tẩy chưa từng học nên AI đoán nhầm thành Thước kẻ.",
          "closing": "Thầy/Cô nhắc: ghi đúng cả khi AI đoán nhầm.",
          "transition": "Thầy/Cô nói: Hiểu vì sao nhầm rồi, em tự làm phiếu của mình."
        }
      },
      "number": 30
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.2 Quy trình và bảng ghi mô hình",
        "intro": "Trong 3 phút, em làm cá nhân yên lặng trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
        "answers": [
          "Sản phẩm đạt khi có hai lớp, ảnh được gán nhãn, hoàn thành dạy AI và ghi hai lượt thử mới. Có thể dự đoán sai. Không dựng kết quả.",
          "Thầy/Cô ghi bước từng các em đã tham gia điều khiển. Nếu chỉ có máy Thầy/Cô, các em có thể chỉ định thao tác/đầu vào và luân phiên đại diện thực hiện. Cần bổ sung lượt trực tiếp cho em chưa có minh chứng."
        ],
        "pages": [
          {
            "title": "Kiểm tra trước khi chạy thử",
            "instruction": "Chỉ ghi các bước đã làm. Nêu đúng hình thức tự làm hoặc quan sát.",
            "fields": [
              {
                "label": "Hai nhóm ảnh đã đặt tên là gì?",
                "key": "03-17-v3-0"
              },
              {
                "label": "Mỗi nhóm có bao nhiêu ảnh?",
                "key": "03-17-v3-1"
              },
              {
                "label": "Dạy AI đã hoàn tất chưa?",
                "options": [
                  "Đã hoàn tất",
                  "Chưa hoàn tất"
                ],
                "key": "03-17-v3-2",
                "optionLabels": [
                  "Đã hoàn tất",
                  "Chưa hoàn tất"
                ]
              }
            ],
            "reference": "Image Project → đặt tên Bút/Cốc → thêm ảnh → Train Model → Preview."
          },
          {
            "title": "Ghi hai lần thử với ảnh mới",
            "instruction": "Thử hai ảnh chưa dùng để học. Ghi dự đoán và tên vật thật.",
            "headers": [
              "Vật thật / điều kiện thử",
              "Mô hình gọi tên gì?",
              "Đúng hay chưa đúng?"
            ],
            "rows": [
              [
                "Bút: ảnh mới",
                {
                  "label": "Dự đoán cho bút",
                  "key": "03-17-v3-3"
                },
                {
                  "label": "Nhận xét dự đoán bút",
                  "key": "03-17-v3-4"
                }
              ],
              [
                "Cốc: ảnh mới",
                {
                  "label": "Dự đoán cho cốc",
                  "key": "03-17-v3-5"
                },
                {
                  "label": "Nhận xét dự đoán cốc",
                  "key": "03-17-v3-6"
                }
              ]
            ]
          },
          {
            "title": "Lưu công việc của em",
            "instruction": "Ghi nơi lưu tệp và ảnh học để tiết sau mở hoặc tạo lại.",
            "fields": [
              {
                "label": "Em đã lưu dự án hoặc bộ ảnh ở đâu?",
                "key": "03-17-v3-7"
              },
              {
                "label": "Mỗi em đã trực tiếp làm bước nào?",
                "key": "03-17-v3-8"
              },
              {
                "label": "Nếu chưa chạy được, em vướng bước nào?",
                "key": "03-17-v3-9"
              }
            ],
            "reference": "Lưu: menu góc trái → Download project as file. Mở lại: menu → Open project from file. Giữ thư mục ảnh học để tạo lại khi cần."
          }
        ]
      },
      "time": 16,
      "id": "03-17",
      "title": "P3.2 — bảng ghi thử mô hình",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Hoàn thành nhật kí chạy thử theo các bước trên phiếu.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "AI học từ các ví dụ có nhãn để tạo kết quả. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "Sản phẩm đạt khi có hai nhóm ảnh, ảnh được gán nhãn, hoàn thành dạy AI và ghi hai lượt thử mới. AI có thể đoán sai. Không tự sửa kết quả.",
          "Thầy/Cô ghi lại từng bước các em đã tham gia điều khiển. Nếu chỉ có máy Thầy/Cô, các em có thể chỉ định thao tác/đầu vào và luân phiên đại diện thực hiện."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Làm cá nhân yên lặng 3 phút, rồi đổi bài kiểm tra nhanh với bạn cùng bàn 2 phút.",
          "explanation": "",
          "delivery": "Thầy/Cô đi quanh, nhắc giữ im lặng trong 3 phút đầu.",
          "students": "Học sinh làm cá nhân rồi đổi bài với bạn cùng bàn.",
          "answer": "Sản phẩm đạt khi có hai lớp, ảnh được gán nhãn, hoàn thành dạy AI và ghi hai lượt thử mới. Có thể dự đoán sai. Không dựng kết quả.\nThầy/Cô ghi bước từng các em đã tham gia điều khiển. Nếu chỉ có máy Thầy/Cô, các em có thể chỉ định thao tác/đầu vào và luân phiên đại diện thực hiện. Cần bổ sung lượt trực tiếp cho em chưa có minh chứng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Dùng một hàng đã ghi để giải thích AI làm được gì và chưa chứng minh được gì."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Đã làm bước nào?",
        "Hai ảnh mới cho kết quả gì?",
        "Dự án được lưu ở đâu?"
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "cups",
      "taskLines": [
        "Làm cá nhân yên lặng (3 phút) → Đổi bài kiểm tra nhanh với bạn cùng bàn (2 phút)."
      ],
      "sampleId": "03-17-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 31
    },
    {
      "type": "report",
      "id": "03-18",
      "title": "Báo cáo từ lần thử thật",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo AI phân biệt 2 nhóm đồ vật và ghi dự đoán với ảnh mới.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "AI học từ các ví dụ có nhãn. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "AI học từ các ví dụ có nhãn. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã có bảng ghi. Em dùng bảng để giải thích kết quả. Trong 30 giây, em kể một kết quả tại chỗ.",
          "explanation": "Dùng bảng ghi của nhóm để trả lời ba câu hỏi. Nhóm khác nêu một điểm cần hỏi thêm.",
          "delivery": "Thầy/Cô mời 2 em kể kết quả, cả lớp lắng nghe.",
          "students": "Học sinh kể kết quả trong 30 giây.",
          "answer": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Bảng ghi đã có hai ảnh mới. Em dùng sự khác nhau giữa ảnh học và ảnh thử để đọc các tình huống tiếp theo."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "<span class=\"hl-action\">Đã thử ảnh nào?</span>",
        "AI dự đoán gì?",
        "Em đối chiếu bằng gì?"
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em kể một kết quả tại chỗ."
      ],
      "connector": "Em đã có bảng ghi. Em dùng bảng để giải thích kết quả.",
      "number": 32,
      "icon": "message-square",
      "photo": {
        "file": "cup_clear.png",
        "caption": "Ảnh cốc học và ảnh thử khác nhau"
      }
    },
    {
      "type": "divider",
      "id": "03-20",
      "title": "Luyện tập: đọc kết quả",
      "note": {
        "activity": "Luyện tập cá nhân",
        "purpose": "Nhận biết sai nhãn và đọc đúng kết quả công cụ.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Trả lời trước khi thảo luận đáp án.",
        "report": "HS giải thích vì sao không đọc 98% thành 98 lần đúng trong mọi trường hợp.",
        "conclusion": "Số hiển thị gắn một lần dự đoán; muốn đánh giá cần thử nhiều mẫu phù hợp và ghi đúng/sai.",
        "assessment": "Đạt khi xử lí đúng ít nhất 2/3 tình huống. Hỏi lại riêng cách dùng ảnh mới.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em dùng kết quả vừa có để tự kiểm cách hiểu. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô chỉ slide, chờ đồng thanh đọc tên hoạt động.",
          "students": "Học sinh đọc tên hoạt động.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu đọc một điểm dự đoán."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Luyện tập / Thực hành",
      "scene": "cups",
      "taskLines": [
        "Trong 10 giây, em đọc tên hoạt động trên slide."
      ],
      "connector": "Em dùng kết quả vừa có để tự kiểm cách hiểu.",
      "number": 33
    },
    {
      "id": "03-21-mau",
      "type": "worked",
      "v6": true,
      "title": "Mẫu đọc một điểm dự đoán",
      "theme": "cream",
      "phase": "Luyện tập / Thực hành",
      "scene": "Test",
      "worked": {
        "title": "Mẫu đọc một điểm dự đoán",
        "context": "AI ghi <span class=\"hl-key\">99%</span> cho nhãn Thước.",
        "labels": [
          "Ảnh đưa vào",
          "Tên vật thật",
          "Tên AI gợi ý",
          "Điểm hiển thị",
          "Việc kiểm"
        ],
        "values": [
          "Một chiếc thìa",
          "Thìa",
          "Thước",
          "99%",
          "So nhãn với vật thật"
        ],
        "why": [
          "Số lớn chưa chắc tên đúng.",
          "<span class=\"hl-explain\">Ảnh có tên thật để đối chiếu.</span>",
          "Đừng tin điểm một mình."
        ],
        "question": "Em dùng điểm hay vật thật để kiểm?",
        "scene": "Test"
      },
      "targetId": "03-21",
      "screen": [],
      "taskLines": [
        "Trong 30 giây, em nghĩ cách điền ô cuối."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách làm trước khi tự thực hiện.",
        "teacher": "Thầy/Cô giải thích bốn ô đã điền.",
        "students": "Em nghĩ về ô cuối tại chỗ.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "So nhãn với vật thật, kết quả vẫn sai",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "So nhãn với vật thật, kết quả vẫn sai"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Tình huống tạo sẵn: AI ghi 99% cho nhãn Thước.\nSố lớn chưa bảo đảm tên đúng.\nẢnh có tên thật để đối chiếu.\nKhông gọi 99% là đúng mọi ảnh.",
          "delivery": "Thầy/Cô chỉ ô \"99%\" và ô \"Thìa\" để so sánh.",
          "students": "Học sinh đọc thầm, ghi ý vào nháp.",
          "answer": "So nhãn với vật thật, kết quả vẫn sai.",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 34
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.3 Đọc kết quả và chuẩn bị kiểm thử",
        "intro": "Trong 3 phút, em làm cá nhân yên lặng trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
        "answers": [
          "1: Chuyển ảnh cốc về nhóm Cốc hoặc loại ảnh đặt sai trước khi dạy AI.",
          "2: Không. 98% là điểm mô hình hiển thị cho một dự đoán, không phải số đo đúng trên mọi 100 ảnh khác.",
          "3: Thử ảnh mới để kiểm tra khả năng xử lí ảnh chưa dùng để học."
        ],
        "pages": [
          {
            "title": "Kiểm tra ảnh và đọc kết quả",
            "instruction": "Trả lời từng tình huống. Không cần tự đặt kết quả thử.",
            "fields": [
              {
                "label": "Một ảnh cốc nằm trong nhóm Bút. Em sửa gì trước khi dạy AI?",
                "key": "03-21-v3-0"
              },
              {
                "label": "Màn hình hiện 98% ở nhãn Cốc cho một ảnh. Có nghĩa mô hình đúng 98 trên mọi 100 ảnh khác không? Vì sao?",
                "key": "03-21-v3-1"
              }
            ]
          },
          {
            "title": "Chọn ảnh để thử",
            "instruction": "Giải thích bằng một câu.",
            "fields": [
              {
                "label": "Nên thử bằng ảnh đã dùng để học hay bằng ảnh mới? Vì sao?",
                "key": "03-21-v3-2"
              }
            ]
          }
        ]
      },
      "time": 4,
      "id": "03-21",
      "title": "P3.3A — Đọc kết quả cho đúng",
      "note": {
        "activity": "Luyện tập cá nhân",
        "purpose": "Hoàn thành đọc và kiểm tra kết quả theo các bước trên phiếu.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Trả lời trước khi thảo luận đáp án.",
        "report": "HS giải thích vì sao không đọc 98% thành 98 lần đúng trong mọi trường hợp.",
        "conclusion": "Số hiển thị gắn một lần dự đoán; muốn đánh giá cần thử nhiều mẫu phù hợp và ghi đúng/sai.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "1: Chuyển ảnh cốc về nhóm Cốc hoặc bỏ ảnh đặt sai trước khi dạy AI.",
          "2: Không. 98% là điểm AI hiển thị cho một dự đoán, không phải số đo đúng trên mọi 100 ảnh khác.",
          "3: Thử ảnh mới để kiểm tra khả năng xử lí ảnh chưa dùng để học."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Làm cá nhân yên lặng 3 phút, rồi đổi bài kiểm tra nhanh với bạn cùng bàn 2 phút.",
          "explanation": "",
          "delivery": "Thầy/Cô đi quanh nhắc giữ im lặng trong 3 phút đầu.",
          "students": "Học sinh làm cá nhân rồi đổi bài với bạn.",
          "answer": "1: Chuyển ảnh cốc về nhóm Cốc hoặc loại ảnh đặt sai trước khi dạy AI.\n2: Không. 98% là điểm mô hình hiển thị cho một dự đoán, không phải số đo đúng trên mọi 100 ảnh khác.\n3: Thử ảnh mới để kiểm tra khả năng xử lí ảnh chưa dùng để học.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Các tình huống vừa rồi giúp em chốt ba việc: chuẩn bị ảnh, thử mới và đọc điểm dự đoán đúng giới hạn."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Nhãn ảnh học đã đúng chưa?",
        "Ảnh thử có thật sự mới không?",
        "Phần trăm có bảo đảm đúng không?"
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "cups",
      "taskLines": [
        "Làm cá nhân yên lặng (3 phút) → Đổi bài kiểm tra nhanh với bạn cùng bàn (2 phút)."
      ],
      "sampleId": "03-21-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 35
    },
    {
      "type": "recap",
      "id": "03-19",
      "title": "Kiến thức cần nhớ",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo AI phân biệt 2 nhóm đồ vật và ghi dự đoán với ảnh mới.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "AI học từ các ví dụ có nhãn. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "AI học từ các ví dụ có nhãn. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Những việc vừa làm giúp em rút ra ba ý. Trong 30 giây, em giải thích một ý tại chỗ.",
          "explanation": "",
          "delivery": "Thầy/Cô mời 1 em giải thích ý thứ hai.",
          "students": "Học sinh giải thích một ý trong 30 giây.",
          "answer": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Biết phải thử ảnh mới rồi, em đề xuất ba ảnh khác để kiểm những điều AI còn chưa gặp."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Ảnh học rõ vật và đúng nhãn.",
        "Ảnh thử phải <span class=\"hl-key\">mới với AI</span>.",
        "Điểm dự đoán không bảo đảm luôn đúng."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em giải thích một ý tại chỗ."
      ],
      "connector": "Những việc vừa làm giúp em rút ra ba ý.",
      "number": 36,
      "icon": "lightbulb",
      "photo": {
        "file": "cup_dark.png",
        "caption": "Cùng vật, khác điều kiện chụp"
      }
    },
    {
      "type": "divider",
      "id": "03-22",
      "title": "Vận dụng: thiết kế lần thử mới",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Đề xuất cách chuẩn bị kiểm thử tiết sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Chọn ba cách thử an toàn, viết điều muốn quan sát.",
        "report": "Một nhóm chia sẻ phương án có thể thực hiện trong lớp.",
        "conclusion": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
        "assessment": "Chấp nhận các biến đổi khác nhau. Loại yêu cầu thu ảnh người hoặc dùng đồ vật nguy hiểm.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em dùng cách làm vừa học trong một việc mới. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô chỉ slide, cả lớp đồng thanh đọc.",
          "students": "Học sinh đọc tên hoạt động.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu đề xuất ảnh để thử mới."
        }
      },
      "theme": "blue",
      "v6": true,
      "screen": [],
      "phase": "Vận dụng",
      "scene": "cups",
      "taskLines": [
        "Trong 10 giây, em đọc tên hoạt động trên slide."
      ],
      "connector": "Em dùng cách làm vừa học trong một việc mới.",
      "number": 37
    },
    {
      "id": "03-23-mau",
      "type": "worked",
      "v6": true,
      "title": "Mẫu đề xuất ảnh để thử mới",
      "theme": "cream",
      "phase": "Vận dụng",
      "scene": "Cups",
      "worked": {
        "title": "Mẫu đề xuất ảnh để thử mới",
        "context": "Bài mẫu đã có ảnh cốc chính diện.",
        "labels": [
          "Vật cần thử",
          "Điều kiện mới",
          "Ảnh đã học",
          "Ảnh sẽ thử",
          "Tên để đối chiếu"
        ],
        "values": [
          "Cốc",
          "Góc nghiêng, vật rõ",
          "Ảnh chính diện",
          "Chụp ảnh mới, ngoài bộ học",
          "Tên cốc theo vật thật"
        ],
        "why": [
          "Nêu rõ điều kiện cần thử.",
          "Chưa thử thì <span class=\"hl-explain\">chưa biết kết quả</span>.",
          "Giữ ảnh mới trước lần thử."
        ],
        "question": "Em lấy tên đúng từ đâu?",
        "scene": "Cups"
      },
      "targetId": "03-23",
      "screen": [],
      "taskLines": [
        "Trong 30 giây, em nghĩ cách <span class=\"hl-action\">điền ô cuối</span>."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách làm trước khi tự thực hiện.",
        "teacher": "Thầy/Cô giải thích bốn ô đã điền.",
        "students": "Em nghĩ về ô cuối tại chỗ.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "Cốc theo đồ vật thật",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "Cốc theo đồ vật thật"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Bài mẫu đã có ảnh cốc chính diện.\nNêu rõ điều kiện cần kiểm.\nChưa biết kết quả khi chưa thử.\nGiữ ảnh mới trước lần thử.",
          "delivery": "Thầy/Cô chỉ ô \"Ảnh sẽ thử\" và nhấn: đây là ảnh mới, không trùng ảnh học.",
          "students": "Học sinh đọc thầm, ghi ý vào nháp.",
          "answer": "Cốc theo đồ vật thật.",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 38,
      "icon": "sparkles",
      "photo": {
        "file": "frame_9_135.jpg",
        "caption": "Ảnh mới chụp, chưa từng dùng để học"
      }
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.3 Đọc kết quả và chuẩn bị kiểm thử",
        "intro": "Trong 3 phút, em làm cá nhân yên lặng trên phiếu. Trong 2 phút, em đổi bài kiểm tra nhanh với bạn cùng bàn.",
        "answers": [
          "B Ví dụ đổi góc bút, dùng cốc khác, đổi nền vừa phải. Có nhãn thật và không dùng ảnh đã dạy AI."
        ],
        "pages": [
          {
            "title": "Chuẩn bị ba lần thử mới",
            "instruction": "Mỗi dòng là một ảnh mới. Ghi vật và điều kiện chụp. Chưa ghi trước mô hình sẽ đúng hay sai.",
            "headers": [
              "Lần thử",
              "Vật và tên đúng",
              "Điều kiện muốn thử"
            ],
            "rows": [
              [
                "1",
                {
                  "label": "Vật ở lần 1",
                  "key": "03-23-v3-0"
                },
                {
                  "label": "Điều kiện lần 1",
                  "key": "03-23-v3-1"
                }
              ],
              [
                "2",
                {
                  "label": "Vật ở lần 2",
                  "key": "03-23-v3-2"
                },
                {
                  "label": "Điều kiện lần 2",
                  "key": "03-23-v3-3"
                }
              ],
              [
                "3",
                {
                  "label": "Vật ở lần 3",
                  "key": "03-23-v3-4"
                },
                {
                  "label": "Điều kiện lần 3",
                  "key": "03-23-v3-5"
                }
              ]
            ]
          }
        ]
      },
      "time": 3,
      "id": "03-23",
      "title": "P3.3B — Chọn ba ảnh mới",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Hoàn thành đề xuất lần thử mới theo các bước trên phiếu.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Chọn ba cách thử an toàn, viết điều muốn quan sát.",
        "report": "Một nhóm chia sẻ phương án có thể thực hiện trong lớp.",
        "conclusion": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "Ví dụ đổi góc bút, dùng cốc khác, đổi nền vừa phải. Có nhãn thật và không dùng ảnh đã dạy AI."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Làm cá nhân yên lặng 3 phút, rồi đổi bài kiểm tra nhanh với bạn cùng bàn 2 phút.",
          "explanation": "",
          "delivery": "Thầy/Cô đi quanh nhắc giữ im lặng 3 phút đầu.",
          "students": "Học sinh làm cá nhân rồi đổi bài với bạn.",
          "answer": "B Ví dụ đổi góc bút, dùng cốc khác, đổi nền vừa phải. Có nhãn thật và không dùng ảnh đã dạy AI.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Lưu dự án và kế hoạch này để tiết sau kiểm thử có hệ thống hơn."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Chọn vật cần thử.",
        "Thay đổi điều kiện chụp.",
        "Chưa đoán trước đúng hay sai."
      ],
      "phase": "Vận dụng",
      "scene": "cups",
      "taskLines": [
        "Làm cá nhân yên lặng (3 phút) → Đổi bài kiểm tra nhanh với bạn cùng bàn (2 phút)."
      ],
      "sampleId": "03-23-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 39
    },
    {
      "type": "home",
      "id": "03-24",
      "title": "Lưu để tiếp tục ở tiết sau",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Đề xuất cách chuẩn bị kiểm thử tiết sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Chọn ba cách thử an toàn, viết điều muốn quan sát.",
        "report": "Một nhóm chia sẻ phương án có thể thực hiện trong lớp.",
        "conclusion": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
        "assessment": "Chấp nhận các biến đổi khác nhau. Loại yêu cầu thu ảnh người hoặc dùng đồ vật nguy hiểm.",
        "answers": [
          "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em giữ kết quả hôm nay để chuẩn bị bước tiếp. Sau giờ học, em ghi một quan sát vào vở.",
          "explanation": "Lưu dự án bằng menu → Download project as file và giữ bộ ảnh Bút/Cốc đúng nhãn. Ghi thư mục vào P3.2. Tiết sau mở bằng Open project from file. Nếu cần, dạy AI lại trước khi thử.",
          "delivery": "Thầy/Cô chiếu menu lưu, chỉ nơi ghi đường dẫn.",
          "students": "Học sinh ghi vị trí lưu vào vở.",
          "answer": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Tiết sau, em giữ riêng sáu ảnh thử để so sánh trước và sau khi cải tiến."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "<span class=\"hl-action\">Lưu tệp dự án.</span>",
        "Giữ thư mục ảnh có nhãn.",
        "Ghi vị trí lưu vào P3.2."
      ],
      "phase": "Vận dụng",
      "scene": "cups",
      "taskLines": [
        "Sau giờ học, em ghi một quan sát vào vở."
      ],
      "connector": "Em giữ kết quả hôm nay để chuẩn bị bước tiếp.",
      "number": 40,
      "icon": "home",
      "photo": {
        "file": "cup_clear.png",
        "caption": "Giữ bộ ảnh đúng nhãn cho tiết sau"
      }
    }
  ],
  "rubric": [],
  "evidence": [
    [
      "Thu và sắp xếp ảnh",
      "1.3.TC1a",
      "Chọn ảnh rõ và tổ chức đúng lớp.",
      "P3.1, cấu trúc hai lớp",
      "Không nhầm nhãn; nếu sai phải sửa trước huấn luyện."
    ],
    [
      "Huấn luyện và xem trước",
      "6.2.TC1b",
      "Thực hiện tạo mô hình đơn giản.",
      "GV quan sát, P3.2 và lời giải thích từng em",
      "Có tham gia điều khiển ít nhất một bước; chỉ quan sát chưa đủ kết luận thao tác."
    ]
  ],
  "revision": "V6 — biên tập sư phạm và làm mẫu"
};
