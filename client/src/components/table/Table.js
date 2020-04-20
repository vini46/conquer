import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './Table.css';

class Table extends Component {

    CellFormatter(cell, row) {
        return (<a href={String(row.link)} target="_blank">{cell}</a>);
      }

      MailFormatter(cell, row) {
        const val = "mailto:" + String(row.email);
        return (<a href={val} target="_blank">{cell}</a>);
      }

    render() {

        return (

          <div className="table-horiz-scroll">
            <BootstrapTable data={this.props.data} printable striped hover height='600px' bodyStyle={{overflow: 'overlay'}}>
            <TableHeaderColumn isKey dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Company Name</TableHeaderColumn>
            <TableHeaderColumn dataField='location' filter={ { type: 'TextFilter', delay: 1000 } }>Location</TableHeaderColumn>
            <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
            <TableHeaderColumn dataField='roles' filter={ { type: 'TextFilter', delay: 1000 } }>Available Job Roles</TableHeaderColumn>
            <TableHeaderColumn dataField='person'>Contact Person Name</TableHeaderColumn>
            <TableHeaderColumn dataField='email' dataFormat={this.MailFormatter} >Contact Mail Id</TableHeaderColumn>
            <TableHeaderColumn dataField='link' dataFormat={this.CellFormatter} >Job Link</TableHeaderColumn>
            </BootstrapTable>
          </div>  
     
        );
    }

}

export default Table;