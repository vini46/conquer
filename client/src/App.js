import React, {Component} from 'react'
import { Switch, Route } from 'react-router';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Search from './containers/Search';
import Home from './containers/Home';
import Post from './containers/Post';
import contact from './containers/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch> 
              <Route exact path='/' component={Home}></Route>  
              <Route exact path='/search' component={Search}></Route>  
              <Route exact path='/post' component={Post}></Route>
              <Route exact path='/contact' component={contact}></Route>
       </Switch> 
        {/* <Banner />
        <h1 className="display-1"> Lets Conquer The Layoff</h1>
        <p className="lead">
        an initiative to help others with crowdsourcing. <br />

        Our two cents to help the community deal with Covid19 pandemic.  <br />

        <h3>Know any Opening?</h3>

        Lets help others...
        </p> */}
        <Footer />
      </div>
    );
  }
}

export default App;