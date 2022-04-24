import classes from "./mainBackground.module.css";
function MainColorBack(props) {
  return <div className={classes.color}>{props.children}</div>;
}
export default MainColorBack;
