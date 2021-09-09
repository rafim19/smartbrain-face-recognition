import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
  return (
    <section className="center">
      <div className="absolute mt2">
        <img id="input-image" src={imageUrl} alt="" width="500px" height="auto" />
        <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </section>
  );
}

export default FaceRecognition;