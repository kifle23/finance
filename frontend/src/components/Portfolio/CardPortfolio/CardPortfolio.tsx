import React, { FC } from 'react';
import './CardPortfolio.css';

interface CardPortfolioProps {
  portfolio: string[];
}

const CardPortfolio: FC<CardPortfolioProps> = ({portfolio}:CardPortfolioProps) => (
  <div className="CardPortfolio">
    <h4>{portfolio}</h4>
    <button>X</button>
  </div>
);

export default CardPortfolio;
