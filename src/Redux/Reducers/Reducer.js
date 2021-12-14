import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from "../Actions/ActionsType";

const initState = {
  tasks: [],
};

export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((e) =>
          e.id === action.payload.index
            ? { ...e, text: action.payload.editedText }
            : e
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((e) => e.id !== action.payload),
      };
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((e) =>
          e.id === action.payload ? { ...e, isDone: !e.isDone } : e
        ),
      };
    default:
      return state;
  }
};
