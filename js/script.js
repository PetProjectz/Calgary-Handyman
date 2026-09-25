// ==========================================================================
// Calgary Handyman — Shared site behaviour
// ==========================================================================

/* Mobile nav toggle */
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });

  // Mobile: tap "Services" to expand dropdown instead of navigating
  document.querySelectorAll('.has-dropdown > .nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });
}

/* Scroll reveal */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

/* FAQ accordion (Contact page) */
document.querySelectorAll('.faq-item').forEach((item) => {
  const q = item.querySelector('.faq-q');
  if (!q) return;
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ==========================================================================
   Online Estimate form: validation + drag/drop image (and file) upload
   ========================================================================== */
const estimateForm = document.getElementById('estimateForm');
if (estimateForm) {
  const dropzone = document.getElementById('uploadZone');
  const fileInput = document.getElementById('projectPhotos');
  const previewWrap = document.getElementById('uploadPreviews');
  const statusBox = document.getElementById('formStatus');

  let selectedFiles = [];
  const MAX_FILES = 6;
  const MAX_SIZE_MB = 10;

  function renderPreviews() {
    previewWrap.innerHTML = '';
    selectedFiles.forEach((file, index) => {
      const thumb = document.createElement('div');
      thumb.className = 'upload-thumb';

      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = file.name;
        thumb.appendChild(img);
      } else {
        const generic = document.createElement('div');
        generic.className = 'file-generic';
        generic.innerHTML = `<i class="fa-solid fa-file"></i><span>${file.name.length > 14 ? file.name.slice(0, 12) + '…' : file.name}</span>`;
        thumb.appendChild(generic);
      }

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'remove-thumb';
      removeBtn.setAttribute('aria-label', 'Remove file');
      removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectedFiles.splice(index, 1);
        syncInputFiles();
        renderPreviews();
      });

      thumb.appendChild(removeBtn);
      previewWrap.appendChild(thumb);
    });
  }

  function syncInputFiles() {
    const dt = new DataTransfer();
    selectedFiles.forEach((f) => dt.items.add(f));
    fileInput.files = dt.files;
  }

  function addFiles(fileList) {
    const incoming = Array.from(fileList);
    for (const file of incoming) {
      if (selectedFiles.length >= MAX_FILES) {
        showStatus(`You can attach up to ${MAX_FILES} files.`, 'error');
        break;
      }
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        showStatus(`"${file.name}" is over ${MAX_SIZE_MB}MB and was skipped.`, 'error');
        continue;
      }
      selectedFiles.push(file);
    }
    syncInputFiles();
    renderPreviews();
  }

  dropzone.addEventListener('click', () => fileInput.click());
  dropzone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); }
  });
  fileInput.addEventListener('change', (e) => addFiles(e.target.files));

  ['dragenter', 'dragover'].forEach((evt) => {
    dropzone.addEventListener(evt, (e) => {
      e.preventDefault(); e.stopPropagation();
      dropzone.classList.add('dragover');
    });
  });
  ['dragleave', 'drop'].forEach((evt) => {
    dropzone.addEventListener(evt, (e) => {
      e.preventDefault(); e.stopPropagation();
      dropzone.classList.remove('dragover');
    });
  });
  dropzone.addEventListener('drop', (e) => {
    if (e.dataTransfer?.files?.length) addFiles(e.dataTransfer.files);
  });

  function showStatus(message, type) {
    statusBox.textContent = message;
    statusBox.className = `form-status show ${type}`;
  }

  estimateForm.addEventListener('submit', (e) => {
    const requiredFields = estimateForm.querySelectorAll('[required]');
    let valid = true;
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#c8352b';
      } else {
        field.style.borderColor = '';
      }
    });
    if (!valid) {
      e.preventDefault();
      showStatus('Please fill in all required fields before submitting.', 'error');
      return;
    }
    showStatus('Sending your request…', 'success');
    // Form submits normally to FormSubmit (see form action in contact.html).
  });
}

/* WhatsApp quick-message buttons: prefill a helpful message */
document.querySelectorAll('[data-wa-msg]').forEach((btn) => {
  const msg = btn.getAttribute('data-wa-msg');
  const phone = '14036162133';
  btn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  btn.target = '_blank';
  btn.rel = 'noopener';
});

/* Current year in footer */
document.querySelectorAll('.current-year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
