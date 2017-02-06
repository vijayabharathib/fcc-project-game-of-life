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
  for(let i=0;i<state.row;i++){
    for(let j=0;j<state.col;j++){
      state[i][j]= (Math.floor(Math.random()*10)%2)
    }
  }
  return state;
}

const reducer=(state={},action)=>{
  switch (action.type) {
    case 'CREATE_BOARD':
      return _createNewBoard(state,action.row,action.col);
      break;
    case 'CLEAR_BOARD':
      break;
    case 'RANDOMIZE_BOARD':
      return _randomizeBoard(state);
      break;
    case 'NEXT_GENERATION':
      break;
    default:
      return state;

  }
}

export default reducer;
