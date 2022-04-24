import { Routes, Route } from "react-router-dom";
import EnglishMainPage from "./pages/EnglishMainPage";
import UkrainianMainPage from "./pages/UkrainianMainPage";
import ProNas from "./pages/ProNas";
function App() {
  return (
    <Routes>
      <Route path="" element={<UkrainianMainPage />} />
      <Route path="/english" element={<EnglishMainPage />} />
      <Route path="/proNas" element={<ProNas />} />
    </Routes>
  );
}

export default App;
