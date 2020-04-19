import React, {Component} from 'react';
import axios from 'axios';
import Table from "../components/table/Table";

class Search extends Component {

    state = {
        details: []
      }
    
      componentDidMount(){

        axios.get('/api/getDetails').then( (res) => {
            this.setState({details: res.data});
            console.log(res.data);
        });
      }


  render() {
    return (
        <div className="App">
       
    <h3> Search For Jobs matching your needs </h3>
    <p>
        Please find below the list of Companies that are hiring during Covid19 Pandemic
    </p>
        <Table data={this.state.details} />
      
      </div>
    );
  }
}

export default Search;