import React from 'react';
import { Cloud } from 'lucide-react';
import './FloatingClouds.css';

export default function FloatingClouds({ count = 12, theme = 'cyan' }) {
  const clouds = [
    { top: '8%', left: '4%', size: 48, duration: 16, delay: 0, opacity: 0.35 },
    { top: '15%', right: '7%', size: 56, duration: 21, delay: 2, opacity: 0.38 },
    { top: '25%', left: '16%', size: 36, duration: 19, delay: 1, opacity: 0.30 },
    { top: '32%', right: '22%', size: 42, duration: 25, delay: 4, opacity: 0.32 },
    { top: '44%', left: '2%', size: 64, duration: 23, delay: 3, opacity: 0.28 },
    { top: '52%', right: '4%', size: 50, duration: 18, delay: 0.5, opacity: 0.36 },
    { top: '62%', left: '12%', size: 40, duration: 22, delay: 2.5, opacity: 0.34 },
    { top: '70%', right: '16%', size: 58, duration: 26, delay: 5, opacity: 0.30 },
    { top: '80%', left: '5%', size: 46, duration: 20, delay: 1.5, opacity: 0.35 },
    { top: '86%', right: '8%', size: 52, duration: 24, delay: 3.5, opacity: 0.32 },
    { top: '20%', left: '42%', size: 32, duration: 27, delay: 6, opacity: 0.28 },
    { top: '75%', left: '48%', size: 38, duration: 23, delay: 4.5, opacity: 0.30 },
    { top: '92%', left: '26%', size: 44, duration: 19, delay: 2, opacity: 0.26 },
    { top: '40%', right: '38%', size: 34, duration: 25, delay: 3, opacity: 0.25 },
  ];

  return (
    <div className={`floating-clouds-container theme-${theme}`} aria-hidden="true">
      {clouds.slice(0, count).map((cloud, idx) => (
        <div
          key={idx}
          className={`floating-cloud-item cloud-anim-${idx % 4}`}
          style={{
            top: cloud.top,
            left: cloud.left,
            right: cloud.right,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
            opacity: cloud.opacity,
          }}
        >
          <Cloud
            size={cloud.size}
            className="cloud-svg"
            strokeWidth={1.6}
          />
        </div>
      ))}
    </div>
  );
}
