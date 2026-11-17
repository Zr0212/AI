window.AI6_LESSON={
  "id": 3,
  "title": "Bài 3. Dạy AI nhận biết đồ vật bằng Teachable Machine",
  "mode": "Trực tiếp tại phòng Tin học",
  "count": 24,
  "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
  "materials": "Máy tính có Internet và webcam; hai đồ vật bút và cốc, nền giấy trơn; thư mục ảnh Bút/Cốc dự phòng; Teachable Machine mở trước tại https://teachablemachine.withgoogle.com/; P3.1–P3.3. GV kiểm tra trình duyệt, quyền webcam và cách lưu dự án trước buổi học.",
  "alternatives": "Mang bút/cốc hoặc dùng vật mẫu của GV; xem lại hai sơ đồ. Nhóm bốn phân vai thao tác, đặt vật, ghi dữ liệu, kiểm tra và đổi vai.",
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
  "outcome": "Mô hình hai lớp và nhật kí dữ liệu cùng hai lượt thử",
  "slides": [
    {
      "type": "cover",
      "id": "03-01",
      "number": 1,
      "title": "Bài 3. Dạy AI nhận biết đồ vật bằng Teachable Machine",
      "note": {
        "activity": "Khởi động",
        "purpose": "Dự đoán nguyên nhân một mẫu mới khó nhận dạng.",
        "teacher": "Chiếu ảnh GV chuẩn bị và nhắc ba bước máy học. Không khẳng định trước ảnh tối chắc chắn nhận sai.",
        "students": "Quan sát và ghi hai điểm khác nhau giữa ảnh.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
        "assessment": "Ghi nhận HS đã nêu yếu tố dữ liệu; hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [
          "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Hôm nay mình bắt đầu: Bài 3. Dạy AI nhận biết đồ vật bằng Teachable Machine. Sản phẩm cần có là Mô hình hai lớp và nhật kí dữ liệu cùng hai lượt thử.",
          "explanation": "Trong tiết này, học sinh cần:\nChuẩn bị ảnh Bút/Cốc và đưa vào đúng nhóm.\nLuân phiên tạo dự án, thêm ảnh, huấn luyện và chạy thử.\nGhi kết quả hai ảnh mới; nêu điều kiện chụp có thể ảnh hưởng kết quả.",
          "delivery": "Đọc đầu bài, nêu sản phẩm cuối và mời một ví dụ quen thuộc. Chưa chiếu đáp án hay giao thao tác công cụ ở slide này.",
          "answer": "• Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
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
        "Chuẩn bị ảnh Bút/Cốc và đưa vào đúng nhóm.",
        "Luân phiên tạo dự án, thêm ảnh, huấn luyện và chạy thử.",
        "Ghi hai lần thử mới; nêu ít nhất hai yếu tố ảnh có thể ảnh hưởng kết quả."
      ],
      "outcome": "Mô hình hai lớp và nhật kí dữ liệu cùng hai lượt thử",
      "id": "03-02",
      "number": 2,
      "title": "Sau bài học, em làm được gì?",
      "note": {
        "activity": "Khởi động",
        "purpose": "Dự đoán nguyên nhân một mẫu mới khó nhận dạng.",
        "teacher": "Chiếu ảnh GV chuẩn bị và nhắc ba bước máy học. Không khẳng định trước ảnh tối chắc chắn nhận sai.",
        "students": "Quan sát và ghi hai điểm khác nhau giữa ảnh.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
        "assessment": "Ghi nhận HS đã nêu yếu tố dữ liệu; hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [
          "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Cuối tiết/giai đoạn này, em cần làm được ba việc sau.",
          "explanation": "Chuẩn bị ảnh Bút/Cốc và đưa vào đúng nhóm.\nLuân phiên tạo dự án, thêm ảnh, huấn luyện và chạy thử.\nGhi hai lần thử mới; nêu ít nhất hai yếu tố ảnh có thể ảnh hưởng kết quả.",
          "delivery": "Nói ngắn gọn từng mục tiêu. Hỏi một HS: “Cuối hoạt động, em dùng sản phẩm nào để cho thấy mình đã làm được?”. Tránh diễn giải toàn bộ nội dung trước khi trải nghiệm.",
          "answer": "• Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
          "closing": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
          "transition": "Dùng kết quả vừa có để chuyển sang: KHỞI ĐỘNG.",
          "students": "Đọc mục tiêu, xác định sản phẩm cần có và hỏi phần chưa rõ."
        }
      },
      "theme": "cream",
      "originalNumber": 2
    },
    {
      "type": "divider",
      "id": "03-03",
      "number": 3,
      "title": "KHỞI ĐỘNG",
      "note": {
        "activity": "Khởi động",
        "purpose": "Dự đoán nguyên nhân một mẫu mới khó nhận dạng.",
        "teacher": "Chiếu ảnh GV chuẩn bị và nhắc ba bước máy học. Không khẳng định trước ảnh tối chắc chắn nhận sai.",
        "students": "Quan sát và ghi hai điểm khác nhau giữa ảnh.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
        "assessment": "Ghi nhận HS đã nêu yếu tố dữ liệu; hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình chuyển sang khởi động.",
          "explanation": "Đây là slide báo chuyển hoạt động; đọc tiêu đề và chuyển ngay sang nhiệm vụ, không dành thêm một mốc thời gian.",
          "delivery": "Ổn định nhóm/thiết bị nếu cần, rồi chuyển slide. Không đọc lại toàn bộ quy trình hay cộng thêm một hoạt động mới.",
          "answer": "",
          "closing": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Làm sao máy phân biệt bút và cốc?.",
          "students": "Chuyển sự chú ý sang hoạt động mới; chưa làm phiếu hay trả lời ở slide chuyển phần."
        }
      },
      "theme": "blue",
      "originalNumber": 3
    },
    {
      "type": "scenario",
      "text": "Hai ảnh cùng chụp một chiếc cốc nhưng có ánh sáng khác nhau. Ảnh nào giúp em nhìn đồ vật rõ hơn? Muốn máy nhận nhiều kiểu cốc, cần chuẩn bị những ảnh nào?",
      "task": "Quan sát và ghi hai điểm khác nhau giữa ảnh.",
      "answer": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
      "visual": "cups",
      "time": 2,
      "id": "03-04",
      "number": 4,
      "title": "Làm sao máy phân biệt bút và cốc?",
      "note": {
        "activity": "Khởi động",
        "purpose": "Dự đoán nguyên nhân một mẫu mới khó nhận dạng.",
        "teacher": "Chiếu ảnh GV chuẩn bị và nhắc ba bước máy học. Không khẳng định trước ảnh tối chắc chắn nhận sai.",
        "students": "Quan sát và ghi hai điểm khác nhau giữa ảnh.",
        "report": "Hai cặp nêu dự đoán, các cặp khác bổ sung.",
        "conclusion": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
        "assessment": "Ghi nhận HS đã nêu yếu tố dữ liệu; hỗ trợ bằng bốn từ ánh sáng, góc chụp, nền, độ nét.",
        "answers": [
          "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Hai ảnh cùng chụp một chiếc cốc nhưng có ánh sáng khác nhau. Ảnh nào giúp em nhìn đồ vật rõ hơn? Muốn máy nhận nhiều kiểu cốc, cần chuẩn bị những ảnh nào?",
          "explanation": "Hai ảnh cùng chụp một chiếc cốc nhưng có ánh sáng khác nhau. Ảnh nào giúp em nhìn đồ vật rõ hơn? Muốn máy nhận nhiều kiểu cốc, cần chuẩn bị những ảnh nào?",
          "delivery": "Chiếu ảnh GV chuẩn bị và nhắc ba bước máy học. Không khẳng định trước ảnh tối chắc chắn nhận sai.\nHai cặp nêu dự đoán, các cặp khác bổ sung.",
          "answer": "• Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
          "closing": "Ảnh cần đủ rõ và đa dạng điều kiện phù hợp; phải thử thực tế mới biết dự đoán của mô hình.",
          "transition": "Dùng kết quả vừa có để chuyển sang: KHÁM PHÁ 1: CHUẨN BỊ NHÃN VÀ DỮ LIỆU.",
          "students": "Quan sát và ghi hai điểm khác nhau giữa ảnh."
        }
      },
      "theme": "cream",
      "originalNumber": 4
    },
    {
      "type": "divider",
      "id": "03-05",
      "number": 5,
      "title": "KHÁM PHÁ 1: CHUẨN BỊ NHÃN VÀ DỮ LIỆU",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Lựa chọn dữ liệu đúng hai lớp và nêu tiêu chí ảnh.",
        "teacher": "Cho HS quan sát thao tác mẫu tối đa 1 phút trong phần tổ chức; giao phân loại ảnh. Hỏi Cả hai lớp đều chụp trên nền khác nhau thì máy có thể học nhầm nền không?",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a; yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình chuyển sang khám phá 1: chuẩn bị nhãn và dữ liệu.",
          "explanation": "Đây là slide báo chuyển hoạt động; đọc tiêu đề và chuyển ngay sang nhiệm vụ, không dành thêm một mốc thời gian.",
          "delivery": "Ổn định nhóm/thiết bị nếu cần, rồi chuyển slide. Không đọc lại toàn bộ quy trình hay cộng thêm một hoạt động mới.",
          "answer": "",
          "closing": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Máy nhận ảnh dưới dạng nào?.",
          "students": "Chuyển sự chú ý sang hoạt động mới; chưa làm phiếu hay trả lời ở slide chuyển phần."
        }
      },
      "theme": "blue",
      "originalNumber": 5
    },
    {
      "type": "question",
      "question": "Máy nhận ảnh dưới dạng nào?",
      "instruction": "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Quan sát video: máy nhận ảnh bằng các giá trị số ra sao? Để phân biệt Bút/Cốc, ta cần ảnh của những vật nào?",
      "poster": "frame_5_95.jpg",
      "id": "03-06",
      "number": 6,
      "title": "Máy nhận ảnh dưới dạng nào?",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Lựa chọn dữ liệu đúng hai lớp và nêu tiêu chí ảnh.",
        "teacher": "Cho HS quan sát thao tác mẫu tối đa 1 phút trong phần tổ chức; giao phân loại ảnh. Hỏi Cả hai lớp đều chụp trên nền khác nhau thì máy có thể học nhầm nền không?",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a; yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh; máy xử lí các giá trị số biểu diễn ảnh.",
          "Trong ví dụ này, cần ảnh của cả Bút và Cốc, đặt đúng nhãn và chụp ở các điều kiện phù hợp."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Quan sát video: máy nhận ảnh bằng các giá trị số ra sao? Để phân biệt Bút/Cốc, ta cần ảnh của những vật nào?",
          "explanation": "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Quan sát video: máy nhận ảnh bằng các giá trị số ra sao? Để phân biệt Bút/Cốc, ta cần ảnh của những vật nào?",
          "delivery": "Cho HS quan sát thao tác mẫu tối đa 1 phút trong phần tổ chức; giao phân loại ảnh. Hỏi Cả hai lớp đều chụp trên nền khác nhau thì máy có thể học nhầm nền không?\nNhóm giải thích một ảnh chọn và một ảnh loại.",
          "answer": "• Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh; máy xử lí các giá trị số biểu diễn ảnh.\n• Trong ví dụ này, cần ảnh của cả Bút và Cốc, đặt đúng nhãn và chụp ở các điều kiện phù hợp.",
          "closing": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Video: Máy tính xử lí hình ảnh.",
          "students": "Suy nghĩ về câu hỏi định hướng, ghi một dự đoán và tìm chi tiết đối chiếu khi xem video."
        }
      },
      "theme": "cream",
      "originalNumber": 6
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
        "question": "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Quan sát video: máy nhận ảnh bằng các giá trị số ra sao? Để phân biệt Bút/Cốc, ta cần ảnh của những vật nào?",
        "local": "code-5.mp4"
      },
      "id": "03-07",
      "number": 7,
      "title": "Video: Máy tính xử lí hình ảnh",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Lựa chọn dữ liệu đúng hai lớp và nêu tiêu chí ảnh.",
        "teacher": "Cho HS quan sát thao tác mẫu tối đa 1 phút trong phần tổ chức; giao phân loại ảnh. Hỏi Cả hai lớp đều chụp trên nền khác nhau thì máy có thể học nhầm nền không?",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a; yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh; máy xử lí các giá trị số biểu diễn ảnh.",
          "Trong ví dụ này, cần ảnh của cả Bút và Cốc, đặt đúng nhãn và chụp ở các điều kiện phù hợp."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Trước khi xem: Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh. Quan sát video: máy nhận ảnh bằng các giá trị số ra sao? Để phân biệt Bút/Cốc, ta cần ảnh của những vật nào?",
          "explanation": "Xem đoạn 85–110 giây. Lời dẫn và câu hỏi Việt là học liệu GV biên soạn; không phải phụ đề chính thức.",
          "delivery": "Trước xem: giao một câu hỏi. Trong xem: cho HS chú ý một ví dụ, dừng khi cần giải nghĩa. Sau xem: mời hai ý kiến và yêu cầu chỉ chi tiết làm căn cứ. Nếu trình duyệt chặn âm thanh ở màn chiếu, bấm phát trực tiếp tại cửa sổ đó một lần.",
          "answer": "• Ảnh số gồm nhiều ô nhỏ gọi là điểm ảnh; máy xử lí các giá trị số biểu diễn ảnh.\n• Trong ví dụ này, cần ảnh của cả Bút và Cốc, đặt đúng nhãn và chụp ở các điều kiện phù hợp.",
          "closing": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
          "transition": "Ảnh được biểu diễn bằng các giá trị điểm ảnh. Nhiệm vụ của mình là chuẩn bị ảnh Bút/Cốc đúng nhãn và phù hợp.",
          "students": "Quan sát chi tiết liên quan câu hỏi; nêu một nhận xét có căn cứ sau đoạn xem."
        }
      },
      "theme": "cream",
      "fallback": "Ảnh số được biểu diễn bằng các giá trị số của điểm ảnh. Nhiệm vụ Bút/Cốc cần ảnh ví dụ đúng nhãn và phù hợp.",
      "originalNumber": 7
    },
    {
      "type": "concept",
      "cards": [
        [
          "Hai nhóm ảnh",
          "Trong công cụ, một “lớp” (Class) là một nhóm ảnh có cùng nhãn. Ta tạo hai nhóm: Bút và Cốc."
        ],
        [
          "Ảnh phục vụ nhiệm vụ",
          "Vật nhìn thấy được, nhãn đúng; thay đổi góc, ánh sáng và nền phù hợp."
        ],
        [
          "Đừng để nền thay cho đồ vật",
          "Cho cả hai loại vật xuất hiện ở các nền/điều kiện tương tự; tránh máy chỉ học khác biệt nền."
        ]
      ],
      "visual": "flow",
      "id": "03-08",
      "number": 8,
      "title": "Chuẩn bị hai nhóm ảnh Bút/Cốc",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Lựa chọn dữ liệu đúng hai lớp và nêu tiêu chí ảnh.",
        "teacher": "Cho HS quan sát thao tác mẫu tối đa 1 phút trong phần tổ chức; giao phân loại ảnh. Hỏi Cả hai lớp đều chụp trên nền khác nhau thì máy có thể học nhầm nền không?",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a; yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình cùng thực hiện: Chuẩn bị hai nhóm ảnh Bút/Cốc",
          "explanation": "Hai nhóm ảnh: Trong công cụ, một “lớp” (Class) là một nhóm ảnh có cùng nhãn. Ta tạo hai nhóm: Bút và Cốc.\nẢnh phục vụ nhiệm vụ: Vật nhìn thấy được, nhãn đúng; thay đổi góc, ánh sáng và nền phù hợp.\nĐừng để nền thay cho đồ vật: Cho cả hai loại vật xuất hiện ở các nền/điều kiện tương tự; tránh máy chỉ học khác biệt nền.",
          "delivery": "Giải thích lần lượt các khối trên slide. Sau mỗi ý, hỏi “Em có thể lấy một ví dụ hoặc nêu căn cứ không?”. Cho HS quan sát thao tác mẫu tối đa 1 phút trong phần tổ chức; giao phân loại ảnh. Hỏi Cả hai lớp đều chụp trên nền khác nhau thì máy có thể học nhầm nền không?",
          "answer": "• Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
          "closing": "Thử ảnh mới để biết mô hình nhận ra sao, không chỉ nhìn ảnh đã dùng để học.",
          "transition": "Dùng kết quả vừa có để chuyển sang: P3.1 — Chuẩn bị bộ ảnh.",
          "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát."
        }
      },
      "theme": "cream",
      "diagram": [
        [
          "Ảnh Bút và Cốc",
          "Đặt đúng nhóm."
        ],
        [
          "Train Model",
          "Công cụ học từ ảnh."
        ],
        [
          "Preview",
          "Thử ảnh mới, ghi kết quả."
        ]
      ],
      "takeaway": "Thử ảnh mới để biết mô hình nhận ra sao, không chỉ nhìn ảnh đã dùng để học.",
      "originalNumber": 8
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.1 Kế hoạch dữ liệu ảnh",
        "intro": "Dùng bút và cốc. Ghi số ảnh dự kiến rồi cập nhật số ảnh thực tế sau khi chụp.",
        "headers": null,
        "rows": null,
        "questions": [],
        "answers": [
          "Bốn yếu tố: ánh sáng, góc chụp, hình nền, độ nét. Loại/chụp lại ảnh không thấy đủ vật hoặc gán nhãn sai; không phải mọi ảnh khó đều phải bỏ nếu nó đại diện điều kiện thực tế và còn nhận biết được.",
          "Cho cả hai lớp xuất hiện ở các nền/điều kiện phù hợp tương tự; giữ vật thể rõ. Số lượng ghi theo thực tế, 20–30 chỉ là gợi ý khởi điểm quản lí thời gian."
        ],
        "pages": [
          {
            "title": "Lập kế hoạch chụp ảnh",
            "instruction": "Dùng bút và cốc. Ghi số ảnh dự kiến rồi cập nhật số ảnh thực tế sau khi chụp.",
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
                  "placeholder": "",
                  "key": "03-09-v3-0"
                },
                {
                  "label": "Số ảnh bút thực tế",
                  "placeholder": "",
                  "key": "03-09-v3-1"
                }
              ],
              [
                "Cốc",
                {
                  "label": "Số ảnh cốc dự kiến",
                  "placeholder": "",
                  "key": "03-09-v3-2"
                },
                {
                  "label": "Số ảnh cốc thực tế",
                  "placeholder": "",
                  "key": "03-09-v3-3"
                }
              ]
            ],
            "example": "Có thể bắt đầu với khoảng 20–30 ảnh mỗi nhóm. Số ảnh này không bảo đảm mô hình sẽ nhận đúng."
          },
          {
            "title": "Chọn điều kiện chụp",
            "instruction": "Chỉ chụp đồ vật. Dùng các nền tương tự cho cả Bút và Cốc.",
            "fields": [
              {
                "label": "1. Nhóm sẽ thay đổi góc chụp và ánh sáng thế nào?",
                "placeholder": "",
                "key": "03-09-v3-4"
              },
              {
                "label": "2. Ảnh nào cần chụp lại hoặc chuyển sang đúng nhóm? Vì sao?",
                "placeholder": "",
                "key": "03-09-v3-5"
              },
              {
                "label": "3. Vì sao không nên chỉ chụp bút trên nền xanh và cốc trên nền đỏ?",
                "placeholder": "",
                "key": "03-09-v3-6"
              }
            ]
          }
        ]
      },
      "time": 5,
      "id": "03-09",
      "number": 9,
      "title": "P3.1 — Chuẩn bị bộ ảnh",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Hoàn thành chuẩn bị bộ ảnh theo các bước trên phiếu.",
        "teacher": "Cho HS quan sát thao tác mẫu tối đa 1 phút trong phần tổ chức; giao phân loại ảnh. Hỏi Cả hai lớp đều chụp trên nền khác nhau thì máy có thể học nhầm nền không?",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a; yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Bốn yếu tố: ánh sáng, góc chụp, hình nền, độ nét. Loại/chụp lại ảnh không thấy đủ vật hoặc gán nhãn sai; không phải mọi ảnh khó đều phải bỏ nếu nó đại diện điều kiện thực tế và còn nhận biết được.",
          "Cho cả hai lớp xuất hiện ở các nền/điều kiện phù hợp tương tự; giữ vật thể rõ. Số lượng ghi theo thực tế, 20–30 chỉ là gợi ý khởi điểm quản lí thời gian."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình cùng thực hiện: P3.1 — Chuẩn bị bộ ảnh",
          "explanation": "Lập kế hoạch chụp ảnh: Dùng bút và cốc. Ghi số ảnh dự kiến rồi cập nhật số ảnh thực tế sau khi chụp.\nChọn điều kiện chụp: Chỉ chụp đồ vật. Dùng các nền tương tự cho cả Bút và Cốc.",
          "delivery": "Đọc trang đang mở, chỉ rõ dữ kiện và ô cần ghi. Cho HS trả lời trước, yêu cầu nêu căn cứ rồi mở gợi ý riêng. Dùng Trang sau của phiếu để chuyển bước; không chấm câu mở theo một chuỗi chữ cố định.",
          "answer": "• Bốn yếu tố: ánh sáng, góc chụp, hình nền, độ nét. Loại/chụp lại ảnh không thấy đủ vật hoặc gán nhãn sai; không phải mọi ảnh khó đều phải bỏ nếu nó đại diện điều kiện thực tế và còn nhận biết được.\n• Cho cả hai lớp xuất hiện ở các nền/điều kiện phù hợp tương tự; giữ vật thể rõ. Số lượng ghi theo thực tế, 20–30 chỉ là gợi ý khởi điểm quản lí thời gian.",
          "closing": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Dữ liệu sẵn sàng chưa?.",
          "students": "Hoàn thành từng bước, dùng nhãn câu hỏi trên ô nhập để biết cần ghi gì."
        }
      },
      "theme": "cream",
      "originalNumber": 9
    },
    {
      "type": "conclusion",
      "text": "Đặt ảnh vào đúng nhóm, giữ vật rõ và chụp ở nhiều điều kiện phù hợp. Nhiều ảnh gần giống hệt nhau chưa chắc giúp mô hình nhận tốt ảnh khác.",
      "task": "Nêu một ảnh nên giữ và một ảnh cần sửa hoặc chụp lại.",
      "answer": "Quan sát việc tổ chức dữ liệu 1.3.TC1a; yêu cầu sửa ngay ảnh đặt sai nhãn.",
      "cards": [
        "Ảnh đúng nhãn và phù hợp nhiệm vụ.",
        "Huấn luyện xong cần thử đầu vào mới."
      ],
      "id": "03-10",
      "number": 10,
      "title": "Dữ liệu sẵn sàng chưa?",
      "note": {
        "activity": "Khám phá 2.1 Chuẩn bị nhãn và dữ liệu",
        "purpose": "Lựa chọn dữ liệu đúng hai lớp và nêu tiêu chí ảnh.",
        "teacher": "Cho HS quan sát thao tác mẫu tối đa 1 phút trong phần tổ chức; giao phân loại ảnh. Hỏi Cả hai lớp đều chụp trên nền khác nhau thì máy có thể học nhầm nền không?",
        "students": "Tổ chức ảnh vào đúng lớp, đề xuất cùng điều kiện nền cho hai lớp và thêm biến đổi có kiểm soát.",
        "report": "Nhóm giải thích một ảnh chọn và một ảnh loại.",
        "conclusion": "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
        "assessment": "Quan sát việc tổ chức dữ liệu 1.3.TC1a; yêu cầu sửa ngay ảnh đặt sai nhãn.",
        "answers": [
          "Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Đặt ảnh vào đúng nhóm, giữ vật rõ và chụp ở nhiều điều kiện phù hợp. Nhiều ảnh gần giống hệt nhau chưa chắc giúp mô hình nhận tốt ảnh khác.",
          "explanation": "Đặt ảnh vào đúng nhóm, giữ vật rõ và chụp ở nhiều điều kiện phù hợp. Nhiều ảnh gần giống hệt nhau chưa chắc giúp mô hình nhận tốt ảnh khác.",
          "delivery": "Cho HS quan sát thao tác mẫu tối đa 1 phút trong phần tổ chức; giao phân loại ảnh. Hỏi Cả hai lớp đều chụp trên nền khác nhau thì máy có thể học nhầm nền không?\nNhóm giải thích một ảnh chọn và một ảnh loại.",
          "answer": "• Gán nhãn đúng, ảnh đủ rõ và đa dạng quan trọng hơn chỉ tăng số lượng.",
          "closing": "Đặt ảnh vào đúng nhóm, giữ vật rõ và chụp ở nhiều điều kiện phù hợp. Nhiều ảnh gần giống hệt nhau chưa chắc giúp mô hình nhận tốt ảnh khác.",
          "transition": "Dùng kết quả vừa có để chuyển sang: KHÁM PHÁ 2: HUẤN LUYỆN VÀ CHẠY THỬ MÔ HÌNH.",
          "students": "Nêu một ảnh nên giữ và một ảnh cần sửa hoặc chụp lại."
        }
      },
      "theme": "cream",
      "originalNumber": 10
    },
    {
      "type": "divider",
      "id": "03-11",
      "number": 11,
      "title": "KHÁM PHÁ 2: HUẤN LUYỆN VÀ CHẠY THỬ MÔ HÌNH",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Mở sẵn công cụ; giao từng nhóm làm theo sáu bước P3.2 và nhắc không chụp khuôn mặt. Kiểm tra tiến độ sau thu ảnh; nhóm xong sớm đổi góc đầu vào, nhóm chậm dùng ảnh dự phòng. Hỗ trợ khi quyền webcam bị chặn.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "GV quan sát thao tác thật và thu P3.2; nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình chuyển sang khám phá 2: huấn luyện và chạy thử mô hình.",
          "explanation": "Đây là slide báo chuyển hoạt động; đọc tiêu đề và chuyển ngay sang nhiệm vụ, không dành thêm một mốc thời gian.",
          "delivery": "Ổn định nhóm/thiết bị nếu cần, rồi chuyển slide. Không đọc lại toàn bộ quy trình hay cộng thêm một hoạt động mới.",
          "answer": "",
          "closing": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Sản phẩm cần hoàn thành.",
          "students": "Chuyển sự chú ý sang hoạt động mới; chưa làm phiếu hay trả lời ở slide chuyển phần."
        }
      },
      "theme": "blue",
      "originalNumber": 11
    },
    {
      "type": "task",
      "text": "Tạo dự án Bút/Cốc. Có thể bắt đầu với khoảng 20–30 ảnh mỗi nhóm, rồi thử bằng hai ảnh mới.",
      "product": "Dự án hai nhóm ảnh, số ảnh thực tế và bảng ghi hai lần thử. Số ảnh gợi ý không bảo đảm kết quả sẽ đúng.",
      "roles": [
        "Thao tác",
        "Đọc nhiệm vụ",
        "Ghi kết quả",
        "Đối chiếu"
      ],
      "visual": "flow",
      "id": "03-12",
      "number": 12,
      "title": "Sản phẩm cần hoàn thành",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Mở sẵn công cụ; giao từng nhóm làm theo sáu bước P3.2 và nhắc không chụp khuôn mặt. Kiểm tra tiến độ sau thu ảnh; nhóm xong sớm đổi góc đầu vào, nhóm chậm dùng ảnh dự phòng. Hỗ trợ khi quyền webcam bị chặn.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "GV quan sát thao tác thật và thu P3.2; nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Tạo dự án Bút/Cốc. Có thể bắt đầu với khoảng 20–30 ảnh mỗi nhóm, rồi thử bằng hai ảnh mới.",
          "explanation": "Tạo dự án Bút/Cốc. Có thể bắt đầu với khoảng 20–30 ảnh mỗi nhóm, rồi thử bằng hai ảnh mới.\n\nDự án hai nhóm ảnh, số ảnh thực tế và bảng ghi hai lần thử. Số ảnh gợi ý không bảo đảm kết quả sẽ đúng.",
          "delivery": "Mở sẵn công cụ; giao từng nhóm làm theo sáu bước P3.2 và nhắc không chụp khuôn mặt. Kiểm tra tiến độ sau thu ảnh; nhóm xong sớm đổi góc đầu vào, nhóm chậm dùng ảnh dự phòng. Hỗ trợ khi quyền webcam bị chặn.\nPhân vai: Thao tác, Đọc nhiệm vụ, Ghi kết quả, Đối chiếu. Ghi đúng kết quả thực hiện và điều kiện của nhóm.",
          "answer": "• Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "closing": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Mở dự án nhận dạng ảnh.",
          "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác."
        }
      },
      "theme": "cream",
      "diagram": [
        [
          "Ảnh Bút và Cốc",
          "Đặt đúng nhóm."
        ],
        [
          "Train Model",
          "Công cụ học từ ảnh."
        ],
        [
          "Preview",
          "Thử ảnh mới, ghi kết quả."
        ]
      ],
      "originalNumber": 12
    },
    {
      "type": "step",
      "heading": "Mở dự án nhận dạng ảnh",
      "text": "Teachable Machine → Get Started → Image Project.",
      "steps": [
        "Chọn mô hình ảnh tiêu chuẩn nếu có lựa chọn.",
        "Chỉ cấp camera khi được GV hướng dẫn; có thể dùng bộ ảnh tải lên."
      ],
      "visual": "tm",
      "step": 1,
      "time": 0,
      "id": "03-13",
      "number": 13,
      "title": "Mở dự án nhận dạng ảnh",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Mở sẵn công cụ; giao từng nhóm làm theo sáu bước P3.2 và nhắc không chụp khuôn mặt. Kiểm tra tiến độ sau thu ảnh; nhóm xong sớm đổi góc đầu vào, nhóm chậm dùng ảnh dự phòng. Hỗ trợ khi quyền webcam bị chặn.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "GV quan sát thao tác thật và thu P3.2; nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Teachable Machine → Get Started → Image Project.",
          "explanation": "Chọn mô hình ảnh tiêu chuẩn nếu có lựa chọn.\nChỉ cấp camera khi được GV hướng dẫn; có thể dùng bộ ảnh tải lên.",
          "delivery": "Làm mẫu đúng bước đang chiếu, sau đó để HS thực hiện.\nChọn mô hình ảnh tiêu chuẩn nếu có lựa chọn.\nChỉ cấp camera khi được GV hướng dẫn; có thể dùng bộ ảnh tải lên.\nHỏi HS vừa làm gì và dựa vào đâu để kiểm tra.",
          "answer": "• Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "closing": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Đặt tên nhóm ảnh và thêm ảnh.",
          "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác."
        }
      },
      "theme": "cream",
      "highlight": 1,
      "originalNumber": 13
    },
    {
      "type": "step",
      "heading": "Đặt nhãn và thêm ảnh",
      "text": "Hai nhóm ảnh (Class): Bút và Cốc.",
      "steps": [
        "Đổi Class 1 và Class 2 thành Bút và Cốc. Đưa ảnh vào đúng nhóm.",
        "Dùng nhiều góc chụp; dùng các nền tương tự cho cả hai loại vật."
      ],
      "visual": "tm",
      "step": 2,
      "time": 0,
      "id": "03-14",
      "number": 14,
      "title": "Đặt tên nhóm ảnh và thêm ảnh",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Mở sẵn công cụ; giao từng nhóm làm theo sáu bước P3.2 và nhắc không chụp khuôn mặt. Kiểm tra tiến độ sau thu ảnh; nhóm xong sớm đổi góc đầu vào, nhóm chậm dùng ảnh dự phòng. Hỗ trợ khi quyền webcam bị chặn.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "GV quan sát thao tác thật và thu P3.2; nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Hai nhóm ảnh (Class): Bút và Cốc.",
          "explanation": "Đổi Class 1 và Class 2 thành Bút và Cốc. Đưa ảnh vào đúng nhóm.\nDùng nhiều góc chụp; dùng các nền tương tự cho cả hai loại vật.",
          "delivery": "Làm mẫu đúng bước đang chiếu, sau đó để HS thực hiện.\nĐổi Class 1 và Class 2 thành Bút và Cốc. Đưa ảnh vào đúng nhóm.\nDùng nhiều góc chụp; dùng các nền tương tự cho cả hai loại vật.\nHỏi HS vừa làm gì và dựa vào đâu để kiểm tra.",
          "answer": "• Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "closing": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Kiểm dữ liệu rồi huấn luyện.",
          "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác."
        }
      },
      "theme": "cream",
      "highlight": 2,
      "originalNumber": 14
    },
    {
      "type": "step",
      "heading": "Kiểm dữ liệu rồi huấn luyện",
      "text": "Chọn Train Model sau khi kiểm tra.",
      "steps": [
        "Loại/chụp lại ảnh không thấy đủ vật hoặc sai nhãn.",
        "Giữ trang hoạt động và chờ huấn luyện hoàn tất."
      ],
      "visual": "tm",
      "step": 3,
      "time": 0,
      "id": "03-15",
      "number": 15,
      "title": "Kiểm dữ liệu rồi huấn luyện",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Mở sẵn công cụ; giao từng nhóm làm theo sáu bước P3.2 và nhắc không chụp khuôn mặt. Kiểm tra tiến độ sau thu ảnh; nhóm xong sớm đổi góc đầu vào, nhóm chậm dùng ảnh dự phòng. Hỗ trợ khi quyền webcam bị chặn.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "GV quan sát thao tác thật và thu P3.2; nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Chọn Train Model sau khi kiểm tra.",
          "explanation": "Loại/chụp lại ảnh không thấy đủ vật hoặc sai nhãn.\nGiữ trang hoạt động và chờ huấn luyện hoàn tất.",
          "delivery": "Làm mẫu đúng bước đang chiếu, sau đó để HS thực hiện.\nLoại/chụp lại ảnh không thấy đủ vật hoặc sai nhãn.\nGiữ trang hoạt động và chờ huấn luyện hoàn tất.\nHỏi HS vừa làm gì và dựa vào đâu để kiểm tra.",
          "answer": "• Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "closing": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Thử ảnh mới và lưu dự án.",
          "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác."
        }
      },
      "theme": "cream",
      "highlight": 3,
      "originalNumber": 15
    },
    {
      "type": "step",
      "heading": "Thử đầu vào mới",
      "text": "Trong Preview, thử một ảnh mới của mỗi nhóm.",
      "steps": [
        "Ghi dự đoán cho một ảnh Bút và một ảnh Cốc chưa dùng để học.",
        "Mở menu góc trái → Download project as file; lưu bằng mã nhóm.",
        "Tiết sau: Open project from file, chọn tệp đã lưu và huấn luyện lại khi cần. Giữ riêng bộ ảnh Bút/Cốc."
      ],
      "visual": "tm",
      "step": 4,
      "time": 0,
      "id": "03-16",
      "number": 16,
      "title": "Thử ảnh mới và lưu dự án",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Menu lưu/mở tệp đã kiểm trên giao diện Teachable Machine ngày 17/11/2026. Download project as file lưu dự án để tiếp tục; Export Model là xuất mô hình cho mục đích sử dụng khác. Không cần đăng nhập Drive. GV thử mở tệp trước tiết 4; nếu có lỗi, dùng lại bộ ảnh có nhãn để tạo và huấn luyện lại.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "GV quan sát thao tác thật và thu P3.2; nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Trong Preview, thử một ảnh mới của mỗi nhóm.",
          "explanation": "Ghi dự đoán cho một ảnh Bút và một ảnh Cốc chưa dùng để học.\nMở menu góc trái → Download project as file; lưu bằng mã nhóm.\nTiết sau: Open project from file, chọn tệp đã lưu và huấn luyện lại khi cần. Giữ riêng bộ ảnh Bút/Cốc.",
          "delivery": "Làm mẫu đúng bước đang chiếu, sau đó để HS thực hiện.\nThử một ảnh bút và một ảnh cốc chưa đưa vào huấn luyện; ghi tên mô hình đưa ra.\nLưu dự án theo hướng dẫn GV hoặc giữ bộ ảnh đã gắn nhãn để tạo lại.\nHỏi HS vừa làm gì và dựa vào đâu để kiểm tra.",
          "answer": "• Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "closing": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: P3.2 — Nhật kí chạy thử.",
          "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác."
        }
      },
      "theme": "cream",
      "highlight": 4,
      "originalNumber": 16
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.2 Quy trình và nhật kí mô hình",
        "intro": "Thực hiện các bước ở slide 13–16, sau đó ghi lại.",
        "headers": null,
        "rows": null,
        "questions": [],
        "answers": [
          "Sản phẩm đạt khi có hai lớp, ảnh được gán nhãn, hoàn thành huấn luyện và ghi hai lượt thử mới. Có thể dự đoán sai; không dựng kết quả.",
          "GV ghi bước từng HS đã tham gia điều khiển. Nếu chỉ có máy GV, HS có thể chỉ định thao tác/đầu vào và luân phiên đại diện thực hiện; cần bổ sung lượt trực tiếp cho em chưa có minh chứng."
        ],
        "pages": [
          {
            "title": "Kiểm tra trước khi chạy thử",
            "instruction": "Làm theo bốn bước hướng dẫn mở dự án, thêm ảnh, huấn luyện và thử mới. Ghi đúng điều nhóm đã thực hiện.",
            "fields": [
              {
                "label": "1. Hai nhóm ảnh đã đặt tên là gì?",
                "placeholder": "",
                "key": "03-17-v3-0"
              },
              {
                "label": "2. Mỗi nhóm có bao nhiêu ảnh?",
                "placeholder": "",
                "key": "03-17-v3-1"
              },
              {
                "label": "3. Huấn luyện đã hoàn tất chưa?",
                "placeholder": "",
                "options": [
                  "Đã hoàn tất",
                  "Chưa hoàn tất"
                ],
                "key": "03-17-v3-2"
              }
            ],
            "reference": "Image Project → đặt tên Bút/Cốc → thêm ảnh → Train Model → Preview."
          },
          {
            "title": "Ghi hai lần thử với ảnh mới",
            "instruction": "Dùng một ảnh bút và một ảnh cốc chưa đưa vào huấn luyện. So tên công cụ đưa ra với đồ vật thật.",
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
                  "placeholder": "",
                  "key": "03-17-v3-3"
                },
                {
                  "label": "Nhận xét dự đoán bút",
                  "placeholder": "",
                  "key": "03-17-v3-4"
                }
              ],
              [
                "Cốc: ảnh mới",
                {
                  "label": "Dự đoán cho cốc",
                  "placeholder": "",
                  "key": "03-17-v3-5"
                },
                {
                  "label": "Nhận xét dự đoán cốc",
                  "placeholder": "",
                  "key": "03-17-v3-6"
                }
              ]
            ]
          },
          {
            "title": "Lưu công việc của nhóm",
            "instruction": "Ghi để tiết sau có thể mở lại hoặc tạo lại dự án.",
            "fields": [
              {
                "label": "1. Nhóm đã lưu dự án hoặc bộ ảnh ở đâu?",
                "placeholder": "",
                "key": "03-17-v3-7"
              },
              {
                "label": "2. Mỗi bạn đã trực tiếp làm bước nào?",
                "placeholder": "",
                "key": "03-17-v3-8"
              },
              {
                "label": "3. Nếu chưa chạy được, nhóm đang vướng ở bước nào?",
                "placeholder": "",
                "key": "03-17-v3-9"
              }
            ],
            "reference": "Lưu: menu góc trái → Download project as file. Mở lại: menu → Open project from file. Giữ thư mục ảnh học để tạo lại khi cần."
          }
        ]
      },
      "time": 16,
      "id": "03-17",
      "number": 17,
      "title": "P3.2 — Nhật kí chạy thử",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Hoàn thành nhật kí chạy thử theo các bước trên phiếu.",
        "teacher": "Mở sẵn công cụ; giao từng nhóm làm theo sáu bước P3.2 và nhắc không chụp khuôn mặt. Kiểm tra tiến độ sau thu ảnh; nhóm xong sớm đổi góc đầu vào, nhóm chậm dùng ảnh dự phòng. Hỗ trợ khi quyền webcam bị chặn.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "GV quan sát thao tác thật và thu P3.2; nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Sản phẩm đạt khi có hai lớp, ảnh được gán nhãn, hoàn thành huấn luyện và ghi hai lượt thử mới. Có thể dự đoán sai; không dựng kết quả.",
          "GV ghi bước từng HS đã tham gia điều khiển. Nếu chỉ có máy GV, HS có thể chỉ định thao tác/đầu vào và luân phiên đại diện thực hiện; cần bổ sung lượt trực tiếp cho em chưa có minh chứng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình cùng thực hiện: P3.2 — Nhật kí chạy thử",
          "explanation": "Kiểm tra trước khi chạy thử: Làm theo bốn bước hướng dẫn mở dự án, thêm ảnh, huấn luyện và thử mới. Ghi đúng điều nhóm đã thực hiện.\nGhi hai lần thử với ảnh mới: Dùng một ảnh bút và một ảnh cốc chưa đưa vào huấn luyện. So tên công cụ đưa ra với đồ vật thật.\nLưu công việc của nhóm: Ghi để tiết sau có thể mở lại hoặc tạo lại dự án.",
          "delivery": "Đọc trang đang mở, chỉ rõ dữ kiện và ô cần ghi. Cho HS trả lời trước, yêu cầu nêu căn cứ rồi mở gợi ý riêng. Dùng Trang sau của phiếu để chuyển bước; không chấm câu mở theo một chuỗi chữ cố định.",
          "answer": "• Sản phẩm đạt khi có hai lớp, ảnh được gán nhãn, hoàn thành huấn luyện và ghi hai lượt thử mới. Có thể dự đoán sai; không dựng kết quả.\n• GV ghi bước từng HS đã tham gia điều khiển. Nếu chỉ có máy GV, HS có thể chỉ định thao tác/đầu vào và luân phiên đại diện thực hiện; cần bổ sung lượt trực tiếp cho em chưa có minh chứng.",
          "closing": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Mô hình đã làm được gì?.",
          "students": "Hoàn thành từng bước, dùng nhãn câu hỏi trên ô nhập để biết cần ghi gì."
        }
      },
      "theme": "cream",
      "originalNumber": 17
    },
    {
      "type": "report",
      "text": "Dùng bảng ghi của nhóm để trả lời ba câu hỏi. Nhóm khác nêu một điểm cần hỏi thêm.",
      "task": "Tạo dự án ảnh; đặt nhãn; chụp hoặc thêm ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
      "answer": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
      "product": "Dự án hai nhóm ảnh, số ảnh thực tế và bảng ghi hai lần thử. Số ảnh gợi ý không bảo đảm kết quả sẽ đúng.",
      "id": "03-18",
      "number": 18,
      "title": "Mô hình đã làm được gì?",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Mở sẵn công cụ; giao từng nhóm làm theo sáu bước P3.2 và nhắc không chụp khuôn mặt. Kiểm tra tiến độ sau thu ảnh; nhóm xong sớm đổi góc đầu vào, nhóm chậm dùng ảnh dự phòng. Hỗ trợ khi quyền webcam bị chặn.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "GV quan sát thao tác thật và thu P3.2; nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Dùng bảng ghi của nhóm để trả lời ba câu hỏi. Nhóm khác nêu một điểm cần hỏi thêm.",
          "explanation": "Dùng bảng ghi của nhóm để trả lời ba câu hỏi. Nhóm khác nêu một điểm cần hỏi thêm.\n\nDự án hai nhóm ảnh, số ảnh thực tế và bảng ghi hai lần thử. Số ảnh gợi ý không bảo đảm kết quả sẽ đúng.",
          "delivery": "Mở sẵn công cụ; giao từng nhóm làm theo sáu bước P3.2 và nhắc không chụp khuôn mặt. Kiểm tra tiến độ sau thu ảnh; nhóm xong sớm đổi góc đầu vào, nhóm chậm dùng ảnh dự phòng. Hỗ trợ khi quyền webcam bị chặn.\nMột nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
          "answer": "• Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "closing": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Kiến thức cần nhớ.",
          "students": "Tạo dự án ảnh; đặt nhãn; chụp hoặc thêm ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác."
        }
      },
      "theme": "cream",
      "reportQuestions": [
        "Nhóm chuẩn bị ảnh và huấn luyện thế nào?",
        "Hai ảnh mới cho kết quả gì?",
        "Còn điều gì nhóm muốn thử thêm?"
      ],
      "originalNumber": 18
    },
    {
      "type": "recap",
      "items": [
        "Đưa ảnh vào đúng nhóm và chụp rõ đồ vật.",
        "Sau huấn luyện, thử bằng ảnh chưa dùng để học.",
        "Phần trăm ở một dự đoán không phải độ chính xác trên mọi ảnh."
      ],
      "id": "03-19",
      "number": 19,
      "title": "Kiến thức cần nhớ",
      "note": {
        "activity": "Khám phá 2.2 Huấn luyện và chạy thử",
        "purpose": "Tạo mô hình hai lớp và ghi dự đoán với đầu vào mới.",
        "teacher": "Mở sẵn công cụ; giao từng nhóm làm theo sáu bước P3.2 và nhắc không chụp khuôn mặt. Kiểm tra tiến độ sau thu ảnh; nhóm xong sớm đổi góc đầu vào, nhóm chậm dùng ảnh dự phòng. Hỗ trợ khi quyền webcam bị chặn.",
        "students": "Tạo dự án ảnh; đặt nhãn; thu/nạp ảnh; huấn luyện; xem trước; ghi kết quả thực tế; đổi người thao tác.",
        "report": "Một nhóm mô tả quy trình và một nhóm nêu sự khác biệt giữa dự kiến và kết quả.",
        "conclusion": "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
        "assessment": "GV quan sát thao tác thật và thu P3.2; nếu chỉ xem video thì ghi chưa có minh chứng tạo mô hình.",
        "answers": [
          "Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mỗi em chọn một ý và giải thích bằng việc vừa làm.",
          "explanation": "Đưa ảnh vào đúng nhóm và chụp rõ đồ vật.\nSau huấn luyện, thử bằng ảnh chưa dùng để học.\nPhần trăm ở một dự đoán không phải độ chính xác trên mọi ảnh.",
          "delivery": "Mời ba HS, mỗi em diễn đạt lại một ý. Yêu cầu nối với ví dụ hoặc minh chứng trong tiết học; chỉnh ngắn gọn nếu HS khái quát quá mức.",
          "answer": "• Công cụ học từ các ví dụ có nhãn để tạo mô hình. Kết quả phụ thuộc dữ liệu và điều kiện đầu vào; một con số cao không chứng minh luôn đúng.",
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
      "id": "03-20",
      "number": 20,
      "title": "LUYỆN TẬP",
      "note": {
        "activity": "Luyện tập cá nhân",
        "purpose": "Nhận biết sai nhãn và đọc đúng kết quả công cụ.",
        "teacher": "Yêu cầu nêu hành động sửa ở mỗi tình huống. Chỉ lại vị trí nhãn và bảng dự đoán nếu cần.",
        "students": "Trả lời trước khi thảo luận đáp án.",
        "report": "HS giải thích vì sao không đọc 98% thành 98 lần đúng trong mọi trường hợp.",
        "conclusion": "Số hiển thị gắn một lần dự đoán; muốn đánh giá cần thử nhiều mẫu phù hợp và ghi đúng/sai.",
        "assessment": "Đạt khi xử lí đúng ít nhất 2/3 tình huống; hỏi lại riêng cách dùng ảnh mới.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình chuyển sang luyện tập.",
          "explanation": "Đây là slide báo chuyển hoạt động; đọc tiêu đề và chuyển ngay sang nhiệm vụ, không dành thêm một mốc thời gian.",
          "delivery": "Ổn định nhóm/thiết bị nếu cần, rồi chuyển slide. Không đọc lại toàn bộ quy trình hay cộng thêm một hoạt động mới.",
          "answer": "",
          "closing": "Số hiển thị gắn một lần dự đoán; muốn đánh giá cần thử nhiều mẫu phù hợp và ghi đúng/sai.",
          "transition": "Dùng kết quả vừa có để chuyển sang: P3.3A — Đọc và kiểm tra kết quả.",
          "students": "Chuyển sự chú ý sang hoạt động mới; chưa làm phiếu hay trả lời ở slide chuyển phần."
        }
      },
      "theme": "blue",
      "originalNumber": 20
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.3 Đọc kết quả và chuẩn bị kiểm thử",
        "intro": "Trả lời từng tình huống; không cần tự đặt kết quả thử.",
        "headers": null,
        "rows": null,
        "questions": [],
        "answers": [
          "1: Chuyển ảnh cốc về nhóm Cốc hoặc loại ảnh đặt sai trước khi huấn luyện.",
          "2: Không. 98% là điểm mô hình hiển thị cho một dự đoán, không phải số đo đúng trên mọi 100 ảnh khác.",
          "3: Thử ảnh mới để kiểm tra khả năng xử lí ảnh chưa dùng để học."
        ],
        "pages": [
          {
            "title": "Kiểm tra ảnh và đọc kết quả",
            "instruction": "Trả lời từng tình huống; không cần tự đặt kết quả thử.",
            "fields": [
              {
                "label": "1. Một ảnh cốc nằm trong nhóm Bút. Em sửa gì trước khi huấn luyện?",
                "placeholder": "",
                "key": "03-21-v3-0"
              },
              {
                "label": "2. Màn hình hiện 98% ở nhãn Cốc cho một ảnh. Có nghĩa mô hình đúng 98 trên mọi 100 ảnh khác không? Vì sao?",
                "placeholder": "",
                "key": "03-21-v3-1"
              }
            ]
          },
          {
            "title": "Chọn ảnh để thử",
            "instruction": "Giải thích bằng một câu.",
            "fields": [
              {
                "label": "3. Nên thử bằng ảnh đã dùng để học hay bằng ảnh mới? Vì sao?",
                "placeholder": "",
                "key": "03-21-v3-2"
              }
            ]
          }
        ]
      },
      "time": 4,
      "id": "03-21",
      "number": 21,
      "title": "P3.3A — Đọc và kiểm tra kết quả",
      "note": {
        "activity": "Luyện tập cá nhân",
        "purpose": "Hoàn thành đọc và kiểm tra kết quả theo các bước trên phiếu.",
        "teacher": "Yêu cầu nêu hành động sửa ở mỗi tình huống. Chỉ lại vị trí nhãn và bảng dự đoán nếu cần.",
        "students": "Trả lời trước khi thảo luận đáp án.",
        "report": "HS giải thích vì sao không đọc 98% thành 98 lần đúng trong mọi trường hợp.",
        "conclusion": "Số hiển thị gắn một lần dự đoán; muốn đánh giá cần thử nhiều mẫu phù hợp và ghi đúng/sai.",
        "assessment": "Đạt khi xử lí đúng ít nhất 2/3 tình huống; hỏi lại riêng cách dùng ảnh mới.",
        "answers": [
          "1: Chuyển ảnh cốc về nhóm Cốc hoặc loại ảnh đặt sai trước khi huấn luyện.",
          "2: Không. 98% là điểm mô hình hiển thị cho một dự đoán, không phải số đo đúng trên mọi 100 ảnh khác.",
          "3: Thử ảnh mới để kiểm tra khả năng xử lí ảnh chưa dùng để học."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình cùng thực hiện: P3.3A — Đọc và kiểm tra kết quả",
          "explanation": "Kiểm tra ảnh và đọc kết quả: Trả lời từng tình huống; không cần tự đặt kết quả thử.\nChọn ảnh để thử: Giải thích bằng một câu.",
          "delivery": "Đọc trang đang mở, chỉ rõ dữ kiện và ô cần ghi. Cho HS trả lời trước, yêu cầu nêu căn cứ rồi mở gợi ý riêng. Dùng Trang sau của phiếu để chuyển bước; không chấm câu mở theo một chuỗi chữ cố định.",
          "answer": "• 1: Chuyển ảnh cốc về nhóm Cốc hoặc loại ảnh đặt sai trước khi huấn luyện.\n• 2: Không. 98% là điểm mô hình hiển thị cho một dự đoán, không phải số đo đúng trên mọi 100 ảnh khác.\n• 3: Thử ảnh mới để kiểm tra khả năng xử lí ảnh chưa dùng để học.",
          "closing": "Số hiển thị gắn một lần dự đoán; muốn đánh giá cần thử nhiều mẫu phù hợp và ghi đúng/sai.",
          "transition": "Dùng kết quả vừa có để chuyển sang: VẬN DỤNG.",
          "students": "Hoàn thành từng bước, dùng nhãn câu hỏi trên ô nhập để biết cần ghi gì."
        }
      },
      "theme": "cream",
      "originalNumber": 21
    },
    {
      "type": "divider",
      "id": "03-22",
      "number": 22,
      "title": "VẬN DỤNG",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Đề xuất cách chuẩn bị kiểm thử tiết sau.",
        "teacher": "Gợi ý thay đổi góc, khoảng cách hoặc ánh sáng vừa phải. Nhắc ghi rõ vật thuộc nhãn thật nào.",
        "students": "Chọn ba cách thử an toàn, viết điều muốn quan sát.",
        "report": "Một nhóm chia sẻ phương án có thể thực hiện trong lớp.",
        "conclusion": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
        "assessment": "Chấp nhận các biến đổi khác nhau; loại yêu cầu thu ảnh người hoặc dùng đồ vật nguy hiểm.",
        "answers": [],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình chuyển sang vận dụng.",
          "explanation": "Đây là slide báo chuyển hoạt động; đọc tiêu đề và chuyển ngay sang nhiệm vụ, không dành thêm một mốc thời gian.",
          "delivery": "Ổn định nhóm/thiết bị nếu cần, rồi chuyển slide. Không đọc lại toàn bộ quy trình hay cộng thêm một hoạt động mới.",
          "answer": "",
          "closing": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
          "transition": "Dùng kết quả vừa có để chuyển sang: P3.3B — Đề xuất lần thử mới.",
          "students": "Chuyển sự chú ý sang hoạt động mới; chưa làm phiếu hay trả lời ở slide chuyển phần."
        }
      },
      "theme": "blue",
      "originalNumber": 22
    },
    {
      "type": "worksheet",
      "worksheet": {
        "title": "P3.3 Đọc kết quả và chuẩn bị kiểm thử",
        "intro": "Mỗi dòng là một ảnh mới. Ghi vật và điều kiện chụp; chưa ghi trước mô hình sẽ đúng hay sai.",
        "headers": null,
        "rows": null,
        "questions": [],
        "answers": [
          "B Ví dụ đổi góc bút, dùng cốc khác, đổi nền vừa phải; có nhãn thật và không dùng ảnh đã huấn luyện."
        ],
        "pages": [
          {
            "title": "Chuẩn bị ba lần thử mới",
            "instruction": "Mỗi dòng là một ảnh mới. Ghi vật và điều kiện chụp; chưa ghi trước mô hình sẽ đúng hay sai.",
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
                  "placeholder": "",
                  "key": "03-23-v3-0"
                },
                {
                  "label": "Điều kiện lần 1",
                  "placeholder": "Ví dụ: cốc khác, vẫn đủ sáng",
                  "key": "03-23-v3-1"
                }
              ],
              [
                "2",
                {
                  "label": "Vật ở lần 2",
                  "placeholder": "",
                  "key": "03-23-v3-2"
                },
                {
                  "label": "Điều kiện lần 2",
                  "placeholder": "",
                  "key": "03-23-v3-3"
                }
              ],
              [
                "3",
                {
                  "label": "Vật ở lần 3",
                  "placeholder": "",
                  "key": "03-23-v3-4"
                },
                {
                  "label": "Điều kiện lần 3",
                  "placeholder": "",
                  "key": "03-23-v3-5"
                }
              ]
            ]
          }
        ]
      },
      "time": 3,
      "id": "03-23",
      "number": 23,
      "title": "P3.3B — Đề xuất lần thử mới",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Hoàn thành đề xuất lần thử mới theo các bước trên phiếu.",
        "teacher": "Gợi ý thay đổi góc, khoảng cách hoặc ánh sáng vừa phải. Nhắc ghi rõ vật thuộc nhãn thật nào.",
        "students": "Chọn ba cách thử an toàn, viết điều muốn quan sát.",
        "report": "Một nhóm chia sẻ phương án có thể thực hiện trong lớp.",
        "conclusion": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
        "assessment": "Chấp nhận các biến đổi khác nhau; loại yêu cầu thu ảnh người hoặc dùng đồ vật nguy hiểm.",
        "answers": [
          "B Ví dụ đổi góc bút, dùng cốc khác, đổi nền vừa phải; có nhãn thật và không dùng ảnh đã huấn luyện."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Mình cùng thực hiện: P3.3B — Đề xuất lần thử mới",
          "explanation": "Chuẩn bị ba lần thử mới: Mỗi dòng là một ảnh mới. Ghi vật và điều kiện chụp; chưa ghi trước mô hình sẽ đúng hay sai.",
          "delivery": "Đọc trang đang mở, chỉ rõ dữ kiện và ô cần ghi. Cho HS trả lời trước, yêu cầu nêu căn cứ rồi mở gợi ý riêng. Dùng Trang sau của phiếu để chuyển bước; không chấm câu mở theo một chuỗi chữ cố định.",
          "answer": "• B Ví dụ đổi góc bút, dùng cốc khác, đổi nền vừa phải; có nhãn thật và không dùng ảnh đã huấn luyện.",
          "closing": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
          "transition": "Dùng kết quả vừa có để chuyển sang: Lưu minh chứng và chuẩn bị kiểm thử.",
          "students": "Hoàn thành từng bước, dùng nhãn câu hỏi trên ô nhập để biết cần ghi gì."
        }
      },
      "theme": "cream",
      "originalNumber": 23
    },
    {
      "type": "home",
      "text": "Lưu dự án bằng menu → Download project as file và giữ bộ ảnh Bút/Cốc đúng nhãn. Ghi thư mục vào P3.2. Tiết sau mở bằng Open project from file; nếu cần, huấn luyện lại trước khi thử.",
      "outcome": "Mô hình hai lớp và nhật kí dữ liệu cùng hai lượt thử",
      "next": "Bài 4. Kiểm thử và cải tiến mô hình AI",
      "id": "03-24",
      "number": 24,
      "title": "Lưu minh chứng và chuẩn bị kiểm thử",
      "note": {
        "activity": "Vận dụng",
        "purpose": "Đề xuất cách chuẩn bị kiểm thử tiết sau.",
        "teacher": "Gợi ý thay đổi góc, khoảng cách hoặc ánh sáng vừa phải. Nhắc ghi rõ vật thuộc nhãn thật nào.",
        "students": "Chọn ba cách thử an toàn, viết điều muốn quan sát.",
        "report": "Một nhóm chia sẻ phương án có thể thực hiện trong lớp.",
        "conclusion": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
        "assessment": "Chấp nhận các biến đổi khác nhau; loại yêu cầu thu ảnh người hoặc dùng đồ vật nguy hiểm.",
        "answers": [
          "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu."
        ],
        "source": "Bài 2 Dạy máy học, mục Thực hành Tạo và kiểm tra mô hình học máy, trang in 13; Bài 3 Nhận dạng hình ảnh, mục Chất lượng hình ảnh và Dạy máy tính phân loại hình ảnh, trang in 20.",
        "time": "Trong hoạt động 45 phút: giao nhiệm vụ/xem video/báo cáo/chốt không cộng vào thời gian HS tự làm.",
        "script": {
          "opening": "Lưu dự án bằng menu → Download project as file và giữ bộ ảnh Bút/Cốc đúng nhãn. Ghi thư mục vào P3.2. Tiết sau mở bằng Open project from file; nếu cần, huấn luyện lại trước khi thử.",
          "explanation": "Lưu dự án bằng menu → Download project as file và giữ bộ ảnh Bút/Cốc đúng nhãn. Ghi thư mục vào P3.2. Tiết sau mở bằng Open project from file; nếu cần, huấn luyện lại trước khi thử.",
          "delivery": "Gợi ý thay đổi góc, khoảng cách hoặc ánh sáng vừa phải. Nhắc ghi rõ vật thuộc nhãn thật nào.\nMột nhóm chia sẻ phương án có thể thực hiện trong lớp.",
          "answer": "• Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
          "closing": "Kiểm thử cần đầu vào mới và nhãn thực để đối chiếu.",
          "transition": "",
          "students": "Chọn ba cách thử an toàn, viết điều muốn quan sát."
        }
      },
      "theme": "cream",
      "originalNumber": 24
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
  "revision": "V4 — sau kiểm định 17/11/2026"
};
