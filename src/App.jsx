import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "./App.styles";
import Profile from "./views/Profile/Profile";
import SkillList from "./views/Skills/SkillList";

export default function App() {
  let location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Styles.LeftContainer data-aos="fade-right">
        <Profile />
      </Styles.LeftContainer>
      <Styles.RightContainer>
        <Styles.Nav>
          <Styles.NavLink to={"skills"}>skills</Styles.NavLink>
          <Styles.NavLink to={"projects"}>projects</Styles.NavLink>
          <Styles.NavLink to={"work-history"}>work history</Styles.NavLink>
          <Styles.NavLink to={"education"}>education</Styles.NavLink>
        </Styles.Nav>
        <main>{location.pathname === "/" ? <SkillList /> : <Outlet />}</main>
      </Styles.RightContainer>
    </>
  );
}
