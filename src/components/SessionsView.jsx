import React, { useState } from 'react';
import { SESSIONS, TRACKS, LEVELS } from '../data/mockData';
import { Search, Filter, Bookmark, BookmarkCheck, Clock, MapPin, ChevronRight, Layers, Cpu, Zap, Award, Cloud, X, Sparkles } from 'lucide-react';
import './SessionsView.css';

export default function SessionsView({
  selectedTrack,
  setSelectedTrack,
  bookmarkedSessionIds,
  onToggleBookmark,
  onOpenSessionModal,
}) {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  // Icon mapping helper
  const renderTrackIcon = (iconName) => {
    switch (iconName) {
      case 'Cloud': return <Cloud size={16} />;
      case 'Cpu': return <Cpu size={16} />;
      case 'Zap': return <Zap size={16} />;
      case 'Award': return <Award size={16} />;
      default: return <Layers size={16} />;
    }
  };

  // Filter logic
  const filteredSessions = SESSIONS.filter((session) => {
    // Track filter
    if (selectedTrack !== 'all' && session.track !== selectedTrack) return false;
    // Level filter
    if (selectedLevel !== 'all' && session.level !== selectedLevel) return false;
    // Bookmark filter
    if (showBookmarksOnly && !bookmarkedSessionIds.includes(session.id)) return false;
    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = session.title.toLowerCase().includes(q);
      const matchSpeaker = session.speakerName.toLowerCase().includes(q);
      const matchDesc = session.description.toLowerCase().includes(q);
      if (!matchTitle && !matchSpeaker && !matchDesc) return false;
    }
    return true;
  });

  return (
    <section className="sessions-page section-theme-schedule" id="explore-sessions">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Explore Sessions & Hands-on Workshops</h2>
        <p className="section-subtitle">
          Browse through expert sessions, filter by your skill level, and build your personalized event schedule.
        </p>
      </div>

      {/* Control Panel: Search & Filters */}
      <div className="sessions-control-panel glass-card">
        {/* Search Bar */}
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search sessions by topic, keyword, or speaker..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
              <X size={16} />
            </button>
          )}
        </div>

        {/* Track Filter Pills */}
        <div className="track-filter-pills">
          {TRACKS.map((track) => (
            <button
              key={track.id}
              className={`track-pill ${selectedTrack === track.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedTrack(track.id);
                setSelectedLevel('all');
              }}
            >
              {renderTrackIcon(track.icon)}
              <span>{track.name}</span>
            </button>
          ))}
        </div>

        {/* Student Audience & Skill Filters */}
        <div className="sub-filters-row">
          <div className="level-filter-container">
            <div className="level-filter-header">
              <span className="filter-label">Filter by Attendee Profile:</span>
              <button
                className={`bookmark-toggle-btn ${showBookmarksOnly ? 'active' : ''}`}
                onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
              >
                {showBookmarksOnly ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                <span>My Bookmarked Agenda ({bookmarkedSessionIds.length})</span>
              </button>
            </div>

            <div className="level-pills-row">
              {LEVELS.map((lvl) => {
                const isActive = selectedLevel === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    className={`level-pill-btn ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedLevel(lvl.id);
                      setSelectedTrack('all');
                    }}
                  >
                    <span>{lvl.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Sessions Timeline & Grid */}
      <div className="sessions-grid">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => {
            const isBookmarked = bookmarkedSessionIds.includes(session.id);
            return (
              <div key={session.id} className="session-card glass-card">
                <div className="session-card-header">
                  <div className="session-time-badge">
                    <Clock size={14} className="text-icy" />
                    <span>{session.time}</span>
                  </div>

                  <div className="session-badges">
                    {session.isWorkshop && (
                      <span className="badge badge-workshop">
                        <Sparkles size={11} />
                        <span>Hands-on Workshop</span>
                      </span>
                    )}
                    <span className={`badge badge-level-${session.level.toLowerCase()}`}>
                      {session.levelLabel || session.level}
                    </span>
                    <button
                      className={`bookmark-card-btn ${isBookmarked ? 'saved' : ''}`}
                      onClick={() => onToggleBookmark(session.id)}
                      title={isBookmarked ? 'Remove from My Schedule' : 'Save to My Schedule'}
                    >
                      {isBookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                    </button>
                  </div>
                </div>

                <h3 className="session-card-title">{session.title}</h3>
                <p className="session-card-desc">{session.description}</p>

                <div className="session-card-footer">
                  <div className="speaker-info">
                    <div className="speaker-avatar-ph">
                      {session.speakerName.charAt(0)}
                    </div>
                    <div>
                      <span className="speaker-name">{session.speakerName}</span>
                      <span className="speaker-role">{session.speakerRole}</span>
                    </div>
                  </div>

                  <div className="session-card-actions">
                    <span className="session-location">
                      <MapPin size={14} /> {session.location}
                    </span>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => onOpenSessionModal(session)}
                    >
                      <span>Details</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-state-card glass-card">
            <Filter size={36} className="text-slate-muted mb-2" />
            <h3>No Sessions Found</h3>
            <p>Try clearing your search query or track filters to view all sessions.</p>
            <button
              className="btn btn-secondary btn-sm mt-3"
              onClick={() => {
                setSelectedTrack('all');
                setSelectedLevel('all');
                setSearchQuery('');
                setShowBookmarksOnly(false);
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
