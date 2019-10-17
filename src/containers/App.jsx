import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouserItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/Media.scss';

import '../assets/styles/App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories title="Mi lista">
      <Carousel>
        <CarouserItem />

        <CarouserItem />

        <CarouserItem />

        <CarouserItem />

      </Carousel>
    </Categories>

    <Categories title="Tendencias">
      <Carousel>
        <CarouserItem />

        <CarouserItem />

        <CarouserItem />

      </Carousel>
    </Categories>

    <Categories title="Originales de PlatziVideo">
      <Carousel>
        <CarouserItem />

        <CarouserItem />

      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
