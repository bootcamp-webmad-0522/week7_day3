import { Link, useSearchParams } from "react-router-dom"

const ResultsPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const size = searchParams.get("talla");
    const color = searchParams.get("color");

    return (
        <>
            <h1>Talla: {size} y color: {color}</h1>
            <Link to="/">Volver al inicio</Link>
        </>
    )
}


export default ResultsPage