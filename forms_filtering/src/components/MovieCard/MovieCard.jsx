const MovieCard = ({ _id, director, title, IMDBRating, removeMovie, hasOscars }) => {

    function generateScoreLabel(score) {
        if (score > 9) {
            return <span className="green">9+</span>;
        } else if (score < 7) {
            return <span className="red">{score}</span>;
        } else {
            return <span className="black">{score}</span>;
        }
    }

    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {generateScoreLabel(IMDBRating)}</p>
            <p>{hasOscars ? 'Sí ganó Oscar' : 'No ganó Oscar'}</p>
            <button onClick={() => removeMovie(_id)} >Eliminar película</button>
        </div>
    );
}

export default MovieCard