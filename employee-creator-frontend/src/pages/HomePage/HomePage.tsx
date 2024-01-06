import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <section className={styles.page__topSection}>
        <h2>Employees' List</h2>
        <Button onClick={() => navigate(`/add`)} className={styles.button}>
          Add New Employee
        </Button>
      </section>

      <EmployeeList />
    </div>
  );
};

export default HomePage;
