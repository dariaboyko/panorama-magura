import { Link } from "react-router-dom";
import classes from "./UkrainianFooter.module.css";
function UkrainianFooter() {
  return (
    <footer className={classes.footer}>
      <span className={classes.title}>Готель Панорама Маґура</span>
      <span className={classes.description}>
        вул. Миру, 42, Татарів, Івано-Франківська область, Україна, 78596
      </span>
      <a href="tel:+380 97 065 6767" className={classes.phoneCall}>
        +380 97 065 6767
      </a>
      <nav className={classes.navigation}>
        <Link className={classes.link} to="/ukrainian/aboutUs">
          Про нас
        </Link>
        <div className={classes.line}></div>
        <Link className={classes.link} to="/ukrainian/rooms">
          Номери та ціни
        </Link>
        <div className={classes.line}></div>
        <Link className={classes.link} to="/ukrainian/gallery">
          Галерея
        </Link>
        <div className={classes.line}></div>
        <Link className={classes.link} to="/ukrainian/contacts">
          Контакти
        </Link>
      </nav>
    </footer>
  );
}
export default UkrainianFooter;
