import { useState } from 'react';
import './Navbar.css';
import UseMovieList from '../../hook/UseMovieList';
import useDebounce from '../../hook/useDebounce';
import {  Link, useNavigate } from 'react-router-dom';

function Navbar(){
    const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const {movieList} = UseMovieList(searchTerm);
    const navigator = useNavigate();

    function handleAutoCompleteClick(e, imdbId){
        navigator(`/movie/${imdbId}`);
        console.log(e, imdbId);
    }

    return(
        <div className="navbar-wrapper">
            <div>
                <Link className='movie-base-title' to={"/"}>Movie Base</Link>
                
            </div>
            <div className="search-bar">
                <input 
                    type="text"
                    onFocus={() => {
                        setAutoCompleteVisible(true);
                    }}
                    onBlur={() => {
                        setAutoCompleteVisible(false);
                    }}
                    onChange={useDebounce((e) =>{
                        setSearchTerm(e.target.value);
                    })}
                    placeholder='What do you think about...'
                />
                <div id='result-list' style={{display: (autoCompleteVisible) ? 'block':'none'}}>
                    {
                        movieList.length > 0 && movieList.map((movie) => 
                            <div
                                onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)}
                                key={movie.imdbID} 
                                className='auto-complete'>{movie.Title}
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                Theme
            </div>
        </div>
    )
}
export default Navbar;