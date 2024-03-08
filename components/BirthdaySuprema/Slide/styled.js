import styled from 'styled-components';

export const SlideshowContainer = styled.div`
  position: relative;
  width: 469px;
  height: 424px;
  top: 4em;

  @media(max-width: 1627px) {
    width: 345px;
    height: 366px;
    top: 2em;
  }

  @media(max-width: 1627px) {
    width: 310px;
    height: 310px;
    top: 2em;
  }

  @media(max-width: 939px) {
    top: -1.5em;
  }
`;

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position: relative;
  top: 25em;

  @media(max-width: 1627px) {
    top: 21.5em;
  }

  @media(max-width: 1163px) {
    top: 18.5em;
  }
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#fff' : '#ffffff30')};
  margin: 0 5px;
  cursor: pointer;
`;