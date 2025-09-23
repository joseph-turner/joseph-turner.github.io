import { useState, useRef, useEffect } from 'preact/hooks';
import Modal from './Modal';
import type { Job } from '../pages/resume/jobs';

interface ResumeTimelineProps {
  jobs: Job[];
}

export default function ResumeTimeline({
  jobs,
}: ResumeTimelineProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);
  const lastFocusedRef = useRef<HTMLButtonElement | null>(null);

  // Accessibility: trap focus in modal
  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () =>
      document.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen && lastFocusedRef.current) {
      lastFocusedRef.current.focus();
    }
  }, [modalOpen]);

  const openModal = (job: Job, buttonRef: HTMLButtonElement) => {
    setSelectedJob(job);
    setModalOpen(true);
    lastFocusedRef.current = buttonRef;
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <section class="mx-auto max-w-3xl px-4 py-8">
      <h2 class="mb-4 text-3xl font-bold">
        Professional Summary
      </h2>
      <p class="mb-8 text-lg text-gray-700 dark:text-gray-300">
        {/* Add your summary here, or import from a data file if needed */}
        Experienced software engineer with a passion for building
        performant, accessible web applications.
      </p>
      <h3 class="mb-4 text-2xl font-semibold">
        Work Experience
      </h3>
      <ul class="timeline relative border-l-2 border-gray-300 dark:border-gray-700">
        {jobs.map((job, idx) => (
          <li key={idx} class="relative mb-8 pl-6">
            <span class="absolute top-1/2 -left-3 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary-400 text-white">
              {idx + 1}
            </span>
            <button
              class="w-full cursor-pointer rounded px-2 py-1 text-left hover:bg-primary-200 focus:ring-2 focus:ring-primary-500 focus:outline-none dark:hover:bg-primary-900"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-controls="job-modal"
              onClick={(e) => openModal(job, e.currentTarget)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(
                    job,
                    e.currentTarget as HTMLButtonElement
                  );
                }
              }}
            >
              <h4 class="text-lg font-bold">{job.title}</h4>
              <p class="text-gray-600 dark:text-gray-400">
                {job.company} &mdash; {job.startDate} &ndash;{' '}
                {job.endDate}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {job.location}
                {job.remote ? ' (Remote)' : ''}
              </p>
            </button>
          </li>
        ))}
      </ul>
      {modalOpen && selectedJob && (
        <Modal job={selectedJob} onClose={closeModal} />
      )}
    </section>
  );
}
