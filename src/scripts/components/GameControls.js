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
    let toggleGame = () => {
      if(state.playing){
        dispatch(stopGame());
      }else{
        let intervalID=setInterval( () =>{
          dispatch(nextGeneration());
        }, 100);
        dispatch(startGame(intervalID));
      }
    }
    let randomCells = () => {
      dispatch(stopGame());
      dispatch(randomizeBoard());
    };
    let clear = ()=>{
      dispatch(stopGame());
      dispatch(clearBoard());
    }
    let gosper=()=>{
      clear();
      dispatch(gosperGlider());
    }
    return(
      <div className="game__control">
        <button className="game__toggle" onClick={toggleGame}>{status}</button>
        <button className="game__toggle" onClick={randomCells}>Randomize</button>
        <button className="game__toggle" onClick={clear}>Clear</button>
        <button className="game__toggle" onClick={gosper}>Gosper Glider</button>
        <h2 className="game__generation"> {`Generations: ${state.generation}`}</h2>
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
