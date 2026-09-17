export const EVENT_DETAILS = {
  title: "AWS Student Community Day 2026",
  subtitle: "Empowering Next-Gen Cloud Innovators & Developers",
  organizer: "AWS Cloud Club, IGDTUW",
  institution: "Indira Gandhi Delhi Technical University for Women",
  date: "10th Nov 2026",
  isoDate: "2026-11-10T10:30:00+05:30",
  registrationDeadline: "Registration closes on 31st October",
  time: "10:30 AM – 5:00 PM IST",
  venue: "Main Auditorium, IGDTUW Campus, Kashmere Gate, New Delhi",
  metroStation: "Kashmere Gate Metro Station (Gate No. 7 - 5 min walk)",
  stats: {
    students: "250+",
    speakers: "8+",
    sessions: "6",
    labs: "2",
  },
};

export const TRACKS = [
  { id: "all", name: "All Tracks", icon: "Layers" },
  { id: "foundations", name: "Cloud Foundations", icon: "Cloud" },
  { id: "aiml", name: "AI & ML on AWS", icon: "Cpu" },
  { id: "serverless", name: "Serverless & DevOps", icon: "Zap" },
  { id: "career", name: "Careers & Certifications", icon: "Award" },
];

export const LEVELS = [
  {
    id: "all",
    name: "All Sessions",
    tagline: "View Complete Agenda",
    description: "Browse all keynotes, technical sessions, and hands-on labs.",
  },
  {
    id: "beginner",
    name: "1st & 2nd Year Beginner",
    tagline: "New to Cloud? Start here!",
    description: "Explore cloud fundamentals and beginner-friendly AWS sessions.",
  },
  {
    id: "aiml",
    name: "AI/ML Enthusiast",
    tagline: "Exploring Generative AI & Cloud ML",
    description: "Discover sessions on AI, machine learning, and Amazon Bedrock.",
  },
  {
    id: "devops",
    name: "Developer / DevOps Fan",
    tagline: "Hands-on Code & Infrastructure",
    description: "Find workshops on building, deploying, and working with cloud infrastructure.",
  },
  {
    id: "career",
    name: "Job & Cert Seeker",
    tagline: "Preparing for Internships & Industry",
    description: "Explore career talks, AWS certifications, and industry insights.",
  },
];

export const STUDENT_PERSONAS = [
  {
    id: "beginner",
    title: "1st & 2nd Year Beginner",
    tagline: "New to Cloud? Start here!",
    description: "Explore cloud fundamentals and beginner-friendly AWS sessions.",
    recommendedTrack: "foundations",
    recommendedSessions: [101, 102],
  },
  {
    id: "aiml",
    title: "AI/ML Enthusiast",
    tagline: "Exploring Generative AI & Cloud ML",
    description: "Discover sessions on AI, machine learning, and Amazon Bedrock.",
    recommendedTrack: "aiml",
    recommendedSessions: [103],
  },
  {
    id: "dev",
    title: "Developer / DevOps Fan",
    tagline: "Hands-on Code & Infrastructure",
    description: "Find workshops on building, deploying, and working with cloud infrastructure.",
    recommendedTrack: "serverless",
    recommendedSessions: [104, 105],
  },
  {
    id: "career",
    title: "Job & Cert Seeker",
    tagline: "Preparing for Internships & Industry",
    description: "Explore career talks, AWS certifications, and industry insights.",
    recommendedTrack: "career",
    recommendedSessions: [106],
  },
];

