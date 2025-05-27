import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Full Stack Development</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Crafting beautiful, functional digital experiences that connect users to brands through thoughtful design and clean code.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Muramara" 
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Github"
                target='_blank'
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sebastian-muramara-70021a2b5/" 
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target='_blank'
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-300 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-slate-300">
                <span className="block text-slate-400">Email</span>
                <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
                  sebastianmuramara@gmail.com
                </a>
              </li>
              <li className="text-slate-300">
                <span className="block text-slate-400">Phone</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +(254) 710 275 900
                </a>
              </li>
              <li className="text-slate-300">
                <span className="block text-slate-400">Location</span>
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Sebastian Muramara.
          </p>
          <p className="text-slate-400 text-sm mt-2 sm:mt-0">
            Designed and built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;