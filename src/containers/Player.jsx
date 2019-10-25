/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = () => (
  <div className="Player">
    <video controls autoPlay>
      <source src="" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <div className="Player-black">
      <button type="button">
                Regresar
      </button>
    </div>
  </div>
);

export default Player;
