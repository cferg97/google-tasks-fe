import { GET_PLANNER_DATA } from "../actions";
import { DELETE_PLANNER } from "../actions";

const initialState = {
  planners: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANNER_DATA:
      return {
        ...state,
        planners: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
