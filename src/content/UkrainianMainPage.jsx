import MainBackground from "../components/MainBackround";
import UkrainianMainPageTitle from "../components/UkrainianMainPageTitle";
import LanguageSwitcher from "../components/LanguageSwitcher";
import UkrainianNavigation from "../components/UkrainianNavigation";

function UkrainianMainPage() {
  return (
      <MainBackground>
        <LanguageSwitcher />
        <UkrainianMainPageTitle />
        <UkrainianNavigation />
      </MainBackground>
  );
}
export default UkrainianMainPage;
