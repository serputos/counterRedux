export const increaseCounter = (amount) => {
  return {
    type: "INCREASE_COUNTER",
    payload: amount,
    className: "greenColor",
  };
};

export const decreaseCounter = (amount) => {
  return {
    type: "DECREASE_COUNTER",
    payload: amount,
    className: "redColor",
  };
};

export const resetCounter = () => {
  return {
    type: "RESET_COUNTER",
    payload: 0,
    className: "blueColor",
  };
};
