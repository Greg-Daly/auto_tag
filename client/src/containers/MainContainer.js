import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { photosFetchData } from '../../actions/photos';
import { tagsFetchData } from '../../actions/tags';
import { toggleModel } from '../../actions/modal';
import Modal from 'react-modal';
import axios from 'axios';
import PhotoList from '../components/PhotoList';
import Menu from '../components/Menu';
import InsideModal from './InsideModal'



class MainContainer extends Component {

  constructor() {
    super();
    this.state = {
      user: []
    };
  };

  loginToInsta(){
    console.log("loginToInsta starting");
    axios.get('/api/authorize_user')
      .then(response => {
      console.log(response);
//      this.props.fetchData('/api/recentmedia');
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };

  componentDidMount() {
    axios.get('/api/login_check')
      .then(response => {
        console.log("login_check is: " + response.data);
        if (response.data){
          this.props.fetchPhotos();
        } else {
          this.loginToInsta();
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };

  render(){
    if (this.props.photos[1]) {
      this.state.user = this.props.photos[1].user;
    };

    return (
      <div>
        <Menu data={this.state.user} />
        <PhotoList data={this.props} />
        <Modal
          isOpen={this.props.modalIsOpen}
          contentLabel="Modal"
          >
          <InsideModal data={this.props}/>
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    photosHasErrored: state.photosHasErrored,
    photosIsLoading: state.photosIsLoading,
    tags: state.tags,
    tagsHasErrored: state.tagsHasErrored,
    tagsIsLoading: state.tagsIsLoading,
    modalIsOpen: state.modalIsOpen,
    currentPhoto: state.currentPhoto
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(photosFetchData()),
    fetchTags: (photoURL) => dispatch(tagsFetchData(photoURL)),
    open: (bool, photo) => dispatch(toggleModel(bool, photo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)
(MainContainer);
