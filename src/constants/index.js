import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate full stack developer transitioning from the telecom industry to software development. With hands-on experience in front-end technologies like React, Redux, and Tailwind, as well as back-end technologies like Node.js, Express.js, MySQL, and MongoDB, I have developed and deployed multiple web applications. My goal is to leverage my skills to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for crafting efficient and user-friendly web applications. After transitioning from the telecom industry, I have upskilled myself in various technologies, including React, Redux, Node.js, MySQL, and MongoDB. My journey in web development began with a strong desire to create impactful digital solutions, and I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and learning about DevOps and Web3.`;

export const EXPERIENCES = [
  {
    year: "Sep 2021 - Oct 2022",
    role: "Graduate Engineer Trainee",
    company: "Huawei Technologies",
    description: [
      "Monitored alarms on U2000, achieving 100% Ticket Tracking Quality per customer SLAs.",
      "Resolved over 100 customer complaints via calls and emails, ensuring high customer satisfaction.",
      "Ensured compliance with Information Security and Cyber Security laws when handling confidential data.",
      "Optimized project performance by leveraging comprehensive knowledge of all project tools and methodologies.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Personal Finance Tracker",
    image: project1,
    description:
      "A React and Redux Toolkit-based application that allows users to effectively manage and visualize their finances. Features include user authentication with Firebase, income and expense tracking, data visualization with Victory.js, and CSV import/export.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Firebase",
      "Victory.js",
      "React Router DOM",
      "React Toastify",
      "PapaParse",
    ],
    website: "https://fin-track-seven.vercel.app/",
    github: "https://github.com/nikhil-tiwari/finTrack",
  },
  {
    title: "Pokedex",
    image: project2,
    description:
      "A React-based web application that allows users to search, filter, and explore detailed information about Pokémon. Features include real-time search, type-based filtering, infinite scroll, and individual Pokémon detail pages. Built with React Router for navigation and styled with a fully responsive Tailwind CSS design.",
    technologies: ["React.js", "Tailwind CSS", "React Router", "Pokémon API"],
    website: "https://pokedex-omega-nine-91.vercel.app/",
    github: "https://github.com/nikhil-tiwari/pokedex",
  },
  {
    title: "Multi-Chain Wallet",
    image: project3,
    description:
      "A React-based application to generate and manage Ethereum and Solana wallets from a single mnemonic phrase. Features include mnemonic generation, multiple wallet creation, real-time balance checks via Alchemy APIs, and secure display of public/private keys. Integrated Redux Toolkit for wallet state management and designed a responsive UI with Tailwind CSS.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "ethers.js",
      "@solana/web3.js",
      "bip39",
      "ed25519-hd-key",
      "tweetnacl",
      "Axios",
    ],
    website: "https://react-todo-app-virid-three.vercel.app/",
    github: "https://hd-wallet-hub.vercel.app/",
  },
];

export const CONTACT = {
  address: "Agra, India 282005",
  phoneNo: "+91-9760770281",
  email: "nikhiltiwarig99@gmail.com",
};
