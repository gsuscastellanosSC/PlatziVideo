/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setFavorite from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const {
    id, cover, title, year, contenRating, duration,
  } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contenRating, duration,
    });
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={handleSetFavorite}
          />
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">

            {`${year} ${contenRating} ${duration}`}

          </p>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contenRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
