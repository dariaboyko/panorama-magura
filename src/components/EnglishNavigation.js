import { Link } from "react-router-dom";
import classes from "./EnglishNavigation.module.css";
function EnglishNavigation() {
  return (
    <nav className={classes.navigation}>
      <Link className={classes.link} to="">
        About us
      </Link>
      <Link className={classes.link} to="">
        Booking
      </Link>
      <Link className={classes.link} to="">
        Gallery
      </Link>
      <Link className={classes.link} to="">
        Contacts
      </Link>
    </nav>
  );
}
export default EnglishNavigation;
