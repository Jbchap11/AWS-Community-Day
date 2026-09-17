import React, { useState } from 'react';
import { SPEAKERS } from '../data/mockData';
import { Users, Sparkles, ExternalLink, MessageSquare, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import './SpeakersView.css';

const LinkedInIcon = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

export default function SpeakersView({ onSelectSpeaker }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedSpeakers = isExpanded ? SPEAKERS : SPEAKERS.slice(0, 3);

  return (
    <section className="speakers-page speakers-hero-bg" id="speakers-section">
      {/* Top & Bottom Smooth Blur Overlays that melt into neighbor sections */}
      <div className="speakers-blur-fade-top" aria-hidden="true"></div>
      <div className="speakers-blur-fade-bottom" aria-hidden="true"></div>

      {/* Hero-style Ambient Glow Orbs */}
      <div className="speakers-glow-orb orb-speakers-icy" aria-hidden="true"></div>
      <div className="speakers-glow-orb orb-speakers-orange" aria-hidden="true"></div>

      {/* Hero-style Natural Curved Ribbon Wave */}
      <div className="speakers-ribbon-bg" aria-hidden="true">
        <svg
          viewBox="0 0 1440 600"
          className="speakers-ribbon-svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="speakersRibbonGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#FF9900" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="speakersRibbonGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            d="M -100 280 C 250 120, 500 480, 850 220 C 1150 80, 1320 320, 1600 150"
            stroke="url(#speakersRibbonGrad1)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="speakers-ribbon-line"
          />
          <path
            d="M -100 320 C 280 160, 480 510, 840 250 C 1180 100, 1300 350, 1600 180"
            stroke="url(#speakersRibbonGrad2)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            className="speakers-ribbon-line"
          />
        </svg>
      </div>

      <div className="section-inner relative-speakers-content">
        <div className="section-header text-center">
          <div className="badge badge-icy mb-2">
            <Users size={14} />
            <span>Industry Mentors & Leaders</span>
          </div>
          <h2 className="section-title">Meet Our Keynote Speakers</h2>
          <p className="section-subtitle">
            Learn directly from AWS Solutions Architects, Community Builders, AWS Heroes, and IGDTUW alumnae shaping the future of cloud computing.
          </p>
        </div>

        <div className="speakers-grid">
          {displayedSpeakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card glass-card">
              <div className="speaker-image-container">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="speaker-img"
                  style={{ objectPosition: speaker.imagePosition || 'center 20%' }}
                  loading="lazy"
                />
                <span className="badge badge-icy speaker-tag">
                  <Sparkles size={11} />
                  <span>{speaker.tag}</span>
                </span>
              </div>

              <div className="speaker-content">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-company">{speaker.company}</p>

                <div className="speaker-topic-box">
                  <MessageSquare size={14} className="text-icy" />
                  <span className="speaker-topic">{speaker.topic}</span>
                </div>

                <p className="speaker-bio">{speaker.bio}</p>

                <div className="speaker-footer">
                  <div className="speaker-links-row">
                    {speaker.linkedin && (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="speaker-link-btn linkedin-btn"
                        title="View LinkedIn Profile"
                      >
                        <LinkedInIcon size={15} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {speaker.portfolio && (
                      <a
                        href={speaker.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="speaker-link-btn portfolio-btn"
                        title="View Portfolio & Projects"
                      >
                        <Briefcase size={15} />
                        <span>Portfolio</span>
                      </a>
                    )}
                  </div>

                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onSelectSpeaker(speaker)}
                  >
                    <span>Full Bio</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimized View More / Show Less Toggle Button */}
        {SPEAKERS.length > 3 && (
          <div className="speakers-view-toggle-wrap text-center mt-5">
            <button
              className="btn btn-secondary btn-lg toggle-speakers-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>{isExpanded ? 'Show Less Keynotes' : `View All Speakers (${SPEAKERS.length})`}</span>
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
