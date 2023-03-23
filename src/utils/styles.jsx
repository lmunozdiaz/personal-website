import styled from "styled-components";
import { device } from "./deviceSizes";

const SectionTitle = styled.h1`
  font-size: 3.4rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-transform: capitalize;
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  text-transform: capitalize;
`;

const Subtitle = styled.h2`
  color: #b3b3b3;
  font-weight: 300;
  font-style: italic;
`;

const Separator = styled.span`
  display: inline-block;
  width: 100%;
  border-top: 1px solid #3b3b3b;
  margin: 4rem 0;
`;

export default { Separator, Subtitle, Title, SectionTitle };
