import React, { FC, useEffect, useState } from "react";
import "./CompanyPage.css";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../components/Sidebar/Sidebar";
import CompanyDashboard from "../../components/CompanyDashboard/CompanyDashboard";
import Tile from "../../components/Tile/Tile";
import Spinner from "../../components/Spinner/Spinner";

interface CompanyPageProps {}

const CompanyPage: FC<CompanyPageProps> = () => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const fetchCompany = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    fetchCompany();
  }, [ticker]);

  return (
    <div data-testid="CompanyPage">
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subtitle={company.companyName} />
            <Tile title="Price" subtitle={company.price.toString()} />
            <Tile title="Sector" subtitle={company.sector} />
            <Tile title="DCF" subtitle={company.dcf.toString()} />
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CompanyPage;

