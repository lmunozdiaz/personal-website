import styled from "styled-components";

const School = styled.div`
  background-color: #1a1a1a;
  padding: 3rem;
  border-radius: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DegreeName = styled.h2`
  font-size: 2.4rem;
`;

const SchoolName = styled.p`
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
  font-size: 14px;
  font-weight: 200;
`;

export default {
  DegreeName,
  DetailItem,
  Details,
  Header,
  School,
  SchoolName,
};

// .edu-entry__detail .material-icons {
//   font-size: 14px;
//   margin-right: 5px;
// }
