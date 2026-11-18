import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Certificates from './components/Certificates.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [portfolioData, setPortfolioData] = useState(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');

    fetch('/api/get-portfolio.php')
      .then((res) => res.json())
      .then((data) => setPortfolioData(data))
      .catch((err) => console.error('Errore nel caricamento dati:', err));
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className={
      darkMode ? 'bg-linear-to-br from-gray-900 via-[#2e0d10] to-red-900 min-h-screen' : 'bg-linear-to-br from-gray-50 to-red-50 min-h-screen'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero profile={portfolioData?.profile} socials={portfolioData?.socials} />
      <About profile={portfolioData?.profile} socials={portfolioData?.socials} />
      <Skills skills={portfolioData?.skills} websiteText={portfolioData?.website_text} />
      <Certificates certificates={portfolioData?.certificates} />
      <Projects projects={portfolioData?.projects} />
      <Contact />
      <Footer profile={portfolioData?.profile} socials={portfolioData?.socials} />
    </div>
  )
}

export default App
