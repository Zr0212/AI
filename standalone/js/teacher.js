/**
 * standalone/js/teacher.js
 * Ban dieu khien giao vien doc lap: khong can server Node, khong can socket LAN.
 * Dong bo realtime voi man hinh may chieu qua BroadcastChannel va localStorage.
 */

// ===== 1. Trang thai ung dung =====
const decks = window.STANDALONE_DECKS || [];
let currentDeckIndex = 0;
let currentDeck = decks[0] || null;
let currentSlideIndex = 0;
let channel = null;
let currentFrameEl = null;

// Luu tru trang thai cong bo dap an theo activityId
const revealedActivities = new Map();

// Trang thai dong ho dem nguoc
let timerState = {
  remaining: 180,
  duration: 180,
  isRunning: false
};
let timerInterval = null;

// ===== 2. Khoi tao giao dien va bieu tuong SVG =====

function loadSvgSprite() {
  const holder = document.getElementById('svg-sprite-holder');
  if (holder && window.STANDALONE_ICONS) {
    holder.innerHTML = window.STANDALONE_ICONS;
  }
}

function initDeckSelector() {
  const selectEl = document.getElementById('select-deck');
  if (!selectEl || !decks.length) return;

  selectEl.innerHTML = '';
  decks.forEach((deck, idx) => {
    const opt = document.createElement('option');
    opt.value = String(idx);
    const lessonNum = idx < 12 ? `Tiết ${idx + 1}: ` : 'Bài mẫu: ';
    opt.textContent = `${lessonNum}${deck.title}`;
    if (idx === currentDeckIndex) opt.selected = true;
    selectEl.appendChild(opt);
  });

  selectEl.addEventListener('change', (e) => {
    const newIdx = parseInt(e.target.value, 10);
    if (!isNaN(newIdx) && decks[newIdx]) {
      switchDeck(newIdx);
    }
  });
}

function switchDeck(deckIndex) {
  currentDeckIndex = deckIndex;
  currentDeck = decks[deckIndex];
  currentSlideIndex = 0;
  revealedActivities.clear();

  // Dong bo lua chon tren the select
  const selectEl = document.getElementById('select-deck');
  if (selectEl && selectEl.value !== String(currentDeckIndex)) {
    selectEl.value = String(currentDeckIndex);
  }

  // Thong bao sang man chieu
  if (channel) {
    try {
      channel.post('deck:change', {
        deckIndex: currentDeckIndex,
        fileName: currentDeck ? currentDeck.fileName : ''
      });
    } catch (err) {
      console.warn('[Teacher] Loi dong bo deck:change:', err);
    }
  }

  renderThumbnails();
  displayCurrentSlide();
}

// ===== 3. Danh sach Thumbnail (Cot trai) =====

function renderThumbnails() {
  const container = document.getElementById('thumb-list');
  const countEl = document.getElementById('thumb-count');
  if (!container || !currentDeck || !currentDeck.slides) return;

  const slides = currentDeck.slides;
  if (countEl) countEl.textContent = `${slides.length} slide`;

  container.innerHTML = '';
  slides.forEach((slide, idx) => {
    const item = document.createElement('div');
    const isActive = idx === currentSlideIndex;
    item.className = `thumb-item ${isActive ? 'thumb-item--active' : ''}`;
    item.setAttribute('data-index', idx);

    const num = String(idx + 1).padStart(2, '0');
    const themeLabel = slide.theme === 'navy' ? 'Navy' : 'Kem';
    const hasAct = slide.activity ? ' &bull; Bài tập' : '';
    const layoutName = slide.layout || 'slide';

    item.innerHTML = `
      <span class="thumb-item__num">${num}</span>
      <div class="thumb-item__info">
        <div class="thumb-item__title">${slide.title || 'Slide ' + (idx + 1)}</div>
        <span class="thumb-item__badge">${layoutName} &bull; ${themeLabel}${hasAct}</span>
      </div>
    `;

    item.addEventListener('click', () => gotoSlide(idx));
    container.appendChild(item);
  });
}

function updateActiveThumbnail() {
  const items = document.querySelectorAll('.thumb-item');
  items.forEach((item, idx) => {
    if (idx === currentSlideIndex) {
      item.classList.add('thumb-item--active');
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      item.classList.remove('thumb-item--active');
    }
  });
}

