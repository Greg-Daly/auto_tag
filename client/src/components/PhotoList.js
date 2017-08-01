import React from 'react';
import Photo from './Photo';

const PhotoList = props => {

  const results = props.data;
  let photos;
  if(results.length > 0) {
    photos = results.map(photo =>
      <Photo images={photo.images} key={photo.id} />
    );
  } else{
    console.log("There are no photos");
  }

  return(
    <ul className='photo-list'>
      {photos}
    </ul>
  );
}


export default PhotoList;
