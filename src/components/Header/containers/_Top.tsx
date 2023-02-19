import { useState, useEffect } from 'react';

import sunIcon from '../assets/icon-sun.svg';
import moonIcon from '../assets/icon-moon.svg';

export function $Top() {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    const html = document.querySelector('html');
    if (theme === 'dark') {
      html?.removeAttribute('data-mode');
      setTheme('light');
    } else {
      html?.setAttribute('data-mode', 'dark');
      setTheme('dark');
    }
  }

  useEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-mode', 'dark');
  }, []);

  return (
    <div className="w-100 flex items-center justify-between">
      <h1 className="text-[2.4rem] font-bold leading-none tracking-[6px] text-common-white">
        TODO
      </h1>
      <button type="button" onClick={handleToggleTheme}>
        <img src={theme === 'dark' ? sunIcon : moonIcon} alt="" />
      </button>
    </div>
  );
}
