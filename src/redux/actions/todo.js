import axios from "axios";
import {
  transformObjToArr,
  filterListByCategories,
} from "../../components/Todo/util";

export const fetchTasks = () => {
  // redux thunk
  return (dispatch) => {
    axios
      .get(
        "https://react-todo-app-8a32f-default-rtdb.firebaseio.com/todos.json"
      )
      .then((response) => {
        const list = transformObjToArr(response.data);
        const categories = filterListByCategories(list);

        dispatch({ type: "GET_TODO_SUCCESS", categories });
      })
      .catch(() => {
        dispatch({ type: "GET_TODO_FAILURE", message: "Api Failure" });
      });
  };
};
export const addTask = (task) => {
  return (dispatch) => {
    axios
      .post(
        "https://react-todo-app-8a32f-default-rtdb.firebaseio.com/todos.json",
        task
      )
      .then(() => dispatch(fetchTasks()))
      .catch(() => {
        dispatch({ type: "ADD_TODO_ERROR" });
      });
  };
};
