
import CharacterCard from "./Card";


function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <CharacterCard
        avatar="https://via.placeholder.com/300x200"
        nom="Arthas"
        classe="Paladin"
        race="Humain"
        niveau={42}
      />
    </div>
  );
}

export default App;