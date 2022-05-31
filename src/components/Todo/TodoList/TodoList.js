import TodoCard from "../TodoCard/TodoCard";

const TodoList = ({ highPriorities, mediumPriorities, lowPriorities }) => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <h5>High Priority List</h5>
        {highPriorities.map((task, index) => {
          return <TodoCard key={index} task={task} />;
        })}
      </div>
      <div className="col-lg-4 col-md-4">
        <h5>Medium Priority List</h5>
        {mediumPriorities.map((task, index) => {
          return <TodoCard key={index} task={task} />;
        })}
      </div>
      <div className="col-lg-4 col-md-4">
        <h5>Low Priority List</h5>
        {lowPriorities.map((task, index) => {
          return <TodoCard key={index} task={task} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
