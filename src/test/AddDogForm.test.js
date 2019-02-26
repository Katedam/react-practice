import React from 'react';
import { shallow } from 'enzyme';
import { AddDogForm } from '../components/AddDogForm';

describe('AddDogForm', () => {
  it('can add a new dog', () => {
    const addDog = jest.fn();
    const wrapper = shallow(
      <AddDogForm addDog={addDog} />
    ); 

    wrapper.setState({
      name: 'spot',
      age: '2',
      weight: '10lbs'
    });

    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });

    expect(addDog).toBeCalledWith({ name: 'spot', age: '2', weight: '10lbs' });
  });
})
;
