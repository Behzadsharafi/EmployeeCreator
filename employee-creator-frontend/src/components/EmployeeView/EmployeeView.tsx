import { Employee } from "../../scripts/interfaces";
import styles from "./EmployeeView.module.scss";
import Paper from "../Paper/Paper";

interface EmployeeProps {
  employee: Employee;
}

const dateOption: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const EmployeeView = ({ employee }: EmployeeProps) => {
  return (
    <Paper className={styles.card}>
      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Full Name:</span>{" "}
        {employee?.firstName} {employee?.middleName} {employee?.lastName}
      </p>
      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Email:</span>{" "}
        {employee?.email}
      </p>
      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Phone:</span>{" "}
        {employee?.phone}
      </p>
      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Address:</span>{" "}
        {employee?.address}
      </p>
      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Employment Type:</span>{" "}
        {employee?.employmentType}
      </p>

      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Start Date:</span>{" "}
        {employee?.startDate.toLocaleDateString(undefined, dateOption)}
      </p>
      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Finish Date:</span>{" "}
        {employee?.finishDate ? employee.finishDate.toDateString() : "N/A"}
      </p>
      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Contract Type:</span>{" "}
        {employee?.contractType}
      </p>
      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Hours Per Week:</span>{" "}
        {employee?.hoursPerWeek}
      </p>
      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Duration:</span>{" "}
        {employee?.duration} Months
      </p>
    </Paper>
  );
};

export default EmployeeView;
