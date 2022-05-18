import classes from "./css/AboutUs.module.css";
function UkrainianNatureNear() {
  return (
    <div className={classes.gridNature}>
      <h2 className={classes.title}>Природа поруч</h2>
      <img
        className={classes.image3}
        src={require("../img/image3.png")}
        alt="садиба влітку"
      />
      <p className={classes.text}>
        Садиба знаходиться попід самою горою Магурою. Вище нас тільки ліс, в
        якому можна побачити козуль, пугачів та саламандр. Поряд багато
        туристичних маршрутів, які розраховані на один день.
      </p>
      <img
        className={classes.image2}
        src={require("../img/image2.png")}
        alt="вид з садиби"
      />
    </div>
  );
}
export default UkrainianNatureNear;
