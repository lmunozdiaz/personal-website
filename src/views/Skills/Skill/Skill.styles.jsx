import styled from "styled-components";

const Skill = styled.div`
  background-color: #1a1a1a;
  border-radius: 1.5rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.span`
  background-color: #3b3b3b;
  border-radius: 50px;
  display: inline-block;
  height: 50px;
  width: 50px;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  font-size: 2.4rem;
  text-transform: capitalize;
`;

export default {
  Icon,
  Name,
  Skill,
};
