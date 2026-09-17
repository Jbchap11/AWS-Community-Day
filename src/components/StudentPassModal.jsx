import React from 'react';
import { X, Sparkles, Calendar, CheckCircle } from 'lucide-react';
import { EVENT_DETAILS } from '../data/mockData';
import './StudentPassModal.css';

export default function StudentPassModal({ pass, isOpen, onClose }) {
  if (!isOpen || !pass) return null;

  const downloadCalendarFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AWS Cloud Club IGDTUW//Student Community Day 2026//EN
BEGIN:VEVENT
SUMMARY:AWS Student Community Day 2026 @ IGDTUW
DESCRIPTION:Join AWS Cloud Club IGDTUW for expert talks, hands-on cloud labs, GenAI workshops, and swag! Ticket ID: ${pass.ticketId}
LOCATION:${EVENT_DETAILS.venue}
DTSTART:20261110T050000Z
DTEND:20261110T113000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'AWS_Student_Community_Day_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="pass-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="pass-modal-header">
          <CheckCircle size={24} className="text-green" />
          <div>
            <h3>Official Student Ticket</h3>
            <p className="subtext">Issued by AWS Cloud Club IGDTUW</p>
          </div>
        </div>

        {/* Email Dispatch Notice */}
        <div className="pass-email-dispatched-box">
          <span>📧 A copy of this pass and entry QR code was sent to: <strong>{pass.email}</strong></span>
        </div>

        {/* Digital Ticket Card */}
        <div className="digital-ticket-card">
          <div className="ticket-top">
            <div className="ticket-brand">
              <Sparkles size={16} className="text-orange" />
              <span>AWS Student Community Day 2026</span>
            </div>
            <span className="ticket-id">{pass.ticketId}</span>
          </div>

          <div className="ticket-body">
            <div className="ticket-info-group">
              <span className="ticket-label">STUDENT NAME</span>
              <span className="ticket-value">{pass.name}</span>
            </div>

            <div className="ticket-info-group">
              <span className="ticket-label">COLLEGE / INSTITUTION</span>
              <span className="ticket-value">{pass.college}</span>
            </div>

            <div className="ticket-row-2">
              <div className="ticket-info-group">
                <span className="ticket-label">DATE & TIME</span>
                <span className="ticket-value">{EVENT_DETAILS.date} | 09:30 AM</span>
              </div>

              <div className="ticket-info-group">
                <span className="ticket-label">VENUE</span>
                <span className="ticket-value">Auditorium, IGDTUW</span>
              </div>
            </div>
          </div>

          <div className="ticket-qr-section">
            <div className="qr-code-box">
              <div className="qr-mock-pattern"></div>
            </div>
            <span className="qr-caption">Show this QR code at IGDTUW Main Gate Check-in Desk</span>
          </div>
        </div>

        <div className="pass-modal-actions">
          <button className="btn btn-icy btn-sm" onClick={downloadCalendarFile}>
            <Calendar size={16} />
            <span>Add to Calendar (.ics)</span>
          </button>
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close Pass
          </button>
        </div>
      </div>
    </div>
  );
}
