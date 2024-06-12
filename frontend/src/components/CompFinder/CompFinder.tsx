import React, { FC, useEffect, useState } from "react";
import "./CompFinder.css";
import { CompanyCompData } from "../../company";
import { getCompData } from "../../api";
import Spinner from "../Spinner/Spinner";
import CompFinderItem from "../CompFinderItem/CompFinderItem";

interface CompFinderProps {
  ticker: string;
}

const CompFinder: FC<CompFinderProps> = ({ ticker }: CompFinderProps) => {
  const [company, setCompany] = useState<CompanyCompData>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchCompData = async () => {
      const result = await getCompData(ticker);
      if (typeof result === "string") {
        setError(result);
      } else if (result && Array.isArray(result.data)) {
        setCompany(result?.data[0]);
      }
    };
    fetchCompData();
  }, [ticker, error]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {error && <div>{error}</div>}
      {company ? (
        company?.peersList.map((ticker) => {
          return <CompFinderItem ticker={ticker} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CompFinder;

