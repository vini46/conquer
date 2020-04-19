import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


class NavBar extends Component {

    render(){
        return (
            // <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
            //  <div className="container">

            //     <span class="navbar-brand mb-0 h1">Conquer-Layoff</span>

            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            //       aria-expanded="false" aria-label="Toggle navigation">
            //       <span className="navbar-toggler-icon"></span>
            //     </button>

            //     <div className="collapse navbar-collapse" id="navbarSupportedContent">

            //       <ul className="navbar-nav mr-auto">
            //         <li className="nav-item active">
            //         <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Find Job</button>
            //         </li>
            //       </ul>

            //       <ul className="navbar-nav nav-flex-icons">
            //         <li className="nav-item">
            //         <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Post Job Openings</button>
            //         </li>
            //       </ul>

            //     </div>

            //    </div>
            //  </nav>
    
            <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
  <div className="container">
    {/* <a href="#" className="navbar-brand"> */}
      
      <img src={require('../../assets/logo.jpg')} width="45" alt="" className="d-inline-block align-middle mr-2" />
     
      {/* <span className="text-uppercase font-weight-bold">Company</span> */}
      <Link to="/">
      <span className="dh-blue">conquer</span><span className="dh-green"> layoff</span>
      </Link>

      
    {/* </a> */}

    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

    <div id="navbarSupportedContent" className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
       {/* <li className="nav-item"><a href="#" class="nav-link">Search</a></li>
        <li className="nav-item"><a href="#" class="nav-link">Post</a></li>
        <li className="nav-item"><a href="#" class="nav-link">Contact</a></li> */}

         <Link to="/search" className="nav-item nav-link">Search</Link>
         <Link to="/post" className="nav-item nav-link">Post</Link>
         <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
      </ul>
    </div>
  </div>
</nav>
        );
    }
}

export default NavBar;