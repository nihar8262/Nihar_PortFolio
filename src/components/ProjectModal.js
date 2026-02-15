import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

export const ProjectModal = ({ project, isOpen, onClose }) => {
  // ✅ Hook MUST be at top-level, before any return
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // ✅ Early return AFTER hook (this is allowed)
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md overflow-y-auto"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="min-h-screen flex items-center justify-center p-4 py-8">
        <div
          className="relative w-full max-w-[80vw] rounded-2xl border border-white/10 bg-[#0b0b14]/80 shadow-2xl overflow-hidden my-8"
          onMouseDown={(e) => e.stopPropagation()}
        >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-black/30 hover:bg-black/90 border border-white/10 p-2 transition"
          aria-label="Close modal"
          title="Close"
        >
          <IoClose size={22} className="text-white" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* LEFT: Media */}
          <div className="md:w-[44%] w-full bg-black/30">
            <div className="p-4 md:p-5">
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] md:h-[390px] object-cover"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-yellow-200 border border-yellow-400/30 bg-yellow-400/10 px-2 py-1 rounded-full">
                  Featured Project
                </span>
                <span className="text-xs text-slate-200 border border-white/10 bg-white/5 px-2 py-1 rounded-full">
                  {project.date}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Details */}
          <div className="md:w-[56%] w-full">
            <div className="overflow-y-auto p-5 md:p-7">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h2>
                <p className="text-slate-300 text-sm">
                  <span className="text-slate-200 font-semibold">Timeline:</span>{" "}
                  {project.date}
                </p>
              </div>

              <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  Tech Stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags?.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 transition"
                    >
                      <img
                        src={tag.image}
                        alt={tag.name}
                        className="w-5 h-5 rounded-full bg-white object-contain"
                      />
                      <span className="text-xs md:text-sm">{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-100">
                  Description
                </h3>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 text-white transition"
                  >
                    <FaGithub size={18} />
                    <span className="text-sm font-semibold">View Code</span>
                  </a>
                )}

                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] px-5 py-3 text-white transition"
                  >
                    <IoLink size={18} />
                    <span className="text-sm font-semibold">Live Demo</span>
                  </a>
                )}
              </div>

              <p className="mt-6 text-xs text-slate-400">
                Tip: Press <span className="text-slate-200">Esc</span> to close.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
