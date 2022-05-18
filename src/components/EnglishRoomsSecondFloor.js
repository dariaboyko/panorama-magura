import classes from "./css/Rooms.module.css";
import classNames from "classnames";
import ImageGallery from "react-image-gallery";
import ContentPageAnimation from "./ContentPageAnimation";
function EnglishRoomsSecondFloor() {
  const images = [
    {
      original: require("../img/gallery/coupleroom2.png"),
    },
    {
      original: require("../img/gallery/coupleroom.png"),
    },
    {
      original: require("../img/gallery/2placesroom.png"),
    },
    {
      original: require("../img/gallery/2placesroomcloset.png"),
    },
    {
      original: require("../img/gallery/3placesroom.png"),
    },
    {
      original: require("../img/gallery/wc.png"),
    },
    {
      original: require("../img/gallery/wc2.png"),
    },
  ];
  return (
    <div className={classes.secondFloorBackground}>
      <ContentPageAnimation>
        <div className={classes.contentWrapper}>
          <p
            className={classNames(
              classes.mainText,
              classes.firstFloorDescription
            )}
          >
            On the second floor there are 2 double rooms (double or 2 single
            rooms) beds, wardrobe); triple room (3 single beds, wardrobe for
            clothes); 1 bathroom (shower, toilet, washbasin, hair dryer).
            Heating: autonomous water. Water supply: hot and cold water
            constantly.
          </p>
          <section className={classes.gallery}>
            <ImageGallery items={images} />
          </section>
        </div>
      </ContentPageAnimation>
    </div>
  );
}
export default EnglishRoomsSecondFloor;