export const SPEAKERS = [
  {
    id: "sp1",
    name: "Dr. Ananya Sharma",
    role: "Senior Solutions Architect",
    company: "Amazon Web Services (AWS)",
    bio: "AWS Architect with 10+ years helping enterprises scale serverless and cloud-native applications. Passionate about mentoring women in tech.",
    topic: "Cloud Foundations & Resilient Systems",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=85",
    imagePosition: "center 20%",
    linkedin: "https://www.linkedin.com/in/ananya-sharma-aws",
    portfolio: "https://github.com/ananya-cloud-arch",
    tag: "AWS Keynote Speaker",
  },
  {
    id: "sp2",
    name: "Rohan Verma",
    role: "AWS Community Builder & AI Lead",
    company: "CloudNative Labs",
    bio: "AI researcher focusing on Generative AI deployment. Contributor to open-source LLM tooling and cloud AI pipelines.",
    topic: "Generative AI & Amazon Bedrock",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=85",
    imagePosition: "center 15%",
    linkedin: "https://www.linkedin.com/in/rohan-verma-ai",
    portfolio: "https://github.com/rohan-bedrock-labs",
    tag: "Community Builder",
  },
  {
    id: "sp3",
    name: "Priya Sundaram",
    role: "Cloud DevOps Engineer",
    company: "Deloitte Digital",
    bio: "IGDTUW Alumna ('22). Specializes in Infrastructure as Code (Terraform, AWS CDK) and Kubernetes automation.",
    topic: "Campus to Cloud Careers & Certifications",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=85",
    imagePosition: "center 20%",
    linkedin: "https://www.linkedin.com/in/priya-sundaram-cloud",
    portfolio: "https://priyasundaram.dev",
    tag: "IGDTUW Alumna",
  },
  {
    id: "sp4",
    name: "Kabir Malhotra",
    role: "AWS User Group Leader",
    company: "Delhi Cloud User Group",
    bio: "Passionate community organizer who has hosted 40+ cloud meetups. Dedicated to helping students land cloud roles.",
    topic: "Cloud Security, S3 & IAM Architecture",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=85",
    imagePosition: "center 15%",
    linkedin: "https://www.linkedin.com/in/kabir-malhotra-aws",
    portfolio: "https://github.com/kabir-delhi-cloud",
    tag: "User Group Lead",
  },
  {
    id: "sp5",
    name: "Sneha Gupta",
    role: "AWS Cloud Captain & Student Lead",
    company: "AWS Cloud Club IGDTUW",
    bio: "Final year CS student at IGDTUW. AWS Certified Solutions Architect Associate and Cloud Captain.",
    topic: "Hands-on Full-Stack Deployments on AWS",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=85",
    imagePosition: "center 20%",
    linkedin: "https://www.linkedin.com/in/sneha-gupta-cloud",
    portfolio: "https://snehagupta.tech",
    tag: "Cloud Captain",
  },
  {
    id: "sp6",
    name: "Arjun Mehta",
    role: "Staff DevOps Engineer",
    company: "Razorpay",
    bio: "Kubernetes and CI/CD specialist with deep expertise in AWS ECS, Docker, and GitOps automation pipelines.",
    topic: "CI/CD & Containerization on AWS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=85",
    imagePosition: "center 20%",
    linkedin: "https://www.linkedin.com/in/arjun-mehta-devops",
    portfolio: "https://github.com/arjun-razorpay-infra",
    tag: "Industry Mentor",
  },
  {
    id: "sp7",
    name: "Meera Krishnan",
    role: "Machine Learning Specialist",
    company: "AWS AI Labs",
    bio: "ML engineer building RAG architectures and multi-agent systems using Amazon SageMaker and Bedrock.",
    topic: "RAG & LLM Agents on AWS",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=85",
    imagePosition: "center 18%",
    linkedin: "https://www.linkedin.com/in/meera-krishnan-ml",
    portfolio: "https://github.com/meera-ai-labs",
    tag: "AI Specialist",
  },
];