// ===== 4. Trinh chieu Slide va Tuong tac Dap an (Cot giua) =====

function displayCurrentSlide() {
  if (!currentDeck || !currentDeck.slides || !currentDeck.slides.length) return;

  const slideData = currentDeck.slides[currentSlideIndex];
  slideData.deckTitle = currentDeck.title;

  const viewport = document.getElementById('teacher-viewport');
  if (!viewport || !window.SlideRenderer) return;

  currentFrameEl = window.SlideRenderer.renderSlide(slideData, viewport);
  window.SlideRenderer.fitSlideToViewport(viewport, currentFrameEl);

  const act = slideData.activity;
  const revealBtn = document.getElementById('btn-reveal-answer');
  const statusEl = document.getElementById('current-activity-status');

  if (act && window.SlideInteractions) {
    const slot = currentFrameEl.querySelector(`[data-activity-id="${act.id}"]`);
    const isRevealed = revealedActivities.has(act.id);
    const revData = revealedActivities.get(act.id) || {};

    if (slot) {
      window.SlideInteractions.renderInteractiveActivity(act, slot, {
        readOnly: true,
        isRevealed,
        correctAnswer: revData.answer !== undefined ? revData.answer : act.answer,
        explanation: revData.explanation || act.explanation
      });

      // Gan su kien click truc tiep tren cac phuong an de cong bo dap an
      const optionEls = slot.querySelectorAll('.interactive-option');
      optionEls.forEach((optEl) => {
        optEl.style.cursor = 'pointer';
        optEl.title = 'Bấm vào để công bố hoặc ẩn đáp án trên màn chiếu';
        optEl.addEventListener('click', () => {
          toggleActivityReveal(act);
        });
      });
    }

    if (revealBtn) {
      revealBtn.disabled = false;
      const textSpan = document.getElementById('reveal-btn-text');
      if (textSpan) {
        textSpan.textContent = isRevealed ? 'Ẩn đáp án' : 'Công bố đáp án';
      }
    }

    if (statusEl) {
      const typeLabel = act.type || 'choice';
      const pts = act.points ? ` (${act.points}đ)` : '';
      statusEl.textContent = `Bài tập [${typeLabel}]${pts}${isRevealed ? ' - ĐÃ CÔNG BỐ' : ''}`;
    }

    renderActivityDetails(act, isRevealed);
  } else {
    if (revealBtn) {
      revealBtn.disabled = true;
      const textSpan = document.getElementById('reveal-btn-text');
      if (textSpan) textSpan.textContent = 'Công bố đáp án';
    }

    if (statusEl) {
      statusEl.textContent = 'Slide lý thuyết (không có bài tập)';
    }

    renderActivityDetails(null, false);
  }

  // Cap nhat ghi chu giang day va phan dem
  updateSpeakerNotes(slideData);

  const counterEl = document.getElementById('slide-counter');
  if (counterEl) {
    counterEl.textContent = `Slide ${currentSlideIndex + 1} / ${currentDeck.slides.length}`;
  }

  // Cap nhat trang thai cac nut dieu huong
  const prevBtn = document.getElementById('btn-prev-slide');
  const nextBtn = document.getElementById('btn-next-slide');
  if (prevBtn) {
    prevBtn.disabled = currentSlideIndex <= 0;
    prevBtn.style.opacity = currentSlideIndex <= 0 ? '0.5' : '1';
    prevBtn.style.cursor = currentSlideIndex <= 0 ? 'not-allowed' : 'pointer';
  }
  if (nextBtn) {
    const isLast = currentSlideIndex >= currentDeck.slides.length - 1;
    nextBtn.disabled = isLast;
    nextBtn.style.opacity = isLast ? '0.5' : '1';
    nextBtn.style.cursor = isLast ? 'not-allowed' : 'pointer';
  }

  updateActiveThumbnail();
}

function toggleActivityReveal(activity) {
  if (!activity) return;

  const isRevealed = revealedActivities.has(activity.id);
  if (isRevealed) {
    revealedActivities.delete(activity.id);
    if (channel) {
      try {
        channel.post('answer:reveal', {
          slideIndex: currentSlideIndex,
          activityId: activity.id,
          isRevealed: false
        });
      } catch (err) {}
    }
  } else {
    revealedActivities.set(activity.id, {
      isRevealed: true,
      answer: activity.answer,
      explanation: activity.explanation
    });
    if (channel) {
      try {
        channel.post('answer:reveal', {
          slideIndex: currentSlideIndex,
          activityId: activity.id,
          isRevealed: true,
          answer: activity.answer,
          explanation: activity.explanation
        });
      } catch (err) {}
    }
  }

  displayCurrentSlide();
}

