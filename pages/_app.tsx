import '../styles/globals.css';
import { GetStaticProps } from 'next';
import React, { SFC } from 'react';
import { ThemeProvider as ChakraTheme, CSSReset, theme } from '@chakra-ui/core';
import type { AppProps } from 'next/app';
import { darkTheme, lightTheme, layout } from '../styles';
interface Props extends AppProps {
  Component: React.ComponentType;
  pageProps: GetStaticProps;
}

export const Theme = React.createContext([true, () => 0] as [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]);

interface ThemeProviderInterface {
  isLight: boolean;
  children: JSX.Element;
}

export const ThemeProvider: SFC<ThemeProviderInterface> = ({
  isLight,
  children
}) => {
  const [isLightValue, setIsLight] = React.useState<boolean>(isLight);
  return (
    <Theme.Provider value={[isLightValue, setIsLight]}>
      <div
        className={`${layout.page} ${
          isLightValue ? lightTheme.theme : darkTheme.theme
        }`}
      >
        {children}
      </div>
    </Theme.Provider>
  );
};

const App: SFC<Props> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider isLight={true}>
      <ChakraTheme>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraTheme>
    </ThemeProvider>
  );
};

export default App;
