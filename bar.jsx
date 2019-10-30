import styles from "./lib/styles.jsx";
import parse from "./lib/parse.jsx";

const style = {
  background: styles.colors.bg,
  cursor: "default",
  userSelect: "none",
  zIndex: "-1",
  width: "100%",
  height: "20px",
  position: "fixed",
  overflow: "hidden",
  top: "0px",
  right: "0px",
  left: "0px"
};

export const refreshFrequency = 1000000;

export const command = "./nibar/scripts/bar.sh";

export const render = ({ output }) => {
  const data = parse(output);
  const colors = (data && data.colors) || {}
  return <div style={Object.assign({}, style, colors)} />;
};

export default null;
