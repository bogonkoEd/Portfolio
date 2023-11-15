
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blockchain Delevoper",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "AWS",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "canvas",
      icon: figma,
    },
    {
      name: "Python",
      icon: python,
    }
  ];
  
  const experiences = [
    {
      title: "Python",
      company_name: "Revisit Python",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Created a Python project focused on data manipulation and script automation.",
        "Developed scripts for data processing and analysis, demonstrating proficiency in Python.",
        "Worked on automating tasks using Python, enhancing efficiency and accuracy.",
        "Managed version control and documentation, ensuring code quality and maintainability.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "LaundryConnect",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Present",
      points: [
        "Developed a mobile application using React Native for a laundry service.",
        "Implemented features for viewing and selecting laundromats, managing orders, and user profiles.",
        "Ensured responsive design and cross-platform compatibility for both Android and iOS.",
        "Collaborated with a team to design a user-friendly interface and optimize application performance.",
      ],
    },
    {
      title: "Blockchain Developer",
      company_name: "Blockchain Covid Certificates",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sept 2021 - Jan 2022",
      points: [
        "Developed a blockchain-based solution for managing COVID-19 certificates.",
        "Focused on smart contract development using Solidity",
        "Focused on integrating blockchain technology for secure and transparent data management.",
      ],
    },
    {
      title: "WebGL",
      company_name: "Portfolio",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "August 2023 - Present",
      points: [
        "Currently developing an interactive WebGL portfolio to showcase projects and technical skills.",
        "Implementing advanced graphics rendering techniques and interactive user interfaces.",
      ],
    },
  ];
  
  const projects = [
    {
      label: "Personal Portfolio Website",
      description:
        "Developed a personal portfolio website to showcase my skills and projects, featuring interactive UI components and responsive design. Integrated Three.js for 3D graphics and WebGL elements.",
      image: carrent, // Replace with actual image import
      source_code_link: "https://github.com/bogonkoEd/Portfolio",
    },
    {
      label: "LaundryConnect",
      description:
        "Created a laundry management system with an online booking feature and a user-friendly interface. Implemented a secure payment gateway, enhancing transaction efficiency and success rate.",
      image: jobit, // Replace with actual image import
      source_code_link: "https://github.com/bogonkoEd/LaundryConnect",
    },
    {
      label: "Blockchain Covid Vaccine Certifications",
      description:
        "Developed a blockchain-based system for COVID-19 vaccine certifications to ensure trust in the vaccine supply chain. Deployed on the Rinkeby testnet.",
      image: tripguide, // Replace with actual image import
      source_code_link: "https://github.com/githubarj/Blockchain-Covid-Certificates",
    },
  ];
  
  
  export { services, technologies, experiences, projects };