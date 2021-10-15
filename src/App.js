import s from './App.module.css';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import imagesAPI from './services/imagesApi';

// import Modal from './components/Modal';
// import Button from './components/Button';

// import LoaderSpinner from './components/Loader';
import Container from './components/Container';

class App extends Component {
  state = {
    searchQuery: '',
  };

  // Сабмит формы и очистка
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  // // Загрузка дальнейших картинок

  // onLoadMore = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  //   this.scrollPage();
  // };

  // //Скролл при подгрузке картинок
  // scrollPage = () => {
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   }, 1000);
  // };

  // //Модалка
  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  // };

  // openModal = e => {
  //   this.setState(() => ({
  //     modalImage: e.target.dataset.modal,
  //     alt: e.target.alt,
  //   }));
  //   this.toggleModal();
  // };

  // РЕНДЕР СТРАНИЦЫ

  render() {
    return (
      <Container>
        <div className={s.App}>
          <Searchbar onSubmit={this.handleFormSubmit} />
          {/* {images.length > 0 && !error && ( */}
          <>
            <ImageGallery imageSearch={this.state.searchQuery} />
            {/* <Button loadImages={this.onLoadMore} /> */}
          </>
          {/* )} */}
          {/* {showModal && (
            <Modal
              onClose={this.toggleModal}
              src={modalImage}
              alt={alt}
            ></Modal>
          )}
          {error && <p className={s.error}>{error}</p>} */}
          <ToastContainer autoClose={3000} />
        </div>
      </Container>
    );
  }
}

export default App;
