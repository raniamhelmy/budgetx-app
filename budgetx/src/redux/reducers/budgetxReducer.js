import { ADD, DELETE, RESET, SEARCH, SUM } from '../action-types/actionTypes';

const INITIAL_STATE = {
  expenseList: [],
  query: '',
  total: 5000,
  sum: 0,
};

const budgetxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };
    }
    case DELETE: {
      const { data } = action;
      const updatedList = state.expenseList.filter(
        (item) => item.createdAt !== data.time
      );
      return {
        ...state,
        expenseList: updatedList,
        sum: state.sum - data.nsum,
      };
    }
    case SEARCH: {
      const { query } = action;
      return {
        ...state,
        query,
      };
    }
    case SUM: {
      const { data } = action;
      return {
        ...state,
        sum: state.sum + data,
      };
    }
    case RESET:
      return (state = INITIAL_STATE);

    default:
      return state;
  }
};

export default budgetxReducer;
