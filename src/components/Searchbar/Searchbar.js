import React, { Component } from 'react';
import s from './Searchbar.module.css';
// import { BiSearchAlt2 } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onChangeInput = e => {
    this.setState({
      searchQuery: e.currentTarget.value.toLowerCase(),
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.info('Enter your request', {
        theme: 'dark',
      });
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <>
        <header className={s.searchbar}>
          <form className={s.form} onSubmit={this.onSubmit}>
            <button type="submit" className={s.button} onClick={this.onSubmit}>
              {/* <span className={s.label}>Search</span> */}
            </button>

            <input
              className={s.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.searchQuery}
              onChange={this.onChangeInput}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
