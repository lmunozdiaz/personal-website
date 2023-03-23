import styled from "styled-components";
import { device } from "../../utils/deviceSizes.js";

const Container = styled.div`
  padding: 2rem 4rem;

  @media ${device.tablet} {
    padding: 4rem 8rem;
  }
`;

export default { Container };
