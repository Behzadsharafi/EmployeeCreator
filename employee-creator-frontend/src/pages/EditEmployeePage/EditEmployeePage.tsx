import styles from "./EditEmployee.module.scss";
import EmployeeForm from "./../../components/EmployeeForm/EmployeeForm";
import Button from "../../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Employee } from "../../scripts/interfaces";
import { getEmployeeById } from "../../services/backend-service";
// import { Employees } from "../../services/employee-service";

const AddEmployeePage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState<Employee>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [errorMess, setErrorMess] = useState("");

  // useEffect(() => {
  //   setLoading(true);
  //   if (errorMess) {
  //     setErrorMess("");
  //   }
  //   if (id) {
  //     Employees.find(parseInt(id))
  //       .then((employee) => setEmployee(employee))
  //       .catch((e) => setErrorMess(e.message))
  //       .finally(() => setLoading(false));
  //   } else {
  //     setErrorMess("There is no ID in URL");
  //     setLoading(false);
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
        <Button onClick={() => navigate(`/`)} className={styles.button}>
          Back
        </Button>
      </section>

      {!loading && employee && <EmployeeForm employee={employee} />}
    </div>
  );
};

export default AddEmployeePage;
