import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
    </>
  );
}

function Car() {
  return <h2 id="block"> Hi, I am a Truckerrrr! </h2>;
}

class Smart {
  constructor(name) {
    this.brand = name;
  }
}
function But() {
  return <input type="text" id="lname" name="lname"></input>;
}

export { Car, But, Smart, FavoriteColor, Timer };
