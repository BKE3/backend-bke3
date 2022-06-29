import React from 'react';
import { Link } from 'react-router-dom';

export default function BirdCard({ id, latinName, pictureURL }) {
  return (<Link className="bird-card" to={`/birds/${id}`}>
    <h4>{latinName}</h4>
    <img src={`${pictureURL}`} />
  </Link>);
}
