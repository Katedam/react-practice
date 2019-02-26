import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

// Dogs comp takes an array of dogs (passed from App as a prop) and creates an li for each dog using the Dog component to be returned in a ul. Dogs is rendered by app 
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
