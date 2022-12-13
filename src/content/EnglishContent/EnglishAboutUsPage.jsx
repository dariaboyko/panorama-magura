import EnglishLocation from "../../components/englishLocation";
import EnglishNatureNear from "../../components/englishNatureNear";
import EnglishOwnFarm from "../../components/englishOwnFarm";
import ContentPageAnimation from "../../components/ContentPageAnimation";
function EnglishAboutUsPage() {
  return (
    <div className="wrapper">
      <ContentPageAnimation>
        <EnglishLocation />
        <EnglishNatureNear />
        <EnglishOwnFarm />
      </ContentPageAnimation>
    </div>
  );
}
export default EnglishAboutUsPage;
