const initialState = {
  highPriorityList: [],
  mediumPriorityList: [],
  lowPriorityList: [],
  isError: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODO_SUCCESS": {
      return {
        ...state,
        highPriorityList: action.categories.highPriorities,
        mediumPriorityList: action.categories.mediumPriorities,
        lowPriorityList: action.categories.lowPriorities,
        isError: false,
      };
    }
    case "GET_TODO_FAILURE": {
      return {
        ...state,
        isError: true,
      };
    }

    case "ADD_TODO_ERROR": {
      return {
        ...state,
        isError: true,
      };
    }
    case "DELETE_TODO_ERROR": {
      return {
        ...state,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
