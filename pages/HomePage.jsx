/* Import di movie card */
import MovieCard from "../src/components/MovieCard"

const HomePage = () => {
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