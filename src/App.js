import logo from './logo.svg';
import './App.css';
import PokemonsPage from "./Components/PokemonsPage"
import PokemonInfoPage from './Components/PokemonInfoPage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <h1>Pokedex</h1>

        <Routes>
          <Route path="/" element={<PokemonsPage />} />
          <Route path="/pokemon/:id" element={<PokemonInfoPage />} />
        </Routes>
        
    </div>
  );
}

export default App;
