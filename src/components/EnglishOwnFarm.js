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
        We have cute our goats and chickens, so we always have fresh milk and eggs.
        We make our own cheeses and dairy products from goats' milk. Also we
        make soaps, and in the summer we collect herbs for real Carpathian tea.
        All products are made with our own hands and from natural products.
        You can go on a walk with our goats in the mountains. If you have any
        animals you can come with them.
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
