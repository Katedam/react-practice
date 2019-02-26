import React from 'react';
import PropTypes from 'prop-types';

export default function Dog({ name, age, weight }) {
  return (
    <li>{name}: {age}  {weight}</li>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired
};
