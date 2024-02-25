import { useState } from 'react';
import { Themes } from '@/types';
import { setDarkToHtml, removeDarkFromHtml } from '@/lib/theme';

export const useTheme: () => [string | null, () => void] = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const toggleTheme = () => {
    if (theme === Themes.Dark) {
      removeDarkFromHtml();
      setTheme(Themes.Light);
    } else {
      setDarkToHtml();
      setTheme(Themes.Dark);
    }
    localStorage.setItem(
      'theme',
      localStorage.getItem('theme') === Themes.Dark ? Themes.Light : Themes.Dark
    );
  };

  return [theme, toggleTheme];
};
