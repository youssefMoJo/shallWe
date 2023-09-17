import "../Styles/Hero.css";
import OrangeSpot from "./OrangeSpot";

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo(0, document.documentElement.scrollHeight);
  };

  return (
    <div className="HeroContainer">
      <div className="HeroGraphics">
        <img
          className="HeroGraphics"
          src={require("../Assets/hero.png")}
          alt="HeroGraphics"
        />{" "}
      </div>
      <div className="HeroCopy">
        <div className="HeroCopyWhiteSquare">Schedule Less.. Hangout More</div>
        <div className="HeroCopyTitle">
          Your Go to AI Solution <br></br> for more hangouts
        </div>
        <div className="HeroCopyTitle">
          <button className="signUpButton" onClick={scrollToBottom}>
            Sign Up
          </button>
        </div>
      </div>
      <OrangeSpot right={true} />
    </div>
  );
};

export default Hero;