function gotoSlide(index) {
  if (!currentDeck || !currentDeck.slides) return;
  if (index < 0 || index >= currentDeck.slides.length) return;

  currentSlideIndex = index;

  if (channel) {
    try {
      channel.post('slide:goto', {
        deckIndex: currentDeckIndex,
        slideIndex: currentSlideIndex
      });
    } catch (err) {
      console.warn('[Teacher] Loi dong bo slide:goto:', err);
    }
  }

  displayCurrentSlide();
}

// ===== 5. Ghi chu giang day & Chi tiet bai tap (Cot phai) =====

function updateSpeakerNotes(slideData) {
  const notesEl = document.getElementById('speaker-notes-content');
  if (!notesEl) return;

  const notes = slideData.speakerNotes || '';
  if (!notes.trim()) {
    notesEl.innerHTML = '<p class="notes-empty">Không có ghi chú riêng cho slide này.</p>';
    return;
  }

  const escapeHtml = window.SlideRenderer ? window.SlideRenderer.escapeHtml : String;
  const formatted = notes
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join('');

  notesEl.innerHTML = formatted;
}

function renderActivityDetails(activity, isRevealed) {
  const box = document.getElementById('activity-detail-box');
  if (!box) return;

  if (!activity) {
    box.innerHTML = `
      <div class="progress-summary">
        Slide hiện tại không có bài tập tương tác.
      </div>
    `;
    return;
  }

  const escapeHtml = window.SlideRenderer ? window.SlideRenderer.escapeHtml : String;
  const ansStr = typeof activity.answer === 'object'
    ? JSON.stringify(activity.answer)
    : String(activity.answer || 'Chưa định nghĩa');

  box.innerHTML = `
    <div class="activity-info-card">
      <div class="activity-info-card__header">
        <span>Loại: <strong>${escapeHtml(activity.type || 'choice')}</strong></span>
        <span class="activity-info-card__badge">${activity.points || 1} Điểm</span>
      </div>
      <div class="activity-info-card__ans">
        ✓ Đáp án đúng: ${escapeHtml(ansStr)}
      </div>
      ${activity.explanation ? `
        <div class="activity-info-card__exp">
          <strong>Giải thích:</strong> ${escapeHtml(activity.explanation)}
        </div>
      ` : ''}
      <div style="margin-top: 8px; font-size: 11px; ` +
        `color: ${isRevealed ? '#059669' : '#D97706'}; font-weight: 600;">
        Trạng thái: ${isRevealed ? '● Đã công bố trên màn chiếu' : '○ Chưa công bố'}
      </div>
    </div>
  `;
}

// ===== 6. Dong ho dem nguoc Doc lap =====

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimerDisplay() {
  const displayEl = document.getElementById('teacher-timer-display');
  const toggleBtn = document.getElementById('btn-timer-toggle');
  if (displayEl) {
    displayEl.textContent = formatTime(timerState.remaining);
  }
  if (toggleBtn) {
    toggleBtn.textContent = timerState.isRunning ? '❚❚ Tạm dừng' : '▶ Bắt đầu';
  }
}

function broadcastTimer() {
  if (channel) {
    try {
      channel.post('timer:sync', {
        remaining: timerState.remaining,
        duration: timerState.duration,
        isRunning: timerState.isRunning
      });
    } catch (err) {}
  }
}

function tickTimer() {
  if (!timerState.isRunning) return;

  if (timerState.remaining > 0) {
    timerState.remaining--;
    updateTimerDisplay();
    broadcastTimer();
  } else {
    timerState.isRunning = false;
    clearInterval(timerInterval);
    timerInterval = null;
    updateTimerDisplay();
    broadcastTimer();
  }
}

