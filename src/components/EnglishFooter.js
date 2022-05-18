import { Link } from "react-router-dom";
import classes from "./css/Footer.module.css";
function EnglishFooter() {
  return (
    <footer className={classes.footer}>
      <span className={classes.title}>Hotel Panorama Magura</span>
      <span className={classes.description}>
        street Myru, 42, Tatariv, Ivano-Frankivska oblast, Ukraine, 78596
      </span>
      <a href="tel:+380 97 065 6767" className={classes.phoneCall}>
        +380 97 065 6767
      </a>
      <nav className={classes.navigation}>
        <Link className={classes.link} to="/english/aboutUs">
          About us
        </Link>
        <div className={classes.line}></div>
        <Link className={classes.link} to="/english/rooms">
          Booking
        </Link>
        <div className={classes.line}></div>
        <Link className={classes.link} to="/english/gallery">
          Gallery
        </Link>
        <div className={classes.line}></div>
        <Link className={classes.link} to="/english/contacts">
          Contacts
        </Link>
      </nav>
    </footer>
  );
}
export default EnglishFooter;
