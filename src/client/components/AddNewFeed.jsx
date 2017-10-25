import React from 'react';

export class AddFeed extends React.Component {

  render() {
    const addNewFeed = () => {};

    return (
      <form className="add-new-feed">
        <input className="feed-input" type="text" placeholder="name"/>
        <input className="feed-input" type="url" placeholder="paste feed url" />
        <button className="feed-input add-feed-btn" onClick={addNewFeed}>Add my feed</button>
      </form>
    );
  }

}

export default AddFeed;
