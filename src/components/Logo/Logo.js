import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <section className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }}>
        <section className="Tilt-inner pa3">
          <img src={brain} alt="logo" style={{ paddingTop: '5px' }} />
        </section>
      </Tilt>
    </section>
  );
}

export default Logo;