import styled from "styled-components";

const NavbarStyles = styled.header`
  box-sizing: border-box;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  /* background-color: rgba(63, 60, 87, 0.4); */
  text-align: center;
  /* color: white; */

  h1 {
    margin: auto;
    font-size: 2.2rem;
  }

  nav {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    /* vertical-align: center; */
    width: 100%;
  }

  img {
    border-radius: 100%;
    height: 3rem;
    margin: 0.2rem;
    vertical-align: center;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      padding: 0 1rem;
    }
  }

  .link {
    color: #3f3c57;
    text-decoration: none;
    font-size: 0.8rem;
    vertical-align: center;
    text-transform: uppercase;
    &:hover {
      border-bottom: 1px solid black;
    }
  }
`;

export default NavbarStyles;
