import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import StudentExperience from './components/StudentExperience';
import SessionsView from './components/SessionsView';
import SpeakersView from './components/SpeakersView';
import VenueDetailsSection from './components/VenueDetailsSection';
import PreEventChecklistSection from './components/PreEventChecklistSection';
import OrganizingTeamSection from './components/OrganizingTeamSection';
import SponsorsSection from './components/SponsorsSection';
import FaqSection from './components/FaqSection';
import ContactQueriesSection from './components/ContactQueriesSection';
import Footer from './components/Footer';

import RegistrationModal from './components/RegistrationModal';
import SessionModal from './components/SessionModal';
import SpeakerModal from './components/SpeakerModal';
import StudentPassModal from './components/StudentPassModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedTrack, setSelectedTrack] = useState('all');

  // Bookmarking state with LocalStorage persistence
  const [bookmarkedSessionIds, setBookmarkedSessionIds] = useState(() => {
    try {
      const saved = localStorage.getItem('aws_scd_bookmarks');
      return saved ? JSON.parse(saved) : [101, 105];
    } catch {
      return [101, 105];
    }
  });

  // Saved Registration Pass state with LocalStorage persistence
  const [savedPass, setSavedPass] = useState(() => {
    try {
      const saved = localStorage.getItem('aws_scd_pass');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Modal States
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isPassOpen, setIsPassOpen] = useState(false);
  const [activeSessionModal, setActiveSessionModal] = useState(null);
  const [activeSpeakerModal, setActiveSpeakerModal] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('aws_scd_bookmarks', JSON.stringify(bookmarkedSessionIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedSessionIds]);

  const toggleBookmark = (id) => {
    setBookmarkedSessionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRegisterSuccess = (passDetails) => {
    setSavedPass(passDetails);
    try {
      localStorage.setItem('aws_scd_pass', JSON.stringify(passDetails));
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div className="app-container">
      {/* Top Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenRegister={() => setIsRegisterOpen(true)}
        savedPass={savedPass}
        onOpenPass={() => setIsPassOpen(true)}
      />

      {/* Main Body View Switching */}
      <main className="main-content">
        {activeTab === 'discover' && (
          <>
            <HeroSection
              onExploreSessions={() => {
                const el = document.getElementById('explore-sessions');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            <CountdownSection />

            <StudentExperience />

            <SessionsView
              selectedTrack={selectedTrack}
              setSelectedTrack={setSelectedTrack}
              bookmarkedSessionIds={bookmarkedSessionIds}
              onToggleBookmark={toggleBookmark}
              onOpenSessionModal={(session) => setActiveSessionModal(session)}
            />

            <SpeakersView onSelectSpeaker={(speaker) => setActiveSpeakerModal(speaker)} />

            <VenueDetailsSection />

            <PreEventChecklistSection />

            <OrganizingTeamSection />

            <SponsorsSection />

            <FaqSection />

            <ContactQueriesSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Interactive Modals */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegisterSuccess={handleRegisterSuccess}
      />

      <StudentPassModal
        pass={savedPass}
        isOpen={isPassOpen}
        onClose={() => setIsPassOpen(false)}
      />

      <SessionModal
        session={activeSessionModal}
        isOpen={!!activeSessionModal}
        onClose={() => setActiveSessionModal(null)}
        isBookmarked={activeSessionModal ? bookmarkedSessionIds.includes(activeSessionModal.id) : false}
        onToggleBookmark={toggleBookmark}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      <SpeakerModal
        speaker={activeSpeakerModal}
        isOpen={!!activeSpeakerModal}
        onClose={() => setActiveSpeakerModal(null)}
      />
    </div>
  );
}
