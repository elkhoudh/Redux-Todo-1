import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
  TOGGLE_MODAL,
  DELETE_ONE
} from "../types/index";

const initialState = {
  todos: [],
  isModalOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isModalOpen: false
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };

    case DELETE_ONE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
