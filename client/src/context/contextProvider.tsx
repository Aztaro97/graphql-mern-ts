import React, { createContext, useContext, useEffect, useState } from "react";

interface AppContextInterface {
  currentMode: String;
  setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
  currentColor: String;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
}

const StateContext = createContext<AppContextInterface | null>(null);

export const ContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [currentMode, setCurrentMode] = useState<string>("Light");
  const [currentColor, setCurrentColor] = useState<string>("Light");
  const colorTheme = currentColor === "Dark" ? "Light" : "Dark";

  useEffect(() => {
    if (window === undefined) return;

    const root = window.document.documentElement;
    const isDark = currentMode === "Dark";

    root.classList.remove(isDark ? "Light" : "Dark");
    root.classList.add("light");

    console.log(currentMode);

    localStorage.setItem("theme", currentMode);
  }, [currentMode, colorTheme]);

  return (
    <StateContext.Provider
      value={{ currentMode, setCurrentMode, currentColor, setCurrentColor }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
