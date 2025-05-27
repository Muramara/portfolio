import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 500, 0);
      const translateY = scrollY * 0.5;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900 dark:to-blue-950 z-0"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[15%] w-72 h-72 bg-teal-300/20 dark:bg-teal-500/10 rounded-full blur-3xl" />
      
      <div 
        ref={heroRef} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-300"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Sebastian Mira Muramara 
            </span>
            <span className="block text-blue-700 dark:text-blue-400 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Front & Backend developer specializing in crafting beautiful, functional, and user-centered digital experiences. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <a 
              href="#projects" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              <span className="mr-2">Scroll to discover</span>
              <span className="animate-bounce">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;