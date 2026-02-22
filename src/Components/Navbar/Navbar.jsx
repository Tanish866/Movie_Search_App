import { useContext, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './Navbar.css';
import UseMovieList from '../../hook/UseMovieList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useDebounce from '../../hook/useDebounce';
import {  Link, useNavigate } from 'react-router-dom';

function Navbar(){
    const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const {movieList} = UseMovieList(searchTerm);
    const navigator = useNavigate();
    const {theme, setTheme} = useContext(ThemeContext);

    function handleAutoCompleteClick(e, imdbId){
        navigator(`/movie/${imdbId}`);
        console.log(e, imdbId);
    }

    function updateTheme(){
        if(theme == 'dark'){
            setTheme('light');
            localStorage.setItem('app-theme', 'light');
        }
        else{
            setTheme('dark');
            localStorage.setItem('app-theme','dark');
        }
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
            <div onClick={updateTheme} >
                <FontAwesomeIcon className='theme-icon' icon={(theme == 'dark') ? faMoon : faSun}  />
            </div>
        </div>
    )
}
export default Navbar;