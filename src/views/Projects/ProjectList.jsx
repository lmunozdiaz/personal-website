import Project from "./Project/Project";
import GlobalStyles from "../../utils/styles";
import Styles from "./ProjectList.styles";

export default function ProjectList() {
  const projects = [
    {
      id: 1,
      name: "Personal Website",
      tags: ["Front-end", "ViteJS", "React", "Styled Components"],
      description:
        "Luis' personal website that shares his work history, projects, and education level.",
      source: "https://github.com/louismunozdiaz/personal-website",
      demo: "https://luismunozdiaz.me",
    },
    {
      id: 2,
      name: "SpottedWebs",
      tags: ["Front-end", "JavaScript", "HTML", "CSS"],
      description:
        "A static website utilizing no frameworks to demonstrate my basic graphic design, HTML, and CSS skills.",
      source: "https://github.com/louismunozdiaz/spottedwebs",
      demo: "https://spottedwebs.netlify.app",
    },
    {
      id: 3,
      name: "Moshify",
      tags: ["Front-end", "Parcel", "JavaScript", "HTML", "CSS"],
      description:
        "A mock cloud hosting site using JavaScript, HTML and CSS developed during front-end training.",
      source: "https://github.com/louismunozdiaz/moshify",
      demo: "https://moshymosh.netlify.app",
    },
    {
      id: 4,
      name: "E-commerce Web App",
      tags: ["Full-stack", "Java", "Spring", "MySQL"],
      description:
        "An e-commerce web application developed with Java, MySQL, and Spring as a semester project.",
      source: "https://github.com/louismunozdiaz/online-shop",
      demo: "https://luismunozdiaz.me",
    },
  ];
  return (
    <Styles.Container>
      <GlobalStyles.SectionTitle>Projects</GlobalStyles.SectionTitle>
      {projects.map((project) => {
        return (
          <>
            <Project key={project.id} project={project} />
            {project.id !== 4 ? <GlobalStyles.Separator /> : null}
          </>
        );
      })}
    </Styles.Container>
  );
}
