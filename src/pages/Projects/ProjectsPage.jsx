import Project from "./Project/Project";
import Separator from "../../components/Separator/Separator";
import "./ProjectsPage.styles.css";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "SpottedWebs",
      tags: ["JavaScript", "HTML", "CSS", "Front-end"],
      description:
        "A static website utilizing no frameworks to demonstrate my basic graphic design, HTML, and CSS skills.",
      source: "https://github.com/louismunozdiaz/spottedwebs",
      demo: "https://spottedwebs.netlify.app",
      image: "",
    },
    {
      id: 2,
      name: "E-commerce Web App",
      tags: ["Java", "Spring", "MySQL", "Full-stack"],
      description:
        "An e-commerce web application developed with Java, MySQL, and Spring as a semester project.",
      source: "https://github.com/louismunozdiaz/online-shop",
      demo: "",
      image: "",
    },
  ];
  return (
    <section className="projects-container">
      {projects.map((project) => {
        return (
          <>
            <Project key={project.id} project={project} />
            {project.id !== 2 ? <Separator /> : null}
          </>
        );
      })}
    </section>
  );
}
