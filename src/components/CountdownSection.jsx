import React, { useState, useEffect } from 'react';
import './CountdownSection.css';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target event date: November 10, 2026 10:30 AM IST
    const targetDate = new Date('2026-11-10T10:30:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      let diff = targetDate - now;

      // If date has passed, keep at 0 or rolling
      if (diff < 0) {
        diff = 0;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-section hero-alt-bg">
      {/* Background Decorative Frills & Glow Orbs */}
      <div className="countdown-frills-wrapper" aria-hidden="true">
        <div className="frill-orb frill-orb-orange"></div>
        <div className="frill-orb frill-orb-cyan"></div>
        <div className="frill-orb frill-orb-purple"></div>

        {/* Flowing Ribbon Waves SVG (just like hero section) */}
        <svg className="frill-curved-svg" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="frill-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#ff9900" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ff9900" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="frill-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff9900" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#ff9900" stopOpacity="0.8" />
              <stop offset="65%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="frill-grad-3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="40%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ff9900" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Primary Wavy Ribbon */}
          <path
            d="M -100 230 C 250 90, 560 380, 960 150 C 1180 30, 1380 280, 1600 160"
            stroke="url(#frill-grad-1)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="frill-ribbon-line frill-line-1"
          />

          {/* Secondary Wavy Ribbon */}
          <path
            d="M -80 270 C 270 410, 680 70, 1060 250 C 1270 360, 1470 140, 1650 240"
            stroke="url(#frill-grad-2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="frill-ribbon-line frill-line-2"
          />

          {/* Tertiary Subtle Ribbon */}
          <path
            d="M -50 160 C 320 290, 720 180, 1120 330 C 1320 210, 1480 290, 1620 170"
            stroke="url(#frill-grad-3)"
            strokeWidth="2"
            strokeLinecap="round"
            className="frill-ribbon-line frill-line-3"
          />
        </svg>

        {/* Twinkling Stars and Sparkles */}
        <div className="frill-orbit-ring"></div>
        <div className="frill-particle p1">✦</div>
        <div className="frill-particle p2">✦</div>
        <div className="frill-particle p3">★</div>
        <div className="frill-particle p4">✦</div>
        <div className="frill-particle p5">★</div>
        <div className="frill-particle p6">✦</div>
        <div className="frill-particle p7">✧</div>
        <div className="frill-particle p8">★</div>
        <div className="frill-particle p9">✦</div>
        <div className="frill-particle p10">⋆</div>
        <div className="frill-particle p11">✧</div>
        <div className="frill-particle p12">★</div>
        <div className="frill-particle p13">✦</div>
        <div className="frill-particle p14">⋆</div>
      </div>

      <div className="section-inner relative-content">
        <div className="countdown-box glass-card">
          <div className="countdown-header">
            <h2 className="countdown-title">
              Event Starts In
            </h2>
          </div>

          <div className="countdown-grid">
            <div className="countdown-card">
              <span className="countdown-val">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="countdown-unit">Days</span>
            </div>
            <div className="countdown-colon">:</div>
            <div className="countdown-card">
              <span className="countdown-val">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-unit">Hours</span>
            </div>
            <div className="countdown-colon">:</div>
            <div className="countdown-card">
              <span className="countdown-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-unit">Minutes</span>
            </div>
            <div className="countdown-colon">:</div>
            <div className="countdown-card highlight-sec">
              <span className="countdown-val">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-unit">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
