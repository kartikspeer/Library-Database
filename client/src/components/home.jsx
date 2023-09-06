import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from './search.jsx';
import Addbtn from './addbookbtn.jsx';
import Header from './header.jsx';
import MainBody from './main.jsx';

const searchValues={
  title:"",
  author:"",
}
function Home() {
  const [isSearched,setIsSearched] = useState(false);
  const [searchField,setSearchField] = useState(searchValues);

  return (
    <div className="App">
      <Header />
      <SearchBar isSearched = {isSearched} setIsSearched={setIsSearched} searchField={searchField} setSearchField={setSearchField}/>
      <Addbtn />
      <MainBody isSearched = {isSearched} setIsSearched={setIsSearched} searchField={searchField} setSearchField={setSearchField}/>
    </div>
  );
}

export default Home;
