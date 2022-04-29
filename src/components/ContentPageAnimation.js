import { useSpring, animated } from "react-spring";
function ContentPageAnimation(props) {
  const styles = useSpring({
    from: { opacity: 0, marginTop: 550 },
    config: { duration: 1000 },
    
    to: { opacity: 1, marginTop: 0 },
    leave: { opacity: 0 },
  });
  return (
    <>
      <animated.div style={styles}>{props.children}</animated.div>
    </>
  );
}
export default ContentPageAnimation;
