import { NavLink } from "react-router-dom";
import { useState } from "react";
import classes from "./css/Navigation.module.css";
function UkrainianNavigationTop() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
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
          Номери та ціни
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.selected : classes.link
          }
          to="/ukrainian/gallery"
        >
          Галерея
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.selected : classes.link
          }
          to="/ukrainian/contacts"
        >
          Контакти
        </NavLink>
      </nav>
      <button
        className={classes.menuButton}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div className={classes.stripe}></div>
        <div className={classes.stripe}></div>
        <div className={classes.stripe}></div>
      </button>
      {toggle && (
        <nav className={classes.phoneNavigationTop}>
          <button
            className={classes.close}
            onClick={() => {
              setToggle(!toggle);
            }}
          ></button>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.selectedOnPhone : classes.link
            }
            onClick={() => {
              setToggle(!toggle);
            }}
            to="/ukrainian/aboutUs"
          >
            Про нас
          </NavLink>
          <NavLink
            onClick={() => {
              setToggle(!toggle);
            }}
            className={({ isActive }) =>
              isActive ? classes.selectedOnPhone : classes.link
            }
            to="/ukrainian/rooms"
          >
            Номери та ціни
          </NavLink>
          <NavLink
            onClick={() => {
              setToggle(!toggle);
            }}
            className={({ isActive }) =>
              isActive ? classes.selectedOnPhone : classes.link
            }
            to="/ukrainian/gallery"
          >
            Галерея
          </NavLink>
          <NavLink
            onClick={() => {
              setToggle(!toggle);
            }}
            className={({ isActive }) =>
              isActive ? classes.selectedOnPhone : classes.link
            }
            to="/ukrainian/contacts"
          >
            Контакти
          </NavLink>
        </nav>
      )}
    </>
  );
}
export default UkrainianNavigationTop;