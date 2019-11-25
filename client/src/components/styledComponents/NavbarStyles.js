import styled from "styled-components";

const NavbarStyles = styled.nav`
  margin: 0 1rem;
  display: flex;
  flex-direction: row;

  img {
    margin-top: 0.4rem;
    border-radius: 100%;
    height: 3rem;
    vertical-align: center;
  }

  ul {
    display: flex;
    list-style: none;
    li {
      vertical-align: center;
      padding: 0 1rem;
    }
  }
`;

export default NavbarStyles;
