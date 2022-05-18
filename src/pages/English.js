import MainColorBack from "../components/MainColorBack";
import { Route, Routes } from "react-router-dom";
import EnglishLogo from "../components/EnglishLogo";
import EnglishNavigationTop from "../components/EnglishNavigationTop";
import EnglishAboutUsPage from "./EnglishContent/EnglishAboutUsPage";
import EnglishRoomsPage from "./EnglishContent/EnglishRoomsPage";
import Gallery from "./Gallery";
import EnglishContactsPage from "./EnglishContent/EnglishContactsPage";
import EnglishFooter from "../components/EnglishFooter";
function English() {
  return (
    <>
      <MainColorBack>
        <EnglishLogo />
        <EnglishNavigationTop />
        <Routes>
          <Route path="aboutUs" element={<EnglishAboutUsPage />} />
          <Route path="rooms" element={<EnglishRoomsPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contacts" element={<EnglishContactsPage />} />
        </Routes>
      </MainColorBack>
      <EnglishFooter />
    </>
  );
}
export default English;
