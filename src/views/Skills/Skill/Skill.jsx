import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Styles from "./Skill.styles";

export default function Skill(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Styles.Container data-aos="fade-up">
      <Styles.Icon>
        <span className="material-icons">{props.skill.icon}</span>
      </Styles.Icon>
      <Styles.Name>{props.skill.name}</Styles.Name>
    </Styles.Container>
  );
}
