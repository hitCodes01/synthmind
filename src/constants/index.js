import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About",
    url: "/about",
  },
  {
    id: "2",
    title: "Smart bots",
    url: "/chatbots",
  },
  {
    id:"3",
    title:"Blog",
    url:"/blog",
  },
  {
    id:"4",
    title:"Contact",
    url:"/contact",
  },
  {
    id:"5",
    title:"Legal",
    url:"/legal"
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];



export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];



export const collabText =
  "Select from a wide range of AI Smartbots. Our smartbots are designed to provide personalized solutions for various industries, including healthcare, finance, education, and more.";

export const collabContent = [
  {
    id: "0",
    title: "Easy to Use",
    text: collabText,
  },
  {
    id: "1",
    title: "User-friendly Interface",
  },
  {
    id: "2",
    title: "Diverse Applications",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];


export const benefits = [
  {
    id: "0",
    title: "FutureFarm Agronomist",
    text: "FutureFarm Agronomist is an agricultural advisor smartbot that leverages AI to provide crop management advice, weather predictions and sustainable farming practices for modern agriculture.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "FinWiz Bot",
    text: "FinWiz is a financial advisor smartbot that uses advanced predictive analytics and machine learning to provide personalized investment strategies, budgeting tips and real-time market insights.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "EduSynth Tutor",
    text: "EduSynth is an educational smartbot that utilizes adaptive learning algorithms to create customized study plans, quizzes and interactive lessons ensuring optimal learning experiences for students of all ages.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "MindMate Pro",
    text: "MindMate Pro is an AI-driven mental health companion, offering personalized emotional support, mood tracking and therapeutic conversations. It incorporates sentiment analysis to gauge user emotions and provide appropriate interventions.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "HealthBot360",
    text: "HealthBot360 is a comprehensive health and wellness smartbot that leverages AI to offer personalized fitness routines, nutrition advice and health monitoring. It can sync with wearables and smart devices for real-time health tracking.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  
];

export const pricing = [
  {
    category: "Individual Subscription Plans",
    plans: [
      {
        id: 1,
        title: "Basic Plan",
        price: "6.99",
        description: "Access to one smartbot of your choice",
        features: [
          "Basic features of the selected smartbot",
          "Standard customer support",
          "Monthly usage reports",
        ],
      },
      {
        id: 2,
        title: "Standard Plan",
        price: "14.99",
        description: "Access to three smartbots",
        features: [
          "All features of the selected smartbots",
          "Priority customer support",
          "Weekly usage reports",
          "10% discount on additional smartbot subscriptions",
        ],
      },
      {
        id: 3,
        title: "Premium Plan",
        price: "29.99",
        description: "Access to five smartbots",
        features: [
          "All features of the selected smartbots",
          "24/7 priority customer support",
          "Daily usage reports",
          "20% discount on additional smartbot subscriptions",
          "Early access to new smartbots and features",
        ],
      },
    ],
  },
  {
    category: "Family Subscription Plans",
    plans:[
      {
        id:4,
        title: "Basic Plan",
        price: "19.99",
        description: "Access to three smartbots for up to four family members",
        features: [
          "Basic features of the selected smartbots",
          "Standard customer support",
          "Monthly family usage reports",
        ]
      },
      {
        id:5,
        title: "Standard Plan",
        price: "39.99",
        description: "Access to six smartbots for up to six family members",
        features: [
          "All features of the selected smartbots",
          "Priority customer support",
          "Weekly family usage reports",
          "10% discount on additional smartbot subscriptions",
        ]
      },
      {
        id:6,
        title: "Premium Plan",
        price: "59.99",
        description: "Access to ten smartbots for up to ten family members",
        features: [
          "All features of the selected smartbots",
          "24/7 priority customer support",
          "Daily family usage reports",
          "20% discount on additional smartbot subscriptions",
          "Early access to new smartbots and features",
        ]
      }
    ]
  },
  {
    category: "Enterprise Subscription Plans",
    plans:[
      {
        id:7,
        title: "Small Business Plan",
        price: "99.99",
        description: "Access to ten smartbots for up to 20 employees",
        features: [
          "All features of the selected smartbots",
          "Dedicated account manager",
          "Weekly business usage reports",
          "Integration with existing business tools",
          "10% discount on additional smartbot subscriptions",
        ]
      },
      {
        id:8,
        title: "Medium Business Plan",
        price: "199.99",
        description: "Access to 20 smartbots for up to 50 employees",
        features: [
          "All features of the selected smartbots",
          "Dedicated account manager",
          "Daily business usage reports",
          "15% discount on additional smartbot subscriptions",
          "Early access to new smartbots and features",
        ]
      },
      {
        id:9,
        title: "Large Enterprise Plan",
        price: "499.99",
        description: "Access to 50 smartbots for unlimited employees",
        features: [
          "All features of the selected smartbots",
          "Dedicated account manager",
          "Real-time business usage reports",
          "Custom integration with existing business tools",
          "20% discount on additional smartbot subscriptions",
          "Early access to new smartbots and features",
          "Custom smartbot development options",
        ]
      }
    ]
  
  },
  {
    category: "Academic Subscription Plans",
    plans:[
      {
        id:10,
        title: "Basic Plan",
        price:"49.99",
        description: "Access to ten smartbots for up to 50 students",
        features: [
          "Basic features of the selected smartbots",
          "Standard academic support",
          "Monthly usage reports",
        ]
      },
      {
        id:11,
        title:"Standard Plan",
        price:"99.99",
        description:"Access to 20 smartbots for up to 100 students",
        features:[
          "All features of the selected smartbots",
          "Priority academic support",
          "Weekly usage reports",
          "Integration with learning management systems",
          "10% discount on additional smartbot subscriptions",
        ]
      },
      {
        id:12,
        title:"Premium Plan",
        price:"199.99",
        description:"Access to 50 smartbots for unlimited students",
        features:[
          "All features of the selected smartbots",
          "24/7 priority academic support",
          "Daily usage reports",
          "Custom integration with learning management systems",
          "15% discount on additional smartbot subscriptions",
          "Early access to new smartbots and features"
        ]
      }
    ]
  
  },
  {
    category:"Additional Services",
    plans:[
      {
        id:13,
        title:"Add-on Smartbots",
        price:"4.99",
        features:[
          "Access to any additional smartbot beyond the included ones in your subscription plan"
        ]
      },
      {
        id:14,
        title:"Custom Smartbot Development",
        description:"Custom pricing based on requirements",
        features:[
          "Tailored smartbot solutions to meet specific needs of enterprise or academic institutions"
        ]
      },
      {
        id:15,
        title:"Consulting and Training",
        description:"Custom pricing based on scope and duration",
        features:[
          "Expert consulting services and training sessions to maximize the effectiveness of smartbot usage"
        ]
      }
    ]
  }
  
];


export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/PhoenixLab94718",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/phoenixlabs1?igsh=MzZoOGQzaXBkbG8z",
  },
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://web.facebook.com/profile.php?viewas=100000686899395&id=100085708352952",
  },
];

