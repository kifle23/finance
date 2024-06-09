import React, { FC, useEffect, useState } from "react";
import "./IncomeStatement.css";
import { CompanyIncomeStatement } from "../../company";
import { useOutletContext } from "react-router-dom";
import { getIncomeStatement } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

interface IncomeStatementProps {}

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) => company.revenue,
  },
  {
    label: "Cost Of Revenue",
    render: (company: CompanyIncomeStatement) => company.costOfRevenue,
  },
  {
    label: "Depreciation",
    render: (company: CompanyIncomeStatement) =>
      company.depreciationAndAmortization,
  },
  {
    label: "Operating Income",
    render: (company: CompanyIncomeStatement) => company.operatingIncome,
  },
  {
    label: "Income Before Taxes",
    render: (company: CompanyIncomeStatement) => company.incomeBeforeTax,
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) => company.netIncome,
  },
  {
    label: "Net Income Ratio",
    render: (company: CompanyIncomeStatement) => company.netIncomeRatio,
  },
  {
    label: "Earnings Per Share",
    render: (company: CompanyIncomeStatement) => company.eps,
  },
  {
    label: "Earnings Per Diluted",
    render: (company: CompanyIncomeStatement) => company.epsdiluted,
  },
  {
    label: "Gross Profit Ratio",
    render: (company: CompanyIncomeStatement) => company.grossProfitRatio,
  },
  {
    label: "Opearting Income Ratio",
    render: (company: CompanyIncomeStatement) => company.operatingIncomeRatio,
  },
  {
    label: "Income Before Taxes Ratio",
    render: (company: CompanyIncomeStatement) => company.incomeBeforeTaxRatio,
  },
];

const IncomeStatement: FC<IncomeStatementProps> = () => {
  const ticker = useOutletContext<string>();
  const [incomeStatment, setIncomeSatatment] =
    useState<CompanyIncomeStatement[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchIncomeStatement = async () => {
      const result = await getIncomeStatement(ticker);
      if (typeof result === "string") {
        setError(result);
      } else if (result && Array.isArray(result.data)) {
        setIncomeSatatment(result?.data);
      }
    };
    fetchIncomeStatement();
  }, [ticker]);

  return (
    <>
      {error && <div>{error}</div>}
      {incomeStatment ? (
        <Table data={incomeStatment} configs={configs} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default IncomeStatement;

