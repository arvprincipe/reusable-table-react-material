import React from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import TableList from "./tableList";

const data = [
  {
    id: 23,
    order: {
      owner: {
        id: 5,
        user: {
          id: 1,
          first_name: "John",
          last_name: "Doe"
        }
      }
    },
    application_date: "2020-07-06"
  },
  {
    id: 24,
    order: {
      owner: {
        id: 5,
        user: {
          id: 4,
          first_name: "Jane",
          last_name: "Doe"
        }
      }
    },
    application_date: "2020-07-06"
  }
];

const tableHeaders = ["First Name", "Last Name", "Options"];
const tableBodies = [
  `order.owner.user.first_name`,
  `order.owner.user.last_name`,
  {
    base: '/user',
    param: `order.owner.user.id`,
    icon: <VisibilityIcon />
  }
]
export default function StickyHeadTable() {
  return (
    <TableList
      data={data}
      tableHeaders={tableHeaders}
      tableBodies={tableBodies}
    />
  );
}
