export type Category = 'web' | 'mobile' | 'design' | 'other';

export interface Project {
  id: number;
  title: string;
  description: string;
  summary: string;
  category: Category;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "Personal Finance Dashboard",
  //   description: "A comprehensive personal finance dashboard with data visualization and expense tracking capabilities.",
  //   summary: "Developed a responsive finance dashboard that helps users track expenses, analyze spending patterns, and set budget goals with intuitive visualizations.",
  //   category: "web",
  //   image: "https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
  //   github: "https://github.com/username/finance-dashboard",
  //   live: "https://finance-dashboard.example.com"
  // },
  // {
  //   id: 2,
  //   title: "E-Commerce Mobile App",
  //   description: "A feature-rich mobile e-commerce application with product catalog, cart management, and secure checkout.",
  //   summary: "Built a cross-platform mobile e-commerce app featuring real-time inventory updates, secure payment processing, and user authentication.",
  //   category: "mobile",
  //   image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   technologies: ["React Native", "Redux", "Firebase", "Stripe API"],
  //   github: "https://github.com/username/ecommerce-app"
  // },
  // {
  //   id: 3,
  //   title: "Task Management Platform",
  //   description: "A collaborative task management platform with real-time updates and team collaboration features.",
  //   summary: "Designed and implemented a task management solution that enables teams to organize projects, assign tasks, and track progress with real-time updates.",
  //   category: "web",
  //   image: "https://images.pexels.com/photos/7172999/pexels-photo-7172999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Socket.io"],
  //   github: "https://github.com/username/task-platform",
  //   live: "https://task-platform.example.com"
  // },
  // {
  //   id: 4,
  //   title: "Health & Fitness Tracker",
  //   description: "A health and fitness tracking application with custom workout plans and progress monitoring.",
  //   summary: "Created a health tracking app that allows users to monitor their fitness activities, set goals, and view progress with data visualization.",
  //   category: "mobile",
  //   image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   technologies: ["Flutter", "Dart", "Firebase", "Health API"],
  //   github: "https://github.com/username/fitness-tracker"
  // },
  // {
  //   id: 5,
  //   title: "Brand Identity Design",
  //   description: "Complete brand identity design for a sustainable fashion startup.",
  //   summary: "Developed a comprehensive brand identity including logo design, color palette, typography, and brand guidelines for a sustainable fashion company.",
  //   category: "design",
  //   image: "https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
  //   live: "https://behance.net/username/brand-identity"
  // },
  // {
  //   id: 6,
  //   title: "Smart Home IoT Dashboard",
  //   description: "An IoT dashboard for controlling and monitoring smart home devices.",
  //   summary: "Built an IoT control dashboard that integrates with various smart home devices, allowing users to monitor and control their home environment remotely.",
  //   category: "other",
  //   image: "https://images.pexels.com/photos/4099358/pexels-photo-4099358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   technologies: ["React", "Node.js", "MQTT", "WebSockets", "Raspberry Pi"],
  //   github: "https://github.com/username/smart-home",
  //   live: "https://smart-home.example.com"
  // },
  {
    id: 7,
    title: "Live Global Weather Updates Website",
    description: "A website that gets the weather data of different location around the world.",
    summary: "Created a website that uses the IQAir API to fetch and display live weather data for various locations worldwide.",
    category: "web",
    image: "/images/weather-app-icon.jpg",
    technologies: ["HTML", "JavaScript", "Node.js", "Express", "EJS", "RESTful APIs"],
    github: "https://github.com/Muramara/Air-Weather-info-usin-IQAir-API",
    live: "https://smart-home.example.com"
  },
  {
    id: 8,
    title: "Book Notes",
    description: "A website where multiple users can write notes about books they have read.",
    summary: "A website that allows multiple users to create, edit and delete notes about books they have read. The website also uses the OpenLibrary API to fetch book covers for each book written about in the notes",
    category: "web",
    image: "/images/reading.jpg",
    technologies: ["HTML", "JavaScript", "Node.js", "Express", "EJS", "RESTful APIs", "PostgreSQL"],
    github: "https://github.com/Muramara/Book-Notes",
    live: "https://smart-home.example.com"
  },
  {
    id: 9,
    title: "Blog Post website",
    description: "A website that allows one to post multiple blogs.",
    summary: "Posts can be created, edited and deleted, and are all listed on the home page. The site uses two APIs; one stores the posts in object and sends the object as json, the other receives requests from the website and forwards them to the server holding the posts object and receives the json response, which it forwards to the website",
    category: "web",
    image: "/images/typewriter.jpg",
    technologies: ["HTML", "JavaScript", "Node.js", "Express", "EJS", "RESTful APIs"],
    github: "https://github.com/Muramara/Blog-Post-Site-with-RESTful-API",
    live: "https://smart-home.example.com"
  }
];