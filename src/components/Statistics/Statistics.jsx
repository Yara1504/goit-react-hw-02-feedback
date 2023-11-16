import css from "./Statistics.module.css"

export default function Statistics({ good, neutral, bad, total, countPositiveFeedbackPercentage }) {
    return (
            <ul className={css.static}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {countPositiveFeedbackPercentage}</li>
        </ul>
    );
}