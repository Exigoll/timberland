import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="overlay">
          <div className="drawer">
            <h3 className="drawer__title">Корзина</h3>
            <div className="drawer__wrapper">
              <div className="drawer__list drawerList">
                <div className="drawerList__item">
                  <img className="drawerList__img"
                       src="./assets/image/sneakers/sneakers-1.png"
                       alt="Sneakers" />
                  <div className="drawerList__info">
                    <h4 className="drawerList__title">
                      Мужские Кроссовки Nike Air Max 270
                    </h4>
                    <p className="drawerList__price">
                      12 999 руб.
                    </p>
                  </div>
                  <svg className="drawerList__closed"
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
              </div>
              <div className="drawer__total totalDrawer">
                <div className="totalDrawer__info">
                  <p>Итого:</p>
                  <div></div>
                  <span>21 498 руб.</span>
                </div>
                <div className="totalDrawer__info">
                  <p>Налог 5%:</p>
                  <div></div>
                  <span>1074 руб.</span>
                </div>
                <button className="totalDrawer__btn">
                  <p>Оформить заказ</p>
                  <svg width="16"
                       height="14"
                       viewBox="0 0 16 14"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" />
                    <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <header className="header">
          <div className="header__logo logoHeader">
            <img className="logoHeader__img" src="../assets/svgicons/logo.svg" alt="Logo" />
            <div className="logoHeader__wrapper">
              <h1 className="logoHeader__title">street beat</h1>
              <h2 className="logoHeader__subtitle">Only original products</h2>
            </div>
          </div>
          <div className="header__menu menuHeader">
            <div className="menuHeader__cart">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                  stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                  stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                  stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>12 499 руб.</span>
            </div>
            <div className="menuHeader__favorites">
              <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                  fill="#9B9B9B" />
              </svg>
            </div>
            <div className="menuHeader__user">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
                      fill="#9B9B9B" />
              </svg>
            </div>
          </div>
        </header>
        <main>
          <section className="content">
            <div className="content__wrapper">
              <h3 className="content__title">
                Все кроссовки
              </h3>
              <div className="content__search searchContent">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                    stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            <div className="content__list">
              <div className="content__item itemContent">
                <div className="itemContent__favorite">
                  <img src="./assets/svgicons/heart-unliked.svg" alt="Heard-unliked" />
                </div>
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-1.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>12 199 руб.</span>
                  </div>
                  <img className="infoItem__img" src="./assets/svgicons/btn-plus.svg" alt="PlusSvg" />
                </div>
              </div>
              <div className="content__item itemContent">
                <div className="itemContent__favorite">
                  <img src="./assets/svgicons/heart-unliked.svg" alt="Heard-unliked" />
                </div>
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-2.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Nike Air Max 270
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>12 999 руб.</span>
                  </div>
                  <img className="infoItem__img" src="./assets/svgicons/btn-plus.svg" alt="PlusSvg" />
                </div>
              </div>
              <div className="content__item itemContent">
                <div className="itemContent__favorite">
                  <img src="./assets/svgicons/heart-unliked.svg" alt="Heard-unliked" />
                </div>
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-3.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>8 499 руб.</span>
                  </div>
                  <img className="infoItem__img" src="./assets/svgicons/btn-plus.svg" alt="PlusSvg" />
                </div>
              </div>
              <div className="content__item itemContent">
                <div className="itemContent__favorite">
                  <img src="./assets/svgicons/heart-unliked.svg" alt="Heard-unliked" />
                </div>
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-4.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Кроссовки Puma X Aka Boku Future Rider
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>8 999 руб.</span>
                  </div>
                  <img className="infoItem__img" src="./assets/svgicons/btn-plus.svg" alt="PlusSvg" />
                </div>
              </div>
              <div className="content__item itemContent">
                <div className="itemContent__favorite">
                  <img src="./assets/svgicons/heart-unliked.svg" alt="Heard-unliked" />
                </div>
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-5.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Under Armour Curry 8
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>15 199 руб.</span>
                  </div>
                  <img className="infoItem__img" src="./assets/svgicons/btn-plus.svg" alt="PlusSvg" />
                </div>
              </div>
              <div className="content__item itemContent">
                <div className="itemContent__favorite">
                  <img src="./assets/svgicons/heart-unliked.svg" alt="Heard-unliked" />
                </div>
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-6.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Nike Kyrie 7
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>11 299 руб.</span>
                  </div>
                  <img className="infoItem__img" src="./assets/svgicons/btn-plus.svg" alt="PlusSvg" />
                </div>
              </div>
              <div className="content__item itemContent">
                <div className="itemContent__favorite">
                  <img src="./assets/svgicons/heart-unliked.svg" alt="Heard-unliked" />
                </div>
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-7.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Jordan Air Jordan 11
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>10 799 руб.</span>
                  </div>
                  <img className="infoItem__img" src="./assets/svgicons/btn-plus.svg" alt="PlusSvg" />
                </div>
              </div>
              <div className="content__item itemContent">
                <div className="itemContent__favorite">
                  <img src="./assets/svgicons/heart-unliked.svg" alt="Heard-unliked" />
                </div>
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-8.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Nike LeBron XVIII
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>16 499 руб.</span>
                  </div>
                  <img className="infoItem__img" src="./assets/svgicons/btn-plus.svg" alt="PlusSvg" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
    ;
}

export default App;
