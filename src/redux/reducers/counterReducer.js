const initalState = {
  count: 0,
  className: "blueColor",
};

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        count: state.count + action.payload,
        className: action.className,
      };
    case "DECREASE_COUNTER":
      return {
        ...state,
        count: state.count - action.payload,
        className: action.className,
      };
    case "RESET_COUNTER":
      return {
        ...state,
        count: action.payload,
        className: action.className,
      };
    default:
      return state;
  }
};

export default counterReducer;
