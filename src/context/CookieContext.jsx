import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [showBanner, setShowBanner] = useState(!Cookies.get('cookie_accepted'));

  const acceptCookies = () => {
    Cookies.set('cookie_accepted', 'true', { expires: 350 });
    setShowBanner(false);
  };

  const contextValue = {
    showBanner,
    acceptCookies,
  };

  return (
    <CookieContext.Provider value={contextValue}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieContext = () => useContext(CookieContext);