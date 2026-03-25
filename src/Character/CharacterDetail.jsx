import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CharacterDetail.css";

function CharacterDetail() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/v1/characters/${id}`);
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
    <div className="detail-container">
      <h1 className="detail-title">{character.name}</h1>

      <img
        src={character.image ?? "/default-avatar.png"}
        alt={character.name}
        className="detail-avatar"
      />

      <p className="detail-info">
        Classe : {character.class.name} • Race : {character.race.name} • Niveau : {character.level}
      </p>

      <h3>Stats</h3>
      <ul className="detail-stats">
        <li>Force : {character.strength}</li>
        <li>Dextérité : {character.dexterity}</li>
        <li>Constitution : {character.constitution}</li>
        <li>Intelligence : {character.intelligence}</li>
        <li>Sagesse : {character.wisdom}</li>
        <li>Charisme : {character.charisma}</li>
        <li>PV : {character.healthPoints}</li>
      </ul>

      <h3>Groupes</h3>
      <ul className="detail-groups">
        {character.parties.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetail;
