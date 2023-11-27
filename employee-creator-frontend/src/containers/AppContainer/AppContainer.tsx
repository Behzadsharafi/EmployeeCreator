import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./AppContainer.module.scss";

const AppContainer = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
};

export default AppContainer;
