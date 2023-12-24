import "./Registro.css"
import * as React from "react";
import { useForm } from "react-hook-form";

export function Registro() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      category: "",
      checkbox: [],
      radio: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(console.log)} className="Resgitro-Form">
      <input
        {...register("firstName", { required: true })}
        placeholder="Nombre"
      />

      <input
        {...register("lastName", { minLength: 2 })}
        placeholder="Apellido"
      />
      <input
        {...register("email", { required: true })}
        placeholder="Email"
      />

      <select {...register("category")}>
        <option value="">Selecione el plan...</option>
        <option value="Plan 1">Plan 1</option>
        <option value="Plna 2">Plan 2</option>
        <option value="Plna 3">Plan 3</option>
      </select>
      <input type="submit" value="Crear" />
    </form>
  );
}
