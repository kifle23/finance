import React, { FC, SyntheticEvent } from 'react';
import './ListPortfolio.css';
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface ListPortfolioProps {
  portfolio: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio: FC<ListPortfolioProps> = ({portfolio,onPortfolioDelete}:ListPortfolioProps) => (
  <div>
    <h3>My Portfolio</h3>
    <ul>
      {portfolio && portfolio.map((symbol, index) => (
        <CardPortfolio portfolio={portfolio} onPortfolioDelete={onPortfolioDelete} />
      ))}
    </ul>
  </div>
);

export default ListPortfolio;
