import './App.css';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

// import Button from './components/Button';
// import Modal from './components/Modal';
// import Loader from './components/Loader';
import Container from './components/Container';

class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
    // console.log(searchQuery);
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <Container>
        <div className="App">
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery imageSearch={searchQuery} />
          <ToastContainer autoClose={3000} />
        </div>
      </Container>
    );
  }
}

export default App;
