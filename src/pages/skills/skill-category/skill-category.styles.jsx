import styled from "styled-components";

const SkillCategory = styled.div`
  background-color: #1a1a1a;
  padding: 4rem;
  border-radius: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryIcon = styled.span`
  align-items: center;
  background-color: #3b3b3b;
  border-radius: 50px;
  display: block;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  max-height: 50px;
  max-width: 50px;
  padding: 1.2rem;
`;

const CategoryName = styled.h2`
  font-size: 2.4rem;
  text-transform: capitalize;
`;

const SkillList = styled.ul`
  margin-top: 2rem;
`;

export default {
  CategoryIcon,
  CategoryName,
  Header,
  SkillCategory,
  SkillList,
};
