import React from 'react';

import './App.css';
import BlogPostContent from './BlogPostContent'

import { Header, Footer } from './components'
import Blog from './containers/Blog'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Blog content={BlogPostContent}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
