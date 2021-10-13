import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import imagesAPI from '../../services/imagesApi';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: [],

    status: 'idle',
    page: 1,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.imageSearch;
    const currentSearch = this.props.imageSearch;

    if (prevSearch !== currentSearch) {
      this.setState({ status: 'pending' });
      imagesAPI
        .fetchImages(currentSearch)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`No images for your request ${currentSearch}`),
          );
        })
        .then(({ hits }) =>
          this.setState(({ images, page }) => ({
            images: [...images, ...hits],
            page: page,
            status: 'resolved',
          })),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return '';
    }
    if (status === 'pending') {
      return <p>Loading...</p>;
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }

    if (status === 'resolved') {
      return (
        <ul className={s.list}>
          {images.map(({ id, tags, webformatURL }) => {
            return <ImageGalleryItem key={id} alt={tags} src={webformatURL} />;
          })}
        </ul>
      );
    }

    //   <ul className={s.list}>
    //     {images.map(({ id, tags, webformatURL, largeImageURL, onClick }) => {
    //       return 'тут будет картинка';
    //       // <ImageGalleryItem
    //       //   key={id}
    //       //   alt={tags}
    //       //   src={webformatURL}
    //       //   dataLargeImg={largeImageURL}
    //       //   openModal={onClick}
    //       // />
    //     })}
    //   </ul>
  }
}

export default ImageGallery;
