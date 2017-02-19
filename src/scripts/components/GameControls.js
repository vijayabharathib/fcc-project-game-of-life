import React from 'react';
import {connect} from 'react-redux';
import '../../styles/css/GameControl.css';
import {startGame,
  stopGame,
  nextGeneration,
  randomizeBoard,
  clearBoard,
  gosperGlider} from '../actions/ActionCreators';

let GameControl =({state,dispatch})=> {
    let status=(state.playing ? "Stop":"Play");
    let start=()=>{
      let intervalID=setInterval( () =>{
        dispatch(nextGeneration());
      }, 100);
      dispatch(startGame(intervalID));
    }
    let toggleGame = () => {
      if(state.playing){
        dispatch(stopGame());
      }else{
        start();
      }
    }
    let randomCells = () => {
      dispatch(stopGame());
      dispatch(randomizeBoard());
      start();
    };
    let clear = ()=>{
      dispatch(stopGame());
      dispatch(clearBoard());
    }
    let gosper=()=>{
      clear();
      dispatch(gosperGlider());
      start();
    }
    return(
      <div className="game__control">
        <ul className="control__list">
          <li><button className="game__toggle" onClick={toggleGame}>{status}</button></li>
          <li><button className="game__toggle" onClick={randomCells}>Random</button></li>
          <li><button className="game__toggle" onClick={clear}>Clear</button></li>
          <li><button className="game__toggle" onClick={gosper}>Gosper Glider</button></li>
        </ul>
        <ul className="control__list">
          <li><h2 className="game__generation"> {`Generations: ${state.generation}`}</h2></li>
        </ul>
      </div>
    )

}

const mapStateToProps= (state) => {
  return {
    state
  }
}

GameControl=connect(mapStateToProps)(GameControl);

export default GameControl;
