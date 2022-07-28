import "./styles.css";

import { Car, But, Smart, FavoriteColor, Timer } from "./practice.js";
import "./ether.js";
let cool = new Smart("johnny");

export default function App() {
  return (
    <div className="App">
      <div className="lol">
        <Timer />
        <FavoriteColor />
        <Car />
        <But />
        <h1>Hello CodeSandbox{"  " + cool.brand}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
