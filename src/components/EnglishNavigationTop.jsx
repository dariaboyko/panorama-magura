import { useState, useEffect } from "react";
function EnglishNavigationTop() {
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
          href="/eng/about"
        >
          About us
        </a>
        <a
          className={location.includes("rooms") ? "selected" : "link"}
          href="/eng/rooms"
        >
          Booking
        </a>
        <a
          className={location.includes("gallery") ? "selected" : "link"}
          href="/eng/gallery"
        >
          Gallery
        </a>
        <a
          className={location.includes("contacts") ? "selected" : "link"}
          href="/eng/contacts"
        >
          Contacts
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
            href="/eng/about"
          >
            About us
          </a>
          <a
            onClick={() => {
              setToggle(!toggle);
            }}
            className={location.includes("rooms") ? "selectedOnPhone" : "link"}
            href="/eng/rooms"
          >
            Booking
          </a>
          <a
            onClick={() => {
              setToggle(!toggle);
            }}
            className={
              location.includes("gallery") ? "selectedOnPhone" : "link"
            }
            href="/eng/gallery"
          >
            Gallery
          </a>
          <a
            onClick={() => {
              setToggle(!toggle);
            }}
            className={
              location.includes("contacts") ? "selectedOnPhone" : "link"
            }
            href="/eng/contacts"
          >
            Contacts
          </a>
        </nav>
      )}
    </>
  );
}
export default EnglishNavigationTop;
