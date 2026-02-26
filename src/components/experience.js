import React from "react";
import { experiences } from "../data/constants";

export const Experience = () => {
  return (
    <section
      id="exp"
      className="bg-gradient-to-b from-[#1a1a2e] via-[#23234b] to-[#1a1a2e] py-20"
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
        <div className="relative mt-12">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[#854CE6] via-[#854CE6]/60 to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((experience, idx) => (
              <div key={idx} className="relative md:pl-20">
                {/* Dot / Logo pinned to the line */}
                <div className="hidden md:flex absolute left-0 top-0 items-center justify-center">
                  <div className="h-14 w-14 rounded-full border-2 border-[#854CE6] bg-white shadow-lg overflow-hidden">
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
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6 md:p-8 hover:border-[#854CE6]/70 transition">
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
                        className="rounded-xl border border-white/10 bg-black/20 p-4 hover:border-white/20 transition"
                      >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
