import React from 'react';
import MainpageContainer from '../containers/mainpageContainer';
import { setDefaultStore } from '../actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainpageContainer />
      </div>
    );
  }
}

export default App;
