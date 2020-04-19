import React, {Component} from 'react';
import './PostForm.css';


class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      status: '',
      person: '',
      email: ''
    };

  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleStatusChange(event) {
    this.setState({status: event.target.value});
  }
  handlePersonChange(event) {
    this.setState({person: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit = event => {

    event.preventDefault();

    const userData = {
      name: this.state.name,
      location: this.state.location,
      status: this.state.status,
      person: this.state.person,
      email: this.state.email
    }
    this.props.onSubmit(userData);

  }


    render() {

        return (
 <div className="PostForm">
    <form onSubmit={this.handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label>Company Name</label>
          <input type="text" className="form-control" value={this.state.name} id="name" required onChange={event => this.handleNameChange(event)}/>
        </div>
        <div className="form-group col-md-12">
          <label>Location</label>
          <input type="text" className="form-control" id="location" value={this.state.location} placeholder="Enter location and use ',' for multiple locations " required onChange={event => this.handleLocationChange(event)}/>
        </div>
      </div>
      <div className="form-row">
          <div className="form-group col-md-12">
            <label>Status</label>
            <select id="status" className="form-control" required value={this.state.status} onChange={event => this.handleStatusChange(event)}>
              <option hidden defaultValue> -- select an option -- </option>
              <option>Hiring</option>
              <option>Freezed</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Contact Person Name</label>
            <input type="text" required className="form-control" id="person" value={this.state.person} required onChange={event => this.handlePersonChange(event)}/>
          </div>
      
        <div className="form-group col-md-12">

          <label>Contact Email Id</label>
          <input type="email" required className="form-control" value={this.state.email} id="email" required onChange={event => this.handleEmailChange(event)}/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  </div> 
        );
    }


}

export default PostForm;