import { useTheme } from '@/shared/context/FavoriteContext/useTheme';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.themeSwitcherButton} onClick={toggleTheme}>
      {theme === 'light' ? (
        <img src="/react_phone-catalog/icons/moon.svg" alt="moon" />
      ) : (
        <img src="/react_phone-catalog/icons/sun.svg" alt="sun" />
      )}
    </button>
  );
};
