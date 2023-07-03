import src from "../../public/van.svg";

function Van({ engineStatus }) {
  const borderColor = engineStatus ? "green" : "red";
  return (
    <div className={"van"} style={{ borderColor: borderColor }}>
      <img src={src} alt="van image in circle" />
    </div>
  );
}

export default Van;
