import styles from "./AddEmployeePage.module.scss";
import EmployeeForm from "./../../components/EmployeeForm/EmployeeForm";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const AddEmployeePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <section className={styles.page__topSection}>
        <h2>Employee Details</h2>
        <Button
          onClick={() => navigate(`/`)}
          className={styles.page__topSection__button}
        >
          Back
        </Button>
      </section>

      <EmployeeForm />
    </div>
  );
};

export default AddEmployeePage;
