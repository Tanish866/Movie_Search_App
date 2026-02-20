import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar-wrapper">
            <div>
                Movie Base
            </div>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder='What do you think about...'
                />
            </div>
            <div>
                Theme
            </div>
        </div>
    )
}
export default Navbar;