import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
#root {
color: #000;  
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 100vh;
}
body {
	margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;
