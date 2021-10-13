import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import imagesAPI from '../../services/imagesApi';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

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
        .then(({ hits }) => {
          if (hits.length === 0) {
            this.setState({ status: 'rejected' });
          } else {
            console.log(hits);
            this.setState(({ images, page }) => ({
              images: [...images, ...hits],
              page: page,
              status: 'resolved',
            }));
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.scrolling();
  };

  scrolling = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

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
          {images.map(({ id, tags, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                alt={tags}
                src={webformatURL}
                // dataLargeImg={largeImageURL}
                // openModal={openModal}
              />
            );
          })}
        </ul>
      );
    }
  }
}

export default ImageGallery;
