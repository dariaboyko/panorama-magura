import { useTransition, animated } from "react-spring";
import MainColorBack from "../components/MainColorBack";
import { Route, Routes, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import UkrainianNavigationTop from "../components/UkrainianNavigationTop";
import UkrainianAboutUsPage from "../components/UkrainianAboutUsPage";
function Ukrainian() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate(100%)" },
    enter: { opacity: 1, transform: "translate(0,0)" },
    leave: { opacity: 0, transform: "translate(-100%)" },
  });
  return (
    <MainColorBack>
      <Logo />
      <UkrainianNavigationTop />
      <div style={{ position: "relative" }}>
        {transitions((props, item) => (
          <animated.div style={props}>
            <div
              style={{ position: "absolute", width: "100%" }}
            >
              <Routes location={item}>
                <Route path="aboutUs" element={<UkrainianAboutUsPage />} />
                <Route path="rooms" element={<div>rooms</div>} />
              </Routes>
            </div>
          </animated.div>
        ))}
      </div>
    </MainColorBack>
  );
}
export default Ukrainian;
