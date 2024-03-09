import styled from "styled-components";

export const Sub = ({children}) => {
  const SubStyle = styled.sub`
    font-size: 0.6em;
  `

  return (
    <SubStyle>{children}</SubStyle>
  )
}