import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

export default function Dogs({ dogs }) {
  const listOfDogs = dogs.map(dog => {
    return <Dog 
      key={dog.name} 
      name={dog.name}
      age={dog.age}
      weight={dog.weight}
    />;
  });
  return (
    <ul>
      {listOfDogs}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};
