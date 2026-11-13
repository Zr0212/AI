# AI và tương lai nghề nghiệp – Bài giảng tương tác lớp 9

Bộ bài giảng gồm **22 slide**, bám sát giáo án *Tiết 2 – Bài 2: AI và tương lai nghề nghiệp*, mục tiêu **9.A3.4**, thời lượng **45 phút**.

## Khởi chạy

- **Windows:** Nhấp đúp `START_WINDOWS.bat`. Nếu máy không có lệnh `py`, mở Terminal trong thư mục này và chạy `python -m http.server 8765`.
- **macOS/Linux:** chạy `./START_MAC_LINUX.sh`, hoặc `python3 -m http.server 8765`.
- Truy cập **http://localhost:8765/index.html** để xem bài giảng.
- Truy cập **http://localhost:8765/presenter.html** để xem giao diện giáo viên.

Không cần Internet, đăng nhập, dịch vụ bên ngoài, API key hay backend. Đây là một **máy chủ tệp tĩnh cục bộ** chỉ phục vụ việc đồng bộ hai cửa sổ, không phải backend. Có thể mở `index.html` trực tiếp để xem slide, nhưng để **đồng bộ ổn định giữa cửa sổ** nên chạy bằng localhost như trên.

## Thao tác nhanh

| Thao tác | Cách sử dụng |
|---|---|
| Slide tiếp | `→`, `Space` hoặc `PageDown` |
| Slide trước | `←` hoặc `PageUp` |
| Toàn màn hình | `F` hoặc nút `⛶`; `Esc` để thoát |
| Bộ đếm thời gian | `▶` chạy/tạm dừng; `↺` đặt lại |
| Phiếu trên slide | Bấm vào ô và nhập bằng bàn phím; nội dung được giữ khi chuyển slide |
| Gợi ý và đáp án | Nút **Gợi ý / Đáp án mẫu**, mặc định ẩn |
| Xóa phiếu | Nút **Xóa bài làm** ở từng phiếu |
| Ghi bài | Slide 16: **Chế độ ghi bài** |
| Bảng tiêu chí | Slide 19: bấm từng tiêu chí để đánh dấu |

**Giáo viên có thể mời học sinh lên bảng dùng chuột/bàn phím để điền phiếu**, không cần in giấy. Bài làm được lưu trong bộ nhớ trình duyệt tại máy đang sử dụng (localStorage), không truyền lên Internet. Khi cần bắt đầu lớp mới, vào `presenter.html` và bấm **Xóa bài làm (xác nhận)**.

## Hai màn hình

1. Đặt Windows/macOS ở chế độ mở rộng màn hình (Extend displays).
2. Mở `http://localhost:8765/presenter.html` trên màn hình máy tính giáo viên.
3. Bấm **Mở cửa sổ chiếu**. Kéo cửa sổ mới sang máy chiếu và nhấn `F` để toàn màn hình (hoặc bật full screen từ giao diện trình duyệt).
4. Ở màn hình chính, giáo viên xem **slide hiện tại, slide tiếp theo, ghi chú, đồng hồ**; màn chiếu chỉ hiển thị slide.
5. Điều hướng từ bảng điều khiển giáo viên. Nội dung đồng bộ tức thời qua `BroadcastChannel`, có dự phòng `storage event`.

Nếu chỉ có một màn hình, mở `index.html` và trình chiếu bình thường. Việc tự chọn màn hình phụ phụ thuộc hỗ trợ của hệ điều hành và trình duyệt; dự án không tự ý cấp quyền chia sẻ màn hình.

## Thời lượng theo giáo án

- Khởi động: **5 phút** (slide 1–4)
- Khám phá 1: **12 phút** (slide 5–10)
- Khám phá 2: **12 phút** (slide 11–16)
- Luyện tập: **10 phút** (slide 17–19)
- Vận dụng: **6 phút** (slide 20–22)

Đồng hồ được đặt theo **hoạt động**, không đặt theo từng slide. Khi chuyển sang hoạt động mới, đồng hồ tự đổi thời lượng và tạm dừng để giáo viên chủ động bắt đầu.

## Nguồn nội dung và thiết kế

Nội dung tái cấu trúc từ giáo án gốc và Phụ lục 1–3. Các thẻ nghề y tế đều là **tình huống giả định**, không sử dụng dữ liệu thật. Hình minh họa vector trong `assets/illustrations/` được tạo mới cho dự án. Phong cách lấy cảm hứng từ ảnh Canva STEM do người dùng cung cấp, không sao chép template hoặc logo thương mại.

## Mã nguồn

- `js/slides-data.js`: 22 slide, thẻ hoạt động, nội dung và ghi chú giáo viên.
- `js/main.js`: render slide, bàn phím, phiếu học tập, đánh dấu, đồng hồ, đồng bộ.
- `js/presenter.js`: bảng điều khiển giảng viên.
- `css/slides.css` và `css/presenter.css`: Design System và giao diện.
- `assets/illustrations/`: bộ hình SVG offline.
- `qa/`: ảnh chụp kiểm thử và báo cáo QA.
- `bai-giang-ai-nghe-nghiep.pptx`: bản PowerPoint **tĩnh** dùng khi cần xem ngoài trình duyệt. Phần tương tác, bảng điền và presenter mode chỉ hoạt động trong bản HTML.
