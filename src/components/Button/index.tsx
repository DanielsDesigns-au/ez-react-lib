import React from "react";
import styles from "./Button.module.scss";

export const Button: React.FC<any> = ({ theme, ...props }) => {
  return (
    <a className={`${styles.wrapper} ${theme}`}>
      <button className={styles.btn}>{props.children}</button>
    </a>
  );
};

export default Button;
