import { Code2, FileCode2, Monitor, Smartphone } from "lucide-react";

// Navbar Component
const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-gray-800">
    <div className="text-2xl font-bold border-2 border-red-500 rounded-full p-1 text-white">KL</div>
    <div className="space-x-4">
      {["Home", "About Me", "Portfolio", "Services", "Experience"].map(
        (item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-white hover:text-blue-400"
          >
            {item}
          </a>
        )
      )}
    </div>
    <button className="bg-blue-600 text-white px-4 py-2 rounded">
      Contact
    </button>
  </nav>
);

// Header Component
const Header = () => (
  <header id="home" className="text-center py-20 bg-gray-900 text-white">
    <h1 className="text-5xl font-bold mb-4">
      I`m Khushi Lama,
      <br />
      Flutter Developer .
    </h1>
    <p className="text-xl mb-6">
      Turning ideas into elegant, efficient, and user-friendly applications.
    </p>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-full mt-6">
      View My Work
    </button>
  </header>
);

// About Component
const About = () => (
  <section
    id="about-me"
    className="max-w-4xl mx-auto px-6 py-12 bg-gray-900 text-white"
  >
    <div className="flex items-center space-x-8">
      <img
        src="/api/placeholder/150/150"
        alt="Khushi Lama"
        className="rounded-lg"
      />
      <div>
        <h2 className="text-2xl font-bold mb-4">ABOUT ME</h2>
        <p className="mb-4">
          With over 5 years of experience in Flutter Developer development, I
          specialize in creating robust and scalable web applications. My
          passion lies in solving complex problems and delivering high-quality
          software solutions that make a real impact.
        </p>
        <p className="mb-4">
          I`m proficient in modern web technologies and always eager to learn
          and adapt to new challenges in the ever-evolving tech landscape.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Hire Me
          </button>
          <button className="border border-white text-white px-4 py-2 rounded">
            Download CV
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Portfolio Component
const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, product management, and payment integration.",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Task Management App",
      description:
        "A responsive web application built with Vue.js and Firebase, allowing users to create, assign, and track tasks in real-time.",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Financial Dashboard",
      description:
        "An interactive dashboard using D3.js for data visualization, providing insights into financial data with real-time updates and filtering capabilities.",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Fitness Tracking Mobile App",
      description:
        "A React Native mobile app that tracks workouts, nutrition, and progress, integrating with wearable devices for comprehensive health monitoring.",
      image: "/api/placeholder/400/300",
    },
  ];

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
              <p className="text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
          View All Projects
        </button>
      </div>
    </section>
  );
};

// Services Component
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
        "Building robust and scalable RESTful APIs using Node.js and Express.",
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
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            {service.icon}
            <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "GraphQL",
    "MongoDB",
  ];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-12 bg-gray-900 text-white"
    >
      <h2 className="text-2xl font-bold mb-8">TECHNICAL SKILLS</h2>
      <div className="flex flex-wrap gap-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 px-4 py-2 rounded-full">
            {exp}
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-8">
    <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
    <p>Let`s work together on your next project</p>
    <div className="mt-4 space-x-4">
      <a
        href="mailto:Khushi.Lama@Pagal.com"
        className="text-blue-400 hover:underline"
      >
        Khushi.Lama@Pagal.com
      </a>
      <a href="tel:+1234567890" className="text-blue-400 hover:underline">
        (9800841208)
      </a>
      <a href="#" className="text-blue-400 hover:underline">
        Surybinayak,Kathmandu 
      </a>
    </div>
  </footer>
);

// Main App Component
const App = () => (
  <div className="bg-gray-900 min-h-screen">
    <Navbar />
    <Header />
    <About />
    <Portfolio />
    <Services />
    <Experience />
    <Footer />
  </div>
);

export default App;
