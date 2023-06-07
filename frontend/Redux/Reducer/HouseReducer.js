import { FETCH_HOUSES, CREATE_HOUSES } from "../../constants/constants";

const initialState = {
  houses: [],
};

export default HouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOUSES:
      return {
        ...state,
        houses: action.payload,
      }
    case CREATE_HOUSES:
      return {
        ...state,
        houses: state.houses.concat(action.payload.data),
      }
    default:
      return state;
  }
};
