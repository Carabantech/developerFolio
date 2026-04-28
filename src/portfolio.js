/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Sebastian Mauricio Carabante",
  title: "Hi, I'm Sebastian",
  subTitle: emoji(
    "Senior IT Manager & Technology Leader • 15+ years driving strategic IT initiatives across LATAM 🚀 | Project Management • Team Leadership • Digital Transformation | Delivering business value through technology at CME-Wakapi"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Carabantech",
  linkedin: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/",
  gmail: "carabante@outlook.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Leadership & Management",
  subTitle: "SENIOR IT MANAGEMENT & STRATEGIC TECHNOLOGY LEADERSHIP",
  skills: [
    emoji(
      "⚡ Lead cross-functional teams and manage IT operations across distributed international locations (Argentina, USA, Lebanon)"
    ),
    emoji("⚡ Drive strategic initiatives, budget planning, and vendor management with focus on business outcomes and ROI"),
    emoji(
      "⚡ Oversee digital transformation projects from conception to delivery, ensuring alignment with organizational goals"
    )
  ],

  softwareSkills: [
    {
      skillName: "Project Management",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "Team Leadership",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "Strategic Planning",
      fontAwesomeClassname: "fas fa-chess"
    },
    {
      skillName: "Budget Management",
      fontAwesomeClassname: "fas fa-dollar-sign"
    },
    {
      skillName: "Vendor Relations",
      fontAwesomeClassname: "fas fa-handshake"
    },
    {
      skillName: "AWS Cloud",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure Cloud",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "IT Operations",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Change Management",
      fontAwesomeClassname: "fas fa-sync-alt"
    },
    {
      skillName: "Agile/Scrum",
      fontAwesomeClassname: "fas fa-running"
    },
    {
      skillName: "Risk Management",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Stakeholder Management",
      fontAwesomeClassname: "fas fa-comments"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Fundacion Universitas",
      logo: "/fundaci_n_universitas_logo.jpg",
      subHeader: "Technical Degree in New Technology Administration",
      duration: "2021 - 2023",
      desc: "Mendoza, Argentina",
      descBullets: [
        "Advanced systems and infrastructure management",
        "Cloud technologies and digital transformation"
      ]
    },
    {
      schoolName: "Universidad de Belgrano",
      logo: "/iso2022.jpg",
      subHeader: "Lic. in Telecommunications *",
      duration: "1999 - 2003",
      desc: "Argentina",
      descBullets: ["Academic foundation in telecommunications and infrastructure"]
    },
    {
      schoolName: "Fundacion ADEN",
      logo: "/ADEN_PRINT_RGB5678.jpg",
      subHeader: "Diploma in Negotiation",
      duration: "2010",
      desc: "Mendoza, Argentina",
      descBullets: ["Leadership and vendor management skills"]
    }
  ]
};

// Tech Stack Proficiency

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Team Leadership & Management",
      progressPercentage: "95%"
    },
    {
      Stack: "Project & Program Management",
      progressPercentage: "90%"
    },
    {
      Stack: "Strategic IT Planning",
      progressPercentage: "88%"
    }
  ],
  displayCodersrank: false
};

// Work Experience

const workExperiences = {
  display: true,
  experience: [
    {
      role: "IT Manager Senior LATAM",
      company: "CME - Wakapi",
      companylogo: "/WAKlogo_3.jpg",
      date: "2018 - Present",
      desc: "Lead strategic IT initiatives and manage distributed teams across LATAM (Argentina, USA, Lebanon), driving digital transformation and operational excellence.",
      descBullets: [
        "Manage annual IT budget and technology roadmap, optimizing investments and reducing operational costs by 25%",
        "Direct cross-functional teams of 15+ professionals, fostering collaboration and driving performance improvements",
        "Lead vendor negotiations and strategic partnerships, achieving $150K+ in annual savings through optimized contracts",
        "Spearheaded CME Global Digital Collaboration Initiative, implementing AI-enabled conference rooms and improving team productivity by 30%"
      ]
    },
    {
      role: "IT Project Director",
      company: "Foptik S.A.",
      companylogo: "/fotik2.png",
      date: "2016 - 2018",
      desc: "Directed portfolio of strategic IT and telecommunications projects valued at $2M+, managing stakeholder expectations and delivering on-time, on-budget results.",
      descBullets: [
        "Led project teams of 20+ members across multiple locations, ensuring alignment with business objectives",
        "Successfully delivered EDUC.AR educational network project, connecting 50+ institutions across two provinces",
        "Managed Autodromo Villicum infrastructure project from conception to go-live, coordinating 5+ vendor partners",
        "Implemented project governance framework, improving delivery success rate from 65% to 95%"
      ]
    },
    {
      role: "Head of Technical Support and Management - Cuyo Region",
      company: "Cencosud S.A.",
      companylogo: "/Logo-Cencosud.png",
      date: "2011 - 2016",
      desc: "Managed regional IT operations for major retail chain, overseeing technical support teams and ensuring 24/7 business continuity across 30+ locations.",
      descBullets: [
        "Led team of 12 technical professionals, achieving 98% service level compliance and 95% customer satisfaction",
        "Implemented ITIL-based service management processes, reducing incident resolution time by 40%",
        "Coordinated multi-site technical operations across Argentina and Chile, maintaining 99.5% system availability",
        "Managed operational budget and resource allocation, optimizing costs while improving service quality"
      ]
    }
  ]
};

