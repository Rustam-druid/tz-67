import { useDispatch, useSelector } from 'react-redux';
import { del, emty, increaseArrNumber } from './counterSlice.ts';
import { AppDispatch, RootState } from '../../app/store.ts';
import { useState } from 'react';

const Counter = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const arrButton = [1, 2, 3, 4, 5, 6, 7, 8, 9, '<', 0, 'E'];
  const arr = [1, 1, 1, 1];
  const [isMatching, setIsMatching] = useState<boolean | null>(null);
  const handleEButtonClick = () => {

    if (counterValue.every((value:number, index:number) => value === arr[index])) {
      setIsMatching(true);
      setTimeout(() => setIsMatching(null),1000);
      dispatch(emty());
    }else {
      setIsMatching(false);
      setTimeout(() => setIsMatching(null),1000);
      dispatch(emty());
    }
  };

  const handleClick = (btn: number | string) => {
  if (btn === '<') {
      dispatch(del());
    } else if (btn === 'E') {
      handleEButtonClick();
    } else {
      if (counterValue.length < 4){
        dispatch(increaseArrNumber(btn));
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          <div
            className={`border border-2 
              ${
              counterValue.length < 4 && isMatching === null ? 'bg-white' : isMatching ? 'bg-success' : isMatching === null ? 'bg-white' : 'bg-danger'
            }`}
            style={{ height: 70, textAlign: 'center' }}
          >
            {counterValue.map(() => (
              <span key={Math.random()}>*</span>
            ))}
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-6">
          <div className="row gap-1 justify-content-center align-items-center">
            {arrButton.map((btn) => (
              <button
                className="col-3 border border-2 p-2"
                key={btn}
                onClick={() => handleClick(btn)}
              >
                {btn}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;