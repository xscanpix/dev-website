import { createContext, PropsWithChildren, useContext, useState } from "react";

type ThemeContextType = { theme: "light" | "dark"; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

ThemeContext.displayName = "ThemeContext";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          setTheme((value) => {
            if (value === "light") {
              return "dark";
            } else {
              return "light";
            }
          });
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
