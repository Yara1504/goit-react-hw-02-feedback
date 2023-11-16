import css from "./Notification.module.css"

export default function Notification({ message }) {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
  }