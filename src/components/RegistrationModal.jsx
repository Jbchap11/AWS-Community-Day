import React, { useState } from 'react';
import { X, Ticket, CheckCircle, Calendar, Sparkles, AlertCircle, ArrowRight, ArrowLeft, MailCheck } from 'lucide-react';
import { EVENT_DETAILS, TRACKS } from '../data/mockData';
import './RegistrationModal.css';

export default function RegistrationModal({ isOpen, onClose, onRegisterSuccess }) {
  const [step, setStep] = useState(1); // 1: Info, 2: Preferences, 3: Loading, 4: Success Ticket
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: 'IGDTUW (Indira Gandhi Delhi Technical University for Women)',
    year: '2nd Year',
    branch: 'Computer Science / IT',
    experience: 'Beginner (0-1 yrs)',
    track: 'foundations',
    tshirt: 'M',
    dietary: 'Vegetarian',
  });

  const [errors, setErrors] = useState({});
  const [ticketDetails, setTicketDetails] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.college.trim()) newErrors.college = 'College/University is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Loading spinner state

    setTimeout(() => {
      const generatedPass = {
        ticketId: `AWS-SCD-2026-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.fullName,
        email: formData.email,
        college: formData.college,
        year: formData.year,
        track: formData.track,
        issuedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      };

      setTicketDetails(generatedPass);
      onRegisterSuccess(generatedPass);
      setStep(4); // Success state
    }, 1200);
  };

  // Helper to generate & download .ics calendar file
  const downloadCalendarFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AWS Cloud Club IGDTUW//Student Community Day 2026//EN
BEGIN:VEVENT
SUMMARY:AWS Student Community Day 2026 @ IGDTUW
DESCRIPTION:Join AWS Cloud Club IGDTUW for expert talks, hands-on cloud labs, GenAI workshops, and swag! Ticket ID: ${ticketDetails?.ticketId || 'AWS-SCD-2026'}
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
      <div className="registration-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Modal Header */}
        {step !== 4 && (
          <div className="reg-modal-header">
            <span className="badge badge-icy mb-1">
              <Ticket size={12} /> Free Student Ticket
            </span>
            <h2>Register for AWS Student Community Day</h2>
            <div className="step-indicator-bar">
              <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1. Student Info</div>
              <div className="step-line"></div>
              <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2. Preferences</div>
            </div>
          </div>
        )}

        {/* STEP 1: Student Information */}
        {step === 1 && (
          <form className="reg-form">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                placeholder="e.g. Payal Narwal"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label>Student Email Address *</label>
              <input
                type="email"
                name="email"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="e.g. student@igdtuw.ac.in"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>College / Institution *</label>
                <input
                  type="text"
                  name="college"
                  className={`form-input ${errors.college ? 'input-error' : ''}`}
                  value={formData.college}
                  onChange={handleChange}
                />
                {errors.college && <span className="error-text">{errors.college}</span>}
              </div>

              <div className="form-group">
                <label>Year of Study</label>
                <select name="year" className="form-select" value={formData.year} onChange={handleChange}>
                  <option value="1st Year">1st Year (Freshman)</option>
                  <option value="2nd Year">2nd Year (Sophomore)</option>
                  <option value="3rd Year">3rd Year (Junior)</option>
                  <option value="4th Year">4th Year (Senior)</option>
                  <option value="Postgraduate">Postgraduate / Masters</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Branch / Major</label>
                <input
                  type="text"
                  name="branch"
                  className="form-input"
                  placeholder="e.g. CSE / IT / ECE"
                  value={formData.branch}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>AWS / Cloud Experience</label>
                <select name="experience" className="form-select" value={formData.experience} onChange={handleChange}>
                  <option value="Beginner (0-1 yrs)">Beginner (First time learning cloud)</option>
                  <option value="Intermediate">Intermediate (Used AWS EC2/S3 before)</option>
                  <option value="Advanced">Advanced (AWS Certified / Community)</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                <span>Next: Preferences</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Preferences */}
        {step === 2 && (
          <form className="reg-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Primary Track Interest</label>
              <select name="track" className="form-select" value={formData.track} onChange={handleChange}>
                {TRACKS.filter((t) => t.id !== 'all').map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>AWS T-Shirt Size (Free Swag)</label>
                <select name="tshirt" className="form-select" value={formData.tshirt} onChange={handleChange}>
                  <option value="S">Small (S)</option>
                  <option value="M">Medium (M)</option>
                  <option value="L">Large (L)</option>
                  <option value="XL">Extra Large (XL)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Dietary Preference (Lunch)</label>
                <select name="dietary" className="form-select" value={formData.dietary} onChange={handleChange}>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="Jain">Jain / Vegan</option>
                </select>
              </div>
            </div>

            <div className="assurance-box">
              <AlertCircle size={16} className="text-icy" />
              <span>Free event ticket includes access to all keynotes, labs, lunch, and official AWS certificate.</span>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              <button type="submit" className="btn btn-primary">
                <span>Complete Registration</span>
                <CheckCircle size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Loading Spinner */}
        {step === 3 && (
          <div className="loading-state">
            <div className="spinner"></div>
            <h3>Generating Your Digital Student Pass...</h3>
            <p className="text-slate-light">Reserving your seat and preparing your unique QR badge.</p>
          </div>
        )}

        {/* STEP 4: Success Digital Ticket Card */}
        {step === 4 && ticketDetails && (
          <div className="ticket-success-view">
            <div className="success-banner">
              <CheckCircle size={32} className="text-green" />
              <div>
                <h3>Registration Confirmed!</h3>
                <p>We look forward to welcoming you at IGDTUW Campus.</p>
              </div>
            </div>

            {/* Email Dispatch Notice Banner */}
            <div className="email-dispatch-card">
              <div className="dispatch-icon-wrap">
                <MailCheck size={26} className="text-green" />
              </div>
              <div className="dispatch-text">
                <h4>Official QR Pass Mailed to Your Inbox</h4>
                <p>
                  Your ticket, personal QR entry badge, and confirmation have been mailed to: <br />
                  <strong className="text-icy email-highlight">{ticketDetails.email}</strong>
                </p>
                <p className="dispatch-subnote">
                  🔒 <em>This is a public community website, so tickets are kept private. Please open your registered email on your phone to show the QR code at the IGDTUW security desk.</em>
                </p>
              </div>
            </div>

            {/* Digital Student Ticket Card */}
            <div className="digital-ticket-card">
              <div className="ticket-top">
                <div className="ticket-brand">
                  <Sparkles size={16} className="text-orange" />
                  <span>AWS Student Community Day 2026</span>
                </div>
                <span className="ticket-id">{ticketDetails.ticketId}</span>
              </div>

              <div className="ticket-body">
                <div className="ticket-info-group">
                  <span className="ticket-label">ATTENDEE NAME</span>
                  <span className="ticket-value">{ticketDetails.name}</span>
                </div>

                <div className="ticket-info-group">
                  <span className="ticket-label">INSTITUTION</span>
                  <span className="ticket-value">{ticketDetails.college}</span>
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

              {/* QR Code Placeholder */}
              <div className="ticket-qr-section">
                <div className="qr-code-box">
                  <div className="qr-mock-pattern"></div>
                </div>
                <span className="qr-caption">Scan at IGDTUW Gate Check-in Desk</span>
              </div>
            </div>

            {/* Next Steps & Actions */}
            <div className="ticket-actions">
              <button className="btn btn-icy btn-sm" onClick={downloadCalendarFile}>
                <Calendar size={16} />
                <span>Add to Calendar (.ics)</span>
              </button>
              <button className="btn btn-secondary btn-sm" onClick={onClose}>
                <span>Done & View Event</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
