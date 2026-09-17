import React from 'react';
import { X, Sparkles, MessageSquare, Briefcase, ExternalLink } from 'lucide-react';
import './SpeakerModal.css';

const LinkedInIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

export default function SpeakerModal({ speaker, isOpen, onClose }) {
  if (!isOpen || !speaker) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="speaker-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="speaker-modal-header">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="modal-speaker-img"
            style={{ objectPosition: speaker.imagePosition || 'center 20%' }}
          />
          <div>
            <span className="badge badge-icy mb-1">
              <Sparkles size={12} /> {speaker.tag}
            </span>
            <h2 className="modal-speaker-name">{speaker.name}</h2>
            <p className="modal-speaker-role">{speaker.role}</p>
            <p className="modal-speaker-company">{speaker.company}</p>
          </div>
        </div>

        <div className="speaker-modal-body">
          <div className="speaker-bio-box">
            <h4>About the Speaker:</h4>
            <p>{speaker.bio}</p>
          </div>

          <div className="speaker-talk-box">
            <h4>Featured Session Topic:</h4>
            <div className="talk-card">
              <MessageSquare size={16} className="text-icy" />
              <span>{speaker.topic}</span>
            </div>
          </div>

          <div className="speaker-links-section">
            <h4>Connect & View Portfolios:</h4>
            <div className="modal-links-grid">
              {speaker.linkedin && (
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-card linkedin-card"
                >
                  <div className="modal-link-icon">
                    <LinkedInIcon size={20} />
                  </div>
                  <div className="modal-link-info">
                    <strong>LinkedIn Profile</strong>
                    <span>Connect & view experience</span>
                  </div>
                  <ExternalLink size={15} className="link-arrow" />
                </a>
              )}
              {speaker.portfolio && (
                <a
                  href={speaker.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-card portfolio-card"
                >
                  <div className="modal-link-icon">
                    <Briefcase size={20} />
                  </div>
                  <div className="modal-link-info">
                    <strong>Portfolio & Projects</strong>
                    <span>View GitHub repositories & work</span>
                  </div>
                  <ExternalLink size={15} className="link-arrow" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="speaker-modal-footer">
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
}
