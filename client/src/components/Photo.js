import { Photo as styles  } from '../styles/Styles';

const Photo = props => {

  console.log(props);

  const handleClick = (event) => {
    props.data.fetchTags(props.images.standard_resolution.url)
  };

  return (
    <li style={styles.li} className='photo-wrap'>
      <img style={styles.img} src={props.images.thumbnail.url} onClick={handleClick} alt='' />
    </li>
  );
};

export default Photo;
