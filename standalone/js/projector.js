/**
 * standalone/js/projector.js
 * Man hinh may chieu 16:9 doc lap: khong can server Node, khong can socket LAN.
 * Dong bo realtime voi Ban dieu khien Giao vien qua BroadcastChannel va localStorage.
 */

// ===== 1. Trang thai man hinh may chieu =====
const decks = window.STANDALONE_DECKS || [];
let currentDeckIndex = 0;
let currentDeck = decks[0] || null;
let currentSlideIndex = 0;
let currentFrameEl = null;
let channel = null;

// Luu tru trang thai cong bo dap an theo activityId
const revealedActivities = new Map();

// Luu tru cau tra loi dang tuong tac theo activityId
const activityAnswers = new Map();

// Trang thai dong ho dem nguoc tu Giao vien
let timerState = {
  remaining: 180,
  duration: 180,
  isRunning: false
};

// Timeout tu dong an HUD dieu huong
let hudHideTimeout = null;

// ===== 2. Khoi tao bieu tuong SVG va Co gian 16:9 =====

function loadSvgSprite() {
  const holder = document.getElementById('svg-sprite-holder');
  if (holder && window.STANDALONE_ICONS) {
    holder.innerHTML = window.STANDALONE_ICONS;
  }
}

function restoreProjectorState() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const qDeck = urlParams.get('deck');
    const qSlide = urlParams.get('slide');
    const savedDeck = localStorage.getItem('standalone_active_deck_index');
    const savedSlide = localStorage.getItem('standalone_active_slide_index');

    if (qDeck !== null && decks[parseInt(qDeck, 10)]) {
      currentDeckIndex = parseInt(qDeck, 10);
      currentDeck = decks[currentDeckIndex];
    } else if (savedDeck !== null && decks[parseInt(savedDeck, 10)]) {
      currentDeckIndex = parseInt(savedDeck, 10);
      currentDeck = decks[currentDeckIndex];
    }

    if (qSlide !== null) {
      const sIdx = parseInt(qSlide, 10) || 0;
      if (currentDeck && currentDeck.slides && sIdx < currentDeck.slides.length) {
        currentSlideIndex = sIdx;
      }
    } else if (savedSlide !== null) {
      const sIdx = parseInt(savedSlide, 10) || 0;
      if (currentDeck && currentDeck.slides && sIdx < currentDeck.slides.length) {
        currentSlideIndex = sIdx;
      }
    }
  } catch (e) {}
}

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimerDisplay() {
  const timerBox = document.getElementById('projector-timer');
  const timerVal = document.getElementById('projector-timer-val');
  if (!timerBox || !timerVal) return;

  const hasActiveTime = timerState.remaining > 0 &&
    timerState.remaining < timerState.duration;

  if (timerState.isRunning || hasActiveTime) {
    timerBox.style.display = 'flex';
    timerVal.textContent = formatTime(timerState.remaining);

    if (timerState.remaining <= 10 && timerState.isRunning) {
      timerBox.classList.add('projector-timer--urgent');
    } else {
      timerBox.classList.remove('projector-timer--urgent');
    }
  } else {
    timerBox.style.display = 'none';
  }
}

// ===== 3. Trinh chieu Slide & Cong bo Dap an =====

