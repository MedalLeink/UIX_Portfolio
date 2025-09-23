import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Design",
      description: "Modern e-commerce platform with seamless user experience and conversion-focused design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["UI/UX", "React", "Tailwind"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile",
      description: "Intuitive banking app focusing on security, accessibility, and user-friendly interface.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      tags: ["Mobile", "FinTech", "UX"]
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity system including logo, color palette, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      tags: ["Branding", "Logo", "Identity"]
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      category: "Web Design",
      description: "Complex data visualization dashboard with clean design and intuitive user interactions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      tags: ["Dashboard", "Analytics", "Data Viz"]
    },
    {
      id: 5,
      title: "Creative Portfolio",
      category: "Web Design",
      description: "Personal portfolio website showcasing creative work with smooth animations.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      tags: ["Portfolio", "Creative", "Animation"]
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile",
      description: "User-friendly food delivery app with location services and real-time tracking.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=600&fit=crop",
      tags: ["Mobile", "Food", "Delivery"]
    }
  ];

  const categories = ["All", "Web Design", "Mobile", "Branding"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Here's a selection of my recent work across different platforms and industries.
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
            <div
              key={project.id}
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
                  <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
