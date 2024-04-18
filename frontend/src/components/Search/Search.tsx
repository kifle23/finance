import React, { FC, ChangeEvent, MouseEvent } from 'react';
import './Search.css';

interface Props {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string | undefined;
}

const Search: FC<Props> = ({handleClick,handleChange,search}:Props) => {
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
