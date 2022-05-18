import { Link } from "react-router-dom";
import classes from "./UkrainianNavigation.module.css";
function UkrainianNavigation() {
  return (
    <nav className={classes.navigation}>
      <Link className={classes.link} to="/ukrainian/aboutUs">
        Про нас
      </Link>
      <Link className={classes.link} to="/ukrainian/rooms">
        Номери та ціни
      </Link>
      <Link className={classes.link} to="/ukrainian/gallery">
        Галерея
      </Link>
      <Link className={classes.link} to="/ukrainian/contacts">
        Контакти
      </Link>
    </nav>
  );
}
export default UkrainianNavigation;