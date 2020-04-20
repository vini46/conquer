import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

class Table extends Component {

    CellFormatter(cell, row) {
        console.log('value is: ', row.link);
        return (<a href={String(row.link)} target="_blank">{cell}</a>);
      }

    render() {

        return (

            <BootstrapTable data={this.props.data} striped hover>
            <TableHeaderColumn isKey dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Company Name</TableHeaderColumn>
            <TableHeaderColumn dataField='location' filter={ { type: 'TextFilter', delay: 1000 } }>Location</TableHeaderColumn>
            <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
            <TableHeaderColumn dataField='roles' filter={ { type: 'TextFilter', delay: 1000 } }>Available Job Roles</TableHeaderColumn>
            <TableHeaderColumn dataField='person'>Contact Person Name</TableHeaderColumn>
            <TableHeaderColumn dataField='email'>Contact Mail Id</TableHeaderColumn>
            <TableHeaderColumn dataField='link' dataFormat={this.CellFormatter} >Job Link</TableHeaderColumn>
            </BootstrapTable>
     
        );
    }

}

export default Table;