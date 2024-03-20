import React, { FC } from 'react';
import './Card.css';

interface CardProps {}

const Card: FC<CardProps> = () => (
  <div className="Card">
    <img
      src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Card"
      />
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
        tincidunt nunc, a tincidunt nunc. Donec auctor tincidunt nunc, a tincidunt
        nunc.
      </p>
  </div>

);

export default Card;
