import React from "react";
import { TableCell, TableContainer, TableRow, TableHeaderCell } from "./styled";

function Table ({ data, headers })  {
    return (
      <TableContainer>
        <thead>
          <TableRow>
            {headers.map((header, index) => (
              <TableHeaderCell key={index}>{header}</TableHeaderCell>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    );
  };
  
export default Table;