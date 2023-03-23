import { NavLink, Outlet } from "react-router-dom";
import Styles from "./App.styles";
import Profile from "./views/Profile/Profile";
import SkillList from "./views/Skills/SkillList";

export default function App() {
  return (
    <div className="App">
      <Profile />
      <div>
        <Styles.Nav>
          <NavLink to={"projects"}>Projects</NavLink>
          <NavLink to={"work-history"}>Work History</NavLink>
          <NavLink to={"education"}>Education</NavLink>
        </Styles.Nav>
        <Outlet />
      </div>
    </div>
  );
}
