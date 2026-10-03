import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import { useTheme } from '@/shared/context/FavoriteContext/useTheme';

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link className={styles.logo} to="/">
      <img
        src={theme === 'light' ? 'icons/logo.svg' : 'icons/logo white.svg'}
        alt="logo"
      />
    </Link>
  );
};
