import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Styles from "./Project.styles";

export default function Project(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Styles.Project data-aos="fade-up">
      <Styles.ImagePlaceholder></Styles.ImagePlaceholder>
      <Styles.Details>
        <Styles.Header>
          <Styles.Title>{props.project.name}</Styles.Title>
          <Styles.Tags>
            {props.project.tags.map((tag) => {
              return <Styles.Tag>{tag},&nbsp;</Styles.Tag>;
            })}
          </Styles.Tags>
        </Styles.Header>
        <Styles.Description>{props.project.description}</Styles.Description>
        <Styles.Buttons>
          <Styles.ButtonLink href={props.project.source} target={"_blank"}>
            Source
          </Styles.ButtonLink>
          <Styles.ButtonLink
            href={props.project.demo}
            target={"_blank"}
            className="prominent"
          >
            Demo
          </Styles.ButtonLink>
        </Styles.Buttons>
      </Styles.Details>
    </Styles.Project>
  );
}
