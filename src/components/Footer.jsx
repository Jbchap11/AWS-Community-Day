import React from 'react';
import { Cloud, Heart } from 'lucide-react';
import { EVENT_DETAILS } from '../data/mockData';
import './Footer.css';

export default function Footer({ setActiveTab, onOpenRegister }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <div className="brand mb-2">
            <div className="brand-icon">
              <Cloud size={20} />
            </div>
            <div className="brand-text">
              <span className="brand-title">AWS Cloud Club</span>
              <span className="brand-sub">IGDTUW Community Day</span>
            </div>
          </div>
          <p className="footer-desc">
            An official student initiative organized by AWS Cloud Club at Indira Gandhi Delhi Technical University for Women. Concept redesign designed for AWS UI/UX Design Challenge.
          </p>
        </div>

        <div className="footer-links-col">
          <h4>Navigation</h4>
          <button onClick={() => setActiveTab('discover')}>Discover</button>
          <button onClick={() => setActiveTab('sessions')}>Sessions & Agenda</button>
          <button onClick={() => setActiveTab('speakers')}>Speakers</button>
          <button onClick={() => {
            setActiveTab('discover');
            setTimeout(() => {
              const el = document.getElementById('venue-details-section') || document.getElementById('venue-prep-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 60);
          }}>Venue Details</button>
          <button onClick={() => {
            setActiveTab('discover');
            setTimeout(() => {
              document.getElementById('checklist-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 60);
          }}>Prep Checklist</button>
          <button onClick={() => setActiveTab('faq')}>FAQ</button>
        </div>

        <div className="footer-links-col">
          <h4>Event Info</h4>
          <p><strong>Date:</strong> {EVENT_DETAILS.date}</p>
          <p><strong>Venue:</strong> IGDTUW Campus, New Delhi</p>
          <p><strong>Contact:</strong> <a href="mailto:aws_cloudclub_igdtuw@gmail.com" style={{ color: 'var(--aws-orange)', textDecoration: 'none' }}>aws_cloudclub_igdtuw@gmail.com</a></p>
          <p><strong>Cost:</strong> 100% Free for Students</p>
          <button className="btn btn-primary btn-sm mt-2" onClick={onOpenRegister}>
            Register Free Ticket
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Made with <Heart size={14} className="text-orange inline-icon" /> by <strong style={{ color: 'var(--text-snow)' }}>Jiah Bhola</strong> for AWS Cloud Club IGDTUW Student Community Day.
        </p>
        <p className="copyright">© 2026 AWS Cloud Club IGDTUW. All rights reserved.</p>
      </div>
    </footer>
  );
}
