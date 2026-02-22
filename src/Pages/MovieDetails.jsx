import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard/MovieCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { searchMovieByID } from "../apis/omdb";
import { Rating } from "@smastrom/react-rating";

// CSS imports
import './MovieDetails.css';
import '@smastrom/react-rating/style.css'

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
        <div className="movie-details-wrapper">
            {
                movie && <MovieCard 
                            Title={movie.Title}
                            Year={movie.Year}
                            Type={movie.Type}
                            Poster={movie.Poster}
                            id={movie.imdbID}
                        />
            }
            { 
                movie && <div className="movie-details">
                    <div className="movie-plot">
                        Plot: {movie.Plot}
                    </div>
                    <div className="movie-actor">
                        Actor: {movie.Actors}
                    </div>
                    <div className="movie-genre">
                        Genre: {movie.Genre && movie.Genre.split(',').map((genre, idx) =>{
                            return <span className="genre" key={idx}>{genre}</span>
                        })}
                    </div>
                    <div>
                        <Rating items={10} value={Math.floor(movie.imdbRating)} ></Rating>
                    </div>
                </div>
            }
        </div>
    )
}
export default MovieDetails;