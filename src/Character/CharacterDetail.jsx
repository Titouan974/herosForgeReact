import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CharacterDetail() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/v1/characters/${id}`);
        if (!response.ok) throw new Error("Erreur réseau");

        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!character) return <p>Aucun personnage</p>;

  return (
    <div>
      <h1>{character.name}</h1>

      <img src={character.avatar} alt={character.name} />

      <p>Classe : {character.characterclass}</p>
      <p>Race : {character.race}</p>
      <p>Niveau : {character.level}</p>

      {}
      {character.stats && (
        <div>
          <h3>Stats</h3>
          <pre>{JSON.stringify(character.stats, null, 2)}</pre>
        </div>
      )}

      {character.groups && (
        <ul>
          {character.groups.map((g) => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      )}

      {/* Rajouter les compétances et les éléments visuels. */}
    </div>
  );
}

export default CharacterDetail;