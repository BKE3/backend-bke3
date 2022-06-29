import React from 'react';
//call the fetch utils function
import { useState, useEffect } from 'react';
import { getAllBirds } from './services/fetch-utils';
import { BirdCard } from ' BirdCard.js';

export default function Birds() {
  const [birds, setBirds] = useState([]);
  //use state that has all the birds
  //useEffect on load which will caall the fetch utils that will grab all the birds

  useEffect(() => {
    const birdData = getAllBirds();
    setBirds(birdData);
  }, []);

  return (
    <div>
      {' '}
      Birds
      {birds.map((bird, i) => (
        <BirdCard key={bird + i} {...bird} />
      ))}
    </div>
  );
}
