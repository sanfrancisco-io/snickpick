import React from 'react';

import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import TabsPage from './pages/TabsPage';
import SellPage from './pages/SellPage';
import PricePage from './pages/PricePage';
import Slider from './pages/SwiperPage';

import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <>
        <Navbar />
      </>
      <div id='Product'>
        <MainPage />
      </div>
      <div id='Use Case'>
        <TabsPage />
      </div>
      <div id='Learn'>
        <SellPage />
      </div>
      <div id='Comparison'>
        <PricePage />
      </div>
      <div id='Pricing'>
        <Slider />
      </div>
    </div>
  );
}

export default App;
