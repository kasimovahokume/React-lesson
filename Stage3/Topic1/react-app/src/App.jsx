import "./App.css";
import { Navbar } from "./Navbar";

export function App() {
  let a = 15;
  const firstName = "hoku";

  let vize1 = 60;
  let vize2 = 80;

  let sonuc = false;

  return (
    // fragment
    <div>
      {/* <p>Ortalama :{(vize1 + vize2) / 2}</p> */}

      {/* {sonuc ? (
        <p>Ehliyyeti alabilirsin</p>
      ) : (
        <p>Ehliyyeti alamazsin, kaybol</p>
      )} */}
      {/* {(vize1 + vize2) / 2 >= 50 ? <p>Dersten gectin aferin</p> : <p>kaldin</p>} */}
    </div>
  );
}

// export default App
