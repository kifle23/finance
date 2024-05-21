import React, { FC, SyntheticEvent } from 'react';
import './CardPortfolio.css';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface CardPortfolioProps {
  portfolio: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio: FC<CardPortfolioProps> = ({portfolio, onPortfolioDelete}:CardPortfolioProps) => (
  <div className="CardPortfolio">
    <h4>{portfolio}</h4>
    <DeletePortfolio portfolio={portfolio} onPortfolioDelete={onPortfolioDelete} />
  </div>
);

export default CardPortfolio;
