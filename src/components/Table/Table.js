import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import BookTableHeader from './TableHeader';


class BookTable extends Component {
  render() {
    return (
      <Table  selectable={false}>
        <TableHeader displaySelectAll = {false}>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Author</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Edit/Delete</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox = {false}>
          {
            this.props.testStore.map((book, index) =>
              <BookTableHeader key={index} id={index} {...book}/>
            )
          }
        </TableBody>
      </Table>
    )
  }
}

export default connect(
  state =>({
    testStore: state
  }),
)(BookTable);