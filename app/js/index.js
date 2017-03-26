import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import TreeSlider from './components/TreeSlider';


const store = configureStore();
ReactDOM.render(
  //<Menu />
  <div> hello world
  <TreeSlider/>
  </div>,
  
  document.getElementById('app')
);