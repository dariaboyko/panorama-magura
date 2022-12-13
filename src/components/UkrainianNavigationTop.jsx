import { useState, useEffect } from "react";
function UkrainianNavigationTop() {
  const [toggle, setToggle] = useState(false);
  const [location, setLocation] = useState("");
  useEffect(() => {
    setLocation(window.location.pathname);
  });
  return (
    <>
      <nav className="navigationTop">
        <a
          className={location.includes("about") ? "selected" : "link"}
          href="/about"
        >
          Про нас
        </a>
        <a
          className={location.includes("room") ? "selected" : "link"}
          href="/rooms"
        >
          Номери та ціни
        </a>
        <a
          className={location.includes("gallery") ? "selected" : "link"}
          href="/gallery"
        >
          Галерея
        </a>
        <a
          className={location.includes("contacts") ? "selected" : "link"}
          href="/contacts"
        >
          Контакти
        </a>
      </nav>
      <button
        className="menuButton"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
      </button>
      {toggle && (
        <nav className="phoneNavigationTop">
          <button
            className="close"
            onClick={() => {
              setToggle(!toggle);
            }}
          ></button>
          <a
            className={location.includes("about") ? "selectedOnPhone" : "link"}
            onClick={() => {
              setToggle(!toggle);
            }}
            href="/about"
          >
            Про нас
          </a>
          <a
            onClick={() => {
              setToggle(!toggle);
            }}
            className={location.includes("rooms") ? "selectedOnPhone" : "link"}
            href="/rooms"
          >
            Номери та ціни
          </a>
          <a
            onClick={() => {
              setToggle(!toggle);
            }}
            className={
              location.includes("gallery") ? "selectedOnPhone" : "link"
            }
            href="/gallery"
          >
            Галерея
          </a>
          <a
            onClick={() => {
              setToggle(!toggle);
            }}
            className={
              location.includes("contacts") ? "selectedOnPhone" : "link"
            }
            href="/contacts"
          >
            Контакти
          </a>
        </nav>
      )}
    </>
  );
}
export default UkrainianNavigationTop;
