import React, { FC } from 'react';
import './CardList.css';
import Card from '../Card/Card';

interface Props {}

const CardList: FC<Props> = () => (
  <div className="CardList">
    <Card companyName='Apple' ticker='AAPL' price={100} />
    <Card companyName='Microsoft' ticker='MSFT' price={200} />
    <Card companyName='Tesla' ticker='TSLA' price={300} />
  </div>
);

export default CardList;
