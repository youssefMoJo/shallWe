import "../Styles/Chatting.css";
import OrangeSpot from "./OrangeSpot";

const Chatting = () => {
  return (
    <div className="ChattingContainer">
      <div className="ChattingGraphics">
        <img
          className="ChattingGraphics"
          src={require("../Assets/chatting3.png")}
          alt="ChattingGraphics"
        />{" "}
      </div>
      <div className="ChattingCopy">
        <div className="ChattingCopyWhiteSquare">Step 4</div>

        <div className="ChattingCopyTitle">Discussion Time</div>

        <div className="ChattingCopyDescription">
          Hangout Bot will suggest free time windows that match every member’s
          schedule and create a group chat for you to vote and discuss your
          plans
        </div>
      </div>
      <OrangeSpot right={true} />
    </div>
  );
};

export default Chatting;
