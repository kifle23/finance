import React, { FC } from 'react';
import './ListPortfolio.css';
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface ListPortfolioProps {
  portfolio: string[];
}

const ListPortfolio: FC<ListPortfolioProps> = ({portfolio}:ListPortfolioProps) => (
  <div>
    <h3>My Portfolio</h3>
    <ul>
      {portfolio && portfolio.map((symbol, index) => (
        <CardPortfolio portfolio={portfolio}/>
      ))}
    </ul>
  </div>
);

export default ListPortfolio;
