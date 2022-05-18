import classes from "./css/mainBackground.module.css";

function MainBackground(props) {
  return <div className={classes.image}>{props.children}</div>;
}
export default MainBackground;
