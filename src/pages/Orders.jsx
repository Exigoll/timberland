import React from "react";
import axios from "axios";

import Card from "../components/Card";

const Orders = () => {
 const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://629c44cce9358232f758582f.mockapi.io/orders");
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Возникла ошибка при создании заказа");
        console.error(error);
      }
    })();
  }, []);

  return (
    <main>
      <section className="content">
        <div className="content__wrapper">
          <h3 className="content__title">
            Мои заказы
          </h3>
        </div>
        <div className="content__list">
          {(isLoading ? [...Array(8)] : orders).map((item, index) =>
            <Card key={index} loading={isLoading} {...item} />,
          )}
        </div>
      </section>
    </main>
  );
};

export default Orders;
