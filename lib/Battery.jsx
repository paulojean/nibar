import styles from "./styles.jsx";

const get_icon = (percentage, charging) => {
  if (percentage > 95)
    return charging ? ' ' : ' '
  if (percentage > 80)
    return charging ? ' ' : ' '
  if (percentage > 60)
    return charging ? ' ' : ' '
  if (percentage > 40)
    return charging ? ' ' : ' '
  if (percentage > 20)
    return charging ? ' ' : ' '
  else
    return charging ? ' ' : ' '
}

const render = ({ output }) => {
  let charging = output.charging;
  let percentage = output.percentage;
  let icon = get_icon (percentage, charging)
  return (
    <div>
      <div
        style={
          percentage < 20 && charging == false
            ? { color: styles.colors.red }
            : null
        }
      >
        <span>{icon} {percentage}%</span>
      </div>
    </div>
  );
};

export default render;
