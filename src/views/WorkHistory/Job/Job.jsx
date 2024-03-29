import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GlobalStyles from "../../../utils/styles";
import Styles from "./Job.styles";

export default function JobComponent(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section key={props.job.id} data-aos="fade-up">
      <Styles.Header>
        <div>
          <GlobalStyles.Title>{props.job.role}</GlobalStyles.Title>
          <GlobalStyles.Subtitle>{props.job.company}</GlobalStyles.Subtitle>
        </div>
        <Styles.Details>
          <Styles.DetailItem>
            <span className="material-icons">calendar_month</span>
            {props.job.startDate} - {props.job.endDate}
          </Styles.DetailItem>
          <Styles.DetailItem>
            <span className="material-icons">place</span>
            {props.job.location}
          </Styles.DetailItem>
        </Styles.Details>
      </Styles.Header>
      <Styles.TaskList data-aos="fade-up">
        {props.job.tasks.map((task) => {
          return (
            <Styles.TaskListItem key={task.id}>
              <Styles.TaskItemDecorator />
              <Styles.TaskItem>{task.task}</Styles.TaskItem>
            </Styles.TaskListItem>
          );
        })}
      </Styles.TaskList>
    </section>
  );
}
