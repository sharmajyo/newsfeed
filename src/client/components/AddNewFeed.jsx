import React from 'react';
import mapDispatchToProps from '../actions';
import { connect } from 'react-redux';

export class AddFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = { feed: { name: '', url: '' } };
  }

  render() {
    const { addFeed, resetError } = this.props;
    const { feed } = this.state;

    const onChange = (attribute) => ({ target: { value } }) => {
      feed[attribute] = value;
      this.setState({ feed });
    }

    const addNewFeed = (e) => {
      e.preventDefault();
      addFeed(feed)
      .then((data) => {
        this.props.error ? resetError() : this.setState({ feed: { name: '', url: '' } });
      });

    }

    return (
      <form className="add-new-feed">
        <input
          className="feed-input"
          type="text"
          placeholder="name"
          required='true'
          value={feed.name}
          onChange={onChange('name')}
        />
        <input
          className="feed-input"
          type="url"
          placeholder="paste feed url"
          placeholder="name"
          required='true'
          value={feed.url}
          onChange={onChange('url')}
        />
        <button
          className="feed-input add-feed-btn"
          onClick={addNewFeed}
          disabled={feed.name == '' || feed.url == ''}
        >
          Add my feed
        </button>
      </form>
    );
  }

}

const stateToProps = ({ feedsReducer }) => {
  return {
    error: feedsReducer.errorInfo,
  }
};

export default connect(stateToProps, mapDispatchToProps)(AddFeed);
