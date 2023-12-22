import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "./NavLink";
import { Home } from "./components/Home";
import { Planes } from "./components/Planes";
import { Login } from "./components/Login";
import { Detalles } from "./components/Detalles";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Actividad 1</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/Planes">Planes</NavLink>
            </li>
            <li>
              <NavLink to="/IniciarSesion">Iniciar Sesión</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Planes" element={<Planes />}></Route>
        <Route path="/IniciarSesion" element={<Login />}></Route>

        <Route
          path="/movies/:id"
          element={<Detalles />}
        ></Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
