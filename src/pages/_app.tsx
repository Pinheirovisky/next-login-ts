import React from 'react';
import App, { AppProps, AppInitialProps, AppContext } from 'next/app';
import { wrapper } from '../store';
import '../styles/reset.css';

// Themes
import { createGlobalStyle } from 'styled-components';

// Global styles
import { Global } from '../styles';

const GlobalStyle = createGlobalStyle`
  ${Global}
`;

class MyApp extends App<AppInitialProps> {
  public static getInitialProps = async ({
    Component,
    ctx,
  }: AppContext): Promise<{
    pageProps: {
      pathname: string;
    };
  }> => {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
    };
  };

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <div className="App">
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default wrapper.withRedux(MyApp);
