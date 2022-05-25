import styled from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor="tomato" text="im here"></Circle>
      <Circle bgColor="tomato" borderColor="teal"></Circle>
    </div>
  );
}

export default App;
