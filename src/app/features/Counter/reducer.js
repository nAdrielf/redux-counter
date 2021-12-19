import * as counter from './constants';
let InitialState = {
  count: 0,
};
const CounterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case counter.INC:
      return {
        ...state,
        count: state.count + action.value,
      };
    case counter.DEC:
      return {
        count: state.count - action.value,
      };
    default:
      return state;
  }
};
export default CounterReducer;
