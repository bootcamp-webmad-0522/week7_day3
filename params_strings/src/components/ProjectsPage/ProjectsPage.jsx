import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProjectsPage({ projectsData }) {

    const [projects, setProjects] = useState([])


    // Segundo argumento como array vacío => fase de montaje 

    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (

        <div>

            <h2>Proyectos</h2>

            <hr />

            {
                projects.map(({ _id, name, technologies }) => {
                    return (
                        <div key={_id} className="project">
                            <h3>{name}</h3>
                            <p>{technologies}</p>
                            <Link to={`/proyectos/${_id}`}>Ver detalles</Link>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ProjectsPage;