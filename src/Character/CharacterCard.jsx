import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api/config";

function CharacterCard({ character }) {
  const navigate = useNavigate();

  const imageUrl = character.image
    ? `${API_BASE_URL}/${character.image}`
    : "https://via.placeholder.com/150";

  return (
    <div className="card" onClick={() => navigate(`/character/${character.id}`)}>
      <img
        src={imageUrl}
        alt={character.name}
        className="card-avatar"
      />

      <div className="card-content">
        <h2>{character.name}</h2>
        <p>Classe : {character.class?.name}</p>
        <p>Race : {character.race?.name}</p>
        <p>Niveau : {character.level}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
