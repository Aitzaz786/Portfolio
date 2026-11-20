export const profile = {
  name: 'Aitzaz Afzal', email: 'maheraitzaz786@gmail.com', phone: '+92 345 6400191',
  github: 'https://github.com/aitzaz786', linkedin: 'https://www.linkedin.com/in/aitzaz-afzal/',
  logo: `${import.meta.env.BASE_URL}aitzaz-logo.svg`,
  resume: `${import.meta.env.BASE_URL}Aitzaz_Afzal_Resume.pdf`,
};

// Keep custom domains first and Vercel-hosted projects at the end.
export const projects = [
  { name: 'Shayari Urdu', url: 'https://shayariurdu.com/', type: 'Web & App', theme: 'poetry', mark: 'شاعری', tags: ['React', 'Node.js', 'Supabase'], featured: true },
  { name: 'Passage', url: 'https://passagesounds.app/', type: 'Web & App', theme: 'passage', mark: 'passage', tags: ['React Native', 'Node.js'], featured: true },
  { name: 'Asia Tours', url: 'https://asiatourspk.com/', type: 'Web', theme: 'tours', mark: 'ASIA TOURS', tags: [], featured: true },
  { name: 'Doglexica', url: 'https://staging.doglexica.com/', type: 'Web', tags: ['React', 'OpenAI', 'Supabase', 'Mollie'] },
  { name: 'Brandr', url: 'https://brandr.design/', type: 'Web', tags: ['Next.js', 'NestJS', 'Claude', 'Stripe'] },
  { name: 'Claims', url: 'http://claims.itbeam.com/', type: 'Web', tags: ['React', 'Node.js', 'SQLite', 'MySQL'] },
  { name: 'Thamesbank', url: 'http://thamesbank.itbeam.com/', type: 'Web', tags: ['React', '.NET API integration'] },
  { name: 'Livosys', url: 'https://livosys.se/', type: 'Web', tags: ['React', 'Express', 'Supabase'] },
  { name: 'Merchant Guard', url: 'https://audit-guard-ai.vercel.app/', type: 'Web', tags: ['Next.js', 'NestJS', 'OpenAI', 'Stripe'] },
  { name: 'LivosysAI', url: 'https://livosysai.vercel.app/', type: 'Web', tags: ['React'] },
  { name: 'Magento', url: 'https://fronted-display.vercel.app/', type: 'Web', tags: ['React', 'Express', 'MongoDB'] },
];
export const experience = [
  { company: 'Webseo Pakistan', role: 'Software Engineer', date: 'Oct 2025 - Present', mode: 'Full-time · Remote', current: true,
    description: 'Building full stack applications with React, Next.js, Node.js and TypeScript. Designing database architectures and collaborating with design and marketing teams on responsive client experiences.' },
  { company: 'ITBeam', role: 'Software Engineer', date: 'Sep 2025 - Apr 2026', mode: 'Part-time · On-site',
    description: 'Developed 3+ MERN applications with REST APIs, database schemas, authentication and admin panels. Integrated payment services and third-party APIs.' },
  { company: 'ITBeam', role: 'Web Development Intern', date: 'Aug 2025 - Sep 2025', mode: 'Internship · Lahore',
    description: 'Assisted with developing and testing React and Node.js applications, using version control and team development practices.' },
  { company: 'PNY Trainings', role: 'Web Developer', date: 'Dec 2023 - May 2024', mode: 'Practical training · On-site',
    description: 'Built responsive MERN projects with React, Node.js and MongoDB. Implemented REST APIs, authentication and database schemas through practical training.' },
];
export const skillGroups = [
  { title: 'Frontend & mobile', caption: 'The experience people use.', icon: 'layout', skills: ['React.js', 'Next.js', 'React Native', 'Expo', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend & APIs', caption: 'The logic behind the interface.', icon: 'code', skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs'] },
  { title: 'Data & caching', caption: 'Structured data. Faster access.', icon: 'database', skills: ['MongoDB', 'MySQL', 'SQL', 'SQLite', 'Supabase', 'Redis', 'Upstash'] },
  { title: 'Cloud & deployment', caption: 'From development to delivery.', icon: 'cloud', skills: ['AWS', 'Amazon S3', 'CloudFront', 'Vercel', 'Railway', 'Hostinger', 'GoDaddy'] },
  { title: 'AI & integrations', caption: 'Useful services, connected.', icon: 'layers', skills: ['OpenAI API', 'Anthropic Claude', 'Stripe', 'Mollie', 'RevenueCat'] },
  { title: 'Development tools', caption: 'A considered workflow.', icon: 'tool', skills: ['GitHub', 'Figma'] },
];
