import { Action } from "./actions";

const initialState = {
  isWaiting: false,
  students: [],
};


function reducer(state = initialState, action) {
  switch (action.type) {
    case Action.LoadStudents:
      return {
        ...state,
        students: action.payload,
      };
    case Action.FinishAddingStudent:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case Action.FinishEditingStudent:
      return {
        ...state,
        students: state.students.map(student => {
          if (student.id === action.payload.id) {
            return action.payload;
          }
          else {
            return student;
          }
        }),
      };
    case Action.FinishDeletingStudent:
      return {
        ...state,
        students: state.students.filter(student => student.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default reducer;