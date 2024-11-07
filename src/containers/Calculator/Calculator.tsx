import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { calculateResult, del, increaseArrNumber } from './CalculatorSlice.ts';


const Calculator = () => {
  const counterValue = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch<AppDispatch>();

  const arrButton = [1, 2, 3, 4, 5, 6, 7, 8, 9, '<', 0, 'E','*','/','-','+'];


  const handleClick = (btn: number | string) => {
    if (btn === '<') {
      dispatch(del());
    } else if (btn === 'E') {
      dispatch(calculateResult());
    } else {
        dispatch(increaseArrNumber(btn));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          <div
            className={`border border-2`}
            style={{ height: 70, textAlign: 'center' }}
          >
            {counterValue}
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

export default Calculator;