import { createGlobalStyle } from "styled-components";
import img from "../assets/images/bg-smoke-purple.jpg";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-purple-card: #4e116a;
        --color-secondary: #7580f9;
        --color-text-primary: #cfcfcf;
        --color-black-background: #181818;
        --color-title: #f5f5f5;
        --color-text: #a788b5;
				--color-background: rgba(24, 24, 24, 0.3);
        --color-linear: linear-gradient(90.82deg, #6D95FB 0.01%, #A40FF2 99.99%, #0BD6F7 100%);
    }
    body, p, li, ul {
      	list-style: none;  
				margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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

		.opacity{
			background-color: rgba(24, 24, 24, 0.8);
			width: 100%;
			min-height: 100vh;
		}

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;
