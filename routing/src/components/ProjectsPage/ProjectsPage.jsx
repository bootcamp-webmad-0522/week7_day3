
import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectsPage({ projectsData }) {

    const [projects, setProjects] = useState(projectsData);

    return (
        <div>
            <h2>Projects</h2>
            <Link to="/">inicio</Link>
            <hr />
            {projects.map((project) => {
                return (
                    <div key={project.id} className="project">
                        <h3>{project.name}</h3>
                        <p>{project.technologies}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectsPage;