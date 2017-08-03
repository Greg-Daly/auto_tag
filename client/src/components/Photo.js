import React from 'react';
import axios from 'axios';
import { Photo as styles  } from '../styles/Styles';

const Photo = props => {

  const handleClick = (event) => {
      console.log(props.images.standard_resolution.url);
      axios.get('/api/findtags?img_url='+props.images.standard_resolution.url)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    };

  return (
    <li style={styles.li} className='photo-wrap'>
      <img style={styles.img} src={props.images.thumbnail.url} onClick={handleClick} alt='' />
    </li>
  );
};

export default Photo;
