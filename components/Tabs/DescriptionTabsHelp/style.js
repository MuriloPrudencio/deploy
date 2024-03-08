import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display:flex;
`;

export const Item = styled.div`
  margin-top: 40px;
  width: 100%;
  display: inline-block;
  align-items: center;
  word-break: break-word;
  border: 0.1rem solid #FFFFFF;
  border-radius: 2rem;
  padding-left:5rem;
  padding-right:5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  
  @media (max-width: 760px) {
   font-size: 12px;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  display: flex;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const TextPrimary = styled.div`
  margin-top: 1.5rem;
  color: white;
  text-align: center;
`;
export const Text = styled.div`
  color: white;
  text-align: start;
`;
export const Title = styled.div`
  color: #EFA144;
  text-align: center;
  font-size: 4.6rem;
  font-family: MontSerrat;
  font-weight: 800;
  text-transform: uppercase;
`;
export const SecondTitle = styled.div`
  margin-top: 4rem;
  color: #EFA144;
  text-align: center;
  font-size: 3rem;
  font-family: MontSerrat;
  font-weight: 800;
  text-transform: uppercase;
`;

