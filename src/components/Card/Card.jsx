import styles from "./Card.module.scss";

const Card = () => {
    return (
      <div className={styles.itemContent}>
        <div className={styles.itemContent__favorite}>
          <img src="./assets/svgicons/heart-unliked.svg"
               alt="Heard-unliked" />
        </div>
        <img className={styles.itemContent__img}
             src="../assets/image/sneakers/sneakers-1.png"
             alt="Sneakers" />
        <h4 className={styles.itemContent__title}>
          Мужские Кроссовки Nike Blazer Mid Suede
        </h4>
        <div className={styles.infoItem}>
          <div className={styles.infoItem__price}>
            <p>Price:</p>
            <span>12 199 руб.</span>
          </div>
          <img className={styles.infoItem__img}
               src="./assets/svgicons/btn-plus.svg"
               alt="PlusSvg" />
        </div>
      </div>
    );
}

export default Card;
