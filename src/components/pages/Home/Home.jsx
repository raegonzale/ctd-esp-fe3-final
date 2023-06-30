import React from "react";
import { Link } from "react-router-dom";
import odontologia1 from "../../assets/img/odontologia1.png";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="texto">
        <h1>¿Por qué es tan importante acudir al odontólogo?</h1>
        <p>
        Acudir al odontólogo con regularidad es imprescindible para mantener
        una buena salud bucodental. Muchos pacientes sólo acuden a la consulta 
        cuando detectan problemas en su boca. Como la inflamación 
        en las encías, el sangrado, o la acumulación de sarro. 
        Todas estas complicaciones se pueden prevenir con unas 
        visitas al dentista.</p>
        <p>
        Se recomienda acudir al odontólogo una vez cada seis meses. 
        Entre visita y visita es muy importante realizar una buena 
        rutina de higiene oral. Los tratamientos profesionales 
        pueden fracasar si la boca no se mantiene en buen estado. 
        </p>

      </div>
      <img src={odontologia1} />
    </div>
  );
};
