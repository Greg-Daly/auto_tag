import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { photosFetchData } from '../../actions/photos';
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
    };
  };

  loginToInsta(){
    axios.get('/api/authorize_user')
      .then(response => {
      console.log(response);
      this.props.fetchData('/api/recentmedia');
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
          this.props.fetchData('/api/recentmedia');
        } else {
          this.loginToInsta();
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };


  render(){
    if(this.props.hasErrored) {
      return  (
        <p>Sorry, there was an error loading photos.</p>
      )
    } else if (this.props.isLoading) {
      return (
        <p>Loading...</p>
      )
    };

    return (
      <div>
        <Menu data={this.state.user} />
        <PhotoList data={this.props.photos} />
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

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    hasErrored: state.hasErrored,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(photosFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)
(MainContainer);
