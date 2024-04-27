import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Context from './context';

function App() {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  return (
    <div className="wrapper">
      <Context.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
