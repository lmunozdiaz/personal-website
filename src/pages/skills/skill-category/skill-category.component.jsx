import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Styles from "./skill-category.styles";

export default function SkillCategoryComponent(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Styles.SkillCategory data-aos="fade-up">
      <Styles.Header>
        <Styles.CategoryIcon>
          <span className="material-icons">{props.icon}</span>
        </Styles.CategoryIcon>
        <Styles.CategoryName>{props.categoryName}</Styles.CategoryName>
      </Styles.Header>
      <Styles.SkillList className="skill-card__description">
        {props.categorySkills.map((skill) => {
          return <li key={skill.id}>{skill.name}</li>;
        })}
      </Styles.SkillList>
    </Styles.SkillCategory>
  );
}
