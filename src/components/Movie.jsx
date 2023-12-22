import "./Movie.css";
import { Link } from "react-router-dom";
export function Movie({ data }) {
  

  return (
    <div className="MovieCard">
      <div className="pop_item">
        <div>
          <a href={data.link}>
            <img className="MovieCard-Image" src={data.image} alt="test"></img>
          </a>
        </div>
        <div className="pop_name">
          <h2>{data.name}</h2>
          <Link className="Movie-Card-Link" to={`/movies/${data.id}`}>
            Ir a los detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
