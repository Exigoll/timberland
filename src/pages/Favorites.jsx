import React from "react";

import AppContext from "../context";
import Card from "../components/Card";

const Favorites = () => {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <main>
      <section className="content">
        <div className="content__wrapper">
          <h3 className="content__title">
            Мои закладки
          </h3>
        </div>
        <div className="content__list">
          {favorites.map((item, index) =>
            <Card key={index}
                  favorites={true}
                  onFavorite={onAddToFavorite}
                  {...item}
            />,
          )}
        </div>
      </section>
    </main>
  );
};

export default Favorites;
