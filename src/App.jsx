import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterCardList from "./Character/CharacterCardList";
import CharacterDetail from "./Character/CharacterDetail";
import "./App.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<CharacterCardList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
