import { useEffect, useState } from "react";
import styles from "./EmployeeList.module.scss";
// import { Employees } from "../../services/employee-service";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import { Employee } from "./../../scripts/interfaces";
import {
  deleteEmployeeById,
  getAllEmployee,
} from "../../services/backend-service";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMess, setErrorMess] = useState("");

  const [deleteErrorMess, setDeleteErrorMess] = useState("");

  useEffect(() => {
    //Uncomment the following line and save to feed the database
    // people.forEach((person) => createEmployee(person));
    setErrorMess(errorMess ? "" : errorMess);
    setLoading(true);
    getAllEmployee()
      .then((res) => {
        setEmployees(res);
      })
      .catch((err) => setErrorMess(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: Employee["id"]) => {
    const currentEmployees = employees;
    setEmployees((prevEmployees) => {
      // Save the current state in a constant

      // Optimistically update the UI by filtering out the employee with the given id
      if (prevEmployees) {
        return prevEmployees.filter((employee) => employee.id !== id);
      } else {
        return null;
      }
    });

    try {
      setDeleteErrorMess(deleteErrorMess ? "" : deleteErrorMess);

      // Attempt to delete the employee on the server
      await deleteEmployeeById(id);

      console.log(`Employee ${id} is deleted`);
    } catch (error) {
      // If the network request fails, handle the error
      setDeleteErrorMess((error as Error).message);
      console.error(error);

      // Revert the UI back to its previous state using the saved constant
      setEmployees(currentEmployees);
      alert("There was a problem in the server. Could not delete.");
    }
  };

  return (
    <div className={styles.list}>
      {loading && (
        <p className={styles.loading}>
          Loading...
          <br />
          Please allow up to 5 minutes for the initial load, as the backend may
          be starting from sleep mode.
        </p>
      )}
      {!loading && employees && (
        <div>
          {employees?.map((employee) => (
            <EmployeeCard
              handleDelete={handleDelete}
              key={employee.id}
              employee={employee}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
