import React from 'react';
import { render } from 'react-dom';
import MainContainer from './containers/MainContainer.jsx';



const App = () => {
  return (
    <MainContainer />
  );
};



render(<App />, document.getElementById('root'));















// import background from "../public/bg_grain+grad+overlay_1920x1080.png";

// const root = document.getElementById('root');
// const mainImage = document.createElement('img');

// mainImage.src = background;
// console.log('wingus');
// root.appendChild(mainImage);
