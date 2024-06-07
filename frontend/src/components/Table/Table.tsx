import React, { FC } from "react";

interface TableProps {
  data: any;
  configs: any;
}

const Table: FC<TableProps> = ({data, configs} : TableProps) => {
  const renderedRows = data.map((company: any) => (
    <tr key={company.cik}>
      {configs.map((configItem:any) => (
        <td
          key={configItem.label}
          className="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
        >
          {configItem.render(company)}
        </td>
      ))}
    </tr>
  ));

  const renderHeader = configs.map((configItem:any) => (
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

