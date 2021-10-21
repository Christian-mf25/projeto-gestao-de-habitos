import { createGlobalStyle } from 'styled-components';

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
    body, p {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;
