import styled from "styled-components";

const MainTableStyles = styled.table`
  margin-left: 3rem;
  border-collapse: collapse;

  .habit {
    display: flex;
  }

  td.event {
    min-width: 32px;
    max-width: 32px;
    max-height: 32px;
    border: dotted 1px #000000;
    &:hover {
      background-color: lightgray;
    }
  }

  td.habit {
    align-items: center;
    padding: 0 0.3rem;
    &:hover {
      background-color: lightgray;
    }
    i {
      margin-right: 0.3rem;
    }
  }
`;

export default MainTableStyles;
