import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Header} from "../src/components/header/Header";
import { Home } from './components/home/Home';
import { Footer } from './components/footer/FooterData';
import { RestaurantDetails } from './components/restaurantData/RestaurantDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurant/:id' element={<RestaurantDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
