// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {fetchImages } from "./services/api";

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    per_page: 12,
  }
};

// render() {
//   const { images,  isLoading, loadMore, page, showModal, largeImageURL } = this.state;
//   return (
//     <>
//       <Searchbar />
//       <Loader />
//       <ImageGallery />
//     </>
//   )
// }
