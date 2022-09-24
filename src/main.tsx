import { BaseProvider, DarkTheme } from 'baseui';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import App from './App';
import './index.css';

const engine = new Styletron();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StyletronProvider value={engine}>
            <BaseProvider theme={DarkTheme}>
                <App />
            </BaseProvider>
        </StyletronProvider>
    </React.StrictMode>,
);
