import styles from "./styles.jsx";

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "12px"
};

const desktopStyle = {
  width: "2ch"
};

const renderSpace = ({index, focused, windows}, idx) => {
  let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
  let hasWindows = windows && windows.length > 0;
  if (!!focused) {
    contentStyle.color = styles.colors.fg;
  }
  return (
    <div style={contentStyle}>
      {idx + 1}
      {hasWindows ? "*" : " "}
    </div>
  );
};

const renderDisplay = (spaces, index) => {
  const spacesToDisplay = spaces.map(renderSpace)

  return (
    <div style={containerStyle}>
      
      {spacesToDisplay}
    </div>
  );
}

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  const displays = output
        .spaces
        .sort((a, b) => a[0].display - b[0].display)
        .map(renderDisplay)

  return <div style={containerStyle}>{displays}</div>;
};

export default render;
