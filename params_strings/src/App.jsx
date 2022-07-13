import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import ResultsPage from './components/ResultsPage/ResultsPage';


import projectsData from "./projects-data.json";


function App() {

  return (

    <div className='App'>

      <Link to="/resultados?color=rojo&talla=M">VER EJEMPLO DE QUERY STRINGS</Link>

      <Routes>

        <Route path="/" element={
          <ProjectsPage projectsData={projectsData} />
        } />

        <Route path="/proyectos/:project_id" element={
          <ProjectDetails projectsData={projectsData} />
        } />

        <Route path="/resultados" element={
          <ResultsPage />
        } />

      </Routes>


    </div>
  )
}

export default App;
