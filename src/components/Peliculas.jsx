import { useParams,Link,Outlet } from "react-router-dom";


export function Peliculas()
{
    const { name } = useParams()

  return (
    <div>
      <h1>Movies</h1>
      {name}
      <Link to="details">Ir a los detalles</Link>
      <Outlet></Outlet>
    </div>
  );
}