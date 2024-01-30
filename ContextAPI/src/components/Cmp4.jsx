import React from "react";
import UserContext, { useUser } from "../contexts/UserContext";

function Cmp4() {
  console.log("cmp4");
  const { user, setUser } = useUser();
  console.log(user);

  const handleclick = () => {
    setUser({ name: "Dodge", type: "hyper" });
  };

  return (
    <div>
      cmp4
      <h1>Nama : {user.name}</h1>
      <h1>Type: {user.type}</h1>
      <button onClick={handleclick}>cilck </button>
    </div>
  );
}

export default Cmp4;
