import { useState } from "react";
import Card from "./components/Card";

function App() {
  // const username = "venom"

  const [count, setCount] = useState(0);
  let myObj = {
    username: "f5",
    age: 20,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      {/* <h1>Hello {username}!</h1> */}
      {/* in side {} you can only write evaluated expression 
      so you can't use statement like ifelse    */}
      {/* <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1> */}

      {/* <Card someobj={myObj} somearr={newArr} /> */}
      {/* you can not pass directly array and object as a props  */}

      <Card username="Dodge" btnText="click me" />
      <Card username="Venom" />
    </>
  );
}

export default App;
