import React, { FC } from "react";
import "./Table.css";
import { testIncomeStatementData } from "./testData";

const data = testIncomeStatementData;

type Company = (typeof data)[0];

const configs = [
  {
    label: "Year",
    render: (company: Company) => company.acceptedDate,
  },
  {
    label: "Cost of Revenue",
    render: (company: Company) => company.costOfRevenue,
  },
];

interface TableProps {}

const Table: FC<TableProps> = () => {
  const renderedRows = data.map((company: any) => (
    <tr key={company.cik}>
      {configs.map((configItem) => (
        <td
          key={configItem.label}
          className="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
        >
          {configItem.render(company)}
        </td>
      ))}
    </tr>
  ));

  const renderHeader = configs.map((configItem) => (
    <th
      key={configItem.label}
      className="p-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
    >
      {configItem.label}
    </th>
  ));

  return (
    <table className="Table">
      <thead>
        <tr>{renderHeader}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;

