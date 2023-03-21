import styled from "styled-components";

const JobEntry = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Role = styled.h2`
  font-size: 2.4rem;
`;

const CompanyNamy = styled.p`
  font-style: italic;
  text-transform: capitalize;
`;

const Details = styled.div`
  display: flex;
  gap: 2rem;
`;

const DetailItem = styled.p`
  align-items: center;
  color: #7a7a7a;
  display: flex;
  font-weight: 200;
  font-size: 14px;

  &.material-icons {
    font-size: 14px;
    margin-right: 5px;
  }
`;

const TaskList = styled.ul`
  margin-top: 1rem;
`;

const TaskListItem = styled.li`
  background-color: #1a1a1a;
  margin-bottom: 1rem;
  display: flex;
  transition: all 0.3s;
  border-radius: 0 1.5rem 1.5rem 0;
`;

const TaskItem = styled.p`
  padding: 1rem 2rem;
`;

const TaskItemDecorator = styled.span`
  display: inline-block;
  width: 5px;
  background-color: #636363;
  flex-shrink: 0;
`;

export default {
  CompanyNamy,
  DetailItem,
  Details,
  Header,
  JobEntry,
  Role,
  TaskItem,
  TaskItemDecorator,
  TaskList,
  TaskListItem,
};
