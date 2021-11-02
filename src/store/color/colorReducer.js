import { RED, GREEN, BLUE } from "./colorTypes";

const initialState = {
  color: {
    red: 0,
    green: 0,
    blue: 0,
  },
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case RED: {
      const { value } = action.payload;
      let color = { ...state.color, red: value };
      return {
        ...state,
        color,
      };
    }
    case GREEN: {
      const { value } = action.payload;
      let color = { ...state.color, green: value };
      return {
        ...state,
        color,
      };
    }
    case BLUE: {
      const { value } = action.payload;
      let color = { ...state.color, blue: value };
      return {
        ...state,
        color,
      };
    }
    default:
      return state;
  }
};

export default colorReducer;
