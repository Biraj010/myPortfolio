import oppointment1 from "./assets/img/internship.png";
import oppointment2 from "./assets/img/internship2.png";
import oppointment3 from "./assets/img/card2.png";
import blood1 from "./assets/img/blood 1.png";
import blood2 from "./assets/img/blood 2.png";
import blood3 from "./assets/img/blood 3.png";
import blog1 from "./assets/img/blog 1.png";
import blog2 from "./assets/img/blog 2.png";
import blog3 from "./assets/img/blog 3.png";
import shopping1 from "./assets/img/one item.png";
import shopping2 from "./assets/img/Screenshot 2025-06-21 012735.png";
import eCommerce1 from "./assets/img/e-commerce1.png";
import eCommerce2 from "./assets/img/e-commerce2.png";
import eCommerce3 from "./assets/img/e-commerce23.png";
import eCommerce4 from "./assets/img/e-commerce24.png";
import eCommerce5 from "./assets/img/e-commerce5.png";
import eCommerce6 from "./assets/img/e-commerce6.png";

export const portfolioData = {
  header: {
    navLinks: [
      { href: "#about", text: "About" },
      { href: "#skills", text: "Skills" },
      { href: "#projects", text: "Projects" },
      { href: "#contact", text: "Contact" },
    ],
  },
  hero: {
    name: "Biraj Regmi.",
    titles: [
      "Web Developer",
      "I love creating user-friendly websites with modern tools like React and Node.js",
      "I create responsive, fast, and functional websites that help people and businesses",
    ],
    description:
      "I design and build beautiful, responsive, and user-friendly websites and applications.Welcome to my personal corner of the internet.",
  },
  about: {
    paragraph: `Hi, I'm Biraj Regmi, a passionate front-end developer with a focus on creating responsive and easy-to-use web applications. I specialize in React.js, Redux, and integrating RESTful APIs using tools like Axios. I enjoy turning ideas into real projects that are simple, effective, and visually appealing.

Currently, I'm learning backend development using Node.js and Express, aiming to become a full-stack developer. I also explore tools like Postman, follow clean coding practices, and work on improving performance and user experience in every project I build.`,
    personalInfo: {
      email: "regmibiraj.dev@gmail.com",
      phone: "+977 9846892218",
      address: "Kathmandu, Nepal",
    },
  },
  skills: {
    "Languages & Databases": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3 / SCSS",
      "Java",
      "Python",
      "C++",
    ],

    "Frameworks & Libraries": ["React", "Redux", "Axios", "Tailwind CSS"],
    "Tools & Platforms": [
      "Git & GitHub",
      "Figma",
      "Postman",
      "Jira",
      "VS Code",
    ],
  },
  projects: [
    {
      title: "Doctors Nepal - Online Appointment App",
      image: oppointment1,
      gallery: [
        {
          src: oppointment1,
        },
        { src: oppointment2 },
        { src: oppointment3 },
      ],
      description:
        "Developed an interactive doctor appointment platform with dynamic booking cards, RESTful API integration for data fetching and user auth, and seamless page navigation.",
      stack: ["React.js", "Redux", "Axios", "Tailwind CSS", "React Router"],
      liveUrl: "#",
      githubUrl: "https://github.com/Biraj010/Appointment",
    },
    {
      title: "Personal Blog Website",
      image: blog1,
      gallery: [{ src: blog2 }, { src: blog3 }],
      description:
        "Built a responsive blogging platform with a dark/light mode switch. Features include data fetching, user authentication, and form submissions, with robust API testing using Postman.",
      stack: [
        "React.js",
        "Redux Toolkit",
        "Axios",
        "Postman",
        "Tailwind CSS",
        "React Router",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Biraj010/Blog",
    },
    {
      title: "Blood Bank Management System",
      image: blood1,
      gallery: [{ src: blood1 }, { src: blood2 }, { src: blood3 }],
      description:
        "A React-based dashboard to track blood donations and availability. Integrated a REST API for real-time data and implemented role-based authentication for admins and users.",
      stack: [
        "React",
        "REST API",
        "Authentication",
        "Tailwind CSS",
        "React Router",
        "Axios",
        "Redux",
      ],
      liveUrl: "#",
      githubUrl:
        "https://github.com/Biraj010/Blood-Donation-management-system.git",
    },
    {
      title: "Online Shopping App",
      image: shopping1,
      gallery: [{ src: shopping1 }, { src: shopping2 }],
      description:
        "An e-commerce front-end with efficient state management using Redux. Features include API integration for product data and auth, shopping cart, and checkout functionality.",
      stack: [
        "React.js",
        "Redux",
        "Axios",
        "E-commerce",
        "Tailwind CSS",
        "React Router",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Biraj010/Online-Shopping-react-redux",
    },
    {
      title: "E-commerce Website",
      image: eCommerce1,
      gallery: [
        { src: eCommerce1 },
        { src: eCommerce2 },
        { src: eCommerce3 },
        { src: eCommerce4 },
        { src: eCommerce5 },
        { src: eCommerce6 },
      ],
      description:
        "Developed a responsive and feature-rich e-commerce frontend using React.js, Redux, Tailwind CSS, and Axios, with role-based access, JWT authentication, and protected routes. Built dynamic user and admin interfaces including product listings, cart, order management, real-time chat, and a professional admin dashboard.",
      stack: [
        "React.js",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
        // "JWT",
        // "Socket.io",
        // "Stripe",
        // "Paypal",
        // "Stripe",
        "Axios",
        "Postman",
        "Tailwind CSS",
        "React Router",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Biraj010/e-commerce",
    },
  ],
  contact: {
    paragraph: `I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out. Let's build something amazing together!`,
  },
  footer: {
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/Biraj010",
        icon: "bx bxl-github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/biraj-regmi-007679183/",
        icon: "bx bxl-linkedin-square",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/share/1G2Ku6SCUG/?mibextid=wwXIfr",
        icon: "bx bxl-facebook",
      },
    ],
  },
};
