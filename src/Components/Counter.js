import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../JS/actions/couterActions";

export const Counter = () => {
  const countstateRedux = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{countstateRedux}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
