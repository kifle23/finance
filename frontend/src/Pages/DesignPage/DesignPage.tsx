import React, { FC } from "react";
import "./DesignPage.css";
import Table from "../../components/Table/Table";
import RatioList from "../../components/RatioList/RatioList";
import { testIncomeStatementData } from "../../components/Table/testData";

interface DesignPageProps {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignPage: FC<DesignPageProps> = () => (
  <div className="DesignPage">
    <h1>Finshark Design Page</h1>
    <RatioList data={testIncomeStatementData} config={tableConfig} />
    <Table configs={tableConfig} data={testIncomeStatementData} />
  </div>
);

export default DesignPage;

