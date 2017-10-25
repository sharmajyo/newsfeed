import React from 'react';
import _ from 'lodash';
import mapDispatchToProps from '../actions';
import { connect } from 'react-redux';

class RenderFeed extends React.Component {

  render() {
    const { selectedFeed } = this.props;
    return (
      <div> { _.isEmpty(selectedFeed)
        ? ''
        : <div>
            <img src={selectedFeed.feed.image} />
            <section>
              {selectedFeed.feed.description}
              <ul className="feeds-sub-items">
              {
                _.map(selectedFeed.items, (item, i) => {
                  const a = <li className="item-details" key={i} >
                    <h3 className="item-title">{item.title}</h3>
                    <div className="item-content">{item.content}</div>
                    <a href={item.link}>read more</a>
                  </li>

                  console.log("a",a);
                  return a;
                })
              }
              </ul>
            </section>
          </div>
        }
      </div>
    );
  }
}

const stateToProps = ({ feedsReducer }) => {
  return {
    selectedFeed: feedsReducer.selectedFeed,
  }
}

export default connect (stateToProps, mapDispatchToProps)(RenderFeed);
