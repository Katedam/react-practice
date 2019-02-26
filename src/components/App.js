import React, { Component } from 'react';
import { AddDogForm } from './AddDogForm';
import Dogs from './Dogs';

// App holds and sets state of array of dogs and renders the form and the Dogs list
export default class App extends Component {

  state = {
    dogs: []
  }

  // This method sets the state of the array of dogs - it's passed to the AddDogForm comp as a prop which passes the form inputs as an argument and triggers calling addDog
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

