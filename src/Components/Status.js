import "../Styles/Status.css";
import OrangeSpot from "./OrangeSpot";

const Status = () => {
  return (
    <div className="StatusContainer">
      <OrangeSpot right={false} />
      <div className="StatusCopy">
        <div className="StatusCopyWhiteSquare">Step 3</div>

        <div className="StatusCopyTitle">Check Real time Status</div>

        <div className="StatusCopyDescription">
          Curiosity is Killing you ? Hangout Bot always keeps you informed about
          your friends’ status, whether they are still scheduling or if they
          decided not to come
        </div>
      </div>
      <div className="StatusGraphics">
        <img
          className="StatusGraphics"
          src={require("../Assets/status2.png")}
          alt="StatusGraphics"
        />{" "}
      </div>
    </div>
  );
};

export default Status;
