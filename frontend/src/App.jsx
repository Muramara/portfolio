import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {

  const [currentPage, setCurrentPage] = useState(<About />)
  function changePage(page) {
    if (page === 'About') {
      setCurrentPage(<About />)
    } else if (page === 'Projects') {
      setCurrentPage(<Projects />)
    } else if (page === 'Skills') {
      setCurrentPage(<Skills />)
    } else if (page === 'Contact') {
      setCurrentPage(<Contact />)
    }
  }

  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  )
}
