/**
 * standalone/js/icons-data.js
 * SVG Icons sprite data preloaded for offline file:/// usage.
 */
window.STANDALONE_ICONS = `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <!-- Ngoi sao 10 canh phong cach editorial "Today's lesson" -->
  <symbol id="icon-star-burst" viewBox="0 0 100 100">
    <path fill="currentColor"
      d="M50 2 L54.02 37.64 L78.21 11.17 L60.52 42.36 L95.65 35.17
         L63 50 L95.65 64.83 L60.52 57.64 L78.21 88.83 L54.02 62.36
         L50 98 L45.98 62.36 L21.79 88.83 L39.48 57.64 L4.35 64.83
         L37 50 L4.35 35.17 L39.48 42.36 L21.79 11.17 L45.98 37.64 Z" />
  </symbol>

  <!-- Ngoi sao 8 canh phu tro -->
  <symbol id="icon-star-8" viewBox="0 0 24 24">
    <path fill="currentColor"
      d="M12 1 L14.8 8.2 L22 6 L18.8 12.8 L23 18 L15.5 17.5 L12 23
         L8.5 17.5 L1 18 L5.2 12.8 L2 6 L9.2 8.2 Z" />
  </symbol>

  <!-- Vong tron mui ten noi the (Connector Arrow Circle) -->
  <symbol id="icon-arrow-circle" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" stroke-width="2"/>
    <polyline points="15 11 22 18 15 25" fill="none" stroke="currentColor"
      stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>

  <!-- But chi (Pencil) -->
  <symbol id="icon-pencil" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
  </symbol>

  <!-- Sach (Book) -->
  <symbol id="icon-book" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </symbol>

  <!-- Bo nao / Tu duy (Brain) -->
  <symbol id="icon-brain" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M9.5 2A4.5 4.5 0 0 0 5 6.5c0 .4.05.8.15 1.18A4.5 4.5 0 0 0 3 11.5
         c0 2 1.3 3.69 3.12 4.25A4.5 4.5 0 0 0 10 20h2"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M14.5 2A4.5 4.5 0 0 1 19 6.5c0 .4-.05.8-.15 1.18A4.5 4.5 0 0 1 21 11.5
         c0 2-1.3 3.69-3.12 4.25A4.5 4.5 0 0 1 14 20h-2"/>
  </symbol>

  <!-- Bang danh sach kiem tra (Checklist) -->
  <symbol id="icon-checklist" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1" fill="none"
      stroke="currentColor" stroke-width="2"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M9 14l2 2 4-4"/>
  </symbol>

  <!-- Cup chien thang (Trophy) -->
  <symbol id="icon-trophy" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M6 4h12v6a6 6 0 0 1-12 0V4z"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M12 16v3M8 22h8"/>
  </symbol>

  <!-- Banh rang (Gear) -->
  <symbol id="icon-gear" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
    <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06
         a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09
         A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83
         l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4
         h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83
         l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0
         v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83
         l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4
         h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </symbol>

  <!-- Kinh lup (Search) -->
  <symbol id="icon-search" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65" fill="none" stroke="currentColor"
      stroke-width="2.5" stroke-linecap="round"/>
  </symbol>

  <!-- Dien gia / Nguoi noi (Speaker) -->
  <symbol id="icon-speaker" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M12 2a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" stroke-width="2"/>
    <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" stroke-width="2"/>
  </symbol>

  <!-- Manh ghep (Puzzle) -->
  <symbol id="icon-puzzle" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M19.439 7.85c-.049-.322.059-.659.289-.872l1.782-1.65a1.41 1.41 0 0 0 0-2.053
         l-1.347-1.249a1.41 1.41 0 0 0-2.053 0l-1.65 1.782c-.213.23-.55.338-.872.289
         a4.367 4.367 0 0 0-4.04 1.583H4a2 2 0 0 0-2 2v7.589a4.367 4.367 0 0 0 1.583 4.04
         c.23.213.338.55.289.872l-1.782 1.65a1.41 1.41 0 0 0 0 2.053l1.347 1.249
         a1.41 1.41 0 0 0 2.053 0l1.65-1.782c.213-.23.55-.338.872-.289
         a4.367 4.367 0 0 0 4.04-1.583H20a2 2 0 0 0 2-2V9.433
         a4.367 4.367 0 0 0-1.583-4.04z"/>
  </symbol>

  <!-- Ngoi nha (Home / Homeroom) -->
  <symbol id="icon-home" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22" fill="none" stroke="currentColor"
      stroke-width="2"/>
  </symbol>

  <!-- Truong hoc (School) -->
  <symbol id="icon-school" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M2 10l10-6 10 6-10 6-10-6z"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M6 12.5V18c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/>
  </symbol>

  <!-- Thu dien tu / Website (Mail / Globe) -->
  <symbol id="icon-mail" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10
         15.3 15.3 0 0 1 4-10z"/>
  </symbol>

  <!-- Man hinh chieu (Projector / Display) -->
  <symbol id="icon-projector" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2"
      fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor"
      stroke-width="2" stroke-linecap="round"/>
    <line x1="12" y1="17" x2="12" y2="21"
      stroke="currentColor" stroke-width="2"/>
  </symbol>

  <!-- Giao vien (Teacher) -->
  <symbol id="icon-teacher" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M6 6h10M6 10h10M6 14h6"/>
  </symbol>

  <!-- Hoc sinh (Student / Graduation cap) -->
  <symbol id="icon-student" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      d="M6 12v5c3 3 9 3 12 0v-5"/>
  </symbol>

  <!-- Dong ho dem gio (Clock / Timer) -->
  <symbol id="icon-clock" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
    <polyline points="12 7 12 12 15.5 14" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round"/>
  </symbol>

  <!-- Khoa nop bai (Lock) -->
  <symbol id="icon-lock" viewBox="0 0 24 24">
    <rect x="4" y="11" width="16" height="10" rx="2"
      fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"
      fill="none" stroke="currentColor" stroke-width="2"/>
  </symbol>

  <!-- Mo khoa nop bai (Unlock) -->
  <symbol id="icon-unlock" viewBox="0 0 24 24">
    <rect x="4" y="11" width="16" height="10" rx="2"
      fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"
      fill="none" stroke="currentColor" stroke-width="2"/>
  </symbol>

  <!-- Cong bo dap an (Eye / Reveal) -->
  <symbol id="icon-reveal" viewBox="0 0 24 24">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
      fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
  </symbol>

  <!-- Xuat CSV (File download) -->
  <symbol id="icon-csv" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      fill="none" stroke="currentColor" stroke-width="2"/>
    <polyline points="14 2 14 8 20 8" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="18" x2="12" y2="12" stroke="currentColor"
      stroke-width="2" stroke-linecap="round"/>
    <polyline points="9 15 12 18 15 15" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round"/>
  </symbol>

  <!-- Mui ten lui (Chevron Left) -->
  <symbol id="icon-prev" viewBox="0 0 24 24">
    <polyline points="15 18 9 12 15 6" fill="none" stroke="currentColor"
      stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>

  <!-- Mui ten tien (Chevron Right) -->
  <symbol id="icon-next" viewBox="0 0 24 24">
    <polyline points="9 18 15 12 9 6" fill="none" stroke="currentColor"
      stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>

  <!-- Toan man hinh (Maximize) -->
  <symbol id="icon-fullscreen" viewBox="0 0 24 24">
    <path
      d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3
         M3 16v3a2 2 0 0 0 2 2h3"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </symbol>

  <!-- Thoat toan man hinh (Minimize) -->
  <symbol id="icon-minimize" viewBox="0 0 24 24">
    <path d="M4 14h6v6m10-10h-6V4m0 16v-6h6M4 10h6V4"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </symbol>

  <!-- Dung (Check / Success #2E9E6B) -->
  <symbol id="icon-check" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor"
      stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>

  <!-- Sai (Cross / Error #D64545) -->
  <symbol id="icon-cross" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor"
      stroke-width="2.5" stroke-linecap="round"/>
    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor"
      stroke-width="2.5" stroke-linecap="round"/>
  </symbol>

  <!-- Thung rac / Xoa phien (Trash) -->
  <symbol id="icon-trash" viewBox="0 0 24 24">
    <polyline points="3 6 5 6 21 6" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      fill="none" stroke="currentColor" stroke-width="2"/>
  </symbol>

  <!-- Lam moi (Refresh) -->
  <symbol id="icon-refresh" viewBox="0 0 24 24">
    <polyline points="23 4 23 10 17 10" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round"/>
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
      fill="none" stroke="currentColor" stroke-width="2"/>
  </symbol>
</svg>
`;
