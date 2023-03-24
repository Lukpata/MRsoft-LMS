import { useCountdown } from "../hooks/useCountdown";

export default function Countdown({ targetDate, onTimeout }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    // Emit onTimeout event to parent component
    onTimeout(true);
    return <p>Time's up!</p>;
  }
  return (
    <p>
      Time Left
      <span>
        {" "}
        {minutes} : {seconds}
      </span>
    </p>
  );
}
