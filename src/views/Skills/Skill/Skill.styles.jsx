import styled from "styled-components";
import { device } from "../../../utils/deviceSizes";

const Container = styled.div`
  background-color: #1a1a1a;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: flex-start;

  @media ${device.tablet} {
  }
`;

const Icon = styled.span`
  background-color: #3b3b3b;
  border-radius: 50px;
  display: inline-block;
  height: 50px;
  width: 50px;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  text-transform: capitalize;
`;

export default {
  Container,
  Icon,
  Name,
};