function displaySlide(index) {
  if (!currentDeck || !currentDeck.slides || !currentDeck.slides.length) return;
  if (index < 0 || index >= currentDeck.slides.length) return;

  currentSlideIndex = index;
  const slideData = currentDeck.slides[currentSlideIndex];
  slideData.deckTitle = currentDeck.title;

  const viewport = document.getElementById('slide-viewport');
  if (!viewport || !window.SlideRenderer) return;

  // Render slide tren khung 1920x1080
  currentFrameEl = window.SlideRenderer.renderSlide(slideData, viewport);
  window.SlideRenderer.fitSlideToViewport(viewport, currentFrameEl);

  // Neu slide co bai tap, render trang thai dap an
  const act = slideData.activity;
  if (act && window.SlideInteractions) {
    const slot = currentFrameEl.querySelector(`[data-activity-id="${act.id}"]`);
    if (slot) {
      const isRevealed = revealedActivities.has(act.id);
      const revData = revealedActivities.get(act.id) || {};
      const currentAns = activityAnswers.has(act.id)
        ? activityAnswers.get(act.id)
        : act.initialAnswer;

      window.SlideInteractions.renderInteractiveActivity(act, slot, {
        readOnly: true,
        interactive: true,
        initialAnswer: currentAns,
        isRevealed,
        correctAnswer: revData.answer !== undefined ? revData.answer : act.answer,
        explanation: revData.explanation || act.explanation,
        onAnswerChange: (newAns) => {
          activityAnswers.set(act.id, newAns);
          if (channel) {
            try {
              channel.post('activity:answer', {
                activityId: act.id,
                answer: newAns
              });
            } catch (err) {}
          }
        }
      });
    }
  }

  // Cap nhat bo dem tren HUD
  const counterEl = document.getElementById('hud-counter');
  if (counterEl) {
    const prefix = currentDeck.title.includes(':')
      ? currentDeck.title.split(':')[0]
      : 'Slide';
    counterEl.textContent = `${prefix} • ${currentSlideIndex + 1} / ${currentDeck.slides.length}`;
  }
}

// ===== 4. Dong bo qua StandaloneChannel =====

function setupChannel() {
  if (!window.StandaloneChannel) return;
  channel = new window.StandaloneChannel();

  // 1. Dong bo day du khi nhan trang thai ban dau tu giao vien
  channel.on('teacher:state', (data) => {
    if (typeof data.deckIndex === 'number' && decks[data.deckIndex]) {
      currentDeckIndex = data.deckIndex;
      currentDeck = decks[currentDeckIndex];
    } else if (data.fileName) {
      const foundIdx = decks.findIndex((d) => d.fileName === data.fileName);
      if (foundIdx !== -1) {
        currentDeckIndex = foundIdx;
        currentDeck = decks[foundIdx];
      }
    }

    if (Array.isArray(data.revealedList)) {
      revealedActivities.clear();
      data.revealedList.forEach(([actId, info]) => {
        revealedActivities.set(actId, info);
      });
    }

    if (Array.isArray(data.activityAnswers)) {
      activityAnswers.clear();
      data.activityAnswers.forEach(([actId, ans]) => {
        activityAnswers.set(actId, ans);
      });
    }

    if (data.timerState) {
      timerState = data.timerState;
      updateTimerDisplay();
    }

    if (typeof data.slideIndex === 'number') {
      displaySlide(data.slideIndex);
    }
  });

  // 2. Chuyen bai giang moi
  channel.on('deck:change', (data) => {
    if (typeof data.deckIndex === 'number' && decks[data.deckIndex]) {
      currentDeckIndex = data.deckIndex;
      currentDeck = decks[currentDeckIndex];
    } else if (data.fileName) {
      const foundIdx = decks.findIndex((d) => d.fileName === data.fileName);
      if (foundIdx !== -1) {
        currentDeckIndex = foundIdx;
        currentDeck = decks[foundIdx];
      }
    }
    revealedActivities.clear();
    activityAnswers.clear();
    displaySlide(0);
  });

  // 3. Chuyen slide
  channel.on('slide:goto', (data) => {
    if (typeof data.deckIndex === 'number' && data.deckIndex !== currentDeckIndex) {
      if (decks[data.deckIndex]) {
        currentDeckIndex = data.deckIndex;
        currentDeck = decks[currentDeckIndex];
      }
    }
    if (typeof data.slideIndex === 'number') {
      displaySlide(data.slideIndex);
    }
  });

  // 4. Cong bo hoac an dap an
  channel.on('answer:reveal', (data) => {
    if (data.isRevealed) {
      revealedActivities.set(data.activityId, {
        isRevealed: true,
        answer: data.answer,
        explanation: data.explanation
      });
    } else {
      revealedActivities.delete(data.activityId);
    }

    // Neu dang o dung slide cua bai tap thi ve lai ngay lap tuc
    if (currentDeck && currentDeck.slides[currentSlideIndex]) {
      const act = currentDeck.slides[currentSlideIndex].activity;
      if (act && act.id === data.activityId) {
        displaySlide(currentSlideIndex);
      }
    }
  });

  // 5. Dong ho dem nguoc
  channel.on('timer:sync', (data) => {
    timerState.remaining = data.remaining;
    timerState.duration = data.duration;
    timerState.isRunning = data.isRunning;
    updateTimerDisplay();
  });

  // 6. Nhan cau tra loi tu giao vien hoac thiet bi khac
  channel.on('activity:answer', (data) => {
    if (!data || !data.activityId) return;
    activityAnswers.set(data.activityId, data.answer);
    if (currentDeck && currentDeck.slides[currentSlideIndex]) {
      const act = currentDeck.slides[currentSlideIndex].activity;
      if (act && act.id === data.activityId) {
        displaySlide(currentSlideIndex);
      }
    }
  });

  // Lang nghe localStorage event du phong
  window.addEventListener('storage', (e) => {
    if (e.key === 'standalone_active_deck_index' && e.newValue !== null) {
      const newDIdx = parseInt(e.newValue, 10);
      if (decks[newDIdx] && newDIdx !== currentDeckIndex) {
        currentDeckIndex = newDIdx;
        currentDeck = decks[currentDeckIndex];
        revealedActivities.clear();
        activityAnswers.clear();
        displaySlide(0);
      }
    } else if (e.key === 'standalone_active_slide_index' && e.newValue !== null) {
      const newSIdx = parseInt(e.newValue, 10);
      if (newSIdx !== currentSlideIndex) {
        displaySlide(newSIdx);
      }
    }
  });

  // Phat tin hieu ready de Giao vien biet va gui toan bo trang thai hien tai
  try {
    channel.post('projector:ready', { timestamp: Date.now() });
  } catch (err) {
    console.warn('[Projector] Loi khoi tao kenh:', err);
  }
}

