import s from './App.module.css';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import imagesAPI from './services/imagesApi';

import Modal from './components/Modal';
import Button from './components/Button';

import LoaderSpinner from './components/Loader';
import Container from './components/Container';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    status: 'idle',
    showModal: false,
    error: null,
    modalImage: '',
    alt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchQuery;
    const nextSearch = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevSearch !== nextSearch || prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      imagesAPI
        .fetchImages(nextSearch, nextPage)
        .then(({ hits }) => {
          console.log({ hits });

          if (hits.length === 0) {
            return this.setState({
              status: 'rejected',
              error: `No images for your request ${nextSearch}`,
            });
          }

          // console.log(hits);
          this.setState(({ images, page }) => ({
            images: [...images, ...hits],
            page: page,
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  // Сабмит формы и очистка
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, images: [], page: 1, error: null });
  };

  // Загрузка дальнейших картинок

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.scrollPage();
  };

  //Скролл при подгрузке картинок
  scrollPage = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  //Модалка
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = e => {
    this.setState(() => ({
      modalImage: e.target.dataset.modal,
      alt: e.target.alt,
    }));
    this.toggleModal();
  };

  // РЕНДЕР СТРАНИЦЫ

  render() {
    const { images, error, status, modalImage, alt, showModal } = this.state;

    if (status === 'idle') {
      return <Searchbar onSubmit={this.handleFormSubmit} />;
    }

    if (status === 'pending') {
      return <LoaderSpinner />;
    }

    if (status === 'rejected') {
      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />;
          <p className={s.error}>{error}</p>
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <Container>
          <div className={s.App}>
            <Searchbar onSubmit={this.handleFormSubmit} />
            {images.length > 0 && !error && (
              <>
                <ImageGallery onClick={this.openModal} images={images} />
                <Button loadImages={this.onLoadMore} />
              </>
            )}
            {showModal && (
              <Modal onClose={this.toggleModal} src={modalImage} alt={alt} />
            )}
            {error && <p className={s.error}>{error}</p>}
            <ToastContainer autoClose={3000} />
          </div>
        </Container>
      );
    }
  }
}

export default App;
