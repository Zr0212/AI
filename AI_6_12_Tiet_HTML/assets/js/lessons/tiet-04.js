window.AI6_LESSON={
  "id": 4,
  "title": "Bài 4. Kiểm thử và cải tiến mô hình AI",
  "mode": "Trực tiếp tại phòng Tin học",
  "count": 29,
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
          "transition": "Thầy/Cô nối ý: Có mô hình rồi, mục tiêu hôm nay là kiểm có căn cứ và biết giới hạn của kết luận."
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
      "number": 1
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
        "Nêu giới hạn của kết luận."
      ],
      "phase": "Khởi động",
      "scene": "test",
      "taskLines": [
        "Trong 20 giây, em chọn một mục tiêu trên slide."
      ],
      "connector": "Đầu bài cho biết chủ đề. Em xem việc cần làm.",
      "number": 2
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
      "number": 3
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
        "Điều đó chứng minh được gì?",
        "Cần thử thêm ảnh nào?"
      ],
      "phase": "Khởi động",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em tự chọn câu trả lời tại chỗ."
      ],
      "connector": "Từ mục tiêu hôm nay, em xem một tình huống.",
      "number": 4
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
      "number": 5
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
        "Chỉ học ảnh chụp chính diện.",
        "Đổi góc, kết quả có chắc đúng không?",
        "Cần thử thế nào để biết?"
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
      "number": 7
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
        "Ảnh thử T1–T6: chưa dùng để học.",
        "Tên vật thật: căn cứ đối chiếu."
      ],
      "phase": "Khám phá",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em chỉ một ý trên hình."
      ],
      "connector": "Từ ví dụ vừa có, em đặt tên cho điều đã thấy.",
      "number": 8
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
          "Không thêm T1 vào ảnh dạy AI"
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
      "number": 9
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.1 Bộ kiểm thử mới",
        "intro": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
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
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao thảo luận nhóm. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
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
      "number": 10
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
        "Tên thật khác với dự đoán.",
        "So hai tên để đếm đúng.",
        "Điểm dự đoán không thay việc kiểm."
      ],
      "phase": "Khám phá",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em nêu một căn cứ tại chỗ."
      ],
      "connector": "Em so kết quả để rút ra điều có căn cứ.",
      "number": 11
    },
    {
      "type": "divider",
      "id": "04-11",
      "title": "Thực hành: cải tiến rồi so sánh",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem ví dụ. Giờ em thử theo từng bước. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc tên hoạt động trên slide.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu mẫu chọn một điều cần sửa."
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
      "number": 12
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
          "Chụp ảnh cốc nghiêng mới, đúng tên",
          "Giữ nguyên T1–T6 để so hai lượt",
          "Dạy lại rồi thử cùng sáu tệp"
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
          "delivery": "Thầy/Cô chỉ lần lượt các ô đã điền. Giữ ô cuối trống trong 30 giây. Gọi 1–2 em tại chỗ. Bấm Mở ô cuối sau khi các em trả lời. Chỉ chuyển sang tự làm khi các em hiểu cách điền.",
          "students": "Em tự nghĩ ô cuối. Chưa trao đổi khi Thầy/Cô chưa ra hiệu.",
          "answer": "Dạy lại rồi thử cùng sáu tệp",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 13
    },
    {
      "type": "task",
      "id": "04-12",
      "title": "Thay đổi một điểm, rồi thử lại",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 11 phút, em dạy thêm ảnh rồi thử lại trên máy.",
          "explanation": "Chọn một điểm cần bổ sung ở ảnh học. Thêm ảnh mới, dạy AI lại rồi thử đúng sáu ảnh T1–T6 đã lưu.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao thảo luận nhóm. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
          "students": "Trong 11 phút, em dạy thêm ảnh rồi thử lại trên máy.",
          "answer": "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Em bắt đầu bằng việc tìm xem ảnh học đang thiếu điều kiện nào."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Chọn điểm cần bổ sung.",
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
      "number": 14
    },
    {
      "type": "step",
      "step": 1,
      "time": 0,
      "id": "04-13",
      "title": "Bước 1 — Chọn điều cần cải tiến",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Bảng thử giúp em chọn điều cần bổ sung. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Dùng kết quả T1–T6 để tìm điều cần xem lại.\nXem dòng nào nhận chưa đúng và kiểm tra ảnh học có thiếu kiểu vật hoặc điều kiện đó không.\nNếu cả sáu đều đúng, ghi điều kiện chưa thử. Không cần tạo lỗi để có bài làm.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 1 phút, em làm bước này trên máy.",
          "answer": "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Đã chọn điều cần bổ sung, nhóm thêm ảnh mới mà không dùng lại ảnh kiểm thử."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Xem lượt thử chưa phù hợp.",
        "Tìm điều kiện ảnh học còn thiếu.",
        "Nếu đều đúng, nêu điều kiện chưa thử."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "folders",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Bảng thử giúp em chọn điều cần bổ sung.",
      "number": 15
    },
    {
      "type": "step",
      "step": 2,
      "time": 0,
      "id": "04-14",
      "title": "Bước 2 — Thêm ảnh học mới",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã chọn điều cần sửa. Giờ em thêm ảnh mới. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Ảnh học bổ sung phải khác các tệp T1–T6.\nThêm ảnh mới đúng nhãn vào thư mục Ảnh học. Ghi số ảnh và lí do.\nGiữ T1–T6 trong thư mục Ảnh thử, không thêm vào dạy AI.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 1 phút, em làm bước này trên máy.",
          "answer": "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Ảnh mới chỉ có tác dụng khi mô hình được dạy AI lại với bộ dữ liệu đã đổi."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Chụp ảnh khác T1–T6.",
        "Đặt đúng nhãn Bút/Cốc.",
        "Ghi số ảnh thêm và lí do."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "folders",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Em đã chọn điều cần sửa. Giờ em thêm ảnh mới.",
      "number": 16
    },
    {
      "type": "step",
      "step": 3,
      "time": 0,
      "id": "04-15",
      "title": "Bước 3 — dạy AI lại",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Ảnh mẫu đã đổi. Em cần dạy AI lại. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Dạy AI lại sau khi thêm ảnh học.\nGiữ nguyên tên hai nhóm Bút/Cốc và ghi số ảnh đã thêm.\nThêm ảnh chưa bảo đảm kết quả sẽ tăng. Cần thử lại để biết.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 1 phút, em làm bước này trên máy.",
          "answer": "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Giờ dùng đúng sáu ảnh cũ để biết kết quả đã thay đổi ra sao."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Giữ hai nhãn Bút/Cốc.",
        "Dùng bộ ảnh đã bổ sung.",
        "Chưa kết luận kết quả sẽ tốt hơn."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "folders",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "Ảnh mẫu đã đổi. Em cần dạy AI lại.",
      "number": 17
    },
    {
      "type": "step",
      "step": 4,
      "time": 0,
      "id": "04-16",
      "title": "Bước 4 — Thử lại cùng bộ ảnh",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: AI đã học lại. Em thử đúng sáu tệp cũ. Trong 1 phút, em làm bước này trên máy.",
          "explanation": "Thử lại đúng sáu ảnh T1–T6 đã lưu.\nSo số ảnh nhận đúng trước và sau. Kết quả có thể tăng, giữ nguyên hoặc giảm.\nĐây là so sánh trên sáu ảnh đã chọn. Muốn biết với ảnh khác, phải thử thêm.\nDùng cùng sáu tệp giúp so hai lượt ở phạm vi bài học. Sau khi dựa vào chúng để chọn cải tiến, chúng không còn là bằng chứng kiểm tra độc lập cho khả năng tổng quát. Muốn kiểm rộng hơn cần ảnh mới.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 1 phút, em làm bước này trên máy.",
          "answer": "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu mẫu so kết quả trước và sau."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Thử đúng T1–T6.",
        "So số ảnh đúng trước–sau.",
        "Tăng, bằng hoặc giảm đều ghi thật."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "before-after",
      "taskLines": [
        "Trong 1 phút, em làm bước này trên máy."
      ],
      "connector": "AI đã học lại. Em thử đúng sáu tệp cũ.",
      "number": 18
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
          "AI gọi Bút: chưa đúng",
          "Thêm ảnh cốc nghiêng khác T4",
          "AI gọi Cốc: đúng với ảnh này",
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
        "Trong 30 giây, em nghĩ cách điền ô cuối tại chỗ."
      ],
      "connector": "Em xem cách điền trước khi tự làm.",
      "note": {
        "activity": "Thầy/Cô làm mẫu",
        "purpose": "Nhìn cách làm trước khi tự thực hiện.",
        "teacher": "Thầy/Cô giải thích bốn ô đã điền.",
        "students": "Em nghĩ về ô cuối tại chỗ.",
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
          "delivery": "Thầy/Cô chỉ lần lượt các ô đã điền. Giữ ô cuối trống trong 30 giây. Gọi 1–2 em tại chỗ. Bấm Mở ô cuối sau khi các em trả lời. Chỉ chuyển sang tự làm khi các em hiểu cách điền.",
          "students": "Em tự nghĩ ô cuối. Chưa trao đổi khi Thầy/Cô chưa ra hiệu.",
          "answer": "Ở T4, AI hết nhầm sau lần sửa này",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 19
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.2 Điều chỉnh và so sánh",
        "intro": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
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
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "So sánh đúng sáu ảnh đã lưu trước và sau. Không trộn những ảnh đó vào ảnh học.",
          "Kết quả có thể tăng, giữ nguyên hoặc giảm. Cần nêu ảnh bổ sung, lí do và số ảnh nhận đúng.",
          "Vì đã dùng bộ T để xem xét điều chỉnh, kết quả trên T không phải đánh giá độc lập cho mọi ảnh mới. Muốn đánh giá tiếp, chuẩn bị thêm ảnh chưa dùng trong quá trình này."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao thảo luận nhóm. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
          "students": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "answer": "So sánh đúng sáu ảnh đã lưu trước và sau. Không trộn những ảnh đó vào ảnh học.\nKết quả có thể tăng, giữ nguyên hoặc giảm. Cần nêu ảnh bổ sung, lí do và số ảnh nhận đúng.\nVì đã dùng bộ T để xem xét điều chỉnh, kết quả trên T không phải đánh giá độc lập cho mọi ảnh mới. Muốn đánh giá tiếp, chuẩn bị thêm ảnh chưa dùng trong quá trình này.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Nhóm hãy báo cáo điều số liệu cho thấy, kể cả khi kết quả không tăng."
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
        "Trong 2 phút, em so kết quả với em ngồi cạnh."
      ],
      "sampleId": "04-17-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 20
    },
    {
      "type": "report",
      "id": "04-18",
      "title": "Kết quả cho phép nói đến đâu?",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã có bảng ghi. Em dùng bảng để giải thích kết quả. Trong 30 giây, em kể một kết quả tại chỗ.",
          "explanation": "Dùng bảng ghi của nhóm để trả lời ba câu hỏi. Nhóm khác nêu một điểm cần hỏi thêm.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em kể một kết quả tại chỗ.",
          "answer": "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Bảng trước–sau cho biết phạm vi em đã thử. Em sẽ sửa những câu nói vượt quá phạm vi đó."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Em đã thay đổi gì?",
        "Số đúng thay đổi ra sao?",
        "Điều gì chưa được kiểm tra?"
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em kể một kết quả tại chỗ."
      ],
      "connector": "Em đã có bảng ghi. Em dùng bảng để giải thích kết quả.",
      "number": 21
    },
    {
      "type": "divider",
      "id": "04-20",
      "title": "Luyện tập: kết luận vừa đủ",
      "note": {
        "activity": "Luyện tập cá nhân",
        "purpose": "Phát hiện kết luận vượt quá bằng chứng.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Sửa câu và nêu một lí do cho mỗi câu.",
        "report": "Một HS đọc kết luận đã giới hạn phạm vi.",
        "conclusion": "Thử nghiệm nhỏ giúp phát hiện vấn đề, không chứng minh mô hình hoàn hảo.",
        "assessment": "Đạt khi sửa đúng ít nhất 2/3 và không dùng ảnh kiểm thử để tự chứng minh tiến bộ.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em dùng kết quả vừa có để tự kiểm cách hiểu. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc tên hoạt động trên slide.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu mẫu sửa một câu nói quá chắc."
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
      "number": 22
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
        "context": "Ví dụ: Nhận đúng hai ảnh nghĩa là luôn đúng.",
        "labels": [
          "Câu gốc",
          "Điều đã đo",
          "Điều chưa đo",
          "Câu sửa",
          "Cách kiểm thêm"
        ],
        "values": [
          "AI sẽ luôn nhận đúng",
          "Đúng hai ảnh đã thử",
          "Các ảnh và điều kiện khác",
          "AI đúng hai ảnh này, cần thử thêm",
          "Dùng ảnh mới và so vật thật"
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
        "teacher": "Thầy/Cô giải thích bốn ô đã điền.",
        "students": "Em nghĩ về ô cuối tại chỗ.",
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
          "explanation": "Ví dụ: Nhận đúng hai ảnh nghĩa là luôn đúng.\nChỉ kết luận trong phần đã thử.\nĐừng biến kết quả nhỏ thành bảo đảm.\nEm nêu thêm cách kiểm.",
          "delivery": "Thầy/Cô chỉ lần lượt các ô đã điền. Giữ ô cuối trống trong 30 giây. Gọi 1–2 em tại chỗ. Bấm Mở ô cuối sau khi các em trả lời. Chỉ chuyển sang tự làm khi các em hiểu cách điền.",
          "students": "Em tự nghĩ ô cuối. Chưa trao đổi khi Thầy/Cô chưa ra hiệu.",
          "answer": "Dùng ảnh mới và so vật thật",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 23
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.3 Kết luận có căn cứ",
        "intro": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
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
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Sửa câu và nêu một lí do cho mỗi câu.",
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
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "explanation": "99% trên một dự đoán là điểm mô hình hiển thị, không phải chứng nhận nhãn đúng hay độ chính xác trên mọi ảnh. Luôn đối chiếu tên vật thật.",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao thảo luận nhóm. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
          "students": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "answer": "1. Mô hình nhận đúng sáu ảnh này trong điều kiện đã ghi. Cần thử thêm ảnh mới.\n2. Ảnh đã học không đủ chứng minh khả năng với ảnh mới. Giữ ảnh thử ngoài ảnh học.\n3. 99% là điểm mô hình hiển thị cho dự đoán ở ảnh này. Không bảo đảm tên vật đúng. Vẫn so với vật thật và thử thêm ảnh mới.",
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
        "Trong 2 phút, em so kết quả với em ngồi cạnh."
      ],
      "sampleId": "04-21-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 24
    },
    {
      "type": "recap",
      "id": "04-19",
      "title": "Kiến thức cần nhớ",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng. Thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Những việc vừa làm giúp em rút ra ba ý. Trong 30 giây, em giải thích một ý tại chỗ.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 30 giây, em giải thích một ý tại chỗ.",
          "answer": "Cải tiến cần được kiểm tra. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm. Kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Bảng sáu ảnh còn giới hạn. Em chọn một điều kiện chưa thử và thiết kế cách kiểm tiếp."
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Giữ ảnh thử riêng với ảnh học.",
        "So cùng bộ ảnh trước và sau thay đổi.",
        "Đúng sáu ảnh chưa chứng minh đúng mọi ảnh."
      ],
      "phase": "Luyện tập / Thực hành",
      "scene": "test",
      "taskLines": [
        "Trong 30 giây, em giải thích một ý tại chỗ."
      ],
      "connector": "Những việc vừa làm giúp em rút ra ba ý.",
      "number": 25
    },
    {
      "type": "divider",
      "id": "04-22",
      "title": "Vận dụng: kiểm tra điều còn thiếu",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Đề xuất thử nghiệm tiếp theo có kiểm soát.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Viết phép thử và điều có thể kết luận nếu kết quả thay đổi.",
        "report": "Một HS nêu đề xuất, lớp xác định yếu tố đổi.",
        "conclusion": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
        "assessment": "Nhận xét 6.D2.1 qua đề xuất và lí do, không chỉ dựa vào thao tác máy.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em dùng cách làm vừa học trong một việc mới. Trong 10 giây, em đọc tên hoạt động trên slide.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Trong 10 giây, em đọc tên hoạt động trên slide.",
          "answer": "",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nói: Trước khi tự làm, em xem mẫu mẫu lập phép thử tiếp theo."
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
      "number": 26
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
          "Góc chụp từ trên",
          "Ảnh cốc mới, nhìn rõ miệng cốc",
          "Cốc",
          "Để riêng khỏi ảnh dạy AI",
          "Ghi dự đoán rồi so với cốc thật"
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
        "teacher": "Thầy/Cô giải thích bốn ô đã điền.",
        "students": "Em nghĩ về ô cuối tại chỗ.",
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
          "delivery": "Thầy/Cô chỉ lần lượt các ô đã điền. Giữ ô cuối trống trong 30 giây. Gọi 1–2 em tại chỗ. Bấm Mở ô cuối sau khi các em trả lời. Chỉ chuyển sang tự làm khi các em hiểu cách điền.",
          "students": "Em tự nghĩ ô cuối. Chưa trao đổi khi Thầy/Cô chưa ra hiệu.",
          "answer": "Ghi dự đoán rồi so với cốc thật",
          "closing": "Thầy/Cô nhắc: học cách điền, không chép kết quả mẫu.",
          "transition": "Thầy/Cô nói: Em đã hiểu cách điền. Giờ em tự làm bài của em."
        }
      },
      "number": 27
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.3 Kết luận có căn cứ",
        "intro": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
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
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Viết phép thử và điều có thể kết luận nếu kết quả thay đổi.",
        "report": "Một HS nêu đề xuất, lớp xác định yếu tố đổi.",
        "conclusion": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
        "assessment": "Thầy/Cô xem từng mục đã điền. Em nêu căn cứ khi được hỏi. Chấp nhận cách diễn đạt đúng khác lời mẫu.",
        "answers": [
          "B Chấp nhận thử thêm kiểu cốc, góc hoặc nền. Chỉ ra biến đổi và nhãn thật."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do Thầy/Cô thiết kế.",
        "time": "Thầy/Cô dùng mốc chung của hoạt động. Các bước nhỏ không tạo thêm thời gian.",
        "script": {
          "opening": "Thầy/Cô nói: Em đã xem mẫu. Giờ em tự làm theo cách đó. Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "explanation": "",
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. Thầy/Cô giữ lượt cá nhân trước. Sau 3 phút mới cho so theo cặp. Thầy/Cô gọi 1–2 em trả lời tại chỗ. Không giao thảo luận nhóm. Thời gian ghi phiếu nằm trong hoạt động chính, không cộng hai lần.",
          "students": "Trong 3 phút, em tự điền trên phiếu. Trong 2 phút, em so kết quả với em ngồi cạnh.",
          "answer": "B Chấp nhận thử thêm kiểu cốc, góc hoặc nền. Chỉ ra biến đổi và nhãn thật.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Giữ bảng thử và kế hoạch. Chúng sẽ làm minh chứng cho điều nhóm thực sự biết."
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
        "Trong 2 phút, em so kết quả với em ngồi cạnh."
      ],
      "sampleId": "04-23-mau",
      "connector": "Em đã xem mẫu. Giờ em tự làm theo cách đó.",
      "number": 28
    },
    {
      "type": "home",
      "id": "04-24",
      "title": "Lưu kết quả, nêu giới hạn",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Đề xuất thử nghiệm tiếp theo có kiểm soát.",
        "teacher": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm.",
        "students": "Viết phép thử và điều có thể kết luận nếu kết quả thay đổi.",
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
          "delivery": "Thầy/Cô làm mẫu trước. Gọi 1–2 em trả lời ô cuối. Chưa giao trao đổi khi các em chưa hiểu cách làm. ",
          "students": "Sau giờ học, em ghi một quan sát vào vở.",
          "answer": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
          "closing": "Thầy/Cô chốt một ý bằng kết quả các em vừa nêu.",
          "transition": "Thầy/Cô nối ý: Với hình ảnh, em đối chiếu vật thật. Với câu trả lời học tập, nguồn kiểm sẽ là gì?"
        }
      },
      "theme": "cream",
      "v6": true,
      "screen": [
        "Đã thay đổi gì?",
        "Đã quan sát được gì?",
        "Chưa thể khẳng định điều gì?"
      ],
      "phase": "Vận dụng",
      "scene": "test",
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
