import React from 'react';

const Loader = ({ spaceTop = '' }) => (
  <div className={`loader is-flex is-justify-content-center ${spaceTop}`}>
    <div className='spinner-container'>
      <div className='spinner'></div>
    </div>
  </div>
);

export default Loader;
