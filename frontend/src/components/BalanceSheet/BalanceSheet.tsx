import React, { FC, useEffect, useState } from "react";
import "./BalanceSheet.css";
import { CompanyBalanceSheet } from "../../company";
import { useOutletContext } from "react-router-dom";
import { getBalanceSheet } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";

interface BalanceSheetProps {}

const config = [
  {
    label: <div className="font-bold">Total Assets</div>,
    render: (company: CompanyBalanceSheet) => company.totalAssets,
  },
  {
    label: "Current Assets",
    render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
  },
  {
    label: "Total Cash",
    render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
  },
  {
    label: "Property & Equipment",
    render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
  },
  {
    label: "Intangible Assets",
    render: (company: CompanyBalanceSheet) => company.intangibleAssets,
  },
  {
    label: "Long Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
  },
  {
    label: <div className="font-bold">Total Liabilities</div>,
    render: (company: CompanyBalanceSheet) => company.totalLiabilities,
  },
  {
    label: "Current Liabilities",
    render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
  },
  {
    label: "Long-Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Long-Term Income Taxes",
    render: (company: CompanyBalanceSheet) => company.otherLiabilities,
  },
  {
    label: "Stockholder's Equity",
    render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
  },
  {
    label: "Retained Earnings",
    render: (company: CompanyBalanceSheet) => company.retainedEarnings,
  },
];

const BalanceSheet: FC<BalanceSheetProps> = () => {
  const ticker = useOutletContext<string>();
  const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();
  useEffect(() => {
    const fetchBalanceSheet = async () => {
      const result = await getBalanceSheet(ticker!);
      setBalanceSheet(result?.data[0]);
    };
    fetchBalanceSheet();
  }, [ticker]);

  return (
    <>
      {balanceSheet ? (
        <RatioList data={balanceSheet} config={config} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default BalanceSheet;

