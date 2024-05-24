import React, { FC } from 'react';
import styles from './CompanyPage.module.css';

interface CompanyPageProps {}

const CompanyPage: FC<CompanyPageProps> = () => (
  <div className={styles.CompanyPage} data-testid="CompanyPage">
    CompanyPage Component
  </div>
);

export default CompanyPage;
