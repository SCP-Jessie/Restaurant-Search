import React, { Component } from 'react';
import NavBar from '../NavBar';
import ArticlesList from '../ArticlesList';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ArticlesList />
      </div>
    )
  }
}

export default App;
