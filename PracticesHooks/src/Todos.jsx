import { memo } from "react";

const Todos = ({ todos, setTodos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={() => setTodos((t) => [...t, "New Todo"])}>
        Add Todo
      </button>
    </>
  );
};

export default memo(Todos);