export const SESSIONS = [
  {
    id: 101,
    time: "10:30 AM - 11:15 AM",
    title: "Opening Keynote: Cloud 101 & Opportunities for Student Developers",
    speakerId: "sp1",
    speakerName: "Dr. Ananya Sharma",
    speakerRole: "Senior Solutions Architect, AWS",
    track: "foundations",
    level: "beginner",
    levelLabel: "1st & 2nd Year Beginner",
    isWorkshop: false,
    location: "Main Auditorium",
    description: "Kick off Student Community Day! Learn why cloud literacy gives college students an unmatched edge in internships, tech placements, and open-source innovations.",
    takeaways: [
      "Overview of AWS global cloud infrastructure & services",
      "How to access AWS Academy free learning credits",
      "First steps to becoming a certified student cloud practitioner"
    ],
    prerequisites: "None - Open to all students",
  },
  {
    id: 102,
    time: "11:15 AM - 12:45 PM",
    title: "Hands-on Workshop: Build Your First GenAI App with Amazon Bedrock",
    speakerId: "sp2",
    speakerName: "Rohan Verma",
    speakerRole: "AWS Community Builder & AI Lead",
    track: "aiml",
    level: "aiml",
    levelLabel: "AI/ML Enthusiast",
    isWorkshop: true,
    location: "Main Auditorium",
    description: "Bring your laptop! In this live hands-on workshop, you'll connect Claude 3.5 Sonnet and Titan via Amazon Bedrock APIs to build an AI-powered college study assistant.",
    takeaways: [
      "Zero to live working GenAI assistant running in React/Python",
      "Prompt engineering and temperature tuning techniques",
      "Handling streaming responses and token budget management"
    ],
    prerequisites: "Laptop with Wi-Fi & basic Python or JavaScript knowledge",
  },
  {
    id: 103,
    time: "12:45 PM - 01:30 PM",
    title: "Decoding the AI Stack: SageMaker, Vector Databases & RAG Architecture",
    speakerId: "sp7",
    speakerName: "Meera Krishnan",
    speakerRole: "Machine Learning Specialist, AWS AI Labs",
    track: "aiml",
    level: "aiml",
    levelLabel: "AI/ML Enthusiast",
    isWorkshop: false,
    location: "Main Auditorium",
    description: "Deep dive into Retrieval-Augmented Generation (RAG). Learn how to ingest your college lecture notes into OpenSearch vector databases to power intelligent question-answering.",
    takeaways: [
      "Fundamentals of embeddings and vector similarity search",
      "Architecting production-grade RAG systems on AWS",
      "Mitigating hallucinations in conversational AI models"
    ],
    prerequisites: "Familiarity with basic AI or data concepts",
  },
  {
    id: 104,
    time: "01:30 PM - 03:00 PM",
    title: "Hands-on Lab: Deploy a Full-Stack React & Serverless App with AWS Amplify",
    speakerId: "sp5",
    speakerName: "Sneha Gupta",
    speakerRole: "AWS Cloud Captain, IGDTUW",
    track: "serverless",
    level: "devops",
    levelLabel: "Developer / DevOps Fan",
    isWorkshop: true,
    location: "Main Auditorium",
    description: "Build and deploy a full-stack web application with user authentication (Cognito), NoSQL database (DynamoDB), and global CDN hosting in under 90 minutes.",
    takeaways: [
      "Deploy a live web app with a custom SSL domain on AWS Amplify",
      "Add email authentication and login gates in 5 lines of code",
      "Connect serverless GraphQL / DynamoDB storage for live user data"
    ],
    prerequisites: "Laptop with Node.js installed & active AWS Free Tier account",
  },
  {
    id: 105,
    time: "03:00 PM - 04:00 PM",
    title: "AWS Certification Playbook: Passing Cloud Practitioner & Solutions Architect",
    speakerId: "sp3",
    speakerName: "Priya Sundaram",
    speakerRole: "Cloud DevOps Engineer, Deloitte (IGDTUW '22)",
    track: "career",
    level: "career",
    levelLabel: "Job & Cert Seeker",
    isWorkshop: false,
    location: "Auditorium Hall B",
    description: "Hear directly from an IGDTUW alumna! Learn which certification exams matter most, the exact study materials to use, and how to get 50% student discount vouchers.",
    takeaways: [
      "Cloud Practitioner vs. Solutions Architect: where to begin?",
      "Free mock exams, study cheat sheets, and hands-on labs",
      "How to access student discount vouchers and exam registration tips"
    ],
    prerequisites: "Open to all students from 1st to 4th year",
  },
  {
    id: 106,
    time: "04:00 PM - 05:00 PM",
    title: "Closing Session: Interactive Cloud Quiz, Swag Giveaways & Networking",
    speakerId: "sp5",
    speakerName: "AWS Cloud Club Team",
    speakerRole: "Organizing Committee, IGDTUW",
    track: "foundations",
    level: "beginner",
    levelLabel: "1st & 2nd Year Beginner",
    isWorkshop: false,
    location: "Main Auditorium",
    description: "End the day with an exciting live Kahoot cloud quiz! Win official AWS hoodies, t-shirts, and stickers, collect your Certificate of Attendance, and connect with mentors.",
    takeaways: [
      "Live trivia contest with exclusive AWS merchandise for winners",
      "Download official AWS Cloud Club Certificate of Attendance",
      "Open networking session with all speakers and industry mentors"
    ],
    prerequisites: "Open to all registered attendees",
  },
];

