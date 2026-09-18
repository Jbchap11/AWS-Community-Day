import React, { useState } from 'react';
import { Mail, Copy, Check, MessageSquare, Send } from 'lucide-react';
import FloatingStars from './FloatingStars';
import './ContactQueriesSection.css';

export default function ContactQueriesSection() {
  const [copied, setCopied] = useState(false);
  const contactEmail = 'aws_cloudclub_igdtuw@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback if clipboard API fails
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section className="contact-queries-section" id="contact-queries">
      <FloatingStars count={16} />
      <div className="section-inner">
        <div className="contact-card glass-card">
          <div className="contact-card-glow"></div>

          <div className="contact-badge">
            <MessageSquare size={16} className="text-orange" />
            <span>Still Have Questions?</span>
          </div>

          <h2 className="contact-title">
            For more queries, contact us
          </h2>

          <p className="contact-subtitle">
            Need help with registrations, travel logistics, speaker inquiries, or have questions not answered above?
            Our organizing team is always here to assist you!
          </p>

          <div className="email-display-box">
            <div className="email-left">
              <div className="email-icon-circle">
                <Mail size={22} className="email-icon" />
              </div>
              <span className="email-address-text">{contactEmail}</span>
            </div>

            <div className="email-actions">
              <button
                className="action-btn copy-btn"
                onClick={handleCopyEmail}
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald" />
                    <span className="copied-text">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${contactEmail}?subject=Query%20-%20AWS%20Student%20Community%20Day%202026`}
                className="action-btn send-mail-btn"
              >
                <Send size={16} />
                <span>Send Mail</span>
              </a>
            </div>
          </div>

          <div className="contact-footer-note">
            <span className="status-dot"></span>
            <span>AWS Cloud Club IGDTUW Student Organizing Team &bull; Prompt replies within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
