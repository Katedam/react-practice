import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class AddDogForm extends PureComponent {
  constructor(props) {
    super(props);
    
  }

  render() {
    console.log(this.props);
    const { name, age, weight, onChange } = this.props;
    return (
      <form>
        <label>Name 
          <input onChange={onChange} type="text" name="name" value={name}></input>
        </label>
        <label>Age 
          <input onChange={onChange} type="text" name="age" value={age}></input>
        </label>
        <label>Weight 
          <input onChange={onChange} type="text" name="weight" value={weight}></input>
        </label>
        <button type="submit">Add Dog</button>
      </form>
    );
  }
}

AddDogForm.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

