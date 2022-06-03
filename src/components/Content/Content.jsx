import styles from "./Content.module.scss";
import Card from "../Card/Card";
import Search from "../Search/Search";

const Content = () => {
    return (
      <main>
        <section className={styles.content}>
          <div className={styles.content__wrapper}>
            <h3 className={styles.content__title}>
              All sneakers
            </h3>
            <Search />
          </div>
          <div className={styles.content__list}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    );
}

export default Content;
