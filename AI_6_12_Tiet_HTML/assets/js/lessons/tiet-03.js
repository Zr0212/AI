window.AI6_LESSON={
  "id": 3,
  "title": "Bài 3. Dạy AI nhận biết đồ vật bằng Teachable Machine",
  "mode": "Trực tiếp tại phòng Tin học",
  "count": 29,
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
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Quan sát và ghi hai điểm khác nhau giữa ảnh.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
        "assessment": "Ghi nhận các em đã nêu yếu tố dữ liệu. Hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [
          "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp. Phải thử thực tế mới biết dự đoán của mô hình."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em bắt đầu bằng một điều muốn tìm hiểu. Trong 10 giây, em đọc đầu bài trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc đầu bài trên slide.",
          "answer": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp. Phải thử thực tế mới biết dự đoán của mô hình.",
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
        "purpose": "Dự đoán nguyên nhân một mẫu mới khó nhận dạng.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Quan sát và ghi hai điểm khác nhau giữa ảnh.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
        "assessment": "Ghi nhận các em đã nêu yếu tố dữ liệu. Hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [
          "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp. Phải thử thực tế mới biết dự đoán của mô hình."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Đầu bài cho biết chủ đề. Em xem việc cần làm. Trong 20 giây, em chọn một mục tiêu trên slide.",
          "explanation": "Chuẩn bị ảnh Bút/Cốc và đưa vào đúng nhóm.\nLuân phiên tạo dự án, thêm ảnh, dạy AI và chạy thử.\nGhi hai lần thử mới. Nêu ít nhất hai yếu tố ảnh có thể ảnh hưởng kết quả.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 20 giây, em chọn một mục tiêu trên slide.",
          "answer": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp. Phải thử thực tế mới biết dự đoán của mô hình.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Em bắt đầu từ câu hỏi: “Cùng chiếc cốc, khác bức ảnh”"
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Chuẩn bị ảnh Bút/Cốc đúng nhãn.",
        "Tạo dự án, thêm ảnh và dạy AI.",
        "Thử ảnh mới, ghi kết quả và điều kiện ảnh."
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
        "purpose": "Dự đoán nguyên nhân một mẫu mới khó nhận dạng.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Quan sát và ghi hai điểm khác nhau giữa ảnh.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
        "assessment": "Ghi nhận các em đã nêu yếu tố dữ liệu. Hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Từ việc quen thuộc, em thử nêu câu hỏi. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc tên hoạt động trên slide.",
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
        "purpose": "Dự đoán nguyên nhân một mẫu mới khó nhận dạng.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Quan sát và ghi hai điểm khác nhau giữa ảnh.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
        "assessment": "Ghi nhận các em đã nêu yếu tố dữ liệu. Hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [
          "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp. Phải thử thực tế mới biết dự đoán của mô hình."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Từ mục tiêu hôm nay, em xem một tình huống. Trong 30 giây, em tự chọn câu trả lời tại chỗ.",
          "explanation": "Hai ảnh cùng chụp một chiếc cốc nhưng có ánh sáng khác nhau. Ảnh nào giúp em nhìn đồ vật rõ hơn? Muốn máy nhận nhiều kiểu cốc, cần chuẩn bị những ảnh nào?",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em tự chọn câu trả lời tại chỗ.",
          "answer": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp. Phải thử thực tế mới biết dự đoán của mô hình.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Máy nhận ảnh bằng dữ liệu số. Em tìm hiểu điều đó trước khi chuẩn bị bộ ảnh."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Ảnh nào nhìn rõ hơn?",
        "Muốn nhận nhiều kiểu cốc, cần ảnh nào?"
      ],
      "phase": "Khởi động",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em tự chọn câu trả lời tại chỗ."
      ],
      "connector": "Từ mục tiêu hôm nay, em xem một tình huống.",
      "number": 4
    },
    {
      "type": "divider",
      "id": "03-05",
      "title": "Khám phá: chuẩn bị dữ liệu ảnh",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Lựa chọn dữ liệu đúng hai lớp và nêu tiêu chí ảnh.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a. Yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Câu hỏi vừa nêu dẫn em tới cách AI làm việc. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc tên hoạt động trên slide.",
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
      "number": 5
    },
    {
      "type": "question",
      "poster": "frame_5_95.jpg",
      "id": "03-06",
      "title": "Máy nhìn ảnh bằng gì?",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Lựa chọn dữ liệu đúng hai lớp và nêu tiêu chí ảnh.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a. Yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Máy xử lí các giá trị số biểu diễn ảnh.",
          "Trong ví dụ này, cần ảnh của cả Bút và Cốc, đặt đúng nhãn và chụp ở các điều kiện phù hợp."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Trước khi xem, em đọc câu hỏi cần tìm. Trong 15 giây, em đọc câu hỏi trên slide.",
          "explanation": "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Quan sát video: máy nhận ảnh bằng các giá trị số ra sao? Để phân biệt Bút/Cốc, em cần ảnh của những vật nào?",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 15 giây, em đọc câu hỏi trên slide.",
          "answer": "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Máy xử lí các giá trị số biểu diễn ảnh.\nTrong ví dụ này, cần ảnh của cả Bút và Cốc, đặt đúng nhãn và chụp ở các điều kiện phù hợp.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Hãy xem video để nối hình ảnh quen thuộc với cách máy xử lí ảnh."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Ảnh số gồm những điểm ảnh nhỏ.",
        "Máy xử lí các giá trị số của ảnh.",
        "Cần những ảnh nào cho Bút/Cốc?"
      ],
      "phase": "Khám phá",
      "scene": "video",
      "taskLines": [
        "Trong 15 giây, em đọc câu hỏi trên slide."
      ],
      "connector": "Trước khi xem, em đọc câu hỏi cần tìm.",
      "number": 6
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
        "purpose": "Lựa chọn dữ liệu đúng hai lớp và nêu tiêu chí ảnh.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a. Yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Máy xử lí các giá trị số biểu diễn ảnh.",
          "Trong ví dụ này, cần ảnh của cả Bút và Cốc, đặt đúng nhãn và chụp ở các điều kiện phù hợp."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Giữ câu hỏi vừa đọc. Em tìm ví dụ trong phim. Trong 25 giây, em ghi một ví dụ vào vở.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 25 giây, em ghi một ví dụ vào vở.",
          "answer": "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Máy xử lí các giá trị số biểu diễn ảnh.\nTrong ví dụ này, cần ảnh của cả Bút và Cốc, đặt đúng nhãn và chụp ở các điều kiện phù hợp.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Biết máy nhận dữ liệu ảnh rồi, em chuẩn bị các nhóm ảnh đúng nhãn."
        }
      },
      "theme": "cream",
      "fallback": "Ảnh số được biểu diễn bằng các giá trị số của điểm ảnh. Nhiệm vụ Bút/Cốc cần ảnh ví dụ đúng nhãn và phù hợp.",
      "v6": true,
      "screen": [
        "Tìm cách ảnh được biểu diễn.",
        "Nhắc lại dữ liệu cần cho Bút/Cốc."
      ],
      "phase": "Khám phá",
      "scene": "video",
      "taskLines": [
        "Trong 25 giây, em ghi một ví dụ vào vở."
      ],
      "connector": "Giữ câu hỏi vừa đọc. Em tìm ví dụ trong phim.",
      "number": 7
    },
    {
      "type": "concept",
      "id": "03-08",
      "title": "Chuẩn bị hai nhóm ảnh",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Lựa chọn dữ liệu đúng hai lớp và nêu tiêu chí ảnh.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a. Yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Từ ví dụ vừa có, em đặt tên cho điều đã thấy. Trong 30 giây, em chỉ một ý trên hình.",
          "explanation": "Hai nhóm ảnh: Trong công cụ, một “lớp” (Class) là một nhóm ảnh có cùng nhãn. Em tạo hai nhóm: Bút và Cốc.\nẢnh phục vụ nhiệm vụ: Vật nhìn thấy được, nhãn đúng. Thay đổi góc, ánh sáng và nền phù hợp.\nĐừng để nền thay cho đồ vật: Cho cả hai loại vật xuất hiện ở các nền/điều kiện tương tự. Tránh máy chỉ học khác biệt nền.\nTrong giao diện, Class nghĩa là nhóm ảnh có chung nhãn, không phải lớp học. Nền không nên trở thành dấu hiệu duy nhất phân biệt hai vật.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em chỉ một ý trên hình.",
          "answer": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu lên kế hoạch ảnh bằng một mẫu."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Một nhóm Bút, một nhóm Cốc.",
        "Ảnh rõ vật, đúng nhãn.",
        "Hai nhóm có điều kiện chụp tương tự."
      ],
      "phase": "Khám phá",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em chỉ một ý trên hình."
      ],
      "connector": "Từ ví dụ vừa có, em đặt tên cho điều đã thấy.",
      "number": 8
    },
    {
      "id": "03-09-mau",
      "type": "worked",
      "v6": true,
      "title": "Lên kế hoạch ảnh bằng một mẫu",
      "theme": "cream",
      "phase": "Khám phá",
      "scene": "Pencil-ruler",
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
          "Khoảng 20–30 ảnh mỗi nhóm",
          "Chính diện và hơi nghiêng",
          "Hai vật có nền tương tự",
          "Mặt người và thông tin riêng"
        ],
        "why": [
          "Tên nhóm nói rõ vật cần phân biệt.",
          "Đổi góc giúp ảnh bớt giống hệt.",
          "Số ảnh không bảo đảm AI luôn đúng."
        ],
        "question": "Em nên tránh chụp thêm thông tin nào?",
        "scene": "Pencil-ruler"
      },
      "targetId": "03-09",
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
        "conclusion": "Mặt người và thông tin riêng",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "Mặt người và thông tin riêng"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Mẫu chụp ảnh bút chì và thước kẻ.\nTên nhóm nói rõ vật cần phân biệt.\nĐổi góc giúp ảnh bớt giống hệt.\nSố ảnh không bảo đảm AI luôn đúng.",
          "delivery": "Thầy/Cô chỉ lần lượt các ô đã điền. Giữ ô cuối trống trong 30 giây. Gọi 1–2 em tại chỗ. Bấm Mở ô cuối sau khi các em trả lời. Chỉ chuyển sang tự làm khi các em hiểu cách điền.",
          "students": "Em tự nghĩ ô cuối. Chưa trao đổi khi Thầy/Cô chưa ra hiệu.",
          "answer": "Mặt người và thông tin riêng",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 9
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.1 Kế hoạch dữ liệu ảnh",
        "intro": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
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
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "Bốn yếu tố: ánh sáng, góc chụp, hình nền, độ nét. Loại/chụp lại ảnh không thấy đủ vật hoặc gán nhãn sai. Không phải mọi ảnh khó đều phải bỏ nếu nó đại diện điều kiện thực tế và còn nhận biết được.",
          "Cho cả hai lớp xuất hiện ở các nền/điều kiện phù hợp tương tự. Giữ vật thể rõ. Số lượng ghi theo thực tế, 20–30 chỉ là gợi ý khởi điểm quản lí thời gian."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao thảo luận nhóm. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
          "students": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "answer": "Bốn yếu tố: ánh sáng, góc chụp, hình nền, độ nét. Loại/chụp lại ảnh không thấy đủ vật hoặc gán nhãn sai. Không phải mọi ảnh khó đều phải bỏ nếu nó đại diện điều kiện thực tế và còn nhận biết được.\nCho cả hai lớp xuất hiện ở các nền/điều kiện phù hợp tương tự. Giữ vật thể rõ. Số lượng ghi theo thực tế, 20–30 chỉ là gợi ý khởi điểm quản lí thời gian.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Em kiểm lại kế hoạch và nhãn trước khi đưa ảnh vào công cụ."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Dự kiến số ảnh mỗi nhóm.",
        "Chọn góc, ánh sáng và nền.",
        "Chỉ chụp đồ vật."
      ],
      "phase": "Khám phá",
      "scene": "cups",
      "taskLines": [
        "Trong 3 phút, em tự điền trên phiếu.",
        "Trong 2 phút, em so kết quả với em ngồi cạnh."
      ],
      "sampleId": "03-09-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 10
    },
    {
      "type": "conclusion",
      "id": "03-10",
      "title": "Bộ ảnh đã sẵn sàng chưa?",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Lựa chọn dữ liệu đúng hai lớp và nêu tiêu chí ảnh.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a. Yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em so kết quả để rút ra điều có căn cứ. Trong 30 giây, em nêu một căn cứ tại chỗ.",
          "explanation": "Đặt ảnh vào đúng nhóm, giữ vật rõ và chụp ở nhiều điều kiện phù hợp. Nhiều ảnh gần giống hệt nhau chưa chắc giúp mô hình nhận tốt ảnh khác.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em nêu một căn cứ tại chỗ.",
          "answer": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Khi bộ ảnh đạt yêu cầu, em bắt đầu tạo mô hình bằng công cụ."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Đúng vật và đúng nhãn?",
        "Vật có nhìn rõ không?",
        "Có ảnh ở nhiều điều kiện phù hợp?"
      ],
      "phase": "Khám phá",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em nêu một căn cứ tại chỗ."
      ],
      "connector": "Em so kết quả để rút ra điều có căn cứ.",
      "number": 11
    },
    {
      "type": "divider",
      "id": "03-11",
      "title": "Thực hành: tạo và thử mô hình",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem ví dụ. Giờ em thử theo từng bước. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc tên hoạt động trên slide.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu ba bước dạy ai qua hình ảnh."
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
      "number": 12
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
          "Chọn Train Model và chờ",
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
        "teacher": "Thầy/Cô giải thích bốn ô đã điền.",
        "students": "Em nghĩ về ô cuối tại chỗ.",
        "report": "Thầy/Cô gọi 1–2 em trả lời.",
        "conclusion": "So tên AI với đồ vật thật",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "So tên AI với đồ vật thật"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Mẫu: Bút chì/Thước kẻ. Bài em: Bút/Cốc.\nGhi tên trước giúp tránh bỏ nhầm ảnh.\nTrain Model bắt đầu quá trình máy học.\nẢnh mới giúp em kiểm cách AI đoán.",
          "delivery": "Thầy/Cô chỉ lần lượt các ô đã điền. Giữ ô cuối trống trong 30 giây. Gọi 1–2 em tại chỗ. Bấm Mở ô cuối sau khi các em trả lời. Chỉ chuyển sang tự làm khi các em hiểu cách điền.",
          "students": "Em tự nghĩ ô cuối. Chưa trao đổi khi Thầy/Cô chưa ra hiệu.",
          "answer": "So tên AI với đồ vật thật",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 13
    },
    {
      "type": "task",
      "id": "03-12",
      "title": "Tạo mô hình Bút/Cốc",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 11 phút, em tạo và thử AI Bút/Cốc trên máy.",
          "explanation": "Tạo dự án Bút/Cốc. Có thể bắt đầu với khoảng 20–30 ảnh mỗi nhóm, rồi thử bằng hai ảnh mới.\n20–30 ảnh mỗi nhóm chỉ là điểm bắt đầu thực hành, không phải số lượng bảo đảm chất lượng. Điều kiện và nhãn ảnh vẫn cần kiểm.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao thảo luận nhóm. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
          "students": "Trong 11 phút, em tạo và thử AI Bút/Cốc trên máy.",
          "answer": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Bước đầu là mở đúng loại dự án nhận dạng ảnh."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Thêm ảnh vào hai nhóm.",
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
      "number": 14
    },
    {
      "type": "step",
      "step": 1,
      "time": 0,
      "id": "03-13",
      "title": "Bước 1 — Mở dự án ảnh",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Có ảnh mẫu rồi, em mở đúng dự án ảnh. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Teachable Machine → Get Started → Image Project.\nChọn mô hình ảnh tiêu chuẩn nếu có lựa chọn.\nChỉ cấp camera khi được Thầy/Cô hướng dẫn. Có thể dùng bộ ảnh tải lên.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 1 phút, em làm bước này trên máy.",
          "answer": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Đã có dự án ảnh, em đặt tên hai nhóm trước khi thêm dữ liệu."
        }
      },
      "theme": "cream",
      "highlight": 1,
      "v6": true,
      "screen": [
        "Mở Teachable Machine.",
        "Chọn Image Project.",
        "Chọn mô hình ảnh tiêu chuẩn nếu có."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Có ảnh mẫu rồi, em mở đúng dự án ảnh.",
      "number": 15
    },
    {
      "type": "step",
      "step": 2,
      "time": 0,
      "id": "03-14",
      "title": "Bước 2 — Thêm ảnh đúng nhóm",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Dự án đã mở. Em đặt tên rồi thêm ảnh. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Hai nhóm ảnh (Class): Bút và Cốc.\nĐổi Class 1 và Class 2 thành Bút và Cốc. Đưa ảnh vào đúng nhóm.\nDùng nhiều góc chụp. Dùng các nền tương tự cho cả hai loại vật.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 1 phút, em làm bước này trên máy.",
          "answer": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng.",
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
        "Thêm ảnh vào đúng nhóm."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Dự án đã mở. Em đặt tên rồi thêm ảnh.",
      "number": 16
    },
    {
      "type": "step",
      "step": 3,
      "time": 0,
      "id": "03-15",
      "title": "Bước 3 — Kiểm rồi dạy AI",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Ảnh đã đủ. Em kiểm trước khi dạy AI. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Chọn Train Model sau khi kiểm tra.\nLoại/chụp lại ảnh không thấy đủ vật hoặc sai nhãn.\nGiữ trang hoạt động và chờ dạy AI hoàn tất.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 1 phút, em làm bước này trên máy.",
          "answer": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng.",
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
        "Bấm Train Model và chờ."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Ảnh đã đủ. Em kiểm trước khi dạy AI.",
      "number": 17
    },
    {
      "type": "step",
      "step": 4,
      "time": 0,
      "id": "03-16",
      "title": "Bước 4 — Thử mới và lưu",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: AI học xong. Em thử ảnh mới rồi lưu. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Trong Preview, thử một ảnh mới của mỗi nhóm.\nGhi dự đoán cho một ảnh Bút và một ảnh Cốc chưa dùng để học.\nMở menu góc trái → Download project as file. Lưu bằng mã nhóm.\nTiết sau: Open project from file, chọn tệp đã lưu và dạy AI lại khi cần. Giữ riêng bộ ảnh Bút/Cốc.\nMenu lưu dự án đã được đối chiếu ở V4: Download project as file. Mở lại bằng Open project from file. Thầy/Cô thử trước trên phiên bản đang dùng. Phân biệt với Export Model. Không có sẵn kết quả dạy AI cho các em chép.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 1 phút, em làm bước này trên máy.",
          "answer": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng.",
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
        "Lưu dự án và giữ bộ ảnh."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "tm",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "AI học xong. Em thử ảnh mới rồi lưu.",
      "number": 18
    },
    {
      "id": "03-17-mau",
      "type": "worked",
      "v6": true,
      "title": "Ghi mẫu hai lượt thử",
      "theme": "cream",
      "phase": "Luyện tập / Thực hành",
      "scene": "Test",
      "worked": {
        "title": "Ghi mẫu hai lượt thử",
        "context": "Kết quả minh họa. Không phải AI vừa chạy.",
        "labels": [
          "Lượt 1: đưa vào",
          "Lượt 1: đối chiếu",
          "Lượt 2: đưa vào",
          "Lượt 2: đối chiếu",
          "Kết luận vừa đủ"
        ],
        "values": [
          "Ảnh bút chì đặt thẳng",
          "AI gọi Bút chì. Vật thật là bút chì",
          "Ảnh chiếc thìa ngoài hai nhóm",
          "AI gọi Thước kẻ. Vật thật là thìa",
          "AI đúng lượt 1, nhầm lượt 2"
        ],
        "why": [
          "Ghi cả tên AI và tên vật thật.",
          "Vật lạ có thể vẫn nhận một tên.",
          "Hai lượt chưa chứng minh đúng mọi vật."
        ],
        "question": "Từ hai lượt, em kết luận thế nào?",
        "scene": "Test"
      },
      "targetId": "03-17",
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
        "conclusion": "AI đúng lượt 1, nhầm lượt 2",
        "assessment": "Em điền ô cuối và nói được vì sao.",
        "answers": [
          "AI đúng lượt 1, nhầm lượt 2"
        ],
        "source": "Mẫu học tập tự biên soạn. Không phải kết quả chạy AI thật.",
        "time": "Khoảng 1–2 phút, gồm 30 giây hỏi nhanh. Tính trong hoạt động kế tiếp.",
        "script": {
          "opening": "Thầy/Cô nói: Cả lớp cùng xem mẫu. Các ô đầu đã có bài làm. Em đọc chú thích để hiểu vì sao.",
          "explanation": "Kết quả minh họa. Không phải AI vừa chạy.\nGhi cả tên AI và tên vật thật.\nVật lạ có thể vẫn nhận một tên.\nHai lượt chưa chứng minh đúng mọi vật.",
          "delivery": "Thầy/Cô chỉ lần lượt các ô đã điền. Giữ ô cuối trống trong 30 giây. Gọi 1–2 em tại chỗ. Bấm Mở ô cuối sau khi các em trả lời. Chỉ chuyển sang tự làm khi các em hiểu cách điền.",
          "students": "Em tự nghĩ ô cuối. Chưa trao đổi khi Thầy/Cô chưa ra hiệu.",
          "answer": "AI đúng lượt 1, nhầm lượt 2",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 19
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.2 Quy trình và bảng ghi mô hình",
        "intro": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
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
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "Sản phẩm đạt khi có hai lớp, ảnh được gán nhãn, hoàn thành dạy AI và ghi hai lượt thử mới. Có thể dự đoán sai. Không dựng kết quả.",
          "Thầy/Cô ghi bước từng các em đã tham gia điều khiển. Nếu chỉ có máy Thầy/Cô, các em có thể chỉ định thao tác/đầu vào và luân phiên đại diện thực hiện. Cần bổ sung lượt trực tiếp cho em chưa có minh chứng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao thảo luận nhóm. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
          "students": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "answer": "Sản phẩm đạt khi có hai lớp, ảnh được gán nhãn, hoàn thành dạy AI và ghi hai lượt thử mới. Có thể dự đoán sai. Không dựng kết quả.\nThầy/Cô ghi bước từng các em đã tham gia điều khiển. Nếu chỉ có máy Thầy/Cô, các em có thể chỉ định thao tác/đầu vào và luân phiên đại diện thực hiện. Cần bổ sung lượt trực tiếp cho em chưa có minh chứng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Dùng một hàng đã ghi để giải thích mô hình làm được gì và chưa chứng minh được gì."
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
        "Trong 3 phút, em tự điền trên phiếu.",
        "Trong 2 phút, em so kết quả với em ngồi cạnh."
      ],
      "sampleId": "03-17-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 20
    },
    {
      "type": "report",
      "id": "03-18",
      "title": "Báo cáo từ lần thử thật",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã có bảng ghi. Em dùng bảng để giải thích kết quả. Trong 30 giây, em kể một kết quả tại chỗ.",
          "explanation": "Dùng bảng ghi của nhóm để trả lời ba câu hỏi. Nhóm khác nêu một điểm cần hỏi thêm.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em kể một kết quả tại chỗ.",
          "answer": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Bảng ghi đã có hai ảnh mới. Em dùng sự khác nhau giữa ảnh học và ảnh thử để đọc các tình huống tiếp theo."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Đã thử ảnh nào?",
        "Mô hình dự đoán gì?",
        "Em đối chiếu bằng gì?"
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em kể một kết quả tại chỗ."
      ],
      "connector": "Em đã có bảng ghi. Em dùng bảng để giải thích kết quả.",
      "number": 21
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
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc tên hoạt động trên slide.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu mẫu đọc một điểm dự đoán."
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
      "number": 22
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
        "context": "Tình huống tạo sẵn: AI ghi 99% cho nhãn Thước.",
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
          "99% trong ví dụ",
          "So nhãn với vật thật, kết quả vẫn sai"
        ],
        "why": [
          "Số lớn chưa bảo đảm tên đúng.",
          "Ảnh có tên thật để đối chiếu.",
          "Không gọi 99% là đúng mọi ảnh."
        ],
        "question": "Em dùng điểm hay vật thật để kiểm?",
        "scene": "Test"
      },
      "targetId": "03-21",
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
          "delivery": "Thầy/Cô chỉ lần lượt các ô đã điền. Giữ ô cuối trống trong 30 giây. Gọi 1–2 em tại chỗ. Bấm Mở ô cuối sau khi các em trả lời. Chỉ chuyển sang tự làm khi các em hiểu cách điền.",
          "students": "Em tự nghĩ ô cuối. Chưa trao đổi khi Thầy/Cô chưa ra hiệu.",
          "answer": "So nhãn với vật thật, kết quả vẫn sai",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 23
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.3 Đọc kết quả và chuẩn bị kiểm thử",
        "intro": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
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
          "1: Chuyển ảnh cốc về nhóm Cốc hoặc loại ảnh đặt sai trước khi dạy AI.",
          "2: Không. 98% là điểm mô hình hiển thị cho một dự đoán, không phải số đo đúng trên mọi 100 ảnh khác.",
          "3: Thử ảnh mới để kiểm tra khả năng xử lí ảnh chưa dùng để học."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao thảo luận nhóm. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
          "students": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
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
        "Trong 3 phút, em tự điền trên phiếu.",
        "Trong 2 phút, em so kết quả với em ngồi cạnh."
      ],
      "sampleId": "03-21-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 24
    },
    {
      "type": "recap",
      "id": "03-19",
      "title": "Kiến thức cần nhớ",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "Thầy/Cô quan sát thao tác thật và thu P3.2. Nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Những việc vừa làm giúp em rút ra ba ý. Trong 30 giây, em giải thích một ý tại chỗ.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em giải thích một ý tại chỗ.",
          "answer": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào. Một con số cao không chứng minh luôn đúng.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Biết phải thử ảnh mới rồi, em đề xuất ba ảnh khác để kiểm những điều mô hình còn chưa gặp."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Ảnh học rõ vật và đúng nhãn.",
        "Ảnh thử phải mới với mô hình.",
        "Điểm dự đoán không bảo đảm luôn đúng."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "cups",
      "taskLines": [
        "Trong 30 giây, em giải thích một ý tại chỗ."
      ],
      "connector": "Những việc vừa làm giúp em rút ra ba ý.",
      "number": 25
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
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc tên hoạt động trên slide.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu mẫu đề xuất ảnh để thử mới."
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
      "number": 26
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
          "Ảnh mẫu đã học",
          "Ảnh sẽ thử",
          "Tên đúng để đối chiếu"
        ],
        "values": [
          "Cốc",
          "Góc nghiêng, vật rõ",
          "Ảnh chính diện",
          "Chụp một ảnh mới, giữ ngoài bộ học",
          "Cốc theo đồ vật thật"
        ],
        "why": [
          "Nêu rõ điều kiện cần kiểm.",
          "Chưa biết kết quả khi chưa thử.",
          "Giữ ảnh mới trước lần thử."
        ],
        "question": "Em lấy tên đúng từ đâu?",
        "scene": "Cups"
      },
      "targetId": "03-23",
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
          "delivery": "Thầy/Cô chỉ lần lượt các ô đã điền. Giữ ô cuối trống trong 30 giây. Gọi 1–2 em tại chỗ. Bấm Mở ô cuối sau khi các em trả lời. Chỉ chuyển sang tự làm khi các em hiểu cách điền.",
          "students": "Em tự nghĩ ô cuối. Chưa trao đổi khi Thầy/Cô chưa ra hiệu.",
          "answer": "Cốc theo đồ vật thật",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 27
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.3 Đọc kết quả và chuẩn bị kiểm thử",
        "intro": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
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
          "B Ví dụ đổi góc bút, dùng cốc khác, đổi nền vừa phải. Có nhãn thật và không dùng ảnh đã dạy AI."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao thảo luận nhóm. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
          "students": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
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
        "Trong 3 phút, em tự điền trên phiếu.",
        "Trong 2 phút, em so kết quả với em ngồi cạnh."
      ],
      "sampleId": "03-23-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 28
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
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Sau giờ học, em ghi một quan sát vào vở.",
          "answer": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Tiết sau, em giữ riêng sáu ảnh thử để so sánh trước và sau khi cải tiến."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Lưu tệp dự án.",
        "Giữ thư mục ảnh có nhãn.",
        "Ghi vị trí lưu vào P3.2."
      ],
      "phase": "Vận dụng",
      "scene": "cups",
      "taskLines": [
        "Sau giờ học, em ghi một quan sát vào vở."
      ],
      "connector": "Em giữ kết quả hôm nay để chuẩn bị bước tiếp.",
      "number": 29
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
