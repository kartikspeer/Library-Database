import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Addbook from './components/addBook.jsx';
import PrivateRoute from './utils/privateRoute.jsx';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/addbook" element={<Addbook/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;