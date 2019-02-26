import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class AddDogForm extends PureComponent {
  static propTypes = {
    addDog: PropTypes.func.isRequired
  }

  state = {
    name: 'spot',
    age: '2',
    weight: '40lbs',
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    const { name, age, weight } = this.state;
    event.preventDefault();
    this.props.addDog({ name, age, weight });
  }  

  render() {
    const { name, age, weight } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name 
          <input onChange={this.handleChange} type="text" name="name" value={name}></input>
        </label>
        <label>Age 
          <input onChange={this.handleChange} type="text" name="age" value={age}></input>
        </label>
        <label>Weight 
          <input onChange={this.handleChange} type="text" name="weight" value={weight}></input>
        </label>
        <button type="submit">Add Dog</button>
      </form>
    );
  }
}
