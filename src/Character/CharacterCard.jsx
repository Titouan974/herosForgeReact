

function CharacterCard({ character }) {
  return (
    <div className="card">
      <img
        src={character.avatar}
        alt={character.name}
        className="card-avatar"
      />

      <div className="card-content">
        <h2>{character.name}</h2>
        <p>Classe : {character.characterclass}</p>
        <p>Race : {character.race}</p>
        <p>Niveau : {character.level}</p>
      </div>
    </div>
  );
}

export default CharacterCard;