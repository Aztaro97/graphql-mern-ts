import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { MdOutlineNightlight } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { useStateContext } from "../../context/contextProvider";
// import { DarkModeSwitch } from "react-toggle-dark-mode";

const NavBar = () => {
  return (
    <Container>
      <h1>Add client</h1>
      <h1 className="text-white font-extrabold dark:text-black">Add product</h1>
      <SwitchDarkButton />
    </Container>
  );
};

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(
    () => localStorage.theme === "dark"
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (window === undefined) return;

    const root = window.document.documentElement;

    const prevTheme = isDarkMode ? "light" : "dark";
    root.classList.remove(prevTheme);

    const nextTheme = isDarkMode ? "dark" : "light";
    root.classList.add(nextTheme);

    console.log(window.matchMedia("(prefers-color-scheme: dark)"));
    console.log(root);

    localStorage.setItem("theme", nextTheme);
  }, [isDarkMode]);
  return [isDarkMode, toggleDarkMode];
};

const SwitchDarkButton = () => {
  //   const { isDarkMode, setCurrentMode, currentColor, setCurrentColor } =
  //     useStateContext();

  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="text-2xl"
        onClick={toggleDarkMode as any}
      >
        <MdOutlineNightlight /> {isDarkMode ? "Light" : "Dark"}
      </button>

      <button
        type="button"
        className="text-2xl"
        onClick={toggleDarkMode as any}
      >
        <BsSun />
      </button>
    </div>
  );
};

const Container = styled.div`
  ${tw`
	flex
	justify-between
	px-3
	bg-blue-600
	py-4
	text-white
	`}
`;

export default NavBar;
