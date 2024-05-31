import React, { FC } from "react";
import "./DesignPage.css";
import Table from "../../components/Table/Table";
import RatioList from "../../components/RatioList/RatioList";

interface DesignPageProps {}

const DesignPage: FC<DesignPageProps> = () => (
  <div className="DesignPage">
    <h1>Finshark Design Page</h1>
    <h2>
      This is Finshark's design page. This is where we will house various design
      aspects of the app.
    </h2>
    <RatioList />
    <Table />
  </div>
);

export default DesignPage;

