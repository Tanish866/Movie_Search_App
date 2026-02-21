import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import MovieDetails from '../Pages/MovieDetails'
import Error from '../Pages/Error';

function MainRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie/:id' element={<MovieDetails/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    )
}
export default MainRoutes;