import '../styles/globals.css';
import { GetStaticProps } from 'next';
import { SFC } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import type { AppProps } from 'next/app';
import { darkTheme, lightTheme, layout } from '../styles';

interface Props extends AppProps {
  Component: React.ComponentType;
  pageProps: GetStaticProps;
}

const App: SFC<Props> = ({ Component, pageProps }) => {
  return (
    <div className={`${layout.page} ${darkTheme.theme}`}>
      <ThemeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
