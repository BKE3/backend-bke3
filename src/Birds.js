import React from 'react';
//call the fetch utils function
import { useState, useEffect } from 'react';
import { getAllBirds } from './services/fetch-utils';
import BirdCard from './BirdCard';

export default function Birds() {
  const [birds, setBirds] = useState([]);
  //use state that has all the birds
  //useEffect on load which will call the fetch utils that will grab all the birds
  async function fetch(){
    const birdData = await getAllBirds();
    setBirds(birdData);
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      Birds
      {birds.map((bird, i) => (
        <BirdCard className='bird' key={bird.common_name + i} {...bird} />
      ))}
    </div>
  );
}
