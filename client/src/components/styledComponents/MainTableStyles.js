import styled from "styled-components";

const MainTableStyles = styled.table`
  /* width: 95%; */
  margin-left: 3rem;
  border-collapse: collapse;
  th {
  }
  td:hover {
    background-color: lightgray;
  }

  .color {
    min-width: 32px;
    height: 32px;
    border: dotted 1px #000000;
    background-color: transparent;
    word-wrap: none;
  }

  .point {
    min-width: 32px;
    height: 32px;
    border: dotted 1px #000000;
  }

  td.habit {
    i {
      margin-right: 10px;
    }
  }

  /* i {
    color: blueviolet;
  } */
`;

export default MainTableStyles;
