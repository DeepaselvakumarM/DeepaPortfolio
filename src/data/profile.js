// All portfolio content lives here, sourced from the latest resume.
// Update this file (and public/Deepa_Selvakumar_Resume.pdf) when the resume changes.

export const RESUME_URL = `${process.env.PUBLIC_URL}/Deepa_Selvakumar_Resume.pdf`;

export const profile = {
  name: "Deepa Selvakumar",
  role: "Full Stack Developer",
  location: "Bangalore, India",
  email: "sdeepa0711@gmail.com",
  phone: "+91 97916 72016",
  phoneHref: "tel:+919791672016",
  linkedin: "https://www.linkedin.com/in/deepas7113",
  github: "https://github.com/DeepaselvakumarM",
  tagline:
    "I build production web applications end to end: responsive React frontends, Python and Node.js APIs, and AI-powered workflows on AWS and Azure.",
  summary: [
    "Full Stack Developer with hands-on experience building production web applications using React.js, TypeScript, Python FastAPI, Node.js, REST and GraphQL APIs, AWS/Azure cloud services and AI-powered workflows.",
    "Experienced in developing responsive frontend applications, backend APIs, database integrations, authentication, and cloud deployments.",
  ],
  heroStack: ["React.js", "TypeScript", "FastAPI", "GraphQL", "AWS", "Azure"],
};

export const highlights = [
  { value: "~30%", label: "Fewer UI-related issues" },
  { value: "~25%", label: "Workflow efficiency gain" },
  { value: "AWS + Azure", label: "Cloud deployments" },
  { value: "B.Tech IT", label: "Class of 2025" },
];

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript"] },
  { group: "Frontend", items: ["HTML", "CSS", "React.js", "Next.js"] },
  { group: "Backend", items: ["Node.js", "Express.js", "FastAPI", "RESTful APIs"] },
  {
    group: "Cloud & Tools",
    items: ["AWS", "Azure", "VS Code", "Postman", "IntelliJ IDEA", "GitHub", "MySQL Workbench"],
  },
  { group: "Databases", items: ["MySQL", "DynamoDB"] },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "VisionFirst Technologies Pvt. Ltd.",
    companyUrl: "https://vfirstt.com/",
    location: "Bangalore, India",
    period: "Jan 2026 – Present",
    current: true,
    points: [
      "Developed and maintained production web applications using React.js, FastAPI, and GraphQL, implementing responsive frontend components, backend APIs, and data integrations while reducing UI-related issues by approximately 30%.",
      "Built Python-based proofs of concept and backend integrations leveraging MCP and AI automation frameworks, enabling rapid evaluation of AI-driven workflows and developer productivity tools.",
      "Integrated Azure cloud services and AI tools, supporting scalable backend workflows, automation, testing, and deployment while improving workflow efficiency by approximately 25%.",
    ],
    stack: ["React.js", "FastAPI", "GraphQL", "Python", "MCP", "Azure"],
  },
];

export const projects = [
  {
    title: "AIDOCINTEL",
    subtitle: "Bank Statement Processing Web Application",
    role: "Full Stack Developer",
    points: [
      "Developed a full-stack application using React.js, TypeScript, Python FastAPI, and Azure Document Intelligence for bank statement processing.",
      "Integrated Azure Static Web Apps, Blob Storage, Microsoft Entra ID, and Power BI Embedded, supporting testing and production deployment on Azure.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "FastAPI",
      "Azure Document Intelligence",
      "Blob Storage",
      "Entra ID",
      "Power BI Embedded",
    ],
  },
  {
    title: "Tru2Earth",
    subtitle: "Web Platform for Agricultural Surveys and Insurance Processing",
    role: "Full Stack Developer",
    points: [
      "Developed responsive, scalable web applications using React.js, Material UI, Zustand, and Apollo Client, integrating GraphQL APIs for data retrieval, state handling, and experiment workflow execution.",
      "Automated multi-environment (Dev/UAT/Prod) deployments using AWS CloudFormation, S3, and CloudFront, with serverless batch processing using Java, AWS Lambda and Step Functions for crop health monitoring workflows.",
    ],
    stack: [
      "React.js",
      "Material UI",
      "Zustand",
      "Apollo GraphQL",
      "CloudFormation",
      "Lambda",
      "Step Functions",
    ],
  },
  {
    title: "MyKey Notes",
    subtitle: "Personal Notes App",
    role: "Personal Project",
    points: [
      "Built a secure note management application with user registration, login, a personalized dashboard, and note creation, editing, deletion, and organization with user-specific access control.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT"],
    liveUrl: "https://my-ke-front-end.vercel.app/",
    githubUrl: "https://github.com/DeepaselvakumarM/MyKe_FrontEnd",
  },
];

export const education = {
  degree: "B.Tech. in Information Technology",
  institution: "Sri Shanmugha College of Engineering and Technology",
  location: "Tamil Nadu",
  period: "May 2021 – Jun 2025",
};

export const certifications = [
  {
    title: "AWS Technical Accreditation",
    issuer: "Amazon Web Services",
    date: "Feb 2026",
    url: "https://drive.google.com/file/d/1g230xEf9YM6C67nYht60364ukxtNLGmH/view?usp=drive_link",
  },
  {
    title: "Full Stack Development",
    issuer: "Iviewsense Private Limited",
    date: "Jan 2025",
    url: "https://drive.google.com/file/d/13liaGXjtdIQsdG01KKhsEpJQkSzo0k4T/view?usp=sharing",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
