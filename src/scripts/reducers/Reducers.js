const _createNewBoard=(state,row,col)=>{
  const cells=[];
  for(let i=0;i<row;i++){
    let rows=[];
    for(let j=0;j<col;j++){
      rows.push(1); //1 means the cell is alive
    }
    cells.push(rows);
    rows=undefined;
  }
  return {
    row,
    col,
    cells
  };
}

const _randomizeBoard=(state)=>{
  state.cells= state.cells.map((rows)=>{rows.map(()=>{
    return Math.floor(Math.random()*10)%2;
  })});

  return state;
}

const _clearBoard=(state)=>{
  state.cells= state.cells.map((rows)=>{rows.map(v=>0)});
  return state;
}
const _findLiveNeighbours=(state,r,c)=>{
  let liveNeibours=0;
  for(let i=r-1;i<r+1;i++){
    for(let j=c-1;j<r+1;j++){
      if(i>=0 && j>=0 && i<state.row && j<state.col && i!=j){
        liveNeibours+=state.cells[i][j];
      }
    }
  }
  return liveNeibours;
}
const _nextGeneration=(state)=>{
  let newCells=[];
  let cells=state.cells;
  let dead=0;
  for(let i=0;i<state.row;i++){
    let row=[];
    for(let j=0;i<state.col;i++){
      row.push(cells[i][j]);
      let eco=_findLiveNeighbours(state,i,j);
      if(cells[i][j]===dead && eco===3){
        row[j]=!dead;
      }
    }
    newCells.push(row);
    row=[];
  }
  state.cells=newCells;
  return state;
}

const reducer=(state={},action)=>{
  let newState=Object.assign({},{cells: state.cells, row: state.row, col: state.col});
  switch (action.type) {
    case 'CREATE_BOARD':
      return _createNewBoard(newState,action.row,action.col);
      break;
    case 'CLEAR_BOARD':
      return _clearBoard(newState);
      break;
    case 'RANDOMIZE_BOARD':
      return _randomizeBoard(newState);
      break;
    case 'NEXT_GENERATION':
      return _nextGeneration(newState);
      break;
    default:
      return newState;
  }
}

export default reducer;
