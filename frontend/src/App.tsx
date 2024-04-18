import React, { ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Updated searchResults:', searchResults);
  }, [searchResults]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
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

  return (
    <div className="App">
      <Search handleClick={handleClick} handleChange={handleChange} search={search} />
      {error && <div>{error}</div>}
      <CardList />
    </div>
  );
}

export default App;
