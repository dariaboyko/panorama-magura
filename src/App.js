import { Routes, Route } from "react-router-dom";
import EnglishMainPage from "./pages/EnglishMainPage";
import UkrainianMainPage from "./pages/UkrainianMainPage";
import Ukrainian from "./pages/Ukrainian";

function App() {
  return (
    <Routes>
      <Route path="" element={<UkrainianMainPage />} />
      <Route path="/english" element={<EnglishMainPage />} />
      <Route exact={true} path="/ukrainian/*" element={<Ukrainian />} />
    </Routes>
  );
}

export default App;
