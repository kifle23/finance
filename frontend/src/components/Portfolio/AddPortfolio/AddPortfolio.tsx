import React, { FC, SyntheticEvent } from 'react';
import './AddPortfolio.css';

interface AddPortfolioProps {
  onPotfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio: FC<AddPortfolioProps> = ({onPotfolioCreate, symbol}:AddPortfolioProps) => (
  <div className="AddPortfolio">
    <form onSubmit={(e) => onPotfolioCreate(e)} >
      <input type="text" value={symbol} readOnly />
      <button type='submit'>Add</button>
    </form>
  </div>
);

export default AddPortfolio;
