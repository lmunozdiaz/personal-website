import styled from "styled-components";

const MyProfile = styled.div`
  background-color: #141414;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 4rem 8rem;
`;

const Header = styled.header`
  align-items: center;
  color: #7a7a7a;
  display: flex;
  justify-content: space-between;
`;

const Greeting = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  line-height: 1;
`;

const Bio = styled.p`
  color: #f5f5f5;
  font-size: 3rem;
  font-weight: 300;
  margin: 2rem 0 0 0;
  max-width: 65rem;
`;

const Bold = styled.b`
  font-weight: 700;
`;

const Footer = styled.footer`
  align-items: center;
  border-top: 1px solid #3b3b3b;
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
`;

const MoreDetails = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

const Portrait = styled.img`
  border-radius: 5rem;
  height: 5rem;
  object-fit: cover;
  width: 5rem;
`;

const Location = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: #7a7a7a;
`;

const Socials = styled.div`
  display: flex;
  gap: 1.1rem;
`;

const Social = styled.i`
  color: #636363;
`;

export default {
  Bio,
  Bold,
  Footer,
  Greeting,
  Header,
  Location,
  MoreDetails,
  MyProfile,
  Portrait,
  Social,
  Socials,
};
