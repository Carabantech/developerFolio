/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sebastian Mauricio Carabante",
  title: "Hi, I'm Sebastian",
  subTitle: emoji(
    "Enterprise IT Leader • Cloud Infrastructure Architect • 15+ years transforming LATAM operations 🚀 | AWS • Azure • Security • Zero Trust | Leading innovation at CME-Wakapi"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
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
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Infrastructure & Operations",
  subTitle: "ENTERPRISE IT LEADERSHIP & CLOUD ARCHITECTURE SPECIALIST",
  skills: [
    emoji(
      "⚡ Lead IT operations, infrastructure planning & systems administration across distributed international teams"
    ),
    emoji("⚡ Design & manage cloud environments (AWS, Azure) with focus on security, reliability & cost optimization"),
    emoji(
      "⚡ Drive digital transformation through vendor management, process improvement & emerging technology adoption"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Windows Server",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "VMware",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Cybersecurity",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Firewalls",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
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

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Infrastructure", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Systems & Virtualization",
      progressPercentage: "85%"
    },
    {
      Stack: "Network Architecture",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Manager Senior LATAM",
      company: "CME - Wakapi",
      companylogo: process.env.PUBLIC_URL + "/WAKlogo_3.jpg",
      date: "2018 - Present",
      desc: "Lead internal IT and infrastructure operations across LATAM, coordinating teams across Argentina, USA, and Lebanon.",
      descBullets: [
        "Manage technology operations with focus on systems reliability and security practices",
        "Own vendor management, hardware/software purchasing and operational decisions",
        "Drive process improvement across infrastructure and collaboration systems",
        "Led CME Global Digital Collaboration Initiative with AI-enabled conference rooms"
      ]
    },
    {
      role: "IT Project Director",
      company: "Foptik S.A.",
      companylogo: process.env.PUBLIC_URL + "/fotik2.png",
      date: "2016 - 2018",
      desc: "Directed IT and telecommunications projects from planning through execution across Argentina.",
      descBullets: [
        "Coordinated technical teams and providers on infrastructure initiatives",
        "Led large-scale connectivity and infrastructure projects including EDUC.AR and Autodromo Villicum",
        "Managed fiber-optic network deployments and high-availability interconnections"
      ]
    },
    {
      role: "Head of Technical Support and Management - Cuyo Region",
      company: "Cencosud S.A.",
      companylogo: process.env.PUBLIC_URL + "/Logo-Cencosud.png",
      date: "2011 - 2016",
      desc: "Coordinated regional technical support operations for internal users across the Cuyo region.",
      descBullets: [
        "Oversaw server, network, and endpoint support for business continuity",
        "Supported multi-site technical operations in Argentina and Chile",
        "Produced operational reports and evaluated information systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "INFRASTRUCTURE & DIGITAL TRANSFORMATION INITIATIVES",
  projects: [
    {
      image: process.env.PUBLIC_URL + "/1631312769093.jpg",
      projectName: "CME Global Digital Collaboration Initiative",
      projectDesc: "Led implementation of AI-enabled conference room capabilities with real-time translation, subtitles, meeting summaries, and action-item generation across LATAM regions",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/"
        }
      ]
    },
    {
      image: process.env.PUBLIC_URL + "/1607706484431villicum_autodromo.jpg",
      projectName: "Autodromo Villicum - San Juan",
      projectDesc: "Directed delivery of fiber-optic network deployment and high-availability interconnections supporting racing facility operations",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/"
        }
      ]
    },
    {
      image: process.env.PUBLIC_URL + "/channels4_profile.jpg",
      projectName: "EDUC.AR Network - Parana & Mendoza",
      projectDesc: "Directed multi-site connectivity project for educational institutions with network design and team coordination across provinces",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/"
        }
      ]
    },
    {
      image: process.env.PUBLIC_URL + "/gocom 4.png",
      projectName: "GO Comunidad - Social Impact Initiative",
      projectDesc: "Founded and led GO Comunidad initiative to strengthen digital community connections and social inclusion across LATAM regions through technology infrastructure",
      footerLink: [
        {
          name: "Visit Platform",
          url: "https://gocomunidad.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Professional certifications in AI, cloud, Microsoft infrastructure, Microsoft 365, and networking",

  achievementsCards: [
    {
      title: "Inteligencia Artificial Para La Productividad Avanzado",
      subtitle:
        "egg | Issued Oct 2025 | Credential ID: 68f25b438abd5e62c21fb794",
      image: process.env.PUBLIC_URL + "/images.jpg",
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
      subtitle:
        "egg | Issued Oct 2025 | Credential ID: 68dfc73a1ed7c867c708b261 | Skill: Project management",
      image: process.env.PUBLIC_URL + "/images.jpg",
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
      image: process.env.PUBLIC_URL + "/twitter_thumb_201604_image.png",
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
      image:
        process.env.PUBLIC_URL +
        "/AWS-Certified-Cloud-Practitioner_badge.png",
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
      image: process.env.PUBLIC_URL + "/ms-900-420x420-1.webp",
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
      image:
        process.env.PUBLIC_URL +
        "/AWS-Certified-Cloud-Practitioner_badge.png",
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
      image: process.env.PUBLIC_URL + "/AWS_01-1761731215.png",
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
      image:
        process.env.PUBLIC_URL +
        "/twitter_thumb_201604_MCSA-Windows-Server-2016-2018.png",
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
      image: process.env.PUBLIC_URL + "/azure-data-fundamentals-600x600.png",
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
      image:
        process.env.PUBLIC_URL +
        "/twitter_thumb_201604_20_DDLS_MS_20741.png",
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
      image:
        process.env.PUBLIC_URL +
        "/twitter_thumb_201604_20_DDLS_MS_20742.png",
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
      image:
        process.env.PUBLIC_URL +
        "/Cisco-CCNA-200-301-with-Live-Lab-Practice-Test-and-Study-Guide.webp",
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/sebastian-mauricio-c-a6123635/details/certifications/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let's discuss infrastructure strategies, cloud solutions, or partnership opportunities. I'm available for consultation.",
  number: "+54 261 4677804",
  email_address: "carabante@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
