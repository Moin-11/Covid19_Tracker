import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { sortBy } from "lodash";

import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import Common from "@material-ui/core/colors/common";

const columns = [
  { id: "ID", label: "ID", minWidth: 70 },
  {
    id: "CountryName",
    label: "Country Name",
    minWidth: 140,
    align: "left",
    backgroundColor: Common.white,
  },
  {
    id: "Confirmed",
    label: "Confirmed",
    minWidth: 140,
    align: "left",
    backgroundColor: green.A400,
    contentColor: green.A100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Recovered",
    label: "Recovered",
    minWidth: 140,
    align: "left",
    backgroundColor: blue.A400,
    contentColor: blue.A100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Deaths",
    label: "Deaths",
    minWidth: 140,
    align: "left",
    backgroundColor: red.A400,
    contentColor: red.A100,
    format: (value) => value.toLocaleString("en-US"),
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100vh",
  },
});

const TableDisplay = ({ tableData }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const countries = tableData?.Countries;
  const CountriesbyTotalConfirmed = sortBy(
    countries,
    "TotalConfirmed"
  ).reverse();

  const rows = CountriesbyTotalConfirmed?.map((country) => ({
    ID: country.CountryCode,
    CountryName: country.Country,
    Confirmed: country.TotalConfirmed,
    Recovered: country.TotalRecovered,
    Deaths: country.TotalDeaths,
  }));

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: column.backgroundColor,
                    color: column.textColor,
                    fontFamily: "Share",
                    fontStyle: "bold",
                    fontSize: "2rem",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.Id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            backgroundColor: column.contentColor,
                            color: column.textColor,
                            fontFamily: "Share",
                            fontSize: "1.5rem",
                            fontWeight: "400",
                          }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default TableDisplay;
