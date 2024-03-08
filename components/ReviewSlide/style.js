import styled from "styled-components";

export const Card = styled.div`
  width: 453px;
  height: 311px;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const Avatar = styled.img`
  width: 109px;
  height: 109px;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: 15px;
  border: 7px solid #fff;
  box-shadow: 3px 4px 3px #00000026;
`;

export const Info = styled.div`
  margin-left: 50px;
`;

export const Name = styled.h3`
  padding-left: 80px;
  font-size: 1.2rem;
  color: #efa144;
  text-align: start;
`;

export const Profession = styled.p`
  padding-left: 80px;
  text-align: start;

  margin: 5px 0;
  font-size: 0.9rem;
  color: #000000;
`;

export const Stars = styled.div`
  padding-top: 2rem;
  display: flex;
`;

export const Star = styled.span`
  width: 19px;
  height: 19px;
  background-color: #f39c12;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  margin-right: 5px;
`;

export const Comment = styled.p`
  padding-top: 1rem;
  margin: 10px 0;
  font-size: 22px;
  text-align: start;
  font-family: "Rem";
  font-weight: 700;
  color: #000000;
`;

export const Span = styled.span`
    color: #efa144;
`;

export const Details = styled.p`
  font-size: 0.9rem;
  color: #000000;
  text-align: start;
`;
