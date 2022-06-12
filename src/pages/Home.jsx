import React from "react";

import Card from "../components/Card";

const Home = ({
                items,
                searchValue,
                onChangeSearchInput,
                onClickSearchClear,
                onAddToFavorite,
                onAddToCart,
                isLoading,
              }) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading
      ? [...Array(8)]
      : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <main>
      <section className="content">
        <div className="content__wrapper">
          <h3 className="content__title">
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все очки"}
          </h3>
          <div className="searchContent">
            <img className="searchContent__search"
                 src="./assets/svgicons/search.svg"
                 alt="SearchIcon" />
            <input onChange={onChangeSearchInput}
                   value={searchValue}
                   type="text"
                   placeholder="Search..."
                   maxLength={40} />
            {searchValue &&
              <img className="searchContent__close"
                   onClick={onClickSearchClear}
                   src="./assets/svgicons/close.svg"
                   alt="CloseIcon" />}
          </div>
        </div>
        <div className="content__list">
          {renderItems()}
        </div>
      </section>
    </main>
  );
};

export default Home;
