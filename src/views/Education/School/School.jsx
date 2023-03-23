import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "./School.styles";
import GlobalStyles from "../../../utils/styles";

export default function School(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Styles.School data-aos="fade-up">
      <Styles.Header>
        <div>
          <GlobalStyles.Title>{props.educationData.degree}</GlobalStyles.Title>
          <GlobalStyles.Subtitle>
            {props.educationData.school}
          </GlobalStyles.Subtitle>
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
