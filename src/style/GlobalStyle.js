import {createGlobalStyle} from "styled-components";
import {InitialStyle} from "./InitialStyle";
import {FontStyle} from "./Font";

export const GlobalStyle = createGlobalStyle`
  ${InitialStyle};
  ${FontStyle}
  
  *, *::before, *::after {
    word-break: keep-all;
  }
  
  body {
    min-width: 320px;
    background-color: ${p => p.theme.color.Gray3};
  }
  
  button, input {
    background: none;
    color: inherit;
    border: none;
    cursor: pointer;
    outline: inherit;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  
  input:focus {
    outline: none;
  }
`