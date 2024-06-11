import React, { FC, useEffect, useState } from "react";
import "./CashflowStatment.css";
import { CompanyCashFlow } from "../../company";
import { useOutletContext } from "react-router";
import { getCashFlowStatement } from "../../api";
import Spinner from "../Spinner/Spinner";
import Table from "../Table/Table";

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
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchCashflow = async () => {
      const result = await getCashFlowStatement(ticker);
      if (typeof result === "string") {
        setError(result);
      } else if (result && Array.isArray(result.data)) {
        setCashflow(result!.data);
      }
    };
    fetchCashflow();
  }, [ticker, error]);

  const props = { data: cashflow, configs: config };

  return (
    <>
      {error && <div>{error}</div>}
      {cashflow ? <Table {...props} /> : <Spinner />}
    </>
  );
};

export default CashflowStatment;

