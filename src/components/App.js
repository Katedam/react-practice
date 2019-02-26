import React, { Component } from 'react';
import { AddDogForm } from './AddDogForm';

export default class App extends Component {

  render() {
    return (
      <>
      <h1>Add a Dog</h1>
      <AddDogForm />
      </>
    );
  }
}
