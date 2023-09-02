import "../Styles/AIChatingWithFriends.css";
import OrangeSpot from "./OrangeSpot";

const AIChatingWithFriends = () => {
  return (
    <div className="AIChatingWithFriendsContainer">
      <div className="AIChatingWithFriendsGraphics">
        <img
          className="AIChatingWithFriendsGraphics"
          src={require("../Assets/AIChatingWithFriends.gif")}
          alt="AIChatingWithFriendsGraphics"
        />{" "}
      </div>
      <div className="AIChatingWithFriendsCopy">
        <div className="AIChatingWithFriendsCopyWhiteSquare">Step 2</div>

        <div className="AIChatingWithFriendsCopyTitle">
          Invite Your Friends...
        </div>

        <div className="AIChatingWithFriendsCopyDescription">
          Hangout Bot will notify every invited member individually and let them
          add their schedule and then finds out suitable time windows for your
          event
        </div>
      </div>
      <OrangeSpot right={true} />
    </div>
  );
};

export default AIChatingWithFriends;
