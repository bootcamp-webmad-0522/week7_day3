import { useState } from "react"
import { movies } from "../../fakeAPI"
import AddMovie from "../AddMovie/AddMovie"
import MovieCard from "../MovieCard/MovieCard"
import MoviesFilter from "../MoviesFilter/MoviesFilter"

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState(movies)
    const [moviesData, setMoviesData] = useState(movies)            // backup

    const removeMovie = movieID => {
        const filteredMoviesList = moviesList.filter(elm => elm._id != movieID)
        setMoviesList(filteredMoviesList)

        const filteredMoviesData = moviesData.filter(elm => elm._id != movieID)
        setMoviesData(filteredMoviesData)
    }

    const createMovie = newMovie => {
        const moviesListCopy = [newMovie, ...movies]
        setMoviesList(moviesListCopy)

        const moviesDataCopy = [newMovie, ...moviesData]
        setMoviesData(moviesDataCopy)
    }

    const filterMovies = letter => {

        if (letter === 'All') {
            setMoviesList(moviesData)
        } else {
            const filteredMovies = moviesData.filter(elm => elm.title.startsWith(letter))
            setMoviesList(filteredMovies)
        }
    }

    return (

        <>
            <h2>Películas</h2>

            <AddMovie createMovie={createMovie} />

            <hr />

            <MoviesFilter filterMovies={filterMovies} />

            <hr />

            {
                moviesList.map(movie => <MovieCard {...movie} key={movie._id} removeMovie={removeMovie} />)
            }
        </>
    )
}


export default MoviesList