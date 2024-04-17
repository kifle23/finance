import React, { ChangeEvent, MouseEvent, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';

function App() {
  const [search, setSearch] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
    console.log('Search:', search);
  };

  return (
    <div className="App">
      <Search handleClick = { handleClick } handleChange = {handleChange} search= { search } />
      <CardList />
    </div>
  );
}

export default App;
