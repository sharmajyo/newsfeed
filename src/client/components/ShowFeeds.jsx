import React from 'react';
import mapDispatchToProps from '../actions';
import _ from 'lodash';
import { connect } from 'react-redux';

export class ShowFeeds extends React.Component {

  componentWillMount() {
    this.props.fetchFeeds();
  }

  render() {
    const { feeds } = this.props;

    const renderData = () => {
      this.props.getFeed(this.props.feeds[0].url);
    }

    return (
      <div className="feeds-list-container"> {! _.isEmpty(feeds)
        ? <ul className="feeds-list">
          {_.map(feeds, (feed, i) => { return feed
            ?  <li className="feed-info" key={i} onClick={renderData} >
                <div className="feed-name">{feed.name}</div>
                <div className="feed-url">{feed.url}</div>
              </li>
            :
            null })}
        </ul>
        : <div className="empty-feeds">please add some feeds</div>
      }
      </div>
    );
  }

}

const stateToProps = ({ feedsReducer }) => {
  return {
    feeds: feedsReducer.feeds,
  }
};

export default connect (stateToProps, mapDispatchToProps)(ShowFeeds);
