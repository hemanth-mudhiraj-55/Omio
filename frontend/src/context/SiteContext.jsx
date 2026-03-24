import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const SiteContext = createContext(null);

const STORAGE_KEYS = {
  language: 'omio-language',
  theme: 'omio-theme',
};

export function SiteProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem(STORAGE_KEYS.language) || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEYS.theme) || 'light');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.language, language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      toggleTheme: () => setTheme((current) => (current === 'light' ? 'dark' : 'light')),
    }),
    [language, theme],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);

  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }

  return context;
}
