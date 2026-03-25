import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterCardList from "./Character/CharacterCardList";
import CharacterDetail from "./Character/CharacterDetail";
import "./App.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterCardList />} />
        <Route path="/characters" element={<CharacterCardList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/groups" element={<GroupsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
