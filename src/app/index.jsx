// console.log("Hello World");

import {store} from './store'

// console.log(store.getState());

import React from 'react';
import ReactDom from 'react-dom';
import { Main } from './components/main';

ReactDom.render(
  <Main/>,
  document.getElementById("app")
);
