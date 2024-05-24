import React, { FC } from 'react';
import styles from './HomePage.module.css';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className={styles.HomePage} data-testid="HomePage">
    HomePage Component
  </div>
);

export default HomePage;
