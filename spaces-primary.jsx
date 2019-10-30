import Desktop from "./lib/Desktop.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";

const style = {
  padding: "0 12px",
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "16px",
  position: "fixed",
  overflow: "hidden",
  left: "0px",
  top: "0px",
  fontFamily: styles.fontFamily,
  lineHeight: styles.lineHeight,
  fontWeight: styles.fontWeight,
  fontSize: styles.fontSize,
  color: styles.colors.dim
};

export const refreshFrequency = false;

export const command = "./nibar/scripts/spaces-primary.sh";

const lastState = {}
export const render = ({ output }) => {
  const data = Object.assign(lastState, parse(output));

  return (
    <div style={style}>
      <Desktop output={data.desktop} />
    </div>
  );
};

export default null;
