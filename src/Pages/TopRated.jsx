import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { getMovies } from "../Utilities/movie-service";

const Movies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [topRated, setTopRated] = useState([])

    const getTopRated = async () => {
        setIsLoading(true)
        const movieData = await getMovies()
        if (movieData) setTopRated(movieData);
        setIsLoading(false)
    }
    
    const renderTopRated = () => (
            topRated.map((m, idx) => (
                <div key={idx}>
                    <h3>{m.title}</h3>
                    <p>{m.overview}</p>
                    <h4>Rating: {m.vote_average}</h4>
                    <hr/>
                </div>
            ))
    )


    useEffect(() => {
        getTopRated()
    }, [])

    const renderLoading = () => (
        <h2>
          Loading...{" "}
        </h2>
      );

    return (
        <>
        {isLoading ? renderLoading() : renderTopRated()}
        </>
    )
}

export default Movies
