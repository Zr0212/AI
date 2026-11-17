window.AI6_LESSON={
  "id": 4,
  "title": "Bài 4. Kiểm thử và cải tiến mô hình AI",
  "mode": "Trực tiếp tại phòng Tin học",
  "count": 24,
  "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
  "materials": "Dự án/ảnh có nhãn tiết 3; bút và cốc mới; bộ sáu đầu vào kiểm thử T1–T6; webcam; P4.1–P4.3. GV có mô hình và bảng kết quả dự phòng, ghi rõ nguồn thực hay dữ liệu mô phỏng.",
  "alternatives": "Xem lại dữ liệu nhóm, luân phiên người đưa vật, người đọc dự đoán, người ghi và người đối chiếu nhãn.",
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
  "outcome": "Bảng sáu lượt thử trước và sau cùng nhận xét giới hạn",
  "slides": [
    {
      "type": "cover",
      "id": "04-01",
      "number": 1,
      "title": "Bài 4. Kiểm thử và cải tiến mô hình AI",
      "note": {
        "activity": "Khởi động",
        "purpose": "Nhận ra cần bằng chứng mới khi đánh giá mô hình.",
        "teacher": "Nêu tình huống từ mô hình tiết 3. Hỏi lại Mẫu này từng có trong tập huấn luyện chưa?",
        "students": "Thảo luận cặp và đề xuất một vật/góc chụp mới.",
        "report": "Hai HS giải thích vì sao phải có nhãn thực để đối chiếu.",
        "conclusion": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
        "assessment": "Nếu HS chỉ đề nghị xem phần trăm cao, yêu cầu nêu phép đối chiếu đúng/sai.",
        "answers": [
          "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Hôm nay mình bắt đầu: Bài 4. Kiểm thử và cải tiến mô hình AI. Sản phẩm cần có là Bảng sáu lượt thử trước và sau cùng nhận xét giới hạn.",
          "explanation": "Trong tiết này, học sinh cần:\nChuẩn bị sáu ảnh mới và xác định tên đúng của đồ vật trong ảnh.\nThử trước và sau khi bổ sung ảnh học; ghi đúng kết quả.\nSo sánh sáu ảnh đã thử và nêu điều còn cần kiểm tra thêm.",
          "delivery": "Đọc đầu bài, nêu sản phẩm cuối và mời một ví dụ quen thuộc. Chưa chiếu đáp án hay giao thao tác công cụ ở slide này.",
          "answer": "• Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
          "closing": "Giới thiệu mục tiêu và sản phẩm; chưa yêu cầu HS thực hiện công cụ ở slide bìa.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Sau bài học, em làm được gì?.",
          "students": "Đọc tên bài, liên hệ một trải nghiệm hoặc một câu hỏi mình muốn tìm hiểu."
        }
      },
      "theme": "blue",
      "originalNumber": 1
    },
    {
      "type": "goals",
      "goals": [
        "Chuẩn bị sáu ảnh mới và xác định tên đúng của đồ vật trong ảnh.",
        "Thử trước và sau khi bổ sung ảnh học; ghi đúng kết quả.",
        "So sánh sáu ảnh đã thử và nêu điều còn cần kiểm tra thêm."
      ],
      "outcome": "Bảng sáu lượt thử trước và sau cùng nhận xét giới hạn",
      "id": "04-02",
      "number": 2,
      "title": "Sau bài học, em làm được gì?",
      "note": {
        "activity": "Khởi động",
        "purpose": "Nhận ra cần bằng chứng mới khi đánh giá mô hình.",
        "teacher": "Nêu tình huống từ mô hình tiết 3. Hỏi lại Mẫu này từng có trong tập huấn luyện chưa?",
        "students": "Thảo luận cặp và đề xuất một vật/góc chụp mới.",
        "report": "Hai HS giải thích vì sao phải có nhãn thực để đối chiếu.",
        "conclusion": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
        "assessment": "Nếu HS chỉ đề nghị xem phần trăm cao, yêu cầu nêu phép đối chiếu đúng/sai.",
        "answers": [
          "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Cuối tiết/giai đoạn này, em cần làm được ba việc sau.",
          "explanation": "Chuẩn bị sáu ảnh mới và xác định tên đúng của đồ vật trong ảnh.\nThử trước và sau khi bổ sung ảnh học; ghi đúng kết quả.\nSo sánh sáu ảnh đã thử và nêu điều còn cần kiểm tra thêm.",
          "delivery": "Nói ngắn gọn từng mục tiêu. Hỏi một HS: “Cuối hoạt động, em dùng sản phẩm nào để cho thấy mình đã làm được?”. Tránh diễn giải toàn bộ nội dung trước khi trải nghiệm.",
          "answer": "• Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
          "closing": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
          "transition": "Dùng kết quả vừa có để chuyển sang: KHỞI ĐỘNG.",
          "students": "Đọc mục tiêu, xác định sản phẩm cần có và hỏi phần chưa rõ."
        }
      },
      "theme": "cream",
      "originalNumber": 2
    },
    {
      "type": "divider",
      "id": "04-03",
      "number": 3,
      "title": "KHỞI ĐỘNG",
      "note": {
        "activity": "Khởi động",
        "purpose": "Nhận ra cần bằng chứng mới khi đánh giá mô hình.",
        "teacher": "Nêu tình huống từ mô hình tiết 3. Hỏi lại Mẫu này từng có trong tập huấn luyện chưa?",
        "students": "Thảo luận cặp và đề xuất một vật/góc chụp mới.",
        "report": "Hai HS giải thích vì sao phải có nhãn thực để đối chiếu.",
        "conclusion": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
        "assessment": "Nếu HS chỉ đề nghị xem phần trăm cao, yêu cầu nêu phép đối chiếu đúng/sai.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình chuyển sang khởi động.",
          "explanation": "Đây là slide báo chuyển hoạt động; đọc tiêu đề và chuyển ngay sang nhiệm vụ, không dành thêm một mốc thời gian.",
          "delivery": "Ổn định nhóm/thiết bị nếu cần, rồi chuyển slide. Không đọc lại toàn bộ quy trình hay cộng thêm một hoạt động mới.",
          "answer": "",
          "closing": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Nhận đúng ảnh quen đã đủ chưa?.",
          "students": "Chuyển sự chú ý sang hoạt động mới; chưa làm phiếu hay trả lời ở slide chuyển phần."
        }
      },
      "theme": "blue",
      "originalNumber": 3
    },
    {
      "type": "scenario",
      "text": "Mô hình gọi đúng chiếc cốc vừa chụp nhiều lần. Có thể nói mô hình nhận đúng mọi cốc không? Cần thử thêm gì?",
      "task": "Thảo luận cặp và đề xuất một vật/góc chụp mới.",
      "answer": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
      "visual": "cups",
      "time": 2,
      "id": "04-04",
      "number": 4,
      "title": "Nhận đúng ảnh quen đã đủ chưa?",
      "note": {
        "activity": "Khởi động",
        "purpose": "Nhận ra cần bằng chứng mới khi đánh giá mô hình.",
        "teacher": "Nêu tình huống từ mô hình tiết 3. Hỏi lại Mẫu này từng có trong tập huấn luyện chưa?",
        "students": "Thảo luận cặp và đề xuất một vật/góc chụp mới.",
        "report": "Hai HS giải thích vì sao phải có nhãn thực để đối chiếu.",
        "conclusion": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
        "assessment": "Nếu HS chỉ đề nghị xem phần trăm cao, yêu cầu nêu phép đối chiếu đúng/sai.",
        "answers": [
          "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mô hình gọi đúng chiếc cốc vừa chụp nhiều lần. Có thể nói mô hình nhận đúng mọi cốc không? Cần thử thêm gì?",
          "explanation": "Mô hình gọi đúng chiếc cốc vừa chụp nhiều lần. Có thể nói mô hình nhận đúng mọi cốc không? Cần thử thêm gì?",
          "delivery": "Nêu tình huống từ mô hình tiết 3. Hỏi lại Mẫu này từng có trong tập huấn luyện chưa?\nHai HS giải thích vì sao phải có nhãn thực để đối chiếu.",
          "answer": "• Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
          "closing": "Kết quả trên ảnh quen chưa cho biết khả năng với đầu vào mới.",
          "transition": "Dùng kết quả vừa có để chuyển sang: KHÁM PHÁ 1: LẬP VÀ THỰC HIỆN BỘ KIỂM THỬ.",
          "students": "Thảo luận cặp và đề xuất một vật/góc chụp mới."
        }
      },
      "theme": "cream",
      "originalNumber": 4
    },
    {
      "type": "divider",
      "id": "04-05",
      "number": 5,
      "title": "KHÁM PHÁ 1: LẬP VÀ THỰC HIỆN BỘ KIỂM THỬ",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Thu được kết quả sáu trường hợp chưa dùng huấn luyện.",
        "teacher": "Phát bảng, yêu cầu giữ thứ tự mẫu và gán nhãn trước khi xem dự đoán. Nhắc cùng một điều kiện thử trước/sau; kết quả không rõ thì ghi không xác định và tính chưa đúng.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng; không yêu cầu phải có lỗi mới đạt.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình chuyển sang khám phá 1: lập và thực hiện bộ kiểm thử.",
          "explanation": "Đây là slide báo chuyển hoạt động; đọc tiêu đề và chuyển ngay sang nhiệm vụ, không dành thêm một mốc thời gian.",
          "delivery": "Ổn định nhóm/thiết bị nếu cần, rồi chuyển slide. Không đọc lại toàn bộ quy trình hay cộng thêm một hoạt động mới.",
          "answer": "",
          "closing": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Dữ liệu đang thiếu điều gì?.",
          "students": "Chuyển sự chú ý sang hoạt động mới; chưa làm phiếu hay trả lời ở slide chuyển phần."
        }
      },
      "theme": "blue",
      "originalNumber": 5
    },
    {
      "type": "question",
      "question": "Dữ liệu đang thiếu điều gì?",
      "instruction": "Nếu chỉ học từ ảnh chụp cùng một góc, máy có nhận tốt ảnh ở góc khác không? Hãy tìm lí do trong video.",
      "poster": "frame_3_135.jpg",
      "id": "04-06",
      "number": 6,
      "title": "Dữ liệu đang thiếu điều gì?",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Thu được kết quả sáu trường hợp chưa dùng huấn luyện.",
        "teacher": "Phát bảng, yêu cầu giữ thứ tự mẫu và gán nhãn trước khi xem dự đoán. Nhắc cùng một điều kiện thử trước/sau; kết quả không rõ thì ghi không xác định và tính chưa đúng.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng; không yêu cầu phải có lỗi mới đạt.",
        "answers": [
          "Có thể nhận kém ở góc khác nếu ảnh học chưa bao quát điều kiện đó. Chỉ từ mô tả chưa biết chắc đúng hay sai.",
          "Thêm ảnh học phù hợp và thử bằng ảnh mới có tên đúng để đối chiếu; không dùng chính dự đoán làm đáp án."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Nếu chỉ học từ ảnh chụp cùng một góc, máy có nhận tốt ảnh ở góc khác không? Hãy tìm lí do trong video.",
          "explanation": "Nếu chỉ học từ ảnh chụp cùng một góc, máy có nhận tốt ảnh ở góc khác không? Hãy tìm lí do trong video.",
          "delivery": "Phát bảng, yêu cầu giữ thứ tự mẫu và gán nhãn trước khi xem dự đoán. Nhắc cùng một điều kiện thử trước/sau; kết quả không rõ thì ghi không xác định và tính chưa đúng.\nMột nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
          "answer": "• Có thể nhận kém ở góc khác nếu ảnh học chưa bao quát điều kiện đó. Chỉ từ mô tả chưa biết chắc đúng hay sai.\n• Thêm ảnh học phù hợp và thử bằng ảnh mới có tên đúng để đối chiếu; không dùng chính dự đoán làm đáp án.",
          "closing": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Video: Vì sao dữ liệu cần đa dạng?.",
          "students": "Suy nghĩ về câu hỏi định hướng, ghi một dự đoán và tìm chi tiết đối chiếu khi xem video."
        }
      },
      "theme": "cream",
      "originalNumber": 6
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
        "question": "Nếu chỉ học từ ảnh chụp cùng một góc, máy có nhận tốt ảnh ở góc khác không? Hãy tìm lí do trong video.",
        "local": "code-3.mp4"
      },
      "id": "04-07",
      "number": 7,
      "title": "Video: Vì sao dữ liệu cần đa dạng?",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Thu được kết quả sáu trường hợp chưa dùng huấn luyện.",
        "teacher": "Phát bảng, yêu cầu giữ thứ tự mẫu và gán nhãn trước khi xem dự đoán. Nhắc cùng một điều kiện thử trước/sau; kết quả không rõ thì ghi không xác định và tính chưa đúng.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng; không yêu cầu phải có lỗi mới đạt.",
        "answers": [
          "Có thể nhận kém ở góc khác nếu ảnh học chưa bao quát điều kiện đó. Chỉ từ mô tả chưa biết chắc đúng hay sai.",
          "Thêm ảnh học phù hợp và thử bằng ảnh mới có tên đúng để đối chiếu; không dùng chính dự đoán làm đáp án."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Trước khi xem: Nếu chỉ học từ ảnh chụp cùng một góc, máy có nhận tốt ảnh ở góc khác không? Hãy tìm lí do trong video.",
          "explanation": "Xem đoạn 120–150 giây. Lời dẫn và câu hỏi Việt là học liệu GV biên soạn; không phải phụ đề chính thức.",
          "delivery": "Trước xem: giao một câu hỏi. Trong xem: cho HS chú ý một ví dụ, dừng khi cần giải nghĩa. Sau xem: mời hai ý kiến và yêu cầu chỉ chi tiết làm căn cứ. Nếu trình duyệt chặn âm thanh ở màn chiếu, bấm phát trực tiếp tại cửa sổ đó một lần.",
          "answer": "• Có thể nhận kém ở góc khác nếu ảnh học chưa bao quát điều kiện đó. Chỉ từ mô tả chưa biết chắc đúng hay sai.\n• Thêm ảnh học phù hợp và thử bằng ảnh mới có tên đúng để đối chiếu; không dùng chính dự đoán làm đáp án.",
          "closing": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Ảnh học và ảnh kiểm thử.",
          "students": "Quan sát chi tiết liên quan câu hỏi; nêu một nhận xét có căn cứ sau đoạn xem."
        }
      },
      "theme": "cream",
      "fallback": "Ảnh học chưa đa dạng có thể làm mô hình nhận kém ở điều kiện khác. Cần thử mới rồi đối chiếu với vật thật.",
      "originalNumber": 7
    },
    {
      "type": "concept",
      "cards": [
        [
          "Ảnh dùng để học",
          "Những ảnh được đưa vào quá trình huấn luyện."
        ],
        [
          "Ảnh dùng để thử",
          "Sáu ảnh mới T1–T6, có tên đồ vật thật để đối chiếu. Không đưa chúng vào ảnh học."
        ],
        [
          "Cách kiểm tra",
          "So tên mô hình đưa ra với đồ vật thật, rồi đếm số ảnh nhận đúng."
        ]
      ],
      "visual": "flow",
      "id": "04-08",
      "number": 8,
      "title": "Ảnh học và ảnh kiểm thử",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Thu được kết quả sáu trường hợp chưa dùng huấn luyện.",
        "teacher": "Phát bảng, yêu cầu giữ thứ tự mẫu và gán nhãn trước khi xem dự đoán. Nhắc cùng một điều kiện thử trước/sau; kết quả không rõ thì ghi không xác định và tính chưa đúng.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng; không yêu cầu phải có lỗi mới đạt.",
        "answers": [
          "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình cùng thực hiện: Ảnh học và ảnh kiểm thử",
          "explanation": "Ảnh dùng để học: Những ảnh được đưa vào quá trình huấn luyện.\nẢnh dùng để thử: Sáu ảnh mới T1–T6, có tên đồ vật thật để đối chiếu. Không đưa chúng vào ảnh học.\nCách kiểm tra: So tên mô hình đưa ra với đồ vật thật, rồi đếm số ảnh nhận đúng.",
          "delivery": "Giải thích lần lượt các khối trên slide. Sau mỗi ý, hỏi “Em có thể lấy một ví dụ hoặc nêu căn cứ không?”. Phát bảng, yêu cầu giữ thứ tự mẫu và gán nhãn trước khi xem dự đoán. Nhắc cùng một điều kiện thử trước/sau; kết quả không rõ thì ghi không xác định và tính chưa đúng.",
          "answer": "• Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
          "closing": "Ảnh để thử được giữ riêng với ảnh dùng để học.",
          "transition": "Dùng kết quả vừa có để chuyển sang: P4.1 — Sáu trường hợp T1–T6.",
          "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu."
        }
      },
      "theme": "cream",
      "diagram": [
        [
          "Thử lần đầu",
          "Ghi kết quả T1–T6."
        ],
        [
          "Bổ sung ảnh học",
          "Huấn luyện lại."
        ],
        [
          "So sánh lần sau",
          "Dùng lại ảnh T1–T6 đã lưu."
        ]
      ],
      "takeaway": "Ảnh để thử được giữ riêng với ảnh dùng để học.",
      "originalNumber": 8
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.1 Bộ kiểm thử mới",
        "intro": "Chụp và lưu riêng sáu tệp T1–T6 trước khi thử; không đưa các tệp này vào ảnh học.",
        "headers": null,
        "rows": null,
        "questions": [],
        "answers": [
          "Không có sẵn nhãn dự đoán đúng cho mọi nhóm. HS ghi kết quả thật và so với Bút/Cốc; không xác định được tính chưa đúng trong phép đếm này.",
          "Nhãn thật là thông tin đối chiếu, không lấy từ dự đoán của chính mô hình. Nếu chỉ dùng bảng mẫu GV cung cấp, ghi là phân tích dữ liệu dự phòng."
        ],
        "pages": [
          {
            "title": "Thử các ảnh T1–T3",
            "instruction": "Lưu đúng tệp T1–T6 theo mô tả. Trong Preview, chọn File để thử từng tệp. Giữ nguyên sáu tệp cho lần thử sau.",
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
                  "placeholder": "",
                  "key": "04-09-v3-0"
                },
                {
                  "label": "Nhận xét ảnh T1",
                  "placeholder": "",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-1"
                }
              ],
              [
                "T2: Bút, chụp nghiêng",
                {
                  "label": "Dự đoán ảnh T2",
                  "placeholder": "",
                  "key": "04-09-v3-2"
                },
                {
                  "label": "Nhận xét ảnh T2",
                  "placeholder": "",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-3"
                }
              ],
              [
                "T3: Bút, đổi nền nhưng không che vật",
                {
                  "label": "Dự đoán ảnh T3",
                  "placeholder": "",
                  "key": "04-09-v3-4"
                },
                {
                  "label": "Nhận xét ảnh T3",
                  "placeholder": "",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-5"
                }
              ]
            ]
          },
          {
            "title": "Thử các ảnh T4–T6",
            "instruction": "Lưu đúng tệp T1–T6 theo mô tả. Trong Preview, chọn File để thử từng tệp. Giữ nguyên sáu tệp cho lần thử sau.",
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
                  "placeholder": "",
                  "key": "04-09-v3-6"
                },
                {
                  "label": "Nhận xét ảnh T4",
                  "placeholder": "",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-7"
                }
              ],
              [
                "T5: Cốc, đổi góc chụp",
                {
                  "label": "Dự đoán ảnh T5",
                  "placeholder": "",
                  "key": "04-09-v3-8"
                },
                {
                  "label": "Nhận xét ảnh T5",
                  "placeholder": "",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-9"
                }
              ],
              [
                "T6: Cốc, đổi ánh sáng vừa phải",
                {
                  "label": "Dự đoán ảnh T6",
                  "placeholder": "",
                  "key": "04-09-v3-10"
                },
                {
                  "label": "Nhận xét ảnh T6",
                  "placeholder": "",
                  "options": [
                    "Đúng",
                    "Chưa đúng",
                    "Không có kết quả rõ"
                  ],
                  "key": "04-09-v3-11"
                }
              ]
            ]
          },
          {
            "title": "Đọc kết quả lần đầu",
            "instruction": "Đếm theo các dòng vừa ghi. Không có kết quả rõ thì chưa tính là nhận đúng.",
            "fields": [
              {
                "label": "1. Mô hình nhận đúng bao nhiêu ảnh trong sáu ảnh?",
                "placeholder": "Ghi: .../6",
                "key": "04-09-v3-12"
              },
              {
                "label": "2. Ảnh nào cần xem lại? Vì sao?",
                "placeholder": "Nếu cả sáu đều đúng, ghi điều kiện chưa thử.",
                "key": "04-09-v3-13"
              }
            ]
          }
        ]
      },
      "time": 5,
      "id": "04-09",
      "number": 9,
      "title": "P4.1 — Sáu trường hợp T1–T6",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Hoàn thành sáu trường hợp t1–t6 theo các bước trên phiếu.",
        "teacher": "Chuẩn bị sáu ảnh bằng camera của thiết bị hoặc công cụ chụp của GV, đặt mã T1–T6 và lưu ở thư mục Ảnh_thử. Sau khi mô hình sẵn sàng, tại Preview đổi nguồn Input sang File và tải từng ảnh. Không chỉ giơ vật lại trước webcam: đó không còn là cùng tệp ảnh. Nếu lớp dùng dữ liệu GV cung cấp, ghi đúng hình thức.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng; không yêu cầu phải có lỗi mới đạt.",
        "answers": [
          "Không có sẵn nhãn dự đoán đúng cho mọi nhóm. HS ghi kết quả thật và so với Bút/Cốc; không xác định được tính chưa đúng trong phép đếm này.",
          "Nhãn thật là thông tin đối chiếu, không lấy từ dự đoán của chính mô hình. Nếu chỉ dùng bảng mẫu GV cung cấp, ghi là phân tích dữ liệu dự phòng."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình cùng thực hiện: P4.1 — Sáu trường hợp T1–T6",
          "explanation": "Thử các ảnh T1–T3: Lưu đúng tệp T1–T6 theo mô tả. Trong Preview, chọn File để thử từng tệp. Giữ nguyên sáu tệp cho lần thử sau.\nThử các ảnh T4–T6: Lưu đúng tệp T1–T6 theo mô tả. Trong Preview, chọn File để thử từng tệp. Giữ nguyên sáu tệp cho lần thử sau.\nĐọc kết quả lần đầu: Đếm theo các dòng vừa ghi. Không có kết quả rõ thì chưa tính là nhận đúng.",
          "delivery": "Đọc trang đang mở, chỉ rõ dữ kiện và ô cần ghi. Cho HS trả lời trước, yêu cầu nêu căn cứ rồi mở gợi ý riêng. Dùng Trang sau của phiếu để chuyển bước; không chấm câu mở theo một chuỗi chữ cố định.",
          "answer": "• Không có sẵn nhãn dự đoán đúng cho mọi nhóm. HS ghi kết quả thật và so với Bút/Cốc; không xác định được tính chưa đúng trong phép đếm này.\n• Nhãn thật là thông tin đối chiếu, không lấy từ dự đoán của chính mô hình. Nếu chỉ dùng bảng mẫu GV cung cấp, ghi là phân tích dữ liệu dự phòng.",
          "closing": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Đọc kết quả kiểm thử ban đầu.",
          "students": "Hoàn thành từng bước, dùng nhãn câu hỏi trên ô nhập để biết cần ghi gì."
        }
      },
      "theme": "cream",
      "originalNumber": 9
    },
    {
      "type": "conclusion",
      "text": "“Tên đúng” là tên của đồ vật thật. “Dự đoán” là tên mô hình đưa ra. So hai tên này để biết lần thử có đúng không.",
      "task": "Chọn một ảnh và giải thích em đã đối chiếu thế nào.",
      "answer": "Đạt khi đủ sáu dòng và đối chiếu đúng; không yêu cầu phải có lỗi mới đạt.",
      "cards": [
        "Đừng lấy dự đoán của mô hình làm đáp án cho chính nó.",
        "Phần trăm hiện trên một ảnh không thay thế việc đối chiếu."
      ],
      "id": "04-10",
      "number": 10,
      "title": "Đọc kết quả kiểm thử ban đầu",
      "note": {
        "activity": "Khám phá 2.1 Lập và thực hiện bộ kiểm thử",
        "purpose": "Thu được kết quả sáu trường hợp chưa dùng huấn luyện.",
        "teacher": "Phát bảng, yêu cầu giữ thứ tự mẫu và gán nhãn trước khi xem dự đoán. Nhắc cùng một điều kiện thử trước/sau; kết quả không rõ thì ghi không xác định và tính chưa đúng.",
        "students": "Thử sáu lượt mới, đọc dự đoán, ghi trung thực và tính số lượt đúng trên sáu.",
        "report": "Một nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
        "conclusion": "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
        "assessment": "Đạt khi đủ sáu dòng và đối chiếu đúng; không yêu cầu phải có lỗi mới đạt.",
        "answers": [
          "Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "“Tên đúng” là tên của đồ vật thật. “Dự đoán” là tên mô hình đưa ra. So hai tên này để biết lần thử có đúng không.",
          "explanation": "“Tên đúng” là tên của đồ vật thật. “Dự đoán” là tên mô hình đưa ra. So hai tên này để biết lần thử có đúng không.",
          "delivery": "Phát bảng, yêu cầu giữ thứ tự mẫu và gán nhãn trước khi xem dự đoán. Nhắc cùng một điều kiện thử trước/sau; kết quả không rõ thì ghi không xác định và tính chưa đúng.\nMột nhóm nêu một dòng rõ; một nhóm nêu dòng khó.",
          "answer": "• Đánh giá dựa trên nhãn thực và đầu ra quan sát; không chỉ dựa vào độ tự tin.",
          "closing": "“Tên đúng” là tên của đồ vật thật. “Dự đoán” là tên mô hình đưa ra. So hai tên này để biết lần thử có đúng không.",
          "transition": "Đã có kết quả lần đầu, chọn điều kiện ảnh học còn thiếu để bổ sung ảnh khác T1–T6 rồi thử lại.",
          "students": "Chọn một ảnh và giải thích em đã đối chiếu thế nào."
        }
      },
      "theme": "cream",
      "originalNumber": 10
    },
    {
      "type": "divider",
      "id": "04-11",
      "number": 11,
      "title": "KHÁM PHÁ 2: CẢI TIẾN VÀ SO SÁNH",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng; thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình chuyển sang khám phá 2: cải tiến và so sánh.",
          "explanation": "Đây là slide báo chuyển hoạt động; đọc tiêu đề và chuyển ngay sang nhiệm vụ, không dành thêm một mốc thời gian.",
          "delivery": "Ổn định nhóm/thiết bị nếu cần, rồi chuyển slide. Không đọc lại toàn bộ quy trình hay cộng thêm một hoạt động mới.",
          "answer": "",
          "closing": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Nhóm sẽ thay đổi điều gì?.",
          "students": "Chuyển sự chú ý sang hoạt động mới; chưa làm phiếu hay trả lời ở slide chuyển phần."
        }
      },
      "theme": "blue",
      "originalNumber": 11
    },
    {
      "type": "task",
      "text": "Chọn một điểm cần bổ sung ở ảnh học. Thêm ảnh mới, huấn luyện lại rồi thử đúng sáu ảnh T1–T6 đã lưu.",
      "product": "Bảng kết quả trước–sau, ảnh học đã thêm và lí do chọn thay đổi.",
      "roles": [
        "Thao tác",
        "Đọc nhiệm vụ",
        "Ghi kết quả",
        "Đối chiếu"
      ],
      "visual": "flow",
      "id": "04-12",
      "number": 12,
      "title": "Nhóm sẽ thay đổi điều gì?",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng; thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Chọn một điểm cần bổ sung ở ảnh học. Thêm ảnh mới, huấn luyện lại rồi thử đúng sáu ảnh T1–T6 đã lưu.",
          "explanation": "Chọn một điểm cần bổ sung ở ảnh học. Thêm ảnh mới, huấn luyện lại rồi thử đúng sáu ảnh T1–T6 đã lưu.\n\nBảng kết quả trước–sau, ảnh học đã thêm và lí do chọn thay đổi.",
          "delivery": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.\nPhân vai: Thao tác, Đọc nhiệm vụ, Ghi kết quả, Đối chiếu. Ghi đúng kết quả thực hiện và điều kiện của nhóm.",
          "answer": "• Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Xác định dữ liệu cần bổ sung.",
          "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng."
        }
      },
      "theme": "cream",
      "diagram": [
        [
          "Thử lần đầu",
          "Ghi kết quả T1–T6."
        ],
        [
          "Bổ sung ảnh học",
          "Huấn luyện lại."
        ],
        [
          "So sánh lần sau",
          "Dùng lại ảnh T1–T6 đã lưu."
        ]
      ],
      "originalNumber": 12
    },
    {
      "type": "step",
      "heading": "Chọn vấn đề có căn cứ",
      "text": "Dùng kết quả T1–T6 để tìm điều cần xem lại.",
      "steps": [
        "Xem dòng nào nhận chưa đúng và kiểm tra ảnh học có thiếu kiểu vật hoặc điều kiện đó không.",
        "Nếu cả sáu đều đúng, ghi điều kiện chưa thử; không cần tạo lỗi để có bài làm."
      ],
      "visual": "test",
      "step": 1,
      "time": 0,
      "id": "04-13",
      "number": 13,
      "title": "Xác định dữ liệu cần bổ sung",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng; thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Dùng kết quả T1–T6 để tìm điều cần xem lại.",
          "explanation": "Xem dòng nào nhận chưa đúng và kiểm tra ảnh học có thiếu kiểu vật hoặc điều kiện đó không.\nNếu cả sáu đều đúng, ghi điều kiện chưa thử; không cần tạo lỗi để có bài làm.",
          "delivery": "Làm mẫu đúng bước đang chiếu, sau đó để HS thực hiện.\nXem dòng nào nhận chưa đúng và kiểm tra ảnh học có thiếu kiểu vật hoặc điều kiện đó không.\nNếu cả sáu đều đúng, ghi điều kiện chưa thử; không cần tạo lỗi để có bài làm.\nHỏi HS vừa làm gì và dựa vào đâu để kiểm tra.",
          "answer": "• Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Bổ sung dữ liệu đúng nhãn.",
          "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng."
        }
      },
      "theme": "cream",
      "originalNumber": 13
    },
    {
      "type": "step",
      "heading": "Bổ sung dữ liệu học",
      "text": "Ảnh học bổ sung phải khác các tệp T1–T6.",
      "steps": [
        "Thêm ảnh mới đúng nhãn vào thư mục Ảnh học; ghi số ảnh và lí do.",
        "Giữ T1–T6 trong thư mục Ảnh thử, không thêm vào huấn luyện."
      ],
      "visual": "folders",
      "step": 2,
      "time": 0,
      "id": "04-14",
      "number": 14,
      "title": "Bổ sung dữ liệu đúng nhãn",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng; thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Ảnh học bổ sung phải khác các tệp T1–T6.",
          "explanation": "Thêm ảnh mới đúng nhãn vào thư mục Ảnh học; ghi số ảnh và lí do.\nGiữ T1–T6 trong thư mục Ảnh thử, không thêm vào huấn luyện.",
          "delivery": "Làm mẫu đúng bước đang chiếu, sau đó để HS thực hiện.\nGhi lớp, số ảnh thật, điều kiện và lí do.\nKiểm nhãn đúng; tiếp tục giữ T1–T6 ngoài tập học.\nHỏi HS vừa làm gì và dựa vào đâu để kiểm tra.",
          "answer": "• Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Huấn luyện lại.",
          "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng."
        }
      },
      "theme": "cream",
      "originalNumber": 14
    },
    {
      "type": "step",
      "heading": "Huấn luyện lại",
      "text": "Huấn luyện lại sau khi thêm ảnh học.",
      "steps": [
        "Giữ nguyên tên hai nhóm Bút/Cốc và ghi số ảnh đã thêm.",
        "Thêm ảnh chưa bảo đảm kết quả sẽ tăng; cần thử lại để biết."
      ],
      "visual": "flow",
      "step": 3,
      "time": 0,
      "id": "04-15",
      "number": 15,
      "title": "Huấn luyện lại",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng; thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Huấn luyện lại sau khi thêm ảnh học.",
          "explanation": "Giữ nguyên tên hai nhóm Bút/Cốc và ghi số ảnh đã thêm.\nThêm ảnh chưa bảo đảm kết quả sẽ tăng; cần thử lại để biết.",
          "delivery": "Làm mẫu đúng bước đang chiếu, sau đó để HS thực hiện.\nGiữ nguyên tên hai nhóm Bút/Cốc và ghi số ảnh đã thêm.\nThêm ảnh chưa bảo đảm kết quả sẽ tăng; cần thử lại để biết.\nHỏi HS vừa làm gì và dựa vào đâu để kiểm tra.",
          "answer": "• Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Thử lại sáu trường hợp.",
          "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng."
        }
      },
      "theme": "cream",
      "diagram": [
        [
          "Thử lần đầu",
          "Ghi kết quả T1–T6."
        ],
        [
          "Bổ sung ảnh học",
          "Huấn luyện lại."
        ],
        [
          "So sánh lần sau",
          "Dùng lại ảnh T1–T6 đã lưu."
        ]
      ],
      "originalNumber": 15
    },
    {
      "type": "step",
      "heading": "Thử lại và so sánh",
      "text": "Thử lại đúng sáu ảnh T1–T6 đã lưu.",
      "steps": [
        "So số ảnh nhận đúng trước và sau. Kết quả có thể tăng, giữ nguyên hoặc giảm.",
        "Đây là so sánh trên sáu ảnh đã chọn; muốn biết với ảnh khác, phải thử thêm."
      ],
      "visual": "test",
      "step": 4,
      "time": 0,
      "id": "04-16",
      "number": 16,
      "title": "Thử lại sáu trường hợp",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng; thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Thử lại đúng sáu ảnh T1–T6 đã lưu.",
          "explanation": "So số ảnh nhận đúng trước và sau. Kết quả có thể tăng, giữ nguyên hoặc giảm.\nĐây là so sánh trên sáu ảnh đã chọn; muốn biết với ảnh khác, phải thử thêm.",
          "delivery": "Làm mẫu đúng bước đang chiếu, sau đó để HS thực hiện.\nSo số ảnh nhận đúng trước và sau. Kết quả có thể tăng, giữ nguyên hoặc giảm.\nĐây là so sánh trên sáu ảnh đã chọn; muốn biết với ảnh khác, phải thử thêm.\nHỏi HS vừa làm gì và dựa vào đâu để kiểm tra.",
          "answer": "• Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "transition": "Dùng kết quả vừa có để chuyển sang: P4.2 — So sánh trước–sau.",
          "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng."
        }
      },
      "theme": "cream",
      "originalNumber": 16
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.2 Điều chỉnh và so sánh",
        "intro": "Sau khi bổ sung ảnh học và huấn luyện lại, thử đúng các ảnh T đã lưu. Chép kết quả lần trước từ P4.1.",
        "headers": null,
        "rows": null,
        "questions": [],
        "answers": [
          "So sánh đúng sáu ảnh đã lưu trước và sau; không trộn những ảnh đó vào ảnh học.",
          "Kết quả có thể tăng, giữ nguyên hoặc giảm. Cần nêu ảnh bổ sung, lí do và số ảnh nhận đúng.",
          "Vì đã dùng bộ T để xem xét điều chỉnh, kết quả trên T không phải đánh giá độc lập cho mọi ảnh mới. Muốn đánh giá tiếp, chuẩn bị thêm ảnh chưa dùng trong quá trình này."
        ],
        "pages": [
          {
            "title": "So sánh ảnh T1–T3",
            "instruction": "Sau khi bổ sung ảnh học và huấn luyện lại, thử đúng các ảnh T đã lưu. Chép kết quả lần trước từ P4.1.",
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
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-0"
                },
                {
                  "label": "Sau, ảnh T1",
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-1"
                }
              ],
              [
                "T2: Bút",
                {
                  "label": "Trước, ảnh T2",
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-2"
                },
                {
                  "label": "Sau, ảnh T2",
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-3"
                }
              ],
              [
                "T3: Bút",
                {
                  "label": "Trước, ảnh T3",
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-4"
                },
                {
                  "label": "Sau, ảnh T3",
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-5"
                }
              ]
            ]
          },
          {
            "title": "So sánh ảnh T4–T6",
            "instruction": "Sau khi bổ sung ảnh học và huấn luyện lại, thử đúng các ảnh T đã lưu. Chép kết quả lần trước từ P4.1.",
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
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-6"
                },
                {
                  "label": "Sau, ảnh T4",
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-7"
                }
              ],
              [
                "T5: Cốc",
                {
                  "label": "Trước, ảnh T5",
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-8"
                },
                {
                  "label": "Sau, ảnh T5",
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-9"
                }
              ],
              [
                "T6: Cốc",
                {
                  "label": "Trước, ảnh T6",
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-10"
                },
                {
                  "label": "Sau, ảnh T6",
                  "placeholder": "Tên dự đoán; đúng / chưa đúng",
                  "key": "04-17-v3-11"
                }
              ]
            ]
          },
          {
            "title": "Ghi thay đổi của nhóm",
            "instruction": "Chỉ bổ sung ảnh học khác các ảnh T1–T6.",
            "fields": [
              {
                "label": "1. Nhóm bổ sung ảnh gì và bao nhiêu ảnh?",
                "placeholder": "",
                "key": "04-17-v3-12"
              },
              {
                "label": "2. Vì sao chọn bổ sung những ảnh đó?",
                "placeholder": "",
                "key": "04-17-v3-13"
              },
              {
                "label": "3. Nhóm giữ nguyên những điều kiện nào khi so sánh?",
                "placeholder": "",
                "key": "04-17-v3-14"
              }
            ]
          },
          {
            "title": "Kết luận trước–sau",
            "instruction": "Kết quả có thể tăng, giữ nguyên hoặc giảm. Ghi theo bảng của nhóm.",
            "fields": [
              {
                "label": "1. Số ảnh đúng trước và sau là bao nhiêu?",
                "placeholder": "",
                "key": "04-17-v3-15"
              },
              {
                "label": "2. Trong sáu ảnh này, kết quả thay đổi thế nào?",
                "placeholder": "",
                "key": "04-17-v3-16"
              },
              {
                "label": "3. Muốn biết mô hình nhận các ảnh khác ra sao, em cần làm gì tiếp?",
                "placeholder": "",
                "key": "04-17-v3-17"
              }
            ]
          }
        ]
      },
      "time": 16,
      "id": "04-17",
      "number": 17,
      "title": "P4.2 — So sánh trước–sau",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Hoàn thành so sánh trước–sau theo các bước trên phiếu.",
        "teacher": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng; thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "So sánh đúng sáu ảnh đã lưu trước và sau; không trộn những ảnh đó vào ảnh học.",
          "Kết quả có thể tăng, giữ nguyên hoặc giảm. Cần nêu ảnh bổ sung, lí do và số ảnh nhận đúng.",
          "Vì đã dùng bộ T để xem xét điều chỉnh, kết quả trên T không phải đánh giá độc lập cho mọi ảnh mới. Muốn đánh giá tiếp, chuẩn bị thêm ảnh chưa dùng trong quá trình này."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình cùng thực hiện: P4.2 — So sánh trước–sau",
          "explanation": "So sánh ảnh T1–T3: Sau khi bổ sung ảnh học và huấn luyện lại, thử đúng các ảnh T đã lưu. Chép kết quả lần trước từ P4.1.\nSo sánh ảnh T4–T6: Sau khi bổ sung ảnh học và huấn luyện lại, thử đúng các ảnh T đã lưu. Chép kết quả lần trước từ P4.1.\nGhi thay đổi của nhóm: Chỉ bổ sung ảnh học khác các ảnh T1–T6.\nKết luận trước–sau: Kết quả có thể tăng, giữ nguyên hoặc giảm. Ghi theo bảng của nhóm.",
          "delivery": "Đọc trang đang mở, chỉ rõ dữ kiện và ô cần ghi. Cho HS trả lời trước, yêu cầu nêu căn cứ rồi mở gợi ý riêng. Dùng Trang sau của phiếu để chuyển bước; không chấm câu mở theo một chuỗi chữ cố định.",
          "answer": "• So sánh đúng sáu ảnh đã lưu trước và sau; không trộn những ảnh đó vào ảnh học.\n• Kết quả có thể tăng, giữ nguyên hoặc giảm. Cần nêu ảnh bổ sung, lí do và số ảnh nhận đúng.\n• Vì đã dùng bộ T để xem xét điều chỉnh, kết quả trên T không phải đánh giá độc lập cho mọi ảnh mới. Muốn đánh giá tiếp, chuẩn bị thêm ảnh chưa dùng trong quá trình này.",
          "closing": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Có thể kết luận đến đâu?.",
          "students": "Hoàn thành từng bước, dùng nhãn câu hỏi trên ô nhập để biết cần ghi gì."
        }
      },
      "theme": "cream",
      "originalNumber": 17
    },
    {
      "type": "report",
      "text": "Dùng bảng ghi của nhóm để trả lời ba câu hỏi. Nhóm khác nêu một điểm cần hỏi thêm.",
      "task": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
      "answer": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
      "product": "Bảng kết quả trước–sau, ảnh học đã thêm và lí do chọn thay đổi.",
      "id": "04-18",
      "number": 18,
      "title": "Có thể kết luận đến đâu?",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng; thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Dùng bảng ghi của nhóm để trả lời ba câu hỏi. Nhóm khác nêu một điểm cần hỏi thêm.",
          "explanation": "Dùng bảng ghi của nhóm để trả lời ba câu hỏi. Nhóm khác nêu một điểm cần hỏi thêm.\n\nBảng kết quả trước–sau, ảnh học đã thêm và lí do chọn thay đổi.",
          "delivery": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.\nMời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
          "answer": "• Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Kiến thức cần nhớ.",
          "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng."
        }
      },
      "theme": "cream",
      "reportQuestions": [
        "Nhóm bổ sung những ảnh học nào?",
        "Số ảnh nhận đúng trước–sau là bao nhiêu?",
        "Chưa thể kết luận điều gì từ sáu ảnh này?"
      ],
      "originalNumber": 18
    },
    {
      "type": "recap",
      "items": [
        "Để riêng ảnh thử, không đưa chúng vào ảnh dùng để huấn luyện.",
        "So kết quả trước–sau và ghi đúng điều quan sát được.",
        "Đúng sáu ảnh chưa có nghĩa sẽ đúng mọi ảnh khác."
      ],
      "id": "04-19",
      "number": 19,
      "title": "Kiến thức cần nhớ",
      "note": {
        "activity": "Khám phá 2.2 Cải tiến và so sánh",
        "purpose": "Thực hiện điều chỉnh có lí do và nhận xét trước–sau.",
        "teacher": "Yêu cầu dự đoán tác dụng của thay đổi trước khi thực hiện; giữ bộ kiểm thử ngoài dữ liệu học. Hỏi Chúng ta thay đổi yếu tố nào? Có vô tình thêm ảnh kiểm thử không? Hỗ trợ nhóm không có lỗi tìm điều kiện mới để khảo sát.",
        "students": "Bổ sung dữ liệu đúng nhãn, huấn luyện lại, ghi sáu kết quả sau và so sánh số lượt đúng.",
        "report": "Mời hai nhóm có kết quả khác nhau; báo cả trường hợp không tăng.",
        "conclusion": "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
        "assessment": "Đánh giá quy trình và bằng chứng, không thưởng riêng cho mức tăng; thiếu kiểm thử sau thì chưa đủ kết luận cải tiến.",
        "answers": [
          "Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mỗi em chọn một ý và giải thích bằng việc vừa làm.",
          "explanation": "Để riêng ảnh thử, không đưa chúng vào ảnh dùng để huấn luyện.\nSo kết quả trước–sau và ghi đúng điều quan sát được.\nĐúng sáu ảnh chưa có nghĩa sẽ đúng mọi ảnh khác.",
          "delivery": "Mời ba HS, mỗi em diễn đạt lại một ý. Yêu cầu nối với ví dụ hoặc minh chứng trong tiết học; chỉnh ngắn gọn nếu HS khái quát quá mức.",
          "answer": "• Cải tiến cần được kiểm chứng. Số lượt đúng có thể tăng, giữ nguyên hoặc giảm; kết luận chỉ trong bộ thử nhỏ và điều kiện đã ghi.",
          "closing": "Mời một HS giải thích một ý bằng ví dụ của chính nhóm.",
          "transition": "Dùng kết quả vừa có để chuyển sang: LUYỆN TẬP.",
          "students": "Nói lại một ý bằng lời riêng và lấy ví dụ vừa thực hiện."
        }
      },
      "theme": "cream",
      "originalNumber": 19
    },
    {
      "type": "divider",
      "id": "04-20",
      "number": 20,
      "title": "LUYỆN TẬP",
      "note": {
        "activity": "Luyện tập cá nhân",
        "purpose": "Phát hiện kết luận vượt quá bằng chứng.",
        "teacher": "Giao cá nhân và cho dùng bảng nhóm để giải thích. Gợi ý phạm vi kết luận: trên bộ sáu mẫu này.",
        "students": "Sửa câu và nêu một lí do cho mỗi câu.",
        "report": "Một HS đọc kết luận đã giới hạn phạm vi.",
        "conclusion": "Thử nghiệm nhỏ giúp phát hiện vấn đề, không chứng minh mô hình hoàn hảo.",
        "assessment": "Đạt khi sửa đúng ít nhất 2/3 và không dùng ảnh kiểm thử để tự chứng minh tiến bộ.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình chuyển sang luyện tập.",
          "explanation": "Đây là slide báo chuyển hoạt động; đọc tiêu đề và chuyển ngay sang nhiệm vụ, không dành thêm một mốc thời gian.",
          "delivery": "Ổn định nhóm/thiết bị nếu cần, rồi chuyển slide. Không đọc lại toàn bộ quy trình hay cộng thêm một hoạt động mới.",
          "answer": "",
          "closing": "Thử nghiệm nhỏ giúp phát hiện vấn đề, không chứng minh mô hình hoàn hảo.",
          "transition": "Dùng kết quả vừa có để chuyển sang: P4.3A — Sửa kết luận thiếu căn cứ.",
          "students": "Chuyển sự chú ý sang hoạt động mới; chưa làm phiếu hay trả lời ở slide chuyển phần."
        }
      },
      "theme": "blue",
      "originalNumber": 20
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.3 Kết luận có căn cứ",
        "intro": "Viết lại mỗi câu cho phù hợp với những gì đã thử.",
        "headers": null,
        "rows": null,
        "questions": [],
        "answers": [
          "1. Mô hình nhận đúng sáu ảnh này trong điều kiện đã ghi; cần thử thêm ảnh mới.",
          "2. Ảnh đã học không đủ chứng minh khả năng với ảnh mới. Giữ ảnh thử ngoài ảnh học.",
          "3. 99% là điểm mô hình hiển thị cho dự đoán ở ảnh này; không bảo đảm tên vật đúng. Vẫn so với vật thật và thử thêm ảnh mới."
        ],
        "pages": [
          {
            "title": "Sửa kết luận quá mức",
            "instruction": "Viết lại mỗi câu cho phù hợp với những gì đã thử.",
            "fields": [
              {
                "label": "1. “Đúng cả sáu ảnh nghĩa là mô hình luôn đúng.”",
                "placeholder": "",
                "key": "04-21-v3-0"
              },
              {
                "label": "2. “Dùng ảnh đã học để thử là đủ biết mô hình nhận tốt ảnh mới.”",
                "placeholder": "",
                "key": "04-21-v3-1"
              }
            ]
          },
          {
            "title": "Có thể chỉ nhìn phần trăm không?",
            "instruction": "Giải thích bằng một câu.",
            "fields": [
              {
                "label": "3. “Nhãn Cốc hiện 99% thì không cần kiểm tra.” Em sửa câu này thế nào?",
                "placeholder": "",
                "key": "04-21-v3-2"
              }
            ]
          }
        ]
      },
      "time": 4,
      "id": "04-21",
      "number": 21,
      "title": "P4.3A — Sửa kết luận thiếu căn cứ",
      "note": {
        "activity": "Luyện tập cá nhân",
        "purpose": "Hoàn thành sửa kết luận thiếu căn cứ theo các bước trên phiếu.",
        "teacher": "Giao cá nhân và cho dùng bảng nhóm để giải thích. Gợi ý phạm vi kết luận: trên bộ sáu mẫu này.",
        "students": "Sửa câu và nêu một lí do cho mỗi câu.",
        "report": "Một HS đọc kết luận đã giới hạn phạm vi.",
        "conclusion": "Thử nghiệm nhỏ giúp phát hiện vấn đề, không chứng minh mô hình hoàn hảo.",
        "assessment": "Đạt khi sửa đúng ít nhất 2/3 và không dùng ảnh kiểm thử để tự chứng minh tiến bộ.",
        "answers": [
          "1. Mô hình nhận đúng sáu ảnh này trong điều kiện đã ghi; cần thử thêm ảnh mới.",
          "2. Ảnh đã học không đủ chứng minh khả năng với ảnh mới. Giữ ảnh thử ngoài ảnh học.",
          "3. 99% là điểm mô hình hiển thị cho dự đoán ở ảnh này; không bảo đảm tên vật đúng. Vẫn so với vật thật và thử thêm ảnh mới."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình cùng thực hiện: P4.3A — Sửa kết luận thiếu căn cứ",
          "explanation": "Sửa kết luận quá mức: Viết lại mỗi câu cho phù hợp với những gì đã thử.\nCó thể chỉ nhìn phần trăm không?: Giải thích bằng một câu.",
          "delivery": "Đọc trang đang mở, chỉ rõ dữ kiện và ô cần ghi. Cho HS trả lời trước, yêu cầu nêu căn cứ rồi mở gợi ý riêng. Dùng Trang sau của phiếu để chuyển bước; không chấm câu mở theo một chuỗi chữ cố định.",
          "answer": "• 1. Mô hình nhận đúng sáu ảnh này trong điều kiện đã ghi; cần thử thêm ảnh mới.\n• 2. Ảnh đã học không đủ chứng minh khả năng với ảnh mới. Giữ ảnh thử ngoài ảnh học.\n• 3. 99% là điểm mô hình hiển thị cho dự đoán ở ảnh này; không bảo đảm tên vật đúng. Vẫn so với vật thật và thử thêm ảnh mới.",
          "closing": "Thử nghiệm nhỏ giúp phát hiện vấn đề, không chứng minh mô hình hoàn hảo.",
          "transition": "Dùng kết quả vừa có để chuyển sang: VẬN DỤNG.",
          "students": "Hoàn thành từng bước, dùng nhãn câu hỏi trên ô nhập để biết cần ghi gì."
        }
      },
      "theme": "cream",
      "originalNumber": 21
    },
    {
      "type": "divider",
      "id": "04-22",
      "number": 22,
      "title": "VẬN DỤNG",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Đề xuất thử nghiệm tiếp theo có kiểm soát.",
        "teacher": "Nhắc phép thử cần vừa sức và an toàn. Hỏi Điều gì sẽ giữ nguyên để so sánh công bằng hơn?",
        "students": "Viết phép thử và điều có thể kết luận nếu kết quả thay đổi.",
        "report": "Một HS nêu đề xuất, lớp xác định yếu tố đổi.",
        "conclusion": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
        "assessment": "Nhận xét 6.D2.1 qua đề xuất và lí do, không chỉ dựa vào thao tác máy.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình chuyển sang vận dụng.",
          "explanation": "Đây là slide báo chuyển hoạt động; đọc tiêu đề và chuyển ngay sang nhiệm vụ, không dành thêm một mốc thời gian.",
          "delivery": "Ổn định nhóm/thiết bị nếu cần, rồi chuyển slide. Không đọc lại toàn bộ quy trình hay cộng thêm một hoạt động mới.",
          "answer": "",
          "closing": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
          "transition": "Dùng kết quả vừa có để chuyển sang: P4.3B — Thiết kế phép thử tiếp theo.",
          "students": "Chuyển sự chú ý sang hoạt động mới; chưa làm phiếu hay trả lời ở slide chuyển phần."
        }
      },
      "theme": "blue",
      "originalNumber": 22
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P4.3 Kết luận có căn cứ",
        "intro": "Chọn một điều kiện chưa thử ở lớp.",
        "headers": null,
        "rows": null,
        "questions": [],
        "answers": [
          "B Chấp nhận thử thêm kiểu cốc, góc hoặc nền; chỉ ra biến đổi và nhãn thật."
        ],
        "pages": [
          {
            "title": "Đề xuất cách thử tiếp",
            "instruction": "Chọn một điều kiện chưa thử ở lớp.",
            "fields": [
              {
                "label": "1. Em muốn thử vật hoặc điều kiện nào?",
                "placeholder": "",
                "key": "04-23-v3-0"
              },
              {
                "label": "2. Em thay đổi gì và giữ nguyên gì?",
                "placeholder": "",
                "key": "04-23-v3-1"
              },
              {
                "label": "3. Em so kết quả với tên đúng nào của đồ vật?",
                "placeholder": "",
                "key": "04-23-v3-2"
              }
            ]
          }
        ]
      },
      "time": 3,
      "id": "04-23",
      "number": 23,
      "title": "P4.3B — Thiết kế phép thử tiếp theo",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Hoàn thành thiết kế phép thử tiếp theo theo các bước trên phiếu.",
        "teacher": "Nhắc phép thử cần vừa sức và an toàn. Hỏi Điều gì sẽ giữ nguyên để so sánh công bằng hơn?",
        "students": "Viết phép thử và điều có thể kết luận nếu kết quả thay đổi.",
        "report": "Một HS nêu đề xuất, lớp xác định yếu tố đổi.",
        "conclusion": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
        "assessment": "Nhận xét 6.D2.1 qua đề xuất và lí do, không chỉ dựa vào thao tác máy.",
        "answers": [
          "B Chấp nhận thử thêm kiểu cốc, góc hoặc nền; chỉ ra biến đổi và nhãn thật."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình cùng thực hiện: P4.3B — Thiết kế phép thử tiếp theo",
          "explanation": "Đề xuất cách thử tiếp: Chọn một điều kiện chưa thử ở lớp.",
          "delivery": "Đọc trang đang mở, chỉ rõ dữ kiện và ô cần ghi. Cho HS trả lời trước, yêu cầu nêu căn cứ rồi mở gợi ý riêng. Dùng Trang sau của phiếu để chuyển bước; không chấm câu mở theo một chuỗi chữ cố định.",
          "answer": "• B Chấp nhận thử thêm kiểu cốc, góc hoặc nền; chỉ ra biến đổi và nhãn thật.",
          "closing": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Lưu kết quả và nhiệm vụ tiếp nối.",
          "students": "Hoàn thành từng bước, dùng nhãn câu hỏi trên ô nhập để biết cần ghi gì."
        }
      },
      "theme": "cream",
      "originalNumber": 23
    },
    {
      "type": "home",
      "text": "Viết ba câu: nhóm đã thay đổi gì, kết quả thử cho thấy gì, điều gì chưa thể khẳng định. Giữ bảng làm minh chứng cho dự án sau này.",
      "outcome": "Bảng sáu lượt thử trước và sau cùng nhận xét giới hạn",
      "next": "Bài 5. AI hỗ trợ học tập nhưng con người quyết định",
      "id": "04-24",
      "number": 24,
      "title": "Lưu kết quả và nhiệm vụ tiếp nối",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Đề xuất thử nghiệm tiếp theo có kiểm soát.",
        "teacher": "Nhắc phép thử cần vừa sức và an toàn. Hỏi Điều gì sẽ giữ nguyên để so sánh công bằng hơn?",
        "students": "Viết phép thử và điều có thể kết luận nếu kết quả thay đổi.",
        "report": "Một HS nêu đề xuất, lớp xác định yếu tố đổi.",
        "conclusion": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
        "assessment": "Nhận xét 6.D2.1 qua đề xuất và lí do, không chỉ dựa vào thao tác máy.",
        "answers": [
          "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên."
        ],
        "source": "Bài 2 Dạy máy học, quy trình thử nghiệm; Bài 3 Nhận dạng hình ảnh, chất lượng ảnh, trang in 20. Bảng thử nghiệm sáu mẫu do GV thiết kế.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Viết ba câu: nhóm đã thay đổi gì, kết quả thử cho thấy gì, điều gì chưa thể khẳng định. Giữ bảng làm minh chứng cho dự án sau này.",
          "explanation": "Viết ba câu: nhóm đã thay đổi gì, kết quả thử cho thấy gì, điều gì chưa thể khẳng định. Giữ bảng làm minh chứng cho dự án sau này.",
          "delivery": "Nhắc phép thử cần vừa sức và an toàn. Hỏi Điều gì sẽ giữ nguyên để so sánh công bằng hơn?\nMột HS nêu đề xuất, lớp xác định yếu tố đổi.",
          "answer": "• Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
          "closing": "Thử có mục đích giúp tìm nguyên nhân rõ hơn thử ngẫu nhiên.",
          "transition": "Với ảnh mình kiểm bằng vật thật; tiết sau kiểm kết quả học tập bằng nguồn nào và quyết định dùng ra sao?",
          "students": "Viết phép thử và điều có thể kết luận nếu kết quả thay đổi."
        }
      },
      "theme": "cream",
      "originalNumber": 24
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
  "revision": "V4 — sau kiểm định 17/11/2026"
};
