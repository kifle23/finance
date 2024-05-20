import React, { ChangeEvent, FormEvent, useState, useEffect, SyntheticEvent } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState('');
  const [portfolio, setPortfolio] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Updated searchResults:', searchResults);
  }, [searchResults]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await searchCompanies(search);
      if (typeof result === 'string') {
        setError(result);
      } else if (result && Array.isArray(result.data)) {
        setSearchResults(result.data);
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
    }
  };

  const onPotfolioCreate=(e: any) =>{
    e.preventDefault();
    const updatedPortfolio = [...portfolio, e.target[0].value];
    setPortfolio(updatedPortfolio);
  }

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} handleSearchChange={handleSearchChange} search={search} />
      <CardList searchResults = {searchResults} onPotfolioCreate = {onPotfolioCreate} />
      {error && <div>{error}</div>}
    </div>
  );
}

export default App;
