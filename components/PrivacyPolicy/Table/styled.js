import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 70%;
  border-collapse: collapse;

  @media(max-width: 660px) {
    width: 100%;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #000;
  }

  &:hover {
    background-color: #000;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;

  @media(max-width: 660px) {
    font-size: 11px;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
  background-color: #EFA144;

  @media(max-width: 660px) {
    font-size: 11px;
  }
`;