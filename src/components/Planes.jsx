import "./Planes.css";
import { Plan } from "./Plan";

export function Planes() {
  return (
    <div>
      <h1>Planes Disponibles</h1>
      <div className="Planes">
        <Plan
          plan={{
            name: "Plan 1",
            price: "$ 9.99",
            description: "Permite alquilar peliculas a tu elección",
            details: [
              "Alquilar sin límintes",
              "Dos películas concurrentes",
              "Cancela cuando quieras",
            ],
          }}
          size={100}
        />
        <Plan
          plan={{
            name: "Plan 2",
            price: "$ 17.99",
            description:
              "Permite alquilar peliculas y comprar para que las puedas disfrutar cuando quieras",
            details: [
              "Alquilar sin límintes",
              "Cuaro películas concurrentes",
              "Descarga para ver offline",
              "Cancela cuando quieras",
            ],
          }}
          size={100}
        />
      </div>
    </div>
  );
}
