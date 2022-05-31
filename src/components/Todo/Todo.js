import { useState, useEffect } from "react";
import { connect } from "react-redux";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import { fetchTasks } from "../../redux/actions/todo";

const Todo = ({
  highPriorityList,
  mediumPriorityList,
  lowPriorityList,
  getTasks,
}) => {
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div className="row mt-5">
      <div className="col-lg-4 col-md-4">
        <TodoForm />
      </div>
      <div className="col-lg-8 col-md-8">
        <TodoList
          highPriorities={highPriorityList}
          mediumPriorities={mediumPriorityList}
          lowPriorities={lowPriorityList}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state ==>", state);

  return {
    highPriorityList: state.todo.highPriorityList,
    mediumPriorityList: state.todo.mediumPriorityList,
    lowPriorityList: state.todo.lowPriorityList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => dispatch(fetchTasks()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
