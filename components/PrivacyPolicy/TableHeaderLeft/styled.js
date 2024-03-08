import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 70%;
  overflow-x: auto;

  @media(max-width: 660px) {
    max-width: 100%;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 100%;
`;

export const TableHeaderRow = styled.tr`
  background-color: #f2f2f2;
  text-align: left;
  display: none;
  
`;

export const TableHeaderCell = styled.th`
  padding: 8px;
  border: 1px solid #ddd;

  &:first-child {
    background-color: #EFA144;
  }
`;

export const TableDataRow = styled.tr`

  &:nth-child(even) {
    background-color: #000;
  }
`;

export const TableDataCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: letf;

  @media(max-width: 660px) {
    font-size: 11px;
  }

  &:first-child {
    background-color: #EFA144;
    font-weight: bold;
  }
`;