import React, { FC, useEffect, useState } from "react";
import "./BalanceSheet.css";
import { CompanyBalanceSheet } from "../../company";
import { useOutletContext } from "react-router-dom";
import { getBalanceSheet } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";
import { formatLargeMonetaryNumber } from "../../Helpers/NumberFormatting";

interface BalanceSheetProps {}

interface OutletContext {
  ticker: string;
  description: string;
}

const config = [
  {
    label: <div className="font-bold">Total Assets</div>,
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalAssets),
  },
  {
    label: "Current Assets",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalCurrentAssets),
  },
  {
    label: "Total Cash",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.cashAndCashEquivalents),
  },
  {
    label: "Property & equipment",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.propertyPlantEquipmentNet),
  },
  {
    label: "Intangible Assets",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.intangibleAssets),
  },
  {
    label: "Long Term Debt",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.longTermDebt),
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.otherCurrentLiabilities),
  },
  {
    label: <div className="font-bold">Total Liabilites</div>,
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalLiabilities),
  },
  {
    label: "Current Liabilities",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalCurrentLiabilities),
  },
  {
    label: "Long-Term Debt",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.longTermDebt),
  },
  {
    label: "Long-Term Income Taxes",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.otherLiabilities),
  },
  {
    label: "Stakeholder's Equity",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.totalStockholdersEquity),
  },
  {
    label: "Retained Earnings",
    render: (company: CompanyBalanceSheet) =>
      formatLargeMonetaryNumber(company.retainedEarnings),
  },
];

const BalanceSheet: FC<BalanceSheetProps> = () => {
  const { ticker } = useOutletContext<OutletContext>();
  const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchBalanceSheet = async () => {
      const result = await getBalanceSheet(ticker!);
      if (typeof result === "string") {
        setError(result);
      } else if (result && Array.isArray(result.data)) {
        setBalanceSheet(result?.data[0]);
      }
    };
    fetchBalanceSheet();
  }, [ticker]);

  const props = { data: balanceSheet, config };

  return (
    <>
      {error && <div>{error}</div>}
      {balanceSheet ? <RatioList {...props} /> : <Spinner />}
    </>
  );
};

export default BalanceSheet;

