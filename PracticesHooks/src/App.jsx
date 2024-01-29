// import { useState } from "react";

// import "./App.css";

// function App() {
//   // console.log("App render");
//   const [count, setCount] = useState(1);
//   // const [count, setCount] = useState("1");
//   // const [count, setCount] = useState(true);

//   // const [count, setCount] = useState([]);
//   // const [count, setCount] = useState({});

//   const handleClick = () => {
//   // console.log("clicked");
//   // setCount(1);
//   // setCount("1");
//   setCount(true);
//   // for above app will not render

//   // setCount({});
//   // setCount([]);
//   // console.log("inside", count);
//   };
//   // console.log("app", count);

//   // object in useState always rerender because js compare reference
//   // but is set same number then not rerender

//   return (
//     <>
//       <h1> Practices on hooks</h1>
//       <button onClick={handleClick}>click</button>
//     </>
//   );
// }

import { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ App ~ count:", count)
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // }, [todos]);

  // useEffect(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // }, [todos]);

  return (
    <>
      <Todos todos={todos} setTodos={setTodos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;
