import { Link } from "react-router-dom";
import classes from "./css/Navigation.module.css";
function EnglishNavigation() {
  return (
    <nav className={classes.navigation}>
      <Link className={classes.link} to="/english/aboutUs">
        About us
      </Link>
      <Link className={classes.link} to="/english/rooms">
        Booking
      </Link>
      <Link className={classes.link} to="/english/gallery">
        Gallery
      </Link>
      <Link className={classes.link} to="/english/contacts">
        Contacts
      </Link>
    </nav>
  );
}
export default EnglishNavigation;
