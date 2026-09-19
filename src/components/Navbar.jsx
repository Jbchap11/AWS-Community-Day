import React, { useState } from 'react';
import { Ticket, Menu, X, CheckCircle } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ activeTab, setActiveTab, onOpenRegister, savedPass, onOpenPass }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState(null);
  const currentNav = (activeTab === 'discover' && activeSection) ? activeSection : activeTab;

  const navItems = [
    { id: 'discover', label: 'Discover' },
    { id: 'sessions', label: 'Schedule & Sessions' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'venue', label: 'Venue Details' },
    { id: 'prep', label: 'Prep Checklist' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (id, tabId) => {
    setActiveSection(tabId);
    setActiveTab('discover');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const handleNavClick = (tabId) => {
    if (tabId === 'sessions') {
      scrollToSection('explore-sessions', 'sessions');
      return;
    }
    if (tabId === 'speakers') {
      scrollToSection('speakers-section', 'speakers');
      return;
    }
    if (tabId === 'venue') {
      scrollToSection('venue-details-section', 'venue');
      return;
    }
    if (tabId === 'prep') {
      scrollToSection('checklist-section', 'prep');
      return;
    }
    if (tabId === 'faq') {
      scrollToSection('faq-section', 'faq');
      return;
    }
    // 'discover' — scroll to top
    setActiveSection(null);
    setActiveTab('discover');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand Logo */}
        <div className="brand" onClick={() => handleNavClick('discover')}>
          <div className="brand-icon">
            <img src={`${import.meta.env.BASE_URL}aws-cloud-club-logo.png`} alt="AWS Cloud Club Logo" className="navbar-brand-img" />
          </div>
          <div className="brand-text">
            <span className="brand-title">AWS Cloud Club</span>
            <span className="brand-sub">IGDTUW Community Day</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${currentNav === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="header-actions">
          {savedPass ? (
            <button className="btn btn-secondary btn-sm pass-btn" onClick={onOpenPass}>
              <CheckCircle size={16} className="text-green" />
              <span>View My Ticket</span>
            </button>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={onOpenRegister}>
              <Ticket size={16} />
              <span>Register Free</span>
            </button>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-link ${currentNav === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
            <div className="mobile-drawer-cta">
              {savedPass ? (
                <button className="btn btn-secondary w-full" onClick={() => { onOpenPass(); setMobileMenuOpen(false); }}>
                  <CheckCircle size={16} />
                  <span>View My Ticket</span>
                </button>
              ) : (
                <button className="btn btn-primary w-full" onClick={() => { onOpenRegister(); setMobileMenuOpen(false); }}>
                  <Ticket size={16} />
                  <span>Register Free</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
