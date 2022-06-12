import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./Card.module.scss";
import AppContext from "../../context";

const Card = ({
                id,
                title,
                price,
                img,
                onFavorite,
                onPlus,
                favorites = false,
                loading = false,
              }) => {
  const { isItemAdded } = React.useContext(AppContext);
  const [isAddedFavorite, setIsAddedFavorite] = React.useState(favorites);

  const obj = { id, parentId: id, title, price, img };

  const onClickPlus = () => {
    onPlus(obj);
  };
  const onClickFavorites = () => {
    onFavorite(obj);
    setIsAddedFavorite(!isAddedFavorite);
  };

  const changeSvgCart = isItemAdded(id)
    ? "./assets/svgicons/btn-checked.svg"
    : "./assets/svgicons/btn-plus.svg";
  const changeSvgFavorites = isAddedFavorite
    ? "./assets/svgicons/like.svg"
    : "./assets/svgicons/unlike.svg";

  return (
    <div className={styles.itemContent}>
      {loading
        ? <ContentLoader
          speed={2}
          width={210}
          height={208}
          viewBox="0 0 210 208"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="0" ry="0" width="150" height="105" />
          <rect x="0" y="130" rx="0" ry="0" width="150" height="32" />
          <rect x="-1" y="180" rx="0" ry="0" width="90" height="32" />
          <rect x="117" y="180" rx="0" ry="0" width="32" height="32" />
        </ContentLoader>
        : <>
          {onFavorite && <button className={styles.itemContent__favorite}
                                 onClick={onClickFavorites}>
            <img src={changeSvgFavorites}
                 alt="Heard-unliked" />
          </button>}

          <img className={styles.itemContent__img}
               src={img}
               alt={title} />
          <h4 className={styles.itemContent__title}>
            {title}
          </h4>
          <div className={styles.infoItem}>
            <div className={styles.infoItem__price}>
              <p>Price:</p>
              <span>{price} руб.</span>
            </div>
            {
              onPlus && <button className={styles.infoItem__button}
                                onClick={onClickPlus}>
                <img src={changeSvgCart}
                     alt="PlusSvg" />
              </button>
            }
          </div>
        </>
      }
    </div>
  );
};

export default Card;
