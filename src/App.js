import { Routes, Route } from "react-router-dom";
import EnglishMainPage from "./pages/EnglishMainPage";
import UkrainianMainPage from "./pages/UkrainianMainPage";
import Ukrainian from "./pages/Ukrainian";
import English from "./pages/English";

function App() {
  return (
    <Routes>
      <Route path="" element={<UkrainianMainPage />} />
      <Route path="/english" element={<EnglishMainPage />} />
      <Route exact={true} path="/ukrainian/*" element={<Ukrainian />} />
      <Route exact={true} path="/english/*" element={<English />} />
    </Routes>
  );
}

export default App;
