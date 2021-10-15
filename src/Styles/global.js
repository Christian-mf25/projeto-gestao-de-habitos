import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    :root {
        --color-purple-card: #4E116A;
        --color-text-primary: #CFCFCF;
        --color-black-background: #181818;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;
