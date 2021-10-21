import { createGlobalStyle } from "styled-components";
import img from "../assets/images/bg-smoke-purple.jpg";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-purple-card: #4e116a;
        --color-text-primary: #cfcfcf;
        --color-black-background: #181818;
        --color-linear-one: #A40FF2
        --color-linear-two: #6D95FB
        --color-linear-three: #0BD6F7
    }
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        background-color: #000000;
        /* opacity: 20%; */
    }

    body:before {
        content: "";
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        background: url(${img}) no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }


    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;
