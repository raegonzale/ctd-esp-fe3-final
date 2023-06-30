import React from "react";
import { Link } from "react-router-dom";
import odontologia1 from "../../assets/img/odontologia1.png";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="texto">
        <h1>Beneficios del Cuidado Oral</h1>
        <p>
          El cuidado oral es esencial para mantener una buena salud en general.
          Una buena higiene oral puede prevenir enfermedades en las encías,
          caries y mal aliento. La mejor manera de cuidar tus dientes es
          cepillándolos al menos dos veces al día con un cepillo de dientes
          suave y una pasta dental que contenga flúor. Asegúrate de cepillar
          todas las superficies de los dientes, incluyendo la parte posterior de
          los dientes posteriores, y la lengua.
        </p>
        <p>
          Además del cepillado, es importante usar hilo dental diariamente para
          eliminar la placa y los restos de comida que quedan entre los dientes.
          También puedes usar un enjuague bucal para matar las bacterias y
          refrescar el aliento. Es recomendable visitar al dentista regularmente
          para detectar y tratar cualquier problema dental antes de que se
          convierta en una emergencia.
        </p>
      </div>
      <img src={odontologia1} />
    </div>
  );
};
