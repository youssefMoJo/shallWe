import "../Styles/CreateEvent.css";
import OrangeSpot from "./OrangeSpot";

const CreateEvent = () => {
  return (
    <div className="CreateEventContainer">
      <OrangeSpot right={false} />
      <div className="CreateEventCopy">
        <div className="CreateEventCopyWhiteSquare">Step 1</div>

        <div className="CreateEventCopyTitle">
          Begin by creating a simple event
        </div>

        <div className="CreateEventCopyDescription">
          All you have to do is answer a few simple questions, when, where & who
          ?
        </div>
      </div>
      <div className="CreateEventGraphics">
        <img
          className="CreateEventGraphics"
          src={require("../Assets/createEvent4.png")}
          alt="CreateEventGraphics"
        />{" "}
      </div>
    </div>
  );
};

export default CreateEvent;
