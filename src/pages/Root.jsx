import "./root.styles.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "./profile/profile.component";
import SkillCategoryListComponent from "./skills/skill-category-list.component.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Styles from "./root.styles";

export default function Root() {
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
        <main>
          {location.pathname === "/" ? (
            <SkillCategoryListComponent />
          ) : (
            <Outlet />
          )}
        </main>
      </Styles.RightContainer>
    </>
  );
}
