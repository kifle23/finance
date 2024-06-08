import React, { FC, useEffect, useState } from 'react';
import './CashflowStatment.css';
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router';
import { getCashFlowStatement } from '../../api';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';

interface CashflowStatmentProps {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashflowStatment: FC<CashflowStatmentProps> = () => {
  const ticker = useOutletContext<string>();
  const [cashflow, setCashflow] = useState<CompanyCashFlow[]>();
  useEffect(() => {
    const fetchCashflow = async () => {
      const result = await getCashFlowStatement(ticker);
      setCashflow(result!.data);
    };
    fetchCashflow();
  }
  , [ticker]);
  
  return (
  <>
    {cashflow ? (
      <RatioList data={cashflow} config={config} />
    ) : (
      <Spinner />
    )}
  </>
)};

export default CashflowStatment;
