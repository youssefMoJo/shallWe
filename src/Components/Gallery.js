import "../Styles/Gallery.css";
import OrangeSpot from "./OrangeSpot";

const Gallery = () => {
  return (
    <div className="GalleryContainer">
      <OrangeSpot right={false} />
      <div className="GalleryCopy">
        <div className="GalleryCopyWhiteSquare">Step 5</div>

        <div className="GalleryCopyTitle">Check Real time Gallery</div>

        <div className="GalleryCopyDescription">
          Hangout Bot allows all users to import their event related media and
          stores them for later access
        </div>
      </div>
      <div className="GalleryGraphics">
        <img
          className="GalleryGraphics"
          src={require("../Assets/gallery3.png")}
          alt="GalleryGraphics"
        />{" "}
      </div>
    </div>
  );
};

export default Gallery;
