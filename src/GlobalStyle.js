import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: white;
  font-size: 112.5%;
  font-family: sans-serif;
  padding: 10px;
}
input, button {
    font-size: inherit;
padding: 5px;
}
`
