import { createContext, useContext, useState, ReactNode } from 'react';
const ThemeContext = createContext({ theme: 'light', setTheme: (_: string) => {} });
export function ThemeProvider({ children, defaultTheme = 'light' }: { children: ReactNode, defaultTheme?: string }) {
  const [theme, setTheme] = useState(defaultTheme);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
