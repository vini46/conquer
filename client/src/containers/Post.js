import React, {Component} from 'react';
import axios from 'axios';
import PostForm from '../components/form/PostForm';

class Post extends Component {

    state = {msg: ''}

    onSubmit = (data) => {
    axios.post('/api/getDetails', {
            name: data.name,
            location: data.location,
            status: data.status,
            roles: data.roles,
            person: data.person,
            email: data.email,
            link: data.link
        })
        .then( (res) => {
            console.log('success: ', res.data.msg);
            this.setState({msg: 'Thank you for your contribution'});
        })
        .catch( (error) => {
            console.log(error);
            this.setState({msg: 'Something went wrong, please update correct data'});
          });

    console.log('form value is: ', data);

    }

    render() {
        return (
            <div className="App">
            <h3> Post Jobs </h3>
            <p>
                Please fill in the details of Companies that are hiring during Covid19 Pandemic
            </p>
                <PostForm onSubmit={this.onSubmit} msg={this.state.msg}/>
              
                <h4>{this.state.msg}</h4>
              </div>


        );
    }

}

export default Post;