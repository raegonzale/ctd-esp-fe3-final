import React, { useState } from "react";
import { FormContact } from "./FormContact";
import Swal from "sweetalert2";

export const FormContactContainer = () => {
  const [client, setClient] = useState({
    nombre: "",
    correo: "",
  });

  const handleNameChange = (e) => {
    setClient({ ...client, nombre: e.target.value });
  };

  const handleEmailChange = (e) => {
    setClient({ ...client, correo: e.target.value });
  };

  const validateName = (name) => {
    if (name.length < 5) {
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, correo } = client;
    if (!validateName(nombre) || !validateEmail(correo)) {
      Swal.fire("Valida tu información");
      return;
    }
    console.log("nombre:", nombre);
    console.log("Correo:", correo);
    Swal.fire(
      "Gracias!! " + nombre + " te responderemos lo antes posible via email"
    );
  };

  return (
    <div>
      <FormContact
        handleSubmit={handleSubmit}
        handleEmailChange={handleEmailChange}
        handleNameChange={handleNameChange}
      />
    </div>
  );
};
