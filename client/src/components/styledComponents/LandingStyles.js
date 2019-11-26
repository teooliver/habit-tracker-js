import styled from "styled-components";

// #6B5DFF
// #3F3C57
// #FF6382

const LandingStyles = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: 1fr;
  margin: 4rem;
  img {
    height: auto;
    width: 100%;
  }
  /* .card {
    height: 100%;
    align-self: start;
    border: 1px solid #3f3c57;
    border-radius: 10px;
    .btn {
      border: 1px solid #3f3c57;
      border-radius: 5px;
      color: white;
      background-color: #3f3c57;
      margin: 0.5rem;
      padding: 0.2rem;
    }
  } */
`;

export default LandingStyles;
