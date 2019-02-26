import React, { Component } from 'react';
import { AddDogForm } from './AddDogForm';

export default class App extends Component {

  state = {
    name: 'spot',
    age: '2',
    weight: '40lbs'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, age, weight } = this.state;
    return (
      <>
      <h1>Add a Dog</h1>
      <AddDogForm 
        name={name}
        age={age}
        weight={weight}
        onChange={this.handleChange}
      />
      </>
    );
  }
}