// ===== 5. HUD dieu huong & Toan man hinh =====

function showHudTemporarily() {
  const hud = document.getElementById('projector-hud');
  if (!hud) return;

  hud.classList.remove('projector-hud--hidden');
  clearTimeout(hudHideTimeout);
  hudHideTimeout = setTimeout(() => {
    hud.classList.add('projector-hud--hidden');
  }, 3000);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function setupHudAndControls() {
  const prevBtn = document.getElementById('hud-prev');
  const nextBtn = document.getElementById('hud-next');
  const fullBtn = document.getElementById('hud-fullscreen');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlideIndex > 0) {
        displaySlide(currentSlideIndex - 1);
        if (channel) {
          try {
            channel.post('projector:nav', { slideIndex: currentSlideIndex });
          } catch (err) {}
        }
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentDeck && currentSlideIndex < currentDeck.slides.length - 1) {
        displaySlide(currentSlideIndex + 1);
        if (channel) {
          try {
            channel.post('projector:nav', { slideIndex: currentSlideIndex });
          } catch (err) {}
        }
      }
    });
  }

  if (fullBtn) {
    fullBtn.addEventListener('click', toggleFullscreen);
  }

  // Hien thi HUD khi di chuot
  document.addEventListener('mousemove', showHudTemporarily);
  showHudTemporarily();

  // Phim tat
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      if (currentDeck && currentSlideIndex < currentDeck.slides.length - 1) {
        displaySlide(currentSlideIndex + 1);
        if (channel) {
          try {
            channel.post('projector:nav', { slideIndex: currentSlideIndex });
          } catch (err) {}
        }
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      if (currentSlideIndex > 0) {
        displaySlide(currentSlideIndex - 1);
        if (channel) {
          try {
            channel.post('projector:nav', { slideIndex: currentSlideIndex });
          } catch (err) {}
        }
      }
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  // Tu dong scale khi thay doi kich thuoc viewport
  window.addEventListener('resize', () => {
    const viewport = document.getElementById('slide-viewport');
    if (viewport && currentFrameEl && window.SlideRenderer) {
      window.SlideRenderer.fitSlideToViewport(viewport, currentFrameEl);
    }
  });
}

// ===== 6. Khoi chay =====

document.addEventListener('DOMContentLoaded', () => {
  loadSvgSprite();
  restoreProjectorState();
  setupChannel();
  setupHudAndControls();

  // Hien thi slide hien tai
  displaySlide(currentSlideIndex);
});
