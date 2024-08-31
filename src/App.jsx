import { Code2, FileCode2, Monitor, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

// Utility function to get a random image URL
const getRandomImageUrl = (width, height, id) =>
  `https://picsum.photos/seed/${id}/${width}/${height}`;

// Navbar Component
const Navbar = ({ scrollToSection }) => (
  <nav className="flex justify-between items-center p-6 bg-gray-800 sticky top-0 z-10">
    <div className="text-2xl font-bold text-white">KL</div>
    <div className="space-x-4">
      {["Home", "About Me", "Portfolio", "Services", "Experience"].map(
        (item) => (
          <button
            key={item}
            onClick={() =>
              scrollToSection(item.toLowerCase().replace(" ", "-"))
            }
            className="text-white hover:text-blue-400"
          >
            {item}
          </button>
        )
      )}
    </div>
    <button
      onClick={() => scrollToSection("contact")}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
    >
      Contact
    </button>
  </nav>
);

// Header Component
const Header = ({ scrollToSection }) => (
  <header id="home" className="text-center py-20 bg-gray-900 text-white">
    <h1 className="text-5xl font-bold mb-4">
      I'm Khushi Lama,
      <br />
      Full Stack Software Developer.
    </h1>
    <p className="text-xl mb-6">
      Turning ideas into elegant, efficient, and user-friendly applications.
    </p>
    <button
      onClick={() => scrollToSection("portfolio")}
      className="bg-blue-600 text-white px-6 py-3 rounded-full mt-6 hover:bg-blue-700 transition duration-300"
    >
      View My Work
    </button>
  </header>
);

// About Component
const About = ({ scrollToSection }) => {
  const [showFullBio, setShowFullBio] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    setProfileImage(getRandomImageUrl(150, 150, "profile"));
  }, []);

  const handleDownloadCV = () => {
    alert("Downloading CV... (This is a mock action)");
  };

  return (
    <section
      id="about-me"
      className="max-w-4xl mx-auto px-6 py-12 bg-gray-900 text-white"
    >
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <img
          src={profileImage}
          alt="Khushi Lama"
          className="rounded-lg mb-4 md:mb-0 w-[150px] h-[150px]"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">ABOUT ME</h2>
          <p className="mb-4">
            With over 5 years of experience in full stack development, I
            specialize in creating robust and scalable web applications.
          </p>
          {showFullBio && (
            <p className="mb-4">
              My passion lies in solving complex problems and delivering
              high-quality software solutions that make a real impact. I'm
              proficient in modern web technologies and always eager to learn
              and adapt to new challenges in the ever-evolving tech landscape.
            </p>
          )}
          <button
            onClick={() => setShowFullBio(!showFullBio)}
            className="text-blue-400 hover:underline mb-4"
          >
            {showFullBio ? "Show Less" : "Read More"}
          </button>
          <div className="space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
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
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, product management, and payment integration.",
      details:
        "This project utilizes React for the frontend, Node.js and Express for the backend, and MongoDB for the database. It includes features such as user authentication, product catalog management, shopping cart functionality, and integration with Stripe for payments.",
      image: getRandomImageUrl(400, 300, "ecommerce"),
    },
    {
      title: "Task Management App",
      description:
        "A responsive web application built with Vue.js and Firebase, allowing users to create, assign, and track tasks in real-time.",
      details:
        "Built with Vue.js for the frontend and Firebase for backend services, this app provides real-time synchronization of tasks across devices. It features user authentication, task creation and assignment, due date tracking, and email notifications.",
      image: getRandomImageUrl(400, 300, "task-management"),
    },
    {
      title: "Financial Dashboard",
      description:
        "An interactive dashboard using D3.js for data visualization, providing insights into financial data with real-time updates and filtering capabilities.",
      details:
        "This dashboard uses D3.js for creating interactive and responsive data visualizations. It integrates with a RESTful API to fetch real-time financial data, and includes features such as custom date range selection, multiple chart types, and export functionality.",
      image: getRandomImageUrl(400, 300, "financial-dashboard"),
    },
    {
      title: "Fitness Tracking Mobile App",
      description:
        "A React Native mobile app that tracks workouts, nutrition, and progress, integrating with wearable devices for comprehensive health monitoring.",
      details:
        "Developed using React Native, this cross-platform mobile app integrates with various fitness APIs to track user workouts, nutrition, and overall health progress. It features a customizable workout planner, nutrition tracker, and progress visualization tools.",
      image: getRandomImageUrl(400, 300, "fitness-tracker"),
    },
  ]);

  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto px-6 py-12 bg-gray-900 text-white"
    >
      <h2 className="text-2xl font-bold mb-8">PORTFOLIO</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 p-6 rounded-lg max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
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
  const services = [
    {
      icon: <FileCode2 className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Creating responsive and dynamic websites using modern frameworks and best practices.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile applications with React Native and Flutter.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user interfaces for web and mobile applications.",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "API Development",
      description:
        "Building robust and scalable APIs to support your frontend applications.",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-6 py-12 bg-gray-900 text-white"
    >
      <h2 className="text-2xl font-bold mb-8">SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg text-center space-y-4"
          >
            <div className="text-blue-400 mx-auto">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Experience Component (unchanged)
const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Software Developer",
      duration: "2019 - Present",
      description:
        "Lead the development of scalable web applications, collaborating with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      company: "Web Innovators LLC",
      position: "Full Stack Developer",
      duration: "2017 - 2019",
      description:
        "Developed and maintained web applications, ensuring optimal performance and user experience across different devices.",
    },
    {
      company: "Creative Web Agency",
      position: "Frontend Developer",
      duration: "2015 - 2017",
      description:
        "Designed and implemented responsive user interfaces, focusing on usability and aesthetics.",
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-12 bg-gray-900 text-white"
    >
      <h2 className="text-2xl font-bold mb-8">EXPERIENCE</h2>
      <ul className="space-y-6">
        {experiences.map((experience, index) => (
          <li key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">{experience.position}</h3>
            <p className="text-blue-400">{experience.company}</p>
            <p className="text-gray-400">{experience.duration}</p>
            <p className="mt-2">{experience.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

// Contact Component (unchanged)
const Contact = () => (
  <section
    id="contact"
    className="max-w-4xl mx-auto px-6 py-12 bg-gray-900 text-white"
  >
    <h2 className="text-2xl font-bold mb-8">CONTACT</h2>
    <p className="text-lg mb-8">
      Interested in working together? Reach out to me via the form below or
      connect with me on social media.
    </p>
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-gray-800 text-white"
        />
      </div>
      <textarea
        placeholder="Your Message"
        className="p-4 rounded-lg bg-gray-800 text-white w-full mb-6"
        rows="6"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Send Message
      </button>
    </form>
  </section>
);

// Footer Component (unchanged)
const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-6">
    <p>&copy; 2024 Khushi Lama. All Rights Reserved.</p>
  </footer>
);

// Main App Component
const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      <Navbar scrollToSection={scrollToSection} />
      <Header scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />
      <Portfolio />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
