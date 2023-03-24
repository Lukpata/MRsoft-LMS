import styles from "./Button.module.css";

export default function Button({
  type = "primary",
  variant = "primary",
  onClick,
  children,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles[variant]}
      {...props}
    >
      {children}
    </button>
  );
}
