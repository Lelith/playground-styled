import React from 'react';

import BlogPostContent from './BlogPostContent'

import { Header, Footer } from './components'
import Blog from './containers/Blog'

function App() {
  return (
    <div className="grid">
      <Header />
      <div className="main">
        <Blog content={BlogPostContent}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
