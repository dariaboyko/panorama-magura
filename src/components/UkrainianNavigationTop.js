import { Link } from "react-router-dom";
import classes from "./UkrainianNavigation.module.css";
function UkrainianNavigationTop() {
  return (
    <nav className={classes.navigationTop}>
      <Link className={classes.link} to="/ukrainian/aboutUs">
        Про нас
      </Link>
      <Link className={classes.link} to="/ukrainian/rooms">
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
export default UkrainianNavigationTop;
