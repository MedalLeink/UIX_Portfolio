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
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Clean Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Selected work showcasing my approach to solving complex design challenges through 
            <span className="text-primary font-medium"> strategic thinking</span> and 
            <span className="text-accent font-medium"> user-focused solutions</span>.
          </p>
        </div>

        {/* Clean Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover-lift ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Clean Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group clean-card hover-lift smooth-enter"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* CTA */}
                <div className="pt-2">
                  <button className="flex items-center gap-2 text-primary hover:text-accent font-medium text-sm transition-colors">
                    <span>View Case Study</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="btn-primary hover-lift inline-block"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
