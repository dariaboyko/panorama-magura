import MainBackground from "../components/MainBackround";
import EnglishMainPageTitle from "../components/EnglishMainPageTitle";
import LanguageSwitcher from "../components/LanguageSwitcher";
import EnglishNavigation from "../components/EnglishNavigation";
function EnglishMainPage() {
  return (
    <MainBackground>
      <LanguageSwitcher />
      <EnglishMainPageTitle />
      <EnglishNavigation/>
    </MainBackground>
  );
}
export default EnglishMainPage;
