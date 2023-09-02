import "../Styles/OrangeSpot.css";

const OrangeSpot = (props) => {
  return (
    <div
      style={{ marginLeft: props.right ? "95%" : "-95%" }}
      className="OrangeSpot"
    ></div>
  );
};

export default OrangeSpot;
