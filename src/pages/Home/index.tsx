import React from 'react';
import SuperHeroList from '../../components/SuperHeroList';
import SuperHeroSearch from '../../components/SuperHeroSearch';

import {H1} from './styles';

const Home = () => {
  return(
    <>
      <H1>Super Hero Api Search</H1>
      <SuperHeroSearch/>
      <SuperHeroList/>
    </>
  );
}

export default Home;