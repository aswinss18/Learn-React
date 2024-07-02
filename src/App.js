import logo from "./logo.svg";
import "./App.css";

import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent></ParentComponent>

        {/* <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* <Counter /> */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Hello name="Aswin" initial="S S" /> */}
        <Welcome name="Aswin" initial="S S"></Welcome>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
