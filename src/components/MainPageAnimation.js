import { useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
function MainPageAnimation(props){
    const location =useLocation();
    const transitions = useTransition(location,(location)=>location.pathname,{
        from:{
            opacity:0,
        },
        enter:{
            opacity:1,
        },
        leave:{
            opacity:1,
        },
    });
  return (
      <>
    {transitions.map(({item,styles,key})=>(
        <animated.div key={key} style={styles}>{props.children}
    </animated.div>
    ))}
   </>
  );
};
export default MainPageAnimation;
