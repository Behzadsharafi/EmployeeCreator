import styles from "./Button.module.scss";
import { MouseEventHandler } from "react";

interface Props {
  children: any;
  className: any;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const Button = ({ children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
