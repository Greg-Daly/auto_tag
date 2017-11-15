import React from 'react';
import { InsideModal as styles } from '../styles/Styles';

const InsideModal = props => {

  const handleClick = (event) => {
    props.data.open(false, null);
  };

  return (
    <div>
      <h3 onClick={handleClick} >X</h3>
      <img src={props.data.currentPhoto.images.standard_resolution.url}/>
    </div>
  )
};

export default InsideModal;
