import React, {Component} from 'react';

class Contact extends Component {

   
  render() {
    return (
    //     <div className="App">
       
    // <h3> Please send your queries to, </h3>
    // <p>
    //     vinod.baradwaj@live.com <br />
    //     ganeshr@live.in
    // </p>
    //   </div>

    <div className="App">
    <h3>An initiative started by...</h3>
    <div className="card-deck">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Vinod</h5>
      <p className="card-text"><a href='mailto:vinod.baradwaj@live.com'>vinod.baradwaj@live.com</a></p>
      <a href="https://www.facebook.com/vinodbaradwaj" target="_blank"><i className="fa mr-1">&#xf230;</i></a>
      <a href="https://www.linkedin.com/in/vinodbaradwaj/" target="_blank"><i className="fa">&#xf08c;</i></a>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Ganesh</h5>
      <p className="card-text"><a href='mailto:ganeshr@live.in'>ganeshr@live.in</a></p>
      <a href="https://www.facebook.com/GaneshR.27" target="_blank"><i className="fa mr-1">&#xf230;</i></a>
      <a href="https://www.linkedin.com/in/ganesh-ramamoorthy-0b869353/" target="_blank"><i className="fa">&#xf08c;</i></a>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Apparnaa</h5>
      <p className="card-text"><a href='mailto:apparnaa_v@yahoo.co.in'>apparnaa_v@yahoo.co.in</a></p>
      <a href="https://www.facebook.com/apparnaa.venkatesan" target="_blank"><i className="fa mr-1">&#xf230;</i></a>
      <a href="https://www.linkedin.com/in/apparnaa-venkatesan/" target="_blank"><i className="fa">&#xf08c;</i></a>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default Contact;