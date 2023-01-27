import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettext } from "./../JS/actions/couterActions";

const TextInp = () => {
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={() => dispatch(gettext(text))}>submit</button>
      <p>{value}</p>
    </div>
  );
};

export default TextInp;
