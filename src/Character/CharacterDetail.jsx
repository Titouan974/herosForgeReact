import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../api/config";

function CharacterDetail() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/characters/${id}`);
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

  const imageUrl = character.image
    ? `${API_BASE_URL}/${character.image}`
    : "https://via.placeholder.com/200";

  return (
    <div>
      <h1>{character.name}</h1>

      <img src={imageUrl} alt={character.name} />

      <p>Classe : {character.class?.name}</p>
      <p>Race : {character.race?.name}</p>
      <p>Niveau : {character.level}</p>

      <h3>Stats</h3>
      {character.stats && (
        <div style={{ maxWidth: "400px" }}>
          {Object.entries(character.stats).map(([key, value]) => (
            <div key={key} style={{ marginBottom: "8px" }}>
              <span style={{ display: "inline-block", width: "120px" }}>
                {key.toUpperCase()} :
              </span>
              <div
                style={{
                  display: "inline-block",
                  width: "200px",
                  background: "#eee",
                  borderRadius: "4px",
                  overflow: "hidden",
                  verticalAlign: "middle"
                }}
              >
                <div
                  style={{
                    width: `${(value / 20) * 100}%`,
                    background: "#4f46e5",
                    color: "white",
                    padding: "2px 4px",
                    fontSize: "0.8rem"
                  }}
                >
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3>Compétences de la classe</h3>
      {character.class?.skills && character.class.skills.length > 0 ? (
        <ul>
          {character.class.skills.map((skill) => (
            <li key={skill.id}>
              {skill.name} ({skill.ability})
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune compétence renseignée.</p>
      )}

      <h3>Groupes</h3>
      {character.parties && character.parties.length > 0 ? (
        <ul>
          {character.parties.map((g) => (
            <li key={g.id}>
              {}
              {g.name} (max {g.maxSize})
            </li>
          ))}
        </ul>
      ) : (
        <p>Ce personnage n'appartient à aucun groupe.</p>
      )}
    </div>
  );
}

export default CharacterDetail;
