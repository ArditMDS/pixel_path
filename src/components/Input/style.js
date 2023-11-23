import styled from "styled-components";

export const InputStyle = styled.input `
  background: black;
  color: white;
  font-size: 20px;
  border: 5px solid white;
  height: 70px;
  width: 50%;
  padding: 0 0 0 20px;
  &::placeholder {
    color: white;
    font-size: 20px;
  }
`