const initalState = {
  className: "colorWhite",
};

const colorReducer = (state = initalState, action) => {
  switch (action.type) {
    case "CHANGE_YELLOW":
      return {
        ...state,
        className: "colorYellow",
      };
    case "CHANGE_RED":
      return {
        ...state,
        className: "colorRed",
      };

    default:
      return state;
  }
};

export default colorReducer;