// Open Source

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Big Projects

const bigProjects = {
  title: "Key Projects",
  subtitle: "STRATEGIC INITIATIVES & PROGRAM MANAGEMENT",
  projects: [
    {
      image: "/1631312769093.jpg",
      projectName: "CME Global Digital Collaboration Initiative",
      projectDesc: "Managed $300K technology initiative, leading cross-functional team to implement AI-enabled conference solutions across 15+ locations, resulting in 30% productivity increase and $80K annual savings",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/"
        }
      ]
    },
    {
      image: "/autodromo-villicum-san-juan - copia.jpg",
      projectName: "Autodromo Villicum Infrastructure Project",
      projectDesc: "Directed $1.2M critical infrastructure project, managing 5 vendor partners and 20+ team members to deliver high-availability network on-time and 15% under budget",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/"
        }
      ]
    },
    {
      image: "/educar-network-parana-mendoza - copia.jpg",
      projectName: "EDUC.AR Educational Network Program",
      projectDesc: "Led $800K multi-province connectivity program, coordinating stakeholders across 50+ educational institutions and managing project lifecycle from planning to successful implementation",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/"
        }
      ]
    },
    {
      image: "/gocom 4.png",
      projectName: "GO Comunidad - Social Impact Initiative",
      projectDesc: "Founded and directed social impact program, managing budget allocation, volunteer teams, and community partnerships to deliver digital inclusion solutions across LATAM regions",
      footerLink: [
        {
          name: "Visit Platform",
          url: "https://gocomunidad.com"
        }
      ]
    }
  ],
  display: true
};

// Certifications

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Professional certifications in AI, cloud, Microsoft infrastructure, Microsoft 365, and networking",
  achievementsCards: [
    {
      title: "Inteligencia Artificial Para La Productividad Avanzado",
      subtitle: "egg | Issued Oct 2025 | Credential ID: 68f25b438abd5e62c21fb794",
      image: "/images.jpg",
      imageAlt: "egg Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "Inteligencia Artificial Para La Productividad",
      subtitle: "egg | Issued Oct 2025 | Credential ID: 68dfc73a1ed7c867c708b261 | Skill: Project management",
      image: "/images.jpg",
      imageAlt: "egg Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "Microsoft | Issued Jun 2023",
      image: "/twitter_thumb_201604_image.png",
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "IT College | Issued Aug 2022 | Credential ID: 48f9947f40b0",
      image: "/AWS-Certified-Cloud-Practitioner_badge.png",
      imageAlt: "AWS Cloud Practitioner Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "MS-900 Microsoft 365",
      subtitle: "IT College | Issued Dec 2020 | Credential ID: 26410440",
      image: "/ms-900-420x420-1.webp",
      imageAlt: "IT College Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "AWS Technical Essentials",
      subtitle: "IT College | Issued Jul 2020",
      image: "/AWS-Certified-Cloud-Practitioner_badge.png",
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "Architecting on AWS",
      subtitle: "IT College | Issued Oct 2020 | Credential ID: 24693218",
      image: "/AWS_01-1761731215.png",
      imageAlt: "AWS Architect Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "Microsoft MCSA- 20740 Windows Server 2016",
      subtitle: "IT College | Issued Jun 2018",
      image: "/twitter_thumb_201604_MCSA-Windows-Server-2016-2018.png",
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "MS-DP900 Microsoft Azure Data Fundamental",
      subtitle: "IT College | Issued Oct 2020 | Credential ID: 24509992",
      image: "/azure-data-fundamentals-600x600.png",
      imageAlt: "Azure Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "MS-20741 Networking with Windows Server 2016",
      subtitle: "IT College | Issued Nov 2019",
      image: "/twitter_thumb_201604_20_DDLS_MS_20741.png",
      imageAlt: "IT College Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "MS-20742 Identity with Windows Server 2016",
      subtitle: "IT College | Issued Oct 2019 | Credential ID: 13922816",
      image: "/twitter_thumb_201604_20_DDLS_MS_20742.png",
      imageAlt: "IT College Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    },
    {
      title: "Cisco CCNA",
      subtitle: "UTN - Facultad Regional Mendoza | Issued Sep 2004",
      image: "/Cisco-CCNA-200-301-with-Live-Lab-Practice-Test-and-Study-Guide.webp",
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "true",
  blogs: [],
  display: false
};

// Talks Section

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's discuss infrastructure strategies, cloud solutions, or partnership opportunities. I'm available for consultation.",
  number: "+54 261 4677804",
  email_address: "carabante@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
