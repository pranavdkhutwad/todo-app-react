import "./TodoCard.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const TodoCard = ({ task }) => {
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
            <span class="oi oi-trash"></span>
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

export default TodoCard;
