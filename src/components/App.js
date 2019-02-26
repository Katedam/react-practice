import React, { Component } from 'react';
import { AddDogForm } from './AddDogForm';
import Dogs from './Dogs';

export default class App extends Component {

  state = {
    dogs: []
  }

  addDog = dog => {
    this.setState(state => ({ 
      dogs: [...state.dogs, dog] 
    })
    );
  }

  render() {
    return (
      <>
      <h1>Add a Dog</h1>
      <AddDogForm 
        addDog={this.addDog}
      />
      <Dogs dogs={this.state.dogs}/>
      </>
    );
  }
}

