import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './scripts/reducers/Reducers';
import App from './scripts/components/App';
import './styles/css/index.css';
import {createBoard,randomizeBoard,nextGeneration, startGame} from './scripts/actions/ActionCreators';

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const calcRow=()=>{
  let row=20;
  if(window.innerWidth<window.innerHeight){
    row=Math.floor((window.innerHeight-250)/12);
  }else{
    row=Math.floor((window.innerHeight-300)/12);
  }
  return row;
}

const calcCol=()=>{
  let col=20;
  col=Math.floor((window.innerWidth-40)/12);
  col=col > 70 ? 64 : col;
  return col;
}
store.dispatch(createBoard(calcRow(),calcCol()));
store.dispatch(randomizeBoard());
let intervalID=setInterval( () =>{
  store.dispatch(nextGeneration());
}, 200);
store.dispatch(startGame(intervalID));
//setTimeout(()=>clearInterval(intervalID),30000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
