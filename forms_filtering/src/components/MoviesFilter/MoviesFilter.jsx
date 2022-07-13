import { useState } from "react";

const MoviesFilter = ({ filterMovies }) => {

    const [selectedOption, setSelectedOption] = useState('All')

    const handleSelect = e => {
        setSelectedOption(e.target.value)
        filterMovies(e.target.value)
    }

    return (
        <div className="FilterMovies">
            <label>Show movies by first letter:</label>
            <select value={selectedOption} onChange={handleSelect}>
                <option value="All">All</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        </div>
    );
}

export default MoviesFilter