import "./SkillCard.styles.css";
import SkillHeading from "../SkillHeading/SkillHeading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SkillCard(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <article className="skill-card" data-aos="fade-up">
      <header className="skill-card__header">
        <span className="skill-card__art">
          <span className="material-icons">{props.icon}</span>
        </span>
        <SkillHeading heading={props.categoryName} />
      </header>
      <ul className="skill-card__description">
        {props.skills.map((skill) => {
          return <li key={skill.id}>{skill.name}</li>;
        })}
      </ul>
    </article>
  );
}
