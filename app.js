/**
 * Samuel John - Luxury Portfolio Interactive Engine
 * Handling typing rotation, category filters, interactive modals,
 * copy-to-clipboard, form validation, and smooth scrollspy.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Text Typing Animation
  initTypeWriter();

  // 2. Navigation Scrollspy & Mobile Hamburger
  initNavigation();

  // 3. Education & Achievements Sub-page Switcher
  initEducationTabs();

  // 4. Project Filter System & Project Details Modal
  initProjects();

  // 5. Favorites Category Filter Tabs
  initFavorites();

  // 6. Contact Form Validation & Toast Notification
  initContactForm();

  // 7. Copy to Clipboard Utility
  initClipboard();

  // 7. Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/* ===================================================================
   1. Dynamic Typing Rotator
   =================================================================== */
function initTypeWriter() {
  const dynamicRole = document.getElementById('dynamicRole');
  if (!dynamicRole) return;

  const roles = [
    'Tech Enthusiast',
    'B.Tech Graduate in CSE & Data Science',
    'Data Science Specialist',
    'Software Developer',
    'Self-Taught Builder'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1800;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      dynamicRole.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      dynamicRole.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 350);
      return;
    }

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, currentSpeed);
  }

  type();
}

/* ===================================================================
   2. Navigation, Scrollspy & Mobile Menu
   =================================================================== */
function initNavigation() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Mobile Toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Scrollspy
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ===================================================================
   3. Real GitHub Projects Data & Modal System
   =================================================================== */
const projectsData = {
  handgesture: {
    title: 'Hand Gesture Controlling System',
    category: 'Computer Vision & AI',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Automation'],
    description: 'A Python-based application that uses computer vision to recognize hand gestures in real-time and control system functions like volume up/down, mute, pause/play, and swipe between media using a webcam.',
    features: [
      'Real-time hand landmark tracking powered by Google MediaPipe',
      'OpenCV video stream processing with low latency',
      'System-level audio and media controls mapped to distinct gesture triggers',
      'Intuitive visual feedback overlaid on the live webcam interface'
    ],
    github: 'https://github.com/samueljohn369/Hand-Gesture-controlling-System'
  },
  retailsales: {
    title: 'Retail Sales Analytics Platform',
    category: 'Data Analytics & SQL',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'SQL', 'DuckDB', 'Streamlit', 'Data Analytics'],
    description: 'A high-performance retail analytics intelligence suite leveraging Python, SQL, DuckDB, and Streamlit to process and visualize large-scale transaction datasets with instant KPI metrics.',
    features: [
      'Fast in-memory SQL analytical queries using DuckDB',
      'Interactive Streamlit executive dashboard for revenue trends & profit margins',
      'Drill-down filters by store region, product category, and timeframe',
      'Data cleaning and automated aggregation pipelines in Python'
    ],
    github: 'https://github.com/samueljohn369/retail-sales-analytics'
  },
  faceqr: {
    title: 'Face & QR Detector Android App',
    category: 'Android & Mobile ML',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    tags: ['Android Studio', 'Java / Kotlin', 'Google ML Kit', 'CameraX'],
    description: 'An Android app that combines real-time face detection and QR code scanning using Google ML Kit and CameraX for fast, hardware-accelerated computer vision processing.',
    features: [
      'High frame-rate CameraX preview integration with lifecycle binding',
      'On-device ML Kit Face Detection for bounding box coordinate extraction',
      'Instant QR code decoding and format validation with zero cloud delay',
      'Clean native Android user experience and permissions workflow'
    ],
    github: 'https://github.com/samueljohn369/Face-QR-detector'
  },
  churn: {
    title: 'Customer Churn Analysis',
    category: 'Machine Learning & Data Science',
    img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-Learn', 'Predictive Modeling'],
    description: 'End-to-end machine learning and exploratory data analysis pipeline exploring customer attrition patterns to identify key churn indicators and predict retention probabilities.',
    features: [
      'Comprehensive Exploratory Data Analysis (EDA) on customer metrics',
      'Feature engineering, one-hot encoding, and numerical standardization',
      'Predictive classification models evaluated with ROC-AUC and Confusion Matrix',
      'Actionable business recommendations for customer retention'
    ],
    github: 'https://github.com/samueljohn369/customer-churn-analysis'
  }
};

