import React from 'react';
import Photo from './Photo';
import { PhotoList as styles  } from '../styles/Styles';

const PhotoList = props => {

  const results = props.data.photos;
  let photos;
  let row_1;
  let row_2;
  let row_3;
  if(results.length > 0) {
    photos = results.map(photo =>
      <Photo images={photo.images} key={photo.id} photo={photo} data={props.data} />
    );
    row_1 = photos.slice(0,3);
    row_2 = photos.slice(3,6);
    row_3 = photos.slice(6,9);
  } else{
    console.log("There are no photos");
  }

  if(props.data.hasErrored) {
    return  (
      <p>Sorry, there was an error loading photos.</p>
    )
  } else if (props.data.photosIsLoading) {
    return (
      <p>Loading...</p>
    );
  };

  return(
    <div style={styles.centerAll}>
    <ul style={styles.photoList} className='photo-list'>
      <ul style={styles.photoRow} className='photo-row'>
        {row_1}
      </ul>
      <br/>
      <ul style={styles.photoRow} className='photo-row'>
        {row_2}
      </ul>
      <br/>
      <ul style={styles.photoRow} className='photo-row'>
        {row_3}
      </ul>
      <br/>
    </ul>
    </div>
  );
}


export default PhotoList;
