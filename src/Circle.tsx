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
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default Text" }: CircleProps) {
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? "white"} // undefined 이면 white를 적용시켜줌.
    >
      {text}
    </Container>
  );
}

export default Circle;
