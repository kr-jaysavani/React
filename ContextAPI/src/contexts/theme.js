import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light", // we can also give default value
  changeTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
