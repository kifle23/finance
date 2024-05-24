import React, { FC } from 'react';
import styles from './SearchPage.module.css';

interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = () => (
  <div className={styles.SearchPage} data-testid="SearchPage">
    SearchPage Component
  </div>
);

export default SearchPage;
