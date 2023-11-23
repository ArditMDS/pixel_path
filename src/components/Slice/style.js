import styled from "styled-components";

export const SliceStyle = styled.div `
  position: absolute;
  height: 80%;
  /*background-color: ${(props) => (props.index / 2 === 0 ? "red" : "green")};*/
  transform: rotate(${(props) => props.result}deg);
`
