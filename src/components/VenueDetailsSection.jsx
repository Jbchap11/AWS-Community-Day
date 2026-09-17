import React from 'react';
import { EVENT_DETAILS } from '../data/mockData';
import { MapPin, Navigation, ShieldCheck, ExternalLink, Send } from 'lucide-react';
import './VenueDetailsSection.css';

export default function VenueDetailsSection() {
  return (
    <section className="venue-details-section" id="venue-details-section">
      {/* Background Floating Paper Planes Lurking Around */}
      <div className="paper-planes-bg" aria-hidden="true">
        <div className="paper-plane-item plane-1">
          <Send size={20} className="plane-icon" />
        </div>
        <div className="paper-plane-item plane-2">
          <Send size={26} className="plane-icon" />
        </div>
        <div className="paper-plane-item plane-3">
          <Send size={18} className="plane-icon" />
        </div>
        <div className="paper-plane-item plane-4">
          <Send size={24} className="plane-icon" />
        </div>
        <div className="paper-plane-item plane-5">
          <Send size={16} className="plane-icon" />
        </div>
        <div className="paper-plane-item plane-6">
          <Send size={22} className="plane-icon" />
        </div>
        <div className="paper-plane-item plane-7">
          <Send size={19} className="plane-icon" />
        </div>
      </div>

      <div className="section-inner">
        <div className="section-header text-center">
          <h2 className="section-title">Venue & Location Guide</h2>
          <p className="section-subtitle">
            Find your way to the IGDTUW campus easily via metro or road, and locate the Main Auditorium.
          </p>
        </div>

        <div className="venue-grid-layout">
          {/* Left Column: Campus Info Cards */}
          <div className="venue-info-box glass-card">
            <div className="venue-detail-row">
              <div className="venue-icon-box text-orange">
                <MapPin size={22} />
              </div>
              <div className="venue-row-content">
                <h3>Event Location</h3>
                <p className="venue-main-text">Main Auditorium</p>
                <p className="venue-sub-text">Indira Gandhi Delhi Technical University for Women, Kashmere Gate, New Delhi - 110006</p>
              </div>
            </div>

            <div className="venue-detail-row">
              <div className="venue-icon-box text-icy">
                <Navigation size={22} />
              </div>
              <div className="venue-row-content">
                <h3>Nearest Metro Station</h3>
                <p className="venue-main-text">{EVENT_DETAILS.metroStation}</p>
                <p className="venue-sub-text">Interchange station for Red, Yellow & Violet lines. Exit from Gate No. 7 for direct walking access.</p>
              </div>
            </div>

            <div className="venue-detail-row">
              <div className="venue-icon-box text-green">
                <ShieldCheck size={22} />
              </div>
              <div className="venue-row-content">
                <h3>Campus Entry Security Gate</h3>
                <p className="venue-main-text">Main Security Gate No. 1</p>
                <p className="venue-sub-text">Show your digital Registration Pass and valid College Student ID card for immediate entry.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Map Embed */}
          <div className="venue-map-card glass-card">
            <div className="map-header-row">
              <span className="map-title-label">Live Campus Location</span>
              <a
                href="https://maps.google.com/?q=Indira+Gandhi+Delhi+Technical+University+for+Women+Kashmere+Gate+Delhi"
                target="_blank"
                rel="noreferrer"
                className="map-open-btn"
                title="Open in Google Maps"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
            <div className="map-frame-wrapper">
              <iframe
                title="IGDTUW Campus Location Map"
                src="https://maps.google.com/maps?q=Indira%20Gandhi%20Delhi%20Technical%20University%20for%20Women%2C%20Kashmere%20Gate%2C%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
