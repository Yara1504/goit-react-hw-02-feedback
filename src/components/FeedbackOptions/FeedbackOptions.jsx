import css from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.listFeedback}>
      {options.map(option => (
        <li key={option}>
          <button
            id={option}
            onClick={onLeaveFeedback}
            className={css.btnFeedback}
          >{option}</button>
        </li>
      ))}
    </ul>
  );
}