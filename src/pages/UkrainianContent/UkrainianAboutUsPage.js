import classes from "../../components/AboutUs.module.css";
import UkrainianLocation from "../../components/UkrainianLocation";
import UkrainianNatureNear from "../../components/UkrainianNatureNear";
import UkrainianOwnFarm from "../../components/UkrainianOwnFarm";
import ContentPageAnimation from "../../components/ContentPageAnimation";
function UkrainianAboutUsPage() {
  return (
        <div className={classes.wrapper}>
          <ContentPageAnimation>
          <UkrainianLocation />
          <UkrainianNatureNear />
          <UkrainianOwnFarm />
          </ContentPageAnimation>
        </div>
  );
}
export default UkrainianAboutUsPage;
