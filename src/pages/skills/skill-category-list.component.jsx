import SkillCategoryComponent from "./skill-category/skill-category.component";
import Styles from "./skill-category-list.styles";

export default function SkillCategoryListComponent() {
  const data = [
    {
      categoryId: 1,
      categoryName: "Language",
      categoryIcon: "code",
      categorySkills: [
        {
          skillId: 1,
          skillName: "Java",
          category: "language",
        },
        {
          skillId: 2,
          skillName: "TypeScript",
          category: "language",
        },
        {
          skillId: 3,
          skillName: "JavaScript",
          category: "language",
        },
      ],
    },
    {
      categoryId: 2,
      categoryName: "Database",
      categoryIcon: "schema",
      categorySkills: [
        {
          skillId: 4,
          skillName: "Apache Derby",
          category: "database",
        },
        {
          skillId: 5,
          skillName: "MySQL",
          category: "database",
        },
      ],
    },
    {
      categoryId: 3,
      categoryName: "Framework",
      categoryIcon: "rocket_launch",
      categorySkills: [
        {
          skillId: 5,
          skillName: "Spring",
          category: "framework",
        },
        {
          skillId: 6,
          skillName: "Angular",
          category: "framework",
        },
      ],
    },
    {
      categoryId: 4,
      categoryName: "Other",
      categoryIcon: "build",
      categorySkills: [
        {
          skillId: 7,
          skillName: "Git",
          category: "other",
        },
        {
          skillId: 8,
          skillName: "HTML",
          category: "other",
        },
        {
          skillId: 9,
          skillName: "CSS",
          category: "other",
        },
        {
          skillId: 10,
          skillName: "React",
          category: "other",
        },
      ],
    },
  ];

  return (
    <Styles.SkillCategoryList>
      {data.map((category) => {
        return (
          <SkillCategoryComponent
            key={category.categoryId}
            categoryName={category.categoryName}
            categoryIcon={category.categoryIcon}
            categorySkills={category.categorySkills}
          />
        );
      })}
    </Styles.SkillCategoryList>
  );
}
