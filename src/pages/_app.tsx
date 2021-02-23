import React from 'react';
import { AppProps } from 'next/app';

// Themes
import { createGlobalStyle } from 'styled-components';

// Global styles
import { Global } from '../styles';

const GlobalStyle = createGlobalStyle`
  ${Global}
`;

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="App">
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
