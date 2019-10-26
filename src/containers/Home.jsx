/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouserItem from '../components/CarouselItem';
import ButtonCategories from '../components/ButtonCategories';
import '../assets/styles/Media.scss';
import '../assets/styles/App.scss';

const Home = ({ MySites, trends, originals }) => {
  return (
    <>
      <Search isHome />
      <ButtonCategories title="Comida" />
      <ButtonCategories title="Café" />
      <ButtonCategories title="Nocturna" />
      <ButtonCategories title="Diversión" />
      <ButtonCategories title="Compras" />
      <ButtonCategories title="Salud" />
      <ButtonCategories title="Mascotas" />
      <ButtonCategories title="Cine" />

      {MySites.length > 0
      && (
      <Categories title="Sitios Favoritos">
        <Carousel>
          {MySites.map((item) => (
            <CarouserItem
              key={item.id}
              {...item}
              isList
            />
          ))}
        </Carousel>
      </Categories>
      )}


      <Categories title="Lugares Recomensados">
        <Carousel>
          {trends.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Lo mejor de Colombia">
        <Carousel>
          {originals.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => ({
  MySites: state.MySites,
  trends: state.trends,
  originals: state.originals,
});

export default connect(mapStateToProps, null)(Home);
