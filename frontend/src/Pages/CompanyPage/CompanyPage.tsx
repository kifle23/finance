import React, { FC, useEffect, useState } from "react";
import "./CompanyPage.css";
import { useParams } from "react-router-dom";
import { CompanyProfile as CompanyProfileType } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../components/Sidebar/Sidebar";
import CompanyDashboard from "../../components/CompanyDashboard/CompanyDashboard";
import Tile from "../../components/Tile/Tile";
import Spinner from "../../components/Spinner/Spinner";

interface CompanyPageProps {}

const CompanyPage: FC<CompanyPageProps> = () => {
  let { ticker } = useParams<{ ticker: string }>();
  const [company, setCompany] = useState<CompanyProfileType>();
  const [error, setError] = useState<string>();
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const fetchCompany = async () => {
      const result = await getCompanyProfile(ticker!);
      if (typeof result === "string") {
        setError(result);
      } else if (result && Array.isArray(result.data)) {
        setCompany(result?.data[0]);
        setDescription(result?.data[0].description);
      }
    };
    fetchCompany();
  }, [ticker]);

  return (
    <>
      {error && <div>{error}</div>}
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!} description={description}>
            <Tile title="Company Name" subtitle={company.companyName} />
            <Tile title="Price" subtitle={"$" + company.price.toString()} />
            <Tile title="DCF" subtitle={"$" + company.dcf.toString()} />
            <Tile title="Sector" subtitle={company.sector} />
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;

