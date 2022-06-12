import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import AppContext from "./context";

import "./scss/app.scss";

import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse,
          itemsResponse] = await Promise.all([
          axios.get("https://629c44cce9358232f758582f.mockapi.io/cart"),
          axios.get("https://629c44cce9358232f758582f.mockapi.io/favorites"),
          axios.get("https://629c44cce9358232f758582f.mockapi.io/items"),
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Возникла ошибка");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onClickSearchClear = () => setSearchValue("");

  const onClickCart = () => setCartOpened(true);
  const onCloseCart = () => setCartOpened(false);
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://629c44cce9358232f758582f.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post("https://629c44cce9358232f758582f.mockapi.io/cart", obj);
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id,
            };
          }
          return item;
        }));
      }
    } catch (error) {
      alert("Возникла ошибка");
      console.error(error);
    }
  };
  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://629c44cce9358232f758582f.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert("Возникла ошибка");
    }
  };
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://629c44cce9358232f758582f.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post("https://629c44cce9358232f758582f.mockapi.io/favorites", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper">
        <div className="container">
          {cartOpened && (<Drawer onCloseCart={onCloseCart}
                                  items={cartItems}
                                  onRemove={onRemoveItem} />)
          }
          <Header onClickCart={onClickCart} />
          <Routes>
            <Route path="/"
                   exact
                   element={
                     <Home
                       items={items}
                       cartItems={cartItems}
                       searchValue={searchValue}
                       onChangeSearchInput={onChangeSearchInput}
                       onClickSearchClear={onClickSearchClear}
                       onAddToFavorite={onAddToFavorite}
                       onAddToCart={onAddToCart}
                       isLoading={isLoading}
                     />}
            />
            <Route path="/favorites"
                   exact
                   element={<Favorites />}
            />
            <Route path="/orders"
                   exact
                   element={<Orders />}
            />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
