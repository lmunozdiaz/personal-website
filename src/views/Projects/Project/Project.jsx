import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GlobalStyles from "../../../utils/styles";
import Styles from "./Project.styles";

export default function Project(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Styles.Container data-aos="fade-up">
      <Styles.Header>
        <GlobalStyles.Title>{props.project.name}</GlobalStyles.Title>
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
    </Styles.Container>
  );
}
