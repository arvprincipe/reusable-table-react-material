import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

export default function StickyHeadTable({ data, tableHeaders, tableBodies }) {
  const classes = useStyles();

  const getProperty = (obj, prop) => {
    var parts = prop.split('.');

    if (Array.isArray(parts)) {
      var last = parts.pop(),
        l = parts.length,
        i = 1,
        current = parts[0];

      while ((obj = obj[current]) && i < l) {
        current = parts[i];
        i++;
      }

      if (obj) {
        return obj[last];
      }
    } else {
      throw 'parts is not valid array';
    }
  }

  const ButtonLink = (prop) => {
    return (
      <Button
        component={Link}
        to={prop.link}
        variant="contained"
        type="button"
        size="small"
        className={"button-classes"}
        startIcon={prop.icon}
      />
    )
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(data => (
              <TableRow key={data.id}>
                {tableBodies.map(body => (
                  (typeof body === "string"
                    ? <TableCell key={body}>{getProperty(data, body)}</TableCell>
                    : <TableCell key={body}><ButtonLink
                      link={`${body.base}/${getProperty(data, body.param)}`}
                      icon={body.icon}
                    /></TableCell>
                  )
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
