import { useransition, animated } from "react-spring";
function MainPageAnimation(props){
    const styles = useSpring({
      from: { opacity: 0, marginTop: 550 },
      config: { duration: 1000 },
      to: { opacity: 1, marginTop: 0 },
      leave: { transform: "translateY(-1000px)", duration: 1000 },
    });
  return (
    <>
      <animated.div style={styles}>{props.children}
      </animated.div>
    </>
  );
};
export default MainPageAnimation;
