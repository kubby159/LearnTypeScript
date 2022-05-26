import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState<number | string>(1); //타입스크립트는 초기값으로 자료형을 추측함.
  //setCounter("Hello"); //Error
  setCounter("Hello");
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? "white"} // undefined 이면 white를 적용시켜줌.
    ></Container>
  );
}

export default Circle;
