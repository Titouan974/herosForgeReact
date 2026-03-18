//import React from "react";
import "./index.css";



const CharacterCard = ({ avatar, nom, classe, race, niveau }) => {
  return (
    <div className="card">
      <img src={avatar} alt={nom} className="card-avatar" />

      <div className="card-content">
        <h2 className="card-name">{nom}</h2>

        <div className="card-info">
          <p><strong>Classe :</strong> {classe}</p>
          <p><strong>Race :</strong> {race}</p>
          <p><strong>Niveau :</strong> {niveau}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;