import axios from "axios";

// Components imports
import MovieCard from "../Components/MovieCard/MovieCard";
import searchMovie from "../apis/omdb";

// CSS imports
import './Home.css';
import { useEffect, useState } from "react";

function Home(){

    const [movieList, setMovieList] = useState([]);

    async function downloadDefaultMovie(...args){

        const urls = args.map((name) => searchMovie(name));
        const response = await axios.all(urls.map(url => axios.get(url)));
        const movie = response.map((movieResponse) => movieResponse.data.Search);
        console.log([].concat(...movie));
        setMovieList([].concat(...movie));
    }

    useEffect(() =>{
        downloadDefaultMovie('harry', 'avengers', 'batman');
    }, []);

    return(
        <>
            <div className="movie-card-wrapper">
                {
                    movieList.map(movie =>
                        <MovieCard 
                            key={movie.imdbID}
                            {...movie}
                        />
                    )
                }
            </div>
        </>
    );
}
export default Home;