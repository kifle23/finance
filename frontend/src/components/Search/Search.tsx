import React, { FC, ChangeEvent, FormEvent } from 'react';
import './Search.css';

interface Props {
  onSearchSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string | undefined;
}

const Search: FC<Props> = ({onSearchSubmit,handleSearchChange,search}:Props) => {
  return (
  <div className="Search">
    <form onSubmit={onSearchSubmit} >
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e)=> handleSearchChange(e)}
    />
    </form>
    
  </div>
  );

  };

export default Search;
