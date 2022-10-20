import styles from "./Input.module.css";

function Input({
   type,
   name,
   placeholder,
   onChange,
   value,
}) {
   return (
      <input
         className={styles.input}
         type={type}
         name={name}
         placeholder={placeholder}
         onChange={onChange}
         value={value}
      />
   );
}

export default Input;
