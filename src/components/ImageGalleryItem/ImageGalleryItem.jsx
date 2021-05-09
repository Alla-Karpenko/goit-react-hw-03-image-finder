import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ webformatURL ,largeImageURL, openImage }) => {

    const handleOpenImage = () => {openImage(largeImageURL);};

    return (
        <li className={styles.ImageGalleryItem}>
           <img  className={styles.ImageGalleryItemImage} 
           src={webformatURL} 
           url={largeImageURL} 
           alt=""  
           onClick={handleOpenImage}/>
        </li>
    );
};

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    onOpenImage: PropTypes.func,
};

export default ImageGalleryItem;