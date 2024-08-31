import React, { useState, useEffect } from 'react';
import { FileCode2, Smartphone, Monitor, Code2 } from 'lucide-react';

// Utility function to get a random image URL
const getRandomImageUrl = (width, height, id) => `https://picsum.photos/seed/${id}/${width}/${height}`;

// Navbar Component (unchanged)
const Navbar = ({ scrollToSection }) => {
  // ... (code remains the same)
};

// Header Component (unchanged)
const Header = ({ scrollToSection }) => {
  // ... (code remains the same)
};

// About Component
const About = ({ scrollToSection }) => {
  const [showFullBio, setShowFullBio] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    setProfileImage(getRandomImageUrl(150, 150, 'profile'));
  }, []);

  const handleDownloadCV = () => {
    alert("Downloading CV... (This is a mock action)");
  };

  return (
    <section id="about-me" className="max-w-4xl mx-auto px-6 py-12 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <img src={profileImage} alt="John Doe" className="rounded-lg mb-4 md:mb-0 w-[150px] h-[150px]" />
        <div>
          <h2 className="text-2xl font-bold mb-4">ABOUT ME</h2>
          <p className="mb-4">With over 5 years of experience in full stack development, I specialize in creating robust and scalable web applications.</p>
          {showFullBio && (
            <p className="mb-4">My passion lies in solving complex problems and delivering high-quality software solutions that make a real impact. I'm proficient in modern web technologies and always eager to learn and adapt to new challenges in the ever-evolving tech landscape.</p>
          )}
          <button
            onClick={() => setShowFullBio(!showFullBio)}
            className="text-blue-400 hover:underline mb-4"
          >
            {showFullBio ? "Show Less" : "Read More"}
          </button>
          <div className="space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Hire Me
            </button>
            <button
              onClick={handleDownloadCV}
              className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Component
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, product management, and payment integration.",
      details: "This project utilizes React for the frontend, Node.js and Express for the backend, and MongoDB for the database. It includes features such as user authentication, product catalog management, shopping cart functionality, and integration with Stripe for payments."
    },
    {
      title: "Task Management App",
      description: "A responsive web application built with Vue.js and Firebase, allowing users to create, assign, and track tasks in real-time.",
      details: "Built with Vue.js for the frontend and Firebase for backend services, this app provides real-time synchronization of tasks across devices. It features user authentication, task creation and assignment, due date tracking, and email notifications."
    },
    {
      title: "Financial Dashboard",
      description: "An interactive dashboard using D3.js for data visualization, providing insights into financial data with real-time updates and filtering capabilities.",
      details: "This dashboard uses D3.js for creating interactive and responsive data visualizations. It integrates with a RESTful API to fetch real-time financial data, and includes features such as custom date range selection, multiple chart types, and export functionality."
    },
    {
      title: "Fitness Tracking Mobile App",
      description: "A React Native mobile app that tracks workouts, nutrition, and progress, integrating with wearable devices for comprehensive health monitoring.",
      details: "Developed using React Native, this cross-platform mobile app integrates with various fitness APIs to track user workouts, nutrition, and overall health progress. It features a customizable workout planner, nutrition tracker, and progress visualization tools."
    }
  ]);

  useEffect(() => {
    setProjects(projects.map((project, index) => ({
      ...project,
      image: getRandomImageUrl(400, 300, `project-${index}`)
    })));
  }, []);

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-12 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-8">PORTFOLIO</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-blue-400 hover:underline"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover mb-4 rounded" />
            <p className="mb-4">{selectedProject.details}</p>
            <button
              onClick={() => setSelectedProject(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// Services Component (unchanged)
const Services = () => {
  // ... (code remains the same)
};

// Experience Component (unchanged)
const Experience = () => {
  // ... (code remains the same)
};

// Footer Component (unchanged)
const Footer = () => {
  // ... (code remains the same)
};

// Main App Component
const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <Header scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />
      <Portfolio />
      <Services />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;