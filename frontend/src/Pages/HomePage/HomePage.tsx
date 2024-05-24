import React, { FC } from 'react';
import './HomePage.css';
import Hero from '../../components/Hero/Hero';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div data-testid="HomePage">
    <Hero />
  </div>
);

export default HomePage;
