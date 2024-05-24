import React, { FC, SyntheticEvent } from 'react';
import './CardPortfolio.css';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';

interface CardPortfolioProps {
  portfolio: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio: FC<CardPortfolioProps> = ({portfolio, onPortfolioDelete}:CardPortfolioProps) => (
  <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
    <Link to={`/company/${portfolio}`} className="pt-6 text-xl font-bold">{portfolio}</Link>
    <DeletePortfolio portfolio={portfolio} onPortfolioDelete={onPortfolioDelete} />
  </div>
);

export default CardPortfolio;
