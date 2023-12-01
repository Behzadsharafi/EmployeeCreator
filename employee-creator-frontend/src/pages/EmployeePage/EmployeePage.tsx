import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Employee } from "../../scripts/interfaces";
import { Employees } from "../../services/employee-service";
import styles from "./EmployeePage.module.scss";
import EmployeeView from "../../components/EmployeeView/EmployeeView";
import Button from "./../../components/Button/Button";

const EmployeePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<Employee>();

  useEffect(() => {
    if (id) {
      Employees.find(parseInt(id)).then((data) => {
        setEmployee(data);
      });
    }
  }, [id]);

  return (
    <div className={styles.page}>
      <section className={styles.page__topSection}>
        <h2>Employee Details</h2>
        <Button onClick={() => navigate(`/`)} className={styles.button}>
          Back
        </Button>
      </section>

      {employee && <EmployeeView employee={employee} />}
    </div>
  );
};

export default EmployeePage;
