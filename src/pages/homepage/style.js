import styled from "styled-components";

export const ContainerWheel = styled.div `
  display: flex;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 50px;
  }
`

export const Wheel = styled.div `
  position: relative;
  height: 500px;
  width: 500px;
  background-color: white;
  border-radius: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(${(props) => props.rotate}deg);
  transition: transform 5s ease-in-out;
  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
  
`

export const ContainerDivWheel = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const Message = styled.div `
  margin-bottom: 50%;
`