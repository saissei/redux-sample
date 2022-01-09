import './App.css';
import { FC, useState } from 'react';
import { useSelector } from './repository/store';
import { useDispatch } from 'react-redux';
import { additional, subtraction } from './repository/counterSlice';

const App: FC = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  // const [count, setCount] = useState<number>(0);
  // const addition = (num: number) => {
  //   if (Number.isNaN(num)) return;
  //   setCount(count + num);
  // };
  // const subtraction = (num: number) => {
  //   if (Number.isNaN(num)) return;
  //   setCount(count - num);
  // };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      {/* <button onClick={() => addition(1)}>Up</button>
      <button onClick={() => subtraction(1)}>Down</button> */}
      <button onClick={() => dispatch(additional(1))}>Up</button>
      <button onClick={() => dispatch(subtraction(1))}>Down</button>
    </div>
  );
};

export default App;
