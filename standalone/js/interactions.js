/**
 * public/shared/interactions.js
 * Muc dich: Render va xu ly tuong tac truc tiep tren mat phang slide 16:9:
 * ho tro khoa bai (isLocked), cong bo dap an (isRevealed), bieu do thong ke an danh
 * va giai thich chi tiet.
 * Cac ham chinh:
 * - renderInteractiveActivity: Render giao dien bai tap, ho tro lock va reveal.
 */

// Su dung ham escapeHtml tu window.SlideRenderer hoac noi bo
const escapeHtml = (typeof window !== 'undefined' &&
  window.SlideRenderer && window.SlideRenderer.escapeHtml)
  ? window.SlideRenderer.escapeHtml
  : function(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    };

// ===== 1. Ham ho tro debounce luu nhap =====

function debounce(func, wait = 400) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// ===== 2. Render tung loai bai tap =====

function renderChoice(activity, initialAnswer, isLocked, isRevealed, correctAnswer) {
  const isMultiple = activity.multiple || Array.isArray(activity.answer);
  const options = activity.options || [];
  const currentSelection = isMultiple
    ? (Array.isArray(initialAnswer) ? initialAnswer : [])
    : (initialAnswer !== undefined ? String(initialAnswer) : null);

  const optionsHtml = options.map(opt => {
    const isSelected = isMultiple
      ? currentSelection.includes(opt.id)
      : currentSelection === String(opt.id);

    let revealClass = '';
    if (isRevealed && correctAnswer !== undefined) {
      const isTarget = isMultiple
        ? (Array.isArray(correctAnswer) && correctAnswer.includes(opt.id))
        : String(correctAnswer) === String(opt.id);

      if (isTarget) {
        revealClass = 'interactive-option--correct';
      } else if (isSelected) {
        revealClass = 'interactive-option--wrong';
      }
    }

    let correctBadgeHtml = '';
    if (revealClass.includes('interactive-option--correct')) {
      correctBadgeHtml = `
        <span class="interactive-option__correct-badge">✓ ĐÁP ÁN ĐÚNG</span>
      `;
    }

    return `
      <div class="interactive-option ${isSelected ? 'interactive-option--selected' : ''}
                  ${revealClass}"
           data-option-id="${opt.id}"
           role="${isMultiple ? 'checkbox' : 'radio'}"
           aria-checked="${isSelected}">
        <span class="interactive-option__indicator">
          ${isMultiple ? (isSelected ? '☑' : '☐') : (isSelected ? '●' : '○')}
        </span>
        <span class="interactive-option__id">${opt.id}.</span>
        <span class="interactive-option__text">${opt.text}</span>
        ${correctBadgeHtml}
      </div>
    `;
  }).join('');

  return `
    <div class="interactive-choice ${isLocked ? 'interactive--locked' : ''}">
      <p class="interactive-prompt">${activity.prompt || ''}</p>
      <div class="interactive-choice__list">${optionsHtml}</div>
    </div>
  `;
}

function renderShortText(activity, initialAnswer, isLocked, isRevealed, correctAnswer) {
  const value = initialAnswer ? String(initialAnswer) : '';
  const placeholder = isLocked
    ? 'Hoạt động đã bị khóa...'
    : (activity.placeholder || 'Nhập câu trả lời ngắn của em...');

  return `
    <div class="interactive-short-text ${isLocked ? 'interactive--locked' : ''}">
      <p class="interactive-prompt">${activity.prompt || ''}</p>
      <div class="interactive-input-wrapper">
        <input type="text"
               class="interactive-input"
               value="${escapeHtml(value)}"
               placeholder="${escapeHtml(placeholder)}"
               ${isLocked ? 'disabled' : ''}
               autocomplete="off" />
      </div>
    </div>
  `;
}

