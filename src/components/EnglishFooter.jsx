function EnglishFooter() {
  return (
    <footer className="footer">
      <span className="footer--title">Hotel Panorama Magura</span>
      <span className="footer--description">
        street Myru, 42, Tatariv, Ivano-Frankivska oblast, Ukraine, 78596
      </span>
      <a href="tel:+380 97 065 6767" className="phoneCall">
        +380 97 065 6767
      </a>
      <nav className="footer--navigation">
        <a className="footer--link" href="/eng/about">
          About us
        </a>
        <div className="footer--line"></div>
        <a className="footer--link" href="/eng/rooms">
          Booking
        </a>
        <div className="footer--line"></div>
        <a className="footer--link" href="/eng/gallery">
          Gallery
        </a>
        <div className="footer--line"></div>
        <a className="footer--link" href="/eng/contacts">
          Contacts
        </a>
      </nav>
    </footer>
  );
}
export default EnglishFooter;
