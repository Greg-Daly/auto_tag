import React from 'react';
import Tags from '../components/Tags';
import { InsideModal as styles } from '../styles/Styles';

const InsideModal = props => {

  const handleClick = (event) => {
    props.data.open(false, null);
  };

  return (
    <div style={styles.wrapperDiv}>
      <h3 onClick={handleClick} style={styles.X} >X</h3>
      <ul style={styles.ul}>
        <li style={styles.li} ><Tags data={props.data}/></li>
        <li style={styles.li} ><button disabled={props.data.tagsIsLoading} >Comment with tags</button></li>
        <li style={styles.li}><img style={styles.img} src={props.data.currentPhoto.images.standard_resolution.url}/></li>
      </ul>
    </div>
  )
};

export default InsideModal;
