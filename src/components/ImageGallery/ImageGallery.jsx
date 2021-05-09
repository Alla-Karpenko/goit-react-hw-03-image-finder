import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';


const ImageGallery = ({ hits, openImage }) => {
    return (
        <ul className={styles.ImageGallery}>
            {hits.map( ({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem 
                    key={id} 
                    webformatURL={webformatURL} 
                    largeImageURL={largeImageURL}
                    openImage={openImage}
                />
            ))} 
        </ul>
    );
};

ImageGallery.propTypes = {
    hits: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      }),
    ),
  };

export default ImageGallery;