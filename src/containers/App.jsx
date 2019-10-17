import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouserItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/components/App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories>
      <Carousel>
        <CarouserItem />

        <CarouserItem />

        <CarouserItem />

        <CarouserItem />

      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
