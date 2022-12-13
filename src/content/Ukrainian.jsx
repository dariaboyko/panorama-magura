import MainColorBack from "../components/MainColorBack";
import { Route, Routes } from "react-router-dom";
import Logo from "../components/Logo";
import UkrainianNavigationTop from "../components/UkrainianNavigationTop";
import UkrainianAboutUsPage from "./UkrainianContent/UkrainianAboutUsPage";
import UkrainianFooter from "../components/UkrainianFooter";
import UkrainianRoomsPage from "./UkrainianContent/UkrainianRoomsPage";
import Gallery from "./Gallery";
import UkrainianContactsPage from "./UkrainianContent/UkrainianContactsPage";
function Ukrainian() {
  return (
    <>
      <MainColorBack>
        <Logo />
        <UkrainianNavigationTop />
        <Routes>
          <Route path="aboutUs" element={<UkrainianAboutUsPage />} />
          <Route path="rooms" element={<UkrainianRoomsPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contacts" element={<UkrainianContactsPage />} />
        </Routes>
      </MainColorBack>
      <UkrainianFooter />
    </>
  );
}
export default Ukrainian;
