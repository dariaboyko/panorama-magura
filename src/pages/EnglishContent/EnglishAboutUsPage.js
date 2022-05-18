import classes from "../../components/css/AboutUs.module.css";
import EnglishLocation from "../../components/EnglishLocation";
import EnglishNatureNear from "../../components/EnglishNatureNear";
import EnglishOwnFarm from "../../components/EnglishOwnFarm";
import ContentPageAnimation from "../../components/ContentPageAnimation";
function EnglishAboutUsPage() {
  return (
    <div className={classes.wrapper}>
      <ContentPageAnimation>
        <EnglishLocation />
        <EnglishNatureNear />
        <EnglishOwnFarm />
      </ContentPageAnimation>
    </div>
  );
}
export default EnglishAboutUsPage;
