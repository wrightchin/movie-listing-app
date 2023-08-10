import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: headers
        }

        fetch(`http://backend-cityu-demo-go.apps.ocp4.lab.local/movies/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    if (movie.genres) {
        movie.genres = Object.values(movie.genres);
    } else {
        movie.genres = [];
    }

    return(
        <div>
            <h2>Movie: {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.rating}</em></small>
            {movie.genres.map((g) => (
                <span key={g.genre} className="badge bg-secondary me-2">{g.genres}</span>
            ))}
            <hr />

            {movie.image !== "" && 
                <div className="mb-3">
                    image
                </div>
            }

            <p>{movie.description}</p>
        </div>
    )
}

export default Movie;