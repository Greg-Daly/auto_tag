import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import PhotoList from '../components/PhotoList';
import Menu from '../components/Menu';



class MainContainer extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      user: [],
      modalIsOpen: false,
      hasErrored: false,
      isLoading: false,
    };
  };

  getRecentMedia() {
    this.setState({isLoading: true})
    axios.get('/api/recentmedia')
      .then(response => {
        console.log(response);
        this.setState({
          photos: response.data,
          user: response.data[0].user,
          isLoading: false
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
  };

  selectPhoto(){
    state.modalIsOpen = true;
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

    if(this.state.hasErrored) {
      return  (
        <p>Sorry, there was an error loading photos.</p>
      )
    } else if ( this.state.isLoading) {
      return (
        <p>Loading...</p>
      )
    };

    return (
      <div>
        <Menu data={this.state.user} />
        <PhotoList data={this.state.photos} />
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          >
          <img src='https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/20759257_1958498067727185_4787047432884060160_n.jpg'/>
        </Modal>
      </div>
    );
  }
};

export default MainContainer;
