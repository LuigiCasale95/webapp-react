// import di router-dom per link
import { Link } from "react-router-dom"

// creazione componente Header
const MovieCard = ({movieProp}) => {

    /* destrutturazione dell'oggetto passato da props */
    const {id, title, director, abstract, image } = movieProp
    return (
        <div className="card mb-4">
            <img src={image} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <address><i>{director}</i></address>
                <p className="card-text">
                    {abstract}                    
                </p>
                <Link to={`movies/${id}`} className="btn btn-primary">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default MovieCard