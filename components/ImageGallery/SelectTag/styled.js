import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const colorAnimation = keyframes`
  0%, 100% {
    color: #EFA144;
  }
  20% {
    color: #fff;
  }
  40% {
    color: #EFA144;
  }
  60% {
    color: #fff;
  }
  80% {
    color: #EFA144;
  }
`;

export const AnimatedText = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 1em;
  line-height: 2;
  font-weight: 300;
  text-rendering: optimizeLegibility;
`;

export const Letter = styled.span`
  color: ${(props) => props.initialColor || 'red'};
  animation: ${colorAnimation} 5s linear infinite;
  animation-delay: calc(0.5s * ${(props) => props.index});
  display: inline-block;
  margin: 0 2px;
`;

export const CustomSelect = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  background: #000;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 1em;
  line-height: 2;
  font-weight: 300;
  text-rendering: optimizeLegibility;
  color: #fff;
  border: 1px solid #fff;

  &:hover {
    background: #000;
  }

  select {
    appearance: none;
    position: relative;
    background: transparent;
    text-transform: uppercase;
    border: none;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    color: #fff;

    option {
        cursor: pointer;
        background: #000;
        border-radius: 5px;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-size: 1em;
        line-height: 2;
        font-weight: 300;
        text-rendering: optimizeLegibility;
        color: #fff;
        padding: 5px 0px;

      &:hover {
        background: #fff;
      }
    }

    &::-ms-expand {
      display: none;
    }
  }
`;