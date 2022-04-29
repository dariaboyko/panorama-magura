import { NavLink } from "react-router-dom";
import classes from "./UkrainianNavigation.module.css";
function UkrainianNavigationTop() {
  return (
    <nav className={classes.navigationTop}>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.selected : classes.link
        }
        to="/ukrainian/aboutUs"
      >
        Про нас
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.selected : classes.link
        }
        to="/ukrainian/rooms"
      >
        Номера та ціни
      </NavLink>
      <NavLink className={classes.link} to="">
        Галерея
      </NavLink>
      <NavLink className={classes.link} to="">
        Контакти
      </NavLink>
    </nav>
  );
}
export default UkrainianNavigationTop;
