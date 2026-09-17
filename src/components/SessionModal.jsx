import React from 'react';
import { X, Clock, MapPin, Bookmark, BookmarkCheck, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import './SessionModal.css';

export default function SessionModal({ session, isOpen, onClose, isBookmarked, onToggleBookmark, onOpenRegister }) {
  if (!isOpen || !session) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="session-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="session-modal-header">
          <div className="modal-badges-row">
            {session.isWorkshop && (
              <span className="badge badge-workshop">Hands-on Workshop</span>
            )}
            <span className={`badge badge-level-${session.level.toLowerCase()}`}>
              {session.levelLabel || session.level}
            </span>
            <span className="badge badge-icy text-capitalize">{session.track} Track</span>
          </div>

          <h2 className="session-modal-title">{session.title}</h2>

          <div className="session-meta-row">
            <span className="meta-item">
              <Clock size={16} className="text-icy" /> {session.time}
            </span>
            <span className="meta-item">
              <MapPin size={16} className="text-orange" /> {session.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="session-modal-body">
          <p className="session-full-desc">{session.description}</p>

          {/* Speaker Box */}
          <div className="session-speaker-box">
            <div className="speaker-avatar-ph large">{session.speakerName.charAt(0)}</div>
            <div>
              <span className="speaker-box-name">{session.speakerName}</span>
              <span className="speaker-box-role">{session.speakerRole}</span>
            </div>
          </div>

          {/* Key Takeaways */}
          {session.takeaways && session.takeaways.length > 0 && (
            <div className="takeaways-section">
              <h4>What You Will Learn & Build:</h4>
              <ul className="takeaways-list">
                {session.takeaways.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="text-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Prerequisites */}
          {session.prerequisites && (
            <div className="prereq-box">
              <AlertCircle size={16} className="text-icy" />
              <div>
                <strong>Recommended Prerequisites:</strong>
                <p>{session.prerequisites}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="session-modal-footer">
          <button
            className={`btn btn-secondary ${isBookmarked ? 'saved' : ''}`}
            onClick={() => onToggleBookmark(session.id)}
          >
            {isBookmarked ? <BookmarkCheck size={18} className="text-orange" /> : <Bookmark size={18} />}
            <span>{isBookmarked ? 'Saved to Schedule' : 'Save to Schedule'}</span>
          </button>

          <button
            className="btn btn-primary"
            onClick={() => {
              onClose();
              onOpenRegister();
            }}
          >
            <span>Register Free Ticket</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
