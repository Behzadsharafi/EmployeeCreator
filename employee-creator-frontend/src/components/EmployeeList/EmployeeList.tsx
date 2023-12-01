import { useEffect, useReducer, useState } from "react";
import styles from "./EmployeeList.module.scss";
import { Employees } from "../../services/employee-service";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import { people } from "../../services/db-seeder";
import { Employee } from "./../../scripts/interfaces";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<any[] | null>(null);
  useEffect(() => {
    Employees.get().then((data) => setEmployees(data));
    // people.forEach((person) => Employees.createEmployee(person));
  }, []);

  const handleDelete = (id: Employee["id"]): void => {
    setEmployees((prevEmployees) => {
      if (prevEmployees) {
        return prevEmployees.filter((employee) => employee.id !== id);
      } else {
        return null;
      }
    });
    Employees.delete(id);
    //This should change so when an error occurs the state goes back to previous state
  };

  return (
    <div className={styles.list}>
      {employees?.map((employee) => (
        <EmployeeCard
          handleDelete={handleDelete}
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
