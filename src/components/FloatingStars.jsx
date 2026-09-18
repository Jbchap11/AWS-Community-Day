import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import './FloatingStars.css';

// 4-point celestial star SVG component
function CelestialStar({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1L14.6 9.4L23 12L14.6 14.6L12 23L9.4 14.6L1 12L9.4 9.4L12 1Z" />
    </svg>
  );
}

export default function FloatingStars({ count = 16 }) {
  const starsData = [
    { top: '8%', left: '5%', size: 24, type: 'celestial', color: 'gold', anim: 'star-anim-1', duration: 7, delay: 0 },
    { top: '12%', right: '8%', size: 26, type: 'sparkle', color: 'cyan', anim: 'star-anim-2', duration: 9, delay: 1.2 },
    { top: '24%', left: '12%', size: 18, type: 'star', color: 'amber', anim: 'star-anim-3', duration: 8, delay: 2.5 },
    { top: '20%', right: '18%', size: 22, type: 'celestial', color: 'gold', anim: 'star-anim-1', duration: 10, delay: 0.8 },
    { top: '42%', left: '4%', size: 28, type: 'sparkle', color: 'cyan', anim: 'star-anim-2', duration: 11, delay: 3 },
    { top: '50%', right: '5%', size: 24, type: 'star', color: 'amber', anim: 'star-anim-3', duration: 8.5, delay: 1.5 },
    { top: '65%', left: '8%', size: 20, type: 'celestial', color: 'gold', anim: 'star-anim-1', duration: 9.5, delay: 2.2 },
    { top: '74%', right: '12%', size: 30, type: 'sparkle', color: 'cyan', anim: 'star-anim-2', duration: 12, delay: 0.5 },
    { top: '84%', left: '15%', size: 22, type: 'star', color: 'amber', anim: 'star-anim-3', duration: 8, delay: 3.2 },
    { top: '88%', right: '22%', size: 16, type: 'celestial', color: 'gold', anim: 'star-anim-1', duration: 7.5, delay: 1.8 },
    { top: '15%', left: '44%', size: 18, type: 'sparkle', color: 'cyan', anim: 'star-anim-2', duration: 10.5, delay: 4 },
    { top: '82%', left: '40%', size: 20, type: 'star', color: 'purple', anim: 'star-anim-3', duration: 9, delay: 2.8 },
    { top: '32%', right: '32%', size: 15, type: 'celestial', color: 'gold', anim: 'star-anim-1', duration: 7, delay: 1 },
    { top: '60%', left: '28%', size: 17, type: 'sparkle', color: 'amber', anim: 'star-anim-2', duration: 11.5, delay: 2 },
    { top: '36%', left: '2%', size: 22, type: 'star', color: 'purple', anim: 'star-anim-3', duration: 8.2, delay: 1.1 },
    { top: '68%', right: '28%', size: 19, type: 'celestial', color: 'cyan', anim: 'star-anim-1', duration: 9.8, delay: 3.6 },
  ];

  return (
    <div className="floating-stars-container" aria-hidden="true">
      {starsData.slice(0, count).map((star, idx) => (
        <div
          key={idx}
          className={`floating-star-item ${star.anim} star-color-${star.color}`}
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        >
          {star.type === 'sparkle' ? (
            <Sparkles size={star.size} className="star-svg" />
          ) : star.type === 'celestial' ? (
            <CelestialStar size={star.size} className="star-svg celestial-svg" />
          ) : (
            <Star size={star.size} className="star-svg regular-star-svg" strokeWidth={1.75} />
          )}
        </div>
      ))}
    </div>
  );
}
