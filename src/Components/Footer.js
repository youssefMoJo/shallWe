import "../Styles/Footer.css";
import Email from "./Email";
import Rights from "./Rights";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="FooterGraphicsContainer">
        <img
          className="FooterGraphics"
          src={require("../Assets/footer.png")}
          alt="FooterGraphics"
        />{" "}
      </div>
      <div className="footerTexts">
        <h1 className="text1">Did we catch your attention ?</h1>
        <p className="text2">
          We plan to start testing soon, type your email address to be updated
          with our progress
        </p>
        <h2 className="text3">Don’t worry, we won’t spam</h2>
        <Email />
        <Rights />
      </div>
    </div>
  );
};

export default Footer;
