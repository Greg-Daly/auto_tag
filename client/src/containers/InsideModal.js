import React from 'react';
import { InsideModal as styles } from '../styles/Styles';

const InsideModal = props => {

  const handleClick = (event) => {
    props.data.open(false);
  };

  return (
    <div>
      <h3 onClick={handleClick} >X</h3>
      <img src='https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/20759257_1958498067727185_4787047432884060160_n.jpg'/>
    </div>
  )
};

export default InsideModal;
