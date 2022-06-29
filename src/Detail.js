import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBirdById } from './services/fetch-utils';

export default function Detail() {
  const [bird, setBird] = useState({});
  const { id } = useParams();
  
  async function fetch() {
    const birdData = await getBirdById(id);
    setBird(birdData);
  }

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <h1>{bird.common_name}</h1>
      <img src={`${bird.image_url}`} />
      <p><em>{bird.latin_name}</em></p>
      <p>{bird.habitat}</p>
      <p>{bird.life_expectancy}</p>
      <p>
        {bird.flightless === true && <p>🐧</p>}
        {bird.flightless === false && <p>🦆</p>}    
      </p>
    </div>
  );
}
