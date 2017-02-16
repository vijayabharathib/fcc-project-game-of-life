import React from 'react';
import Cell from './Cell';
import {connect} from 'react-redux';
import '../../styles/css/GameControl.css';
import {startGame,stopGame,nextGeneration} from '../actions/ActionCreators';

let GameControl =({state,dispatch})=> {
    let status=(state.playing ? "Stop":"Play");
    let toggleGame = () => {
      if(state.playing){
        dispatch(stopGame());
      }else{
        let intervalID=setInterval( () =>{
          dispatch(nextGeneration());
        }, 300);
        dispatch(startGame(intervalID));
      }
    }
    return(
      <div className="game__control">
        <button className="game__toggle" onClick={toggleGame}>{status}</button>
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
