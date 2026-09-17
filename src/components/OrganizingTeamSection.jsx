import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { Users } from 'lucide-react';
import './OrganizingTeamSection.css';

export default function OrganizingTeamSection() {
  return (
    <section className="organizing-team-section" id="team-section">
      <div className="section-inner">
        <div className="section-header text-center">
          <div className="badge badge-purple mb-2">
            <Users size={14} />
            <span>Organizing Team</span>
          </div>
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle">
            The student leaders and cloud enthusiasts bringing AWS Student Community Day to life at IGDTUW.
          </p>
        </div>

        <div className="team-grid">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="team-card glass-card">
              <div className="team-avatar-wrap">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="team-avatar-img"
                  loading="lazy"
                />
              </div>
              <h3 className="team-member-name">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
