import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const [darkmode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkmode]);

  const toggleDarkMode = () => {
    const newMode = !darkmode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className={
      darkMode ? 'bg-linear-to-br from-gray-900 via-[#2e0d10] to-red-900 min-h-screen' : 'bg-linear-to-br from-gray-50 to-red-50 min-h-screen'
    }>
      <Navbar darkMode={darkmode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App