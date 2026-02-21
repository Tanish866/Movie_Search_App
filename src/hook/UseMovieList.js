import { useEffect, useState } from "react";
import searchMovie from "../apis/omdb";
import axios from "axios";

function UseMovieList(...args){
    const [movieList, setMovieList] = useState([]);
    

    async function downloadDefaultMovie(...args){
        try {
            const urls = args.map((name) => searchMovie(name));
            const response = await axios.all(urls.map(url => axios.get(url)));
            if(response[0].data.Error){
                setMovieList([]);
            }
            else{
                const movie = response.map((movieResponse) => movieResponse.data.Search);
                setMovieList([].concat(...movie));
            }
            
        } catch (error) {
            console.log("log api failed");
        }
        
    }

    useEffect(() =>{
        downloadDefaultMovie(...args);
    }, [...args]);
    return {movieList};
}
export default UseMovieList;