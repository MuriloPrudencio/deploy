import styled from "styled-components";

export const Card = styled.div`
  width: 453px;
  height: 311px;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 15px;
  margin: 0 10px;
`;

export const CustommerComment = styled.p`
  color: #efa144;
  font-family: "Rem";
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SecondComment = styled.p`
  font-family: "Rem";
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #2c2c2c;
`;

export const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h3 {
    color: #efa144;
    text-transform: uppercase;
    font-size: 18px;
    font-family: "Rem", sans-serif;
    font-weight: 700;
    text-align: start;
    padding-left: 1rem;
  }

  p {
    color: #000000;
    text-transform: uppercase;
    font-size: 12px;
    font-family: "Rem", sans-serif;
    font-weight: 600;
    text-align: start;
    padding-left: 1rem;
  }

  img {
    width: 109px;
    height: 109px;
    margin-right: 10px;
    border-radius: 50%;
    border: 7px solid #ffffff;
    box-shadow: 10px 15px 15px 0px #00000059;
    position: relative;
  }
`;

export const Stars = styled.div`
 margin-bottom: 0.5rem;
`;

export const StarsIcon = styled.span`
color:#ffc107;
align-items: justify;
`;
