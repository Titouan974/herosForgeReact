import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import Filters from "./Filters/Filter";
import { API_BASE_URL } from "../api/config";
import "./CharacterCardList.css";

function CharacterCardList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filtres
  const [searchNames, setSearchNames] = useState("");
  const [bannedNames, setBannedNames] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedRaces, setSelectedRaces] = useState([]);

  // tri
  const [sortBy, setSortBy] = useState("name");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/characters`);
        if (!response.ok) throw new Error("Erreur réseau");

        const data = await response.json();
        setCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // valeurs uniques (noms de classes / races)
  const classes = [...new Set(characters.map(c => c.class?.name))].filter(Boolean);
  const races = [...new Set(characters.map(c => c.race?.name))].filter(Boolean);

  // filtres
  const filtered = characters
    .filter((c) => {
      const searchList = searchNames.toLowerCase().split(",").map(n => n.trim()).filter(Boolean);
      const bannedList = bannedNames.toLowerCase().split(",").map(n => n.trim()).filter(Boolean);

      const nameLower = c.name.toLowerCase();

      const nameMatch =
        (searchList.length === 0 || searchList.some(n => nameLower.includes(n))) &&
        !bannedList.some(n => nameLower.includes(n));

      const className = c.class?.name || "";
      const raceName = c.race?.name || "";

      const classMatch =
        selectedClasses.length === 0 || selectedClasses.includes(className);

      const raceMatch =
        selectedRaces.length === 0 || selectedRaces.includes(raceName);

      return nameMatch && classMatch && raceMatch;
    })

    // tri
    .sort((a, b) => {
      let result = 0;

      if (sortBy === "name") {
        result = a.name.localeCompare(b.name);
      }

      if (sortBy === "level") {
        result = a.level - b.level;
      }

      if (sortBy === "both") {
        result = a.name.localeCompare(b.name);
        if (result === 0) {
          result = a.level - b.level;
        }
      }

      return order === "asc" ? result : -result;
    });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <Filters
        searchNames={searchNames}
        setSearchNames={setSearchNames}
        bannedNames={bannedNames}
        setBannedNames={setBannedNames}
        classes={classes}
        races={races}
        selectedClasses={selectedClasses}
        setSelectedClasses={setSelectedClasses}
        selectedRaces={selectedRaces}
        setSelectedRaces={setSelectedRaces}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />

      <div className="card-container">
        {filtered.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default CharacterCardList;
