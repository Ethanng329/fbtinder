import React from 'react';
import MainpageContainer from '../containers/mainpageContainer';
import setDefaultStore from '../actions';

class App extends React.Component {

  
  componentDidMount() {
    dispatch(setDefaultStore());
  }

  render() {
    return (
      <div>
        <MainpageContainer />
        this is the app
      </div>
    );
  }
}

export default App;
