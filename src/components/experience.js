import React, { useEffect, useRef, useState } from "react";
import { experiences } from "../data/constants";

export const Experience = () => {
  const timelineRef = useRef(null);
  const logoRefs = useRef([]);
  const [glowY, setGlowY] = useState(0);
  const [activeLogoIndex, setActiveLogoIndex] = useState(-1);
  const [cardGlow, setCardGlow] = useState({ index: -1, x: 0, y: 0 });
  const [projectGlow, setProjectGlow] = useState({
    cardIndex: -1,
    projectIndex: -1,
    x: 0,
    y: 0,
  });

  const handleCardMouseMove = (index, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCardGlow({
      index,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleProjectMouseMove = (cardIndex, projectIndex, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setProjectGlow({
      cardIndex,
      projectIndex,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  useEffect(() => {
    const dotSize = 14;
    const holdProgress = 0.15;

    const updateGlowPosition = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progressRaw =
        (viewportHeight - timelineRect.top) /
        (timelineRect.height + viewportHeight);
      const progress = Math.min(Math.max(progressRaw, 0), 1);
      const logoRects = logoRefs.current
        .map((logoEl, index) => {
          if (!logoEl) return null;

          const logoRect = logoEl.getBoundingClientRect();
          const top = logoRect.top - timelineRect.top;
          const bottom = logoRect.bottom - timelineRect.top;

          return {
            index,
            top,
            bottom,
            center: top + logoRect.height / 2,
          };
        })
        .filter(Boolean);

      const firstLogoStart = logoRects.length
        ? logoRects[0].center - dotSize / 2
        : 0;
      const endY = Math.max(timelineRect.height - dotSize, firstLogoStart);
      const movementProgress =
        progress <= holdProgress
          ? 0
          : Math.min((progress - holdProgress) / (1 - holdProgress), 1);
      const glowPosition =
        firstLogoStart + movementProgress * (endY - firstLogoStart);
      const glowCenter = glowPosition + dotSize / 2;

      const activeLogo = logoRects.find(
        (logo) => glowCenter >= logo.top && glowCenter <= logo.bottom
      );

      setGlowY(glowPosition);
      setActiveLogoIndex(activeLogo ? activeLogo.index : -1);
    };

    let isTicking = false;

    const onScroll = () => {
      if (isTicking) return;

      isTicking = true;
      window.requestAnimationFrame(() => {
        updateGlowPosition();
        isTicking = false;
      });
    };

    updateGlowPosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateGlowPosition);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateGlowPosition);
    };
  }, []);

  return (
    <section
      id="exp"
      className="bg-gradient-to-b from-[#1a1a2e] via-[#23234b] to-[#1a1a2e] py-10"
    >
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-white text-center mt-10 max-w-xl mx-auto">
          <h1 className="font-bold text-3xl mb-6 border-b-2 border-b-yellow-500 py-2">
            Experiences
          </h1>
          <p className="text-slate-300">
            Here are some of my experiences in the IT field.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div ref={timelineRef} className="relative mt-20">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[#854CE6] via-[#854CE6]/60 to-transparent" />

          <div
            className="hidden md:block absolute left-7 top-0 w-3.5 h-3.5 rounded-full pointer-events-none z-10"
            style={{ transform: `translate(-50%, ${glowY}px)` }}
            aria-hidden="true"
          >
            <div className="w-full h-full rounded-full bg-[#854CE6] shadow-[0_0_10px_3px_rgba(133,76,230,0.95),0_0_24px_8px_rgba(133,76,230,0.55)]" />
          </div>

          <div className="flex flex-col gap-10">
            {experiences.map((experience, idx) => (
              <div key={idx} className="relative md:pl-20">
                {/* Dot / Logo pinned to the line */}
                <div
                  ref={(element) => {
                    logoRefs.current[idx] = element;
                  }}
                  className={`hidden md:flex absolute rounded-full left-0 top-0 items-center justify-center z-20 transition-shadow duration-200 ${
                    activeLogoIndex === idx
                      ? "shadow-[0_0_16px_4px_rgba(133,76,230,0.95),0_0_30px_10px_rgba(133,76,230,0.55)]"
                      : ""
                  }`}
                >
                  <div
                    className="h-14 w-14 rounded-full border-2 border-[#854CE6] bg-white shadow-lg overflow-hidden"
                  >
                    <img
                      src={experience.img}
                      alt={experience.company || "company"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Mobile logo (shown above card) */}
                <div className="md:hidden flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full border-4 border-[#854CE6] bg-white shadow-lg overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company || "company"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6 md:p-8 transition duration-300"
                  onMouseMove={(event) => handleCardMouseMove(idx, event)}
                  onMouseEnter={(event) => handleCardMouseMove(idx, event)}
                  onMouseLeave={() => setCardGlow((prev) => ({ ...prev, index: -1 }))}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200"
                    style={{
                      opacity: cardGlow.index === idx ? 1 : 0,
                      background: `radial-gradient(220px circle at ${cardGlow.x}px ${cardGlow.y}px, rgba(133, 76, 230, 0.26), rgba(133, 76, 230, 0.14) 45%, rgba(133, 76, 230, 0) 70%)`,
                    }}
                  />

                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200"
                    style={{
                      opacity: cardGlow.index === idx ? 1 : 0,
                      padding: "1.5px",
                      background: `radial-gradient(220px circle at ${cardGlow.x}px ${cardGlow.y}px, rgba(133, 76, 230, 0.95), rgba(133, 76, 230, 0.45) 45%, rgba(133, 76, 230, 0) 70%)`,
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  <div className="relative z-10">
                  {/* Role */}
                  <div className="flex flex-col items-center pb-4">
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-2">
                      {experience.role}
                    </h2>
                    <div className="bg-gradient-to-r from-white/5 via-[#854CE6] to-white/5 h-[1px] w-full mb-1" />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <p className="text-yellow-400 text-lg font-bold">
                        {experience.company}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {experience.date}
                      </p>
                    </div>

                    <div className="md:text-right">
                      <p className="text-slate-200 text-sm font-semibold">
                        {experience.location}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {experience.type}
                      </p>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="mt-6 space-y-4">
                    {experience.projects?.map((proj, i) => (
                      <div
                        key={i}
                        className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20 p-4 transition"
                        onMouseMove={(event) => handleProjectMouseMove(idx, i, event)}
                        onMouseEnter={(event) => handleProjectMouseMove(idx, i, event)}
                        onMouseLeave={() =>
                          setProjectGlow((prev) => ({
                            ...prev,
                            cardIndex: -1,
                            projectIndex: -1,
                          }))
                        }
                      >
                        <div
                          className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-200"
                          style={{
                            opacity:
                              projectGlow.cardIndex === idx &&
                              projectGlow.projectIndex === i
                                ? 1
                                : 0,
                            padding: "1.5px",
                            background: `radial-gradient(180px circle at ${projectGlow.x}px ${projectGlow.y}px, rgba(148, 163, 184, 0.95), rgba(148, 163, 184, 0.45) 35%, rgba(148, 163, 184, 0) 70%)`,
                            WebkitMask:
                              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                          }}
                        />

                        <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                          <div>
                            <h3 className="text-white font-bold text-base">
                              {proj.title}
                            </h3>
                            {proj.subtitle && (
                              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                                {proj.subtitle}
                              </p>
                            )}
                          </div>

                          <span className="text-slate-300 text-xs sm:text-sm whitespace-nowrap">
                            {proj.timeline}
                          </span>
                        </div>

                        {/* New structured sections */}
                        {proj.sections?.length > 0 ? (
                          <div className="mt-4 space-y-4">
                            {proj.sections.map((section, sIdx) => (
                              <div key={sIdx}>
                                <p className="text-white font-semibold text-sm">
                                  {section.heading}
                                </p>
                                <ul className="list-disc list-inside text-slate-300 text-sm mt-2 space-y-1.5 leading-relaxed">
                                  {section.bullets?.map((b, j) => (
                                    <li key={j}>{b}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* Fallback to old desc */
                          <ul className="list-disc list-inside text-slate-300 text-sm mt-3 space-y-1.5 leading-relaxed">
                            {proj.desc?.map((d, j) => (
                              <li key={j}>{d}</li>
                            ))}
                          </ul>
                        )}

                        {/* Project-specific skills */}
                        {(proj.projectSkills?.length > 0 || proj.skills?.length > 0) && (
                          <>
                            <p className="pt-5 font-bold text-white text-sm">
                              Tech
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {(proj.projectSkills || proj.skills).map((skill, k) => (
                                <div
                                  key={k}
                                  className="border border-white/15 bg-black/20 hover:bg-white/10 text-white p-1 pr-2 flex items-center rounded-full gap-2 transition"
                                >
                                  <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-6 h-6 rounded-full aspect-square object-cover bg-white"
                                  />
                                  <p className="text-xs">{skill.name}</p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Experience-level skills (fallback only if you don't define project skills anywhere) */}
                  {experience.skills?.length > 0 &&
                    !experience.projects?.some(
                      (p) => (p.projectSkills?.length || p.skills?.length)
                    ) && (
                      <>
                        <p className="pt-6 font-bold text-white">Skills</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {experience.skills.map((skill, i) => (
                            <div
                              key={i}
                              className="border border-white/15 bg-black/20 hover:bg-white/10 text-white p-1 pr-2 flex items-center rounded-full gap-2 transition"
                            >
                              <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-6 h-6 rounded-full aspect-square"
                              />
                              <p className="text-xs">{skill.name}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                  <p className="text-slate-400 text-xs mt-6">
                    Note: Some work is internal; additional technical detail can be shared during interviews.
                  </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
