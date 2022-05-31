import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <div className="header__logo logoHeader">
            <svg className="logoHeader__img" enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Layer_27"/>
              <g id="Layer_2"/>
              <g id="Layer_3"/>
              <g id="Layer_4"/>
              <g id="Layer_5"/>
              <g id="Layer_6"/>
              <g id="Layer_7"/>
              <g id="Layer_8"/>
              <g id="Layer_9"/>
              <g id="Layer_10"/>
              <g id="Layer_11"/>
              <g id="Layer_12"/>
              <g id="Layer_13"/>
              <g id="Layer_14"/>
              <g id="Layer_15"><path d="M22,13.58V18c0,0.55-0.45,1-1,1H3c-0.55,0-1-0.45-1-1V8c0-1.65,1.35-3,3-3h1.04c0.55,0,1,0.45,1,1   c0,1.1,0.9,2,2,2c0.9901,0,1.84-0.73,1.97-1.7c0.01-0.05,0.04-0.1,0.05-0.15c0.02-0.06,0.03-0.12,0.05-0.17   c0.01-0.01,0.02-0.02,0.02-0.03c0.03-0.05,0.08-0.09,0.12-0.14c0.05-0.06,0.08-0.11,0.14-0.16c0.03-0.02,0.07-0.03,0.11-0.06   c0.07-0.04,0.15-0.08,0.23-0.11c0.04-0.01,0.09-0.01,0.14-0.01c0.08-0.01,0.16-0.03,0.24-0.02h0.03C12.2,5.46,12.25,5.49,12.3,5.51   c0.06,0.0099,0.11,0.02,0.16,0.04l3,1.57l1.86,0.98l0.76,0.4l1.04,0.54c0.28,0.13,0.55,0.29,0.79,0.47   C21.19,10.42,22,11.94,22,13.58z" fill="#189CD8"/>
                <g><path d="M22,14v4c0,0.55-0.45,1-1,1H3c-0.55,0-1-0.45-1-1v-4H22z" fill="#FFA131"/></g>
                <g><path d="M17.32,8.1l-3.61,3.61C13.51,11.9,13.26,12,13,12s-0.51-0.1-0.71-0.29c-0.39-0.39-0.39-1.03,0-1.42    l3.17-3.17L17.32,8.1z" fill="#624F81"/></g>
                <g><path d="M19.91,9.51l-2.2,2.2C17.51,11.9,17.26,12,17,12s-0.51-0.1-0.71-0.29c-0.39-0.39-0.39-1.03,0-1.42    l1.79-1.79l1.04,0.54C19.4,9.17,19.67,9.33,19.91,9.51z" fill="#624F81"/></g>
                <g><rect fill="#624F81" height="2" width="20" x="2" y="14"/></g></g>
              <g id="Layer_16"><g id="Layer_17"/></g>
              <g id="Layer_18"/>
              <g id="Layer_19"/>
              <g id="Layer_20"/>
              <g id="Layer_21"/>
              <g id="Layer_22"/>
              <g id="Layer_23"/>
              <g id="Layer_24"/>
              <g id="Layer_25"/>
              <g id="Layer_26"/></svg>
            <div className="logoHeader__title titleLogo">
              <h1 className="titleLogo__title">street beat</h1>
              <h2 className="titleLogo__subtitle">Only original products</h2>
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
            <h3 className="content__title">
              Все кроссовки
            </h3>
            <div className="content__list">
              <div className="content__item itemContent">
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-1.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>12 199 руб.</span>
                  </div>
                  <svg className="infoItem__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20212V1.66821C7.20212 0.332846 5.13112 0.332846 5.13112 1.66821V5.13122H1.66799C0.33292 5.13122 0.33292 7.20215 1.66799 7.20215H5.13112V10.6652C5.13112 12.0005 7.20212 12.0005 7.20212 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
              <div className="content__item itemContent">
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-2.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Nike Air Max 270
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>12 999 руб.</span>
                  </div>
                  <svg className="infoItem__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20212V1.66821C7.20212 0.332846 5.13112 0.332846 5.13112 1.66821V5.13122H1.66799C0.33292 5.13122 0.33292 7.20215 1.66799 7.20215H5.13112V10.6652C5.13112 12.0005 7.20212 12.0005 7.20212 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
              <div className="content__item itemContent">
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-3.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>8 499 руб.</span>
                  </div>
                  <svg className="infoItem__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20212V1.66821C7.20212 0.332846 5.13112 0.332846 5.13112 1.66821V5.13122H1.66799C0.33292 5.13122 0.33292 7.20215 1.66799 7.20215H5.13112V10.6652C5.13112 12.0005 7.20212 12.0005 7.20212 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
              <div className="content__item itemContent">
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-4.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Кроссовки Puma X Aka Boku Future Rider
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>8 999 руб.</span>
                  </div>
                  <svg className="infoItem__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20212V1.66821C7.20212 0.332846 5.13112 0.332846 5.13112 1.66821V5.13122H1.66799C0.33292 5.13122 0.33292 7.20215 1.66799 7.20215H5.13112V10.6652C5.13112 12.0005 7.20212 12.0005 7.20212 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
              <div className="content__item itemContent">
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-5.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Under Armour Curry 8
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>15 199 руб.</span>
                  </div>
                  <svg className="infoItem__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20212V1.66821C7.20212 0.332846 5.13112 0.332846 5.13112 1.66821V5.13122H1.66799C0.33292 5.13122 0.33292 7.20215 1.66799 7.20215H5.13112V10.6652C5.13112 12.0005 7.20212 12.0005 7.20212 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
              <div className="content__item itemContent">
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-6.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Nike Kyrie 7
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>11 299 руб.</span>
                  </div>
                  <svg className="infoItem__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20212V1.66821C7.20212 0.332846 5.13112 0.332846 5.13112 1.66821V5.13122H1.66799C0.33292 5.13122 0.33292 7.20215 1.66799 7.20215H5.13112V10.6652C5.13112 12.0005 7.20212 12.0005 7.20212 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
              <div className="content__item itemContent">
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-7.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Jordan Air Jordan 11
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>10 799 руб.</span>
                  </div>
                  <svg className="infoItem__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20212V1.66821C7.20212 0.332846 5.13112 0.332846 5.13112 1.66821V5.13122H1.66799C0.33292 5.13122 0.33292 7.20215 1.66799 7.20215H5.13112V10.6652C5.13112 12.0005 7.20212 12.0005 7.20212 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
              <div className="content__item itemContent">
                <img className="itemContent__img" src="../assets/image/sneakers/sneakers-8.png" alt="Sneakers" />
                <h4 className="itemContent__title">
                  Мужские Кроссовки Nike LeBron XVIII
                </h4>
                <div className="itemContent__info infoItem">
                  <div className="infoItem__price">
                    <p>Цена:</p>
                    <span>16 499 руб.</span>
                  </div>
                  <svg className="infoItem__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20212V1.66821C7.20212 0.332846 5.13112 0.332846 5.13112 1.66821V5.13122H1.66799C0.33292 5.13122 0.33292 7.20215 1.66799 7.20215H5.13112V10.6652C5.13112 12.0005 7.20212 12.0005 7.20212 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
