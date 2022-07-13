import { Link, useParams } from "react-router-dom"

const ProjectDetails = ({ projectsData }) => {

    const { project_id } = useParams()

    const foundProject = projectsData.find(elm => elm._id === project_id)

    return (
        <>
            <h1>Detalles del proyecto {foundProject.name}</h1>
            <hr />
            <p>Hace uso de las tecnologías: {foundProject.technologies}</p>
            <hr />
            <Link to="/">Volver al incio</Link>
        </>
    )
}


export default ProjectDetails