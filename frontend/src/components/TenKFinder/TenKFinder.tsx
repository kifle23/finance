import React, { FC, useEffect, useState } from "react";
import "./TenKFinder.css";
import { CompanyTenK } from "../../company";
import { getTenK } from "../../api";
import Spinner from "../Spinner/Spinner";
import TenKFinderItem from "../TenKFinderItem/TenKFinderItem";

interface TenKFinderProps {
  ticker: string;
}

const TenKFinder: FC<TenKFinderProps> = ({ ticker }: TenKFinderProps) => {
  const [company, setCompany] = useState<CompanyTenK[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getCompanyTenK = async () => {
      const result = await getTenK(ticker);
      if (typeof result === "string") {
        setError(result);
      } else if (result && Array.isArray(result.data)) {
        setCompany(result?.data);
      }
    };
    getCompanyTenK();
  }, [ticker, error]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {company ? (
        company?.slice(0, 5).map((tenK) => {
          return <TenKFinderItem tenK={tenK} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;

