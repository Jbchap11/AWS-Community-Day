import React, { useState } from 'react';
import { STUDENT_PERSONAS, SESSIONS } from '../data/mockData';
import { Compass, ArrowRight, Sparkles, BookOpen, Layers } from 'lucide-react';
import './StudentPathFinder.css';

export default function StudentPathFinder({ onSelectSession, onFilterTrack }) {
  const [selectedPersonaId, setSelectedPersonaId] = useState('beginner');

  const activePersona = STUDENT_PERSONAS.find((p) => p.id === selectedPersonaId) || STUDENT_PERSONAS[0];

  const recommendedSessionsList = SESSIONS.filter((s) =>
    activePersona.recommendedSessions.includes(s.id)
  );

  const handlePersonaSelect = (persona) => {
    setSelectedPersonaId(persona.id);
  };

  return (
    <section className="pathfinder-section section-theme-pathfinder">
      <div className="section-inner">
        <div className="section-header">
          <div className="badge badge-icy mb-2">
            <Compass size={14} />
            <span>Option 1: Explore by Interest</span>
          </div>
        <h2 className="section-title">Find Your Sessions</h2>
        <p className="section-subtitle">
          Explore sessions that match your interests and learning goals. Choose a track to discover relevant talks, cloud labs, and activities.
        </p>
      </div>

      {/* Persona Selection 4-Card Grid */}
      <div className="persona-tabs">
        {STUDENT_PERSONAS.map((persona) => {
          const isSelected = persona.id === selectedPersonaId;
          return (
            <button
              key={persona.id}
              className={`persona-tab-btn ${isSelected ? 'active' : ''}`}
              onClick={() => handlePersonaSelect(persona)}
            >
              <div className="persona-btn-top">
                <span className="persona-btn-title">{persona.title}</span>
                {isSelected && <span className="persona-active-pill">Selected</span>}
              </div>
              <span className="persona-btn-tag">{persona.tagline}</span>
              <p className="persona-btn-desc">{persona.description}</p>
            </button>
          );
        })}
      </div>

      {/* Tailored Track Results */}
      <div className="persona-result-card glass-card">
        <div className="result-header">
          <div>
            <div className="badge badge-icy mb-1">
              <Sparkles size={12} />
              <span>Track Recommendation: {activePersona.title}</span>
            </div>
            <h3 className="result-title">{activePersona.tagline}</h3>
            <p className="result-desc">{activePersona.description}</p>
          </div>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onFilterTrack(activePersona.recommendedTrack)}
          >
            <Layers size={14} />
            <span>Filter Full Schedule</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Recommended Sessions for this Track */}
        <div className="recommended-sessions-title">
          <BookOpen size={16} className="text-icy" />
          <span>Featured Sessions in this Track:</span>
        </div>

        <div className="persona-sessions-grid">
          {recommendedSessionsList.map((session) => (
            <div key={session.id} className="persona-session-item">
              <div className="session-item-top">
                <span className="session-time-pill">{session.time}</span>
                <span className={`badge badge-level-${session.level.toLowerCase()}`}>
                  {session.level}
                </span>
              </div>
              <h4 className="session-item-title">{session.title}</h4>
              <p className="session-item-speaker">Speaker: {session.speakerName} ({session.speakerRole})</p>
              <div className="session-item-actions">
                <button
                  className="btn btn-icy btn-sm"
                  onClick={() => onSelectSession(session)}
                >
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
