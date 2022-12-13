function UkrainianFooter() {
  return (
    <footer className="footer">
      <span className="footer--title">Готель Панорама Маґура</span>
      <span className="footer--description">
        вул. Миру, 42, Татарів, Івано-Франківська область, Україна, 78596
      </span>
      <a href="tel:+380 97 065 6767" className="phoneCall">
        +380 97 065 6767
      </a>
      <nav className="footer--navigation">
        <a className="footer--link" href="/about">
          Про нас
        </a>
        <div className="footer--line"></div>
        <a className="footer--link" href="/rooms">
          Номери та ціни
        </a>
        <div className="footer--line"></div>
        <a className="footer--link" href="/gallery">
          Галерея
        </a>
        <div className="footer--line"></div>
        <a className="footer--link" href="/contacts">
          Контакти
        </a>
      </nav>
    </footer>
  );
}
export default UkrainianFooter;
