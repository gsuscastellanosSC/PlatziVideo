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

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search isHome />
      {myList.length > 0
      && (
      <Categories title="Sitios Favoritos">
        <Carousel>
          {myList.map((item) => (
            <CarouserItem
              key={item.id}
              {...item}
              isList
            />
          ))}
        </Carousel>
      </Categories>
      )}


      <Categories title="Recomendados">
        <Carousel>
          {trends.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Colombia">
        <Carousel>
          {originals.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => ({
  myList: state.myList,
  trends: state.trends,
  originals: state.originals,
});

export default connect(mapStateToProps, null)(Home);
