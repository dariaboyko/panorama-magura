import { Link } from "react-router-dom";
import classes from "./UkrainianNavigation.module.css";
function UkrainianNavigation() {
  return (
    <nav className={classes.navigation}>
      <Link className={classes.link} to="/proNas">
        Про нас
      </Link>
      <Link className={classes.link} to="">
        Номера та ціни
      </Link>
      <Link className={classes.link} to="">
        Галерея
      </Link>
      <Link className={classes.link} to="">
        Контакти
      </Link>
    </nav>
  );
}
export default UkrainianNavigation;