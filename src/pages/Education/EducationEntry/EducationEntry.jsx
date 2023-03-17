import "./EducationEntry.styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function EducationEntry(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article className="edu-entry" data-aos="fade-up">
      <header className="edu-entry__header">
        <div className="edu-entry__heading">
          <h2 className="edu-entry__job-title">{props.educationData.degree}</h2>
          <p className="edu-entry__company-name">
            {props.educationData.school}
          </p>
        </div>
        <div className="edu-entry__details">
          <p className="edu-entry__detail edu-entry__years-worked">
            <span class="material-icons">calendar_month</span>
            {props.educationData.startDate} - {props.educationData.endDate}
          </p>
          <p className="edu-entry__detail edu-entry__location">
            <span class="material-icons">place</span>
            {props.educationData.location}
          </p>
        </div>
      </header>
    </article>
  );
}
