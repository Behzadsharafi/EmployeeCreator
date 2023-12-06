import { useContext, useEffect, useState } from "react";
import styles from "./EmployeeList.module.scss";
// import { Employees } from "../../services/employee-service";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import { people } from "../../services/db-seeder";
import { Employee } from "./../../scripts/interfaces";
import {
  createEmployee,
  deleteEmployeeById,
  getAllEmployee,
} from "../../services/backend-service";
import {
  RequestNumContext,
  RequestNumContextType,
} from "../../context/RequestNumContextProvider";
// import {
//   RequestNumContext,
//   RequestNumContextType,
// } from "../../context/RequestNumContextProvider.tsx";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMess, setErrorMess] = useState("");

  const [deleteErrorMess, setDeleteErrorMess] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  // const { requestNum } = useContext(RequestNumContext) as RequestNumContextType;

  // useEffect(() => {
  // Employees.get().then((data) => setEmployees(data));
  // people.forEach((person) => Employees.createEmployee(person));
  // }, []);

  useEffect(() => {
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
    setLoading(true);
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
    } finally {
      setDeleteLoading(false);
    }
  };

  // const handleDelete = async (id: Employee["id"]): Promise<void> => {
  //   console.log(id);
  //   const currentEmployees = employees;
  //   try {
  //     setEmployees((prevEmployees) => {
  //       if (prevEmployees) {
  //         return prevEmployees.filter((employee) => employee.id !== id);
  //       } else {
  //         return null;
  //       }
  //     });
  //     const response =  await deleteEmployeeById(id);
  //     if (response.status === 204) {
  //       console.log("Employee deleted successfully!");
  //     } else {
  //       console.error("Failed to delete employee. Reverting state.");
  //       setEmployees(currentEmployees);
  //     }
  //   } catch (error: any) {
  //     console.error("An error occurred:", error.message);
  //     setEmployees(currentEmployees);
  //   }
  // };

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
