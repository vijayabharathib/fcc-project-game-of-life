import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './scripts/reducers/Reducers';
import App from './scripts/components/App';
import './styles/css/index.css';
import {createBoard,randomizeBoard,nextGeneration, startGame} from './scripts/actions/ActionCreators';

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(createBoard(30,40));
store.dispatch(randomizeBoard());
let intervalID=setInterval( () =>{
  store.dispatch(nextGeneration());
}, 100);
store.dispatch(startGame(intervalID));
//setTimeout(()=>clearInterval(intervalID),30000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
