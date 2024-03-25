import React, { FC, useState } from 'react';
import './Search.css';

interface Props {}

const Search: FC<Props> = (props:Props) => {
  const [search, setSearch] = useState('');
  
  const onclick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };
  return (
  <div className="Search">
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e)=> onclick(e)}
    />
  </div>
  );

  };

export default Search;
