import React from 'react';
import ImageItem from './ImageItem';

const ImageList = props => {
  const images = props.images.map(({ urls, id, description }) => 
    <ImageItem src={urls.regular} key={id} alt={description} />
  );
  return <div>{images}</div>;
}

export default ImageList;