import Skill from "./Skill/Skill";
import Styles from "./SkillList.styles";

export default function SkillList() {
  const data = [
    {
      id: 1,
      name: "Java",
      category: "language",
      icon: "",
    },
    {
      id: 2,
      name: "TypeScript",
      category: "language",
      icon: "",
    },
    {
      id: 3,
      name: "JavaScript",
      category: "language",
      icon: "",
    },
    {
      id: 4,
      name: "Apache Derby",
      category: "database",
      icon: "",
    },
    {
      id: 5,
      name: "MySQL",
      category: "database",
      icon: "",
    },
    {
      id: 6,
      name: "Spring",
      category: "framework",
      icon: "",
    },
    {
      id: 7,
      name: "Angular",
      category: "framework",
      icon: "",
    },
    {
      id: 8,
      name: "Git",
      category: "other",
      icon: "",
    },
    {
      id: 9,
      name: "HTML",
      category: "other",
      icon: "",
    },
    {
      id: 10,
      name: "CSS",
      category: "other",
      icon: "",
    },
    {
      id: 11,
      name: "React",
      category: "other",
      icon: "",
    },
  ];

  return (
    <Styles.SkillList>
      {data.map((skill) => {
        return <Skill key={skill.id} skill={skill} />;
      })}
    </Styles.SkillList>
  );
}
