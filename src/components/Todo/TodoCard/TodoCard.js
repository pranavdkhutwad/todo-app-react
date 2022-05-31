import { connect } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { deleteTask } from "../../../redux/actions/todo";

import "./TodoCard.css";

const TodoCard = ({ deleteTask, task }) => {
  const deleteTaskHandler = () => {
    deleteTask(task.id);
  };

  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between">
        <div>{task.name}</div>
        <div>
          <OverlayTrigger overlay={<Tooltip id="tooltip-edit">Edit</Tooltip>}>
            <span class="oi oi-pencil me-3"></span>
          </OverlayTrigger>
          <OverlayTrigger
            overlay={<Tooltip id="tooltip-delete">Delete</Tooltip>}
          >
            <span onClick={deleteTaskHandler} class="oi oi-trash"></span>
          </OverlayTrigger>
        </div>
      </div>
      <div className="card-body">
        <div>{task.desc}</div>
        <div>{task.priority}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default connect(null, mapDispatchToProps)(TodoCard);
