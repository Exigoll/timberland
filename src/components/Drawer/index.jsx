import React from "react";
import axios from "axios";

import Info from "../Info";

import styles from "./Drawer.module.scss";
import { useCart } from "../../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onCloseCart, onRemove, items = [] }) => {
  const { cartItems, setCartItems, productPrice } = useCart();
  const [ orderId, setOrderId ] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const taxPrice = Math.round(productPrice / 100 * 5);
  const totalPrice = productPrice + taxPrice;


  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("https://629c44cce9358232f758582f.mockapi.io/orders", { items: cartItems });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("https://629c44cce9358232f758582f.mockapi.io/cart/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert("Возникла ошибка при создании заказа...");
    }
    setIsLoading(false);
  };

  const titleInfo = isOrderComplete
    ? "Заказ оформлен"
    : "Пустая корзина";
  const descriptionInfo = isOrderComplete
    ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
    : "Добавьте хотя бы один товар";
  const imageInfo = isOrderComplete
    ? "assets/image/check.png"
    : "assets/image/empty.png"

  const elementCart =
    <div className={styles.drawer__cart}>
      <div className={styles.drawerList}>
        {items.map((obj) => (
          <div key={obj.id}
               className={styles.drawerList__item}>
            <img className={styles.drawerList__img}
                 src={obj.img}
                 alt="Glasses" />
            <div className={styles.drawerList__info}>
              <h4 className={styles.drawerList__title}>
                {obj.title}
              </h4>
              <p>
                {obj.price} руб.
              </p>
            </div>
            <svg className={styles.drawerList__delete}
                 onClick={() => onRemove(obj.id)}
                 width="32"
                 height="32"
                 viewBox="0 0 32 32"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
              <path
                d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                fill="#B5B5B5" />
            </svg>
          </div>
        ))}
      </div>
      <div className={styles.totalDrawer}>
        <div className={styles.totalDrawer__info}>
          <p>Стоимость товара:</p>
          <div></div>
          <span>{productPrice} руб.</span>
        </div>
        <div className={styles.totalDrawer__info}>
          <p>Стоимость доставки:</p>
          <div></div>
          <span>{taxPrice} руб.</span>
        </div>
        <div className={styles.totalDrawer__info}>
          <p>Итого:</p>
          <div></div>
          <span>{totalPrice} руб.</span>
        </div>
        <button className={styles.totalDrawer__btn}
                onClick={onClickOrder}
                disabled={isLoading}>
          <p>Оформить заказ</p>
          <svg width="16"
               height="14"
               viewBox="0 0 16 14"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H14.7143"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
            <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>;
  const elementButtonClosedCart =
    <svg className={styles.drawer__buttonClosedCart}
         onClick={onCloseCart}
         viewBox="0 0 32 32"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5"
            y="0.5"
            width="31"
            height="31"
            rx="7.5"
            fill="white"
            stroke="#DBDBDB" />
      <path
        d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
        fill="#B5B5B5" />
    </svg>;

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawer__title}>
          <h3>Корзина</h3>
          {elementButtonClosedCart}
        </div>
        <>
          {items.length > 0
            ? elementCart
            : <Info title={titleInfo}
                    description={descriptionInfo}
                    image={imageInfo}
          />}
        </>
      </div>
    </div>
  );
};

export default Drawer;
