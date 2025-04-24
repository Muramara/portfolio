import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
  
    // Helper to apply the 'active' class to the current page
    const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';
  
    return (
      <section>
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className={isActive('/about')} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={isActive('/projects')} to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className={isActive('/skills')} to="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className={isActive('/contact')} to="/contact">Contact Me</Link>
              </li>
            </ul>
          </header>
        </div>
      </section>
    );
  }