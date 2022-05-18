import classes from "./css/AboutUs.module.css";
function UkrainianOwnFarm() {
  return (
    <div className={classes.farmGrid}>
      <img
        className={classes.image4}
        src={require("../img/image4.png")}
        alt="кози на горі"
      />
      <h2 className={classes.title}>Своє господарство</h2>
      <p className={classes.text}>
        У нас є милі козочки та курочки, тож завжди маємо свіже молоко та яйця.
        Самі робимо сири та кисломолочні продукти з козиного молока. Також
        варимо мило, а влітку збіраємо трави на справжній Карпатський чай. Всі
        продукти 100% зроблені своїми руками та з натуральних продуктів. Існує
        функція прогулянки с козами в горах) Якщо у вас є тварина можете не
        хвилюватися місця вистачить усім.
      </p>
      <img
        className={classes.image5}
        src={require("../img/image5.png")}
        alt="кури"
      />
      <img
        className={classes.image6}
        src={require("../img/image6.png")}
        alt="козине молоко та сир"
      />
    </div>
  );
}
export default UkrainianOwnFarm;
