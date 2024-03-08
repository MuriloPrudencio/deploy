import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 13px;
  height: 90px;
  transition: 0.2s;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  border-bottom: 5px solid #000;
  padding: 0px 10px;

  svg {
    color: #EFA144;
    margin-left: 5px;
    position: relative;
    top: 2px;
  }

  @media (max-width: 1660px) {
    padding: 0.5em 0em;
    height: 0px;
  }
`;

export const DropdownContent = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #000;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  height: 100px;
  border-left: 5px solid #efa144;
`;

export const DropdownItem = styled.a`
  color: #fff;
  text-transform: uppercase;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  background: #000;

  &:hover {
    font-weight: bold;
  }
`;