import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "./utils/deviceSizes";

const Nav = styled.nav`
  background-color: #0d0d0d;
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding-top: 2rem;

  @media ${device.tablet} {
    margin-left: 50%;
    padding-top: 4rem;
    width: 50%;
  }

  @media ${device.laptop} {
    margin-left: 50%;
    padding-bottom: 2rem;
    position: fixed;
    width: 50%;
  }
`;

const NavLink = styled(Link)`
  color: #7a7a7a;
  text-transform: capitalize;
`;

export default { Nav, NavLink };
