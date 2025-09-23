import { useEffect, useRef } from 'preact/hooks';
import type { Job } from '../pages/resume/jobs';

interface ModalProps {
  job: Job;
  onClose: () => void;
}

export default function Modal({ job, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Trap focus inside modal
  useEffect(() => {
    const focusable =
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Tab') {
        if (focusable && focusable.length > 0) {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          } else if (
            !e.shiftKey &&
            document.activeElement === last
          ) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
      if (e.key === 'Escape') {
        onClose();
      }
    }
    dialogRef.current?.addEventListener(
      'keydown',
      handleKeyDown
    );
    first?.focus();
    return () => {
      dialogRef.current?.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [onClose]);

  // Close on overlay click
  const handleOverlayClick = (e: MouseEvent) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md"
      onClick={handleOverlayClick}
    >
      <div class="relative w-full max-w-xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <h4 id="modal-title" class="mb-2 text-xl font-bold">
          {job.title} @ {job.company}
        </h4>
        <p class="mb-2 text-gray-700 dark:text-gray-300">
          {job.startDate} &mdash; {job.endDate}
        </p>
        <div class="mb-4">
          <strong>Description:</strong>
          <p>{job.description}</p>
        </div>
        <div class="mb-4">
          <strong>Key Accomplishments:</strong>
          <ul class="ml-6 list-disc">
            {job.accomplishments?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div class="mb-4">
          <strong>Skills:</strong>
          <ul class="mt-2 flex flex-wrap gap-2">
            {job.skills?.map((skill, idx) => (
              <li
                key={idx}
                class="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-900 dark:hover:text-white"
          onClick={onClose}
          autoFocus
        >
          <span class="sr-only">Close</span>
          &times;
        </button>
      </div>
    </div>
  );
}
