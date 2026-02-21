// Components imports
import MovieCard from "../Components/MovieCard/MovieCard";

// CSS imports
import './Home.css';
import UseMovieList from "../hook/UseMovieList";

function Home(){

    const {movieList} = UseMovieList('harry');

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