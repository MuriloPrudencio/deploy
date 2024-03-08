import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    
  }

  @media (max-width: 1660px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: absolute;
    left: ${({ open }) => open ? "0" : "-100%"};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 5.6em;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    opacity: .9;
    align-items: start;
    padding-left: 0.5em;

    li {
      color: #fff;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 13px;
  height: 90px;
  transition: 0.2s;
  cursor: pointer;
  text-transform: uppercase;
  border-bottom: 5px solid #000;

  @media(max-width: 1660px){
    height: 25px;
    margin: .5em auto;
  }

  &.active {
    border-bottom: 5px solid #efa144;
    height: calc(90px);
    font-weight: bold;

    @media(max-width: 1660px) {
      height: 25px;
    }
  }

  @media (min-width: 1660px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const ContainerLinks = styled.div`
@media (max-width: 1660px) {
  padding: 0.5em 0em;

}
`;

export const ContainerButton = styled.div`
  display: none;

  @media(max-width: 1660px) {
    display: block;
    margin: auto;
  }
`;