function renderFillBlank(activity, initialAnswer, isLocked) {
  const template = activity.template || 'Em hãy điền vào chỗ trống: [blank_0]';
  const userAnswers = Array.isArray(initialAnswer) ? initialAnswer : [];

  const replacedHtml = template.replace(/\[blank_(\d+)\]/g, (match, idx) => {
    const val = userAnswers[idx] || '';
    return `
      <input type="text"
             class="blank-input"
             data-blank-index="${idx}"
             value="${escapeHtml(val)}"
             ${isLocked ? 'disabled' : ''}
             placeholder="..." />
    `;
  });

  return `
    <div class="interactive-fill-blank ${isLocked ? 'interactive--locked' : ''}">
      <p class="interactive-prompt">${activity.prompt || ''}</p>
      <div class="blank-text-box">${replacedHtml}</div>
    </div>
  `;
}

function renderMatching(activity, initialAnswer, isLocked) {
  const pairs = activity.pairs || [];
  const leftItems = pairs.map(p => ({ id: p.id, text: p.left }));
  const seenRight = new Set();
  const rightItems = [];
  pairs.forEach((p, idx) => {
    const rid = p.rightId || ('r' + (idx + 1));
    if (!seenRight.has(rid)) {
      seenRight.add(rid);
      rightItems.push({ id: rid, text: p.right });
    }
  });
  const userPairs = initialAnswer || {};

  const leftHtml = leftItems.map(item => {
    const isMatched = Boolean(userPairs[item.id]);
    return `
      <button type="button"
              class="match-item match-item--left ${isMatched ? 'match-item--matched' : ''}"
              data-left-id="${item.id}"
              ${isLocked ? 'disabled' : ''}>
        <span class="match-item__dot"></span>
        <span class="match-item__text">${item.text}</span>
      </button>
    `;
  }).join('');

  const rightHtml = rightItems.map(item => {
    const isMatched = Object.values(userPairs).includes(item.id);
    return `
      <button type="button"
              class="match-item match-item--right ${isMatched ? 'match-item--matched' : ''}"
              data-right-id="${item.id}"
              ${isLocked ? 'disabled' : ''}>
        <span class="match-item__dot"></span>
        <span class="match-item__text">${item.text}</span>
      </button>
    `;
  }).join('');

  return `
    <div class="interactive-matching ${isLocked ? 'interactive--locked' : ''}">
      <p class="interactive-prompt">${activity.prompt || 'Nối vế trái với vế phải thích hợp:'}</p>
      <div class="matching-columns">
        <div class="matching-col matching-col--left">${leftHtml}</div>
        <div class="matching-col matching-col--right">${rightHtml}</div>
      </div>
      <p class="matching-hint">
        <em>* Chạm vào 1 mục ở cột trái, sau đó chạm vào 1 mục ở cột phải để nối.</em>
      </p>
    </div>
  `;
}

