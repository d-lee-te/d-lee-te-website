"use client"

import { createContext, useContext } from 'react';

const SpotifyContext = createContext();

export const useSpotify = () => {
  return useContext(SpotifyContext);
};

export const SpotifyProvider = ({ children, recentSongs }) => {
  return (
    <SpotifyContext.Provider value={{ recentSongs }}>
      {children}
    </SpotifyContext.Provider>
  );
};
