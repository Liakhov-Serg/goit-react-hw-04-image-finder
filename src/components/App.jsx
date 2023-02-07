import React, { Component } from 'react';
import { fetchImages } from './services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { animateScroll } from 'react-scroll';
import { Modal } from './Modal/Modal';


class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    per_page: 12,
  }


render() {
  const { images, isLoading, loadMore, page, showModal, largeImageURL } =
    this.state;
  return (
    <>
      {/* <Searchbar onSubmit={this.formSubmit} /> */}

      {isLoading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} openModal={this.openModal} />
      )}

      {loadMore && <Button onloadMore={this.onloadMore} page={page} />}

      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
      )}
    </>
  );
  
}
};