import * as counter from './constants';
export const Increment = (value) => {
  return {
    type: counter.INC,
    value: value,
  };
};

export const Decrement = (value) => {
  return {
    type: counter.DEC,
    value: value,
  };
};

export const decrementWitchCheckingAction = (value) => {
  return (dispatch, getState) => {
    if (getState().counter.count > 0) {
      dispatch(Decrement(value));
    }
  };
};
