import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './scripts/reducers/Reducers';
import App from './scripts/components/App';
import './styles/css/index.css';
import {createBoard,randomizeBoard,nextGeneration} from './scripts/actions/ActionCreators';

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(createBoard(31,110));
store.dispatch(randomizeBoard());
let intervalID=setInterval( () =>{
  store.dispatch(nextGeneration());
}, 300);

setTimeout(()=>clearInterval(intervalID),150000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
