function fetchImages(searchQuery, page) {
  const API_KEY = '23098575-38c072e060e8821b5779b85db';
  const BASE_URL = 'https://pixabay.com/api/';
  const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url);
}
const api = { fetchImages };
export default api;

// async componentDidMount() {
//     const API_KEY = '23098575-38c072e060e8821b5779b85db';
//     // const BASE_URL = 'https://pixabay.com/api/'
//     fetch(
//       `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//     ).then(response =>
//       response.json().then(searchQuery => this.setState(searchQuery)),
//     );
//   }
