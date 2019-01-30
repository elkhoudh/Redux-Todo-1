import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
  TOGGLE_MODAL,
  DELETE_ONE
} from "../types/index";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      task: todo,
      completed: false
    }
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  };
};

export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL
  };
};

export const deleteOne = id => {
  return {
    type: DELETE_ONE,
    payload: id
  };
};
