import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard/MovieCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { searchMovieByID } from "../apis/omdb";

function MovieDetails(){
    const {id} = useParams();

    const [movie, setMovie] = useState({});

    async function downloadMovieDetails(){
        const response = await axios.get(searchMovieByID(id));
        setMovie(response.data);
    }
    useEffect(() => {
        downloadMovieDetails();
    }, [id]);
    return(
        <>
            {
                movie && <MovieCard 
                            Title={movie.Title}
                            Year={movie.Year}
                            Type={movie.Type}
                            Poster={movie.Poster}
                        />
            }
        </>
    )
}
export default MovieDetails;