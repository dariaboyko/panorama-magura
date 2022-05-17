import { useSpring, animated } from "react-spring";
function ContentPageAnimation(props) {
  const styles = useSpring({
    from: { opacity: 0.5, marginRight: 600, marginLeft: -600 },
    config: { duration: 700 },

    to: { opacity: 1, marginLeft: 0, marginRight: 0 },
    leave: { opacity: 0 },
  });
  return (
    <>
      <animated.div style={styles}>{props.children}</animated.div>
    </>
  );
}
export default ContentPageAnimation;
