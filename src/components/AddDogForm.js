import React, { PureComponent } from 'react';

export class AddDogForm extends PureComponent {
  state = {
    name: '',
    age: '',
    weight: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    
  }
  render() {
    return (
      <form>
        <label>Name 
          <input type="text" name="name" value={name}></input>
        </label>
        <label>Age 
          <input type="text" name="age" value={age}></input>
        </label>
        <label>Weight 
          <input type="text" name="weight" value={weight}></input>
        </label>
        <button type="submit">Add Dog</button>
      </form>
    );
  }
}

