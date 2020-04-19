import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

class Table extends Component {

    render() {

        return (

            <BootstrapTable data={this.props.data} striped hover>
            <TableHeaderColumn isKey dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Company Name</TableHeaderColumn>
            <TableHeaderColumn dataField='location' filter={ { type: 'TextFilter', delay: 1000 } }>Location</TableHeaderColumn>
            <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
            <TableHeaderColumn dataField='person'>Contact Person Name</TableHeaderColumn>
            <TableHeaderColumn dataField='email'>Contact Mail Id</TableHeaderColumn>
            </BootstrapTable>
     
        );
    }

}

export default Table;