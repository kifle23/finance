import React, { FC, useEffect, useState } from 'react';
import './CompanyPage.css';
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';

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
      {
        company? (
          <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
            <h1>{company.companyName}</h1>
            <p>{company.price.toString()}</p>
            <p>{company.dcf.toString()}</p>
            <p>{company.sector}</p>
            <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">{company.description}</p>
          </div>
        ): <p>Loading...</p>
      }
    </div>
  );
};

export default CompanyPage;
