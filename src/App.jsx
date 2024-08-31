import { Code2, FileCode2, Monitor, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

// Utility function to get a random image URL
const getRandomImageUrl = (width, height, id) =>
  `https://picsum.photos/seed/${id}/${width}/${height}`;

// Navbar Component
import k from "./assets/image.png";

import lama from "./assets/lama.png";
import wk from './assets/wk.jpg';
const Navbar = ({ scrollToSection }) => (
  <nav className="flex justify-between items-center p-6 h-20  bg-gradient-to-r from-indigo-950 via-purple-700 to-pink-950 sticky top-0 z-10">
    <div className="text-2xl font-serif rounded-full flex gap-x-2">
      <img src={wk} alt="" className=" w-14 h-14 object-fill rounded-full" />
      <span className="text-[#F5DEB3]  mt-3">
        <img src={k} className="h-10 w-10 mb-1 inline" alt="" />

        <span className="font-serif">hushi</span>
        <span className="text-[#FFD700]">
          <img src={lama} className="h-8 w-8  ml-2 mb-2 inline" alt="" />
          ama
        </span>
      </span>
    </div>
    <div className="space-x-4">
      {["Home", "About Me", "Portfolio", "Services", "Experience"].map(
        (item) => (
          <button
            key={item}
            onClick={() =>
              scrollToSection(item.toLowerCase().replace(" ", "-"))
            }
            className="text-white hover:text-teal-300 transition duration-300"
          >
            {item}
          </button>
        )
      )}
    </div>
    <button
      onClick={() => scrollToSection("contact")}
      className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
    >
      Contact
    </button>
  </nav>
);

// Header Component
import A from "./assets/A.jpg";
import h from "./assets/h.webp";
import i from "./assets/i.webp";
import m from "./assets/m.png";
import img from "./assets/myImg.png";
import s from "./assets/s.png";
import sm from "./assets/smile.png";
import u from "./assets/u.png";

const Header = ({ scrollToSection }) => (
  <header
    style={{ backgroundImage: `url(${img})` }}
    id="home"
    className="text-center bg-no-repeat bg-center bg-cover py-20 bg-gray-800 text-white"
  >
    <h1 className="text-2xl mb-4">
      <img src={i} className="h-20 mt-2 w-14 -ml-4 inline" alt="" />
      <img src={A} className="h-16 w-13 mb-1 inline" alt="" />
      <img src={m} className="h-16 w-12 -ml-5 mb-1 inline" alt="" />
      <img src={k} className="h-16 w-13 ml-5 mb-1 inline" alt="" />
      <img src={h} className="h-13 w-10 -ml-3 mb-1 inline" alt="" />
      <img src={u} className="h-13  w-9  inline" alt="" />
      <img src={s} className="h-14 w-9  inline" alt="" />
      <img src={h} className="h-13 w-10 -ml-1 inline" alt="" />
      <img src={i} className="h-13 mt-2 w-14 -ml-4 inline" alt="" />
      <img src={sm} alt="" className="w-20 h-20 inline mb-3" />
      <br />
      <span className="text-pink-300 text-2xl font-serif" >Flutter Developer.</span>
    </h1>
    <p className=" mb-6 text-sky-200 text-2xl  font-thin">
      Turning ideas into elegant, efficient, and user-friendly applications.
    </p>
    <button
      onClick={() => scrollToSection("portfolio")}
      className="bg-teal-600 text-white px-6 py-3 rounded-full mt-6 hover:bg-teal-500 transition duration-300"
    >
      View My Work
    </button>
  </header>
);

// About Component
import cv from "./assets/cv.pdf";
const About = ({ scrollToSection }) => {
  const [showFullBio, setShowFullBio] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    setProfileImage(getRandomImageUrl(150, 150, "profile"));
  }, []);

  return (
    <section
      id="about-me"
      className="max-w-4xl mx-auto px-6 py-12 bg-gray-800 text-white"
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
            With 6 months of experience as a Flutter Developer, I have developed
            and maintained mobile applications. Before this, I managed financial
            records as an Accountant at Paper Cloud Pvt. Ltd., and handled sales
            operations at Masalabeads.
          </p>

          {showFullBio && (
            <p className="mb-4">
              My passion lies in solving complex problems and delivering
              high-quality software solutions that make a real impact. I`m
              proficient in modern web technologies and always eager to learn
              and adapt to new challenges in the ever-evolving tech landscape.
            </p>
          )}
          <button
            onClick={() => setShowFullBio(!showFullBio)}
            className="text-teal-300 hover:underline mb-4 transition duration-300"
          >
            {showFullBio ? "Show Less" : "Read More"}
          </button>
          <div className="space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
            >
              Hire Me
            </button>
            <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition duration-300">
              <a href={cv} download="cv">
                {" "}
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Component
import p_image from "./assets/flower.jpg";
import p1_image from "./assets/gym.jpg";
import p3_image from "./assets/Quiz.jpg";
import p4_image from "./assets/todo.jpg";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects] = useState([
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, product management, and payment integration.",
      details:
        "This project utilizes React for the frontend, Node.js and Express for the backend, and MongoDB for the database. It includes features such as user authentication, product catalog management, shopping cart functionality, and integration with Stripe for payments.",
      image: p_image,
    },
    {
      title: "Task Management App",
      description:
        "A responsive web application built with Vue.js and Firebase, allowing users to create, assign, and track tasks in real-time.",
      details:
        "Built with Vue.js for the frontend and Firebase for backend services, this app provides real-time synchronization of tasks across devices. It features user authentication, task creation and assignment, due date tracking, and email notifications.",
      image: p4_image,
    },
    {
      title: "Financial Dashboard",
      description:
        "An interactive dashboard using D3.js for data visualization, providing insights into financial data with real-time updates and filtering capabilities.",
      details:
        "This dashboard uses D3.js for creating interactive and responsive data visualizations. It integrates with a RESTful API to fetch real-time financial data, and includes features such as custom date range selection, multiple chart types, and export functionality.",
      image: p3_image,
    },
    {
      title: "Fitness Tracking Mobile App",
      description:
        "A React Native mobile app that tracks workouts, nutrition, and progress, integrating with wearable devices for comprehensive health monitoring.",
      details:
        "Developed using React Native, this cross-platform mobile app integrates with various fitness APIs to track user workouts, nutrition, and overall health progress. It features a customizable workout planner, nutrition tracker, and progress visualization tools.",
      image: p1_image,
    },
  ]);

  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto px-6 py-12 bg-gray-800 text-white"
    >
      <h2 className="text-2xl font-bold mb-8">PORTFOLIO</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
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
                className="text-teal-300 hover:underline"
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
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-teal-500" />,
      title: "Web Development",
      description:
        "Crafting beautiful and functional websites that perform seamlessly across all devices.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-teal-500" />,
      title: "Mobile App Development",
      description:
        "Developing intuitive and engaging mobile applications for Android and iOS.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-teal-500" />,
      title: "Software Development",
      description:
        "Building robust software solutions tailored to meet your specific business needs.",
    },
    {
      icon: <FileCode2 className="w-8 h-8 text-teal-500" />,
      title: "UI/UX Design",
      description:
        "Designing user interfaces and experiences that are both aesthetically pleasing and highly functional.",
    },
  ];

  return (
    <section id="services" className="bg-gray-800 text-white py-12">
      <h2 className="text-2xl font-bold text-center mb-8">SERVICES</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg text-center">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => (
  <section id="experience" className="bg-gray-800 text-white py-12">
    <h2 className="text-2xl font-bold text-center mb-8">EXPERIENCE</h2>
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-700 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold mb-2">
          Flutter Developer at Gamenic Nalamiz Tech
        </h3>
        <p>June 2024 - Present</p>
        <ul className="list-disc list-inside mt-2">
          <li>Developed cross-platform mobile applications using Flutter.</li>
          <li>
            Collaborated with designers and backend developers to create
            seamless user experiences.
          </li>
          <li>
            Optimized app performance and fixed bugs based on user feedback.
          </li>
        </ul>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold mb-2">
          Accountant at Paper Cloud Pvt. Ltd.
        </h3>
        <p>March 2023 - May 2024</p>
        <ul className="list-disc list-inside mt-2">
          <li>Managed financial records and prepared monthly reports.</li>
          <li>Conducted audits and reconciliations to ensure accuracy.</li>
          <li>Assisted in budgeting and financial forecasting.</li>
        </ul>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">
          Sales Executive at Masalabeads
        </h3>
        <p>January 2022 - February 2023</p>
        <ul className="list-disc list-inside mt-2">
          <li>Achieved sales targets and expanded the customer base.</li>
          <li>Coordinated with suppliers and managed inventory.</li>
          <li>Provided excellent customer service and handled inquiries.</li>
        </ul>
      </div>
    </div>
  </section>
);

// Contact Component
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const serviceId = import.meta.env.VITE_Service;
  const templateId = import.meta.env.VITE_Template;
  const publicKey = import.meta.env.VITE_Public;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
        toast("SUCCESS");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <div>
      <section id="contact" className="bg-gray-800 text-white py-12">
        <h2 className="text-2xl font-bold text-center mb-8">CONTACT ME</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-6">
            Feel free to reach out if you have any questions or if you`d like to
            discuss a potential project.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="w-full p-2 bg-gray-700 text-white rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                className="w-full p-2 bg-gray-700 text-white rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 bg-gray-700 text-white rounded"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Khushi Lama. All rights reserved.
    </p>
  </footer>
);

// Main App Component

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="font-sans bg-gray-900 text-gray-100">
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
