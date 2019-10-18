/* eslint-disable react/prop-types */
import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({
  cover, title, year, contenRating, duration,
}) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">

          {`${year} ${contenRating} ${duration}`}

        </p>
      </div>
    </div>
  </div>
);
export default CarouselItem;
