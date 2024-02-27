import { Themes } from "@/types";

export const initializeTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    currentTheme === Themes.Dark ? setDarkToHtml() : removeDarkFromHtml();
  } else {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
      localStorage.setItem('theme', Themes.Dark);
      setDarkToHtml();
    } else if (currentTheme == Themes.Light) {
      localStorage.setItem('theme', Themes.Light);
      removeDarkFromHtml();
    }
  }
};

export const setDarkToHtml = () => {
  document.getElementsByTagName('html')[0].setAttribute('dark', 'true');
};

export const removeDarkFromHtml = () => {
  document.getElementsByTagName('html')[0].removeAttribute('dark');
};
