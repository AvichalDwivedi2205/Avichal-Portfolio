import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    JEE,
    bits,
    Ai,
    python,
    Clanguage,
    Cpp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "BITS PILANI First Year",
      icon: mobile,
    },
    {
      title: "Learning AI/ML",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Python",
      icon: python,
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
      name: "Cpp",
      icon: Cpp,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "C",
      icon: Clanguage,
    },
  ];
  
  const experiences = [
    {
      title: "Cleared",
      company_name: "JEE",
      icon: JEE,
      iconBg: "#383E56",
      date: "In the year 2023",
      points: [
        "Cleared JEE Mains and JEE Advanced and got selected for IIT",
        "Was in the top one percent of the examination",
        "Have a good grasp on phy, chem and maths of class 12 and currently teaching it to students in NSS"
      ],
    },
    {
      title: "Undergrad Student",
      company_name: "BITS PILANI",
      icon: bits,
      iconBg: "#383E56",
      date: "2023 - 2027",
      points: [
        "Pursuing Undergrad in the branch Electronics and Communication",
        "Learning many new things through the opportunities provided by the college",
        "Have a current cgpa of 8.55"
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Created Many Projects",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Creating websites and learning new conceps along the way",
        "Using frameworks like three js to create animations"
      ],
    },
    {
      title: "AI/Ml and Deep Learning",
      company_name: "Learning concepts of AI",
      icon: Ai,
      iconBg: "#E6DEDD",
      date: "2024 - Present",
      points: [
        "Learning new Concepts in AI everyday",
        "Hoping to build a web app implementing the concepts of AI",
        "Learning Machine Learning sand Deep Learning"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };