import React from 'react';

const Menu = props => {




  return(
    <div className='top-menu'>
      <img src={props.data.profile_picture} />
      <h3>{props.data.username} : {props.data.full_name}</h3>
      <button>Logout</button>
    </div>
  );
}

export default Menu;
