import React from 'react';
import Cell from './Cell';
import {connect} from 'react-redux';
import '../../styles/css/GameBoard.css';
import {toggleCell} from '../actions/ActionCreators';

let GameBoard =({cells,dispatch})=> {
    let board=cells.map((rows,r)=>{
      let lineOfCells=rows.map((cell,c)=> {
        let activate=()=>{
          dispatch(toggleCell(r,c));
        };
        return (
          <Cell key={`${r}${c}`} onClick={activate} cellRow={r} cellCol={c} alive={(cell===0 ? false : true)} />
        );
      });

      return (<tr key={`${r}`}>
        {lineOfCells}
      </tr>);
    });

    return(
      <table className="c-game__board">
        <tbody>
          {board}
        </tbody>
      </table>
    )

}

const mapStateToProps= (state) => {
  return {
    cells: state.cells
  }
}

GameBoard=connect(mapStateToProps)(GameBoard);

export default GameBoard;
