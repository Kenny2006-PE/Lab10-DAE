import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";
import SeriePage from "./pages/SeriePage";
import HomePage from "./pages/HomePage";
import SerieFormPage from "./pages/SerieFormPage";
import CategoryFormPage from "./pages/CategoryFormPage"; // Nueva página

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/categorias" element={<CategoryPage />} />
        <Route path="/categorias/edit/:idcategoria" element={<CategoryFormPage />} /> {/* Nueva ruta */}
        <Route path="/series" element={<SeriePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/series/edit/:idserie" element={<SerieFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
