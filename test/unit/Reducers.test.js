import test from 'tape';
import {
  createBoard,
  clearBoard,
  randomizeBoard,
  nextGeneration
  } from '../../src/scripts/actions/ActionCreators';
import reducer from '../../src/scripts/reducers/Reducers';
test("UT - reducers - createBoard",(t)=>{
  t.plan(1);
  const board=reducer({},createBoard(3,3));
  const actual=board.cells.length;
  const expected=3;
  const message="Reducer should return a new board with cells on createBoard ";
  t.equal(actual,expected,message);
});

test("UT - reducers - randomizeBoard",(t)=>{
  t.plan(1);
  const board=reducer({},createBoard(3,3));
  const actual=reducer(board,randomizeBoard());
  const message="Reducer should randomize cells";
  t.deepEqual(1,actual,message);
});
