import styled from "styled-components";

const SelectMonthStyles = styled.div`
  margin: 1rem;
  margin-bottom: 1.5rem;
  button {
    padding: 0.2rem 0.5rem;
    border: 0;
    font-size: 1.3rem;
    font-family: inherit;
    background-color: transparent;
    &:hover {
      border-bottom: 1px solid black;
    }
  }

  .active {
    border-bottom: 1px solid black;
  }
`;

export default SelectMonthStyles;
