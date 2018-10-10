import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Cards, { Card } from 'react-swipe-card';

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setDefault();
  }

  render() {
    return <Wrapper data={this.props.defaultUsers} />;
  }
}

const Wrapper = ({ data }) => {
  return (
    <Cards onEnd={console.log("action('end')")} className="master-root">
      {data.map(item => (
        <Card
          key={item}
          onSwipeLeft={() => {
            console.log("action('swipe left')");
          }}
          onSwipeRight={() => {
            console.log("action('swipe right')");
          }}
        >
          <h2>{item}</h2>
        </Card>
      ))}
    </Cards>
  );
};

export default Mainpage;
