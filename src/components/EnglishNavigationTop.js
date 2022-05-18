import { NavLink } from "react-router-dom";
import { useState } from "react";
import classes from "./css/Navigation.module.css";
function EnglishNavigationTop() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className={classes.navigationTop}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.selected : classes.link
          }
          to="/english/aboutUs"
        >
          About us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.selected : classes.link
          }
          to="/english/rooms"
        >
          Booking
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.selected : classes.link
          }
          to="/english/gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.selected : classes.link
          }
          to="/english/contacts"
        >
          Contacts
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
            to="/english/aboutUs"
          >
            About us
          </NavLink>
          <NavLink
            onClick={() => {
              setToggle(!toggle);
            }}
            className={({ isActive }) =>
              isActive ? classes.selectedOnPhone : classes.link
            }
            to="/english/rooms"
          >
            Booking
          </NavLink>
          <NavLink
            onClick={() => {
              setToggle(!toggle);
            }}
            className={({ isActive }) =>
              isActive ? classes.selectedOnPhone : classes.link
            }
            to="/english/gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            onClick={() => {
              setToggle(!toggle);
            }}
            className={({ isActive }) =>
              isActive ? classes.selectedOnPhone : classes.link
            }
            to="/english/contacts"
          >
            Contacts
          </NavLink>
        </nav>
      )}
    </>
  );
}
export default EnglishNavigationTop;
