import classes from "./css/AboutUs.module.css";
function EnglishOwnFarm() {
  return (
    <div className={classes.farmGrid}>
      <img
        className={classes.image4}
        src={require("../img/image4.png")}
        alt="кози на горі"
      />
      <h2 className={classes.title}>Our farm</h2>
      <p className={classes.text}>
        We have cute goats and chickens, so we always have fresh milk and eggs.
        We make our own cheeses and sour milk products from goat's milk. Also we
        cook soap, and in the summer we collect herbs for real Carpathian tea.
        All 100% products made with their own hands and from natural products.
        Exist function of walking with goats in the mountains) If you have an
        animal you can not worry enough space for everyone
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
export default EnglishOwnFarm;
