import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/banner/Banner';

class Home extends Component {

  render() {
    return (
      <div className="App">
        <Banner />
        <h1 className="display-1"> Lets Conquer The Layoff</h1>
        <p className="lead">
        an initiative to help others with crowdsourcing. <br />

        Our two cents to help the community deal with Covid19 pandemic.  <br />
        </p>

        <h3>Know any Opening?</h3>
        <p>
        Lets help others...
        </p>

        <div className="buttons">
            <Link to="/search" className="btn btn-outline-info mr-1">Search for Jobs</Link>
            <Link to="/post" className="btn btn-outline-info">Post Job Detail</Link>
        </div>
       
      </div>
    );
  }
}

export default Home;