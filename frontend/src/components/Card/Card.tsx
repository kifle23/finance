import React, { FC, SyntheticEvent } from 'react';
import './Card.css';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
  id: string;
  searchResults: CompanySearch;
  onPotfolioCreate: (e: SyntheticEvent) => void;
}

const Card: FC<Props> = ({
  id,
  searchResults,
  onPotfolioCreate
}: Props):JSX.Element => (
  <div className="Card">
    <img
      alt="company logo"
      />
      <div className="details">
        <h2>{searchResults.name} ({searchResults.symbol})</h2>
        <p>${searchResults.currency}</p>
      </div>
      <p className="info">
        {searchResults.exchangeShortName} - {searchResults.stockExchange}
      </p>
      <AddPortfolio onPotfolioCreate={onPotfolioCreate} symbol={searchResults.symbol} />
  </div>

);

export default Card;
