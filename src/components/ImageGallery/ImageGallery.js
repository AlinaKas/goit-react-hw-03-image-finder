import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import imagesAPI from '../../services/imagesApi';

// import Modal from '../Modal';
// import Button from '../Button';

// import LoaderSpinner from '../Loader';

// export default class ImageGallery extends Component {
//   state = {
//     images: [],
//     page: 1,
//     status: 'idle',
//     showModal: false,
//     error: null,
//     modalImage: '',
//     alt: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevSearch = prevProps.imageSearch;
//     const nextSearch = this.props.imageSearch;
//     const prevPage = prevState.page;
//     const nextPage = this.state.page;

//     if (prevSearch !== nextSearch || prevPage !== nextPage) {
//       this.setState({ status: 'pending' });

//       imagesAPI
//         .fetchImages(nextSearch, nextPage)
//         .then(({ hits }) => {
//           console.log({ hits });

//           if (hits.length === 0) {
//             return this.setState({
//               status: 'rejected',
//               error: `No images for your request ${nextSearch}`,
//             });
//           }
//           // console.log(hits);
//           this.setState(prevState => ({
//             images: [...prevState.images, ...hits],
//             status: 'resolved',
//           }));
//         })
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
//   }

//   // // Сабмит формы и очистка
//   // handleFormSubmit = searchQuery => {
//   //   this.setState({ searchQuery, images: [], page: 1, error: null });
//   // };

//   // Загрузка дальнейших картинок

//   onLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//     this.scrollPage();
//   };

//   //Скролл при подгрузке картинок
//   scrollPage = () => {
//     setTimeout(() => {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     }, 1000);
//   };

//   //Модалка
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   openModal = e => {
//     this.setState(() => ({
//       modalImage: e.target.dataset.modal,
//       alt: e.target.alt,
//     }));
//     this.toggleModal();
//   };

//   // РЕНДЕР СТРАНИЦЫ

//   render() {
//     const { images, error, status, showModal, modalImage, alt } = this.state;

//     if (status === 'idle') {
//       return '';
//     }

//     if (status === 'pending') {
//       return <LoaderSpinner />;
//     }

//     if (status === 'rejected') {
//       return <p className={s.error}>{error}</p>;
//     }

//     if (status === 'resolved') {
//       return (
//         <>
//           <ul className={s.list}>
//             {images.map(({ id, tags, webformatURL, largeImageURL }) => {
//               return (
//                 <ImageGalleryItem
//                   key={id}
//                   alt={tags}
//                   src={webformatURL}
//                   srcBigImg={largeImageURL}
//                   onClick={this.openModal}
//                 />
//               );
//             })}
//           </ul>
//           <Button loadImages={this.onLoadMore} />
//           {showModal && (
//             <Modal onClose={this.toggleModal} src={modalImage} alt={alt} />
//           )}
//         </>
//       );
//     }
//   }
// }

// ImageGallery.prototype = {
//   images: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   onClick: PropTypes.func,
// };

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={s.list}>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <>
            <ImageGalleryItem
              key={id}
              alt={tags}
              src={webformatURL}
              srcBigImg={largeImageURL}
              onClick={onClick}
            />
          </>
        );
      })}
    </ul>
  );
}

// ImageGallery.prototype = {
//   images: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   onClick: PropTypes.func,
// };

// export default ImageGallery;

// import imagesAPI from '../../services/imagesApi';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// class ImageGallery extends Component {
//   state = {
//     images: [],

//     status: 'idle',
//     page: 1,
//     showModal: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevSearch = prevProps.imageSearch;
//     const nextSearch = this.props.imageSearch;
//     const prevPage = prevState.page;
//     const nextPage = this.state.page;

//     if (prevSearch !== nextSearch || prevPage !== nextPage) {
//       this.setState({ status: 'pending' });

//       imagesAPI
//         .fetchImages(nextSearch, nextPage)
//         .then(({ hits }) => {
//           console.log({ hits });
//           if (hits.length === 0) {
//             this.setState({ status: 'rejected' });
//           } else {
//             // console.log(hits);
//             this.setState(({ images, page }) => ({
//               images: [...images, ...hits],
//               page: page,
//               status: 'resolved',
//               //   searchQuery: nextSearch,
//             }));
//           }
//         })
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
//   }

//   onLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//     this.scrolling();
//   };

//   scrolling = () => {
//     setTimeout(() => {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     }, 1000);
//   };

//   render() {
//     const { images, error, status } = this.state;

//     if (status === 'idle') {
//       return '';
//     }
//     if (status === 'pending') {
//       return (
//         <Loader
//           className="s.loader"
//           type="Oval"
//           color="#00BFFF"
//           height={120}
//           width={120}
//         />
//       );
//     }

//     if (status === 'rejected') {
//       return <p>{error.message}</p>;
//     }

//     if (status === 'resolved') {
//       return (
//         <>
//           <ul className={s.list}>
//             {images.map(({ id, tags, webformatURL, largeImageURL }) => {
//               return (
//                 <ImageGalleryItem
//                   key={id}
//                   id={id}
//                   alt={tags}
//                   src={webformatURL}
//                   // dataLargeImg={largeImageURL}
//                   // openModal={openModal}
//                 />
//               );
//             })}
//           </ul>
//           <Button loadImages={this.onLoadMore} />
//         </>
//       );
//     }
//   }
// }

// export default ImageGallery;
