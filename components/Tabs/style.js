import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border-bottom: 0.18rem solid #2C2C2C;
`;

export const TabButton = styled.button`
  background-color: transparent;
  font-family: Montserrat;
  font-weight:400;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  border-radius: 5px 5px 0 0;


  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    font-color: white;
  }

  ${(props) =>
    props.active &&
    `
    background-color: #EFA144;
    color: black;
    font-weight:800;
  `}
  
`;

export const TabContent = styled.div`
  margin-top: 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

