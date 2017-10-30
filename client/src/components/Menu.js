import React from 'react';
import axios from 'axios';
import { Menu as styles  } from '../styles/Styles';

const Menu = props => {

  const handleClick = (event) => {
    axios.post('/api/logout')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };

  return(
    <div style={styles.primary} className='top-menu'>
      <img style={styles.img} src={props.data.profile_picture} />
      <h3 style={styles.h3} >{props.data.full_name}</h3>
      <div style={styles.logoutDiv}>
        <h4>{props.data.username}</h4>
        <button onClick={handleClick} >Logout</button>
      </div>
    </div>
  );
}

export default Menu;
