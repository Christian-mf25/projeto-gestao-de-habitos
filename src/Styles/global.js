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
				--color-background: rgba(24, 24, 24, 0.8);
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
			background-color: var(--color-background);
			width: 100%;
			min-height: 100vh;
			max-height: 100%;

			/* position: fixed; */
			/* z-index: -11; */
		}


    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;
