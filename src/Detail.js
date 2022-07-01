import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBirdById, deleteBird } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function Detail() {
  const [bird, setBird] = useState({});
  const { id } = useParams();
  const { push } = useHistory();

  async function fetch() {
    const birdData = await getBirdById(id);
    setBird(birdData);
  }

  useEffect(() => {
    fetch();
  }, []); //eslint-disable-line

  function handleUpdate() {
    push(`/birds/update/${id}`);
  }
  async function handleDelete() {
    await deleteBird(id);
    push('/birds');
  }

  return (
    <div>
      <h1>{bird.common_name}</h1>
      <img src={`${bird.image_url}`} />
      <p><em>{bird.latin_name}</em></p>
      <p>{bird.habitat}</p>
      <p>{bird.life_expectancy}</p>
      <p>
        {bird.flightless === true && <span>🐧</span>}
        {bird.flightless === false && <span>🦆</span>}    
      </p>
      <button onClick={handleUpdate}>Update this Bird!</button>
      <button onClick={handleDelete}>Delete this Bird!</button>
    </div>
  );
}
