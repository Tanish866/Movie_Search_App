import { useRef, useState } from 'react';
import './Navbar.css';

function Navbar(){
    // const resultRef = useRef(null);
    const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
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
                    placeholder='What do you think about...'

                />
                <div id='result-list' style={{display: (autoCompleteVisible) ? 'block':'none'}}>
                    <div className='auto-complete'>result 1</div>
                    <div className='auto-complete'>result 2</div>
                    <div className='auto-complete'>result 3</div>
                </div>
            </div>
            <div>
                Theme
            </div>
        </div>
    )
}
export default Navbar;