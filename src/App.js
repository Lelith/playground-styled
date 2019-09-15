import React from 'react';
import styled from 'styled-components/macro';
import BlogPostContent from './BlogPostContent';
import { Header, Footer } from './components';
import Blog from './containers/Blog';

const Grid = styled.div`
  background: ivory;
  font-size: 16px;
  display: grid;
  grid-template-columns: 140px 50px auto 50px 140px;
  grid-template-areas:
  "header header header header header"
  ". main main main ."
  "footer footer footer footer footer"
`

const Main = styled.div`
  grid-area: main;
`

function App() {
  return (
    <Grid>
      <Header />
      <Main>
        <Blog content={BlogPostContent}/>
      </Main>
      <Footer />
    </Grid>
  );
}

export default App;
