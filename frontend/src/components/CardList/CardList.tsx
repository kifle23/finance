import React, { FC, SyntheticEvent } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResults: CompanySearch[];
  onPotfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: FC<Props> = ({searchResults, onPotfolioCreate}:Props) => (
  <div className="CardList">
    {
      searchResults.length > 0 ? searchResults.map((company) => (
        <Card
          id={company.symbol}
          key={uuidv4()}
          searchResults={company}
          onPotfolioCreate={onPotfolioCreate}
        />
      )) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )
      
    }
  </div>
);

export default CardList;
