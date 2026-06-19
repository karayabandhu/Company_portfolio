"use client";

import React, { useState, useEffect } from "react";

// Target launch date: June 19, 2026 at 12:35:00 PM IST (GMT+5:30)
const LAUNCH_DATE_MS = new Date("2026-06-19T12:35:00+05:30").getTime();

export default function ComingSoonClient() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    // Calculate initial time left
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = LAUNCH_DATE_MS - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        expired: false,
      };
    };

    // Update state
    const initial = calculateTimeLeft();
    setTimeLeft(initial);

    // If already expired, auto-redirect immediately
    if (initial.expired) {
      window.location.href = "/";
      return;
    }

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);

      if (remaining.expired) {
        clearInterval(timer);
        // Live reload to unlock the site for the visitor instantly
        window.location.reload();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    // Simulate API registration call
    setTimeout(() => {
      setStatus("success");
      setStatusMessage("Thank you! We've registered your interest and will notify you.");
      setEmail("");
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-4 overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Cinematic Glowing Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-2xl w-full text-center space-y-12">
        
        {/* Branding Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 animate-pulse">
            🚀 Launching Soon
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Karaya Bandhu
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-medium max-w-lg mx-auto leading-relaxed">
            Incubating India's Gig Economy Ecosystems. Our parent holding platform and SaaS infrastructure are about to launch.
          </p>
        </div>

        {/* Live Countdown Grid with Glassmorphic design */}
        {timeLeft.expired ? (
          <div className="text-xl sm:text-2xl font-bold text-blue-400 animate-bounce">
            Unlocking platform... Welcome to Karaya Bandhu!
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md sm:max-w-xl mx-auto">
            {/* Days Card */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-blue-500/30">
              <span className="text-3xl sm:text-5xl font-black text-white font-mono">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold tracking-widest uppercase mt-2">
                Days
              </span>
            </div>

            {/* Hours Card */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-blue-500/30">
              <span className="text-3xl sm:text-5xl font-black text-white font-mono">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold tracking-widest uppercase mt-2">
                Hours
              </span>
            </div>

            {/* Minutes Card */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-blue-500/30">
              <span className="text-3xl sm:text-5xl font-black text-white font-mono">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold tracking-widest uppercase mt-2">
                Mins
              </span>
            </div>

            {/* Seconds Card */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-blue-500/30">
              <span className="text-3xl sm:text-5xl font-black text-blue-500 font-mono animate-pulse">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold tracking-widest uppercase mt-2">
                Secs
              </span>
            </div>
          </div>
        )}

        {/* E-Mail Subscription Section */}
        <div className="max-w-md mx-auto space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-200">Get Notified On Launch</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Enter your email to receive launch notification alerts and startup preview news.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="relative flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              disabled={status === "loading" || status === "success"}
              className="flex-grow px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/30 text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-slate-900/60 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-6 py-3 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
            >
              {status === "loading" ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
              ) : (
                "Notify Me"
              )}
            </button>
          </form>

          {/* Form Feedback Messages */}
          {statusMessage && (
            <div
              className={`text-sm font-semibold mt-2 ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {statusMessage}
            </div>
          )}
        </div>

      </div>

      {/* Subtle bottom footer watermark */}
      <div className="absolute bottom-6 text-[10px] sm:text-xs text-slate-600 font-medium tracking-wide">
        &copy; {new Date().getFullYear()} Karaya Bandhu Pvt. Ltd. All Rights Reserved.
      </div>
    </div>
  );
}