export const chatbots = [
  {
    id: 1,
    name: "FinWiz Bot",
    overview: "Offers expert financial advice using predictive analytics and machine learning.",
    useCases: "Manage your portfolio, plan for retirement, or optimize your savings.",
    subscription: "Starting at $9.99/month for individuals.",
    reviews: ["FinWiz helped me double my savings in just six months! - John Smith"],
    demoLink: "/finwiz",
    category: "business",
  },
  {
    id: 2,
    name: "EduSynth Tutor",
    overview: "Personalized study plans and interactive lessons for students of all ages.",
    useCases: "Improve grades, prepare for exams, or learn new subjects with tailored support.",
    subscription: "Starting at $7.99/month for individuals.",
    reviews: ["EduSynth has made studying fun and effective for my kids! - Sarah Johnson"],
    demoLink: "/edusynth",
    category: "education",
  },
  {
    id: 3,
    name: "MindMate Pro",
    overview: "Provides personalized emotional support and therapeutic conversations using AI-driven sentiment analysis.",
    useCases: "Track your mood, manage stress, and improve your mental health with expert guidance.",
    subscription: "Starting at $8.99/month for individuals. Enterprise pricing available.",
    reviews: ["MindMate Pro has been a lifesaver during tough times – Emily Davis."],
    demoLink: "/mindmate",
    category: "mental health",
  },
  {
    id: 4,
    name: "HealthBot360",
    overview: "Offers personalized fitness routines, nutrition advice, and health monitoring synced with your smart devices.",
    useCases: "Achieve your fitness goals, maintain a balanced diet, and track your health metrics.",
    subscription: "Starting at $10.99/month for individuals. Enterprise pricing available.",
    reviews: ["HealthBot360 helped me lose 20 pounds and improve my overall health! – Michael Brown."],
    demoLink: "/healthbot",
    category: "mental health",
  },
  {
    id: 5,
    name: "LegalGenius Advisor",
    overview: "Assists with legal queries, contract reviews, and compliance checks, staying updated with the latest regulations.",
    useCases: "Ensure legal compliance, draft contracts, and get reliable legal advice.",
    subscription: "Starting at $12.99/month for individuals. Enterprise pricing available.",
    reviews: ["LegalGenius Advisor saved me from a costly legal mistake. – Robert Wilson."],
    demoLink: "/legaleagle",
    category: "business",
  },
  {
    id: 6,
    name: "TravelPulse Navigator",
    overview: "Helps plan trips, find deals, and navigate destinations with real-time insights on local events.",
    useCases: "Plan vacations, discover local attractions, and get travel recommendations.",
    subscription: "Starting at $6.99/month for individuals. Enterprise pricing available.",
    reviews: ["TravelPulse made my vacation planning so much easier! – Laura Martin."],
    demoLink: "/travelnavigator",
    category: "technology",
  },
  {
    id: 7,
    name: "TechSavvy Guru",
    overview: "Provides tech advice, troubleshooting, and keeps you updated on the latest trends. It can also assist with programming tasks.",
    useCases: "Solve tech issues, learn coding, and stay ahead in the tech world.",
    subscription: "Starting at $7.99/month for individuals. Enterprise pricing available.",
    reviews: ["TechSavvy Guru is my go-to for tech problems. – Kevin Lee."],
    demoLink: "/techsavvy",
    category: "technology",
  },
  {
    id: 8,
    name: "GreenGuard EcoMate",
    overview: "Educates users on sustainable practices and eco-friendly lifestyle choices.",
    useCases: "Reduce your carbon footprint, adopt green habits, and learn about sustainability.",
    subscription: "Starting at $5.99/month for individuals. Enterprise pricing available.",
    reviews: ["GreenGuard has helped me live a more eco-conscious life. – Rachel Green."],
    demoLink: "/greenguard",
    category: "technology",
  },
  {
    id: 9,
    name: "RoboChef Culinaire",
    overview: "Offers personalized cooking recipes, nutritional information, and meal planning.",
    useCases: "Discover new recipes, plan meals, and get nutritional insights.",
    subscription: "Starting at $6.99/month for individuals. Enterprise pricing available.",
    reviews: ["RoboChef has transformed my cooking experience. – Samantha Taylor."],
    demoLink: "/robochef",
    category: "business",
  },
  {
    id: 10,
    name: "FutureFit Coach",
    overview: "Creates dynamic workout routines and provides adaptive fitness plans tailored to individual goals.",
    useCases: "Achieve fitness goals, track performance, and get personalized workout plans.",
    subscription: "Starting at $9.99/month for individuals. Enterprise pricing available.",
    reviews: ["FutureFit Coach has been essential to my fitness journey. – David Johnson."],
    demoLink: "/futurefit",
    category: "technology",
  },
  {
    id: 11,
    name: "SocialSphere Influencer",
    overview: "Analyzes trends, suggests content ideas, and provides insights to boost online presence.",
    useCases: "Enhance social media strategies, create engaging content, and grow your audience.",
    subscription: "Starting at $7.99/month for individuals. Enterprise pricing available.",
    reviews: ["SocialSphere has significantly boosted my online presence. – Alex Kim."],
    demoLink: "/socialsphere",
    category: "technology",
  },
  {
    id: 12,
    name: "CodeCraft Prodigy",
    overview: "Assists users in learning programming languages, offering code reviews and problem-solving.",
    useCases: "Improve coding skills, collaborate on projects, and receive real-time feedback.",
    subscription: "Starting at $8.99/month for individuals. Enterprise pricing available.",
    reviews: ["CodeCraft has helped me advance my coding skills. – Chris Parker."],
    demoLink: "/codecraft",
    category: "technology",
  },
  {
    id: 13,
    name: "SecureShield Sentry",
    overview: "Educates users on online security best practices and offers real-time assistance in resolving security issues.",
    useCases: "Protect your online presence, identify threats, and get expert security advice.",
    subscription: "Starting at $7.99/month for individuals. Enterprise pricing available.",
    reviews: ["SecureShield has made me feel safer online. – Ashley White."],
    demoLink: "/secureshield",
    category: "technology",
  },
  {
    id: 14,
    name: "FashionFusion Stylist",
    overview: "Recommends outfits, styling tips, and stays updated on the latest fashion trends.",
    useCases: "Revamp your wardrobe, get styling advice, and stay fashion-forward.",
    subscription: "Starting at $6.99/month for individuals. Enterprise pricing available.",
    reviews: ["FashionFusion has transformed my style. – Maria Gonzalez."],
    demoLink: "/fashionfusion",
    category: "business",
  },
  {
    id: 15,
    name: "AutoPilot DriveMate",
    overview: "Provides real-time traffic updates, optimal routes, and vehicle maintenance tips.",
    useCases: "Plan your trips, avoid traffic, and maintain your vehicle efficiently.",
    subscription: "Starting at $5.99/month for individuals. Enterprise pricing available.",
    reviews: ["AutoPilot DriveMate has improved my driving experience. – Paul Harris."],
    demoLink: "#",
    category: "technology",
  },
  {
    id: 16,
    name: "MusicMinds Maestro",
    overview: "Curates personalized playlists, recommends new music, and composes original tracks.",
    useCases: "Discover new music, create personalized playlists, and explore musical creativity.",
    subscription: "Starting at $6.99/month for individuals. Enterprise pricing available.",
    reviews: ["MusicMinds Maestro has enriched my musical journey – Emma Brown"],
    demoLink: "/musicminds",
    category: "business",
  },
  {
    id: 17,
    name: "LanguageLink Polyglot",
    overview: "Provides interactive language lessons, conversation practice, and cultural insights.",
    useCases: "Learn new languages, practice speaking, and understand cultural nuances.",
    subscription: "Starting at $8.99/month for individuals. Enterprise pricing available.",
    reviews: ["LanguageLink has made language learning enjoyable! – Lucas Nguyen"],
    demoLink: "#",
    category: "education",
  },
  {
    id: 18,
    name: "FutureFarm Agronomist",
    overview: "Offers crop management advice, weather predictions, and sustainable farming practices.",
    useCases: "Optimize crop yields, plan around weather, and implement sustainable practices.",
    subscription: "Starting at $9.99/month for individuals. Enterprise pricing available.",
    reviews: ["FutureFarm has revolutionized my farming approach. – Grace Thomas"],
    demoLink: "/agribot",
    category: "business",
  },
  {
    id: 19,
    name: "AIHR Recruiter",
    overview: "Streamlines the recruitment process with resume screening, candidate interviews, and AI-driven assessments.",
    useCases: "Find the best candidates, streamline hiring, and improve recruitment efficiency.",
    subscription: "Starting at $5.99/month for individuals. Enterprise pricing available.",
    reviews: ["AIHR Recruiter has made hiring easier and more effective! – Mark Robinson"],
    demoLink: "/airecruiter",
    category: "technology",
  },
  {
    id: 20,
    name: "GameGenius Strategist",
    overview: "Analyzes gameplay, provides tips, and creates personalized in-game challenges.",
    useCases: "Improve gaming skills, discover new strategies, and enhance gaming experiences.",
    subscription: "Starting at $6.99/month for individuals. Enterprise pricing available.",
    reviews: ["GameGenius has taken my gaming to the next level! – Alex Turner"],
    demoLink: "/gamegenius",
    category: "business",
  },
];

