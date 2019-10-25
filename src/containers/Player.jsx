/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  return (
    <div className="Player">
      <video controls autoPlay>
        <source src="" type="video/mp4" />
      Your browser does not support HTML5 video.
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
                Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;
