import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.content__title}>Employee Management System</h1>
      </div>
    </div>
  );
};

export default Header;
