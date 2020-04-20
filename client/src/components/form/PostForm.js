import React, {Component} from 'react';
import Select from 'react-select';
import './PostForm.css';

const roles = [
  { value: 'SDE', label: 'SDE' },
  { value: 'SDET', label: 'SDET' },
  { value: 'DevOps', label: 'DevOps' },
  { value: 'HR', label: 'HR' },
  { value: 'Architect', label: 'Architect' },
  { value: 'Dev_Manager', label: 'Dev_Manager' },
  { value: 'QA_Manager', label: 'QA_Manager' },
  { value: 'BA', label: 'BA' },
  { value: 'PMO', label: 'PMO' },
];
 

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      status: '',
      roles: '',
      person: '',
      email: '',
      link: ''
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

  handleLinkChange(event) {
    this.setState({link: event.target.value});
  }

  handleRolesChange = selectedOption => {
    const selectedValue = [];
    selectedOption.map( (key) => {
      console.log(key.value);
      selectedValue.push(key.value);
    });
    console.log('array value: ', selectedValue);
    this.setState({roles: selectedValue});
  };

  handleSubmit = event => {

    event.preventDefault();

    console.log('role value is: ', this.state.roles);

    const userData = {
      name: this.state.name,
      location: this.state.location,
      status: this.state.status,
      roles: this.state.roles.join(),
      person: this.state.person,
      email: this.state.email,
      link: this.state.link
    }
    this.props.onSubmit(userData);

    this.setState({name: ''});
    this.setState({location: ''});
    this.setState({status: ''});
    this.setState({roles: ''});
    this.setState({person: ''});
    this.setState({email: ''});
    this.setState({link: ''});

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
          <label>Available Job Roles</label>
            <Select
                isMulti
                name="roles"
                options={roles}
                className="basic-multi-select"
                onChange = {event => this.handleRolesChange(event)}
                classNamePrefix="select"
              />

          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Contact Person Name</label>
            <input type="text" required className="form-control" id="person" value={this.state.person} required onChange={event => this.handlePersonChange(event)}/>
          </div>
      
        <div className="form-group col-md-12">

          <label>Contact Email Id</label>
          <input type="email" className="form-control" value={this.state.email} id="email" required onChange={event => this.handleEmailChange(event)}/>
        </div>

        <div className="form-group col-md-12">

          <label>Job Link</label>
          <input type="text" className="form-control" value={this.state.link} id="link" required onChange={event => this.handleLinkChange(event)}/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  </div> 
        );
    }


}

export default PostForm;