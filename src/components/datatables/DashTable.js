import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function DenseTable({ rows }) {
  const classes = useStyles()
  console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Character</TableCell>
            <TableCell align="right">Forward Dash (Frames)</TableCell>
            <TableCell align="right">Forward Dash (Distance)</TableCell>
            <TableCell align="right">Back Dash (Frames)</TableCell>
            <TableCell align="right">Back Dash (Distance)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.name + i}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.fframes}</TableCell>
              <TableCell align="right">{row.fdist}</TableCell>
              <TableCell align="right">{row.bframes}</TableCell>
              <TableCell align="right">{row.bdist}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
