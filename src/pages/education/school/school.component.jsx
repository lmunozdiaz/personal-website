import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Styles from "./school.styles";

export default function SchoolComponent(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Styles.School data-aos="fade-up">
      <Styles.Header>
        <div>
          <Styles.DegreeName>{props.educationData.degree}</Styles.DegreeName>
          <Styles.SchoolName>{props.educationData.school}</Styles.SchoolName>
        </div>
        <Styles.Details>
          <Styles.DetailItem>
            <span class="material-icons">calendar_month</span>
            {props.educationData.startDate} - {props.educationData.endDate}
          </Styles.DetailItem>
          <Styles.DetailItem>
            <span class="material-icons">place</span>
            {props.educationData.location}
          </Styles.DetailItem>
        </Styles.Details>
      </Styles.Header>
    </Styles.School>
  );
}