import React, { FC } from 'react';
import './Card.css';
import { CompanySearch } from '../../company';

interface Props {
  id: string;
  searchResults: CompanySearch;
}

const Card: FC<Props> = ({
  id,
  searchResults
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
  </div>

);

export default Card;
