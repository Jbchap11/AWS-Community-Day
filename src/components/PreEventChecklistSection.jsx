import React, { useState } from 'react';
import { PREP_CHECKLIST } from '../data/mockData';
import { Check, ClipboardCheck } from 'lucide-react';
import FloatingClouds from './FloatingClouds';
import './PreEventChecklistSection.css';

export default function PreEventChecklistSection() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = PREP_CHECKLIST.length;

  return (
    <section className="checklist-section" id="checklist-section">
      <FloatingClouds count={12} theme="mixed" />
      <div className="section-inner">
        <div className="section-header text-center">
          <div className="badge badge-icy mb-2">
            <ClipboardCheck size={14} />
            <span>Attendee Preparation</span>
          </div>
          <h2 className="section-title">Pre-Event Readiness Checklist</h2>
          <p className="section-subtitle">
            Make sure you are 100% prepared before arriving on Saturday. Check off these essential items for a hassle-free experience.
          </p>
          <div className="checklist-progress-pill mt-3">
            <span>{completedCount} of {totalCount} Completed</span>
          </div>
        </div>

        <div className="checklist-card-container glass-card">
          <div className="checklist-grid">
            {PREP_CHECKLIST.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  className={`checklist-item-box ${isChecked ? 'checked' : ''}`}
                  onClick={() => toggleCheck(item.id)}
                >
                  <button className="checkbox-action-btn" type="button" aria-label={`Check ${item.label}`}>
                    <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
                      {isChecked && <Check size={16} strokeWidth={3.5} className="custom-check-icon" />}
                    </div>
                  </button>
                  <div className="checklist-text-area">
                    <div className="checklist-title-row">
                      <span className={`checklist-item-name ${isChecked ? 'strike' : ''}`}>
                        {item.label}
                      </span>
                      {item.critical ? (
                        <span className="badge badge-critical">Required</span>
                      ) : (
                        <span className="badge badge-recommended">Recommended</span>
                      )}
                    </div>
                    <p className="checklist-detail-text">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
