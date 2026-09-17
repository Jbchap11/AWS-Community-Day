import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import FloatingClouds from './FloatingClouds';
import './FaqSection.css';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="faq-page section-theme-faq" id="faq-section">
      <FloatingClouds count={12} theme="mixed" />
      <div className="section-inner">
        <div className="section-header">
          <div className="badge badge-icy mb-2">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about tickets, prerequisites, food, swag, and logistics for AWS Student Community Day.
          </p>
        </div>

        <div className="faq-container">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-accordion-item glass-card ${isOpen ? 'open' : ''}`}>
                <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                  <span className="faq-question-text">{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} className="text-icy" /> : <ChevronDown size={20} className="text-muted" />}
                </button>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
