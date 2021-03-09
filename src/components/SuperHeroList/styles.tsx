import styled from 'styled-components';

export const GridContainer = styled.div`
  max-width: 1000px;
  margin: 100px auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap:20px;

  justify-items: center;
  align-items: center;
`;


