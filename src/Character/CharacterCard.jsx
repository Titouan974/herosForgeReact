import { useNavigate } from "react-router-dom";
import "./CharacterCardList.css";

function CharacterCard({ character }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/characters/${character.id}`)}>
      <img
        src={character.image ?? "/default-avatar.png"}
        alt={character.name}
        className="card-avatar"
      />

      <div className="card-content">
        <h2>{character.name}</h2>
        <p>Classe : {character.class.name}</p>
        <p>Race : {character.race.name}</p>
        <p>Niveau : {character.level}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
