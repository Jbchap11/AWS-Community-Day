<div align="center">

# ☁️ AWS Student Community Day 2026
### *Ignite the Cloud. Empower the Future.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://aws-community-day-iota.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailored for IGDTUW](https://img.shields.io/badge/AWS%20Cloud%20Club-IGDTUW-FF9900?style=for-the-badge&logo=amazon-aws)](https://aws.amazon.com/)

An interactive, high-performance event web application crafted for **AWS Cloud Club IGDTUW Student Community Day 2026** at Indira Gandhi Delhi Technical University for Women.

[Explore Live Demo](https://aws-community-day-iota.vercel.app/) · [Report Bug](https://github.com/Jbchap11/AWS-Community-Day/issues) · [Request Feature](https://github.com/Jbchap11/AWS-Community-Day/issues)

</div>

---

## 📖 Overview

The **AWS Student Community Day 2026** portal is a modern single-page event experience built to connect students, developers, and cloud enthusiasts. It provides an intuitive interface for exploring event agendas, discovering speaker lineups, generating digital passes, exploring career paths, and navigating the IGDTUW campus venue.

Designed with an AWS-inspired dark theme, dynamic lighting, and interactive micro-interactions (including ambient floating clouds, paper planes, and twinkling celestial stars).

---

## ✨ Key Features

### ⏱️ 1. Dynamic Hero & Live Countdown
- Real-time precision countdown ticker ticking down to the event launch.
- Quick-action buttons for registration, schedule preview, and community links.
- Responsive glassmorphism cards and high-contrast typography.

### 🧭 2. Student Experience & Interactive PathFinder
- Tailored tracks for students: **Generative AI & LLMs**, **Cloud Architecture**, and **DevOps & Security**.
- **Interactive Student PathFinder**: Recommends personalized session tracks based on attendee interests and skill level.
- Perks overview highlighting hands-on labs, AWS credits, swag, and networking.

### 📅 3. Schedule & Session Explorer
- Filterable agenda allowing attendees to search and slice talks by track, time, and difficulty level.
- Detailed modal popup for every session featuring abstract, prerequisites, and speaker details.

### 🎙️ 4. Keynote & Speaker Lineup
- Dedicated speaker profiles displaying their domain, bio, key talk topics, and social links (LinkedIn, GitHub, Twitter).
- Interactive modals offering deeper insights into speaker backgrounds.

### 🎫 5. Digital Student Pass Generator
- Dynamic pass generator allowing students to preview and customize their event pass with their name and tech interest.
- Formatted as a sleek collectible badge with quick registration access.

### 📍 6. Venue & Campus Navigation Guide
- Focused navigation guide for the **Main Auditorium** at IGDTUW, Kashmere Gate, New Delhi.
- Detailed metro transit guide with exit gate tips (Gate No. 7 - Violet / Red / Yellow lines) and cab drop points.

### 🧳 7. Pre-Event Checklist & FAQs
- Practical checklist for attendees (Student ID, laptops, resumes, chargers).
- Interactive accordion FAQ answering queries regarding entry, food, certificates, and eligibility.

### 🎨 8. Thematic Visual Accents & Micro-Animations
- **Student Experience**: Ambient floating cloud layers.
- **Venue Guide**: Gliding ambient paper planes lurking in the background.
- **Contact & Queries**: Floating, twinkling celestial stars with warm amber and icy cyan glows.
- Interaction-safe styling (`pointer-events: none`) ensuring all buttons and text remain effortlessly interactive.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting & Code Quality**: [Oxlint](https://oxc.rs/)
- **Styling**: Pure Modular CSS with Glassmorphism, CSS Variables, and CSS3 Keyframe Animations
- **Hosting**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```bash
AWS-Community-Day/
├── public/                     # Static assets and icons
├── src/
│   ├── components/             # Reusable UI sections & modals
│   │   ├── ContactQueriesSection.jsx # Contact portal with floating stars
│   │   ├── CountdownSection.jsx      # Countdown timer & CTA
│   │   ├── CurvedDivider.jsx         # Section transition dividers
│   │   ├── FaqSection.jsx            # Interactive accordion FAQ
│   │   ├── FloatingClouds.jsx        # Floating ambient clouds component
│   │   ├── FloatingStars.jsx         # Ambient twinkling & drifting stars
│   │   ├── Footer.jsx                # Footer with author & club credits
│   │   ├── HeroSection.jsx           # Main event landing hero
│   │   ├── Navbar.jsx                # Responsive sticky navigation bar
│   │   ├── OrganizingTeamSection.jsx # Core team and student leads
│   │   ├── PreEventChecklistSection.jsx # Attendee essentials
│   │   ├── RegistrationModal.jsx     # Full event registration modal
│   │   ├── SessionModal.jsx          # Session deep dive modal
│   │   ├── SessionsView.jsx          # Agenda view & filterable talks
│   │   ├── SpeakerModal.jsx          # Speaker profile modal
│   │   ├── SpeakersView.jsx          # Speaker roster
│   │   ├── SponsorsSection.jsx       # Event sponsors & community partners
│   │   ├── StudentExperience.jsx     # Student perks & benefits
│   │   ├── StudentPassModal.jsx      # Customizable digital badge generator
│   │   ├── StudentPathFinder.jsx     # Quiz-like track recommender
│   │   └── VenueDetailsSection.jsx   # Venue guide with paper planes
│   ├── data/
│   │   └── mockData.js               # Event metadata, agenda, and speakers
│   ├── App.jsx                       # Root application component
│   ├── index.css                     # Global styles, variables & themes
│   └── main.jsx                      # Vite entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jbchap11/AWS-Community-Day.git
   cd AWS-Community-Day
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` directory. |
| `npm run lint` | Runs `oxlint` to scan for code quality and syntax issues. |
| `npm run preview` | Locally serves the production build for testing. |

---

## 🌐 Deployment

The application is configured for seamless deployment on **Vercel**:
- Production build command: `npm run build`
- Output directory: `dist`
- Production URL: [https://aws-community-day-iota.vercel.app/](https://aws-community-day-iota.vercel.app/)

---

## 👩‍💻 Credits & Acknowledgments

- **Created & Designed by**: [Jiah Bhola](https://github.com/Jbchap11)
- **Organized for**: **AWS Cloud Club IGDTUW** (Student Community Day 2026)
- **Venue**: Indira Gandhi Delhi Technical University for Women (IGDTUW), Kashmere Gate, New Delhi.

---

<div align="center">
  <sub>Made with ❤️ for the AWS Student Developer Community.</sub>
</div>
