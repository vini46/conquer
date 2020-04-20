import React, {Component} from 'react';
import ReactNotification, {store} from 'react-notifications-component'
import axios from 'axios';
import PostForm from '../components/form/PostForm';
import 'react-notifications-component/dist/theme.css'

class Post extends Component {


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
            store.addNotification({
                title: "Success!",
                message: "Thank you for your contribution...",
                type: "success",
                insert: "top",
                container: "center",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
        })
        .catch( (error) => {
            console.log(error);
            store.addNotification({
                title: "Error!",
                message: "Something happened, please try to upload with correct values...",
                type: "danger",
                insert: "top",
                container: "center",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
          });

    console.log('form value is: ', data);

    }

    render() {
        return (
            <div className="post">
                <ReactNotification />
                <h3> Post Jobs </h3>
                <p>
                    Please fill in the details of Companies that are hiring during Covid19 Pandemic
                </p>
                    <PostForm onSubmit={this.onSubmit} />
              </div>


        );
    }

}

export default Post;