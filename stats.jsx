import DateTime from "./lib/DateTime.jsx";
import Battery from "./lib/Battery.jsx";
import Wifi from "./lib/Wifi.jsx";
import Dnd from "./lib/Dnd.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";

const style = {
  display: "grid",
  padding: "0 12px",
  gridAutoFlow: "column",
  gridGap: "16px",
  position: "fixed",
  overflow: "hidden",
  right: "0px",
  top: "0px",
  color: styles.colors.dim,
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: styles.lineHeight,
  fontWeight: styles.fontWeight
};

const lastState = {}

export const refreshFrequency = 10000;

export const command = "./nibar/scripts/stats.sh";

export const render = ({ output }) => {
  const data = Object.assign(lastState, parse(output));
  return (
    <div style={style}>
      <Dnd output={data.dnd} />
      <Wifi output={data.wifi} />
      <Battery output={data.battery} />
      <DateTime output={data.datetime} />
    </div>
  );
};

export default null;
