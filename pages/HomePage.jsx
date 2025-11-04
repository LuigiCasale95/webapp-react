/* import di axios */
import axios from "axios"

/* Import di use state ed effect */
import {useState, useEffect} from "react"

/* Import di movie card */
import MovieCard from "../src/components/MovieCard"

const HomePage = () => {

    /* Variabile di stato per i film */
    const [movies , setMovies] = useState();

    // Funzione per richiesta axios
    const fecthMovies = () => {
        axios.get('http://localhost:3000/api/movies')
        .then(res => {setMovies(res.data)})
        .catch(error => { console.log(error)})
    }

    
    return (
       <> 
        <h1 className="text-primary">Movie</h1>
        <h2>Film per tutti</h2>
        <div className="row row-cols-3 mt-4">
            {/* Film qui */}
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
       </>
    )
}

export default HomePage