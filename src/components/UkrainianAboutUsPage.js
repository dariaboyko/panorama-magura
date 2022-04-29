import classes from "./AboutUs.module.css";
import UkrainianLocation from "./UkrainianLocation";
import UkrainianNatureNear from "./UkrainianNatureNear";
function UkrainianAboutUsPage() {
  return (
    <div className={classes.wrapper}>
      <UkrainianLocation />
      <UkrainianNatureNear/>
      
    </div>
  );
}
export default UkrainianAboutUsPage;
