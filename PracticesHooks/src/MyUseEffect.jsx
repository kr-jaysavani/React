import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function MyUseEffect() {
  console.log("MyUseEffect Render");
  const [sz, setSz] = useState(window.innerWidth);

  const handleresize = () => {
    setSz(window.innerWidth);
  };

  const [data, setData] = useState({});

  useEffect(() => {
    console.log("useEffect Render");
    const fatch = async () => {
      try {
        const res = await fetch("https://api.github.com/users/JaySavani");
        console.log(res);
        const data = await res.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fatch();

    addEventListener("resize", handleresize);

    return () => {
      removeEventListener("resize", handleresize);
    };
  }, []);

  return (
    <>
      <h1>Practices on UseEffects</h1>
      <h2>your window Width : {sz}</h2>
      <div>
        <h3>{data.login}</h3>
        <h3>{data.created_at}</h3>
      </div>
    </>
  );
}

export default MyUseEffect;
