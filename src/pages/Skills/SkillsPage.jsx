import "./SkillsPage.styles.css";
import SkillCard from "./skill-item/SkillCard";

export default function SkillsPage() {
  const skillsData = [
    {
      id: 1,
      name: "Language",
      icon: "code",
      skills: [
        {
          id: 1,
          name: "Java",
          category: "language",
        },
        {
          id: 2,
          name: "TypeScript",
          category: "language",
        },
        {
          id: 3,
          name: "JavaScript",
          category: "language",
        },
      ],
    },
    {
      id: 2,
      name: "Database",
      icon: "schema",
      skills: [
        {
          id: 4,
          name: "Apache Derby",
          category: "database",
        },
        {
          id: 5,
          name: "MySQL",
          category: "database",
        },
      ],
    },
    {
      id: 3,
      name: "Framework",
      icon: "rocket_launch",
      skills: [
        {
          id: 5,
          name: "Spring",
          category: "framework",
        },
        {
          id: 6,
          name: "Angular",
          category: "framework",
        },
      ],
    },
    {
      id: 4,
      name: "Other",
      icon: "build",
      skills: [
        {
          id: 7,
          name: "Git",
          category: "other",
        },
        {
          id: 8,
          name: "HTML",
          category: "other",
        },
        {
          id: 9,
          name: "CSS",
          category: "other",
        },
        {
          id: 10,
          name: "React",
          category: "other",
        },
      ],
    },
  ];

  return (
    <section className="skills-container">
      {skillsData.map((skillCategory) => {
        return (
          <SkillCard
            key={skillCategory.id}
            categoryName={skillCategory.name}
            icon={skillCategory.icon}
            skills={skillCategory.skills}
          />
        );
      })}
    </section>
  );
}
