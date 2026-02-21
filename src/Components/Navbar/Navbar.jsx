import { useState } from 'react';
import './Navbar.css';
import UseMovieList from '../../hook/UseMovieList';
import useDebounce from '../../hook/useDebounce';

function Navbar(){
    const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const {movieList} = UseMovieList(!searchTerm ? 'avengers':searchTerm);
    return(
        <div className="navbar-wrapper">
            <div>
                Movie Base
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
                        movieList.map((movie) => 
                            <div 
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