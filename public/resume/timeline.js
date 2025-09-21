// timeline.js
// Handles opening/closing the job detail modal with accessibility features:
// - focus trap while modal is open
// - close on overlay click or ESC
// - return focus to the originating trigger when closed

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function initTimeline() {
  const modal = qs('#job-modal');
  if (!modal) return;

  const overlay = qs('#job-modal-overlay');
  const closeBtn = qs('[data-modal-close]', modal);
  const focusableSelector =
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
  let lastFocused = null;

  function openModal(trigger, jobDataHtml) {
    lastFocused = trigger;
    const content = qs('#job-modal-content');
    content.innerHTML = jobDataHtml;
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    overlay.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleKeyDown);
    // focus trap: focus first focusable within modal
    const focusable = qsa(focusableSelector, modal);
    if (focusable.length) focusable[0].focus();
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    overlay.removeEventListener('click', handleOverlayClick);
    document.removeEventListener('keydown', handleKeyDown);
    // return focus
    if (lastFocused && typeof lastFocused.focus === 'function')
      lastFocused.focus();
    // clear content
    const content = qs('#job-modal-content');
    content.innerHTML = '';
  }

  function handleOverlayClick(e) {
    if (e.target === overlay) closeModal();
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
      return;
    }

    // Focus trap
    if (e.key === 'Tab') {
      const focusable = qsa(focusableSelector, modal);
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (
        !e.shiftKey &&
        document.activeElement === last
      ) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  // Delegate click events on timeline items
  document.addEventListener('click', (e) => {
    const jobTrigger = e.target.closest('[data-job-trigger]');
    if (!jobTrigger) return;
    e.preventDefault();
    const title = jobTrigger.getAttribute('data-title') || '';
    const company =
      jobTrigger.getAttribute('data-company') || '';
    const dates = jobTrigger.getAttribute('data-dates') || '';
    const description =
      jobTrigger.getAttribute('data-description') || '';
    const accomplishments = JSON.parse(
      jobTrigger.getAttribute('data-accomplishments') || '[]'
    );
    const skills = JSON.parse(
      jobTrigger.getAttribute('data-skills') || '[]'
    );

    const accomplishmentsHtml = accomplishments.length
      ? `<h4 class="mt-4 text-sm font-medium">Key accomplishments</h4><ul class="list-disc list-inside text-sm mt-2">${accomplishments
          .map((a) => `<li>${a}</li>`)
          .join('')}</ul>`
      : '';

    const skillsHtml = skills.length
      ? `<h4 class="mt-4 text-sm font-medium">Skills</h4><ul class="flex flex-wrap gap-2 mt-2">${skills
          .map(
            (s) =>
              `<li class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">${s}</li>`
          )
          .join('')}</ul>`
      : '';

    const jobDataHtml = `
      <div>
        <h3 class="text-xl font-semibold">${title}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300">${company} • ${dates}</p>
        <p class="mt-3 text-sm">${description}</p>
        ${accomplishmentsHtml}
        ${skillsHtml}
        <div class="mt-6 flex justify-end">
          <button data-modal-close class="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300" aria-label="Close">Close</button>
        </div>
      </div>
    `;

    openModal(jobTrigger, jobDataHtml);
  });

  // Close button inside modal
  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-modal-close]')) {
      closeModal();
    }
  });
}

// Auto-init when loaded as module in browser
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    initTimeline();
  });
}
