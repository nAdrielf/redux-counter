import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  decrementWitchCheckingAction,
  Increment,
} from '../../app/features/Counter/action';
const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrementWitchCheckingAction(1))}>
        -
      </button>
      {''}
      <span> {count} </span>
      {''}
      <button onClick={() => dispatch(Increment(1))}>+</button>
    </div>
  );
};
export default Counter;