export const PREP_CHECKLIST = [
  { id: "aws_account", label: "Sign up for an AWS Free Tier Account", detail: "Required for the hands-on lab. Visit aws.amazon.com/free", critical: true },
  { id: "node_git", label: "Install Node.js (v18+) & Git on your laptop", detail: "Necessary if you plan to join the full-stack deployment workshop.", critical: true },
  { id: "college_id", label: "Bring your College Physical ID Card", detail: "Required at IGDTUW main gate entry for campus security check.", critical: true },
  { id: "laptop_charger", label: "Charge your laptop & bring your charger", detail: "Power outlets will be available at Lab 3.", critical: false },
  { id: "discord", label: "Join AWS Cloud Club IGDTUW Discord / WhatsApp Group", detail: "For live announcements, slide downloads, and networking.", critical: false },
];

export const FAQS = [
  {
    q: "Is AWS Student Community Day free to attend?",
    a: "Yes! The event is completely free of charge for all high school, undergraduate, and postgraduate students. However, registration is required as seats are limited to venue capacity."
  },
  {
    q: "Do I need prior AWS or cloud experience to attend?",
    a: "Not at all! We have curated dedicated 'Beginner (Level 100)' tracks and workshops designed specifically for students taking their first steps in cloud computing."
  },
  {
    q: "Will I get a participation certificate?",
    a: "Yes, all verified attendees who check in at the registration desk will receive an official AWS Cloud Club IGDTUW Certificate of Attendance."
  },
  {
    q: "What should I bring for the hands-on workshop?",
    a: "Bring a laptop with Wi-Fi capability, your charger, an active AWS Free Tier account, and your student physical ID card for gate verification."
  },
  {
    q: "Will food, lunch, and swag be provided?",
    a: "Yes! Complimented lunch, evening snacks, tea/coffee, and exclusive AWS Cloud Club swag bags (stickers, t-shirts, badges) will be provided for attendees."
  },
  {
    q: "How do I reach the IGDTUW campus?",
    a: "IGDTUW is located in Kashmere Gate, Delhi. The nearest metro station is Kashmere Gate Metro Station (Gate No. 7), which is a 5-minute walk from campus."
  }
];

export const SPONSORS = [
  {
    id: "aws",
    tier: "Title Sponsor",
    name: "Amazon Web Services (AWS)",
    logo: `${import.meta.env.BASE_URL}aws-logo.png`,
    website: "https://aws.amazon.com",
    color: "orange"
  },
  {
    id: "konfhub",
    tier: "Ticketing Sponsor",
    name: "KonfHub",
    logo: `${import.meta.env.BASE_URL}konfhub-logo.png`,
    website: "https://konfhub.com",
    color: "purple"
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Sneha Gupta",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Sneha&backgroundColor=ffdfbf"
  },
  {
    id: 2,
    name: "Ananya Verma",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Ananya&backgroundColor=b6e3f4"
  },
  {
    id: 3,
    name: "Riya Sharma",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Riya&backgroundColor=ffd5dc"
  },
  {
    id: 4,
    name: "Tanvi Malhotra",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Tanvi&backgroundColor=c0aede"
  },
  {
    id: 5,
    name: "Divya Patel",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Divya&backgroundColor=d1d4f9"
  },
  {
    id: 6,
    name: "Pooja Mehra",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Pooja&backgroundColor=ffdfbf"
  }
];
