import { Employee } from "../../scripts/interfaces";
import styles from "./EmployeeCard.module.scss";
import { useNavigate } from "react-router-dom";
import Paper from "./../Paper/Paper";
import { useEffect, useState } from "react";
import { Employees } from "../../services/employee-service";

interface Props {
  employee: Employee;
  handleDelete: any;
}

const EmployeeCard = ({ employee, handleDelete }: Props) => {
  const navigate = useNavigate();
  const [deleteErrorMess, setDeleteErrorMess] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);

  // const handleDelete = (id: Employee["id"]) => {
  //   setDeleteLoading(true);
  //   try {
  //     setDeleteErrorMess(deleteErrorMess ? "" : deleteErrorMess);
  //     Employees.delete(id);
  //     console.log(`Employee ${id} is deleted`);
  //   } catch (error) {
  //     setDeleteErrorMess((error as Error).message);
  //     console.error(error);
  //   } finally {
  //     setDeleteLoading(false);
  //   }
  // };

  const onDelete = (id: Employee["id"]) => {
    handleDelete(id);
  };

  return (
    <Paper className={styles.card}>
      <section className={styles.card__info}>
        <h4>
          {employee.firstName} {employee.middleName} {employee.lastName}
        </h4>
        <p>{employee.contractType}</p>
        <p>{employee.email}</p>
      </section>
      <section className={styles.card__actions}>
        <p onClick={() => navigate(`/${employee.id}`)}>View</p>
        <p onClick={() => navigate(`/${employee.id}/edit`)}>Edit</p>
        <p
          onClick={() => {
            onDelete(employee.id);
          }}
        >
          Delete
        </p>
      </section>
    </Paper>
  );
};

export default EmployeeCard;
