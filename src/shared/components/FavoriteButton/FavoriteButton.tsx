import styles from './FavoriteButton.module.scss';

type Props = {
  onClick: () => void;
  className?: string;
  isInFavorites: boolean;
};

export const FavoriteButton: React.FC<Props> = ({
  onClick,
  className,
  isInFavorites,
}) => {
  return (
    <button className={`${styles.button} ${className || ''}`} onClick={onClick}>
      {isInFavorites ? (
        <img
          src="/icons/Favourites Filled (Heart Like).svg"
          alt="Remove from favorites"
        />
      ) : (
        <img src="/icons/heard.svg" alt="Add to favorites" />
      )}
    </button>
  );
};
