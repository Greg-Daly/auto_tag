import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import PhotoList from '../components/PhotoList';
import Menu from '../components/Menu';

class MainContainer extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      user: []
    };
  };

  getRecentMedia() {
    axios.get('/api/recentmedia')
      .then(response => {
      console.log(response);
        this.setState({
          photos: response.data,
          user: response.data[0].user
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };

  loginToInsta(){
    axios.get('/api/authorize_user')
      .then(response => {
      console.log(response);
      this.getRecentMedia();
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  componentDidMount() {

    axios.get('/api/login_check')
      .then(response => {
        console.log(response.data);
        if (response.data){
          this.getRecentMedia();
        } else {
          this.loginToInsta();
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };


  render(){
    console.log(this.state.photos);
    return (
      <div>
        <Menu data={this.state.user} />
        <PhotoList data={this.state.photos} />
      </div>
    );
  }
};

export default MainContainer;
