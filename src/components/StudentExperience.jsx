import React from 'react';
import { Terminal, MessageSquare, Users, Gift, Award, ShieldCheck } from 'lucide-react';
import FloatingClouds from './FloatingClouds';
import './StudentExperience.css';

export default function StudentExperience() {
  const experiences = [
    {
      icon: <Terminal size={24} />,
      title: "Hands-on Cloud Labs",
      description: "Build and deploy real applications using AWS Amplify and Bedrock.",
      color: "orange"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Expert Talks",
      description: "Learn from industry professionals about cloud, AI, and emerging technologies.",
      color: "icy"
    },
    {
      icon: <Users size={24} />,
      title: "Networking & Mentorship",
      description: "Connect with speakers, fellow students, and AWS community members.",
      color: "icy"
    },
    {
      icon: <Gift size={24} />,
      title: "Free Lunch & Swag Kit",
      description: "Enjoy team networking lunches, evening snacks, and exclusive AWS Cloud Club merchandise.",
      color: "orange"
    },
    {
      icon: <Award size={24} />,
      title: "Official AWS Certificate",
      description: "Receive a Certificate of Attendance from AWS Cloud Club IGDTUW to recognize your participation and add to your LinkedIn profile.",
      color: "orange"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "1-on-1 Mentorship",
      description: "Get career guidance on AWS Certification vouchers, resume reviews, and internship prep.",
      color: "icy"
    }
  ];

  return (
    <section className="student-experience-section">
      <FloatingClouds theme="cyan" />
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">The Student Experience</h2>
          <p className="section-subtitle">
            Designed from the ground up for students to learn, build, connect, and launch their cloud journeys.
          </p>
        </div>

        <div className="experience-cards-grid">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-card glass-card">
              <div className={`exp-icon-box icon-${exp.color}`}>
                {exp.icon}
              </div>
              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
