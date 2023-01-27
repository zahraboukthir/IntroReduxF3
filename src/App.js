import { useState } from "react";
import "./App.css";
import { Counter } from "./Components/Counter";
import TextInp from "./Components/TextInp";
import { useDispatch, useSelector } from "react-redux";
import { Show } from "./JS/actions/couterActions";

function App() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.show);
  return (
    <div className="App">
      <button onClick={() => dispatch(Show())}>show</button>
      {show ? <Counter /> : <TextInp />}
    </div>
  );
}

export default App;
