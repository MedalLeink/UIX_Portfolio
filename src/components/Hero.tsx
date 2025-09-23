import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Product Designer ", "UI/UX Specialist ", "Design Systems Expert ", "User Advocate "];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    if (currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText("");
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleIndex, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Hello, I'm Madeleine
          </h1>
          
          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-4xl font-light text-purple-300">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional designs that solve real problems and deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-purple-500 text-purple-300 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Hero;
