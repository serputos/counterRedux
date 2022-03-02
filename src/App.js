import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "./redux/actions/counterActions";
import store from "./redux/store";
import counterReducer from "./redux/reducers/counterReducer";

function App() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatchCounter = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={() => dispatchCounter(increaseCounter(1))}>+1</button>
        <button onClick={() => dispatchCounter(increaseCounter(5))}>+5</button>
        <button onClick={() => dispatchCounter(decreaseCounter(1))}>-1</button>
        <button onClick={() => dispatchCounter(decreaseCounter(5))}>-5</button>
        <button onClick={() => dispatchCounter(resetCounter())}>RESET</button>
      </header>
    </div>
  );
}

export default App;
