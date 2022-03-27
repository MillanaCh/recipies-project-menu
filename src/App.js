import "./App.css";
import Recipe from "./components/Recipe";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Recipe/:recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
