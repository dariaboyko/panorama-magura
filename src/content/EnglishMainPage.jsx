import MainBackground from "../components/MainBackround";
import EnglishMainPageTitle from "../components/englishMainPageTitle";
import LanguageSwitcher from "../components/LanguageSwitcher";
import EnglishNavigation from "../components/englishNavigation";
function EnglishMainPage() {
  return (
    <MainBackground>
      <LanguageSwitcher />
      <EnglishMainPageTitle />
      <EnglishNavigation />
    </MainBackground>
  );
}
export default EnglishMainPage;
