import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiServer, FiCpu, FiDatabase, FiCloud } from 'react-icons/fi';

const projects = [
  {
    title: "Job Portal Web Application",
    description: "A full-stack job portal built with MERN stack featuring role-based access for job seekers and recruiters. Includes authentication, job applications, saved listings, company management, and responsive UI with Redux Toolkit and TailwindCSS.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Tailwind CSS", "JWT", "REST API"],
    achievements: [
      "Implemented role-based authentication system for job seekers and recruiters",
      "Developed CRUD operations for job listings and company profiles",
      "Built responsive UI with Tailwind CSS for optimal user experience",
      "Integrated state management using Redux Toolkit for efficient data handling",
      "Created saved listings functionality for users to bookmark jobs",
      "Implemented job application tracking system for both candidates and employers"
    ],
    category: "fullstack",
    links: {
      github: "https://github.com/Vishal586/JobPortal",
      demo: "https://jobportal-2-hhii.onrender.com/"
    }
  },
  {
    title: "AI Virtual Assistance",
    description: "A full-stack application featuring AI-powered virtual assistance using Gemini AI integration. Includes user authentication, cloud storage, and responsive frontend built with React.js and Tailwind CSS.",
    technologies: ["React.js", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Gemini AI", "Tailwind CSS"],
    achievements: [
      "Integrated Gemini AI for intelligent virtual assistance capabilities",
      "Implemented JWT authentication for secure user access",
      "Utilized Cloudinary for efficient media management and storage",
      "Built RESTful APIs with Node.js and Express for backend functionality",
      "Created responsive frontend with React.js and Tailwind CSS",
      "Developed real-time chat interface for AI interactions"
    ],
    category: "fullstack",
    links: {
      github: "https://github.com/Vishal586/AI-VIRTUAL-ASSISTANCE",
      demo: "https://ai-virtual-assistance.onrender.com/"
    }
  },
  {
    title: "GreenCart - Grocery Delivery Platform",
    description: "A full-stack grocery delivery platform built with MERN stack featuring product listings, user/admin panels, ordering functionality, and Stripe payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS", "JWT", "REST API"],
    achievements: [
      "Implemented Stripe payment integration for secure transactions",
      "Developed user and admin panels with different access levels",
      "Built product catalog with search and filtering capabilities",
      "Created order management system with status tracking",
      "Designed responsive UI with Tailwind CSS for mobile compatibility",
      "Integrated authentication system for user account management"
    ],
    category: "fullstack",
    links: {
      github: "https://github.com/Vishal586/GreenCart",
      demo: "https://green-cart-alpha-lemon.vercel.app/"
    }
  },
  {
    title: "Real-time Chat Web Application",
    description: "A full-stack real time chat platform with CRUD operations, authentication, dynamic routing, and real-time chat functionality using Socket.IO for persistent, multi-user messaging.",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "REST API"],
    achievements: [
      "Implemented real-time chat functionality using Socket.IO",
      "Developed CRUD operations for blog posts with authentication",
      "Built dynamic routing for seamless user navigation",
      "Created user authentication system with JWT security",
      "Designed responsive interface for optimal user experience",
      "Integrated persistent messaging for multi-user communication"
    ],
    category: "fullstack",
    links: {
      github: "https://github.com/Vishal586/OptifyxTechnology/tree/main/Chatify",
      demo: "https://chatapp-9w3o.onrender.com/"
    }
  }
];

const ProjectCard = ({ project, index }) => {
  const categoryIcons = {
    backend: <FiServer className="text-purple-400" />,
    data: <FiDatabase className="text-purple-400" />,
    architecture: <FiCpu className="text-purple-400" />,
    frontend: <FiCloud className="text-purple-400" />,
    fullstack: <FiCpu className="text-purple-400" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="p-8 flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-800/30">
            {categoryIcons[project.category]}
          </div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        </div>

        <p className="text-gray-300 mb-6">{project.description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-purple-300 mb-3">KEY FEATURES</h4>
          <ul className="space-y-2 text-gray-300">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-purple-300 mb-3">TECHNOLOGY STACK</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-200 border border-gray-600/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-700/50 bg-gray-800/20 flex justify-end gap-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-purple-300 hover:text-white hover:bg-purple-900/30 transition-all"
          >
            <FiGithub /> Code
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-purple-600/90 hover:bg-purple-500 transition-all"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl sm:leading-[66px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 mb-4">
            Project Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Full-stack applications built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
