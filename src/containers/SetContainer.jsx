import React, { Component } from 'react';
import Chevron from '../components/Chevron';
import Set from '../components/Set';

class SetContainer extends Component {
  render() {
    return (
      <div className='setContainer'>
        <Chevron />
        <Set />;
      </div>
    );
  }
}

export default SetContainer;