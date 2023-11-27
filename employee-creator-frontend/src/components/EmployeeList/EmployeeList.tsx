import { useEffect, useState } from "react";
import styles from "./EmployeeList.module.scss";
import { Employees } from "../../services/employee-service";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<any[] | null>(null);

  useEffect(() => {
    Employees.get().then((data) => setEmployees(data));
  }, []);

  return <div>EmployeeList</div>;
};

export default EmployeeList;
