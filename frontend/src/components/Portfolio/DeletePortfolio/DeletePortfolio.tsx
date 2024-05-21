import React, { FC, SyntheticEvent } from 'react';
import './DeletePortfolio.css';

interface DeletePortfolioProps {
  portfolio: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const DeletePortfolio: FC<DeletePortfolioProps> = ({portfolio,onPortfolioDelete}: DeletePortfolioProps) => (
  <div className="DeletePortfolio">
    <form onSubmit={onPortfolioDelete}>
      <input hidden={true} value={portfolio} />
      <button>X</button>
    </form>
  </div>
);

export default DeletePortfolio;
