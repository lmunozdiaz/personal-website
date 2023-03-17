import "./Project.styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Project(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <article className="project" data-aos="fade-up">
      <div className="project__details">
        <header className="project__header">
          <h2 className="project__name">{props.project.name}</h2>
          <div className="project__tags">
            {props.project.tags.map((tag) => {
              return <p className="project__tag">{tag},&nbsp;</p>;
            })}
          </div>
        </header>
        <p className="project__description">{props.project.description}</p>
        <div className="project__buttons">
          <a href={props.project.source} target={"_blank"} className="button">
            Source
          </a>
          <a
            href={props.project.demo}
            target={"_blank"}
            className="button button--prominent"
          >
            Demo
          </a>
        </div>
      </div>
      <span className="project__image"></span>
    </article>
  );
}
