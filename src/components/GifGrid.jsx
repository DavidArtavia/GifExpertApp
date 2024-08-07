import { useEffect, useState } from "react";
import { getGif } from "../helper/getGifs";

export const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //  getGif(category);
  }, []);

  return (
    <>
      <div key={category}>
        <li>{category}</li>
        <button onClick={() => setCounter(counter + 1)}>incrementar </button>
        <h1>{counter}</h1>
      </div>
    </>
  );
};
