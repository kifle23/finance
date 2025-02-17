import React, { FC, SyntheticEvent } from 'react';
import './Card.css';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

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
  <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link to={`/company/${searchResults.symbol}/company-profile`} className="font-bold text-center text-veryDarkViolet md:text-left">
        {searchResults.name} ({searchResults.symbol})
      </Link>
      <p className="text-veryDarkBlue">{searchResults.currency}</p>
      <p className="font-bold text-veryDarkBlue">
        {searchResults.exchangeShortName} - {searchResults.stockExchange}
      </p>
      <AddPortfolio
        onPotfolioCreate={onPotfolioCreate}
        symbol={searchResults.symbol}
      />
    </div>

);

export default Card;
