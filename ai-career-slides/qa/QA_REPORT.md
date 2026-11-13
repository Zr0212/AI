# BÁO CÁO KIỂM TRA CHẤT LƯỢNG

**Tài liệu:** AI và tương lai nghề nghiệp – AI 9, tiết 2

**Đã xác minh:** 22 slide, 5 hoạt động, tổng 45 phút. Tất cả slide có phần ghi chú giáo viên, không có ảnh/tài nguyên bị thiếu hoặc nút tương tác trỏ tới mục tiêu không tồn tại. Mã JavaScript đạt `node --check`. Bản PowerPoint đã render đủ 22 slide, qua `slides_test.py` không phát hiện nội dung tràn biên.

**Giới hạn cần minh bạch:** Môi trường dựng bài có chính sách chặn trình duyệt Chromium truy cập URL cục bộ và `file://`, nên **chưa kiểm thử end-to-end bằng trình duyệt thật** cho bản HTML (đặc biệt nhập phiếu, full screen, BroadcastChannel và hành vi ở nhiều độ phân giải). Các mục đó phải kiểm tra trên máy triển khai; không ghi PASS giả. Hình chụp dưới `qa/screenshots` là từ **PowerPoint tĩnh**, không phải giao diện HTML.

## Kiểm tra từng slide

| # | Nội dung | Nội dung / ghi chú / tài nguyên | Bản PPTX | Bản HTML trực tiếp |
|---:|---|---|---|---|
| 01 | AI và tương lai nghề nghiệp | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 02 | AI xuất hiện trong những nghề nào? | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 03 | AI làm nhanh, con người còn làm gì? | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 04 | Thay đổi nhiệm vụ không có nghĩa mất nghề | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 05 | Trước và sau khi có AI | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 06 | Nghề dịch thuật | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 07 | Nghề thiết kế | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 08 | Nghề y tế | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 09 | Phiếu học tập nhóm | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 10 | Đối chiếu kết quả | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 11 | Kĩ năng nào cần trang bị? | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 12 | Sơ đồ ba bước | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 13 | Những kĩ năng quan trọng | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 14 | Ví dụ: người dịch cần gì? | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 15 | Hoạt động nhóm: nghề của em | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 16 | Kiến thức cần nhớ | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 17 | Thử thách cá nhân | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 18 | Phiếu luyện tập trực tiếp | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 19 | Cùng kiểm tra kết quả | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 20 | Nghề nghiệp tương lai của em | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 21 | Lộ trình ba dòng | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |
| 22 | Kết thúc bài học | Đạt | Có ảnh render; không tràn khung | Chưa kiểm thử trình duyệt |

## Checklist sử dụng lần đầu trong lớp

- [ ] Giải nén ZIP và mở `START_WINDOWS.bat` / `START_MAC_LINUX.sh`.
- [ ] Mở `http://localhost:8765/index.html` và xác nhận có 22 slide.
- [ ] Thử chuyển slide bằng phím trái/phải, Space, bật toàn màn hình bằng F.
- [ ] Ở slide 09, 15, 18 và 21: nhập thử, chuyển slide đi-về, xác nhận không mất dữ liệu.
- [ ] Bấm Hiện gợi ý / Đáp án mẫu và Xóa bài làm; xác nhận chỉ tác động đúng phiếu.
- [ ] Ở slide 16, bật/tắt Chế độ ghi bài; slide 19 đánh dấu / bỏ đánh dấu tiêu chí.
- [ ] Khởi động và tạm dừng đồng hồ; chuyển sang hoạt động tiếp theo để xác nhận đổi thời lượng.
- [ ] Mở `presenter.html`, bấm "Mở cửa sổ chiếu", kiểm tra đồng bộ hai cửa sổ và ghi chú không bị lộ lên máy chiếu.
- [ ] Kiểm tra giao diện trình chiếu ở độ phân giải 1280×720, 1366×768 và 1920×1080.
- [ ] Đảm bảo máy chiếu đang ở chế độ Extend, không phải Duplicate, khi dùng hai màn hình.

## Tính chính xác nội dung

- Giữ chuẩn đầu ra 9.A3.4: ≥2 nghề, ≥2 kĩ năng có lí do, ≥1 trách nhiệm của con người.
- Thẻ tình huống A/B/C và các gợi ý đáp án lấy từ Phụ lục 1/2; tiêu chí từ Phụ lục 3.
- Không khẳng định AI thay thế hoàn toàn một nghề; minh họa y tế được mô tả giả định.
- Không chứa thông tin cá nhân thật.
