/**
 * standalone/js/interactions.js
 * Xu ly tuong tac bai tap standalone dong goi IIFE chong xung dot bien toan cuc.
 */
(function(global) {
/**
 * public/shared/interactions.js
 * Render va xu ly tuong tac bai tap tren slide: chon dap an, keo tha, noi cot,
 * khoa bai (isLocked), cong bo dap an (isRevealed) va dong bo trang thai realtime.
 */

// Su dung ham escapeHtml an toan trong pham vi IIFE
  const escapeHtml = (global.SlideRenderer && global.SlideRenderer.escapeHtml)
    ? global.SlideRenderer.escapeHtml
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
    const targetRightId = userPairs[item.id];
    const isMatched = Boolean(targetRightId);
    const targetRight = rightItems.find(r => r.id === targetRightId);
    const pairBadgeHtml = targetRight
      ? `<span class="match-item__pair-badge">→ ${escapeHtml(targetRight.text)}</span>`
      : '';

    return `
      <button type="button"
              class="match-item match-item--left ${isMatched ? 'match-item--matched' : ''}"
              data-left-id="${item.id}"
              draggable="${!isLocked}"
              ${isLocked ? 'disabled' : ''}>
        <span class="match-item__dot"></span>
        <span class="match-item__text">${item.text}</span>
        ${pairBadgeHtml}
      </button>
    `;
  }).join('');

  const rightHtml = rightItems.map(item => {
    const matchedCount = Object.values(userPairs).filter(v => v === item.id).length;
    const isMatched = matchedCount > 0;
    const countBadgeHtml = matchedCount > 1
      ? `<span class="match-item__count-badge">(${matchedCount})</span>`
      : '';

    return `
      <button type="button"
              class="match-item match-item--right ${isMatched ? 'match-item--matched' : ''}"
              data-right-id="${item.id}"
              ${isLocked ? 'disabled' : ''}>
        <span class="match-item__dot"></span>
        <span class="match-item__text">${item.text}</span>
        ${countBadgeHtml}
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
        <em>* Kéo thả hoặc chạm mục ở cột trái, rồi chạm mục ở cột phải để nối.</em>
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
      <div class="order-item" data-id="${item.id}" draggable="${!isLocked}">
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

// ===== 4. Ham tao HTML bai tap =====

/**
 * Tao chuoi HTML hoan chinh cho mot bai tap tren mat phang slide.
 * @param {object} activity - Thong tin bai tap
 * @param {object} options - Tuy chon trang thai
 * @returns {string} Chuoi HTML
 */
function getActivityHtml(activity, options = {}) {
  if (!activity) return '';

  const {
    initialAnswer,
    isSubmitted = false,
    isLocked = false,
    isRevealed = false,
    correctAnswer,
    explanation,
    stats,
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

  return `
    <section class="interactive-card ${isLocked ? 'interactive-card--locked' : ''}"
             data-activity-id="${activity.id}"
             data-type="${type}">
      ${activityHtml}
      ${revealBoxHtml}
      ${controlsHtml}
    </section>
  `;
}

// ===== 5. Ham render chinh & Gan su kien tuong tac =====

/**
 * Render toan bo bai tap tuong tac vao phan tu container tren mat phang slide.
 * @param {object} activity - Thong tin bai tap
 * @param {HTMLElement} container - Khung hien thi
 * @param {object} options - Tuy chon trang thai
 */
function renderInteractiveActivity(activity, container, options = {}) {
  if (!activity || !container) return;

  container.innerHTML = getActivityHtml(activity, options);

  const {
    initialAnswer,
    isSubmitted = false,
    isLocked = false,
    isRevealed = false,
    correctAnswer,
    onSaveDraft,
    onSubmit,
    onAnswerChange,
    readOnly = false,
    interactive = true
  } = options;

  if (interactive === false || isLocked || isSubmitted) return;

  let currentAnswer = initialAnswer !== undefined ? initialAnswer : null;
  const debouncedSave = debounce(ans => {
    if (onSaveDraft) onSaveDraft(activity.id, ans);
  }, 400);

  const notifyChange = (ans) => {
    currentAnswer = ans;
    debouncedSave(currentAnswer);
    if (typeof onAnswerChange === 'function') {
      onAnswerChange(currentAnswer);
    }
  };

  const type = activity.type || 'choice';

  // 1. Gan su kien CHOICE
  if (type === 'choice') {
    const isMultiple = activity.multiple || Array.isArray(activity.answer);
    let selectedList = isMultiple
      ? (Array.isArray(initialAnswer) ? [...initialAnswer] : [])
      : initialAnswer;

    container.querySelectorAll('.interactive-option').forEach(optEl => {
      optEl.style.cursor = 'pointer';
      optEl.addEventListener('click', () => {
        const optId = optEl.getAttribute('data-option-id');
        if (isMultiple) {
          if (selectedList.includes(optId)) {
            selectedList = selectedList.filter(id => id !== optId);
            optEl.classList.remove('interactive-option--selected');
            const ind = optEl.querySelector('.interactive-option__indicator');
            if (ind) ind.textContent = '☐';
          } else {
            selectedList.push(optId);
            optEl.classList.add('interactive-option--selected');
            const ind = optEl.querySelector('.interactive-option__indicator');
            if (ind) ind.textContent = '☑';
          }
          notifyChange(selectedList);
        } else {
          container.querySelectorAll('.interactive-option').forEach(el => {
            el.classList.remove('interactive-option--selected');
            const ind = el.querySelector('.interactive-option__indicator');
            if (ind) ind.textContent = '○';
          });
          optEl.classList.add('interactive-option--selected');
          const ind = optEl.querySelector('.interactive-option__indicator');
          if (ind) ind.textContent = '●';
          notifyChange(optId);
        }
      });
    });
  }

  // 2. Gan su kien SHORT-TEXT
  if (type === 'short-text') {
    const input = container.querySelector('.interactive-input');
    if (input) {
      input.addEventListener('input', () => {
        notifyChange(input.value);
      });
    }
  }

  // 3. Gan su kien FILL-BLANK
  if (type === 'fill-blank') {
    const inputs = container.querySelectorAll('.blank-input');
    const updateBlanks = () => {
      const blanks = [];
      inputs.forEach(inp => blanks.push(inp.value));
      notifyChange(blanks);
    };
    inputs.forEach(inp => inp.addEventListener('input', updateBlanks));
  }

  // 4. Gan su kien MATCHING (Ho tro Click & Keo tha Drag-Drop)
  if (type === 'matching') {
    let matchedPairs = { ...(initialAnswer || {}) };
    let selectedLeft = null;

    const leftButtons = container.querySelectorAll('.match-item--left');
    const rightButtons = container.querySelectorAll('.match-item--right');

    const updateMatchingUI = () => {
      leftButtons.forEach(btn => {
        const lId = btn.getAttribute('data-left-id');
        const isMatched = Boolean(matchedPairs[lId]);
        btn.classList.toggle('match-item--matched', isMatched);
        btn.classList.toggle('match-item--selected', lId === selectedLeft);

        let badge = btn.querySelector('.match-item__pair-badge');
        if (isMatched) {
          const rId = matchedPairs[lId];
          const rBtn = container.querySelector(`[data-right-id="${rId}"]`);
          const rText = rBtn
            ? rBtn.querySelector('.match-item__text').textContent
            : rId;
          if (!badge) {
            badge = document.createElement('span');
            badge.className = 'match-item__pair-badge';
            btn.appendChild(badge);
          }
          badge.textContent = `→ ${rText}`;
        } else if (badge) {
          badge.remove();
        }
      });

      rightButtons.forEach(btn => {
        const rId = btn.getAttribute('data-right-id');
        const matchedCount = Object.values(matchedPairs).filter(v => v === rId).length;
        btn.classList.toggle('match-item--matched', matchedCount > 0);

        let badge = btn.querySelector('.match-item__count-badge');
        if (matchedCount > 1) {
          if (!badge) {
            badge = document.createElement('span');
            badge.className = 'match-item__count-badge';
            btn.appendChild(badge);
          }
          badge.textContent = `(${matchedCount})`;
        } else if (badge) {
          badge.remove();
        }
      });
    };

    leftButtons.forEach(btn => {
      btn.setAttribute('draggable', 'true');
      btn.style.cursor = 'grab';

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lId = btn.getAttribute('data-left-id');
        if (matchedPairs[lId]) {
          delete matchedPairs[lId];
          selectedLeft = null;
          updateMatchingUI();
          notifyChange(matchedPairs);
          return;
        }
        if (selectedLeft === lId) {
          selectedLeft = null;
        } else {
          selectedLeft = lId;
        }
        updateMatchingUI();
      });

      btn.addEventListener('dragstart', (e) => {
        const lId = btn.getAttribute('data-left-id');
        selectedLeft = lId;
        btn.classList.add('match-item--dragging');
        e.dataTransfer.effectAllowed = 'link';
        e.dataTransfer.setData('text/plain', lId);
      });

      btn.addEventListener('dragend', () => {
        btn.classList.remove('match-item--dragging');
        rightButtons.forEach(b => b.classList.remove('match-item--dragover'));
      });
    });

    rightButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!selectedLeft) return;
        const rId = btn.getAttribute('data-right-id');
        matchedPairs[selectedLeft] = rId;
        selectedLeft = null;
        updateMatchingUI();
        notifyChange(matchedPairs);
      });

      btn.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'link';
        btn.classList.add('match-item--dragover');
      });

      btn.addEventListener('dragleave', () => {
        btn.classList.remove('match-item--dragover');
      });

      btn.addEventListener('drop', (e) => {
        e.preventDefault();
        btn.classList.remove('match-item--dragover');
        const lId = e.dataTransfer.getData('text/plain') || selectedLeft;
        if (lId) {
          const rId = btn.getAttribute('data-right-id');
          matchedPairs[lId] = rId;
          selectedLeft = null;
          updateMatchingUI();
          notifyChange(matchedPairs);
        }
      });
    });

    updateMatchingUI();
  }

  // 5. Gan su kien ORDERING (Ho tro Nut Bam & Keo tha Drag-Drop)
  if (type === 'ordering') {
    const orderList = container.querySelector('#ordering-list') ||
                      container.querySelector('.ordering-list');
    const updateOrder = () => {
      if (!orderList) return;
      const ids = [];
      orderList.querySelectorAll('.order-item').forEach((el, idx) => {
        ids.push(el.getAttribute('data-id'));
        const numEl = el.querySelector('.order-item__num');
        if (numEl) numEl.textContent = idx + 1;
      });
      notifyChange(ids);
    };

    container.querySelectorAll('.btn-up').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const item = btn.closest('.order-item');
        const prev = item.previousElementSibling;
        if (prev && orderList) {
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
        if (next && orderList) {
          orderList.insertBefore(next, item);
          updateOrder();
        }
      });
    });

    let draggedItem = null;
    if (orderList) {
      orderList.querySelectorAll('.order-item').forEach(item => {
        item.setAttribute('draggable', 'true');

        item.addEventListener('dragstart', (e) => {
          draggedItem = item;
          item.classList.add('order-item--dragging');
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', item.getAttribute('data-id'));
        });

        item.addEventListener('dragover', (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
          if (!draggedItem || draggedItem === item) return;

          const bounding = item.getBoundingClientRect();
          const offset = e.clientY - bounding.top;
          if (offset > bounding.height / 2) {
            if (item.nextElementSibling !== draggedItem) {
              orderList.insertBefore(draggedItem, item.nextElementSibling);
            }
          } else {
            if (item !== draggedItem) {
              orderList.insertBefore(draggedItem, item);
            }
          }
        });

        item.addEventListener('dragend', () => {
          if (draggedItem) {
            draggedItem.classList.remove('order-item--dragging');
            draggedItem = null;
          }
          updateOrder();
        });
      });
    }
  }

  // 6. Gan su kien POLL
  if (type === 'poll') {
    container.querySelectorAll('.poll-option').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.poll-option').forEach(b => {
          b.classList.remove('poll-option--selected');
        });
        btn.classList.add('poll-option--selected');
        const optId = btn.getAttribute('data-poll-id');
        notifyChange(optId);
      });
    });
  }

  // 7. Gan su kien REFLECTION
  if (type === 'reflection') {
    const ta = container.querySelector('.interactive-textarea');
    if (ta) {
      ta.addEventListener('input', () => {
        notifyChange(ta.value);
      });
    }
  }

  // 8. Nut Nop bai
  const submitBtn = container.querySelector('.btn-submit-activity');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      if (onSubmit) {
        onSubmit(activity.id, currentAnswer);
      }
    });
  }
}

  // Xuat module
  global.SlideInteractions = {
    getActivityHtml,
    renderInteractiveActivity,
    escapeHtml
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = global.SlideInteractions;
  }
})(typeof window !== 'undefined' ? window : globalThis);
