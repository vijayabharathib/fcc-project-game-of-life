export const createBoard = (row,col) => {return ({type: 'CREATE_BOARD',col,row})};
export const clearBoard = () => {return ({type: 'CLEAR_BOARD'})};
export const randomizeBoard = () => {return ({type: 'RANDOMIZE_BOARD'})};
export const nextGeneration = () => {return ({type: 'NEXT_GENERATION'})};
