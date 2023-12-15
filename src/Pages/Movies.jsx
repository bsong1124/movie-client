import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { getMovie } from "../Utilities/movie-service";

const Movies = () => {
    const [isLoading, setIsLoading] = useState(true)
    return <h2>Movies Page</h2>
}

export default Movies
