import './App.css';
import React, { Component } from 'react';
// import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem';
// import Button from './components/Button';
// import Modal from './components/Modal';
// import Loader from './components/Loader';
import Container from './components/Container';

class App extends Component {
  state = {
    query: 'rose',
    page: 1,
  };

  async componentDidMount() {
    const API_KEY = '23098575-38c072e060e8821b5779b85db';
    // const BASE_URL = 'https://pixabay.com/api/'
    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    ).then(response => response.json().then(query => this.setState(query)));
  }
  render() {
    return (
      <Container>
        <div className="App">{this.state.query && <>тут будет разметка</>}</div>
        ;
      </Container>
    );
  }
}

export default App;
