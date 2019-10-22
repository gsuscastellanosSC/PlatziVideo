/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouserItem from '../components/CarouselItem';
import '../assets/styles/Media.scss';
import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Search />
      {mylist.length > 0
      && (
      <Categories title="Mi lista">
        <Carousel>
          {trends.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      )}


      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {originals.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => ({
  mylist: state.mylist,
  trends: state.trends,
  originals: state.originals,
});

export default connect(mapStateToProps, null)(Home);
