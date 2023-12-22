import { Link } from "react-router-dom";

const movies = ["Action", "Kids", "Romance", "Future"];

export function Busqueda() {
  return (
    <div>
      <h1> Search Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>
            <Link to={`/movies/${movie}`}>{movie}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
