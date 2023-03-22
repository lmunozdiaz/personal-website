import styled from "styled-components";
import { Link } from "react-router-dom";

const LeftContainer = styled.div`
  position: fixed;
  width: 50%;
`;

const RightContainer = styled.div`
  margin-left: 50%;
  padding: 2rem 6rem 4rem 6rem;
`;

const Nav = styled.nav`
  background-color: #0d0d0d;
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  margin-bottom: 2rem;
  padding: 2rem 0;
  position: sticky;
  top: 0;
`;

const NavLink = styled(Link)`
  color: #7a7a7a;
  text-transform: capitalize;
`;

export default { LeftContainer, RightContainer, Nav, NavLink };