function setupTimerControls() {
  const toggleBtn = document.getElementById('btn-timer-toggle');
  const resetBtn = document.getElementById('btn-timer-reset');
  const durationSelect = document.getElementById('timer-duration-select');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      timerState.isRunning = !timerState.isRunning;
      if (timerState.isRunning) {
        if (!timerInterval) timerInterval = setInterval(tickTimer, 1000);
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      updateTimerDisplay();
      broadcastTimer();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      timerState.isRunning = false;
      clearInterval(timerInterval);
      timerInterval = null;
      timerState.remaining = timerState.duration;
      updateTimerDisplay();
      broadcastTimer();
    });
  }

  if (durationSelect) {
    durationSelect.addEventListener('change', (e) => {
      const dur = parseInt(e.target.value, 10) || 180;
      timerState.duration = dur;
      timerState.remaining = dur;
      timerState.isRunning = false;
      clearInterval(timerInterval);
      timerInterval = null;
      updateTimerDisplay();
      broadcastTimer();
    });
  }
}

// ===== 7. Dong bo qua StandaloneChannel =====

function setupChannel() {
  if (!window.StandaloneChannel) return;
  channel = new window.StandaloneChannel();

  // Khi may chieu mo len va bao ready
  channel.on('projector:ready', () => {
    updateProjectorStatus(true);

    // Gui toan bo trang thai hien tai cho may chieu
    try {
      channel.post('teacher:state', {
        deckIndex: currentDeckIndex,
        fileName: currentDeck ? currentDeck.fileName : '',
        slideIndex: currentSlideIndex,
        timerState,
        revealedList: Array.from(revealedActivities.entries())
      });
    } catch (err) {}
  });

  // Khi nguoi dung thao tac tren HUD cua may chieu
  channel.on('projector:nav', (data) => {
    if (typeof data.slideIndex === 'number') {
      currentSlideIndex = data.slideIndex;
      displayCurrentSlide();
    }
  });
}

function updateProjectorStatus(connected) {
  const dot = document.getElementById('projector-status-dot');
  const text = document.getElementById('projector-status-text');
  if (dot) {
    if (connected) {
      dot.classList.add('status-dot--connected');
    } else {
      dot.classList.remove('status-dot--connected');
    }
  }
  if (text) {
    text.textContent = connected ? 'Màn chiếu: Đã kết nối' : 'Màn chiếu: Đang chờ';
  }
}

// ===== 8. Dieu huong & Phim tat =====

function setupNavigation() {
  const prevBtn = document.getElementById('btn-prev-slide');
  const nextBtn = document.getElementById('btn-next-slide');
  const revealBtn = document.getElementById('btn-reveal-answer');
  const openProjectorBtn = document.getElementById('btn-open-projector');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      gotoSlide(currentSlideIndex - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      gotoSlide(currentSlideIndex + 1);
    });
  }

  if (revealBtn) {
    revealBtn.addEventListener('click', () => {
      if (currentDeck && currentDeck.slides[currentSlideIndex]) {
        const act = currentDeck.slides[currentSlideIndex].activity;
        if (act) toggleActivityReveal(act);
      }
    });
  }

  if (openProjectorBtn) {
    openProjectorBtn.addEventListener('click', () => {
      window.open('projector.html', 'projector_window', 'width=1280,height=720');
    });
  }

  // Phim tat ban phim
  window.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement ? document.activeElement.tagName : '';
    if (activeTag === 'INPUT' || activeTag === 'SELECT' || activeTag === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      gotoSlide(currentSlideIndex + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      gotoSlide(currentSlideIndex - 1);
    } else if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      if (currentDeck && currentDeck.slides[currentSlideIndex]) {
        const act = currentDeck.slides[currentSlideIndex].activity;
        if (act) toggleActivityReveal(act);
      }
    } else if (e.key === 't' || e.key === 'T') {
      e.preventDefault();
      const toggleBtn = document.getElementById('btn-timer-toggle');
      if (toggleBtn) toggleBtn.click();
    }
  });

  // Tu dong co gian slide preview khi resize cua so
  window.addEventListener('resize', () => {
    const viewport = document.getElementById('teacher-viewport');
    if (viewport && currentFrameEl && window.SlideRenderer) {
      window.SlideRenderer.fitSlideToViewport(viewport, currentFrameEl);
    }
  });
}

// ===== 9. Khoi chay ung dung =====

document.addEventListener('DOMContentLoaded', () => {
  loadSvgSprite();
  initDeckSelector();
  setupChannel();
  setupTimerControls();
  setupNavigation();

  // Hien thi slide dau tien
  renderThumbnails();
  displayCurrentSlide();
});
