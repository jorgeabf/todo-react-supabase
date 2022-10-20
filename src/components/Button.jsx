import styles from "./Button.module.css";

function Button({ onClick, children, color }) {
   if (color === "red")
      return (
         <button
            className={`${styles.btn} ${styles.red}`}
            onClick={onClick}>
            {children}
         </button>
      );

   if (color === "green")
      return (
         <button
            className={`${styles.btn} ${styles.green}`}
            onClick={onClick}>
            {children}
         </button>
      );

   return (
      <button
         className={styles.btn}
         onClick={onClick}>
         {children}
      </button>
   );
}

export default Button;
