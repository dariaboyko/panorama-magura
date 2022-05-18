import { Link } from "react-router-dom";
import classes from "./css/LanguageSwitcher.module.css";
function LanguageSwitcher() {
    return (<nav className={classes.languageSwitcher}>
      <Link to="/" className={classes.link}>
        Українська
      </Link>
      <div className={classes.line}></div>
      <Link to="/english" className={classes.link}>
        English
      </Link>
    </nav>);
}
export default LanguageSwitcher;