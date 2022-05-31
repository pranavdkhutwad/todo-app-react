import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../../redux/actions/todo";

const TodoForm = ({ addTodoTask }) => {
  const [task, setTask] = useState({
    name: "",
    desc: "",
    priority: "",
  });

  const addTask = (event) => {
    event.preventDefault();
    addTodoTask(task);
  };

  const nameChangeHandler = (event) =>
    setTask({ ...task, name: event.target.value });
  const descChangeHandler = (event) =>
    setTask({ ...task, desc: event.target.value });
  const priorityChangeHandler = (event) =>
    setTask({ ...task, priority: Number(event.target.value) });

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={addTask}>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Task Name"
              name="name"
              value={task.name}
              onChange={nameChangeHandler}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Task Description"
              name="desc"
              value={task.desc}
              onChange={descChangeHandler}
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="number"
              placeholder="Task Priority"
              name="priority"
              value={task.priority}
              onChange={priorityChangeHandler}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-success" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoTask: (task) => dispatch(addTask(task)),
  };
};
export default connect(null, mapDispatchToProps)(TodoForm);
