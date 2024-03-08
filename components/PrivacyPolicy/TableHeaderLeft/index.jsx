import React from "react";
import { TableContainer, Table, TableDataCell, TableDataRow } from "./styled";

function TableLeft ({ data, headers }) {
    return (
      <TableContainer>
        <Table>
          <tbody>
            {data.map((row, rowIndex) => (
              <TableDataRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableDataCell key={cellIndex}>{cell}</TableDataCell>
                ))}
              </TableDataRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    );
  };
  
export default TableLeft;