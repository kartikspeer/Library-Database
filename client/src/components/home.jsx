import React from 'react';
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from './search.jsx';
import Header from './header.jsx';
import MainBody from './main.jsx';


const searchValues={
  title:"",
  author:"",
}
function Home() {
  const [isSearched,setIsSearched] = useState(false);
  const [searchField,setSearchField] = useState(searchValues);
  const [authenticated, setauthenticated] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <SearchBar isSearched = {isSearched} setIsSearched={setIsSearched} searchField={searchField} setSearchField={setSearchField}/>
      <MainBody isSearched = {isSearched} setIsSearched={setIsSearched} searchField={searchField} setSearchField={setSearchField}/>
    </div>
  );
}

export default Home;
