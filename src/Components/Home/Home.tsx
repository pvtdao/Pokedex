import React from 'react';
import Card from '../Pokemon/Card';
import Introduce from './Introduce';
import Pokemon from './Pokemon';

function Home() {
  return (
    <section>
      <Introduce />
      <Pokemon />
    </section>
  );
}

export default Home;
