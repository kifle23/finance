import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
import './Search.css';

interface Props {}

const Search: FC<Props> = (props:Props) => {
  const [search, setSearch] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
    console.log('Search:', search);
  };

  return (
  <div className="Search">
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e)=> handleChange(e)}
    />
    <button onClick={(e) => handleClick(e)}>Search</button>
  </div>
  );

  };

export default Search;
