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
  },
  {
    title: "Weather App",
    image: project2,
    description:
      "A React-based application that provides real-time weather conditions and a 5-day forecast. Features include city search with auto-complete, current weather details, and an expandable 5-day forecast. Integrated GeoDB Cities API and OpenWeather API for weather data retrieval.",
    technologies: ["React", "Axios", "React-Select-Async-Paginate", "React-Accessible-Accordion", "CSS"],
  },
  {
    title: "Todo App",
    image: project3,
    description:
      "A task management application built with React and Redux Toolkit, allowing users to add, edit, delete, and complete tasks. Designed with a responsive user interface for optimal performance on desktop and mobile devices.",
    technologies: ["React", "Redux Toolkit", "CSS", "React Hook"],
  },
];

export const CONTACT = {
  address: "Agra, India 282005",
  phoneNo: "+91-9760770281",
  email: "nikhiltiwarig99@gmail.com",
};
