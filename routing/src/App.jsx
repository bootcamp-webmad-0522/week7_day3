import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'

import projectsData from "./projects-data.json";


function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/trabajos" element={<ProjectsPage projectsData={projectsData} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;
