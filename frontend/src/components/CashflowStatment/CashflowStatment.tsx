import React, { FC, useEffect, useState } from "react";
import "./CashflowStatment.css";
import { CompanyCashFlow } from "../../company";
import { useOutletContext } from "react-router";
import { getCashFlowStatement } from "../../api";
import Spinner from "../Spinner/Spinner";
import Table from "../Table/Table";
import { formatLargeMonetaryNumber } from "../../Helpers/NumberFormatting";

interface CashflowStatmentProps {}

interface OutletContext {
  ticker: string;
  description: string;
}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
];

const CashflowStatment: FC<CashflowStatmentProps> = () => {
  const { ticker } = useOutletContext<OutletContext>();
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

