import React from 'react';
import SuperHeroList from '../../components/SuperHeroList';
import SuperHeroSearch from '../../components/SuperHeroSearch';

const Home = () => {
  return(
    <>
      <h1>Hello World</h1>
      <SuperHeroSearch/>
      <SuperHeroList/>
    </>
  );
}

export default Home;