export const upcomingChatbots = [
  // Category: Business
  {
    id: 21,
    name: "BizAdvisor",
    overview: "A smartbot designed to offer business advice and consultation.",
    features: "A smartbot designed to offer business advice and consultation.",
    potentialUseCases: "Startups, SMEs, business consultations",
    category: "business",
    link: "/bizadvisor",
  },
  {
    id: 22,
    name: "Smart Sales Pro™",
    overview: "A smartbot to assist with sales strategies and customer relationship management (CRM).",
    features: "Sales forecasting, CRM integration, lead management.",
    potentialUseCases: "Sales teams, CRM platforms, marketing agencies.",
    category: "business",
    link:'/salespro'
  },
  {
    id: 23,
    name: "MarketGuru",
    overview: "Focused on market trends and competitive analysis.",
    features: "Real-time market data analysis, competitor tracking, SWOT analysis.",
    potentialUseCases: "Market analysts, business development teams.",
    category: "business",
    link: "/marketguru",
  },
  {
    id: 24,
    name: "Finance Wizard Pro™",
    overview: "A smartbot to assist with financial planning and analysis.",
    features: "Budgeting, financial forecasting, expense tracking.",
    potentialUseCases: "Financial planners, accountants, businesses.",
    category: "business",
    link: '/financebot'
  },
  {
    id: 25,
    name: "HR Assist Pro™",
    overview: "Assists with human resources management and employee engagement.",
    features: "Recruitment automation, employee feedback analysis, policy management.",
    potentialUseCases: "HR departments, recruitment agencies.",
    category: "business",
    link: '/hrhelper'
  },
  {
    id: 26,
    name: "Smart Law Pro™",
    overview: "Providezzs legal information and document automation.",
    features: "Contract analysis, legal research, compliance monitoring.",
    potentialUseCases: "Legal departments, law firms.",
    category: "business",
    link: '/legaleagle'
  },
  {
    id: 27,
    name: "OpsManager",
    overview: "Focused on optimizing operations and supply chain management.",
    features: "Inventory management, logistics optimization, process automation.",
    potentialUseCases: "Operations managers, supply chain professionals.",
    category: "business",
    link: '/opsmanager'
  },
  {
    id: 28,
    name: "ConsultantX",
    overview: "Offers consultancy services in various business domains.",
    features: "Business audits, strategic advice, implementation support.",
    potentialUseCases: "Business consultants, advisory firms.",
    category: "business",
    link: '/consultantx'
  },
  {
    id: 29,
    name: "Brand Master Pro™",
    overview: "Assists with brand management and marketing strategies.",
    features: "Brand analysis, marketing campaign management, social media monitoring.",
    potentialUseCases: "Marketing teams, brand managers.",
    category: "business",
    link: '/brandmaster'
  },
  {
    id: 30,
    name: "Startup Guide Pro™",
    overview: "Provides guidance and resources for startups.",
    features: "Business plan creation, funding advice, growth strategies.",
    potentialUseCases: "Entrepreneurs, startup incubators.",
    category: "business",
    link: '/startupguide'
  },
  
  // Category: Technology
  {
    id: 31,
    name: "Tech Guru Pro™",
    overview: "A smartbot for technology advice and troubleshooting.",
    features: "IT support, software recommendations, technical documentation.",
    potentialUseCases: "IT support teams, tech enthusiasts.",
    category: "technology",
    link: '/techguru'
  },
  {
    id: 32,
    name: "Code Assist Pro™",
    overview: "Assists with programming and software development.",
    features: "Code suggestions, bug fixing, code review.",
    potentialUseCases: "Developers, coding bootcamps.",
    category: "technology",
    link: '/codeassist'
  },
  {
    id: 33,
    name: "AI Researcher Pro™",
    overview: "Focused on AI and machine learning research and insights.",
    features: "Research paper summaries, algorithm recommendations, trend analysis.",
    potentialUseCases: "AI researchers, data scientists.",
    category: "technology",
    link: '/airesearcher'
  },
  {
    id: 34,
    name: "Cyber Guardian Pro™",
    overview: "Provides cybersecurity tips and threat analysis.",
    features: "Threat detection, security best practices, incident response.",
    potentialUseCases: "Security teams, IT departments.",
    category: "technology",
    link: '/cyberguard'
  },
  {
    id: 35,
    name: "Data Scientist Pro™",
    overview: "A smartbot for data analysis and visualization.",
    features: "Data cleaning, statistical analysis, visualization tools.",
    potentialUseCases: "Data analysts, business intelligence teams.",
    category: "technology",
    link: '/datascientist'
  },
  {
    id: 36,
    name: "Net Admin Pro™",
    overview: "Assists with network administration and monitoring.",
    features: "Network performance analysis, troubleshooting, configuration management.",
    potentialUseCases: "Network administrators, IT support.",
    category: "technology",
    link: '/netadmin'
  },
  {
    id: 37,
    name: "DevOps Pro™",
    overview: "Supports DevOps practices and automation.",
    features: "CI/CD pipeline management, infrastructure as code, monitoring.",
    potentialUseCases: "DevOps teams, software development teams.",
    category: "technology",
    link: '/devopsbuddy'
  },
  {
    id: 38,
    name: "Cloud Consultant Pro™",
    overview: "Provides cloud computing advice and management.",
    features: "Cloud service recommendations, cost optimization, deployment strategies.",
    potentialUseCases: "Cloud engineers, IT departments.",
    category: "technology",
    link: '/cloudconsultant'
  },
  {
    id: 39,
    name: "IoTExpert",
    overview: "Focused on Internet of Things (IoT) devices and integrations.",
    features: "Device management, data collection, integration advice.",
    potentialUseCases: "IoT developers, smart home enthusiasts.",
    category: "technology",
    link: '/iotexpert'
  },
  {
    id: 40,
    name: "BlockchainAdvisor",
    overview: "Provides insights and support for blockchain technology.",
    features: "Smart contract development, blockchain integration, trend analysis.",
    potentialUseCases: "Blockchain developers, fintech companies.",
    category: "technology",
    link: '/blockchainadvisor'
  },
  
  // Category: Mental Health
  {
    id: 41,
    name: "Smart Therapy AI™",
    overview: "A smartbot offering mental health support and therapy.",
    features: "Cognitive Behavioral Therapy (CBT) techniques, mood tracking, mindfulness exercises.",
    potentialUseCases: "Individuals seeking mental health support, therapists.",
    category: "mental health",
    link: '/therapybot'
  },
  {
    id: 42,
    name: "Mood Mate AI™",
    overview: "Focuses on mood tracking and emotional support.",
    features: "Mood journaling, sentiment analysis, emotional insights.",
    potentialUseCases: "Individuals, mental health apps.",
    category: "mental health",
    link: '/moodmate'
  },
  {
    id: 43,
    name: "Smart Stress Relief™",
    overview: "Provides stress management techniques and relaxation exercises.",
    features: "Breathing exercises, guided meditations, stress tracking.",
    potentialUseCases: "Individuals, wellness programs.",
    category: "mental health",
    link: '/stressbuster'
  },
  {
    id: 44,
    name: "Mind Coach Pro™",
    overview: "Offers mental wellness coaching and self-improvement tips.",
    features: "Goal setting, progress tracking, motivational advice.",
    potentialUseCases: "Life coaches, individuals seeking personal growth.",
    category: "mental health",
    link: '/mindcoach'
  },
  {
    id: 45,
    name: "Anxiety Aid Pro™",
    overview: "Assists with anxiety management and coping strategies.",
    features: "Anxiety assessments, coping techniques, relaxation exercises.",
    potentialUseCases: "Individuals with anxiety, mental health practitioners.",
    category: "mental health",
    link: '/anxietyaid'
  },
  {
    id: 46,
    name: "Sleep Support AI™",
    overview: "Provides support for improving sleep quality.",
    features: "Sleep tracking, relaxation techniques, sleep hygiene tips.",
    potentialUseCases: "Individuals with sleep issues, wellness programs.",
    category: "mental health",
    link: '/sleepsupport'
  },
  {
    id: 47,
    name: "GriefGuide",
    overview: "Offers support and resources for coping with grief and loss.",
    features: "Grief journaling, coping strategies, support resources.",
    potentialUseCases: "Individuals experiencing grief, support groups.",
    category: "mental health",
    link: '/griefguide'
  },
  {
    id: 48,
    name: "Mindfulness AI™",
    overview: "Focuses on mindfulness practices and techniques.",
    features: "Guided meditations, mindfulness exercises, progress tracking.",
    potentialUseCases: "Individuals, mindfulness practitioners.",
    category: "mental health",
    link: '/mindfulnessmentor'
  },
  {
    id: 49,
    name: "PTSD Aid™",
    overview: "Assists with managing PTSD symptoms and providing resources.",
    features: "PTSD assessments, coping techniques, support resources.",
    potentialUseCases: "Individuals with PTSD, therapists.",
    category: "mental health",
    link: '/ptsdhelper'
  },
  {
    id: 50,
    name: "Addiction Counsel AI™",
    overview: "Provides support and resources for addiction recovery.",
    features: "Recovery tracking, coping strategies, support resources.",
    potentialUseCases: "Individuals in recovery, support groups.",
    category: "mental health",
    link: '/addictionally'
  },
  
  // Category: Education
  {
    id: 51,
    name: "StudyMate AI™",
    overview: "A smartbot to assist with studying and homework.",
    features: "Homework help, study tips, subject-specific guidance.",
    potentialUseCases: "Students, educators.",
    category: "education",
    link: '/studybuddy'
  },
  {
    id: 52,
    name: "QuizMaster",
    overview: "Focused on creating and managing quizzes and tests.",
    features: "Quiz creation, performance analysis, interactive quizzes.",
    potentialUseCases: "Teachers, educational platforms.",
    category: "education",
    link: '/quizmaster'
  },
  {
    id: 53,
    name: "Smart Tutor Pro™",
    overview: "Provides personalized tutoring in various subjects.",
    features: "Subject-specific tutoring, progress tracking, interactive lessons.",
    potentialUseCases: "Students, tutoring centers.",
    category: "education",
    link: '/tutorbot'
  },
  {
    id: 54,
    name: "Language Learner Pro™",
    overview: "Assists with language learning and practice.",
    features: "Vocabulary building, conversation practice, grammar tips.",
    potentialUseCases: "Language learners, language teachers.",
    category: "education",
    link: '/langlearner'
  },
  {
    id: 55,
    name: "STEMGuide",
    overview: "Focused on STEM (Science, Technology, Engineering, Mathematics) education.",
    features: "Interactive lessons, problem-solving exercises, project guidance.",
    potentialUseCases: "Students, STEM educators.",
    category: "education",
    link: '/stemguide'
  },
  {
    id: 56,
    name: "HistoryMate Pro™",
    overview: "Assists with learning and understanding history.",
    features: "Historical facts, timelines, context explanations.",
    potentialUseCases: "History students, teachers.",
    category: "education",
    link: '/historyhelper'
  },
  {
    id: 57,
    name: "Math Mentor AI™",
    overview: "Provides help with mathematics and related subjects.",
    features: "Step-by-step problem solving, concept explanations, practice problems.",
    potentialUseCases: "Math students, educators.",
    category: "education",
    link: '/mathmentor'
  },
  {
    id: 58,
    name: "ScienceSage",
    overview: "Assists with science education and experiments.",
    features: "Concept explanations, experiment guides, interactive lessons.",
    potentialUseCases: "Science students, teachers.",
    category: "education",
    link: '/sciencesage'
  },
  {
    id: 59,
    name: "Art Advisor Pro™",
    overview: "Provides guidance and support for learning and practicing art.",
    features: "Technique tutorials, project ideas, critique and feedback.",
    potentialUseCases: "Art students, teachers.",
    category: "education",
    link: '/artadvisor'
  },
  {
    id: 60,
    name: "Career Counselor Pro™",
    overview: "Offers career advice and planning.",
    features: "Career assessments, job search tips, resume building.",
    potentialUseCases: "Students, job seekers.",
    category: "education",
    link: '/careercounselor'
  },
  
  // Category: Dating/Relationships
  {
    id: 61,
    name: "LoveGuru",
    overview: "A smartbot offering dating advice and tips.",
    features: "Dating tips, relationship advice, conversation starters.",
    potentialUseCases: "Individuals seeking dating advice.",
    category: "dating/relationships",
    link: '/loveguru'
  },
  {
    id: 62,
    name: "Matchmaker Pro™",
    overview: "Assists with finding compatible matches and relationship building.",
    features: "Match suggestions, compatibility analysis, relationship tips.",
    potentialUseCases: "Dating apps, individuals.",
    category: "dating/relationships",
    link: '/matchmaker'
  },
  {
    id: 63,
    name: "Date Planner Pro™",
    overview: "Provides ideas and planning for dates.",
    features: "Date ideas, planning tools, location suggestions.",
    potentialUseCases: "Couples, dating services.",
    category: "dating/relationships",
    link: '/dateplanner'
  },
  {
    id: 64,
    name: "RelateMate",
    overview: "Focused on relationship advice and conflict resolution.",
    features: "Communication tips, conflict resolution strategies, relationship advice.",
    potentialUseCases: "Couples, relationship counselors.",
    category: "dating/relationships",
    link: '/relatemate'
  },
  {
    id: 65,
    name: "FlirtFriend",
    overview: "Offers flirting tips and conversation starters.",
    features: "Flirting techniques, conversation tips, confidence building.",
    potentialUseCases: "Individuals, dating services.",
    category: "dating/relationships",
    link: '/flirtfriend'
  },
  {
    id: 66,
    name: "Smart Breakup™",
    overview: "Provides support and advice for dealing with breakups.",
    features: "Emotional support, coping strategies, self-care tips.",
    potentialUseCases: "Individuals, support groups.",
    category: "dating/relationships",
    link: '/breakupbuddy'
  },
  {
    id: 67,
    name: "LongDistanceLove",
    overview: "Assists with maintaining long-distance relationships.",
    features: "Communication tips, activity suggestions, emotional support.",
    potentialUseCases: "Couples in long-distance relationships.",
    category: "dating/relationships",
    link: '/longdistancelove'
  },
  {
    id: 68,
    name: "CompatibilityCoach",
    overview: "Offers compatibility analysis and relationship building tips.",
    features: "Compatibility assessments, relationship advice, communication tips.",
    potentialUseCases: "Couples, dating apps.",
    category: "dating/relationships",
    link: '/compatibilitycoach'
  },
  {
    id: 69,
    name: "AI Love Tracker™",
    overview: "Helps track and improve relationship health.",
    features: "Relationship health assessments, progress tracking, activity suggestions.",
    potentialUseCases: "Couples, relationship counselors.",
    category: "dating/relationships",
    link: '/lovetracker'
  },
  {
    id: 70,
    name: "Wedding Planner AI™",
    overview: "Assists with planning weddings and managing related tasks.",
    features: "Wedding planning tools, budget management, vendor recommendations.",
    potentialUseCases: "Couples planning weddings, wedding planners.",
    category: "dating/relationships",
    link: '/weddingplanner'
  },
];