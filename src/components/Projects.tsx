import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Pick ’n’ Get (Recycling DApp)",
      category: "Web Design",
      description:
        "A Web3-powered recycling and waste management platform built to transform how individuals and communities handle waste while earning rewards.",
      image:
        "/Pick'n'Get.png",
      tags: ["UI/UX", "React", "Web3"],
      link: "https://tinyurl.com/PickGett",
    },

    {
      id: 2,
      title: "Glamorix Web App",
      category: "Web Design",
      description:
        "A seamless blend of classic heritage and contemporary style, curated to elevate your fashion for formal gatherings and cultural celebrations.",
      image:
        "/Glamorix.png",
      tags: ["Fashion", "E-Commerce", "UI/UX"],
      link: "https://tinyurl.com/Glamorixx",
    },
    {
      id: 3,
      title: "FLUD App",
      category: "Mobile",
      description:
        "On-Demand Fuel and Car Services at Your Fingertips — a modern mobile solution designed to deliver fuel, car maintenance, and emergency services whenever and wherever you need them.",
      image:
        "/FLUD.png",
      tags: ["On-Demand", "Mobile", "AutoTech"],
      link: "https://tinyurl.com/5bacvxem", // 👈 external link to the FLUD app
    },
    {
      id: 4,
      title: "YoShop",
      category: "E-Commerce",
      description:
        "A modern online grocery shopping platform designed for convenience — offering users a seamless way to browse, order, and get essentials delivered straight to their doorsteps.",
      image:
        "/src/assets/pick'n'get.png",
      tags: ["E-Commerce", "Grocery", "Delivery"],
      link: "https://tinyurl.com/YoShhop",
    },
    {
      id: 5,
      title: "Ticket City",
      category: "Web3 App",
      description:
        "Blockchain-powered event ticketing platform ensuring transparent, tamper-proof, and secure digital ticketing for concerts, festivals, and shows.",
      image: "/TicketCity.png",
      tags: ["Web3", "Blockchain", "Ticketing"],
      link: "https://tinyurl.com/42brwuuk",
    },
    {
      id: 6,
      title: "Lemme",
      category: "Web App",
      description:
        "A stunning clone of Lemmelive.com reimagined as a sleek social web app — designed for seamless creator interaction, live engagement, and authentic community experiences.",
      image:
        "/Lemme.png",
      tags: ["Web", "Social", "Live Interaction"],
      link: "https://tinyurl.com/lemmeClone",
    },
  ];

  const categories = ["All", "Web Design", "Mobile", "Branding"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Here's a selection of my recent work across different platforms and
            industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-purple-500/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                    View Project →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
