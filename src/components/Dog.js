import React from 'react';
import PropTypes from 'prop-types';

// Dog gets its props from Dogs which uses this comp to render a new li for each dog. Dog returns only 1 li at a time
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
