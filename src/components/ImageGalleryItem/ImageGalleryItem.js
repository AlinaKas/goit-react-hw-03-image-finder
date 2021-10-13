import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ src, alt }) {
  return (
    <li
      className={s.item}
      //   onClick={() => {
      //     onClick(src, alt, id);
      //   }}
    >
      <img src={src} alt={alt} className={s.image} />
    </li>
  );
}

// ImageGalleryItem.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
