import classes from "./css/AboutUs.module.css";
function EnglishNatureNear() {
  return (
    <div className={classes.gridNature}>
      <h2 className={classes.title}>Nature nearby</h2>
      <img
        className={classes.image3}
        src={require("../img/image3.png")}
        alt="садиба влітку"
      />
      <p className={classes.text}>
        The house is located under the mountain Magura. Above us only a forest, in which you can meet roe deers, owls and salamanders. There are many
        nearby tourist routes that take one day to finish.
      </p>
      <img
        className={classes.image2}
        src={require("../img/image2.png")}
        alt="вид з садиби"
      />
    </div>
  );
}
export default EnglishNatureNear;