function renderOrdering(activity, initialAnswer, isLocked) {
  const items = activity.items || [];
  let orderedItems = [...items];
  if (Array.isArray(initialAnswer) && initialAnswer.length === items.length) {
    orderedItems = initialAnswer.map(id => items.find(it => it.id === id)).filter(Boolean);
  }

  const itemsHtml = orderedItems.map((item, idx) => {
    return `
      <div class="order-item" data-id="${item.id}">
        <span class="order-item__handle" aria-hidden="true">☰</span>
        <span class="order-item__num">${idx + 1}</span>
        <span class="order-item__text">${item.text}</span>
        ${!isLocked ? `
          <div class="order-item__buttons">
            <button type="button" class="order-btn btn-up" aria-label="Lên">▲</button>
            <button type="button" class="order-btn btn-down" aria-label="Xuống">▼</button>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="interactive-ordering ${isLocked ? 'interactive--locked' : ''}">
      <p class="interactive-prompt">${activity.prompt || 'Sắp xếp theo thứ tự đúng:'}</p>
      <div class="ordering-list" id="ordering-list">${itemsHtml}</div>
      <p class="ordering-hint">
        <em>* Kéo thả hoặc dùng nút ▲ / ▼ để sắp xếp thứ tự các bước.</em>
      </p>
    </div>
  `;
}

function renderPoll(activity, initialAnswer, isLocked) {
  const options = activity.options || [];
  const selected = initialAnswer !== undefined ? String(initialAnswer) : null;

  const optionsHtml = options.map(opt => {
    const isSelected = selected === String(opt.id);
    return `
      <button type="button"
              class="poll-option ${isSelected ? 'poll-option--selected' : ''}"
              data-poll-id="${opt.id}"
              ${isLocked ? 'disabled' : ''}>
        <span class="poll-option__text">${opt.text}</span>
        ${isSelected ? '<span class="poll-option__check">✓</span>' : ''}
      </button>
    `;
  }).join('');

  return `
    <div class="interactive-poll ${isLocked ? 'interactive--locked' : ''}">
      <p class="interactive-prompt">${activity.prompt || ''}</p>
      <div class="poll-list">${optionsHtml}</div>
    </div>
  `;
}

function renderReflection(activity, initialAnswer, isLocked) {
  const value = initialAnswer ? String(initialAnswer) : '';
  const placeholder = isLocked
    ? 'Hoạt động đã kết thúc...'
    : (activity.placeholder || 'Chia sẻ suy nghĩ của em tại đây...');

  return `
    <div class="interactive-reflection ${isLocked ? 'interactive--locked' : ''}">
      <p class="interactive-prompt">${activity.prompt || ''}</p>
      <textarea class="interactive-textarea"
                rows="4"
                placeholder="${escapeHtml(placeholder)}"
                ${isLocked ? 'disabled' : ''}>${escapeHtml(value)}</textarea>
    </div>
  `;
}

// ===== 3. Thong ke phan bo an danh cho May chieu & Giao vien =====

function renderStatsChart(stats, activity, correctAnswer) {
  if (!stats || !activity) return '';

  const dist = stats.choiceDistribution || {};
  const total = stats.totalStudents || 1;

  const bars = (activity.options || []).map(opt => {
    const count = dist[opt.id] || 0;
    const percent = Math.round((count / total) * 100);
    const isTarget = String(correctAnswer) === String(opt.id);

    return `
      <div class="stats-row">
        <span class="stats-label">${opt.id}. ${opt.text} ${isTarget ? '✓' : ''}</span>
        <div class="stats-track">
          <div class="stats-bar ${isTarget ? 'stats-bar--correct' : ''}"
               style="width: ${percent}%;"></div>
        </div>
        <span class="stats-val">${count} em (${percent}%)</span>
      </div>
    `;
  }).join('');

  return `
    <div class="activity-stats-box">
      <h3 class="stats-heading">KẾT QUẢ TỔNG HỢP (ẨN DANH)</h3>
      <div class="stats-bars">${bars}</div>
    </div>
  `;
}

// ===== 4. Ham render chinh =====

/**
 * Render toan bo bai tap tuong tac vao phan tu container tren mat phang slide.
 * @param {object} activity - Thong tin bai tap
 * @param {HTMLElement} container - Khung hien thi
 * @param {object} options - Tuy chon trang thai
 */
function renderInteractiveActivity(activity, container, options = {}) {
  if (!activity || !container) return;

  const {
    initialAnswer,
    isSubmitted = false,
    isLocked = false,
    isRevealed = false,
    correctAnswer,
    explanation,
    stats,
    onSaveDraft,
    onSubmit,
    readOnly = false
  } = options;

  const type = activity.type || 'choice';

  let activityHtml = '';
  switch (type) {
    case 'choice':
      activityHtml = renderChoice(
        activity, initialAnswer, isLocked || isSubmitted, isRevealed, correctAnswer
      );
      break;
    case 'short-text':
      activityHtml = renderShortText(
        activity, initialAnswer, isLocked || isSubmitted, isRevealed, correctAnswer
      );
      break;
    case 'fill-blank':
      activityHtml = renderFillBlank(activity, initialAnswer, isLocked || isSubmitted);
      break;
    case 'matching':
      activityHtml = renderMatching(activity, initialAnswer, isLocked || isSubmitted);
      break;
    case 'ordering':
      activityHtml = renderOrdering(activity, initialAnswer, isLocked || isSubmitted);
      break;
    case 'poll':
      activityHtml = renderPoll(activity, initialAnswer, isLocked || isSubmitted);
      break;
    case 'reflection':
      activityHtml = renderReflection(activity, initialAnswer, isLocked || isSubmitted);
      break;
    default:
      activityHtml = `<p>Loại bài tập "${type}" chưa hỗ trợ.</p>`;
  }

  // Khung giai thich va bieu do thong ke khi da cong bo dap an
  let revealBoxHtml = '';
  if (isRevealed) {
    const statsHtml = stats ? renderStatsChart(stats, activity, correctAnswer) : '';
    const ansText = typeof correctAnswer === 'object'
      ? JSON.stringify(correctAnswer)
      : String(correctAnswer || '');

    revealBoxHtml = `
      <div class="activity-reveal-box">
        <div class="reveal-header">
          <span class="reveal-badge">ĐÁP ÁN CHÍNH THỨC</span>
          <strong class="reveal-answer">${escapeHtml(ansText)}</strong>
        </div>
        ${explanation ? `<p class="reveal-explanation">${escapeHtml(explanation)}</p>` : ''}
        ${statsHtml}
      </div>
    `;
  }

  // Thanh trang thai va nut nop bai
  let statusText = '○ Chưa làm';
  if (isLocked) {
    statusText = '🔒 Đã khóa bài nộp';
  } else if (isSubmitted) {
    statusText = '● Đã nộp bài';
  } else if (initialAnswer) {
    statusText = '○ Đã lưu nháp';
  }

  const controlsHtml = !readOnly ? `
    <footer class="interactive-footer">
      <div class="interactive-status">
        <span class="status-indicator ${isLocked ? 'status--locked' :
                     (isSubmitted ? 'status--submitted' : 'status--draft')}">
          ${statusText}
        </span>
      </div>
      <button type="button"
              class="btn-submit-activity ${isSubmitted ? 'btn--done' : 'btn--submit'}"
              ${isLocked || isSubmitted ? 'disabled' : ''}>
        ${isSubmitted ? 'Đã nộp bài ✓' : (isLocked ? 'Đã khóa' : 'Nộp bài &rarr;')}
      </button>
    </footer>
  ` : '';

  container.innerHTML = `
    <section class="interactive-card ${isLocked ? 'interactive-card--locked' : ''}"
             data-activity-id="${activity.id}"
             data-type="${type}">
      ${activityHtml}
      ${revealBoxHtml}
      ${controlsHtml}
    </section>
  `;

  if (readOnly || isLocked || isSubmitted) return;

  // Luu nhap debounce
  let currentAnswer = initialAnswer !== undefined ? initialAnswer : null;
  const debouncedSave = debounce(ans => {
    if (onSaveDraft) onSaveDraft(activity.id, ans);
  }, 400);

  // 1. Gan su kien CHOICE
  if (type === 'choice') {
    const isMultiple = activity.multiple || Array.isArray(activity.answer);
    let selectedList = isMultiple
      ? (Array.isArray(initialAnswer) ? [...initialAnswer] : [])
      : initialAnswer;

    container.querySelectorAll('.interactive-option').forEach(optEl => {
      optEl.addEventListener('click', () => {
        const optId = optEl.getAttribute('data-option-id');
        if (isMultiple) {
          if (selectedList.includes(optId)) {
            selectedList = selectedList.filter(id => id !== optId);
            optEl.classList.remove('interactive-option--selected');
            optEl.querySelector('.interactive-option__indicator').textContent = '☐';
          } else {
            selectedList.push(optId);
            optEl.classList.add('interactive-option--selected');
            optEl.querySelector('.interactive-option__indicator').textContent = '☑';
          }
          currentAnswer = selectedList;
        } else {
          container.querySelectorAll('.interactive-option').forEach(el => {
            el.classList.remove('interactive-option--selected');
            el.querySelector('.interactive-option__indicator').textContent = '○';
          });
          optEl.classList.add('interactive-option--selected');
          optEl.querySelector('.interactive-option__indicator').textContent = '●';
          currentAnswer = optId;
        }
        debouncedSave(currentAnswer);
      });
    });
  }

  // 2. Gan su kien SHORT-TEXT
  if (type === 'short-text') {
    const input = container.querySelector('.interactive-input');
    if (input) {
      input.addEventListener('input', () => {
        currentAnswer = input.value;
        debouncedSave(currentAnswer);
      });
    }
  }

  // 3. Gan su kien FILL-BLANK
  if (type === 'fill-blank') {
    const inputs = container.querySelectorAll('.blank-input');
    const updateBlanks = () => {
      const blanks = [];
      inputs.forEach(inp => blanks.push(inp.value));
      currentAnswer = blanks;
      debouncedSave(currentAnswer);
    };
    inputs.forEach(inp => inp.addEventListener('input', updateBlanks));
  }

  // 4. Gan su kien MATCHING
  if (type === 'matching') {
    let matchedPairs = { ...(initialAnswer || {}) };
    let selectedLeft = null;

    const leftButtons = container.querySelectorAll('.match-item--left');
    const rightButtons = container.querySelectorAll('.match-item--right');

    leftButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        leftButtons.forEach(b => b.classList.remove('match-item--active'));
        btn.classList.add('match-item--active');
        selectedLeft = btn.getAttribute('data-left-id');
      });
    });

    rightButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!selectedLeft) return;
        const rightId = btn.getAttribute('data-right-id');
        matchedPairs[selectedLeft] = rightId;
        currentAnswer = matchedPairs;
        debouncedSave(currentAnswer);

        const activeLeft = container.querySelector(`[data-left-id="${selectedLeft}"]`);
        if (activeLeft) {
          activeLeft.classList.add('match-item--matched');
          activeLeft.classList.remove('match-item--active');
        }
        btn.classList.add('match-item--matched');
        selectedLeft = null;
      });
    });
  }

  // 5. Gan su kien ORDERING
  if (type === 'ordering') {
    const orderList = container.querySelector('#ordering-list');
    const updateOrder = () => {
      const ids = [];
      orderList.querySelectorAll('.order-item').forEach((el, idx) => {
        ids.push(el.getAttribute('data-id'));
        el.querySelector('.order-item__num').textContent = idx + 1;
      });
      currentAnswer = ids;
      debouncedSave(currentAnswer);
    };

    container.querySelectorAll('.btn-up').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const item = btn.closest('.order-item');
        const prev = item.previousElementSibling;
        if (prev) {
          orderList.insertBefore(item, prev);
          updateOrder();
        }
      });
    });

    container.querySelectorAll('.btn-down').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const item = btn.closest('.order-item');
        const next = item.nextElementSibling;
        if (next) {
          orderList.insertBefore(next, item);
          updateOrder();
        }
      });
    });
  }

  // 6. Gan su kien POLL
  if (type === 'poll') {
    container.querySelectorAll('.poll-option').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.poll-option').forEach(b => {
          b.classList.remove('poll-option--selected');
        });
        btn.classList.add('poll-option--selected');
        currentAnswer = btn.getAttribute('data-poll-id');
        debouncedSave(currentAnswer);
      });
    });
  }

  // 7. Gan su kien REFLECTION
  if (type === 'reflection') {
    const ta = container.querySelector('.interactive-textarea');
    if (ta) {
      ta.addEventListener('input', () => {
        currentAnswer = ta.value;
        debouncedSave(currentAnswer);
      });
    }
  }

  // Nut Nop bai
  const submitBtn = container.querySelector('.btn-submit-activity');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      if (onSubmit) {
        onSubmit(activity.id, currentAnswer);
      }
    });
  }
}

// Xuat module ho tro ca trinh duyet truc tiep (file://) va CommonJS
if (typeof window !== 'undefined') {
  window.SlideInteractions = {
    renderInteractiveActivity,
    escapeHtml
  };
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    renderInteractiveActivity,
    escapeHtml
  };
}
