import React, { FC } from "react";
import "./CompanyDashboard.css";
import { Outlet } from "react-router";

interface CompanyDashboardProps {
  children: React.ReactNode;
  ticker: string;
  description: string;
}

const CompanyDashboard: FC<CompanyDashboardProps> = ({
  children,
  ticker,
  description,
}: CompanyDashboardProps) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-full">
      <div className="relative pt-20 pb-32 bg-lightBlue-500">
        <div className="px-4 md:px-6 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">{children}</div>
            <div className="flex flex-wrap">
              <Outlet context={{ ticker, description }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;

