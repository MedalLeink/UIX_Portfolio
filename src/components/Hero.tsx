import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Product Designer", "UX/UI Specialist", "Design Systems Expert", "User Advocate"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    if (currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText("");
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleIndex, titles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="smooth-enter">
          {/* Clean, Professional Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Hello, I'm Alex
            </h1>
            <div className="h-16 mb-8 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-light text-muted-foreground">
                <span className="accent-text">{displayText}</span>
                <span className="animate-blink text-primary ml-1">|</span>
              </h2>
            </div>
          </div>
          
          {/* Professional Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft intuitive digital experiences that solve complex problems through 
            <span className="text-primary font-medium"> thoughtful design</span> and 
            <span className="text-accent font-medium"> user-centered thinking</span>.
          </p>
          
          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="btn-primary hover-lift"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="btn-outline hover-lift"
            >
              Let's Connect
            </a>
          </div>
        </div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-accent rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-primary/60 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
