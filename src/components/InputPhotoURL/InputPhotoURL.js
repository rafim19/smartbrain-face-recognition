import React from 'react';
import './InputPhotoURL.css'

const InputPhotoURL = ({ onInputChange, onButtonSubmit }) => {
  return (
    <section>
      <p className= 'f3'>
        {'This Magic Brain will detect faces in you rpictures. Give it a try'}
      </p>
      <section className='center'>
        <section className='form center pa4 br3 shadow-5'>
          <input className='f4 br3 pa2 w-70 center' type="text" onChange={onInputChange}/>
          <button className='w-30 br3 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
        </section>
      </section>
    </section>
  );
}

export default InputPhotoURL;