import React, { FC } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResults: CompanySearch[];
}

const CardList: FC<Props> = ({searchResults}:Props) => (
  <div className="CardList">
    {
      searchResults.length > 0 ? searchResults.map((company) => (
        <Card
          id={company.symbol}
          key={uuidv4()}
          searchResults={company}
        />
      )) : <div>No results found</div>
    }
  </div>
);

export default CardList;
