import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: #0d0d0d;
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding-top: 2rem;
`;

const NavLink = styled(Link)`
  color: #7a7a7a;
  text-transform: capitalize;
`;

export default { Nav, NavLink };
