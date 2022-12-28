import { Task } from "./Task";

export const Tasks = (props) => {
  return (
    <>
      {props.tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle}/>;
      })}
    </>
  );
};
