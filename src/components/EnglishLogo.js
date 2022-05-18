import classes from "./css/Logo.module.css";
import { Link } from "react-router-dom";
function EnglishLogo() {
  return (
    <Link to="/english">
      <svg
        className={classes.logo}
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="83"
        viewBox="0 0 56 83"
        fill="none"
      >
        <path
          d="M21.5332 19.7617C25.5892 19.7617 28.2096 21.5846 29.3945 25.2305C29.7591 26.4154 29.9414 27.6914 29.9414 29.0586C29.9414 34.9831 27.2982 38.2415 22.0117 38.834C21.4648 38.8796 20.918 38.9023 20.3711 38.9023H14.082V19.7617H21.5332ZM20.918 59C20.918 57.9974 20.5534 57.4277 19.8242 57.291C19.5964 57.2454 19.3685 57.2227 19.1406 57.2227H14.082V40.8848H20.0977C27.5716 40.8848 32.5163 38.7656 34.9316 34.5273C35.8887 32.9323 36.3672 31.0866 36.3672 28.9902C36.3672 24.4785 34.4076 21.3112 30.4883 19.4883C28.3919 18.4857 25.8854 17.9844 22.9688 17.9844H2.73438V19.7617H8.20312V57.2227H2.73438V59H20.918Z"
          fill="black"
        />
        <path
          d="M53.3887 17.9844H42.4512L27.6855 51.4121L11.8262 17.9844H2.05078V19.7617H7.51953V57.2227H2.05078V59H15.7227C15.7227 57.9974 15.3581 57.4277 14.6289 57.291C14.401 57.2454 14.1732 57.2227 13.9453 57.2227H10.2539V27.8281L25.2246 59.3418H26.6602L42.4512 24.1367V57.2227H36.9824V59H53.3887C53.3887 57.9974 53.0241 57.4277 52.2949 57.291C52.0671 57.2454 51.8392 57.2227 51.6113 57.2227H47.9199V19.7617H53.3887V17.9844Z"
          fill="black"
        />
      </svg>
    </Link>
  );
}
export default EnglishLogo;