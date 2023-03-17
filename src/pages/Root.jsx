import "./Root.styles.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfilePage from "./Profile/ProfilePage";
import SkillsPage from "./Skills/SkillsPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Root() {
  let location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="left-container" data-aos="fade-right">
        <ProfilePage />
      </div>
      <div className="right-container">
        <nav className="nav">
          <Link to={"skills"} className="nav__link">
            skills
          </Link>
          <Link to={"projects"} className="nav__link">
            projects
          </Link>
          <Link to={"experience"} className="nav__link">
            work history
          </Link>
          <Link to={"education"} className="nav__link">
            education
          </Link>
        </nav>
        <main>{location.pathname === "/" ? <SkillsPage /> : <Outlet />}</main>
      </div>
    </>
  );
}
