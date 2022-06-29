import React from 'react';
import { Link } from 'react-router-dom';

export default function BirdCard({ id, latin_name, image_url }) {
  return (<Link className="bird-card" to={`/birds/${id}`}>
    <h4>{latin_name}</h4>
    <img src={`${image_url}`} />
  </Link>);
}
