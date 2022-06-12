import React from "react";
import AppContext from "../context";

import styles from "./Drawer/Drawer.module.scss";

const Info = ({ title, description, image }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className={`${styles.drawer__empty} ${styles.emptyCart}`}>
      <img className={styles.emptyCart__img}
           src={image}
           alt="Empty Cart" />
      <h4 className={styles.emptyCart__title}>{title}</h4>
      <p className={styles.emptyCart__text}>
        {description}
      </p>
      <button className={styles.totalDrawer__btn}
              onClick={() => setCartOpened(false)}>
        <svg width="16"
             height="14"
             viewBox="0 0 16 14"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7144 7L1.00007 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p>Вернуться назад</p>
      </button>
    </div>
  );
};

export default Info;
