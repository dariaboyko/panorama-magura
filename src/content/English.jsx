import MainColorBack from "../components/MainColorBack";
import { Route, Routes } from "react-router-dom";
import EnglishLogo from "../components/engLogo";
import EnglishNavigationTop from "../components/engNavigationTop";
import EnglishAboutUsPage from "./engContent/engAboutUsPage";
import EnglishRoomsPage from "./engContent/engRoomsPage";
import Gallery from "./Gallery";
import EnglishContactsPage from "./engContent/engContactsPage";
import EnglishFooter from "../components/engFooter";
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
