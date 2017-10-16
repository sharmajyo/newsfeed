import React from 'react';
import PropTypes from 'prop-types';
import mapDispatchToProps from '../actions'
import { connect } from 'react-redux';

export class App extends React.Component {

  componentWillMount() {
    this.props.fetchFeeds();
  }

  render() {
    const renderData = () => {
      console.log("here..");
      this.props.getFeed(this.props.feeds[0].url);
    }

    return (
      <div style={{textAlign: 'center'}}>
        <h1> {this.props.feeds[0] ? this.props.feeds[0].name : ''} </h1>
        <h1> {this.props.feeds[0] ? this.props.feeds[0].url : ''} </h1>
        <button onClick={renderData} />
      </div>
    );
  }

}

const stateToProps = ({ feedsReducer }) => {
  return {
    feeds: feedsReducer.feeds,
  }
}

export default connect (stateToProps, mapDispatchToProps)(App);
