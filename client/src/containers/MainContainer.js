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

  componentDidMount() {
    axios.get('/api/recentmedia')
      .then(response => {
        this.setState({
          photos: response.data,
          user: response.data[0].user
        });
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
        <h1> Hello from React</h1>

        <PhotoList data={this.state.photos} />
      </div>
    );
  }
};

export default MainContainer;
