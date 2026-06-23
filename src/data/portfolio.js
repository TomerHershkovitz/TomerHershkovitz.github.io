export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Tomer Hershkovitz",
  title: "Product & Data Analyst",
  subtitle: "Fintech Operations | Business Intelligence | Product Operations",
  tagline:
    "I combine data, automation, and product thinking to improve operational performance and business decision-making.",
  summary:
    "Product & Data-Oriented Analyst with experience in fintech operations, healthcare innovation, and digital transformation projects. Skilled in SQL, Python, KPI analysis, automation, monitoring tools, and cross-functional collaboration. Passionate about leveraging data to improve products, processes, and business performance.",
  about:
    "I am an Industrial Engineering & Management student specializing in Information Systems and Business Analytics, with hands-on experience in fintech operations, healthcare innovation, and digital transformation projects. My work focuses on analyzing complex operational processes, building data-driven solutions, improving monitoring workflows, and supporting product and business decision-making.",
  location: "Tel Aviv, Israel",
  email: "tomerps1305@gmail.com",
  phone: "+972547555960",
  phoneLabel: "+972 54-755-5960",
  // TODO: Replace this if you want to use a different LinkedIn URL.
  linkedin: "https://www.linkedin.com/in/tomer-hershkovitz/",
  // Keep the resume PDF inside /public/Tomer_Hershkovitz_CV.pdf.
  resumeHref: "/Tomer_Hershkovitz_CV.pdf",
};

export const heroHighlights = [
  {
    title: "Fintech Operations",
    description: "Incident handling, KPI visibility, and reliable payment flows.",
  },
  {
    title: "BI & KPI Analytics",
    description: "Operational dashboards and decision support built from real data.",
  },
  {
    title: "Automation",
    description: "Reducing manual investigation work through smart workflows.",
  },
  {
    title: "Product Thinking",
    description: "Connecting systems, stakeholders, and business outcomes.",
  },
];

export const heroMetrics = [
  {
    label: "Current Domain",
    value: "Global payments monitoring",
  },
  {
    label: "Business Impact",
    value: "Projected ₪16M annual savings",
  },
  {
    label: "Toolkit",
    value: "SQL, Python, Splunk, Datadog, XSOAR",
  },
];

export const focusAreas = [
  {
    title: "Product Analytics",
    description: "Turning usage, KPI, and process signals into clearer product decisions.",
  },
  {
    title: "Business Intelligence",
    description: "Building visibility across operations, incidents, and business-critical metrics.",
  },
  {
    title: "Process Optimization",
    description: "Mapping friction points and improving workflows for scale and efficiency.",
  },
  {
    title: "Incident Automation",
    description: "Designing automations that reduce manual triage and operational noise.",
  },
];

export const projects = [
  {
    title: "Incident Response Automation (XSOAR & Dynatrace)",
    category: "Automation / Operations",
    description:
      "Designed and implemented an automated Cortex XSOAR workflow for Dynatrace incident handling, focused on identifying and closing false-positive alerts.",
    impact:
      "Reduced manual investigation effort and improved operational efficiency through automated incident handling.",
    tags: ["XSOAR", "Dynatrace", "Automation", "Incident Management", "False Positive Reduction"],
  },
  {
    title: "Business Intelligence & KPI Analytics",
    category: "BI / Data Analytics",
    description:
      "Developed KPI dashboards and performance monitoring solutions using operational and transaction data.",
    impact:
      "Improved visibility into trends, incidents, and business-critical metrics to support data-driven decision-making.",
    tags: ["BI", "KPI Analysis", "Dashboards", "Data Visualization", "Operational Analytics"],
  },
  {
    title: "Agile Project Management Platform (TOG Project Hub)",
    category: "Product / Web System",
    description:
      "Designed and developed a web-based Agile project management platform with Kanban workflows, role-based access, project tracking, task management, and collaboration features.",
    impact:
      "Created a centralized system to support Scrum team workflows and improve project visibility.",
    tags: ["Agile", "Scrum", "Kanban", "Product Design", "Web Development"],
  },
  {
    title: "Operating Room Supply Chain Optimization",
    category: "Healthcare / Business Impact",
    description:
      "Led a strategic supply-chain optimization initiative at Assuta Medical Centers, focused on improving operating-room logistics and reducing operational inefficiencies.",
    impact: "Projected annual savings of approximately ₪16M.",
    tags: ["Healthcare", "Process Optimization", "Business Analysis", "Project Management", "Cost Reduction"],
  },
];

export const experience = [
  {
    company: "Nuvei",
    role: "OCC Monitoring Analyst",
    dates: "2025 - Present",
    bullets: [
      "Investigate production incidents across global payment systems using data analysis and monitoring tools.",
      "Analyze transaction flows and KPIs to identify operational issues and performance trends.",
      "Collaborate with Product, Engineering, Risk, and DevOps teams to improve system reliability.",
      "Work with monitoring and investigation tools such as Grafana, Splunk, Dynatrace, Datadog, and XSOAR.",
    ],
  },
  {
    company: "Assuta Medical Centers",
    role: "Project Manager",
    dates: "May 2024 - Oct 2025",
    bullets: [
      "Led digital transformation and operational improvement initiatives.",
      "Analyzed business processes and identified opportunities for efficiency and automation.",
      "Led a strategic supply-chain optimization initiative projected to generate approximately ₪16M in annual savings.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Analytics",
    skills: ["SQL", "Python", "Excel", "KPI Analysis", "Data Visualization"],
  },
  {
    title: "Monitoring & Operations",
    skills: ["Grafana", "Splunk", "Dynatrace", "Datadog", "XSOAR", "Incident Management"],
  },
  {
    title: "Product & Business",
    skills: [
      "Product Thinking",
      "Product Analytics",
      "Business Analysis",
      "Process Optimization",
      "Data-Driven Decision Making",
    ],
  },
  {
    title: "Technical",
    skills: ["REST APIs", "Postman", "JavaScript", "XML"],
  },
  {
    title: "Project Management",
    skills: ["Jira", "Monday.com", "MS Project", "Stakeholder Management"],
  },
];

export const education = {
  institution: "Afeka College of Engineering",
  degree: "B.Sc. Industrial Engineering & Management",
  graduation: "Expected 2026",
  specialization: "Information Systems & Business Analytics",
};
