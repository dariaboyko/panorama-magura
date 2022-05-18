import classes from "./css/mainBackground.module.css";
function MainColorBack(props) {
  return <section className={classes.color}>{props.children}</section>;
}
export default MainColorBack;