function initProjects() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal Close
  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProjectModal();
    });
  }
}

window.openProjectModal = function(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span class="project-tag-pill" style="position: static; display: inline-block; margin-bottom: 0.75rem;">${project.category}</span>
      <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem;">${project.title}</h2>
      <img src="${project.img}" alt="${project.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 12px; margin-bottom: 1.25rem; border: 1px solid var(--border-light);" />
      <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">${project.description}</p>
      
      <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: #fff;"><i class="fa-solid fa-star" style="color: #fbbf24;"></i> Key Architecture Highlights</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.75rem;">
        ${project.features.map(f => `
          <li style="display: flex; align-items: flex-start; gap: 0.6rem; color: var(--text-muted); font-size: 0.925rem;">
            <i class="fa-solid fa-check" style="color: #34d399; margin-top: 4px;"></i>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>

      <div style="display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 1.75rem;">
        ${project.tags.map(t => `
          <span style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 0.3rem 0.75rem; border-radius: 6px; font-family: var(--font-code); font-size: 0.8rem; color: #cbd5e1;">${t}</span>
        `).join('')}
      </div>

      <div>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%; justify-content: center;">
          <i class="fa-brands fa-github"></i> Open Code on GitHub
        </a>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

/* ===================================================================
   4. Favorites Category Filter System
   =================================================================== */
function initFavorites() {
  const favTabs = document.querySelectorAll('.fav-tab-btn');
  const favCards = document.querySelectorAll('.fav-card');

  favTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      favTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCategory = tab.getAttribute('data-fav-category');

      favCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ===================================================================
   5. Contact Form Validation & Toast Notification
   =================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Validate Name
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your name.';
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Please enter your email address.';
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email format.';
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageError.textContent = 'Please write a brief message.';
      isValid = false;
    } else if (messageInput.value.trim().length < 8) {
      messageError.textContent = 'Message should be at least 8 characters.';
      isValid = false;
    }

    if (isValid) {
      // Simulate submission
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending Message...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
        showToast('Thank you! Your message has been sent to Samuel John (samueljohn0727@gmail.com).', 'success');
      }, 1200);
    }
  });
}

/* ===================================================================
   6. Clipboard Utility
   =================================================================== */
function initClipboard() {
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'samueljohn0727@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ' + email, 'success');
      }).catch(() => {
        showToast('Email: ' + email, 'success');
      });
    });
  }
}

/* ===================================================================
   Toast Notification System
   =================================================================== */
window.showToast = function(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
};

// Keyframe helper for dynamic animation injection
const styleEl = document.createElement('style');
styleEl.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(styleEl);

/* ===================================================================
   Education & Achievements Sub-page Switcher
   =================================================================== */
function initEducationTabs() {
  const eduTabs = document.querySelectorAll('.edu-tab-btn');
  const eduPages = {
    academic: document.getElementById('eduAcademic'),
    sports: document.getElementById('eduSports')
  };

  eduTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      eduTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-edu-tab');
      Object.keys(eduPages).forEach(key => {
        if (eduPages[key]) {
          if (key === targetTab) {
            eduPages[key].classList.add('active');
            eduPages[key].style.display = 'block';
          } else {
            eduPages[key].classList.remove('active');
            eduPages[key].style.display = 'none';
          }
        }
      });
    });
  });
}

/* ===================================================================
   Certificate & Newspaper Lightbox Zoom Modal
   =================================================================== */
window.openLightbox = function(src, title) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');

  if (!modal || !img) return;

  img.src = src;
  if (titleEl) titleEl.textContent = title || '';

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

