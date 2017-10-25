import React from 'react';
import AddNewFeed from './AddNewFeed';
import ShowFeeds from './ShowFeeds';
import RenderFeed from './RenderFeed';

const App = () => (
  <div className="parent-container">
    <header className="app-header">
      <h2>Top stories today </h2>
    </header>
    <div className="main-container">
      <seaction className="navigation-container">
        <AddNewFeed />
        <ShowFeeds />
      </seaction>
      <seaction className="display-container">
        <RenderFeed />
      </seaction>
    </div>
  </div>
);

export default App;
