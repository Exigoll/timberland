import "./scss/app.scss";
import logo from "./assets/svgicons/logo.svg";
import cart from "./assets/svgicons/cart.svg";
import favorites from "./assets/svgicons/favorites.svg";
import user from "./assets/svgicons/user.svg";


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <div className="header__logo logoHeader">
            <img className="logoHeader__img" src={logo}></img>
            <div className="logoHeader__title titleLogo">
              <h1 className="titleLogo__title">street beat</h1>
              <h2 className="titleLogo__subtitle">Only original products</h2>
            </div>
          </div>
          <div className="header__menu menuHeader">
            <button className="menuHeader__cart" type="submit">
              <img src={cart}></img>
              <span>12 499 руб.</span>
            </button>
            <button className="menuHeader__favorites" type="submit">
              <img src={favorites}></img>
            </button>
            <button className="menuHeader__user" type="submit">
              <img src={user}></img>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
