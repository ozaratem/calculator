import React, {useState} from "react";

import "./App.css";


// function HandleClick(e) {
// console.log(e.target.name);
// };


function App() {

const [state, setState] = useState('');

  return (
    <div className="App">
        <h1>Calculator</h1>
        <div className="display">
          <p>{state}</p>
        </div>
        <div className="container">
          <div className="row">
              <button
                className="col"
                name="C"
                onClick={(e) => (setState(''))}
                >
                C
              </button>
              <button
                className="col"
                name="/"
                onClick={(e) => (setState(state + e.target.name))}
              >
                /
              </button>
              <button
                className="col"
                name="*"
                onClick={(e) => (setState(state + e.target.name))}
              >
                X
              </button>
              <button
                className="col"
                name="Del"
                onClick={(e) => (setState(state.substr(0, state.length - 1)))}
              >
                Del
              </button>
          </div>
          <div className="row">
              <button
                className="col"
                name="7"
                onClick={(e) => (setState(state + e.target.name))}
              >
                7
              </button>
              <button
                className="col"
                name="8"
                onClick={(e) => (setState(state + e.target.name))}
              >
                8
              </button>
              <button
                className="col"
                name="9"
                onClick={(e) => (setState(state + e.target.name))}
              >
                9
              </button>
              <button
                className="col"
                name="-"
                onClick={(e) => (setState(state + e.target.name))}
              >
                -
              </button>
          </div>
          <div className="row">
              <button
                className="col"
                name="4"
                onClick={(e) => (setState(state + e.target.name))}
              >
                4
              </button>
              <button
                className="col"
                name="5"
                onClick={(e) => (setState(state + e.target.name))}
              >
                5
              </button>
              <button
                className="col"
                name="6"
                onClick={(e) => (setState(state + e.target.name))}
              >
                6
              </button>
              <button
                className="col"
                name="+"
                onClick={(e) => (setState(state + e.target.name))}
              >
                +
              </button>
          </div>
          <div className="row">
              <button
                className="col"
                name="1"
                onClick={(e) => (setState(state + e.target.name))}
              >
                1
              </button>
              <button
                className="col"
                name="2"
                onClick={(e) => (setState(state + e.target.name))}
              >
                2
              </button>
              <button
                className="col"
                name="3"
                onClick={(e) => (setState(state + e.target.name))}
              >
                3
              </button>
              <button
                className="col"
                name="="
                onClick={(e) => (setState(eval(state)))}
              >
                =
              </button>
          </div>
          <div className="row">
              <button
                className="col"
                name="%"
                onClick={(e) => (setState(state + e.target.name))}
              >
                %
              </button>
              <button
                className="col"
                name="0"
                onClick={(e) => (setState(state + e.target.name))}
              >
                0
              </button>
              <button
                className="col"
                name="."
                onClick={(e) => (setState(state + e.target.name))}
              >
                .
              </button>
          </div>
        </div>
    </div>
  );
}

export default App;
