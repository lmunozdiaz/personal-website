import styled from "styled-components";
import { device } from "../../utils/deviceSizes.js";

const Container = styled.div`
  background-color: #141414;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
  padding: 2rem 4rem;

  @media ${device.tablet} {
    height: 95vh;
    padding: 4rem 8rem;
  }

  @media ${device.laptop} {
    height: 100vh;
    position: fixed;
    width: 50%;
  }
`;

const Header = styled.header`
  align-items: center;
  color: #7a7a7a;
  display: flex;
  justify-content: space-between;
`;

const Greeting = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;

  @media ${device.tablet} {
    font-size: 10rem;
  }

  @media ${device.laptop} {
    font-size: 8rem;
  }
`;

const Bio = styled.p`
  color: #f5f5f5;
  font-weight: 300;
  margin-top: 1rem;

  @media ${device.tablet} {
    font-size: 4rem;
  }

  @media ${device.laptop} {
    font-size: 3rem;
    max-width: 80vw;
  }
`;

const Bold = styled.b`
  font-weight: 700;
`;

const Footer = styled.footer`
  align-items: center;
  border-top: 1px solid #3b3b3b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2rem;

  @media ${device.tablet} {
    padding-top: 4rem;
    flex-direction: row;
  }
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
  font-weight: 300;
  color: #7a7a7a;
`;

const Socials = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-top: 2rem;
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
  Container,
  Portrait,
  Social,
  Socials,
};
