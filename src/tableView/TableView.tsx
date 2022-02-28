import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {ParsedDataForm} from "../types";

const createData = (
  description: string,
  amount: number,
  category: string,
  transaction: string,
  metaCategory: string,
  date: string,
) => {
  return { description, amount, category, transaction, metaCategory, date };
};

const rows = [
  createData(
    "MC DONALDS FIL. 1359",
    3.38,
    "Essen",
    "Amex",
    "Ernährung",
    new Date(2022, 1, 27).toDateString()
  ),
  createData(
    "MC DONALDS FIL. 1359",
    8.99,
    "Essen",
    "Amex",
    "Ernährung",
    new Date(2022, 1, 27).toDateString()
  ),
  createData(
    "PAYPAL *DHL OL 2284333112",
    4.99,
    "Geschäftlich",
    "Amex",
    "Geschäftlich",
    new Date(2022, 1, 27).toDateString()
  ),
  createData(
    "PAYPAL *THOMAS_MUE-MUEL 4029357733",
    4.3,
    "Geschäftlich",
    "Amex",
    "Geschäftlich",
    new Date(2022, 1, 27).toDateString()
  ),
  createData(
    "REWE FICKEIS KOENIGSWINTER-O",
    39.99,
    "Essen",
    "Amex",
    "Ernährung",
    new Date(2022, 1, 27).toDateString()
  ),
];

interface TableViewForm{
  data: ParsedDataForm[]
}

const TableView = (props: TableViewForm) => {
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Beschreibung</TableCell>
              <TableCell align="right">Menge</TableCell>
              <TableCell align="right">Kategorie</TableCell>
              <TableCell align="right">Transaction</TableCell>
              <TableCell align="right">Meta Kategorie</TableCell>
              <TableCell align="right">Datum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow
                key={row.description}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.description}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.transaction}</TableCell>
                <TableCell align="right">{row.metaCategory}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default TableView;
