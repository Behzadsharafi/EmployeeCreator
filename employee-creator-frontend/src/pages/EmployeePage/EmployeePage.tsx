import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Employee } from "../../scripts/interfaces";
// import { Employees } from "../../services/employee-service";
import styles from "./EmployeePage.module.scss";
import EmployeeView from "../../components/EmployeeView/EmployeeView";
import Button from "./../../components/Button/Button";
import { getEmployeeById } from "../../services/backend-service";

const EmployeePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<Employee>();

  const [loading, setLoading] = useState(true);

  const [errorMess, setErrorMess] = useState("");

  // useEffect(() => {
  //   if (id) {
  //     Employees.find(parseInt(id)).then((data) => {
  //       setEmployee(data);
  //     });
  //   }
  // }, [id]);

  useEffect(() => {
    setLoading(true);
    if (errorMess) {
      setErrorMess("");
    }
    if (id) {
      getEmployeeById(parseInt(id))
        .then((employee) => {
          setEmployee(employee);
        })
        .catch((err) => setErrorMess(err.message))
        .finally(() => setLoading(false));
    } else {
      setErrorMess("There is no ID in URL");
      setLoading(false);
    }
  }, [id]);

  return (
    <div className={styles.page}>
      <section className={styles.page__topSection}>
        <h2>Employee Details</h2>
        <div className={styles.page__topSection__buttons}>
          <Button
            onClick={() => navigate(`/${employee?.id}/edit`)}
            className={styles.button}
          >
            Edit Employee
          </Button>
          <Button onClick={() => navigate(`/`)} className={styles.button}>
            Back
          </Button>
        </div>
      </section>

      {employee && <EmployeeView employee={employee} />}
    </div>
  );
};

export default EmployeePage;
