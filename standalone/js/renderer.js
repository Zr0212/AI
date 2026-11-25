/**
 * public/shared/renderer.js
 * Render du lieu slide JSON thanh DOM HTML tren khung 1920x1080 ti le 16:9.
 * Thiet ke theo dung bo slide mau editorial "Today's lesson" (01.png - 17.png):
 * - Top header: duong ke ngang, ten chuyen muc ben trai, huy hieu so trang tron ben phai.
 * - Ngoi sao 10 canh goc tren phai dac trung.
 * - Khong co chan trang thua thieu tren cac slide noi dung.
 */

// ===== 1. Ham tien ich Bao mat & Scaling =====

/**
 * Escape chuoi HTML tranh lo hong XSS khi hien thi noi dung nguoi dung nhap.
 * @param {any} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Tinh toan ty le scale de khung 1920x1080 vua khit voi viewport.
 * @param {HTMLElement} viewportEl - Khung bao ngoai (100vw x 100vh)
 * @param {HTMLElement} slideFrameEl - Khung slide 1920x1080
 */
function fitSlideToViewport(viewportEl, slideFrameEl) {
  if (!viewportEl || !slideFrameEl) return;
  const vw = viewportEl.clientWidth;
  const vh = viewportEl.clientHeight;
  const scale = Math.min(vw / 1920, vh / 1080);
  slideFrameEl.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

// ===== 2. Ham ho tro tao thanh phan dung chung =====

function renderImageBox(
  imageSrc,
  captionText,
  defaultIcon = '#icon-book',
  videoUrl = null,
  videoTime = null
) {
  if (videoUrl) {
    const timeBadge = videoTime
      ? `<span class="video-time-badge">${escapeHtml(videoTime)}</span>`
      : '';
    const innerImg = imageSrc
      ? `<img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(captionText || '')}" />`
      : `<svg class="editorial-image-box__icon"><use href="#icon-projector"/></svg>`;

    return `
      <div class="editorial-image-box editorial-image-box--video">
        <a class="editorial-video-link" href="${escapeHtml(videoUrl)}"
           target="_blank" rel="noopener noreferrer"
           title="Bấm để mở xem video trên YouTube">
          ${innerImg}
          <div class="video-play-badge" aria-hidden="true">
            <svg class="video-play-icon" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" fill="currentColor"/>
            </svg>
          </div>
          ${timeBadge}
        </a>
      </div>
    `;
  }

  if (imageSrc) {
    return `
      <div class="editorial-image-box">
        <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(captionText || '')}" />
      </div>
    `;
  }
  return `
    <div class="editorial-image-box">
      <svg class="editorial-image-box__icon"><use href="${defaultIcon}"/></svg>
      <p class="editorial-image-box__caption">
        ${escapeHtml(captionText || 'Minh họa trực quan bài học')}
      </p>
    </div>
  `;
}

// ===== 3. Cac ham tao layout chi tiet (01.png - 17.png) =====

/** Cover Slide (01.png) */
function createCoverLayout(slide) {
  const authorText = slide.author || 'Ms. Parker';
  const dateText = slide.date || slide.subject || 'September 4, 2099';
  const deckTitle = slide.deckTitle || slide.subject || 'TIN HỌC THCS';

  return `
    <div class="layout-cover">
      <div class="layout-cover__top-line">
        <span class="layout-cover__meta-left">${escapeHtml(authorText)}</span>
        <span class="layout-cover__meta-right">${escapeHtml(dateText)}</span>
      </div>

      <svg class="slide-star-burst slide-star-burst--cover" aria-hidden="true">
        <use href="#icon-star-burst"/>
      </svg>

      <div class="layout-cover__center">
        <h1 class="layout-cover__title">${escapeHtml(slide.title)}</h1>
        <div class="layout-cover__subtitle-row">
          <p class="layout-cover__subtitle">&mdash; ${escapeHtml(slide.subtitle || '')}</p>
        </div>
      </div>

      <div class="layout-cover__bottom-line">
        <svg class="layout-cover__bottom-star" aria-hidden="true">
          <use href="#icon-star-burst"/>
        </svg>
        <span class="layout-cover__footer-text">${escapeHtml(deckTitle)}</span>
      </div>
    </div>
  `;
}

/** Contents Slide (02.png) */
function createContentsLayout(slide) {
  const items = (slide.items || []).map((item, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    return `
      <div class="contents-row-item">
        <span class="contents-row-item__num">${num}</span>
        <div class="contents-row-item__content">
          <h3>${escapeHtml(item.title || '')}</h3>
          <p>${escapeHtml(item.desc || '')}</p>
        </div>
      </div>
    `;
  }).join('');

  return `<div class="layout-contents">${items}</div>`;
}

/** Objectives Slide (03.png) */
function createObjectivesLayout(slide) {
  const items = (slide.objectives || []).map((obj, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const title = obj.title || obj.label || `Mục tiêu ${idx + 1}`;
    const desc = obj.desc || '';
    return `
      <div class="objective-card">
        <span class="objective-card__num">${num}</span>
        <h3 class="objective-card__title">${escapeHtml(title)}</h3>
        <p class="objective-card__desc">${escapeHtml(desc)}</p>
        <div class="card-dashed-lines">
          <div class="card-dashed-line"></div>
          <div class="card-dashed-line"></div>
          <div class="card-dashed-line"></div>
        </div>
      </div>
    `;
  });

  const connectorHtml = `
    <div class="card-connector">
      <svg class="card-connector__icon"><use href="#icon-arrow-circle"/></svg>
    </div>
  `;

  return `<div class="layout-objectives">${items.join(connectorHtml)}</div>`;
}

/** Image-Text Slide (04.png) */
function createImageTextLayout(slide) {
  const imageHtml = renderImageBox(
    slide.image,
    slide.caption || slide.imageNote,
    '#icon-projector',
    slide.videoUrl,
    slide.videoTime
  );

  const textContent = slide.text || slide.content || '';
  const points = (slide.points || []).map(p => `<li>${escapeHtml(p)}</li>`).join('');
  const pointsHtml = points ? `<ul class="layout-image-text__points">${points}</ul>` : '';

  let videoBtnHtml = '';
  if (slide.videoUrl) {
    const timeLabel = slide.videoTime ? ` (${escapeHtml(slide.videoTime)})` : '';
    videoBtnHtml = `
      <div class="layout-image-text__video-action">
        <a class="btn-open-youtube" href="${escapeHtml(slide.videoUrl)}"
           target="_blank" rel="noopener noreferrer">
          <span class="btn-open-youtube__play">▶</span>
          <span>Mở video trên YouTube${timeLabel}</span>
          <svg class="btn-open-youtube__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                  fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    `;
  }

  return `
    <div class="layout-image-text">
      ${imageHtml}
      <div class="layout-image-text__text">
        <p>${escapeHtml(textContent)}</p>
        ${pointsHtml}
        ${videoBtnHtml}
      </div>
    </div>
  `;
}

/** Three Cards Slide (05.png) */
function createThreeCardsLayout(slide) {
  const cards = (slide.cards || []).map(c => {
    return `
      <div class="card-star-badge-item">
        <div class="card-star-badge-item__badge">
          <svg><use href="#icon-star-burst"/></svg>
        </div>
        <h3 class="card-star-badge-item__title">${escapeHtml(c.title || '')}</h3>
        <p class="card-star-badge-item__desc">${escapeHtml(c.desc || '')}</p>
        <div class="card-dashed-lines">
          <div class="card-dashed-line"></div>
          <div class="card-dashed-line"></div>
        </div>
      </div>
    `;
  }).join('');

  return `<div class="layout-three-cards">${cards}</div>`;
}

/** Quote / Hook Slide (06.png) */
function createQuoteLayout(slide) {
  return `
    <div class="layout-quote">
      <span class="layout-quote__mark">&ldquo;</span>
      <div class="layout-quote__content">
        <blockquote class="layout-quote__text">${escapeHtml(slide.quote || '')}</blockquote>
        <cite class="layout-quote__author">
          &mdash; ${escapeHtml(slide.author || 'Ghi nhớ trọng tâm')}
        </cite>
      </div>
    </div>
  `;
}

/** Case Study / Concept Split Slide (07.png & 13.png) */
function createCaseStudyLayout(slide, theme) {
  const imageHtml = renderImageBox(
    slide.image,
    slide.caption || slide.imageNote,
    '#icon-book'
  );

  let cardsData = [];
  if (Array.isArray(slide.cards) && slide.cards.length > 0) {
    cardsData = slide.cards;
  } else if (slide.scenario || slide.question) {
    cardsData = [
      { title: 'Tình huống', desc: slide.scenario || '' },
      { title: 'Câu hỏi đặt ra', desc: slide.question || '' }
    ];
  } else if (Array.isArray(slide.points)) {
    cardsData = slide.points.map((pt, i) => ({ title: `Trọng tâm ${i + 1}`, desc: pt }));
  }

  const cardsHtml = cardsData.map((cd, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    return `
      <div class="stacked-badge-card">
        <div class="stacked-badge-card__header">
          <span class="stacked-badge-card__num">${num}</span>
          <h3 class="stacked-badge-card__title">${escapeHtml(cd.title)}:</h3>
        </div>
        <p class="stacked-badge-card__desc">${escapeHtml(cd.desc)}</p>
      </div>
    `;
  }).join('');

  const cardsCol = `<div class="stacked-cards-col">${cardsHtml}</div>`;

  // Navy theme (13.png): Anh ben trai, the ben phai
  // Cream theme (07.png): The ben trai, anh ben phai
  if (theme === 'navy') {
    return `<div class="layout-concept-split">${imageHtml}${cardsCol}</div>`;
  }
  return `<div class="layout-concept-split">${cardsCol}${imageHtml}</div>`;
}

/** Hero Image Slide (08.png) */
function createHeroImageLayout(slide) {
  const innerImg = slide.image
    ? `<img src="${escapeHtml(slide.image)}" alt="${escapeHtml(slide.caption || '')}" />`
    : `
      <svg style="width:100px;height:100px;opacity:0.7;margin-bottom:24px;">
        <use href="#icon-projector"/>
      </svg>
      <p style="font-size:24px;font-style:italic;opacity:0.85;">
        ${escapeHtml(slide.imageNote || 'Hình ảnh tiêu biểu bài giảng')}
      </p>
    `;

  let frameContent = innerImg;
  if (slide.videoUrl) {
    const timeBadge = slide.videoTime
      ? `<span class="video-time-badge">${escapeHtml(slide.videoTime)}</span>`
      : '';
    frameContent = `
      <a class="editorial-video-link" href="${escapeHtml(slide.videoUrl)}"
         target="_blank" rel="noopener noreferrer"
         title="Bấm để mở xem video trên YouTube">
        ${innerImg}
        <div class="video-play-badge" aria-hidden="true">
          <svg class="video-play-icon" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        </div>
        ${timeBadge}
      </a>
    `;
  }

  const caption = slide.caption || slide.imageNote || '';
  let captionHtml = caption
    ? `<div class="hero-image-caption"><span>●</span><span>${escapeHtml(caption)}</span></div>`
    : '';

  if (slide.videoUrl) {
    const timeLabel = slide.videoTime ? ` (${escapeHtml(slide.videoTime)})` : '';
    captionHtml += `
      <div style="margin-top:16px;text-align:center;">
        <a class="btn-open-youtube" href="${escapeHtml(slide.videoUrl)}"
           target="_blank" rel="noopener noreferrer">
          <span class="btn-open-youtube__play">▶</span>
          <span>Mở video trên YouTube${timeLabel}</span>
        </a>
      </div>
    `;
  }

  return `
    <div class="layout-hero-image">
      <div class="hero-image-frame">${frameContent}</div>
      ${captionHtml}
    </div>
  `;
}

/** Four Grid Slide (09.png) */
function createFourGridLayout(slide) {
  const iconList = ['#icon-pencil', '#icon-book', '#icon-checklist', '#icon-puzzle'];
  const cells = (slide.cells || slide.cards || []).slice(0, 4);

  const cellsHtml = cells.map((cell, idx) => {
    const icon = iconList[idx % iconList.length];
    return `
      <div class="grid-icon-card">
        <div class="grid-icon-card__icon-badge">
          <svg><use href="${icon}"/></svg>
        </div>
        <div class="grid-icon-card__content">
          <h3>${escapeHtml(cell.title || '')}</h3>
          <p>${escapeHtml(cell.desc || '')}</p>
        </div>
      </div>
    `;
  }).join('');

  return `<div class="layout-four-grid">${cellsHtml}</div>`;
}

/** Steps Slide (10.png) */
function createStepsLayout(slide) {
  const iconList = ['#icon-brain', '#icon-pencil', '#icon-checklist', '#icon-trophy'];
  const steps = (slide.steps || []).map((step, idx) => {
    const icon = iconList[idx % iconList.length];
    return `
      <div class="step-horizontal-bar">
        <div class="step-horizontal-bar__badge">
          <svg><use href="${icon}"/></svg>
        </div>
        <div class="step-horizontal-bar__content">
          <h3>${escapeHtml(step.title || '')}</h3>
          <p>${escapeHtml(step.desc || '')}</p>
        </div>
      </div>
    `;
  }).join('');

  const imageHtml = renderImageBox(
    slide.image,
    slide.caption || slide.imageNote,
    '#icon-book'
  );

  return `
    <div class="layout-steps-split">
      <div class="steps-list-col">${steps}</div>
      ${imageHtml}
    </div>
  `;
}

/** Two Examples Slide (11.png) */
function createTwoExamplesLayout(slide) {
  const exA = slide.exampleA || {};
  const exB = slide.exampleB || {};

  const colAImage = renderImageBox(exA.image, exA.tag || 'Ví dụ 1', '#icon-book');
  const colBImage = renderImageBox(exB.image, exB.tag || 'Ví dụ 2', '#icon-student');

  return `
    <div class="layout-two-examples">
      <div class="example-column">
        <div class="example-image-frame">${colAImage}</div>
        <div class="example-bottom-card">
          <span class="example-bottom-card__badge">01</span>
          <div class="example-bottom-card__content">
            <h3>${escapeHtml(exA.title || exA.tag || 'Ví dụ 1')}</h3>
            <p>${escapeHtml(exA.desc || '')}</p>
          </div>
        </div>
      </div>
      <div class="example-column">
        <div class="example-image-frame">${colBImage}</div>
        <div class="example-bottom-card">
          <span class="example-bottom-card__badge">02</span>
          <div class="example-bottom-card__content">
            <h3>${escapeHtml(exB.title || exB.tag || 'Ví dụ 2')}</h3>
            <p>${escapeHtml(exB.desc || '')}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

/** Compare Slide (12.png) */
function createCompareLayout(slide) {
  const colA = slide.columnA || { items: [] };
  const colB = slide.columnB || { items: [] };

  const itemsA = (colA.items || []).map(it => `
    <li>
      <svg style="width:24px;height:24px;flex-shrink:0;"><use href="#icon-check"/></svg>
      <span>${escapeHtml(it)}</span>
    </li>
  `).join('');

  const itemsB = (colB.items || []).map(it => `
    <li>
      <svg style="width:24px;height:24px;flex-shrink:0;"><use href="#icon-cross"/></svg>
      <span>${escapeHtml(it)}</span>
    </li>
  `).join('');

  return `
    <div class="layout-compare">
      <div class="compare-card">
        <div class="compare-card__header">
          <span class="compare-card__badge">01</span>
          <h3 class="compare-card__title">${escapeHtml(colA.title || 'Phương án A')}</h3>
        </div>
        <ul class="compare-list">${itemsA}</ul>
        <div class="card-dashed-lines">
          <div class="card-dashed-line"></div>
        </div>
      </div>

      <div class="card-connector">
        <svg class="card-connector__icon"><use href="#icon-arrow-circle"/></svg>
      </div>

      <div class="compare-card">
        <div class="compare-card__header">
          <span class="compare-card__badge">02</span>
          <h3 class="compare-card__title">${escapeHtml(colB.title || 'Phương án B')}</h3>
        </div>
        <ul class="compare-list">${itemsB}</ul>
        <div class="card-dashed-lines">
          <div class="card-dashed-line"></div>
        </div>
      </div>
    </div>
  `;
}

/** Discussion Slide (14.png - The giua dao mau Inverted Navy) */
function createDiscussionLayout(slide) {
  const questions = slide.questions || [
    { title: 'Em nhận thấy điều gì đầu tiên?', icon: '#icon-speaker' },
    { title: 'Điểm nào em chưa đồng ý?', icon: '#icon-search' },
    { title: 'Em sẽ thay đổi điều gì?', icon: '#icon-gear' }
  ];

  const cardsHtml = questions.slice(0, 3).map((q, idx) => {
    const isInverted = idx === 1;
    const cardClass = isInverted
      ? 'discussion-card discussion-card--inverted'
      : 'discussion-card';
    const defaultIcon = idx === 0
      ? '#icon-speaker'
      : (idx === 1 ? '#icon-search' : '#icon-gear');
    const icon = q.icon || defaultIcon;

    return `
      <div class="${cardClass}">
        <div class="discussion-card__badge">
          <svg><use href="${icon}"/></svg>
        </div>
        <h3 class="discussion-card__title">${escapeHtml(q.title || q)}</h3>
        <div class="discussion-card__lines">
          <div class="card-dashed-line"></div>
          <div class="card-dashed-line"></div>
          <div class="card-dashed-line"></div>
        </div>
      </div>
    `;
  }).join('');

  return `<div class="layout-discussion">${cardsHtml}</div>`;
}

/** Further Reading Slide (15.png) */
function createReadingLayout(slide) {
  const defaultItems = [
    { label: 'Books', title: 'Sách tham khảo', desc: 'Sách giáo khoa và tài liệu chuẩn.' },
    { label: 'Articles', title: 'Bài viết chuyên sâu', desc: 'Các bài đọc mở rộng kiến thức.' },
    { label: 'Online', title: 'Tài nguyên trực tuyến', desc: 'Trang web và khóa học trực tuyến.' }
  ];

  const items = (slide.items || defaultItems).slice(0, 3);
  const cardsHtml = items.map((item, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    return `
      <div class="reading-card">
        <span class="reading-card__badge">${num}</span>
        <h3 class="reading-card__title">${escapeHtml(item.title || item.label)}:</h3>
        <p class="reading-card__desc">${escapeHtml(item.desc || '')}</p>
        <div class="card-dashed-lines">
          <div class="card-dashed-line"></div>
          <div class="card-dashed-line"></div>
        </div>
      </div>
    `;
  });

  const connectorHtml = `
    <div class="card-connector">
      <svg class="card-connector__icon"><use href="#icon-arrow-circle"/></svg>
    </div>
  `;

  return `<div class="layout-reading">${cardsHtml.join(connectorHtml)}</div>`;
}

/** Recap / Summary Slide (16.png) */
function createRecapLayout(slide) {
  const iconList = ['#icon-brain', '#icon-gear', '#icon-trophy', '#icon-pencil'];
  const points = (slide.points || []).slice(0, 4);

  const cardsHtml = points.map((pt, idx) => {
    const icon = iconList[idx % iconList.length];
    return `
      <div class="recap-card">
        <div class="recap-card__badge">
          <svg><use href="${icon}"/></svg>
        </div>
        <p class="recap-card__text">${escapeHtml(pt)}</p>
      </div>
    `;
  }).join('');

  return `<div class="layout-recap">${cardsHtml}</div>`;
}

/** Thank You Slide (17.png) */
function createThankYouLayout(slide) {
  const roomText = slide.room || 'Phòng 104';
  const schoolText = slide.school || 'Trường THCS';
  const mailText = slide.email || 'hello@class.example';

  return `
    <div class="layout-thank-you">
      <div class="layout-thank-you__center">
        <h1 class="layout-thank-you__title">${escapeHtml(slide.title || 'Questions?')}</h1>
        <p class="layout-thank-you__subtitle">
          ${escapeHtml(slide.subtitle || 'Any thoughts, questions, or comments?')}
        </p>
      </div>

      <div class="layout-thank-you__bottom-line">
        <div class="layout-thank-you__contact-item">
          <svg><use href="#icon-home"/></svg>
          <span>${escapeHtml(roomText)}</span>
        </div>
        <div class="layout-thank-you__contact-item">
          <svg><use href="#icon-school"/></svg>
          <span>${escapeHtml(schoolText)}</span>
        </div>
        <div class="layout-thank-you__contact-item">
          <svg><use href="#icon-mail"/></svg>
          <span>${escapeHtml(mailText)}</span>
        </div>
      </div>
    </div>
  `;
}

// ===== 4. Ham render slide chinh =====

/**
 * Render mot slide tu JSON vao container chi dinh.
 * @param {object} slideJson - Du lieu slide can render
 * @param {HTMLElement} container - Phan tu chua
 * @returns {HTMLElement} Phan tu slideFrame da render
 */
function renderSlide(slideJson, container) {
  if (!container || !slideJson) return null;

  const layout = slideJson.layout || 'cover';
  let defaultTheme = 'cream';
  if (['cover', 'three-cards', 'four-grid', 'thank-you'].includes(layout)) {
    defaultTheme = 'navy';
  }
  const theme = slideJson.theme ? slideJson.theme : defaultTheme;

  const frame = document.createElement('div');
  frame.className = `slide-frame slide-frame--${theme}`;
  frame.setAttribute('data-slide-id', slideJson.id || '');
  frame.setAttribute('data-layout', layout);

  if (layout === 'cover') {
    frame.innerHTML = createCoverLayout(slideJson);
  } else if (layout === 'thank-you') {
    frame.innerHTML = createThankYouLayout(slideJson);
  } else {
    // Tao Top Header chuan editorial (02.png - 16.png)
    const category = slideJson.category || 'BÀI HỌC';
    const pageNum = String(slideJson.pageNumber || 1).padStart(2, '0');
    const headerHtml = `
      <header class="slide-header">
        <span class="slide-header__category">${escapeHtml(category)}</span>
        <div class="slide-header__line"></div>
        <div class="slide-header__page">${pageNum}</div>
      </header>
    `;

    // Ngoi sao goc tren phai dac trung
    const isQuote = layout === 'quote';
    const starClass = isQuote
      ? 'slide-star-burst slide-star-burst--quote-corner'
      : 'slide-star-burst';
    const starHtml = `
      <svg class="${starClass}" aria-hidden="true">
        <use href="#icon-star-burst"/>
      </svg>
    `;

    // Tao phan than theo tung layout
    let bodyContent = '';
    switch (layout) {
      case 'contents':
        bodyContent = createContentsLayout(slideJson);
        break;
      case 'objectives':
        bodyContent = createObjectivesLayout(slideJson);
        break;
      case 'image-text':
        bodyContent = createImageTextLayout(slideJson);
        break;
      case 'three-cards':
        bodyContent = createThreeCardsLayout(slideJson);
        break;
      case 'quote':
        bodyContent = createQuoteLayout(slideJson);
        break;
      case 'four-grid':
        bodyContent = createFourGridLayout(slideJson);
        break;
      case 'steps':
        bodyContent = createStepsLayout(slideJson);
        break;
      case 'two-examples':
        bodyContent = createTwoExamplesLayout(slideJson);
        break;
      case 'compare':
        bodyContent = createCompareLayout(slideJson);
        break;
      case 'case-study':
        bodyContent = createCaseStudyLayout(slideJson, theme);
        break;
      case 'discussion':
        bodyContent = createDiscussionLayout(slideJson);
        break;
      case 'reading':
        bodyContent = createReadingLayout(slideJson);
        break;
      case 'recap':
        bodyContent = createRecapLayout(slideJson);
        break;
      case 'activity':
        bodyContent = '';
        break;
      default:
        bodyContent = `
          <div class="stacked-badge-card">
            <p>${escapeHtml(slideJson.content || '')}</p>
          </div>
        `;
    }

    const titleHtml = slideJson.title
      ? `<h2 class="slide-title">${escapeHtml(slideJson.title)}</h2>`
      : '';
    const subtitleHtml = slideJson.subtitle
      ? `<p class="slide-subtitle">${escapeHtml(slideJson.subtitle)}</p>`
      : '';
    let contentContainerHtml = '';
    if (layout === 'activity') {
      const actId = escapeHtml(slideJson.activity ? slideJson.activity.id : '');
      const activityHtml = `
        <div class="slide-activity-slot" data-activity-id="${actId}"></div>
      `;
      contentContainerHtml = `
        <div class="slide-full-activity">
          ${activityHtml}
        </div>
      `;
    } else if (slideJson.activity) {
      const actId = escapeHtml(slideJson.activity.id);
      const activityHtml = `
        <div class="slide-activity-slot" data-activity-id="${actId}"></div>
      `;
      contentContainerHtml = `
        <div class="slide-split-activity">
          <div class="slide-split-activity__content">${bodyContent}</div>
          <div class="slide-split-activity__slot">${activityHtml}</div>
        </div>
      `;
    } else {
      contentContainerHtml = bodyContent;
    }

    const hasActClass = slideJson.activity ? 'slide-body--has-activity' : '';
    const bodyHtml = `
      <main class="slide-body ${hasActClass}">
        ${titleHtml}
        ${subtitleHtml}
        ${contentContainerHtml}
      </main>
    `;

    frame.innerHTML = starHtml + headerHtml + bodyHtml;
  }

  container.innerHTML = '';
  container.appendChild(frame);
  return frame;
}

// Xuat module ho tro ca trinh duyet truc tiep (file://) va CommonJS
if (typeof window !== 'undefined') {
  window.SlideRenderer = {
    escapeHtml,
    fitSlideToViewport,
    renderSlide
  };
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    escapeHtml,
    fitSlideToViewport,
    renderSlide
  };
}
