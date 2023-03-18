import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { heroBackground, heroBackground2, heroBackground3 } from 'assets/images';

export const pageHeaderColorContext = createContext<ThemeContextType | null>(null);

export default function PageHeaderColorContextProvider({
  children
}: PageHeaderColorContextProviderProps) {
  const [theme, setTheme] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(heroBackground);

  const black = 'heroBlack';
  const white = 'heroWhite';
  const green = '';

  const themes: string[] = [green, black, white];

  const setThemeHeroDefault = () => {
    setTheme(green);
    setBackgroundImage(heroBackground);
  };
  const setThemeHeroBlack = () => {
    setTheme(black);
    setBackgroundImage(heroBackground2);
  };
  const setThemeHeroWhite = () => {
    setTheme(white);
    setBackgroundImage(heroBackground3);
  };

  const nextTheme = () => {
    setThemeHero(themes.findIndex((arrayTheme) => arrayTheme === theme) + 1);
  };

  const prevTheme = () => {
    setThemeHero(themes.findIndex((arrayTheme) => arrayTheme === theme) - 1);
  };
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
        backgroundImage,
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
  backgroundImage: string;
  themes: readonly string[];
  setThemeHero: (order: number) => void;
  prevTheme: () => void;
  nextTheme: () => void;
};

PageHeaderColorContextProvider.propTypes = propTypes;
