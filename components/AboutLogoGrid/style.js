import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 0.9rem;
  column-gap: 0.2rem;
  padding-top: 1rem;

  @media(max-width: 523px) {
    row-gap: 2rem;
  }
`;

export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
`;

export const Image = styled.img`
  width: 11rem;
  object-fit: cover;
`;