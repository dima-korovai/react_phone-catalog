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
          src="/react_phone-catalog/icons/Favourites Filled (Heart Like).svg"
          alt="Remove from favorites"
        />
      ) : (
        <img
          src="/react_phone-catalog/icons/heard.svg"
          alt="Add to favorites"
        />
      )}
    </button>
  );
};
