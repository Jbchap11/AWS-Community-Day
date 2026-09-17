import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { EVENT_DETAILS } from '../data/mockData';
import './HeroSection.css';

export default function HeroSection({ onExploreSessions, onOpenRegister }) {
  return (
    <section className="hero-section section-theme-hero">
      {/* Background Glow Orbs */}
      <div className="glow-orb orb-icy"></div>
      <div className="glow-orb orb-orange"></div>

      {/* Natural Wavy Ribbon Background */}
      <div className="curved-arrow-bg" aria-hidden="true">
        <svg viewBox="0 0 1400 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="curved-arrow-svg">
          <defs>
            <linearGradient id="ribbonGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="25%" stopColor="#38BDF8" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#FF9900" stopOpacity="0.5" />
              <stop offset="90%" stopColor="#FF9900" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FF9900" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ribbonGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF9900" stopOpacity="0" />
              <stop offset="20%" stopColor="#FF9900" stopOpacity="0.4" />
              <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Top edge of the ribbon - original smooth natural wave, shifted up by 200px */}
          <path
            d="M -100 350 C 200 250, 400 500, 750 300 C 1100 100, 1250 250, 1500 0"
            stroke="url(#ribbonGrad1)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="ribbon-line ribbon-line-1"
          />

          {/* Bottom edge of the ribbon */}
          <path
            d="M -100 380 C 220 280, 380 530, 740 330 C 1120 120, 1230 280, 1500 30"
            stroke="url(#ribbonGrad2)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            className="ribbon-line ribbon-line-2"
          />
        </svg>
      </div>

      <div className="section-inner hero-inner-container">
        {/* Partnership Brand Logos (AWS Cloud Clubs x IGDTUW) */}
        <div className="hero-partnership-logos">
          <div className="hero-logo-badge aws-brand-badge">
            <img src={`${import.meta.env.BASE_URL}aws-cloud-club-logo.png`} alt="AWS Cloud Clubs Logo" className="hero-logo-img" />
          </div>
          <span className="logo-cross">×</span>
          <div className="hero-logo-badge igdtuw-brand-badge">
            <img src={`${import.meta.env.BASE_URL}igdtuw-logo.png`} alt="IGDTUW Logo" className="hero-logo-img igdtuw-crest" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="hero-title">
          AWS Student <br />
          <span className="gradient-text-aws">Community Day 2026</span>
        </h1>

        <p className="hero-subtitle">
          Empowering student developers with hands-on cloud labs, GenAI workshops, career insights, and networking with AWS Heroes.
        </p>

        {/* Event Logistics Quick Cards */}
        <div className="logistics-bar">
          <div className="logistics-item">
            <Calendar size={18} className="logistics-icon text-icy" />
            <div>
              <span className="logistics-label">Date & Time</span>
              <span className="logistics-val">{EVENT_DETAILS.date} | {EVENT_DETAILS.time}</span>
            </div>
          </div>

          <div className="logistics-item">
            <MapPin size={18} className="logistics-icon text-orange" />
            <div>
              <span className="logistics-label">Venue</span>
              <span className="logistics-val">Auditorium, IGDTUW, New Delhi</span>
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="hero-cta-group">
          <button className="btn btn-primary btn-lg" onClick={onOpenRegister}>
            <span>Register Free Ticket</span>
            <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary btn-lg" onClick={onExploreSessions}>
            <span>Browse Sessions</span>
          </button>
        </div>
        <div className="hero-reg-deadline-note">
          <span>⚡ Registration closes on 31st October</span>
        </div>

        {/* Small & Cute Detail Metric Boxes */}
        <div className="cute-stats-grid">
          <div className="cute-stat-box">
            <span className="cute-stat-num">{EVENT_DETAILS.stats.students}</span>
            <span className="cute-stat-txt">Students Registered</span>
          </div>
          <div className="cute-stat-box">
            <span className="cute-stat-num">{EVENT_DETAILS.stats.speakers}</span>
            <span className="cute-stat-txt">Industry Speakers</span>
          </div>
          <div className="cute-stat-box">
            <span className="cute-stat-num">{EVENT_DETAILS.stats.sessions}</span>
            <span className="cute-stat-txt">Tech Sessions</span>
          </div>
          <div className="cute-stat-box">
            <span className="cute-stat-num">{EVENT_DETAILS.stats.labs}</span>
            <span className="cute-stat-txt">Build Labs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
