// import di router-dom per link
import { Link } from "react-router-dom"

// creazione componente Header
const MovieCard = () => {
    return (
        <div className="card mb-4">
            <img src="https://pad.mymovies.it/filmclub/2003/01/012/locandina.jpg" alt="titolo film" />
            <div className="card-body">
                <h5 className="card-title">Titolo Film</h5>
                <address><i>Regista</i></address>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quam! Quaerat molestias autem hic neque quia quod asperiores, vel veniam mollitia repellat illo repudiandae praesentium qui deserunt velit adipisci explicabo!
                </p>
                <Link to="books/1" className="btn btn-primary">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default MovieCard