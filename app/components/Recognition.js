"use client";

import React, { useState } from "react";

export default function Recognition({ isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  const certDetails = {
    number: "DIPP270187",
    issuedDate: "02-07-2026",
    validUpto: "23-03-2036",
    sectors: ["Professional & Commercial Services", "Employment Services"],
    recognizedAs: "Startup by DPIIT, Ministry of Commerce & Industry, Government of India",
  };

  return (
    <section
      id="recognition"
      className={`py-24 border-t relative overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-slate-950 border-slate-900 text-slate-100"
          : "bg-slate-50 border-slate-200 text-slate-900"
      }`}
    >
      {/* Background ambient glow in dark mode */}
      {isDark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      )}

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context & Metadata */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 dark:bg-blue-950/30 dark:border-blue-900/30 dark:text-blue-400">
                Official Recognition
              </span>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100 dark:bg-amber-950/30 dark:border-amber-900/30 dark:text-amber-400">
                Govt. of India Approved
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Recognized Startup by <span className="text-blue-600 dark:text-blue-400">DPIIT</span>
            </h2>

            <p className={`text-base leading-relaxed ${isDark ? "text-slate-450" : "text-slate-650"}`}>
              Karaya Bandhu Private Limited is officially recognized as a startup by the{" "}
              <strong>Department for Promotion of Industry and Internal Trade (DPIIT)</strong>, under
              the Ministry of Commerce & Industry, Government of India. This recognition celebrates
              our dedication to creating cutting-edge gig economy platforms, digital brand incubation, and micro-fintech rails for India's emerging markets.
            </p>

            {/* Structured Certificate Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isDark
                    ? "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                  Certificate Number
                </span>
                <span className="text-base font-mono font-bold text-blue-600 dark:text-blue-400">
                  {certDetails.number}
                </span>
              </div>

              <div
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isDark
                    ? "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                  Recognition Status
                </span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Active (10-Year Term)
                </span>
              </div>

              <div
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isDark
                    ? "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                  Date of Issue
                </span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {certDetails.issuedDate}
                </span>
              </div>

              <div
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isDark
                    ? "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                  Valid Until
                </span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {certDetails.validUpto}
                </span>
              </div>
            </div>

            {/* Sectors & Activities */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block mb-2">
                Industry Sectors & Scope
              </span>
              <div className="flex flex-wrap gap-2">
                {certDetails.sectors.map((sector, index) => (
                  <span
                    key={index}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${
                      isDark
                        ? "bg-slate-900 border-slate-800 text-slate-300"
                        : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-wrap gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Certificate
              </button>
              <a
                href="/startup_india_certificate.png"
                download="Karaya_Bandhu_Startup_India_Certificate.png"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
                  isDark
                    ? "border-slate-800 bg-slate-900/60 hover:bg-slate-900 text-slate-200 hover:border-slate-700"
                    : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:border-slate-300"
                }`}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Certificate
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame of Certificate */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => setIsOpen(true)}
              className={`group relative max-w-[360px] w-full rounded-2xl p-3 border transition-all duration-500 cursor-pointer overflow-hidden shadow-lg ${
                isDark
                  ? "bg-slate-900/30 border-slate-800/80 hover:border-blue-900/50 hover:shadow-blue-950/20 hover:scale-[1.02]"
                  : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-xl hover:scale-[1.02]"
              }`}
            >
              {/* Subtle light reflections */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Image Frame */}
              <div className="relative aspect-[1.414/1] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 dark:border-slate-800">
                <img
                  src="/startup_india_certificate.png"
                  alt="DPIIT Startup India Certificate of Recognition for Karaya Bandhu Private Limited"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay to invite zoom */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white p-3 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 text-center">
                <span className={`text-[11px] font-semibold tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  DPIIT Startup India Certificate (No: {certDetails.number})
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-[fadeInDown_0.2s_ease-out]">
          <div
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 z-10 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-850">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Startup India Certificate of Recognition
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  DIPP270187 • Karaya Bandhu Private Limited
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-650 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body: Scrollable Image View */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
              <img
                src="/startup_india_certificate.png"
                alt="Full Startup India Certificate"
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-sm border border-slate-200 dark:border-slate-850"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-100 dark:border-slate-850">
              <button
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                  isDark
                    ? "border-slate-800 hover:bg-slate-800 text-slate-300"
                    : "border-slate-200 hover:bg-slate-50 text-slate-600"
                }`}
              >
                Close
              </button>
              <a
                href="/startup_india_certificate.png"
                download="Karaya_Bandhu_Startup_India_Certificate.png"
                className="px-4 py-2 text-xs font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
