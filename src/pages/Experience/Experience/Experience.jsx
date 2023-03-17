import "./Experience.styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function (props) {
  useEffect(() => {
    AOS.init();
  }, []);

  let taskId = 0;

  return (
    <article className="experience" data-aos="fade-up">
      <header className="experience__header">
        <div className="experience__heading">
          <h2 className="experience__job-title">{props.job.role}</h2>
          <p className="experience__company-name">{props.job.company}</p>
        </div>
        <div className="experience__details">
          <p className="experience__detail experience__years-worked">
            <span className="material-icons">calendar_month</span>
            {props.job.startDate} - {props.job.endDate}
          </p>
          <p className="experience__detail experience__location">
            <span className="material-icons">place</span>
            {props.job.location}
          </p>
        </div>
      </header>
      <ul className="experience__tasks">
        {props.job.tasks.map((task) => {
          return (
            <li
              key={taskId++}
              className="experience__task"
              data-aos="zoom-in-up"
            >
              <span className="experience__bullet-point"></span>
              <p>{task}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
