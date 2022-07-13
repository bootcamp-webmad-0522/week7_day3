import { useState } from "react"

const AddMovie = ({ createMovie }) => {

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [IMDBRating, setRating] = useState(0)
    const [hasOscars, setHasOscars] = useState(false)

    const handleTitle = e => setTitle(e.target.value)
    const handleDirector = e => setDirector(e.target.value)
    const handleRating = e => setRating(e.target.value)
    const handleOscars = e => setHasOscars(e.target.checked)

    const handleSubmit = e => {
        e.preventDefault()

        const newMovie = { title, director, hasOscars, IMDBRating }
        createMovie(newMovie)

        setTitle('')
        setDirector('')
        setRating(0)
        setHasOscars(false)
    }

    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Título</label>
            <input type="text" id="title" value={title} onChange={handleTitle} />

            <br />
            <br />

            <label htmlFor="director">Director</label>
            <input type="text" id="director" value={director} onChange={handleDirector} />

            <br />
            <br />

            <label htmlFor="rating">Puntuación</label>
            <input type="number" id="rating" value={IMDBRating} onChange={handleRating} />

            <br />
            <br />

            <label htmlFor="hasOscars">Obtuvo Oscar?</label>
            <input type="checkbox" id="hasOscars" checked={hasOscars} onChange={handleOscars} />

            <br />
            <br />

            <input type="submit" value="Crear película" />
        </form>
    )
}

export default AddMovie