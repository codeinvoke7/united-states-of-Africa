import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const pageHeaderColorContext = createContext<ThemeContextType | null>(null);

export default function PageHeaderColorContextProvider({
  children
}: PageHeaderColorContextProviderProps) {
  const [theme, setTheme] = useState('');

  const black = 'heroBlack';
  const white = 'heroWhite';
  const green = '';

  const themes: string[] = [green, black, white];

  const setThemeHeroDefault = () => setTheme(green);
  const setThemeHeroBlack = () => setTheme(black);
  const setThemeHeroWhite = () => setTheme(white);

  // const nextTheme = () => {
  //   if (theme === green) return setThemeHeroBlack();
  //   if (theme === black) return setThemeHeroWhite();
  //   setThemeHeroDefault();
  // };

  const nextTheme = () => {
    setThemeHero(themes.findIndex((arrayTheme) => arrayTheme === theme) + 1);
  };

  const prevTheme = () => {
    setThemeHero(themes.findIndex((arrayTheme) => arrayTheme === theme) - 1);
  };

  // const prevTheme = () => {
  //   if (theme === white) return setThemeHeroBlack();
  //   if (theme === green) return setThemeHeroWhite();
  //   setThemeHeroDefault();
  // };

  const setThemeHero = (order = 0) => {
    let value = order % themes.length;

    if (value === 0) return setThemeHeroDefault();
    if (value === 1) return setThemeHeroBlack();
    return setThemeHeroWhite();
  };

  return (
    <pageHeaderColorContext.Provider
      value={{
        theme,
        prevTheme,
        nextTheme,
        setThemeHero,
        themes
      }}
    >
      {children}
    </pageHeaderColorContext.Provider>
  );
}

const propTypes = {
  children: PropTypes.any
};

type PageHeaderColorContextProviderProps = PropTypes.InferProps<typeof propTypes>;

type ThemeContextType = {
  theme: string;
  themes: readonly string[];
  setThemeHero: (order: number) => void;
  prevTheme: () => void;
  nextTheme: () => void;
};

PageHeaderColorContextProvider.propTypes = propTypes;
