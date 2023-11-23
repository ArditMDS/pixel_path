import styled from "styled-components";

export const SpinButtonStyle = styled.button `
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: black;
  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 60%;
    top: -40%;
    background-color: black;
    clip-path: polygon(50% 0%, 15% 100%, 85% 100% );
  }
`
