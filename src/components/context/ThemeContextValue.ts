import { createContext } from "react";

export const theme = {
  primary: {
    main: "#3f51b5",
    text: "#fff",
  },
  secondary: {
    main: "#f50057",
    text: "#fff",
  },
};

export const ThemeContext = createContext(theme);
