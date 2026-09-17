import React from 'react';
import { SPONSORS } from '../data/mockData';
import { Award, Sparkles, Ticket } from 'lucide-react';
import './SponsorsSection.css';

export default function SponsorsSection() {
  return (
    <section className="sponsors-section hero-styled-section" id="sponsors-section">
      {/* Hero Style Background Decorative Frills */}
      <div className="sponsors-frills-wrapper" aria-hidden="true">
        <div className="sponsors-orb sponsors-orb-orange"></div>
        <div className="sponsors-orb sponsors-orb-cyan"></div>
        <div className="sponsors-orb sponsors-orb-purple"></div>

        <svg className="sponsors-ribbon-svg" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
          <path
            d="M-50 150 C 350 320, 700 40, 1100 240 C 1300 360, 1500 100, 1600 220"
            stroke="url(#sponsor-grad-1)"
            strokeWidth="3"
            strokeLinecap="round"
            className="sponsor-ribbon-line"
          />
          <defs>
            <linearGradient id="sponsor-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff9900" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        <div className="sponsor-sparkle sp1">✦</div>
        <div className="sponsor-sparkle sp2">★</div>
        <div className="sponsor-sparkle sp3">✦</div>
        <div className="sponsor-sparkle sp4">★</div>
      </div>

      <div className="section-inner relative-content">
        <div className="section-header text-center">
          <div className="badge badge-icy mb-2">
            <Award size={14} />
            <span>Official Partners</span>
          </div>
          <h2 className="section-title">Proudly Supported By</h2>
        </div>

        <div className="sponsors-simple-grid">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`sponsor-simple-card glass-card sponsor-card-${sponsor.color}`}
            >
              <div className="sponsor-tier-badge">
                <span className={`badge badge-${sponsor.color === 'orange' ? 'orange' : 'purple'}`}>
                  {sponsor.color === 'orange' ? <Sparkles size={12} /> : <Ticket size={12} />}
                  <span>{sponsor.tier}</span>
                </span>
              </div>

              <div className="sponsor-logo-box">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-logo-image"
                  loading="lazy"
                />
              </div>

              <h3 className="sponsor-title-name">{sponsor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
